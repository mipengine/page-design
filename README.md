# page design

[![MIP 徽章](https://img.shields.io/badge/Powered%20by-MIP-brightgreen.svg)](https://www.mipengine.org)
[![mag-design 徽章](https://img.shields.io/badge/Design%20by-Mag-brightgreen.svg)](https://github.com/mipengine/mip-mag-design)
[![Build Status](https://travis-ci.org/mipengine/page-design.svg?branch=master)](https://travis-ci.org/mipengine/page-design)

通过 mag design 的输出，构建精美的 MIP 页面模板。

## 架构设计

1. 基于 [art-template](https://github.com/aui/art-template) 、JSON 数据配置、 [stylus](http://stylus-lang.com/)（已加载 [autoprefixer](https://github.com/jescalan/autoprefixer-stylus) 插件） 、 [gulp](https://gulpjs.com/) 编译和构建。
1. 使用 `file.json` 数据编译 `file.html` ，并自动处理 `file.styl` 样式编译到 `<head>` 中。
1. 本地开发使用源代码，编译生成压缩版代码。
1. 模板目录 `src/templates/*` 自动生成 `zip` 压缩包（包含源文件）。

## 开发指南

1. 安装 [nodejs](https://nodejs.org/) 版本4+ ，下载项目到本地后安装依赖 `npm install` 。
1. 运行 `npm run dev` 本地开发调试，将开启 web server 实时预览。
1. 运行 `npm run validator` 验证开发页面是否符合 [MIP-HTML 规范](https://www.mipengine.org/doc/2-tech/1-mip-html.html) 。
1. 运行 `npm run build` 编译产出 HTML 文件到 `dist` 目录。

更多开发指南请看： [贡献指南](./CONTRIBUTING.md)

## License

[MIT](./LICENSE)
