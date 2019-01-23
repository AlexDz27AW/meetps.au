const Path = require("path");

const Webpack = require("webpack");

const HtmlPlugin = require("html-webpack-plugin");

const { VueLoaderPlugin } = require("vue-loader");

const envType = process.env.NODE_ENV || "development";
const endpoint = process.env.MP_CONFIG || envType;

const configPath = Path.resolve(__dirname, "..", "src", "configs", `${endpoint}.js`);

console.info(configPath);
const config = require(configPath);

// NB: cleaning paths outside of the current directory doesn't work.
// But repopulating outside things seems fine, though, hmmm..
const outPath = Path.resolve(__dirname, "..", "..", "register");

const entry = "index.js";

const common = {

    "entry": `./src/${entry}`,

    "output": {
        "path": outPath,
        "publicPath": (config.baseURL || "/"),
        "filename": "./js/[name].[contenthash].js",
    },

    "optimization": {
        "runtimeChunk": "single",
        "splitChunks": {
            "cacheGroups": {
                "vendor": {
                    "test": /node_modules/,
                    "name": "vendors",
                    "chunks": "all",
                },
            },
        },
    },

    "resolve": {
        "alias": {
            "@": Path.resolve(__dirname, "..", "src"),
            // Runtime configuration is also NODE_ENV-dependent.
            "@config": configPath,
        },
    },

    "plugins": [
        new HtmlPlugin({
            "title": "MeetingPulse Sign-up",
            "template": "src/index.html",
            "inject": true,
        }),
        // Joi client-side compatibility workaround.
        new Webpack.NormalModuleReplacementPlugin(/^(net|dns)$/, Path.resolve(__dirname, "..", "src", "modules", "shim.js")),
        new VueLoaderPlugin(),
    ],

    "module": {
        // NB: rules are applied in reverse order.
        "rules": [
            {
                // Vue SFCs.
                "test": /\.vue$/,
                "use": [
                    "vue-loader",
                    "eslint-loader",
                ],
            },
            {
                "test": /\.js$/,
                "exclude": /node_modules\/(?!joi-browser)/,
                "loader": "babel-loader",
            },
            // Enforce coding style etc.
            {
                "test": /\.js$/,
                "exclude": /node_modules/,
                "loader": "eslint-loader",
            },
            {
                // Vue SFCs contain SASS sections that need to be processed.
                "test": /\.scss$/,
                "use": [
                    {
                        // Create style nodes from JS strings.
                        "loader": "style-loader",
                    },
                    {
                        // Translates CSS into CommonJS.
                        "loader": "css-loader",
                    },
                    {
                        // Compile SASS to CSS, using Node Sass by default.
                        "loader": "sass-loader",
                        "options": {
                            "implementation": require("node-sass"),
                            "outputStyle": "expanded",
                        },
                    },
                ]
            },
            {
                // CSS file used by vue-tel-input, so need to handle plan css'.
                "test": /\.css$/,
                "use": [
                    "style-loader",
                    "css-loader",
                ],
            },

            {
                // Fonts referenced by some SCSS.
                "test": /\.(woff2?|ttf|eot)?$/,
                "loader": "file-loader?name=assets/fonts/[name].[ext]",
            },
            {
                // Images referenced in various sources.
                "test": /\.(png|jpe?g|svg|gif)$/,
                "loader": "file-loader?name=assets/img/[name].[ext]",
            },
        ],
    },
};


module.exports = common;
