/**
 * @file gulp配置
 * @author mip-support@baidu.com
 */

'use strict';

const json = require('res-json');
const api = require('express-api-require');
const path = require('path');
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
require('./format');
require('./publish');

// 开发流程：
// 编译模板、组件、官网、启动 webserver 、启动监听服务
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

// 验证流程：
// 1. 清空 dist 目录
// 2. 编译模板、组件、官网到 dist 下，验证产出代码是否符合 MIP HTML 规范
// 3. 复制一份 dist 代码到 .archive 并压缩代码到 dist 下，并验证产出代码是否符合 MIP HTML 规范
// 4. 删除产出的 .archive
gulp.task('validator', () => {
    const task = [];

    // 清理目录
    task.push('clean');

    // 编译并验证产出
    task.push(['build:templates', 'build:components', 'build:www'], 'miphtml:validate');

    // 压缩代码并验证压缩后是否规范
    task.push('build:htmlminifier', 'build:format', 'miphtml:validate');

    task.push('build:archive-after');

    return run.apply(run, task);
});

// 打包流程：
// 1. 清空 dist 目录
// 2. 编译模板、组件、官网到 dist 下，验证产出代码是否符合 MIP HTML 规范
// 3. 复制一份 dist 代码到 .archive 并压缩代码到 dist 下，并验证产出代码是否符合 MIP HTML 规范
// 4. 把 .archive 打包到 dist/archive 下
gulp.task('build', () => {
    const task = [];

    // 清理目录
    task.push('clean');

    // 编译并验证产出
    task.push(['build:templates', 'build:components', 'build:www'], 'miphtml:validate');

    // 压缩代码并验证压缩后是否规范
    task.push('build:htmlminifier', 'build:format', 'miphtml:validate');

    // 打 zip 包
    task.push('build:archive');

    // 线上运行环境
    task.push('publish');

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
        livereload: true,
        middleware(connect, opt) {
            return [
                json(),
                api({
                    root: path.resolve(__dirname, '../dist')
                })
            ];
        }
    });
});
