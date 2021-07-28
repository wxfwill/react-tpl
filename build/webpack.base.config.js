const path = require('path');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const notifier = require('node-notifier');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'app.[contenthash].js',
    path: path.resolve(process.cwd(), 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules | bower_components)/,
        use: {
          loader: 'babel-loader', // es6 转换成 es5
          options: {
            // presets: ["@babel/preset-env"],
            presets: ['@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        type: 'asset/inline',
        generator: {
          filename: 'assets/[hash:8].[name][ext]',
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
    // 配置 eslint
    new ESLintPlugin(),
    // 配置打包的友好提示
    new FriendlyErrorsPlugin({
      onErrors: (severity, errors) => {
        notifier.notify({
          title: 'webpack 编译失败了~',
          message: `${severity} ${errors[0].name}`,
          subtitle: errors[0].file || '',
          icon,
        });
      },
    }),
  ],
};
