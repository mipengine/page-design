/**
 * @file 复制线上运行文件
 * @author mip-support@baidu.com
 */

'use strict';

const gulp = require('gulp');
const path = require('path');
const fs = require('fs');

gulp.task('publish', () => {
    const pkg = require('../package.json');
    delete pkg.devDependencies;
    delete pkg.config;
    pkg.dependencies = {
        'express': '*',
        'express-api-require': '*',
        'res-json': '*'
    };
    pkg.scripts = {
        start: 'node server.js'
    };
    fs.writeFileSync(path.resolve(__dirname, '../dist/package.json'), JSON.stringify(pkg, null, 2));

    const server = fs.readFileSync(path.resolve(__dirname, './server.js')).toString();
    fs.writeFileSync(path.resolve(__dirname, '../dist/server.js'), server);
});
