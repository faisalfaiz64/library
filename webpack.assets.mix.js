const path = require('path')
const mix = require('laravel-mix')
require('laravel-mix-merge-manifest')

mix.config.vue.esModule = true

mix
  .sass('resources/sass/app.scss', 'public/css')
  .sass('resources/sass/admin.scss', 'public/css')
  .copy( 'resources/images', 'public/images', false )
  .copy( 'resources/sass/fonts', 'public/fonts', false )

  .sourceMaps()
  .disableNotifications()

mix.webpackConfig({
  plugins: [
    // new BundleAnalyzerPlugin()
  ],
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      '~sass': path.join(__dirname, './resources/sass')
    }
  },
  output: {
    chunkFilename: 'js/[name].[chunkhash].js',
    publicPath: mix.config.hmr ? '//localhost:8080' : '/'
  }
}).mergeManifest()
