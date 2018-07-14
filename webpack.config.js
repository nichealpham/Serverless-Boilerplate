const path = require('path');
const webpackCleaner = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

// the path(s) that should be cleaned
let pathsToClean = [
    'dist',
    'build'
];

// the clean options to use
let cleanOptions = {
    verbose:  true,
    dry:      false
};

module.exports = {
    mode: "production",
    entry: {
        "user.lambda": './dest/lambda/UserLambda.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        removeEmptyChunks: true,
        removeAvailableModules: true,
        mergeDuplicateChunks: false,
    },
    plugins: [
        new webpackCleaner(pathsToClean, cleanOptions),
    ],
    target: 'node',                 // in order to ignore built-in modules like path, fs, etc.
    externals: [nodeExternals()],   // in order to ignore all modules in node_modules folder
};