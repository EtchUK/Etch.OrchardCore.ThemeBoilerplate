const CopyPlugin = require('copy-webpack-plugin');
const { extendDefaultPlugins } = require('svgo');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const StylelintPlugin = require('stylelint-webpack-plugin');
const path = require('path');

module.exports = [
    {
        entry: {
            scripts: path.join(process.cwd(), 'Assets/Scripts/index.ts'),
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
                                            corejs: {
                                                version: 3,
                                                proposals: true,
                                            },
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
            ],
        },
        plugins: [
            new RemoveEmptyScriptsPlugin(),
            new CopyPlugin({
                patterns: [
                    {
                        from: path.join(
                            process.cwd(),
                            'Assets/Content/Theme.png'
                        ),
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
                ],
            }),
            new ImageMinimizerPlugin({
                minimizerOptions: {
                    plugins: [
                        ['optipng', { optimizationLevel: 2 }],
                        ['pngquant', { quality: [0.65, 0.9], speed: 4 }],
                        [
                            'svgo',
                            {
                                plugins: extendDefaultPlugins([
                                    {
                                        name: 'removeUnknownsAndDefaults',
                                        active: false,
                                    },
                                    {
                                        name: 'cleanupIDs',
                                        active: false,
                                    },
                                    {
                                        name: 'removeViewBox',
                                        active: false,
                                    },
                                ]),
                            },
                        ],
                    ],
                    encodeOptions: {
                        mozjpeg: {
                            quality: 75,
                        },
                    },
                },
            }),
        ],
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
    },
    {
        entry: {
            styles: path.join(process.cwd(), 'Assets/Styles/index.scss'),
        },
        output: {
            path: path.join(process.cwd(), 'wwwroot/css'),
        },
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                url: false,
                            },
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    plugins: [['autoprefixer']],
                                },
                            },
                        },
                        'sass-loader',
                    ],
                },
            ],
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: '../css/styles.css',
            }),
            new StylelintPlugin({
                configFile: path.join(
                    process.cwd(),
                    'BuildConfigs/.stylelintrc'
                ),
                fix: true,
                syntax: 'scss',
            }),
        ],
    },
];
