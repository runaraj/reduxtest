import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import store, { history } from './init/store';
import App from './components/app';
// import registerServiceWorker from './registerServiceWorker';

const root = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(root, document.getElementById('root'));
// registerServiceWorker();
