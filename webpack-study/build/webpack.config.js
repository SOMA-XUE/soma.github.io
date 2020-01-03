const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode:'development',
    entry:{
        main:path.resolve(__dirname,'../src/main.js'),
        header:path.resolve(__dirname,'../src/header.js'),

    },
    output:{
        filename:'[name].[hash:8].js',
        path:path.resolve(__dirname, '../dist')
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'../public/index.html'),
            filename:'index.html',
            chunks:['main','header'],
        }),
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'../public/header.html'),
            filename:'header.html',
            chunks:['header']
        }),
        new CleanWebpackPlugin(),
    ],
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader','css-loader'
                ]
            },
            {
                test:/\.less$/,
                use:[
                    'style-loader','css-loader','less-loader'
                ]
            }
        ]
    }
}