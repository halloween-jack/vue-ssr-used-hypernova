const path = require("path");
const glob = require("glob");
const merge = require("webpack-merge");
const AssetsPlugin = require("assets-webpack-plugin");

const baseConfig = require("./webpack.config.base");

const entryPath = path.resolve(__dirname, "../frontend/ssr/");
const entries = glob.sync(`${entryPath}*/**.js`);

module.exports = merge(baseConfig, {
  target: "web",
  node: {
    fs: "empty",
    module: "empty"
  },
  entry: entries,
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../public/frontend/ssr"),
    publicPath: "/frontend/"
  },
  plugins: [new AssetsPlugin()],
  devServer: {
    contentBase: path.resolve(__dirname, "../public"),
    disableHostCheck: true,
    host: "0.0.0.0",
    port: 8000,
    watchOptions: {
      poll: true
    }
  }
});
