import React from 'react'
import { Provider } from 'react-redux';
import { render } from 'react-dom'
import { Store } from './store';
import AppContainer from './containers/AppContainer'

const root = document.createElement('div')

document.body.appendChild(root)

render(
  <Provider store={Store}>
    <AppContainer />
  </Provider>, root
)