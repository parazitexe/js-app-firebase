
const path = require('path');
const HTMLplugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack-dev-server');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: "bundle.[chunkhash].js",
        path: path.resolve(__dirname, 'public')
    },
    devServer: {
      port:3000
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [
        new HTMLplugin({template: "./src/index.html"}),
        new CleanWebpackPlugin()
    ]
}
