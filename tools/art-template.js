/**
 * @file art-template 模板编译引擎
 * @author mip-support@baidu.com
 */

'use strict';

const hljs = require('highlight.js');
const marked = require('marked');
const fs = require('fs');
const path = require('path');
const util = require('./util');
const artTemplate = require('art-template');
const through2 = require('through2');
const gutil = require('gulp-util');

const renderer = new marked.Renderer();
const PluginError = gutil.PluginError;

/**
 * 高亮代码
 *
 * @param  {string} content 内容
 * @param  {string | undefined} lang 语言名称
 * @return {string}
 */
renderer.code = (content, lang) =>
    `<pre><code class="hljs lang-${lang || ''}">${hljs.highlightAuto(content).value}</code></pre>`;

artTemplate.defaults.extname = '.html';
artTemplate.defaults.minimize = false;

/**
 * 注入模板内获取百度统计事件数据
 *
 * @param {string} type 事件名称
 * @param {string} args 事件数据
 * @return {string}
 */
artTemplate.defaults.imports.getBaiduStatsEvent = function (type) {
    var args = [].slice.call(arguments);
    var res = {
        type: type,
        data: '[_trackEvent, ' + args.join(',') + ']'
    };
    // {"type":"click","data":"[_trackEvent, tpl, down, 1]"}
    return encodeURIComponent(JSON.stringify(res));
};

/**
 * 注入根据预览链接获取组件配置里的 extensions
 *
 * @param {string} value 预览链接，以 src 为基础路径
 * @return {string}
 */
artTemplate.defaults.imports.getComponentsExtensions = value => {
    const filepath = path.resolve(__dirname, '../src/', value.replace('.html', '.json'));
    return util.getExtensionsUrl(util.mergeJSON(filepath).extensions);
};

/**
 * 解析 md 文件为 HTML 代码
 *
 * @param {string} file markdown 文件路径，以 src 为基础路径
 * @return {string}
 */
artTemplate.defaults.imports.markdownFileToHtml = file => {
    const filepath = path.resolve(__dirname, '../src/', file);
    const content = fs.readFileSync(filepath).toString();
    return marked(content, {renderer});
};

/**
 * 注入根据预览的链接获取对应的 *.code.html 预览代码
 *
 * @param {string} value 预览链接，以 src 为基础路径
 * @return {string}
 */
artTemplate.defaults.imports.getComponentsCode = value => {
    const filepath = path.resolve(__dirname, '../src/', value.replace('.html', '.code.html'));
    return util.readFileSync(filepath);
};

/**
 * 注入代码高亮
 *
 * @param {string} content 代码内容
 * @param {string} [type=html] 内容类型，默认为 html
 * @return {string}
 */
artTemplate.defaults.imports.highlight = (content, type) => {
    return hljs.highlight(type || 'html', content).value;
};

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
