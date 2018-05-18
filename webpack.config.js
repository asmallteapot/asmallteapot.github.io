const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
	mode: 'none',
	entry: './_src/site.js',
	output: {
		path: path.resolve(__dirname, 'assets/'),
		filename: 'site.js'
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'site.css'
		})
	],
	module: {
		rules: [
			{
				test: /\.(css|scss)$/,
				use: [
					{ loader: MiniCssExtractPlugin.loader },
					{ loader: 'css-loader' },
					{ loader: 'sass-loader'}
				]
			}
		]
	}
};

