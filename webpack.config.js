"use strict";

const fs = require("fs");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const useMinification = process.env.BUILD_MINIFIED === "true";
const packageName = JSON.parse(fs.readFileSync("package.json", "utf8")).name;
const libraryName = packageName.replace(/(^|-)(.)/g, (match, _, c) => (c ? c.toUpperCase() : ""));

const config = {
  entry: "./src/index.ts",
  resolve: { extensions: [".ts"] },
  module: {
    rules: [
      { test: /\.ts$/, loader: "awesome-typescript-loader", exclude: "/node_modules/" },
    ],
  },
  output: {
    filename: `dist/${packageName}.js`,
    libraryTarget: "umd",
    library: libraryName,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
      },
    }),
  ],
};

const minified = Object.assign({}, config, {
  output: Object.assign({}, config.output, {
    filename: `dist/${packageName}.min.js`,
  }),
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: false,
          },
          sourceMap: false,
        },
      }),
    ],
  },
});

// @TODO let webpack run configurations in parallel after solving:
// https://github.com/s-panferov/awesome-typescript-loader/issues/323
module.exports = useMinification
  ? minified
  : config;
