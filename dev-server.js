var webpack = require('webpack');
var webpackConfig = require('./webpack.config');
var compiler = webpack(webpackConfig);
var express = require('express');
var app = express();
// 用于打开浏览器
var opn = require('opn');
// 文档用法
app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, 
    publicPath: webpackConfig.output.publicPath
}));
app.use(require("webpack-hot-middleware")(compiler));

// 浏览器端口号
var port = 9090;

module.exports = app.listen(port, function () {
    opn('http://localhost:' + port);
});

