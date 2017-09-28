const gulp = require('gulp')
const browserSync = require('browser-sync').create()

const concat = require('gulp-concat')
const uglify = require('gulp-uglify')

const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')

gulp.task('sass', function () {
  return gulp.src('./app/src/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'expanded'} ).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe( autoprefixer({ browsers: ['last 2 versions'] }) )
    .pipe(gulp.dest('./app/assets/css/'))
    .pipe(browserSync.stream())
})

gulp.task('js', function () {
  return gulp.src('./app/src/js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('./app/assets/js/'))
    .pipe(browserSync.stream())
})

gulp.task('serve', ['sass', 'js'], function () {
  browserSync.init({
    server: "./app",
    injectChanges: true,
    notify: false
  })

  gulp.watch('app/src/sass/**/*.scss', ['sass'])
  gulp.watch('app/src/js/**/*.js', ['js'])
  gulp.watch('app/**/*.html').on('change', browserSync.reload)
})

gulp.task('default', ['serve'])
