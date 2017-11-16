/**
 * @file gulp路径配置
 * @author mip-support@baidu.com
 */

'use strict';

module.exports = {
    src: {
        path: '../src',
        match: '../src/**/*',
        templates: [
            '../src/templates/**/!(_*).html',
            '!../src/templates/_*',
            '!../src/templates/_**/*'
        ],
        templatesStatic: [
            '../src/templates/**/*',
            '!../src/templates/_*',
            '!../src/templates/_**/*',
            '!../src/templates/**/*.{html,styl,json}'
        ],
        components: [
            '../src/components/**/!(_*).html',
            '!../src/components/_*',
            '!../src/components/_**/*',
            '!../src/components/**/*.code.html'
        ],
        componentsStatic: [
            '../src/components/**/*',
            '!../src/components/_*',
            '!../src/components/_**/*',
            '!../src/components/**/*.{html,styl,json}'
        ],
        www: [
            '../src/www/**/!(_*).html',
            '!../src/www/_*',
            '!../src/www/_**/*'
        ],
        wwwStatic: [
            '../src/www/**/*',
            '!../src/www/_*',
            '!../src/www/**/*.{html,styl,json}'
        ],
        archive: '../.archive'
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
