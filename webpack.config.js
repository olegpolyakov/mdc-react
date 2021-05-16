const path = require('path');
const CssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const loaders = {
    babel: {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: [
                    ['@babel/plugin-proposal-optional-chaining']
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
                    postcssOptions: {
                        plugins: ['postcss-preset-env']
                    }
                }
            },
            {
                loader: 'sass-loader',
                options: {
                    webpackImporter: false,
                    sassOptions: {
                        includePaths: [path.resolve('node_modules')]
                    }
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
            library: {
                root: 'MDCReact',
                commonjs: 'mdc-react'
            },
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

        devtool: (env === 'dev') ? 'eval-source-map' : undefined,

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
            'react': {
                root: 'React',
                commonjs: 'react',
                commonjs2: 'react'
            },
            'react-dom': {
                root: 'ReactDOM',
                commonjs: 'react-dom',
                commonjs2: 'react-dom'
            }
        }
    };
};