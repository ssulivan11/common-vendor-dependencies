import React from 'react'
import ReactDOM from 'react-dom'
import * as ReactRouter from 'react-router'
import * as ReactRouterDom from 'react-router-dom'
import * as ConnectedReactRouter from 'connected-react-router'
import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import * as ReduxSaga from 'redux-saga'

declare global {
  interface Window {
    React: object
    ReactDOM: object
    ReactRouter: object
    ReactRouterDom: object
    ConnectedReactRouter: object
    Redux: object
    ReactRedux: object
    ReduxSaga: object
  }
}

window.React = React || {}
window.ReactDOM = ReactDOM || {}
window.ReactRouter = ReactRouter || {}
window.ReactRouterDom = ReactRouterDom || {}
window.ConnectedReactRouter = ConnectedReactRouter || {}
window.Redux = Redux || {}
window.ReactRedux = ReactRedux || {}
window.ReduxSaga = ReduxSaga || {}
