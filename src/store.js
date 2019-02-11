import { routerMiddleware } from 'connected-react-router'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createBrowserHistory } from 'history'

import thunk from 'redux-thunk'
import reducers from './reducers'

export const history = createBrowserHistory()

export default (initialState = {}) => {
  const middleware = applyMiddleware(thunk, routerMiddleware(history))

  const store = createStore(
    reducers(history),
    initialState,
    composeWithDevTools(middleware)
  )

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('./reducers', () => {
        store.replaceReducer(reducers)
      })
    }
  }

  return store
}
