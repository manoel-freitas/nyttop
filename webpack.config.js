'use strict'
const Dotenv = require('dotenv-webpack')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
function resolve(dir) {
  return path.join(__dirname, dir)
}
const config = {
  entry: ['./src/main.js'],
  output: {},
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new VueLoaderPlugin(),
    new Dotenv({
      path: './.env'
    })
  ],
  resolve: {
    alias: {
      '@': resolve('src'),
      molecules: resolve('src/components/molecules'),
      organisms: resolve('src/components/organisms'),
      helpers: resolve('src/helpers')
    },
    extensions: ['.js', '.vue', '.json']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.s[a|c]ss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.(js|vue)$/,
        use: 'eslint-loader',
        enforce: 'pre'
      }
    ]
  }
}

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devServer = {
      port: 3000,
      stats: 'minimal',
      overlay: true,
      publicPath: '/nyttop',
      host: '0.0.0.0',
      historyApiFallback: {
        index: 'index.html'
      },
      hotOnly: true
    }
    config.output.publicPath = '/nyttop'
    config.devtool = '#eval-source-map'
    config.plugins.push(new webpack.HotModuleReplacementPlugin())
  }

  if (argv.mode === 'production') {
    config.output.path = resolve('dist/nyttop')
    config.output.publicPath = '/nyttop/'
    config.plugins.push(
      new CopyWebpackPlugin([
        {
          from: resolve('static/'),
          to: resolve('dist/nyttop/static'),
          toType: 'dir'
        }
      ])
    )
  }

  return config
}
