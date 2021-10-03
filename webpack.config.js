const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
    scrambow: './src/index.ts',
    cli: './src/cli.ts'
  },
  target: 'node',
  mode: 'none',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  output: {
    filename: '[name].js',
    library: 'scrambow',
    libraryTarget: 'umd',
    globalObject: "typeof self !== \"undefined\" ? self : this"
  }
};
