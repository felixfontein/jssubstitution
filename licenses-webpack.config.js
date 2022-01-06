const path = require("path");
const LicenseCheckerWebpackPlugin = require("license-checker-webpack-plugin");
const template = require("lodash.template");

module.exports = {
  plugins: [
    new LicenseCheckerWebpackPlugin({
      allow: "(GPL-3.0-or-later OR Apache-2.0 OR BSD-2-Clause OR BSD-3-Clause OR MIT OR 0BSD)",
      ignore: ["@dyb/*"],
      filter: /(^.*[/\\]node_modules[/\\]((?:@[^/\\]+[/\\])?(?:[^@/\\][^/\\]*)))/,
      emitError: true,
      outputWriter: path.resolve(__dirname, "licenses-template.ejs"),
      outputFilename: "licenses.json"
    })
  ]
};
