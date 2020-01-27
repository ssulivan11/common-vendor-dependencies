# 3.0.1 (Mon Oct 7 2019)

- preload bug, `src` to `href`

# 3.0.0 (Mon Oct 7 2019)

- full breaking changes as no single commonvendor file anymore
  - helper components now handle loading individual chuncks, `<CommonVendorPreLoadScripts />` & `<CommonVendorScripts />`
  - function to async load scripts on client for a style of prefetching based on a users journey down the site `preFetchCommonScripts`
- lite migration to TypeScript
- all upgraded packages:
  - @sentry/browser: 5.6.3
  - @sentry/hub: 5.6.1
  - @sentry/utils: 5.6.1
  - connected-react-router: 6.5.2
  - dayjs: 1.8.16
  - react: 16.10.1
  - react-dom: 16.10.1
  - react-redux: 7.1.1
  - react-router: 5.1.1
  - react-router-dom: 5.1.1
  - redux: 4.0.4
  - redux-saga: 0.16.2
  - styled-components: 4.4.0
  - superagent: 3.8.3

# 2.3.1 (Mon Sept 30 2019)

### Bug Fix

- Leftover package export to window causing error

# 2.3.0 (Thu Sept 26 2019)

### Upgrade styled-components, remove react-lazy-load-image-component

