const { series, src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');
const concat = require('gulp-concat');


// Utilities CSS
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');

// Utilities JS
const terser = require('gulp-terser-js');
const rename = require('gulp-rename');


/**
 * Fun SASS Compiler
 */

 const paths = {
     images: 'src/img/**/*',
     scss: 'src/scss/**/*.scss',
     js: 'src/js/**/*.js'
 }

 function css(  ) {
     return src(paths.scss)
        .pipe( sourcemaps.init() )
        .pipe( sass())
        .pipe( postcss([ autoprefixer(), cssnano() ]))
        .pipe( sourcemaps.write('.'))
        .pipe( dest('./build/css') )
 }

function javascript() {
    return src(paths.js)
        .pipe( sourcemaps.init())
        .pipe( concat('bundle.js') )
        .pipe( concat('bundle.js') )
        .pipe( terser() )
        .pipe( sourcemaps.write('.'))
        .pipe( rename({ suffix: '.min' }))
        .pipe( dest( './build/js'));
}


function images() {
    return src(paths.images)
        .pipe( imagemin() )
        .pipe( dest( './build/img' ))
        .pipe( notify({ message: 'Image modified'}) );
}

function versionWebp() {
    return src(paths.images)
        .pipe( webp() )
        .pipe( dest( './build/img' ))
         .pipe( notify({ message: 'Version webP working...'}) );
}


function watchFiles() {
    watch( paths.scss, css ); // * = all files in the actual forder. - ** all files with this extension.
    watch( paths.js, javascript );
}

 exports.css = css;
 exports.images = images;
 exports.watchFiles = watchFiles;

 exports.default = series( css, javascript, images, versionWebp, watchFiles );