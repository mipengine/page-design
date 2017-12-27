/**
 * @file gulp路径配置
 * @author mip-support@baidu.com
 */

'use strict';

module.exports = {
    src: {
        path: '../src',
        match: '../src/**/*',
        api: process.env.NODE_ENV === 'development' ? '../src/**/api/**/*.{json,js}' : '../src/**/api/**/*.json',
        templates: [
            '../src/templates/*/*.html',
            '!../**/*/_*',
            '!../**/*/_*/*'
        ],
        templatesStatic: [
            '../src/templates/**/*',
            '!../**/*/_*',
            '!../**/*/_*/*',
            '!../**/*.{html,styl,json,js}'
        ],
        components: [
            '../src/components/**/*.html',
            '!../**/*/_*',
            '!../**/*/_*/*',
            '!../**/*.code.html'
        ],
        componentsStatic: [
            '../src/components/**/*',
            '!../**/*/_*',
            '!../**/*/_*/*',
            '!../**/*.{html,styl,json,js}'
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
            '!../**/*.{html,styl,json,js}'
        ],
        archive: '../.archive'
    },
    dest: {
        path: '../dist',
        api: '../dist/html',
        match: '../dist/**/*',
        archive: '../dist/archive',
        templates: '../dist/html/templates',
        components: '../dist/html/components',
        www: '../dist'
    }
};
