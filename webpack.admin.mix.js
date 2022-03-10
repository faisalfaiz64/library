const mix = require('laravel-mix')
const path = require('path')
const WebpackShellPlugin = require('webpack-shell-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
require('laravel-mix-merge-manifest')

mix.setPublicPath('public');

mix.js('resources/js/admin/app.js', 'public/js/admin')
	.sass('resources/js/admin/scss/styles.scss', 'public/css/admin.css')
	.sourceMaps()
    .webpackConfig({
	    plugins: [
	        new WebpackShellPlugin({
	            onBuildEnd: [
// 	                'npx workbox injectManifest workbox-config.js'
	            ]
	        })
	    ],
	    resolve: {
		    extensions: ['.js', '.json', '.vue'],
		    alias: {
		      '~admin': path.join(__dirname, './resources/js/admin'),
		      '~sass': path.join(__dirname, './resources/sass')
		    }
		},
        output: {
		    chunkFilename: 'js/admin/[name].[chunkhash].js',
		    publicPath: mix.config.hmr ? '//localhost:8080' : '/'
        }
    }).mergeManifest();

if (mix.inProduction()) {
    mix.webpackConfig({
        plugins: [new BundleAnalyzerPlugin()]
    });

    mix.version();
    mix.disableNotifications();
}
