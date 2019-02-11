import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'semantic-ui-css/semantic.min.css'
import './index.css'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { history } from './store'

import configureStore from './store'

import registerServiceWorker from './registerServiceWorker'

const store = configureStore()
const rootElement = document.getElementById('root')

function render(Component) {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>{Component}</ConnectedRouter>
    </Provider>,
    rootElement
  )
}

render(<App />)

if (module.hot) {
  module.hot.accept('./App', () => {
    render(<App />)
  })
}

registerServiceWorker()
