const gulp = require('gulp')
const browserSync = require('browser-sync').create()

const concat = require('gulp-concat')
const uglify = require('gulp-uglify')

const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')

const PATHS = {
  styles: {
    src: 'src/sass/**/*.scss',
    dest: 'app/assets/css/'
  },
  scripts: {
    src: 'src/js/**/*.js',
    dest: 'app/assets/js/'
  }
}

gulp.task('sass', function () {
  return gulp.src(PATHS.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'expanded'} ).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe( autoprefixer({ browsers: ['last 2 versions'] }) )
    .pipe(gulp.dest(PATHS.styles.dest))
    .pipe(browserSync.stream())
})

gulp.task('js', function () {
  return gulp.src(PATHS.scripts.src)
    .pipe(sourcemaps.init())
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest(PATHS.scripts.dest))
    .pipe(browserSync.stream())
})

gulp.task('html', function () {
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('app/'))
})

gulp.task('serve', ['html', 'sass', 'js'], function () {
  console.log(PATHS.styles.src);
  browserSync.init({
    server: './app',
    injectChanges: true,
    notify: false
  })

  gulp.watch(PATHS.styles.src, ['sass'])
  gulp.watch(PATHS.scripts.src, ['js'])
  gulp.watch('src/**/*.html', ['html'])
})

gulp.task('default', ['serve'])
