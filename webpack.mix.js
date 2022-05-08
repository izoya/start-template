const mix = require('laravel-mix');
const config = require('./webpack.config');

mix
    .webpackConfig(config)
    .js('resources/js/app.js', 'public/js')
    .vue()
    .extract(['vue', 'element-plus'])
    .sass('resources/sass/app.sass', 'public/css/app.css')
    .postCss('resources/css/app.css', 'public/css');
