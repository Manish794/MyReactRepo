import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { Provider } from 'react-redux';
import mystore from './redux/redux-store';
import CommitsContainer from './CommitsContainer.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={mystore}>
        <CommitsContainer/>
    </Provider>
  </React.StrictMode>
);