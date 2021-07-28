import React from "react";
import ReactDom from "react-dom";
import { Button } from "antd";

import "amfe-flexible";
// 样式
import "antd/dist/antd.less";
import "./main.less";

const App = () => {
  return (
    <div className="wrap">
      <p className="test">
        <span>测试</span>
        <span>前端</span>
        <span>后端</span>
        <span>运维</span>
        <span>哈哈</span>
      </p>
      <Button type="primary">点击</Button>
    </div>
  );
};

ReactDom.render(<App></App>, document.getElementById("root"));
