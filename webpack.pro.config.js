const commenConfig = require("./webpack.base.config")
 const {smart:merge} = require('webpack-merge')
const proConfig = {
  mode:'production'
}
module.exports = merge(commenConfig,proConfig )