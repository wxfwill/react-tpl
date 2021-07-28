module.exports = {
  plugins: [
    require("autoprefixer")({
      overrideBrowserslist: ["last 2 versions", ">1%"],
    }),
    require("postcss-pxtorem")({
      rootValue: 37.5, //设计图给的375的图就写37.5，也就是1rem=37.5px
      // selectorBlackList: ['vant'] // 要忽略的选择器并保留为px。
      propList: ["*"], // 可以从px更改为rem的属性
    }),
  ],
};
