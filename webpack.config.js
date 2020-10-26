const path = require('path');
const NodemonPlugin = require('nodemon-webpack-plugin');
module.exports={
    entry: './app/assets/scripts/App.js',
    output: {
        path: path.resolve(__dirname, 'app'),
        filename: 'bundeled.js'
    },
    mode: 'development',
    watch: true,
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader','postcss-loader']
            }

        ]
    },
    plugins: [
        require('autoprefixer'),
        require('postcss-simple-vars'),
        require('postcss-nested'),
        new NodemonPlugin()
    ]
}
