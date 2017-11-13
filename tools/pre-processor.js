/**
 * @file 编译预处理方法
 * @author mip-support@baidu.com
 */

'use strict';

const path = require('path');
const less = require('less');
const util = require('./util');

/**
 * 模板数据预处理
 *
 * @param  {string} filepath 模板路径
 * @param {string} type 数据类型， www为网站，template为模板，component为组件
 *
 * @return {Object}
 */
module.exports = (filepath, type) => {
    const csspath = filepath.replace(path.extname(filepath), '.less');
    const jsonpath = filepath.replace(path.extname(filepath), '.json');
    const cssSource = util.readFileSync(csspath);
    let json = util.readJsonSync(jsonpath);

    // json 数据继承
    if (json.extend) {
        const extend = path.resolve(path.dirname(filepath), json.extend);
        json = Object.assign(util.readJsonSync(extend), json);
    }

    // 处理组件依赖
    // 如果是官方内置组件，则不输出
    if (json.extensions && json.extensions.length) {
        json.extensions = json.extensions.filter(name => util.coreExtensions.indexOf(name) === -1);
    }

    if (!cssSource) {
        return json;
    }

    return less.render(cssSource, {
        paths: [path.dirname(filepath)]
    }).then(result => {
        json.style = result.css;
        return json;
    });
};
