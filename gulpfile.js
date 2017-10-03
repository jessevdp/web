const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const sourcemaps = require('gulp-sourcemaps')
const deploy = require('gulp-gh-pages')

const markdown = require('gulp-markdown')
const inject = require('gulp-inject')

const concat = require('gulp-concat')
const uglify = require('gulp-uglify')

const sass = require('gulp-sass')
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
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer({ browsers: ['last 2 versions'] }))
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

gulp.task('build', ['content', 'sass', 'js'], function () {
  // Move our CNAME to production
  gulp.src('src/CNAME').pipe(gulp.dest('app/'))
})

gulp.task('serve', ['build'], function () {
  browserSync.init({
    server: './app',
    injectChanges: true,
    notify: false
  })

  gulp.watch(PATHS.styles.src, ['sass'])
  gulp.watch(PATHS.scripts.src, ['js'])
  gulp.watch(PATHS.content.src, ['content'])
})

gulp.task('deploy', function () {
  if (!process.env.TRAVIS) throw new Error('Only TRAVIS is allowed to deploy')
  if (!process.env.GITHUB_TOKEN) throw new Error('Missing env variable: GITHUB_TOKEN')

  let options = {
    remoteUrl: `https://${process.env.GITHUB_TOKEN}@github.com/jessevdp/web.git`
  }
  return gulp.src('./app/**/*')
    .pipe(deploy(options))
})

gulp.task('default', ['serve'])
