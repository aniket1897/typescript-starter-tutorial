const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src', 'app.ts'),
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    mode:'development',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      compress: true,
      port: 3000,
    },
};