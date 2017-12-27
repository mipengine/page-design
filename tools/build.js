/**
 * @file 编译模板和组件
 * @author mip-support@baidu.com
 */

'use strict';

const gulp = require('gulp');
const devReplace = require('./dev-replace');
const artTemplate = require('./art-template');
const config = require('./config');
const processor = require('./pre-processor');

gulp.task('build:api', () => {
    return gulp
        .src(config.src.api)
        .pipe(gulp.dest(config.dest.api));
});

gulp.task('build:templates', ['build:templates-static', 'build:api'], () => {
    return gulp
        .src(config.src.templates)
        .pipe(devReplace())
        .pipe(artTemplate({
            data(file) {
                return processor(file.path, 'template');
            }
        }))
        .pipe(gulp.dest(config.dest.templates));
});

gulp.task('build:templates-static', () => {
    return gulp
        .src(config.src.templatesStatic)
        .pipe(gulp.dest(config.dest.templates));
});

gulp.task('build:components', ['build:components-static', 'build:api'], () => {
    return gulp
        .src(config.src.components)
        .pipe(devReplace())
        .pipe(artTemplate({
            data(file) {
                return processor(file.path, 'component');
            }
        }))
        .pipe(gulp.dest(config.dest.components));
});

gulp.task('build:components-static', () => {
    return gulp
        .src(config.src.componentsStatic)
        .pipe(gulp.dest(config.dest.components));
});
