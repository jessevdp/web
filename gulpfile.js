const gulp = require('gulp')
const browserSync = require('browser-sync').create()

const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')

gulp.task('sass', function () {
  gulp.src('./app/src/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'expanded'} ).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe( autoprefixer({ browsers: ['last 2 versions'] }) )
    .pipe(gulp.dest('./app/assets/css/'))
    .pipe(browserSync.stream())
})

gulp.task('serve', ['sass'], function () {
  browserSync.init({
    server: "./app",
    injectChanges: true,
    notify: false
  })

  gulp.watch('./app/src/sass/**/*.scss', ['sass'])
  gulp.watch('./app/*.html').on('change', browserSync.reload)
})

gulp.task('default', ['serve'])
