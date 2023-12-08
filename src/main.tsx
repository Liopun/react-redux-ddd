import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import configureStore from './shared/infra/redux/configureStore';
import { initialReduxStartupScript } from './shared/infra/redux/startupScript';
import App from './App.tsx';
import './index.css';

const store = configureStore();

//@ts-ignore
initialReduxStartupScript(store);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
