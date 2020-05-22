const path = require('path');

module.exports = 
{
	context: __dirname + "/src",
	
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: { 
						presets: ['@babel/preset-env'] },
				},
			}
		,],
	},

	entry: {
		app: "./app.js",
	},

	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist", "assets"),
		publicPath: "/assets",
	},

	devServer: {
		contentBase: path.resolve(__dirname, 'src'),
	},
}