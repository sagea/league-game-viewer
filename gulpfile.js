var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var sourcemaps = require("gulp-sourcemaps");

var paths = {
  sass: ['src/scss/*.scss', 'src/scss/custom/*.scss'],
  templates: 'src/app/routes/**/*.tpl.html',
  scripts: ['src/app/app.js', 'src/app/**/*.module.js', 'src/app/**/*.js', '!src/**/*.spec.js'],
  indexHtml: 'src/index.html',
  templateDest: 'www/app/routes',
  sassDest: 'www/css',
  scriptsDest: 'www/js',
  src: 'src/',
  dest: 'www/'
};

gulp.task('default', ['sass', 'concat-scripts', 'copy-route-templates', 'copy-index-html', 'watch']);

gulp.task('sass', function(done) {
  gulp.src(paths.src + 'scss/styles.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest(paths.sassDest))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest(paths.sassDest))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.scripts, ['concat-scripts']);
  gulp.watch(paths.templates, ['copy-route-templates']);
  gulp.watch(paths.indexHtml, ['copy-index-html'])
});

gulp.task('concat-scripts', function(){
  return gulp.src(paths.scripts)
      .pipe(sourcemaps.init())
      .pipe(concat('scripts.js'))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(paths.scriptsDest));
});
gulp.task('copy-route-templates', function(){
  return gulp.src(paths.templates)
      .pipe(gulp.dest(paths.templateDest));
});

gulp.task('copy-index-html', function(){
  return gulp.src(paths.indexHtml)
      .pipe(gulp.dest(paths.dest));

});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
