module.exports = {
  root: true,
  //   parser: "babel-eslint"
  extends: ["eslint:recommended", "plugin:react/recommended"],
  env: {
    browser: true, //
    node: true, //
  },
  parserOptions: {
    // 明确审查es6代码
    ecmaVersion: 6,
    sourceType: "module",
  },
  rules: {},
};
