var webpack = require('webpack');
const path = require('path')

module.exports = {
	entry: path.resolve(__dirname, './src/index.js'),
	output: {
		path: path.resolve(__dirname, "dist/assets"),
		filename: "bundle.js",
		publicPath: "assets"
	},
	devServer:{
		inline: true,
		contentBase: './dist',
		port: 3000
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query:{
					presets:['stage-0', 'react']
				}
			},
			{
				test: /\.json$/,
				exclude: /(node_modules)/,
				loader: 'json-loader'
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader!autoprefixer-loader'
			},
			{
				test:  /\.scss$/,
				loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
			}
		]
	},
    resolve:{
        // modules: [path.join(__dirname, 'src'), 'node_modules'],
        extensions: ['.js', '.jsx']
    }
}