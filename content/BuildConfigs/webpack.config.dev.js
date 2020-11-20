const config = require('./webpack.config');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

config.plugins.push(
    new MiniCssExtractPlugin({
        filename: '../css/[name].css',
    })
);

module.exports = config;
