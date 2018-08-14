var gulp = require('gulp'),
webpack = require('webpack'),
run = require('gulp-run-command').default;

// gulp.task('scripts', ['modernizr'], function(callback) {
//   webpack(require('../../webpack.config.js'), function(err, stats) {
//     if (err) {
//       console.log(err.toString());
//     }
//
//     console.log(stats.toString());
//     callback();
//   });

gulp.task('scripts', ['modernizr'], run('webpack'));
