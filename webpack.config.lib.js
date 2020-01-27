const path = require('path')
const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const version = require('./package.json').version

process.noDeprecation = true

const webpackConfig = () => ({
  stats: 'errors-only',
  entry: ['./src/index.tsx'],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  output: {
    path: path.join(__dirname, './dist'),
    libraryTarget: 'umd',
    filename: 'index.min.js',
    globalObject: 'this',
  },
  plugins: [
    new webpack.DefinePlugin({
      COMMON_VENDOR_VERSION: JSON.stringify(version),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-typescript', '@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/plugin-transform-typescript'],
          },
        },
      },
    ],
  },
})

module.exports = webpackConfig()
