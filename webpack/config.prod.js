var merge = require('webpack-merge');
var prodConfig = require('./config.prod.js');

module.exports = merge(prodConfig, {
    watch: true,
    mode: 'production',
});
