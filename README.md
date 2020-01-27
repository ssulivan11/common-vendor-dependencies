<h1>📦 Common Vendor Dependencies</h1>
<p><small>Vendor Bundle for UI Projects<small></p>

## Included Packages

- React
- ReactDOM
- Redux
- ReactRedux
- ReactRouter
- ReactRouterDOM
- ReduxSaga
- Superagent
- Dayjs
- Styled-Components

---

## Implementation Into Your Application

#### HTML External Script Setup

Use the helper function and send an object as the argument to what scripts you want to include:

```js
import { CommonVendorPreLoadScripts, CommonVendorScripts } from 'common-vendor-dependencies'

render () => (
  <html>
    <head>
      <CommonVendorPreLoadScripts react sentry styledComponents superagent  />
    </head>
    <body>
      <PolyfillsScript />
      <CommonVendorScripts react sentry styledComponents superagent />
      <GetHeaderBundle />
    </body>
  </html>
)
```

### Prefetching Scripts for Other Apps

You might not use a package, but an application down the customers journey does. For example, if you do not use DayJS or Sentry then do not load it in your client entry point, for performance gains and instead use the helper function below in a componentDidMount or useEffect:

```js
useEffect(() => preFetchCommonScripts({ dayjs: true, sentry: true }), []);
```

### Webpack Config

Code example of webpack externals:

```js
import { webpackExternals } from "common-vendor-dependencies";

externals: isProduction ? webpackExternals() : {};
```

Developers can include new externals mappings or exclude common vendor externals:

```js
const opts = {
  include: { "video.js": "videojs" },
  exclude: ["redux-saga"]
};

externals: isProduction ? webpackExternals(opts) : {};
```

Note: excluding externals is not recommended. It may be needed in the case a developer is aliasing a module in their webpack configuration.

### Versioning

- Please always ensure your versions of React and React-DOM match the versions given in this vendor bundle
- Best practice is to remove the carots from all dependencies in your project that are externals here, as to never have mismatching versions

---

## Publishing and Deploying File

- To publish the package, please run `npm version patch|minor|major` and then `npm publish`
- Deploying the minified file onto the s3 bucket, make sure you have the new version tag on master, then start [jenkins job](http://jenkins.eu-west-1.services.deveng.systems/view/uip/job/uip-vendor-bundle/)
