'use strict';

// Include gulp
var gulp = require('gulp');
var fs = require('fs');

var gutil = require('gulp-util');
var gulpPlugins = {
  concat: require('gulp-concat'),
  rename: require('gulp-rename'),
  replace: require('gulp-replace'),
  uglify: require('gulp-uglify')
};
var pkg = require('./package.json');

var USE_STRICT_PATTERN = /(['"]use strict['"];?\n?)/g;
var REQUIRE_PATTERN = /((?:var |,)[^=]+=\s*require\([^\)]+\);?\n?)/g;
var EXPORT_PATTERN = /((?:module\.)?exports\s*=\s*[^,;]+;?\n?)/g;

var files = [
  './src/toWords.js'
];

gulp.task('default', ['build']);
gulp.task('build', ['bundle']);
gulp.task('bundle', function () {
  return gulp.src(files)
    .on('error', gutil.log)
    .pipe(gulpPlugins.replace(USE_STRICT_PATTERN, ''))
    .pipe(gulpPlugins.replace(REQUIRE_PATTERN, ''))
    .pipe(gulpPlugins.replace(EXPORT_PATTERN, ''))
    .pipe(gulpPlugins.concat('decimalToWords.js'))
    .pipe(gulp.dest('./dist/'))
    // Minified version
    .pipe(gulpPlugins.uglify())
    .pipe(gulpPlugins.rename('decimalToWords.min.js'))
    .pipe(gulp.dest('./dist/'));
});
