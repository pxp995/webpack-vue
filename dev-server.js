var webpack = require('webpack');
var webpackConfig = require('./webpack.config');
var compiler = webpack(webpackConfig);
var express = require('express');
var app = express();
// 用于打开浏览器
var opn = require('opn');

// 文档用法
var devMiddleware = require("webpack-dev-middleware")(compiler, {
    noInfo: true, 
    publicPath: webpackConfig.output.publicPath
});
var hotMiddleware = require("webpack-hot-middleware")(compiler, {
    log: false,
    heartbeat: 2000
});

compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        hotMiddleware.publish({ action: 'reload' })
        cb()
    })
})

app.use(devMiddleware);
app.use(hotMiddleware);

// 浏览器端口号
var port = 9090;

module.exports = app.listen(port, function () {
    opn('http://localhost:' + port);
});

