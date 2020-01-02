const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const threadLoader = require("thread-loader");
const appConfig = require("./app.config");

// 一些常用路径
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, "src");
const BUILD_PATH = path.resolve(ROOT_PATH, "dist");
const NODE_MODULES_PATH = path.resolve(ROOT_PATH, "node_modules");

// NODE_ENV : development | production
process.env.NODE_ENV =
  process.env.NODE_ENV === "production" ? "production" : "development";

// CONFIG_ENV : dev | alpha | qa | uat | prod
const configEnv = ["dev", "alpha", "qa", "uat", "prod"].includes(
  process.env.CONFIG_ENV
)
  ? process.env.CONFIG_ENV
  : "dev";

const VERSION = appConfig[configEnv].version;
const PUBLIC_PATH = appConfig[configEnv].publicPath;
const API_URL = appConfig[configEnv].apiUrl;
const HOST_URL = appConfig[configEnv].hostUrl;
const SOCKET_IO_URL = appConfig[configEnv].socketIoUrl;
const BAIDU_TONGJI_KEY = appConfig[configEnv].baiduTongjiKey;

console.log("======== APP CONFIG ========");
console.log("version: ", VERSION);
console.log("publicPath: ", PUBLIC_PATH);
console.log("apiUrl: ", API_URL);
console.log("hostUrl: ", HOST_URL);
console.log("socketIoUrl: ", SOCKET_IO_URL);
console.log("baiduTongjiKey: ", BAIDU_TONGJI_KEY);
console.log("");

threadLoader.warmup(
  {
    // pool options, like passed to loader options
    // must match loader options to boot the correct pool
    maxConcurrentWorkers: require("os").cpus().length - 1
  },
  [
    // modules to load
    // can be any module, i. e.
    "babel-loader",
    "ts-loader",
    "sass-loader"
  ]
);

const threadPoolOptions = {
  workers: require("os").cpus().length - 1
};

const config = {
  mode: process.env.NODE_ENV,
  target: "web",
  context: __dirname,
  entry: {
    main: [path.resolve(APP_PATH, "Root.tsx")]
  },
  output: {
    path: BUILD_PATH,
    filename: "[name]-[hash].js",
    chunkFilename: "[name]-[chunkhash].js",
    globalObject: "this",
    publicPath: PUBLIC_PATH
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "thread-loader",
            options: threadPoolOptions
          },
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true
            }
          },
          {
            loader: "ts-loader",
            options: {
              happyPackMode: true,
              transpileOnly: true
            }
          }
        ],
        include: APP_PATH,
        exclude: [path.resolve(__dirname, "src/i18n")]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: [NODE_MODULES_PATH]
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
        exclude: [NODE_MODULES_PATH]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "thread-loader",
            options: threadPoolOptions
          },
          "style-loader",
          {
            loader: "css-loader",
            options: { modules: true }
          },
          "postcss-loader",
          "sass-loader"
        ],
        exclude: [NODE_MODULES_PATH]
      }
    ]
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({ checkSyntacticErrors: true }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      VERSION: JSON.stringify(VERSION),
      API_URL: JSON.stringify(API_URL),
      PUBLIC_PATH: JSON.stringify(PUBLIC_PATH),
      HOST_URL: JSON.stringify(HOST_URL),
      SOCKET_IO_URL: JSON.stringify(SOCKET_IO_URL),
      BAIDU_TONGJI_KEY: JSON.stringify(BAIDU_TONGJI_KEY)
    }),
    new CopyWebpackPlugin([
      {
        from: "src/i18n",
        to: "i18n"
      }
    ]),
    new HtmlWebpackPlugin({
      title: "react-ts-frame",
      filename: "index.html",
      template:
        process.env.NODE_ENV === "production"
          ? "./src/index.html"
          : "./src/index.dev.html"
      // excludeAssets: [/\w+Worker.\w+.js/],
      // excludeChunks: ["preloadingEntry"],
      // chunks: ["app"]
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "src"),
    historyApiFallback: true,
    disableHostCheck: true,
    host: "localhost",
    inline: true,
    port: 3000,
    hot: true,
    overlay: {
      //当出现编译器错误或警告时，就在网页上显示一层黑色的背景层和错误信息
      errors: true
    },
    proxy: {
      "/api": {
        target: "http://localhost:3001"
      }
    }
  },
  devtool: "source-map",
  stats: {
    warningsFilter: /export .* was not found in/
  },
  resolve: {
    modules: ["node_modules", path.resolve(__dirname, "src")],
    extensions: [".js", ".ts", ".tsx", ".css", ".less", ".scss", ".png"]
  },
  externals: {
    echarts: "echarts",
    immutable: "Immutable",
    jquery: "jQuery",
    lodash: "_",
    moment: "moment",
    react: "React",
    "react-dom": "ReactDOM"
  }
};

if (process.env.NODE_ENV === "production") {
  config.optimization = config.optimization || {};
  config.optimization.minimizer = config.optimization.minimizer || [];
  config.optimization.minimizer.push(
    new UglifyJSPlugin({
      parallel: true,
      uglifyOptions: {
        compress: {
          drop_debugger: configEnv === "prod", // 现网remove dubugger
          pure_funcs: configEnv === "prod" ? ["console.log"] : null // 现网丢弃console.log
        }
      }
    })
  );
} else {
  config.entry.main.unshift("webpack-dev-server/client?http://localhost:3000/");
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  config.output.filename = "[name].js";
  config.output.chunkFilename = "[name].js";
  config.devtool = "inline-source-map";
  threadPoolOptions.poolTimeout = Infinity;
}

if (process.env.analyze) {
  config.plugins.push(
    new BundleAnalyzerPlugin({
      analyzerMode: "server",
      analyzerHost: "127.0.0.1",
      analyzerPort: 8889,
      reportFilename: "report.html",
      defaultSizes: "parsed",
      openAnalyzer: true,
      generateStatsFile: false,
      statsFilename: "stats.json",
      statsOptions: null,
      logLevel: "info"
    })
  );
}

module.exports = config;
