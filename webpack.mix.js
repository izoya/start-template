const mix = require('laravel-mix');
const path = require("path");

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .extract([
        'vue',
    ])
    .sass('resources/sass/app.sass', 'public/css/app.css')
    .postCss('resources/css/app.css', 'public/css', [
        //
    ])
    .alias({
        '~': path.resolve(__dirname, 'resources/js'),
        '@': path.resolve(__dirname, 'resources/sass'),
    });
