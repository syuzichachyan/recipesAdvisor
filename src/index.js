import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import Main from './components/Main';
import store from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
