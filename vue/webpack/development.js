const Path = require("path");

const merge = require("webpack-merge");

const common = require(Path.resolve(__dirname, "common.js"));


const config = merge(common, {

    "mode": "development",

    "devtool": "inline-source-map",

    "devServer": {
        "contentBase": Path.resolve(__dirname, "..", ".."),
        "compress": true,
        "port": 9000,
        // Insecure, but some people develop this package through a remote server.
        "disableHostCheck": true,
        "host": "0.0.0.0",
    },

});


module.exports = config;
