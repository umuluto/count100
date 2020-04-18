const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry : {
		train: './src/train/index.js',
		bunny: './src/bunny/index.js',
		ruler: './src/ruler/index.js'
	},
	mode: 'development',
	resolve: {
		alias: {
			Public: path.resolve(__dirname, 'public')
		}
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: path.resolve(__dirname, 'nodemodules'),
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(png|jpe?g|gif)$/,
				use: {
					loader: 'file-loader',
					options: {
						publicPath: '/',
						name: '[path][name].[ext]',
						emitFile: false
					}
				}
			}

		]
	},
	output: {
		path: path.resolve(__dirname, 'dist/'),
		publicPath: '/dist/',
		filename: '[name].bundle.js'
	},
	devServer: {
		port: 3000,
		publicPath: 'http://localhost:3000/dist/'
	}
};
