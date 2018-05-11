import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './modules'
import { composeWithDevTools } from 'redux-devtools-extension'

export const history = createHistory()

const initalState = {}
const enhancers = []
const middleware = [
  thunk,
  routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtenstion = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtenstion === 'function') {
    enhancers.push(devToolsExtenstion())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  rootReducer,
  initalState,
  composedEnhancers
)

export default store
