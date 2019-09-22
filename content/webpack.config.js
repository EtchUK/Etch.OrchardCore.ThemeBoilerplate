const autoprefixer = require('autoprefixer');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const CopyPlugin = require('copy-webpack-plugin');

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
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                path.join(process.cwd(), 'wwwroot/css'),
                path.join(process.cwd(), 'wwwroot/js'),
                path.join(process.cwd(), 'wwwroot/patterns'),
            ],
        }),
        new MiniCssExtractPlugin({
            filename: '../css/styles.css',
        }),
        new CopyPlugin([
            {
                from: path.join(process.cwd(), 'Assets/Content'),
                to: path.join(process.cwd(), 'wwwroot/content'),
            },
            {
                from: path.join(process.cwd(), 'Assets/Fonts'),
                to: path.join(process.cwd(), 'wwwroot/fonts'),
            },
        ]),
    ],
};
