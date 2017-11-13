# page design

[![MIP徽章](https://img.shields.io/badge/Powered%20by-MIP-brightgreen.svg)](https://www.mipengine.org)
[![mag-design徽章](https://img.shields.io/badge/Design%20by-mag-brightgreen.svg)](https://www.mipengine.org)

通过 mag design 的输出，构建精美的 MIP 页面模板。

## 架构设计

1. 基于 [art-template](https://github.com/aui/art-template) 编译模板
1. 基于 JSON 配置模板数据，支持配置文件继承
1. 基于 [less](http://lesscss.org/) 开发样式
1. 基于 [gulp](https://gulpjs.com/) 构建和编译

## 开发指南

1. 安装 [nodejs](https://nodejs.org/) 版本4+ ，下载项目到本地后安装依赖 `npm install` 。
1. 运行 `npm run dev` 本地开发调试，将开始 web server 实时预览

更多开发指南请看： [贡献指南](./CONTRIBUTING.md)

## todo

- [x] 编译模板、组件，支持 JSON 配置、样式
- [x] 本地实时预览
- [ ] 支持模板、组件内使用本地图片资源
- [ ] 打 zip 包
- [ ] 产出压缩代码
    - file.html - 压缩文件（供网址预览使用）
    - file.source.html - 原文件
- [ ] 产出 Demo 页面
- [ ] 官网模板页面开发
    - 分类菜单
    - 预览弹出层组件
- [ ] 官网组件页面开发
    - 分类菜单
    - 预览代码组件

## License

[MIT](./LICENSE)
