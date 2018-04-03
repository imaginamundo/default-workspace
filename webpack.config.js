const fs = require('fs');
const path = require('path');

const config = require('./_config');
const helper = require('./_helpers');

const structureEntries = helper.dynamicEntries(
    `${ config.src.js }/structure`,
    'js'
);
const vendorEntries = helper.dynamicEntries(
    `${ config.src.js }/vendor`,
    'js'
);

const entries = {
    'js/global': `${ config.src.js }/global.js`,
    ...vendorEntries,
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