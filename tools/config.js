/**
 * @file gulp路径配置
 * @author mip-support@baidu.com
 */

'use strict';

module.exports = {
    src: {
        path: '../src',
        match: '../src/**/*',
        templates: '../src/templates/**/!(_*).tpl',
        components: [
            '../src/components/**/!(_*).tpl',
            '!../src/components/**/*.code.tpl'
        ],
        www: '../src/www/source/**/!(_*).tpl',
        wwwStatic: '../src/www/static/**/*'
    },
    dest: {
        path: '../dist',
        match: '../dist/**/*',
        archive: '../dist/archive',
        templates: '../dist/html/templates',
        components: '../dist/html/components',
        www: '../dist'
    }
};
