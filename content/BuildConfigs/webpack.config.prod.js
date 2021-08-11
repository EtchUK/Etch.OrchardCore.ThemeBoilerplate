const path = require('path');

const config = require('./webpack.config');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

config[0].plugins.push(
    new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: [
            path.join(process.cwd(), 'wwwroot/content'),
            path.join(process.cwd(), 'wwwroot/fonts'),
            path.join(process.cwd(), 'wwwroot/img'),
            path.join(process.cwd(), 'wwwroot/js'),
            path.join(process.cwd(), 'wwwroot/Theme.png'),
        ],
    })
);

config[1].plugins.push(
    new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: [path.join(process.cwd(), 'wwwroot/css')],
    })
);

module.exports = config;
