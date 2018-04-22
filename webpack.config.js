require('dotenv').config();

const { resolve } = require('path');

const entries = {
    'js': `${ process.env.SRC_DIR }/js/script.js`,
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