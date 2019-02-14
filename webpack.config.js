const ExtractTextPlugin = require('extract-text-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const WebpackNotifierPlugin = require('webpack-notifier')
const path = require('path')
const glob = require('glob')

const config = {
  mode: 'development',
  useSourceMap: true
}

module.exports = {
  mode: config.mode,
  context: __dirname,
  entry: './assets/app.js',
  output: {
    path: __dirname,
    filename: 'public/js/script.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: config.useSourceMap,
                importLoaders: 2
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: config.useSourceMap,
                plugins: [require('autoprefixer')({ grid: true })]
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: config.useSourceMap
              }
            }
          ]
        })
      },
      {
        test: /\.(png|jpg|gif|svg|ttc|ttf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[path][name].[ext]',
              outputPath: '',
              publicPath: '../'
              // limit: 1048576,
            }
          }
        ]
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['env', { modules: false }]]
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              extractCSS: true,
              loaders: {
                js: 'babel-loader',
                scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
                sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('public/css/style.css'),
    new VueLoaderPlugin(),
    new WebpackNotifierPlugin()
  ],
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.common.js'
    }
  }
}
