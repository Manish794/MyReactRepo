import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import Employee from './Employee';
import mystore from './myredux/mystore';
import reportWebVitals from './reportWebVitals';
import Student from './Student.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Provider store={mystore}>
      <Student />
      <Employee />
    </Provider>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
