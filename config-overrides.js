const webpack = require("webpack");

module.exports = function override(config) {
  // Add '.mjs' extension resolution
  config.resolve = {
    ...config.resolve,
    extensions: [".mjs", ".js", ".jsx", ".json", ".ts", ".tsx"], // Add .mjs here
  };

  // Optional: Add fallback for polyfills (e.g., process, crypto, etc.)
  config.resolve.fallback = {
    path: require.resolve("path-browserify"),
    os: require.resolve("os-browserify/browser"),
    crypto: require.resolve("crypto-browserify"),
    stream: require.resolve("stream-browserify"),
    buffer: require.resolve("buffer"),
    process: require.resolve("process/browser"),
  };

  // Provide process as a global variable
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
  ]);

  return config;
};
