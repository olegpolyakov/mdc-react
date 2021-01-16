const path = require('path');
const CssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const loaders = {
    typescript: {
        test: /\.(ts|tsx)?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    },
    babel: {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: [['@babel/plugin-proposal-optional-chaining']]
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

module.exports = () => {
    return {
        entry: {
            js: './src/index.js'
            // ts: './src/index.js',
        },

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
            rules: [loaders.typescript, loaders.babel, loaders.styles]
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
            react: {
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
