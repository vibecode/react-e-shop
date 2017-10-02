import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import history from './history';
import reducers from './reducers';

export default (initialState = {}) => {
  const middleware = applyMiddleware(thunk, routerMiddleware(history));

  return createStore(reducers, initialState, composeWithDevTools(middleware));
};
