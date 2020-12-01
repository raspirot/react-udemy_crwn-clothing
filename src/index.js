import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './redux/store';

import App from './App';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    {/* Must be the parent of everything, give access to everything that are in the store */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
