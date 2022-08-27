const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');


module.exports = {
entry: {
        mainPage: './src/app.js',
    },
output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js"
},
module: {
    rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                    ]
            },
            {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            ]
},
plugins: [
    new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html'
    }),
    new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery'
    })
]
}