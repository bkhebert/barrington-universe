const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// simplifies creation of HTML files to serve your webpack bundles
// does this by creating HTML files automatically in your output directory
//
const {CleanWebpackPlugin} = require('clean-webpack-plugin'); 
// CleanWebpackPlugin removes all files inside webpack's output.path directory, as well as all unused webpack assets after every successful rebuild.

const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');
const CLIENT_DIR = path.resolve(__dirname, 'src', 'client');
// this points to the client directory, __dirname brings us to this file, 
// ex. src & client bring us to the client directory

module.exports = {
    mode: 'production', // or 'production'
    entry: path.resolve(CLIENT_DIR, 'index.jsx'), // where to begin bundling
    output: {
        path: path.resolve(DIST_DIR), // bundled output file location
        publicPath: '/', // specifies the base path for all assets within your application
        filename: 'bundle.js', // bundled output file name
        clean: true,
    },

    resolve: {
        extensions: [".js", ".jsx"],
      },
    module: {
        rules: [
            { // For pixi.js node modules
                test: /\.(m?js)$/,
                type: 'javascript/auto',
                resolve: {
                  fullySpecified: false,
                }
            },
            {
                test: /\.(pdf)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'documents/'
                    }
                  }
                ]
              },
            {
                test: /\.(png|jpg|gif|mp3|aac|ogg|ico|hdr)$/,
                type: 'asset/resource',
                generator: {
                  filename: 'assets/[name][ext]'
                }
            },
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  'css-loader',
                  'postcss-loader',
                ],
              }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(SRC_DIR, 'index.html'), // Custom template
            filename: 'index.html',
            inject: true
           
        }),
    ],

};