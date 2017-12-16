const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

let config = {
    entry: './src/main.jsx',
    output: {
        path: path.resolve(__dirname, 'assets'),
        filename: 'main.js',
        publicPath: '/assets/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: ['react-hot-loader/webpack', 'babel-loader']
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [ 'css-loader', 'sass-loader' ]
                } )
            },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(process.env.NODE_ENV)
        }),
        new ExtractTextPlugin( {
            disable: false,
            filename: 'style.bundle.css',
            allChunks: true
        }),
    ]
}

if(process.env.NODE_ENV === 'production') {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    )
    config.plugins.push(
        new webpack.optimize.OccurrenceOrderPlugin()
    )
}else{
    config.entry = ['react-hot-loader/patch', config.entry ]
}

module.exports = config