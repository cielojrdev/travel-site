var path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        App: "./app/assets/scripts/App.js",
        Vendor: "./app/assets/scripts/Vendor.js"
    },
    output: {
        path: path.resolve(__dirname, "./app/temp/scripts"),
        filename: "[name].js"
    },
    // module: {
    //     rules: [
    //         {
    //             test: /\.js$/,
    //             exclude: /node_modules/,
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
    // }
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
