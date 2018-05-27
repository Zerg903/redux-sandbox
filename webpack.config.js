module.exports = (env, argv) => {

    const path = require('path');
    const CopyPlugin = require('copy-webpack-plugin');
    const ExtractPlugin = require('extract-text-webpack-plugin');

    const mode = argv.mode || 'development';
    const outputPath = path.join(__dirname, 'dist');
    const assetsPath = './assets';
    const sourcePath = './react';
    const basePath = path.resolve(sourcePath);

    // register plugins

    const plugins = [];

    //if (mode === 'production') {
    // copy static content to output
    plugins.push(new CopyPlugin([{ from: './static' }]));
    //}

    // create config

    return {
        entry: [
            path.join(basePath, 'index.jsx')
        ],
        devtool: 'source-map',
        mode: mode,
        output: {
            filename: path.join(assetsPath, 'script.js'),
            path: outputPath,
            publicPath: ''
        },
        resolve: {
            extensions: ['.jsx', '.js']
        },
        module: {
            rules: [{
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }]
        },
        plugins: plugins
    };
};