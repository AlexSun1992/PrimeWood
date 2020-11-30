'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const prefix = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imgMin = require('gulp-imagemin');
const postCss = require('gulp-postcss');
const svgMin = require('gulp-svgmin');
const server = require('browser-sync');
const {series} = require('gulp');
const rename = require('gulp-rename');
const concat = require('gulp-concat');


function Sass(){
    return gulp.src(['src/scss/style.scss'])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postCss([
            prefix
        ]))
        .pipe(sourcemaps.write())
        .pipe(rename('style.css'))
        .pipe(gulp.dest('build/css'))
        .pipe(server.stream())
}

function Svg(){
    return gulp.src(['src/svg/*.svg'])
        .pipe(svgMin())
        .pipe(gulp.dest('build/svg'))
}

function Img(){
    return gulp.src(['src/img/*.{jpg,png}'])
        .pipe(imgMin())
        .pipe(gulp.dest('build/img'))
}

function Js(){
    return gulp.src(['src/js/*.js'])
        .pipe(plumber())
        .pipe(concat('min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/js'))
}


function Server(){
    server.init({server:'./',browser:'chrome'});
    gulp.watch('src/scss/**/*.scss',gulp.series(Sass));
    gulp.watch('index.html').on('change',server.reload);
    // gulp.watch('min.js').on('change',server.reload);
}


exports.start = series(Sass,Svg,Img,Js,Server);
exports.build = series(Sass,Svg,Img,Js);