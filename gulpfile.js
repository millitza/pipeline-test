

// Default Task
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var csslint = require('gulp-csslint');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');

gulp.task('default', ['style', 'minify']);

gulp.task("style", ["js-lint","css-lint"], function(){
  console.log("done style check");
});

gulp.task("js-lint", function(){
  gulp.src(["./**/*.js","!./node_modules/**","!./coverage/**","!./dist/**","!./coverage/**"])
  .pipe(jshint())
  .pipe(jshint.reporter("default"));
});

gulp.task("css-lint", function() {
  gulp.src(["./**/*.css","!./node_modules/**","!./coverage/**","!./dist/**","!./coverage/**"])
    .pipe(csslint())
    .pipe(csslint.formatter());
});

gulp.task("minify", ["js-min","css-min"], function(){
  console.log("done minifying");
});

gulp.task("js-min", function(){
  gulp.src(["./**/*.js","!./node_modules/**","!./coverage/**","!./dist/**","!./coverage/**"])
  .pipe(uglify())
  .pipe(gulp.dest("./dist/js"));
});

gulp.task("css-min", function() {
  gulp.src(["./**/*.css","!./node_modules/**","!./coverage/**","!./dist/**","!./coverage/**"])
    .pipe(cssmin())
    .pipe(gulp.dest("./dist/css"));
});
