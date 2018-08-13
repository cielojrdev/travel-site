var path = require('path');

module.exports = {
    mode: 'development',
    entry: "./app/assets/scripts/App.js",
    output: {
        path: path.resolve(__dirname, "./app/temp/scripts"),
        filename: "App.js"
    }
    // module: {
    //     rules: [
    //         {
    //             test: /\.js$/,
    //             // exclude: /node_modules/,
    //             use: {
    //                 loader: "babel-loader",
    //                 options: {
    //                     presets: [
    //                         "env"
    //                     ]
    //                 }
    //             }
    //         }
    //     ]
    // },
    // // resolveLoader: {
    // //     modules: ['node_modules', __dirname + './node_modules'],
    // // },
    // resolve: {
    // // options for resolving module requests
    // // (does not apply to resolving to loaders)
    //     modules: [
    //         "node_modules",
    //         path.resolve(__dirname, "app")
    //     ],
    // }
}