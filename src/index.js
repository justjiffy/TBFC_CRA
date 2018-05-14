import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'

import App from './containers/app';

import {
  screenResize
} from './modules/nav'

const target = document.querySelector('#root')

window.addEventListener('resize', () => {
    store.dispatch(screenResize(window.innerWidth));
});

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  target
)
