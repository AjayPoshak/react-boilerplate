const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: 'inline-source-map',
	entry: './src/client/index.js',
	module: {
		rules: [{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/client/index.html',
			title: 'Bus Booking in Africa',
		}),
	],
};
