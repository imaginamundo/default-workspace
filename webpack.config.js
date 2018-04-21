require('dotenv').config();
const path              = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const { dynamicEntries } = require('./_helpers');

const structureEntries = dynamicEntries(
    `${ process.env.WEBPACK_SRC_JS }/structure`,
    'js'
);

const entries = {
    'js/global': `${ process.env.WEBPACK_SRC_JS }/global.js`,
    ...structureEntries
}

module.exports = {
    mode: process.env.ENVIRONMENT,
    entry: entries,
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: "css-loader"
                })
            }

        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css', {
            allChunks: true
        })
    ],
    devtool: "source-map"
};