import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'antd/dist/antd.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const HomeAdmin = React.lazy(() => import("./pages/admin/home/Home"))
const Login = React.lazy(() => import("./pages/admin/authentication/Login"))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root'),
  document.getElementById('ant-modal-root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
