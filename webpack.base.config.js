const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')// 压缩文件
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
	entry:__dirname+ '/src/main.js',
	output: {
		filename: 'bundle.js'
	},
    //     devServer: {
    //     contentBase: "./src",//本地服务器所加载的页面所在的目录
    //     historyApiFallback: true,//不跳转
    //     inline: true//实时刷新
    // },
    module:{
      rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      },
      {
          test:/\.scss/,
          use:['style-loader','css-loader','sass-loader']
      },
      {
          test:/\.(png|jpg)$/,
          use:{
              loader:'url-loader',
              options:{
                  limit:8192
              }
          }
      }
    ]
    },
    plugins: [new HtmlWebpackPlugin({ template: __dirname+'/src/index.html' })  ,new UglifyJsPlugin({ test: /\.js(\?.*)?$/i}),new OpenBrowserPlugin({
      url:'http://localhost:9000'
    })],

};


