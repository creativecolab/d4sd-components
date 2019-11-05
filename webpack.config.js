var path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
    mode: 'production',
    entry: './index.tsx',
    output: {
        path: path.resolve('lib'),
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                include:path.resolve('src'),
                use: 'babel-loader'
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /(node_modules)/,
                include:path.resolve('components'),
                use: 'ts-loader'
            },
            {
                 test: /\.(less|css)$/,
                 use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", '.js', '.jsx', '.css', '.less']
    },
    plugins: [
      new BundleAnalyzerPlugin()
    ]
}
