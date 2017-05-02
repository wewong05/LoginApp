var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.js'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.react.js',
      applicationStyles: 'app/styles/app.scss',
      Navigation: 'app/components/Navigation.react.js',
      Timer: 'app/components/Timer.react.js',
      Countdown: 'app/components/Countdown.react.js',
      Clock: 'app/components/Clock.react.js',
      CountdownForm: 'app/components/CountdownForm.react.js',
      Controls: 'app/components/Controls.react.js',
      About: 'app/components/About.react.js',
      Homepage: 'app/components/pages/HomePage.react.js'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss')
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
