var webpack = require('webpack');
var paths = require('./build/paths');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

var extractMainCss = new MiniCssExtractPlugin({
    filename: '../css/screen.css'
});


var extractPrintCss = new MiniCssExtractPlugin({
    filename: '../css/print.css'
});

var extractConfig = {
    css: {
        loader: 'css-loader',
        options: {
            sourceMap: true,
            minimize: true
        }
    },
    sass: {
        loader: 'sass-loader',
        options: {
            sourceMap: true,
            minimize: true
        }
    }
};
/**
 * Webpack configuration
 * Run using "webpack"
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
                use: [MiniCssExtractPlugin.loader, extractConfig.css, extractConfig.sass]
            }, {
                test: /screen\.(css|sass|scss)$/,
                use: [MiniCssExtractPlugin.loader, extractConfig.css, extractConfig.sass]
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
        extractMainCss, extractPrintCss
    ],

    optimization: {
        minimizer: [
            new UglifyJSPlugin({
                uglifyOptions: {
                    output: {
                        comments: false
                    },
                    compress: {
                        unsafe_comps: true,
                        properties: true,
                        keep_fargs: false,
                        pure_getters: true,
                        collapse_vars: true,
                        unsafe: true,
                        warnings: false,
                        sequences: true,
                        dead_code: true,
                        drop_debugger: true,
                        comparisons: true,
                        conditionals: true,
                        evaluate: true,
                        booleans: true,
                        loops: true,
                        unused: true,
                        hoist_funs: true,
                        if_return: true,
                        join_vars: true,
                        drop_console: true
                    }
                }
            }),
        ]
    },

    watch: true,
    mode: 'development',
};
