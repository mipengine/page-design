/**
 * @file 打 zip 包
 * @author mip-support@baidu.com
 */

'use strict';

const es = require('event-stream');
const run = require('run-sequence');
const clean = require('gulp-clean');
const path = require('path');
const gulp = require('gulp');
const zip = require('gulp-zip');
const util = require('./util');
const config = require('./config');

gulp.task('build:archive', () => {
    return run('build:archive-before', 'build:archive-task', 'build:archive-after');
});

gulp.task('build:archive-task', () => {
    const baseDir = config.dest.templates.replace(config.dest.path, config.src.archive);
    const tasks = util.getFolders(baseDir).map(name => {
        return gulp
            .src(path.resolve(baseDir, name) + '/**/*')
            .pipe(zip(`${name}.zip`))
            .pipe(gulp.dest(config.dest.archive));
    });

    return es.concat.apply(null, tasks);
});

gulp.task('build:archive-before', () => {
    if (util.isDirectory(config.src.archive)) {
        return;
    }
    return gulp
        .src(config.dest.match)
        .pipe(gulp.dest(config.src.archive));
});

gulp.task('build:archive-after', () => {
    return gulp.src(config.src.archive, {
        read: false
    }).pipe(clean({
        force: true
    }));
});
