import * as SentryBrowser from '@sentry/browser'
import * as SentryUtils from '@sentry/utils'
import * as SentryHub from '@sentry/hub'

declare global {
  interface Window {
    SentryBrowser: object
    SentryUtils: object
    SentryHub: object
  }
}

window.SentryBrowser = SentryBrowser || {}
window.SentryUtils = SentryUtils || {}
window.SentryHub = SentryHub || {}
