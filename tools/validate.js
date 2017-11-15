/**
 * @file 验证产出文件是否符合 MIP HTML 规范
 * @author mip-support@baidu.com
 */

'use strict';

const gulp = require('gulp');
const validate = require('gulp-mip-validator').validate;
const config = require('./config');

gulp.task('miphtml:validate', () => {
    return gulp
        .src(`${config.dest.path}/**/*.html`)
        .pipe(validate());
});
