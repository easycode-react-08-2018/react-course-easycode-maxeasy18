const path = require("path");

module.exports = {
	entry : path.resolve('./src/main.js'),
	output: {
		filename: 'bundle.js',
		publicPath: '/'
	},
	mode: 'development',
	sourceMap: true,
	module: {
		rules: [
			{
				test: /.js$/,
				loader: 'babel-loader'
			}
		]

	}
}