const HTMLWebpackPlugin = require("html-webpack-plugin");
const Path = require("path");
const webpack = require("webpack");

let webpackConfiguration = {
  entry: Path.join(__dirname, "src", "index.js"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    path: Path.join(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js",
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: Path.join(__dirname, "public", "index.html"),
    }),
  ],
  devServer: {
    static: {
      directory: Path.join(__dirname, "public"),
    },
    historyApiFallback: true,
    port: 3000,
    proxy: {
      "/api": `http://localhost:${process.env.PORT}`,
    },
  },
};

module.exports = webpackConfiguration;
