import { Provider } from "react-redux";
import ReactDOM from 'react-dom';
import App from './App.tsx';
import store from './redux/store.tsx';

const rootElement = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render([rootElement], document.getElementById('root'));
