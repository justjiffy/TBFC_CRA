import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter'
import nav from './nav'

export default combineReducers({
  routing: routerReducer,
  counter,
  nav
})
