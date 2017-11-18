/**
 * @file gulp配置
 * @author mip-support@baidu.com
 */

'use strict';

const gulp = require('gulp');
const connect = require('gulp-connect');
const run = require('run-sequence');
const gutil = require('gulp-util');
const config = require('./config');

require('./build');
require('./build-www');
require('./clean');
require('./html-minifier');
require('./archive');
require('./validate');

gulp.task('dev', ['build:templates', 'build:components', 'build:www', 'webserver'], () => {
    gulp.watch(['../src/templates/**/*', '../src/base/**/*'], ['build:templates']);
    gulp.watch(['../src/components/**/*', '../src/base/**/*'], ['build:components']);
    gulp.watch(['../src/www/**/*', '../src/base/**/*'], ['build:www']);
    gulp.watch(config.dest.match, ['reload']);

    /* eslint-disable no-console */
    console.log(`
本地启动服务成功：

1. 开发官网页面，预览链接： ${gutil.colors.green('http://localhost:8080')}
2. 开发模板页面，预览链接： ${gutil.colors.green('http://localhost:8080/html/templates/')}
3. 开发组件页面，预览链接： ${gutil.colors.green('http://localhost:8080/html/components/')}

`);
});
/* eslint-enable no-console */

gulp.task('build', () => {
    const task = [];

    // 清理目录
    task.push('clean');

    // 编译并验证产出
    task.push(['build:templates', 'build:components', 'build:www'], 'miphtml:validate');

    // 压缩代码并验证压缩后是否规范
    task.push('build:htmlminifier', 'miphtml:validate');

    // 打 zip 包
    task.push('build:archive');

    return run.apply(run, task);
});

gulp.task('reload', () => {
    return gulp
        .src(config.dest.match)
        .pipe(connect.reload());
});

gulp.task('webserver', () => {
    return connect.server({
        root: config.dest.path,
        port: 8080,
        livereload: true
    });
});
