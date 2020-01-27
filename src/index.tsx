/* global COMMON_VENDOR_VERSION */
import React, { Fragment } from 'react'

const vendorVersion = COMMON_VENDOR_VERSION

interface CommonVendorProps {
  react: boolean
  sentry: boolean
  dayjs: boolean
  styledComponents: boolean
  superagent: boolean
}

const CommonVendorPreLoadScripts: React.FunctionComponent<CommonVendorProps> = ({
  react = false,
  sentry = false,
  dayjs = false,
  styledComponents = false,
  superagent = false,
}: CommonVendorProps) => {
  const vendors = { react, sentry, dayjs, styledComponents, superagent }
  return (
    <Fragment>
      {Object.entries(vendors).map(
        ([vendorName, loadVendor]) =>
          loadVendor && (
            <link
              rel='preload'
              as='script'
              href={`//ssullivan.info/assets/common/vendor/${vendorVersion}/commonvendor-${vendorName}.min.js`}
            />
          ),
      )}
    </Fragment>
  )
}

const CommonVendorScripts: React.FunctionComponent<CommonVendorProps> = ({
  react = false,
  sentry = false,
  dayjs = false,
  styledComponents = false,
  superagent = false,
}: CommonVendorProps) => {
  const vendors = { react, sentry, dayjs, styledComponents, superagent }
  return (
    <Fragment>
      {Object.entries(vendors).map(
        ([vendorName, loadVendor]) =>
          loadVendor && (
            <script src={`//ssullivan.info/assets/common/vendor/${vendorVersion}/commonvendor-${vendorName}.min.js`} />
          ),
      )}
    </Fragment>
  )
}

const preFetchCommonScripts = ({
  react = false,
  sentry = false,
  dayjs = false,
  styledComponents = false,
  superagent = false,
  delay = 500,
}): any => {
  const vendors = { react, sentry, dayjs, styledComponents, superagent }
  {
    Object.entries(vendors).map(([vendorName, loadVendor]) => {
      if (loadVendor && document && document.body) {
        return setTimeout(() => {
          const script = document.createElement('script')
          script.src = `//ssullivan.info/assets/common/vendor/${vendorVersion}/commonvendor-${vendorName}.min.js`
          script.async = true
          document.body.appendChild(script)
        }, delay)
      }
      return null
    })
  }
}

const commonVendorExternals = {
  'connected-react-router': 'ConnectedReactRouter',
  dayjs: 'dayjs',
  react: 'React',
  'react-dom': 'ReactDOM',
  redux: 'Redux',
  'react-redux': 'ReactRedux',
  'redux-saga': 'ReduxSaga',
  'react-router': 'ReactRouter',
  'react-router-dom': 'ReactRouterDom',
  superagent: 'Superagent',
  '@sentry/browser': 'SentryBrowser',
  '@sentry/utils': 'SentryUtils',
  '@sentry/hub': 'SentryHub',
  'styled-components': 'StyledComponents',
}

const webpackExternals = ({ include = {}, exclude = [] } = {}): any => (
  _context: any,
  request: string,
  callback: Function,
) => {
  const externals = { ...commonVendorExternals, ...include }

  const regex = /([^\/]*)\/?(.*)/ // matches "/react-router/Switch" and captures "react-router" and "Switch"

  const matches = request.match(regex)

  if (matches) {
    let moduleName: string = matches[1] as any // eg. "react-router"
    const exportName: string = matches[2] as any // eg. "Switch"

    // Without defining the array type, it by default will be never. So when you tried to add a string to it, it was a type mismatch

    if (Object.keys(externals).includes(moduleName) && !exclude.includes(moduleName)) {
      moduleName = externals[moduleName] // eg. use "ReactRouter" in place of "react-router"

      return callback(
        null,
        exportName
          ? `root ${moduleName}.${exportName}` // eg. "ReactRouter.Switch"
          : `root ${moduleName}`, // e.g "ReactRouter"
      )
    }
  }

  callback()
}

export { CommonVendorPreLoadScripts, CommonVendorScripts, webpackExternals, vendorVersion, preFetchCommonScripts }
