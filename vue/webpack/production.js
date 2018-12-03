const Path = require("path");

const merge = require("webpack-merge");

const common = require(Path.resolve(__dirname, "common.js"));


module.exports = merge(common, {

    "mode": "production",

});
