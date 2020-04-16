const path = require('path');
var fs = require('fs');

const config = require('./webpack.config');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

config.plugins.push(
    new MiniCssExtractPlugin({
        filename: '../css/[name].css',
    })
);

config.plugins.push(
    new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: [
            path.join(process.cwd(), 'wwwroot/content'),
            path.join(process.cwd(), 'wwwroot/css'),
            path.join(process.cwd(), 'wwwroot/fonts'),
            path.join(process.cwd(), 'wwwroot/img'),
            path.join(process.cwd(), 'wwwroot/js'),
            path.join(process.cwd(), 'wwwroot/patterns'),
            path.join(process.cwd(), 'wwwroot/Theme.png'),
        ],
    }),
)

function replaceInFile(chunks, file) {
    var filePath = path.join(__dirname, file);
    var contents = fs.readFileSync(filePath, 'utf8');

    var contentsOutput = contents;

    for (var i = 0; i < chunks.length; i++) {
        contentsOutput = contentsOutput.replace(
            new RegExp('/' + chunks[i].names[0] + '.js', 'gi'),
            '/' + chunks[i].names[0] + '.js?v=' + chunks[i].hash
        );
        contentsOutput = contentsOutput.replace(
            new RegExp('/' + chunks[i].names[0] + '.css', 'gi'),
            '/' + chunks[i].names[0] + '.css?v=' + chunks[i].hash
        );
    }

    fs.writeFileSync(filePath, contentsOutput);
}

// Plugin to replace non-cache busted versions of
// JS and CSS outputs with their cache busted versions
config.plugins.push(function () {
    this.plugin('done', function (statsData) {
        var stats = statsData.toJson();

        if (!stats.errors.length) {
            replaceInFile(
                stats.chunks,
                '../PatternLibrary/patterns/_preview.hbs'
            );
        }
    });
});

module.exports = config;
