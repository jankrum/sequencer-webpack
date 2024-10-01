const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/template.html',
            filename: 'index.html',
        })
    ]
}

module.exports = config