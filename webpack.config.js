const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const Dotenv = require("dotenv-webpack");
const fileNameAliases = require("./filename-aliases");
const deps = require("./package.json").dependencies;

module.exports = {
  output: {
    publicPath: "http://localhost:8089/",
  },
  devtool: "source-map",
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    alias: fileNameAliases
  },

  devServer: {
    port: 8089,
    historyApiFallback: true,
    proxy: [
      {
        context: [
          "/api/elements/loadicon",
        ],
        target: "http://localhost:3007",
      }
    ],
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
                localIdentName: "[local]--[hash:base64:5]"
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
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: /\.(jpg|jpeg|gif|png)$/,
        type: "asset/resource"
      },
    ],
  },

  plugins: [
    new Dotenv({
      path: `./.env.development`,
      systemvars: true,
      ignoreStub: true
    }),
    new ModuleFederationPlugin({
      name: "templates",
      filename: "remoteEntry.js",
      remotes: {
        sharedLib: "sharedLib@http://localhost:8095/remoteEntry.js",
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
