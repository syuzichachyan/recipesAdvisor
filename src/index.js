import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Main from './components/main';
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
