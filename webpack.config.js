const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/js/app.js',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [{
                test: /\.js$/,
                loader: 'babel-loader?presets[]=es2015'
            },
            {
                test: /\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.ttf$/,
                loaders: [
                    'url-loader'
                ]
            },
            {
                test: /\.(svg|gif|png|eot|woff|ttf)$/,
                loaders: [
                    'url-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'scroll'
        }),
        new HtmlWebpackPlugin({
            filename: 'photos.html'
        })

    ],
    output: {
        path: path.resolve(__dirname + '/dist'),
        chunkFilename: '[name].bundle.js',
        filename: 'bundle.js'
    }
}