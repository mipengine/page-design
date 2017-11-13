/**
 * @file art-template 模板编译引擎
 * @author mip-support@baidu.com
 */

'use strict';

const artTemplate = require('art-template');
const through2 = require('through2');
const gutil = require('gulp-util');

const PluginError = gutil.PluginError;

artTemplate.defaults.extname = '.tpl';
artTemplate.defaults.minimize = false;

module.exports = options => {
    options = options || {};

    return through2.obj((file, enc, cb) => {
        if (file.isNull()) {
            cb(null, file);
            return;
        }

        if (file.isStream()) {
            cb(new PluginError('gulp-art-template', 'Streaming not supported'));
            return;
        }

        var renderer = artTemplate.compile(file.contents.toString(), {
            filename: file.path
        });

        Promise.resolve(file).then(options.data).then(data => {
            file.path = gutil.replaceExtension(file.path, '.html');
            file.contents = new Buffer(renderer(data));
            cb(null, file);
        });
    });
};
