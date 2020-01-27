import * as StyledComponents from 'styled-components'

declare global {
  interface Window {
    StyledComponents: object
  }
}

window.StyledComponents = StyledComponents || {}
