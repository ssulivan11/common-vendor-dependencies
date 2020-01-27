import * as dayjs from 'dayjs'

declare global {
  interface Window {
    dayjs: object
  }
}

window.dayjs = dayjs || {}
