/**
 * @file 线上运行环境，支持 API 中间件调用
 * @author mip-support@baidu.com
 */

'use strict';

const json = require('res-json');
const express = require('express');
const app = express();
const api = require('express-api-require');

// 注入 res.json, res.jsonp 方法
app.use(json());

// 注入
app.use(api({
    root: __dirname
}));

// 托管静态文件
app.use(express.static('./'));

app.listen(8080, () => console.log('mipgo app listening on port 8080!'));
