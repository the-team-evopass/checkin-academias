import { Provider } from "react-redux";
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import store from './redux/store.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
)