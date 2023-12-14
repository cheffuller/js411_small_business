import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Router from './Router';
import Dashboard from './containers/Dashboard';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Main = () => (
  <Provider store={store}>
      <BrowserRouter>
        <header>
          <Dashboard />
        </header>
        <Router />
      </BrowserRouter>
  </Provider>
);

root.render(<Main />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
