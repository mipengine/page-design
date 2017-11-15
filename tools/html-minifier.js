/**
 * @file 压缩代码
 * @author mip-support@baidu.com
 */

'use strict';

const gulp = require('gulp');
const htmlminifier = require('gulp-htmlmin');
const config = require('./config');

/**
 * 压缩配置
 * @type {Object}
 */
const OPTIONS = {
    collapseWhitespace: true,
    removeComments: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    minifyJS: true,
    minifyCSS: true
};

gulp.task('build:htmlminifier', ['build:archive-before'], () => {
    return gulp
        .src(config.src.archive + '/**/*.html')
        .pipe(htmlminifier(OPTIONS))
        .pipe(gulp.dest(config.dest.path));
});

