const Path = require("path");

const Webpack = require("webpack");

const HtmlPlugin = require("html-webpack-plugin");
const CleanPlugin = require("clean-webpack-plugin");
// const CopyWebpackPlugin = require("copy-webpack-plugin");

const { VueLoaderPlugin } = require("vue-loader");

const envType = process.env.NODE_ENV || "development";
const endpoint = process.env.MP_CONFIG || envType;


const common = {

    "entry": "./src/index.js",

    "output": {
        "path": Path.resolve(__dirname, "..", "..", "register"),
        "publicPath": "/register/",
        "filename": "./js/index.js",
    },

    "resolve": {
        "alias": {
            "@": Path.resolve(__dirname, "..", "src"),
            // Runtime configuration is also NODE_ENV-dependent.
            "@config": Path.resolve(__dirname, "..", "src", "configs", `${endpoint}.js`),
        },
    },

    "plugins": [
        new CleanPlugin(["build"]),
        new HtmlPlugin({
            "title": "MeetingPulse Sign-up",
            "template": "src/index.html",
            "inject": true,
        }),
        // Joi client-side compatibility workaround.
        new Webpack.NormalModuleReplacementPlugin(/^(net|dns)$/, Path.resolve(__dirname, "..", "src", "modules", "shim.js")),
        new VueLoaderPlugin(),
        /*
        new CopyWebpackPlugin([
            {
                "from": "./src/assets/redist",
                "to": Path.resolve(__dirname, "build"),
            },
        ]),
        */
    ],

    "module": {
        "rules": [
            {
                "test": /\.js$/,
                "exclude": /node_modules/,
                "use": ["babel-loader", "eslint-loader"],
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
                // Vue SFCs.
                "test": /\.vue$/,
                "use": [
                    "vue-loader",
                    "eslint-loader",
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