var path = require('path');

module.exports = {
   entry: './target/ts/index.tsx',
   devtool: 'sourcemaps',
   cache: true,
   mode: 'development',
   output: {
      path: __dirname,
      filename: './target/classes/static/built/bundle.js'
   },
   resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx']
   },
   module: {
      rules: [
         {
            test: path.join(__dirname, '.'),
            exclude: /(node_modules)/,
            loader: 'babel-loader',
         }
      ]
   }
};