const { override, addBabelPlugin, addWebpackPlugin } = require('customize-cra');
const StyleXPlugin = require('@stylexjs/webpack-plugin');

module.exports = override(
  addBabelPlugin('@stylexjs/babel-plugin'),
  addWebpackPlugin(new StyleXPlugin({
    filename: 'styles.css',
  }))
);
