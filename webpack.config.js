var path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    compress: true,
    port: 9000,
  },
  module:{
    rules:[
      {
        test:/\.m?js$/,
        exclude:/(node-modules)/,
        use: {
          loader: 'babel-loader',
          options:{
            presets: ['@babel/preset-env', ['@babel/preset-react',{runtime:'automatic'}]]
          }
        }
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg|ico)$/,
        use: ['file-loader']
      },
      {
        test: /\.(html)$/,
        use: ['html-loader']
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
  ],
};
