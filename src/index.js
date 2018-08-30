import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Routers from './routes';
import store from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

render(
  <Provider store={store}>
    <Routers />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
