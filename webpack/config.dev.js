var merge = require('webpack-merge');
var baseConfig = require('./config.base.js');

module.exports = merge(baseConfig, {
    watch: true,
    mode: 'development',
});
