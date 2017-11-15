/**
 * @file 清空产出目录
 * @author mip-support@baidu.com
 */

'use strict';

const gulp = require('gulp');
const clean = require('gulp-clean');
const config = require('./config');

gulp.task('clean', () => {
    return gulp.src([
        config.dest.path,
        config.src.archive
    ], {
        read: false
    }).pipe(clean({
        force: true
    }));
});
