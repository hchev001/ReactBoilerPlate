const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 
                {
                    loader:"babel-loader"
                }
            },
            {
              test: /\.scss$/,
              use: [
                {
                  loader: "style-loader" // creates style nodes from JS strings
                },
                {
                  loader: "css-loader", // translate CSS into CommonJS
                  options: {
                    modules: true,
                    importLoaders: 1,
                    localIndentName: "[name]_[local]_[hash:base64]",
                    sourceMap: true,
                    minimize: true
                  }
                },
                {
                  loader: "sass-loader" // compiles Sass to CSS
                }
              ]
            }
        ]
    },
    plugins: [htmlPlugin]
};
