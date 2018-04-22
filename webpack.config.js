require('dotenv').config();
const { resolve }          = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const { dynamicEntries } = require('./helpers/folder');

const structureEntries = dynamicEntries(
    `${ process.env.SRC_DIR }/js/structure`,
    'js'
);

const entries = {
    'js/global': `${ process.env.SRC_DIR }/js/global.js`,
    ...structureEntries
}

module.exports = {
    mode: process.env.ENVIRONMENT,
    entry: entries,
    output: {
        filename: '[name].js',
        path: resolve(__dirname, 'dist')
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
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: true,
                        },
                    },
                    { loader: 'sass-loader' }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ],
    devtool: 'source-map'
};