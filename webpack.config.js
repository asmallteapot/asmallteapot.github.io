const path = require('path');

module.exports = {
	mode: 'none',
	entry: './webpack/main.js',
	output: {
		path: path.resolve(__dirname, 'assets/javascripts/'),
		filename: 'bundle.js'
	},
	module: {
		rules: []
	}
};

