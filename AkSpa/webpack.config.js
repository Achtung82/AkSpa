var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

// Naming and path settings
var appName = 'app';
var entryPoint = './App/main.js';
var exportPath = path.resolve(__dirname, './wwwroot/dist');

var plugins = [];
var extractSASS = new ExtractTextPlugin("style.css");

var env = process.env.NODE_ENV;
// Differ settings based on production flag
if (env === 'production') {
    var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

    plugins.push(new UglifyJsPlugin({ minimize: true }));
    plugins.push(new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }
    ));
    appName = appName + '.js';
} else {
    appName = appName + '.js';
}
plugins.push(extractSASS);
// Main Settings config
module.exports = {
    entry: { main: entryPoint },
    output: {
        path: exportPath,
        filename: appName,
        publicPath: '/dist'
    },
    module: {
        loaders: [
            {
                test: /\.(js|vue)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    extractCSS: true
                }
            },
            {
                test: /\.(scss|sass)$/,
                loader: 'style!css!postcss-loader!sass'
            },
            {
                test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue']
    },
    plugins
};