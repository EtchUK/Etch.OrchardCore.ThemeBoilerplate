const autoprefixer = require('autoprefixer');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');

module.exports = {
    entry: {
        scripts: './Assets/Scripts/index.js',
        styles: './Assets/Styles/index.scss',
    },
    output: {
        path: path.resolve(__dirname, 'wwwroot/js'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader?-url',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function() {
                                return [
                                    autoprefixer('last 1 version', 'ie 10'),
                                ];
                            },
                        },
                    },
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new FixStyleOnlyEntriesPlugin(),
        new CleanWebpackPlugin([
            'wwwroot/css',
            'wwwroot/js',
            'wwwroot/patterns',
        ]),
        new MiniCssExtractPlugin({
            filename: '../css/style.css',
        }),
    ],
};
