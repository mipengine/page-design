/**
 * @file 编译模板和组件
 * @author mip-support@baidu.com
 */

'use strict';

const gulp = require('gulp');
const artTemplate = require('./art-template');
const config = require('./config');
const processor = require('./pre-processor');

gulp.task('build:templates', () => {
    return gulp
        .src(config.src.templates)
        .pipe(artTemplate({
            data(file) {
                return processor(file.path, 'template');
            }
        }))
        .pipe(gulp.dest(config.dest.templates));
});

gulp.task('build:components', () => {
    return gulp
        .src(config.src.components)
        .pipe(artTemplate({
            data(file) {
                return processor(file.path, 'component');
            }
        }))
        .pipe(gulp.dest(config.dest.components));
});
