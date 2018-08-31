const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true
    })
  ],
  devServer: {
    port: 8888,
    open: true
  },
  devtool: 'cheap-module-eval-source-map '
};
