const path = require('path');
const autoprefixer = require('autoprefixer');
const CssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');

module.exports = env => [
    {
        name: 'lib',

        entry: ['./src/index.js', './src/index.scss'],

        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'index.js',
            library: {
                type: 'umd',
                name: {
                    root: 'MDCReact',
                    commonjs: 'mdc-react'
                }
            }
        },

        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                ['@babel/preset-react', {
                                    'runtime': 'automatic'
                                }]
                            ],
                            plugins: [
                                ['@babel/plugin-proposal-optional-chaining']
                            ]
                        }
                    }
                },
                {
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
                                    plugins: [autoprefixer]
                                }
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sassOptions: {
                                    includePaths: [path.resolve('node_modules')]
                                }
                            }
                        }
                    ]
                }
            ]
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
                '...',
                new CssMinimizerPlugin()
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
    },
    {
        name: 'components',

        entry: {
            avatar: ['./src/Avatar/index.js', './src/Avatar/index.scss']
        },

        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name]/index.js'
        },

        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                ['@babel/preset-react', {
                                    'runtime': 'automatic'
                                }]
                            ],
                            plugins: [
                                ['@babel/plugin-proposal-optional-chaining']
                            ]
                        }
                    }
                },
                {
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
                                    plugins: [autoprefixer]
                                }
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sassOptions: {
                                    includePaths: [path.resolve('node_modules')]
                                }
                            }
                        }
                    ]
                }
            ]
        },

        resolve: {
            extensions: ['.js', '.json', '.jsx', '*']
        },

        plugins: [
            new CssExtractPlugin({
                filename: '[name]/index.css'
            }),
            // new CopyPlugin({
            //     patterns: [
            //         {
            //             context: './src/',
            //             from: '**/styles.scss',
            //             to({ absoluteFilename }) {
            //                 const folder = path.basename(path.resolve(absoluteFilename, '..')).toLowerCase();

            //                 return `./${folder}/index.scss`;
            //             }
            //         }
            //     ],
            // })
        ],

        devtool: (env === 'dev') ? 'eval-source-map' : undefined,

        optimization: {
            minimizer: [
                '...',
                new CssMinimizerPlugin()
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
    },
    {
        name: 'docs',

        mode: 'development',

        entry: './docs/src/index.js',

        output: {
            path: path.resolve(__dirname, 'docs'),
            filename: 'index.js'
        },

        devServer: {
            compress: true,
            port: 9000,
            static: {
                directory: path.join(__dirname, 'docs'),
            }
        },

        resolve: {
            extensions: ['.js', '.json', '.jsx', '*'],
            alias: {
                '$': path.resolve(__dirname),
                '@': path.resolve(__dirname, 'docs/src'),
                'mdc-react': path.resolve(__dirname, 'src')
            }
        },

        devtool: 'eval-source-map',

        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                ['@babel/preset-react', {
                                    'runtime': 'automatic'
                                }]
                            ],
                            plugins: [
                                ['@babel/plugin-proposal-optional-chaining']
                            ]
                        }
                    }
                },
                {
                    test: /\.scss$/,
                    use: [
                        CssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    plugins: [autoprefixer]
                                }
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                //webpackImporter: false,
                                sassOptions: {
                                    includePaths: [
                                        path.resolve(__dirname),
                                        path.resolve('node_modules')
                                    ]
                                }
                            }
                        }
                    ]
                },
                {
                    test: /\.md/,
                    type: 'asset/source'
                }
            ]
        },

        plugins: [
            new CssExtractPlugin({
                filename: 'index.css'
            })
        ]
    }
];