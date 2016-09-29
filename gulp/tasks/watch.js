var gulp   = require('gulp');
var config = require('../config');

gulp.task('watch',
    ['copy:watch',
    'jade:watch',
    'sass:watch',
    'yaml:watch'
]);
