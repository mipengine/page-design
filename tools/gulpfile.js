/**
 * @file gulp配置
 * @author mip-support@baidu.com
 */

'use strict';

const gulp = require('gulp');
const connect = require('gulp-connect');
const run = require('run-sequence');
const config = require('./config');

require('./build');
require('./build-www');
require('./clean');
require('./html-minifier');
require('./zip');
require('./validate');

gulp.task('dev', ['build:templates', 'build:components', 'build:www', 'webserver'], () => {
    gulp.watch(['../src/templates/**/*', '../src/base/**/*'], ['build:templates']);
    gulp.watch(['../src/components/**/*', '../src/base/**/*'], ['build:components']);
    gulp.watch(['../src/www/**/*', '../src/base/**/*'], ['build:www']);
    gulp.watch(config.dest.match, ['reload']);
});

gulp.task('build', () => {
    return run('clean', ['build:templates', 'build:components', 'build:www'], 'miphtml:validate');
});

gulp.task('reload', () => {
    return gulp
        .src(config.dest.match)
        .pipe(connect.reload());
});

gulp.task('webserver', () => {
    return connect.server({
        root: config.dest.path,
        livereload: true
    });
});
