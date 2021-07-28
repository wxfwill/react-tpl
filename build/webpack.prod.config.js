const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            },
          },
          "css-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            },
          },
          "css-loader",
          "postcss-loader",
          //   "less-loader",
          { loader: "less-loader", options: { lessOptions: { javascriptEnabled: true } } },
        ],
      },
    ],
  },
  optimization: {
    usedExports: true,
    // 开启代码压缩
    minimize: true,
    minimizer: [new TerserWebpackPlugin(), new CssMinimizerPlugin()],
  },
  performance: {
    hints: "warning",
    //入口起点的最大体积 整数类型（以字节为单位）
    maxEntrypointSize: 50000000,
    //生成文件的最大体积 整数类型（以字节为单位 300k）
    maxAssetSize: 30000000,
    //只给出 js 文件的性能提示
    assetFilter: function (assetFilename) {
      return assetFilename.endsWith(".css") || assetFilename.endsWith(".js");
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "W5V3",
      filename: "index.html",
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
      minify: {
        // 压缩HTML文件
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true, // 压缩内联css
      },
      cache: true,
    }),
    // 单独提取css 文件
    new MiniCssExtractPlugin({
      filename: "css/[name]-[contenthash:6].css",
    }),
    new CleanWebpackPlugin(),
  ],
};
