const autoprefixer = require('autoprefixer');
const CopyPlugin = require('copy-webpack-plugin');
const { default: ImageminPlugin } = require('imagemin-webpack-plugin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const StylelintPlugin = require('stylelint-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        scripts: path.join(process.cwd(), 'Assets/Scripts/index.ts'),
        styles: path.join(process.cwd(), 'Assets/Styles/index.scss'),
    },
    output: {
        path: path.join(process.cwd(), 'wwwroot/js'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /(\.ts(x?)$)/,
                exclude: /node_modules/,
                loader: 'tslint-loader',
                options: {
                    configFile: path.join(
                        process.cwd(),
                        'BuildConfigs/tslint.json'
                    ),
                    emitErrors: true,
                },
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
                                        useBuiltIns: 'entry',
                                    },
                                ],
                            ],
                        },
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: path.join(
                                process.cwd(),
                                'BuildConfigs/tsconfig.json'
                            ),
                        },
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
                            plugins: function () {
                                return [autoprefixer()];
                            },
                        },
                    },
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new RemoveEmptyScriptsPlugin(),
        new MiniCssExtractPlugin({
            filename: '../css/styles.css',
        }),
        new CopyPlugin([
            {
                from: path.join(process.cwd(), 'Assets/Content/Theme.png'),
                to: path.join(process.cwd(), 'wwwroot/Theme.png'),
            },
            {
                from: path.join(process.cwd(), 'Assets/Content'),
                to: path.join(process.cwd(), 'wwwroot/content'),
            },
            {
                from: path.join(process.cwd(), 'Assets/Fonts'),
                to: path.join(process.cwd(), 'wwwroot/fonts'),
            },
            {
                from: path.join(
                    process.cwd(),
                    'node_modules/lightgallery.js/dist/fonts'
                ),
                to: path.join(process.cwd(), 'wwwroot/fonts'),
            },
            {
                from: path.join(
                    process.cwd(),
                    'node_modules/lightgallery.js/dist/img'
                ),
                to: path.join(process.cwd(), 'wwwroot/img'),
            },
        ]),
        new ImageminPlugin({
            optipng: { optimizationLevel: 2 },
            pngquant: { quality: '65-90', speed: 4 },
            svgo: {
                plugins: [
                    { removeUnknownsAndDefaults: false },
                    { cleanupIDs: false },
                    { removeViewBox: false },
                ],
            },
            plugins: [imageminMozjpeg({ quality: 75 })],
        }),
        new StylelintPlugin({
            configFile: path.join(process.cwd(), 'BuildConfigs/.stylelintrc'),
            fix: true,
            syntax: 'scss',
        }),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};
