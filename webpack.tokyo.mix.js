const mix = require('laravel-mix')
const path = require('path')
require('laravel-mix-merge-manifest')

/* mix.config.vue.esModule = true */

mix.js('resources/js/tokyo/app.js', 'public/js/tokyo')
  .sourceMaps()
  .disableNotifications()

if (mix.inProduction()) {
  mix.version()

  mix.extract([
    'vue',
    'vform',
    'axios',
    'vuex',
    'jquery',
    'jquery.waitforimages',
    'popper.js',
    'vue-i18n',
    'vue-meta',
    'js-cookie',
    'bootstrap',
    'vue-router',
    'sweetalert2',
    'filepond',
    'skrollr',
    '@glidejs/glide',
    'vue-glide-js',
    'mapbox-gl',
    'vue-scrollto',
    'notyf',
    'vue-filepond',
    'filepond-plugin-file-validate-type',
    'filepond-plugin-image-preview',
    'vuex-router-sync',
    '@fortawesome/fontawesome-free',
    '@fortawesome/vue-fontawesome',
    'vue-picture-swipe',
    'vue-analytics',
    'vue-lazyload',
    'vue-moment',
    'lity'
  ])
}

mix.webpackConfig({
  plugins: [
    // new BundleAnalyzerPlugin()
  ],
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      '~tokyo': path.join(__dirname, './resources/js/tokyo')
    }
  },
  output: {
    chunkFilename: 'js/tokyo/[name].[chunkhash].js',
    publicPath: mix.config.hmr ? '//localhost:8080' : '/'
  }
}).mergeManifest()

