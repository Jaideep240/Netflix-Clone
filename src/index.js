import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap-scss/bootstrap.scss'
import './index.css';
import App from './App';
import store from './components/store';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
  
);
reportWebVitals();
