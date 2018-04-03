const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

const config = require('./_config.js');

// Sass
gulp.task('css', function() {
    return gulp.src(config.src.scss)
        .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))
            .pipe(autoprefixer({
                browsers: [
                    '>1%',
                    'last 2 versions'
                ],
                cascade: false
            }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.dist.css));
});

// Watch
gulp.task('watch', function() {
    gulp.watch(config.src.scss, ['css']);
});

// Default
gulp.task('default', ['css'], function() {
    gulp.once('end', function () {
        process.exit();
    });
});