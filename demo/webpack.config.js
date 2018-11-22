const path = require('path');

const loaders = {
    babel: {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['babel-preset-env', 'babel-preset-stage-2', 'react']
            }
        }
    },

    style: {
        test: /\.s?css?/,
        use: [
            'style-loader',
            'css-loader',
            {
                loader: 'sass-loader',
                options: {
                    includePaths: [path.resolve('node_modules')]
                }
            }
        ]
    }
};

module.exports = {
    mode: 'development',
    
    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname),
        filename: 'index.js'
    },

    module: {
        rules: [loaders.babel, loaders.style]
    },

    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        publicPath: '/'
    },

    resolve: {
        extensions: ['.js', '.json', '.jsx', '*'],

        alias: {
            src: path.resolve(__dirname, '..', 'src')
        }
    }
};