var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/app/main.js',
    output: {
        path: __dirname + '/out',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: path.join(__dirname, 'src/app/'), loader: 'babel-loader'}
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ],
    stats: {
        colors: true
    }
};
