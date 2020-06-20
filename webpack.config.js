var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    resolve: {
        extensions: ['.js', '.vue']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        chunkFilename: '[id].js',
        publicPath: ''
    },
    module: {
        rules: [
            {
                test: /\.vue?$/,
                exclude: /(node_modules)/,
                use: 'vue-loader'
            },
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
    devServer: {
        historyApiFallback: true
    },
    externals: {
        
        // global app config object
        // NOTE: FOR PRODUCTION ON AZURE!!!
        // config: JSON.stringify({ apiUrl: 'https://pso-express-react-jwt-signup.azurewebsites.net/' })
		 
		// REAL LOCAL BACKEND - FOR TESTING
         config: JSON.stringify({ apiUrl:'http://localhost:443' })
         
         // config: JSON.stringify({ apiUrl: 'http://localhost:4000' })
    }
}