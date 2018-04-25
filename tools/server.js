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

// 百度BAE必须绑定这个端口 18080
app.listen(18080, () => console.log('mipx app listening on port 18080!'));
