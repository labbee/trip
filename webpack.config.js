const
    webpack = require('webpack'),
    path = require('path'),
    htmlWebpackPlugin = require('html-webpack-plugin'),
    extractTextPlugin = require('extract-text-webpack-plugin'),
    uglifyJsPlugin = require('uglifyjs-webpack-plugin'),
    fs = require('fs')

const options = {
    entry: {
        index: './src/ui/index.js'
    },
    stats: {
        children: false
    },
    // devtool: 'eval',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[hash:4].js'
    },
    devServer: {
        inline: true,
        noInfo: true,
        hot: false
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                use: ['url-loader']
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    },

    plugins: [
        new htmlWebpackPlugin({
            template: './src/ui/index.html',
            hash: false,
            filename: 'index.html',
            inject: 'body',
            minify: {
                collapseWhitespace: true
            }
        })
    ]
}


if (process.argv.includes('--hotOnly')) {
    options.plugins.push(
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            ver: JSON.stringify('dev'),
            hash: JSON.stringify('hash')
        })
    )

    options.module.rules.push(
        {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader', 'postcss-loader']
        }
    )
} else if (process.argv.includes('-p')) {
    options.output.publicPath = '//cdn.safish.org/trip/'
    options.output.filename = '[name].[chunkhash:4].js'

    options.plugins.push(
        new extractTextPlugin({
            filename: 'index.[chunkhash:4].css',
            allChunks: true
        }),
        new webpack.DefinePlugin({
            ver: JSON.stringify('production'),
            hash: JSON.stringify(~~(Date.now() / 1000))
        }),
        new uglifyJsPlugin({
            exclude: /node_modules/,
            uglifyOptions: {
                ecma: 5,
                ie8: false,
                compress: false
            }
        })
    )

    options.module.rules.push(
        {
            test: /\.less$/,
            loader: extractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'postcss-loader', 'less-loader']
            })
        },
        {
            test: /\.css$/,
            loader: extractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'postcss-loader']
            })
        }
    )
} else {
    options.plugins.push(
        new extractTextPlugin({
            filename: 'index.[chunkhash:4].css',
            allChunks: true
        }),
        new webpack.DefinePlugin({
            ver: JSON.stringify('dev'),
            hash: JSON.stringify(~~(Date.now() / 1000))
        })
    )

    options.module.rules.push(
        {
            test: /\.less$/,
            loader: extractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'postcss-loader', 'less-loader']
            })
        },
        {
            test: /\.css$/,
            loader: extractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'postcss-loader']
            })
        }
    )
}

module.exports = options