const path = require('path');
const webpack = require('webpack');
const CssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const autoprefixer = require('autoprefixer');

const loaders = {
    babel: {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: [
                    ['@babel/plugin-proposal-class-properties', { loose: true }]
                ]
            }
        }
    },

    styles: {
        test: /\.scss$/,
        use: [
            CssExtractPlugin.loader,
            {
                loader: 'css-loader'
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
        entry: './src/index.js',

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
            new CssExtractPlugin({
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
                }),
                new OptimizeCSSAssetsPlugin({})
            ]
        },

        externals: {
            'react': 'react',
            'react-dom': 'react-dom',
            'react-transition-group': 'react-transition-group'
        }
    };
};