/**
 * @file 格式化
 * @author mip-support@baidu.com
 */

'use strict';

const gulp = require('gulp');
const fecs = require('fecs-gulp');
const config = require('./config');

gulp.task('build:format', () => {
    return gulp
        .src(config.src.archive + '/**/*.html')
        .pipe(fecs.format())
        .pipe(gulp.dest(config.src.archive));
});

