require('dotenv').config();

const fs = require('fs');
const path = require('path');

const helper = require('./_helpers');

const structureEntries = helper.dynamicEntries(
    `${ process.env.WEBPACK_SRC_JS }/structure`,
    'js'
);

const entries = {
    'js/global': `${ process.env.WEBPACK_SRC_JS }/global.js`,
    ...structureEntries
}

module.exports = {
    mode: 'none',
    entry: entries,
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    "source-map-loader",
                    "eslint-loader"
                ]
            }
        ]
    }
};