const path = require('path');
// const webpack = require('webpack');
// const ESLintPlugin = require('eslint-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const rootDir = process.cwd();

module.exports = {
  entry: './src/main.tsx',
  output: {
    filename: 'app.[contenthash].js',
    path: path.resolve(process.cwd(), 'dist'),
  },
  resolve: {
    alias: {
      '@': path.resolve('src'),
    },
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: path.resolve(rootDir, 'src'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // es6 转换成 es5  thread-loader//多线程打包
          // options: {
          //   presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          // },
        },
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        type: 'asset',
        generator: {
          filename: 'assets/[hash:8].[name][ext]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 30 * 1024, // 小于30KB才采用base64编码
          },
        },
      },
      {
        test: /\.(ttf|svg|eot|woff|woff2)$/,
        type: 'assets/resource',
        generator: {
          filename: 'assets/[hash:8].[name][ext]',
        },
      },
    ],
  },
  stats: 'errors-warnings',
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: '*.js',
          context: path.resolve(rootDir, 'public/static'),
          to: path.resolve(rootDir, 'dist/static'),
        },
      ],
    }),
    // 配置 eslint
    // new ESLintPlugin(),
    // 自动加载react模块 针对旧的转换 不用在顶部频繁引入 react
    // new webpack.ProvidePlugin({
    //   React: "react"
    // })
  ],
};
