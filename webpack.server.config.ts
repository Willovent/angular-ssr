const ngtools = require('@ngtools/webpack');
const config = {
    entry: {
        main: './src/main.server.ts'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    target: 'node',
    output: {
        path: __dirname + '/dist',
        filename: 'main.server.js'
    },
    plugins: [
        new ngtools.AotPlugin({
            tsConfigPath: './tsconfig.server.json',
        })
    ],
    module: {
        rules: [
            { test: /\.ts$/, loader: '@ngtools/webpack' },
            { test: /\.css$/, loader: 'raw-loader' },
            { test: /\.html$/, loader: 'raw-loader' }
        ]
    }
};

module.exports = config;
