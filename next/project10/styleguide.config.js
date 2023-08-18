const path = require('path');

module.exports = {
    webpackConfig: {
      module: {
        rules: [
          // Babel loader will use your project’s babel.config.js
          {
            test: /\.(js|jsx)$/, // Coincide con archivos .js y .jsx
            exclude: /node_modules/,
            loader: 'babel-loader'
          },
          {
            test: /\.css?$/,
            use: ['style-loader','css-loader','postcss-loader'],
          },
        ]
      }
    },
    require: [
        path.join(__dirname, 'node_modules/tailwindcss/tailwind.css')
    ]
  }