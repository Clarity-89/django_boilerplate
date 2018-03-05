var webpack = require('webpack');
var paths = require('./build/paths');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractMainCss = new ExtractTextPlugin({
    filename: '../css/screen.css'
});


var extractPrintCss = new ExtractTextPlugin({
    filename: '../css/print.css'
});

// Separate loader for styles with Bootstrap
var extractBSCss = new ExtractTextPlugin({
    filename: '../css/style.css'
});

var extractConfig = {
    fallback: 'style-loader',
    use: [{
        loader: 'css-loader',
        options: {
            sourceMap: true,
            minimize: true
        }
    }, {
        loader: 'sass-loader',
        options: {
            sourceMap: true,
            minimize: true
        }
    }],
};
/**
 * Webpack configuration
 * Run using "webpack" or "gulp js"
 */
module.exports = {
    // Path to the js entry point (source)
    entry: __dirname + '/' + paths.jsEntry,

    // Path to the (transpiled) js
    output: {
        path: __dirname + '/' + paths.jsDir, // directory
        filename: 'app.js', // file
    },

    module: {
        rules: [
            {
                test: /print\.(css|sass|scss)$/,
                use: extractPrintCss.extract(extractConfig)
            }, {
                test: /screen\.(css|sass|scss)$/,
                use: extractMainCss.extract(extractConfig)
            }, {
                test: /style\.(css|sass|scss)$/,
                use: extractBSCss.extract(extractConfig)
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        cacheDirectory: true,
                    }
                }
            },
        ]
    },

    devtool: 'inline-source-map',

    // Minify output
    plugins: [
        new webpack.optimize.UglifyJsPlugin({minimize: true}),
        extractMainCss, extractPrintCss, extractBSCss
    ],

    watch: true
};
