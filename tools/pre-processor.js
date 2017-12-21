/**
 * @file 编译预处理方法
 * @author mip-support@baidu.com
 */

'use strict';

const path = require('path');
const stylus = require('stylus');
const autoprefixer = require('autoprefixer-stylus');
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
    const csspath = filepath.replace(path.extname(filepath), '.styl');
    const jsonpath = filepath.replace(path.extname(filepath), '.json');
    const cssSource = util.readFileSync(csspath);
    let json = util.mergeJSON(jsonpath);

    // 处理默认数据
    json = Object.assign({
        page: {}
    }, json);

    // 处理组件依赖
    json.extensions = util.getExtensionsUrl(json.extensions);

    if (!cssSource) {
        return json;
    }

    return new Promise(resolve => {
        stylus(cssSource)
            .use(autoprefixer())
            .set('filename', path.basename(filepath))
            .set('paths', [path.dirname(filepath)])
            .render((err, css) => {
                if (err) {
                    return resolve(json);
                }
                json.style = css;
                resolve(json);
            });
    });
};