- Upgraded `styled-components` at `4.4.0` - [RELEASE](https://github.com/styled-components/styled-components/releases/tag/v4.4.0)
- Remove `react-lazy-load-image-component`

# 2.2.0 (Tue Sept 17 2019)

### Added connect-react-router, upgrading other packages

- Added `connected-react-router` at `6.5.2` - [RELEASE](https://github.com/supasate/connected-react-router/releases/tag/v6.5.2)
- Upgrading `react-redux` to `7.1.1` - [CHANGELOG](https://github.com/reduxjs/react-redux/releases/tag/v7.1.1)
- Upgrading `redux` to `4.0.4` - [CHANGELOG](https://github.com/reduxjs/redux/releases/tag/v4.0.4)
- Upgrading `dayjs` to `1.8.16` - [CHANGELOG](https://github.com/iamkun/dayjs/releases/tag/v1.8.16)
- Upgrading `react-router` to `5.0.1` - [CHANGELOG](https://github.com/ReactTraining/react-router/releases/tag/v5.0.1)
- Upgrading `react-router-dom` to `5.0.1` - [CHANGELOG](https://github.com/ReactTraining/react-router/releases/tag/v5.0.1)
- Upgrading `@sentry/browser` to `5.6.3` - [CHANGELOG](https://github.com/getsentry/sentry-javascript/releases/tag/5.6.3)
- Upgraded devDependencies

# 2.1.1 (Tue Aug 27 2019)

### Adding @sentry/browser dependencies

- Sharing more externals:
  - `SentryBrowser from '@sentry/browser'`
  - `SentryUtils from '@sentry/utils'`
  - `SentryHub from '@sentry/hub'`

# 2.1.0 (Mon Aug 12 2019)

### React Minor Upgrade & Adding Styled-components

- React 16.9.0 - [Release Note](https://reactjs.org/blog/2019/08/08/react-v16.9.0.html) & [Change Log](https://github.com/facebook/react/blob/master/CHANGELOG.md#1690-august-8-2019)
- Welcome to the party `styled-components@4.2.0`

# 2.0.2 (Mon July 14 2019)

### Removal of Polyfills

- Loss of some cacheing objectives when polyfills are in common-vendor project

# 2.0.2 (Mon June 10 2019)

### More Polyfills Output

- Output polyfills url from package
- Some documentation for supported polyfills

# 2.0.1 (Thurs May 23 2019)

### Adding Polyfills Output

- Adding `polyfills.js` and its output setup
- Ran a yarn-interactive against dev dependencies

# 2.0.0 (Fri May 10 2019)

### Adding Sentry & Upgrading to React-Redux 7.0.3

- Adding @sentry/browser to VendorBundle `@5.2.0` - [Installation Here](http://uip-gitbook.service.eu-west-1.dev.deveng.systems/docs/sentry/SENTRY_SETUP.html)
- Upgrading React-Redux to `7.0.3` - [Docs for v7 here](https://github.com/reduxjs/react-redux/releases/tag/v7.0.1)
  - This is reason for major bump, introducing react-redux v7 causes some breaking changes. Should require [connected-react-router](https://www.npmjs.com/package/connected-react-router) to be at `>=6`.

# 1.5.1 (Wed April 4 2019)

### Upgrading to React 16.8.6

- Upgrading React and React-DOM to `16.8.6` - [CHANGELOG](https://github.com/facebook/react/releases/tag/v16.8.6)

# 1.5.0 (Mon March 25 2019)

### Upgrade react-router and react-router-dom to v5.0.0

# 1.4.0 (Tues March 5 2019)

### Upgrade DayJS (1.8.8) and Redux Saga (0.16.2) to help resolve duplicate versions.

# 1.3.6 (Mon March 4 2019)

### Upgrading to React 16.8.3

- Upgrading React and React-DOM to `16.8.3` - [CHANGELOG](https://github.com/facebook/react/releases/tag/v16.8.3)

# 1.3.4 (Fri Feb 15 2019)

### Missing Externals

- Missing external definition for LazyLoadComponent package

# 1.3.3 (Fri Feb 15 2019)

### Upgrading to React 16.8.2 & Fixing prepublish script

- Fix prepublish issue in package, was not building before publish
- Upgrading React and React-DOM to `16.8.2` - [CHANGELOG](https://github.com/facebook/react/releases/tag/v16.8.2)

# 1.3.2 (Tue Feb 12 2019)

### Upgrading to React Lazy Load Image Component 1.3.2!

- Upgrading LazyLoadImageComponents to `1.3.2` - [CHANGELOG](https://github.com/Aljullu/react-lazy-load-image-component/releases)

# 1.3.1 (Thurs Feb 7 2019)

### Upgrading to React 16.8.1, Hooks time!

- Upgrading React and React-DOM to `16.8.1` - [CHANGELOG](https://reactjs.org/blog/2019/02/06/react-v16.8.0.html)
- Properly exporting LazyLoadImageComponents

# 1.2.3 (Tue Jan 8 2019)

### Adding React Lazy Load Image Component

- new standard global component for lazy loading of images - [react-lazy-load-image-component](https://github.com/Aljullu/react-lazy-load-image-component)

# 1.2.2 (Mon Nov 12 2018)

### Version bump to match npm version

# 1.2.1 (Fri Nov 9 2018)

### React 16.6.1 Patches

- Upgrading React and React-DOM to `16.6.1` - [CHANGELOG](https://github.com/facebook/react/blob/master/CHANGELOG.md#1661-november-6-2018)
- Upgrading React-Redux to `5.1.0`
- Upgrading React-Router to `4.3.1`
- Upgrading React-Router-Dom to `4.3.1`

# 1.2.0 (Mon July 23 2018)

### Lodash Removal

- removing [lodash v4.17.10](https://lodash.com/) as its too big and we don't use enough of it

# 1.1.1 (Thurs Sept 20 2018)

### React 16.5.2 Patches

- Upgrading React and React-DOM to `16.5.2` - [CHANGELOG](https://github.com/facebook/react/blob/master/CHANGELOG.md#user-content-1652-september-18-2018)

# 1.1.0 (Fri Sept 7 2018)

### React 16.5!

- Upgrading React and React-DOM to `16.5.0` - [CHANGELOG](https://github.com/facebook/react/blob/master/CHANGELOG.md#1650-september-5-2018)

# 1.0.0 (Thur Aug 16 2018)

### NPM Scoped Nexus support

# 0.4.0 (Mon July 23 2018)

### Lodash Addition

- adding [lodash v4.17.10](https://lodash.com/) as our goto JavaScript helper/util library

# 0.3.2 (Tue July 17 2018)

### DayJS Addition / React Patch

- adding [day.js v1.7.4](https://github.com/iamkun/dayjs) as our goto JavaScript date library
- Jenkins migration completed with new setup
- "react": 16.4.0 -> [16.4.1](https://github.com/facebook/react/releases/tag/v16.4.1)

# 0.3.1 (Wed May 30 2018)

### Webpack 4 Fix

- globalObject override in webpack output fix

# 0.3.0 (Wed May 30 2018)

### Upgrading React & React-Dom

- "react": 16.3.2 -> 16.4.0
- "react-dom": 16.3.2 -> 16.4.0
- "superagent": 3.8.2 -> 3.8.3

# 0.2.0 (Tue Apr 24 2018)

### Upgrading

- "react": 16.3.1 -> 16.3.2
- "react-dom": 16.3.1 -> 16.3.2
- "react-redux": 5.0.6 -> 5.0.7
- "redux": 3.7.2 -> [4.0.0](https://github.com/reactjs/redux/releases/tag/v4.0.0)

# 0.1.2 (Wed Apr 4 2018)

### Upgrading React & React-Dom

- Upgrading to [16.3.1](https://github.com/facebook/react/releases/tag/v16.3.0)

# 0.1.1 (Tue Feb 27 2018)

### Bug fix

- Missing default value for webpackExternals()

# 0.1.0 (Tue Feb 27 2018)

### More flexibility to manage webpack externals

- webpackExternals() now accepts an object with include and exclude properties

# 0.0.10 (Mon Feb 26 2018)

### Adding More

- `react-router: ^4.2.0`
- `react-router-dom: ^4.2.2`
- `redux-saga: ^0.16.0`
- `superagent: ^3.8.2`

Old Size: 38kb / 119kb
New Size: 61kb / 212kb

# 0.0.9 (Wed Jan 22 2018)

### Strip comments

- Strip comments from imported packages

# 0.0.8 (Tue Jan 21 2018)

### Redux Additions & Staging

- Adding redux `redux: 3.7.2`
- Adding react-redux `react-redux: 5.0.6`

# 0.0.7 (Mon Jan 15 2018)

### React

- Adding production mode for `react: 16.2.0`
- Adding production mode for `react-dom: 16.2.0`
