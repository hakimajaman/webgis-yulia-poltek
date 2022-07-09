const _ = require("lodash");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const entryDirectory = path.resolve(__dirname, "./app/react/modules");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";
  return {
    // devtool: "cheap-module-source-map",
    entry: {
      homepage: path.resolve(entryDirectory, "homepage/index.jsx"),
      informasiKoridor: path.resolve(
        entryDirectory,
        "informasi-koridor/index.jsx"
      ),
      jadwalKeberangkatan: path.resolve(
        entryDirectory,
        "jadwal-keberangkatan/index.jsx"
      ),
    },
    output: {
      path: path.resolve(__dirname, "./app/assets/dist"),
      publicPath: "/dist",
      filename: "[name].min.js",
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
            },
          ],
        },
        {
          test: /\.(css|scss)$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
        {
          test: /\.less$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: "file-loader",
              options: {
                outputPath: "/images", // this is relative to the output.path above
                publicPath: "/dist/images",
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: "svg-url-loader",
              options: {
                limit: 10000,
              },
            },
          ],
        },
        // load separately for unknown file types
        {
          test: /\.(dtd)$/i,
          use: [
            {
              loader: "file-loader",
              options: {
                outputPath: "/other",
                publicPath: "/dist/other",
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
    output: {
      path: path.join(__dirname, "./app/assets/dist"),
      filename: "[name].min.js",
      publicPath: "/",
    },
    plugins: _.compact([
      isProduction ? new CleanWebpackPlugin() : null,
      new MiniCssExtractPlugin({
        filename: "[name].min.css",
      }),
    ]),
  };
};
