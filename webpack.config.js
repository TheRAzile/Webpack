const HtmlWebpackPlugin = require('html-webpack-plugin')
var HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: "index.js"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: ["node_modules/"],
          use: [{loader: "babel-loader"}, {loader: "eslint-loader"}]
        },
        {
          test: /\.less$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "less-loader"
          ]
        },
        {
          test: /\.(png|jpg|svg)$/,
          loader: "file-loader",
          options: {
            name: "./img/[name].[ext]"
          }
        },
        {
          test: /\.(otf|ttf)$/,
          loader: "file-loader",
          options: {
            name: "./fonts/[name].[ext]"
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({template:"./src/index.html"}),
      new MiniCssExtractPlugin({
        filename: "./css/[name].css"
      })
    ],
    mode: "development"
}
