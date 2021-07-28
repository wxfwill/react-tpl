const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const WebpackBar = require('webpackbar');

module.exports = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          'css-loader',
          'postcss-loader',
          //   "less-loader",
          { loader: 'less-loader', options: { lessOptions: { javascriptEnabled: true } } },
        ],
      },
    ],
  },
  optimization: {
    usedExports: true,
    // 开启代码压缩
    minimize: true,
    minimizer: [new TerserWebpackPlugin(), new CssMinimizerPlugin()],
    // 此设置保证有新增的入口文件时,原有缓存的chunk文件仍然可用
    moduleIds: 'deterministic',
    // 值为"single"会创建一个在所有生成chunk之间共享的运行时文件
    runtimeChunk: 'single',
    splitChunks: {
      // 设置为all, chunk可以在异步和非异步chunk之间共享。
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  performance: {
    hints: 'warning',
    //入口起点的最大体积 整数类型（以字节为单位）
    maxEntrypointSize: 50000000,
    //生成文件的最大体积 整数类型（以字节为单位 300k）
    maxAssetSize: 30000000,
    //只给出 js 文件的性能提示
    assetFilter: function (assetFilename) {
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    },
  },
  cache: {
    // 开启缓存, 将缓存类型设置为文件系统,默认是memory
    type: 'filesystem',
    buildDependencies: {
      // 更改配置文件时，重新缓存
      config: [__filename],
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    // 添加进度条
    new WebpackBar({ profile: true }),
    new HtmlWebpackPlugin({
      title: 'W5V3',
      filename: 'index.html',
      template: './public/index.html',
      favicon: './public/favicon.ico',
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
      filename: 'css/[name]-[contenthash:6].css',
    }),
  ],
};
