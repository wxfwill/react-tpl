// const path = require("path");
const HtmlWebapckPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar');

module.exports = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    // contentBase: path.join(__dirname, "./public"), // 静态资源的跟目录，即不受webpack控制的资源文件，放这里
    hot: true,
    open: true,
    port: 1024,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          //   "less-loader",
          { loader: 'less-loader', options: { lessOptions: { javascriptEnabled: true } } },
        ],
      },
    ],
  },
  plugins: [
    // 添加进度条
    new WebpackBar({ profile: true }),
    new HtmlWebapckPlugin({
      title: 'w5-tmp',
      template: './public/index.html',
    }),
  ],
};
