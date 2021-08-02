import ReactDom from 'react-dom';
import RouterFn from './router/index';

// rem适配
import 'amfe-flexible';
// antd样式
import 'antd/dist/antd.css';
// redux
import { Provider } from 'react-redux';
import store from './store/index';
// 持久化
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor } from './store/index';

const App = (): any => {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <RouterFn />
      </Provider>
    </PersistGate>
  );
};

ReactDom.render(<App></App>, document.getElementById('root'));
