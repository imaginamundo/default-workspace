require('dotenv').config();
const { resolve }          = require('path');
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
                            importLoader: 2
                        }
                    }
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