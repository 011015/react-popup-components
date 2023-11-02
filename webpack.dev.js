const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    devtool: 'source-map',
    devServer: {
        hot: true,
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            filename: path.resolve(__dirname, 'dist/index.html')
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.jsx?$/i,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    }
                }]
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset',
                generator: {
                    filename: 'assets/[hash][ext][query]'
                }
            }
        ]
    },
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
        }
    }
}

module.exports = config;