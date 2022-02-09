const commenConfig = require('./webpack.base.config')
 const {smart:merge} = require('webpack-merge')
const devConfig = {
  mode:'development'
}
module.exports = merge(commenConfig,devConfig)
