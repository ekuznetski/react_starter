const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { paths: cp } = require("./tsconfig.json").compilerOptions;

const paths = Object.keys(cp).reduce((acc, e) => {
  Object.assign(acc, { [e]: `${__dirname}/src/${cp[e][0]}` });
  return acc;
}, {});

module.exports = (args) => ({
  entry: {
    presets: ["@babel/polyfill"],
    main: ["react-hot-loader/patch", "./src/index.tsx"],
  },
  mode: "development",

  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json", ".sass", ".scss", ".css"],
    alias: {
      "react-dom": "@hot-loader/react-dom",
      ...paths,
    },
  },
  devtool: args.mode === "development" ? "inline-source-map" : "source-map",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].[contenthash].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              svgoConfig: {
                plugins: {
                  removeUselessStrokeAndFill: false,
                  removeViewBox: false,
                  prefixIds: false,
                },
              },
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader",
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react", "@babel/preset-typescript"],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CaseSensitivePathsPlugin(),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*", "!server.js"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  devServer: {
    open: false,
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    hot: args.mode === "development",
    port: 3000,
    watchContentBase: false,
    progress: false,
    clientLogLevel: "warning",
  },
});
