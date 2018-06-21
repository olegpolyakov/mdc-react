const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const autoprefixer = require('autoprefixer');

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

    styles: {
        test: /\.scss$/,
        use: [
            MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    minimize: true
                }
            },
            {
                loader: 'postcss-loader',
                options: {
                    plugins: [autoprefixer]
                }
            },
            {
                loader: 'sass-loader',
                options: {
                    includePaths: [path.resolve('node_modules')]
                }
            }
        ]
    }
};

module.exports = env => {
    return {
        entry: './index.js',

        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'index.js',
            library: 'mdc-react',
            libraryTarget: 'umd'
        },

        module: {
            rules: [loaders.babel, loaders.styles]
        },

        resolve: {
            extensions: ['.js', '.json', '.jsx', '*']
        },

        plugins: [
            new MiniCssExtractPlugin({
                filename: 'index.css'
            })
        ],

        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    uglifyOptions: {
                        output: {
                            comments: false
                        }
                    }
                })
            ]
        },

        externals: {
            'react': 'react',
            'react-dom': 'react-dom'
        }
    };
};