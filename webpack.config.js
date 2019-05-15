/* global __dirname, require, module*/

const path = require("path");
const env = require("yargs").argv.env; // use --env with webpack 2
const pkg = require("./package.json");

let libraryName = pkg.name;

let outputFile;

if (env === "build") {
    outputFile = libraryName + ".min.js";
} else {
    outputFile = libraryName + ".js";
}

const config = {
    entry: __dirname + "/src/index.js",
    devtool: "source-map",
    optimization: {
        minimize: env === "build"
    },
    output: {
        path: __dirname + "/lib",
        filename: outputFile,
        library: libraryName,
        libraryTarget: "umd",
        umdNamedDefine: true,
        globalObject: "typeof self !== 'undefined' ? self : this"
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                loader: "babel-loader",
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /(\.jsx|\.js)$/,
                loader: "eslint-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["iso-morphic-style-loader", "css-loader"]
            }
        ]
    },
    resolve: {
        modules: [path.resolve("./node_modules"), path.resolve("./src")],
        extensions: [".json", ".js"]
    }
};

module.exports = config;
