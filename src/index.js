import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';

import { ConnectedRouter } from 'react-router-redux';
import history from './history';
import configureStore from './store';

import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <App/>
        </div>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
