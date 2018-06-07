const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const debug = false

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname ,'dist')
  },
  mode: 'development',
  module: {
    rules: [
      { test: /\.vue$/, loader: 'vue-loader' },
      { test: /\.css$/, loader: 'vue-style-loader!css-loader' },
      { test: /\.scss$/, loader: 'vue-style-loader!css-loader!sass-loader' },
      { test: /\.js/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.(png|jpg|jpeg|gif|svg)$/, loader: 'file-loader?name=[name].[ext]?[hash]' }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      title: 'My Webpack App',
      minify: debug ? false : {
        collapseWhitespace: true
      },
    }),
  ]
}
