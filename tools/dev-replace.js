/**
 * @file 本地开发环境部署
 * @author mip-support@baidu.com
 */

'use strict';

const through2 = require('through2');

module.exports = options => {
    options = options || {};

    return through2.obj((file, enc, cb) => {
        if (file.isNull() || process.env.NODE_ENV !== 'development') {
            cb(null, file);
            return;
        }

        // 替换本地api路径
        const reg = /https:\/\/x\.mipengine\.org\/html\/(www|templates|components)\/([\w\-]+)\/api\/([\w\-]+)\.json/g;
        file.contents = new Buffer(file.contents.toString().replace(reg, './api/$3.json'));
        cb(null, file);
    });
};
