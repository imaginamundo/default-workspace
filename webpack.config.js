require('dotenv').config();
const { resolve } = require('path');

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
            }
        ]
    },
    devtool: 'source-map'
};