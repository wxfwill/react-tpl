import { Button } from 'antd';
import styles from '../../main.less';
import loginPic from '@/assets/img/logo.png';

const Test = () => {
  return (
    <div className={styles.wrap}>
      <div>测试页面</div>
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
      <span>66</span>
    </div>
  );
};

export default Test;
