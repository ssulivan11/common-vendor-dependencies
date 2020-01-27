declare module 'react'
declare module 'react-dom'
declare module 'react-router'
declare module 'react-router-dom'
declare module 'react-redux'
declare module 'superagent'
declare module 'styled-components'

declare var COMMON_VENDOR_VERSION: string

declare namespace JSX {
  interface Element {}
  interface IntrinsicElements {
    div: any
    link: any
    script: any
  }
}
