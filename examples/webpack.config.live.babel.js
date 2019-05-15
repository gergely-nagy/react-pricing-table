const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./examples/index.js",

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/"
        // necessary for HMR to know where to load the hot update chunks
    },

    devtool: "inline-source-map",

    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            babelrc: true
                        }
                    }
                ]
            },
            {
                test: /\.(css)$/,
                loader: "iso-morphic-style-loader!css-loader"
            }
        ]
    },

    devServer: {
        hot: true,
        // enable HMR on the server

        contentBase: path.resolve(__dirname, "dist"),
        // match the output path

        publicPath: "/"
        // match the output `publicPath`
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally

        new webpack.NamedModulesPlugin()
        // prints more readable module names in the browser console on HMR updates
    ]
};
