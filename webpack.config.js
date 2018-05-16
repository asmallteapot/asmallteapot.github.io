const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
	mode: 'none',
	entry: './webpack/site.js',
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
				test: /\.css$/,
				use: [
					{ loader: MiniCssExtractPlugin.loader },
					{ loader: 'css-loader' }
				]
			}
		]
	}
};

