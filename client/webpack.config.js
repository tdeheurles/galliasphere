var path = require('path');
var webpack = require('webpack')

module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        path: __dirname + "/public",
        filename: "bundle.js",
        publicPath: "http://192.168.99.100:8080/"
    },
    module: {
        loaders: [{ 
            test: /\.jsx?$/, 
            exclude: /node_modules/, 
            loader: "babel-loader",
            query: {
                presets: ['react', 'es2015']
            }
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true
        })
    ],
    watchOptions: {
      poll: true
    }
};
