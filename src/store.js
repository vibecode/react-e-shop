import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import history from './history';
import reducers from './reducers';

export default (initialState = {}) => {
  const middleware = applyMiddleware(thunk, routerMiddleware(history));

  const store = createStore(reducers, initialState, composeWithDevTools(middleware));

  if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
      module.hot.accept('./reducers', () => {
        store.replaceReducer(reducers)
      })
    }
  }

  return store;
};
