const path = require('path')
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const TerserPlugin = require('terser-webpack-plugin')
const package = require('./package.json')
const NODE_ENV = process.env.NODE_ENV || 'production'
const isProd = NODE_ENV === 'production'

const packageVersion = package.version
const packageDependencies = package.dependencies

process.noDeprecation = true

const baseConfig = (type) => {
  let packageOutput = ''
  for (const key in packageDependencies) {
    const package = packageDependencies[key]
    packageOutput += ` > ${key}: ${package}\n`
  }

  return {
    stats: 'errors-only',
    output: {
      path: path.join(__dirname, './dist'),
      libraryTarget: 'umd',
      filename: isProd ? '[name].min.js' : '[name].js',
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-typescript', '@babel/preset-env', '@babel/preset-react'],
              plugins: [
                '@babel/plugin-proposal-object-rest-spread',
                '@babel/plugin-transform-typescript',
                'babel-plugin-transform-react-remove-prop-types',
              ],
            },
          },
        },
      ],
    },
    plugins: [
      new BundleAnalyzerPlugin({
        logLevel: 'silent',
        analyzerMode: 'static',
        openAnalyzer: false,
        reportFilename: `reports/bundle-visualizer-${type}.html`,
      }),
    ],
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          extractComments: {
            condition: true,
            banner: () =>
              type === 'banner-message'
                ? `\n\n  common-vendor-dependencies - v${packageVersion}-${NODE_ENV} | ${new Date().toString()}\n\n  As of version 3.0.0,  please only use this file for the banner message and references to the versions outputted in the chunked vendor bundle files.`
                : '',
          },
        }),
      ],
    },
  }
}

const externals = { react: 'React', 'react-dom': 'ReactDOM' }

const webpackModules = []
const vendors = [
  { name: 'banner-message' },
  { name: 'react' },
  { name: 'sentry', externals },
  { name: 'dayjs', externals },
  { name: 'styledComponents', externals },
  { name: 'superagent', externals },
]

for (vendor of vendors) {
  const isBannerMsg = vendor.name === 'banner-message'
  webpackModules.push({
    ...baseConfig(vendor.name),
    entry: {
      [`commonvendor${!isBannerMsg ? `-${vendor.name}` : ''}`]: `./src/commonvendor${
        !isBannerMsg ? `-${vendor.name}` : ''
        }.ts`,
    },
    externals: vendor.externals,
  })
}

module.exports = webpackModules
