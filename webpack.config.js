const path = require("path");
const webpack = require("webpack");

module.exports = {
	entry : {
		train: "./src/train/index.js",
		bunny: "./src/bunny/index.js",
		ruler: "./src/ruler/index.js"
	},
	mode: "development",
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: path.resolve(__dirname, "nodemodules"),
				loader: "babel-loader",
			}
		]
	},
	output: {
		path: path.resolve(__dirname, 'dist/'),
		publicPath: "/dist/",
		filename: "[name].bundle.js"
	},
	devServer: {
		contentBase: path.join(__dirname, "public/"),
		port: 3000,
		publicPath: "http://localhost:3000/dist/",
		hotOnly: true
	}
};
