/**
 * @file 编译网站页面
 * @author mip-support@baidu.com
 */

'use strict';

const gulp = require('gulp');
const artTemplate = require('./art-template');
const config = require('./config');
const processor = require('./pre-processor');

gulp.task('build:www', ['build:www-static'], () => {
    return gulp
        .src(config.src.www)
        .pipe(artTemplate({
            data(file) {
                return processor(file.path, 'www');
            }
        }))
        .pipe(gulp.dest(config.dest.www));
});

gulp.task('build:www-static', () => {
    return gulp
        .src(config.src.wwwStatic)
        .pipe(gulp.dest(config.dest.path));
});
