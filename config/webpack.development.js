const webpack = require('webpack');

module.exports = function(env) {
  return {
    entry: {
      main: './app/index.js',
      vendor: ['axios', 'react', 'react-dom']
    },
    output: {
      filename: '[chunkhash].[name].js',
      path: './dist'
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
      })
    ]
  }
}