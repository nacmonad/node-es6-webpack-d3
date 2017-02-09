import webpack from 'webpack';
import path from 'path';

const debug = process.env.NODE_ENV !== "production";

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: [
  "./0-world/viz.js"
  ],
  output: {
    path: __dirname +"/0-world",
    filename: "bundle.min.js"
  },
  module: {
    loaders:[
      { test: /\.js$/, loaders: ['babel'], include: path.join(__dirname, 'node_modules/babel-core') }
    ]
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
  ],
};