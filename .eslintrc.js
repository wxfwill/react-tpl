module.exports = {
  root: true,
  //   parser: "babel-eslint"
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  env: {
    browser: true, //
    node: true, //
  },
  // ！！！！如果没使用alias下面的不用配置！！！！！
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js',
      },
    },
  },
  parserOptions: {
    // 明确审查es6代码
    ecmaVersion: 6,
    sourceType: 'module',
  },
  rules: {},
};
