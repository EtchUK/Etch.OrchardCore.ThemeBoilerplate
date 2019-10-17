const path = require('path');
var fs = require('fs');

const config = require('./webpack.config');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

config.output.filename = '[name].[chunkhash].js';

config.plugins.push(
    new MiniCssExtractPlugin({
        filename: '../css/[name].[chunkhash].css',
    })
);

function replaceInFile(chunks, file) {
    var filePath = path.join(__dirname, file);
    var contents = fs.readFileSync(filePath, 'utf8');

    var contentsOutput = contents;

    for (var i = 0; i < chunks.length; i++) {
        contentsOutput = contentsOutput.replace(
            new RegExp('/' + chunks[i].names[0] + '.js', 'gi'),
            '/' + chunks[i].names[0] + '.' + chunks[i].hash + '.js'
        );
        contentsOutput = contentsOutput.replace(
            new RegExp('/' + chunks[i].names[0] + '.css', 'gi'),
            '/' + chunks[i].names[0] + '.' + chunks[i].hash + '.css'
        );
    }

    fs.writeFileSync(filePath, contentsOutput);
}

// Plugin to replace non-cache busted versions of
// JS and CSS outputs with their cache busted versions
config.plugins.push(function() {
    this.plugin('done', function(statsData) {
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
