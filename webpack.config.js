const path = require('path');
// 自动生成html模版
const htmlWebpackPlugin = require('html-webpack-plugin');
// 清除／.dist文件夹
const cleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry: {
        app: './src/index.js'
    },
    devtool: 'inline-source-map',
    // 配置开发服务器，传递参数为1.服务器所在目录；2.进行压缩；3.监听端口号
    devServer: {
        contentBase: './dist',
        compress: true,
        port: 9090
    },
    plugins: [
        // 配置生成的html模板
        new htmlWebpackPlugin({
            template: './index.html'
        }),
        new cleanWebpackPlugin(['dist'])
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules:[
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    // 配置省略文件扩展名
    resolve: {
        extensions: ['.js', '.vue', '.css'],
        // 配置文件别名
        alias: {
            vue: 'vue/dist/vue.min.js'
        }
    }
};