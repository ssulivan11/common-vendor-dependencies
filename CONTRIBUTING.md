# Contributing to Vendor Bundle

When a change has been made to the vendor bundle, please use proper semantic versioning to avoid version conflicts.

## Library Module - webpack.config.lib.js

This webpack config contains the helpers function you can import into your project:

- `webpackExternals` for automatically getting the needed externals defined in your webpack
- import the `CommonVendorScripts` component with the packages you would like to include in your initial client browser load

### Jenkins Build

To build this project, simply start the Jenkins pipeline below:

[prod pipeline](https://jenkins.eu-west-1.services.deveng.systems/view/uip/job/uip-vendor-bundle/)
