import webpack from 'webpack'
import merge from 'webpack-merge'
import common from './webpack.common.babel'
import express from 'express'
import path from 'path'

const devWebpackConfig = merge(common, {
  // DEV config
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: common.externals.paths.dist,
    port: 8080,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    },
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: { "/**": { target: 'http://ulianovkd.pythonanywhere.com/', secure: false }  },
    setup (app) {
      app.use('/upload/',
        express.static(path.join(__dirname, '../upload')));
    }
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map'
    })
  ]
})

export default new Promise((resolve, reject) => {
  resolve(devWebpackConfig)
})
