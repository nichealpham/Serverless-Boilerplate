const path = require('path');
const webpackCleaner = require('clean-webpack-plugin')

// the path(s) that should be cleaned
let pathsToClean = [
    'dist',
    'build'
];

// the clean options to use
let cleanOptions = {
    // root:     '/full/webpack/root/path',
    // exclude:  ['shared.js'],
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
    ]
};