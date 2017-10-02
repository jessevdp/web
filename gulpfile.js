const gulp = require('gulp')
const browserSync = require('browser-sync').create()

const markdown = require('gulp-markdown')
const inject = require('gulp-inject')
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
  },
  content: {
    src: 'src/content/**/*.md',
    dest: '**/*.html'
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

gulp.task('content', function () {
  var CONTENT = gulp.src(PATHS.content.src)
                  .pipe(markdown())

  return gulp.src('src/' + PATHS.content.dest)
    .pipe(inject(CONTENT, {
      starttag: '<!-- inject:{{path}} -->',
      relative: true,
      transform: function (filePath, file) {
        return file.contents.toString('utf8')
      }
    }))
    .pipe(gulp.dest('app/'))
    .pipe(browserSync.stream())
})

gulp.task('serve', ['content', 'sass', 'js'], function () {
  console.log(PATHS.styles.src);
  browserSync.init({
    server: './app',
    injectChanges: true,
    notify: false
  })

  gulp.watch(PATHS.styles.src, ['sass'])
  gulp.watch(PATHS.scripts.src, ['js'])
  gulp.watch(PATHS.content.src, ['content'])
  //gulp.watch('app/**/*.html').on('change', browserSync.reload)
})

gulp.task('default', ['serve'])
