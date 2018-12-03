// This is a stub config file that would load actual env-specific Webpack config.
// (Having multiple configs in root and selecting a proper one with --config breaks aliases)

const envType = process.env.NODE_ENV || "development";

const Path = require("path");
const config = require(Path.resolve(__dirname, "webpack", envType));

module.exports = config;
