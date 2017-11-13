/**
 * @file 打包
 * @author mip-support@baidu.com
 */

'use strict';

const es = require('event-stream');
const path = require('path');
const gulp = require('gulp');
const zip = require('gulp-zip');
const util = require('./util');
const config = require('./config');

// gulp.task('build:zip', () => {
//     const dirs = util.getFolders(config.dest.templates);
//     const tasks = dirs.map(name => {
//         console.log(path.resolve(config.dest.templates, name), name, dirs);
//         return gulp
//             .src(path.resolve(config.dest.templates, name))
//             .pipe(zip(`${name}.zip`))
//             .pipe(gulp.dest(config.dest.archive));
//     });

//     return es.concat.apply(null, tasks);
// });
