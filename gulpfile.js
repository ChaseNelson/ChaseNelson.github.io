//*************************************
//     REQUIRED
//*************************************
var gulp         = require('gulp'),
    plumber      = require('gulp-plumber'),
    uglify       = require('gulp-uglify'),
    pump         = require('pump'),
    rename       = require('gulp-rename');

//*************************************
//     SCRIPT TASK
//*************************************
gulp.task('scripts', function(cb) {
  pump([
    gulp.src(['./**/*.js', '!./**/*.min.js', '!./index.js', '!./gulpfile.js']),
    rename({suffix:'.min'}),
    uglify(),
    gulp.dest('./')
  ], cb);
});

//*************************************
//     WATCH TASK
//*************************************
gulp.task('watch', function() {
  gulp.watch('.**/*.js', ['scripts']);
});

//*************************************
//     DEFAULT TASK
//*************************************
gulp.task('default', ['scripts', 'watch']);
