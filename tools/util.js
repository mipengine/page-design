/**
 * @file 一些工具方法
 * @author mip-support@baidu.com
 * @link https://github.com/mipengine/mip-extension-optimizer/blob/master/lib/util.js
 */

'use strict';

const fs = require('fs');
const path = require('path');
const deepmerge = require('deepmerge');

/**
 * 官方核心组件
 *
 * @type {Array}
 */
exports.coreExtensions = [
    'mip-carousel',
    'mip-iframe',
    'mip-img',
    'mip-pix',
    'mip-video'
];

/**
 * 判断文件是否存在
 *
 * @inner
 * @param {string} file 文件路径
 * @return {boolean}
 */
exports.fileExists = file => {
    try {
        return fs.statSync(file).isFile();
    }
    catch (e) {
        if (e.code !== 'ENOENT') {
            throw e;
        }

        return false;
    }
};

/**
 * 同步读取文件
 *
 * @param  {string} filepath 文件路径
 *
 * @return {string}
 */
exports.readFileSync = filepath => {
    if (!exports.fileExists(filepath)) {
        return '';
    }

    return fs.readFileSync(filepath).toString();
};

/**
 * 同步读取json文件
 *
 * @param  {string} filepath 文件路径
 *
 * @return {Object}
 */
exports.readJsonSync = filepath => {
    let data = {};

    try {
        data = JSON.parse(exports.readFileSync(filepath));
    }
    catch (e) {
    }

    return data;
};

/**
 * 判断文件是否目录
 *
 * @inner
 * @param {string} file 文件路径
 * @return {boolean}
 */
exports.isDirectory = file => {
    try {
        return fs.statSync(file).isDirectory();
    }
    catch (e) {
        if (e.code !== 'ENOENT') {
            throw e;
        }

        return false;
    }
};

/**
 * 获取文件夹子目录
 *
 * @param  {string} dir 路径
 *
 * @return {Array}
 */
exports.getFolders = dir => {
    return fs.readdirSync(dir).filter(file => exports.isDirectory(path.join(dir, file)));
};

/**
 * 获取组件链接
 *
 * @param {Array} arr 组件名数组
 * @return {Array}
 */
exports.getExtensionsUrl = arr => {
    if (!arr || !arr.length) {
        return [];
    }
    if (!Array.isArray(arr)) {
        arr = [arr];
    }
    return arr
        .filter(name => exports.coreExtensions.indexOf(name) === -1)
        .map(name => {
            if (name.indexOf('mip-') !== 0) {
                return `<script src="${name}"></script>`;
            }
            return `<script src="https://mipcache.bdstatic.com/static/v1/${name}/${name}.js"></script>`;
        });
};

/**
 * 递归合并 JSON 配置文件
 *
 * @param {string} filepath 文件路径
 * @return {Object}
 */
exports.mergeJSON = filepath => {
    let source = exports.readJsonSync(filepath);

    if (!source.extend || !source.extend.length) {
        return source;
    }

    let clone = {};
    if (!Array.isArray(source.extend)) {
        source.extend = [source.extend];
    }
    source.extend.forEach(uri => {
        const extendFilePath = path.resolve(path.dirname(filepath), uri);
        clone = deepmerge(clone, exports.mergeJSON(extendFilePath));
    });

    return deepmerge(clone, source);
};
