import * as Superagent from 'superagent'

declare global {
  interface Window {
    Superagent: object
  }
}

window.Superagent = Superagent || {}
