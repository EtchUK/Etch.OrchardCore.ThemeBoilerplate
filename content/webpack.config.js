const autoprefixer = require('autoprefixer');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    entry: {
        scripts: './Assets/Scripts/index.ts',
        styles: './Assets/Styles/index.scss',
    },
    output: {
        path: path.resolve(__dirname, 'wwwroot/js'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /(\.ts(x?)$)/,
                exclude: /node_modules/,
                loader: 'tslint-loader',
                options: { emitErrors: true },
            },
            {
                test: /(\.ts(x?)$)/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        corejs: { version: 3, proposals: true },
                                        targets: '> 0.25%, not dead',
                                        useBuiltIns: 'usage',
                                    },
                                ],
                            ],
                        },
                    },
                    {
                        loader: 'ts-loader',
                    },
                ],
            },
            {
                test: /(\.js(x?)$)/,
                exclude: /node_modules/,
                use: ['babel-loader'],
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
                path.join(process.cwd(), 'wwwroot/content'),
                path.join(process.cwd(), 'wwwroot/css'),
                path.join(process.cwd(), 'wwwroot/fonts'),
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
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};
