import { withRouter } from 'react-router-dom';
import { Button } from 'antd';

const Login = (props: any) => {
  let { history } = props;
  const handleTest = () => {
    history.push('/map/test');
  };
  return (
    <div>
      <p>登录页面</p>
      <Button type="primary" onClick={handleTest}>
        测试页面
      </Button>
    </div>
  );
};

export default withRouter(Login);
