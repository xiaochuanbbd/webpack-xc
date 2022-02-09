const { resolve } = require('path')
const HtmlWebpackPlugins = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') 
module.exports = { 
  mode:'development',
	entry: './src/js/index.js',
	output: {
		filename: 'js/built.js',
		path: resolve(__dirname, 'build')
	},
  module:{
    rules:[
      {
        test:/\.css$/,
        use:[
        //创建style标签 放入样式
          // 'style-loader',
          //取代styleloader，提取css为单独文件
          MiniCssExtractPlugin.loader,
          //将css文件整合到js中
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugins({
      template:'./src/index.html'
    }),
    new MiniCssExtractPlugin()
  ]
};
