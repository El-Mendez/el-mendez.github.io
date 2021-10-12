const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.jsx',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Méndez',
      filename: 'index.html',
    }),
  ],

  performance: {
    maxEntrypointSize: 4000000,
    maxAssetSize: 4000000,
  },

  module: {
    rules: [
      {
        test: /.js?x$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        use: {
          loader: 'file-loader',
          options: {
            esModule: false,
            name: '[name]-[contenthash].[ext]',
            outputPath: 'imgs',
          },
        },
      },
      {
        test: /\.(svg|eot|woff|woff2|ttf)$/,
        use: {
          loader: 'file-loader',
          options: {
            esModule: false,
            name: '[name].[ext]',
            outputPath: 'vectors',
          },
        },
      },
    ],
  },
};
