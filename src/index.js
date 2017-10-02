import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';

import { ConnectedRouter } from 'react-router-redux';
import history from './history';
import configureStore from './store';

import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
const rootElement = document.getElementById('root');

function render(Component) {
  ReactDOM.render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            {Component}
          </div>
        </ConnectedRouter>
      </Provider>,
      rootElement
  );
}

render(<App />);

if (module.hot) {
  module.hot.accept('./App', () => {
    render(<App />);
  })
}

registerServiceWorker();
