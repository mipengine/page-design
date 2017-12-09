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
            '../src/templates/*/*.html',
            '!../**/*/_*',
            '!../**/*/_*/*'
        ],
        templatesStatic: [
            '../src/templates/**/*',
            '!../**/*/_*',
            '!../**/*/_*/*',
            '!../**/*.{html,styl,json}'
        ],
        components: [
            '../src/components/**/!(_*).html',
            '!../**/*/_*',
            '!../**/*/_*/*',
            '!../**/*.code.html'
        ],
        componentsStatic: [
            '../src/components/**/*',
            '!../**/*/_*',
            '!../**/*/_*/*',
            '!../**/*.{html,styl,json}'
        ],
        www: [
            '../src/www/**/*.html',
            '!../**/*/_*',
            '!../**/*/_*/*'
        ],
        wwwStatic: [
            '../src/www/**/*',
            '!../**/*/_*',
            '!../**/*/_*/*',
            '!../**/*.{html,styl,json}'
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
