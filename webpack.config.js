var path = require('path');

module.exports = {
    context: __dirname,
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "./bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel",
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'stage-0', 'react']
                }
            },
            
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            
            {
                test: /\.css$/,
                loader: "style!css"
            }
        ],
    },
};