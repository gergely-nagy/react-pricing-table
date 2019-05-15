const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry: "./examples/index.js",

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },

    mode: "production",

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

    plugins: [
        // Clean dist folder
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ["./dist/build.js"]
        })
    ]
};
