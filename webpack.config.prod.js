const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require('path');
const deps = require("./package.json").dependencies;
const fileNameAliases = require('./filename-aliases');
const Dotenv = require('dotenv-webpack');

module.exports = {
  output: {
    path: path.resolve(__dirname,"templatesBFF/templatesProdBuild"),
  },
  devtool: "source-map",
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    alias:fileNameAliases
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: [
          "style-loader", 
          {
            loader:"css-loader",
            options: {
              modules: true, 
              importLoaders: 1,
              modules: {
                localIdentName: '[local]--[hash:base64:5]'
              }
            }
          }, 
          "sass-loader"
        ],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(jpg|jpeg|gif|png)$/,
        type: 'asset/resource'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
    ],
  },

  plugins: [
    new Dotenv({
      path: `./.env.production`,
      systemvars: true,
      ignoreStub: true
    }),
    new ModuleFederationPlugin({
      name: "guidelines",
      filename: "remoteEntry.js",
      remotes: {
        sharedLib: 'sharedLib@http://dev.obello.ai:3005/remoteEntry.js',
      },
      exposes: {
        "./GuidelinesContent":"./src/GuidelinesContent.js"
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./public/index.html",
    }),
  ],
};
