# page design

[![MIP徽章](https://img.shields.io/badge/Powered%20by-MIP-brightgreen.svg)](https://www.mipengine.org)
[![mag-design徽章](https://img.shields.io/badge/Design%20by-mag-brightgreen.svg)](https://www.mipengine.org)

通过 mag design 的输出，构建精美的 MIP 页面模板。

## 架构设计

1. 基于 [art-template](https://github.com/aui/art-template) 、JSON 数据配置、 [stylus](http://stylus-lang.com/)（已加载 `autoprefixer` 插件） 、 [gulp](https://gulpjs.com/) 编译和构建
1. 本地修改实时预览
1. 本地开发使用源代码，编译生成压缩版代码
1. 模板目录 `src/templates/*` 自动生成 `zip` 压缩包（包含源文件）

## 开发指南

1. 安装 [nodejs](https://nodejs.org/) 版本4+ ，下载项目到本地后安装依赖 `npm install` 。
1. 运行 `npm run dev` 本地开发调试，将开启 web server 实时预览

更多开发指南请看： [贡献指南](./CONTRIBUTING.md)

## todo

- [x] 编译模板、组件，支持 JSON 配置、样式
- [x] 本地实时预览
- [x] 支持模板、组件内使用本地图片资源
- [x] 打 zip 包，生成 `/archive/` 目录
- [x] 产出压缩代码，官网预览的代码是压缩后代码，下载的 zip 包是源代码
- [x] 官网模板页面开发
    - 分类菜单
    - 预览弹出层组件
- [x] 官网组件页面开发
    - 分类菜单
    - 预览代码组件

## License

[MIT](./LICENSE)
