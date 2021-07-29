import React from 'react';
import ReactDom from 'react-dom';
import { Button } from 'antd';

import 'amfe-flexible';
// 样式
import 'antd/dist/antd.css';
import styles from './main.less';

import loginPic from '@/assets/img/logo.png';

const App = () => {
  return (
    <div className={styles.wrap}>
      <p className="test">
        <span>测试6</span>
        <span>前端</span>
        <span>后端</span>
        <span>运维</span>
        <span>哈哈</span>
      </p>
      <Button type="primary">点击66</Button>
      <img src={loginPic} className="img" alt="logo" />
      <div className="bg-img"></div>
    </div>
  );
};

ReactDom.render(<App></App>, document.getElementById('root'));
