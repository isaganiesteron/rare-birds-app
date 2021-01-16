var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html'
  })],
  devServer: {
    historyApiFallback: true,
    port: 9000,
    // Send API requests on localhost to API server get around CORS.
    proxy: {
      '/api': {
        target: {
          host: "0.0.0.0",
          protocol: 'http:',
          port: 3000
        },
        pathRewrite: {
          '^/api': ''
        }
      }
    }

  },
  externals: {
    // global app config object
    config: JSON.stringify({
      apiUrl: 'api'
    })
  }
}