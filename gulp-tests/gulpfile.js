// ** initialize GULP **
var gulp = require('gulp');

// ** initialize the addons **
var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var jade = require('gulp-jade');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');

// ------------------------------------------- //

// ** handle CSS compression **
gulp.task('css', function () {
    gulp.src('source/stylus/main.styl')
        .pipe(stylus({compress: false, paths: ['source/stylus']}))
        .pipe(autoprefixer())
        .pipe(minifyCSS())
        .pipe(rename('style.css'))
        .pipe(gulp.dest('build'))
});

// ** handle HTML compression **
gulp.task('html', function() {
  gulp.src('source/jade/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('build'))
});

// ** handle JS compression **
gulp.task('js', function() {
  gulp.src([
    'bower_components/jquery/dist/jquery.js',
    'bower_components/modernizr/modernizr.js'
  ])
    .pipe( concat('output.min.js') )
    .pipe(uglify())
    .pipe(gulp.dest('build'))
});

// ** handle watching, updating on Save **
gulp.task('watch', function () {
   gulp.watch('source/stylus/*.styl', ['css']);
   gulp.watch('source/jade/*.jade', ['html']);
});

// ** what to run when just type "gulp" **
gulp.task('default', ['css', 'html', 'js']);

