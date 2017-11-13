# page-design 贡献指南

## 问题反馈

todo

## 开发设置

需要安装 [nodejs](https://nodejs.org/) 版本4+ ，下载项目到本地后安装依赖 `npm install` 。

### 常用脚本命令（ npm scripts ）

``` bash
# 启动本地开发调试，将运行 web server 服务并且修改浏览器实时生效
$ npm run dev

# 编译为 html ，将产出 dist/ 目录
$ npm run build

# 使用 fecs 验证代码风格
$ npm run lint
```

### 代码风格

基于 <https://github.com/ecomfe/spec> 风格编写代码，基于 <https://github.com/ecomfe/fecs/> 验证代码风格。

### 项目结构

```
├── dist                            - 产出 html 目录
├── src                             - 模板源代码
│   ├── base                        - 基础模板
│   │   ├── inc                     - 基础模板 include 子文件
│   │   ├── components.tpl          - 组件基础模板
│   │   ├── layout.tpl              - 基础模板
│   │   └── templates.tpl           - 模板继承的模板
│   ├── components                  - 组件目录
│   │   └── button
│   │       ├── button.json         - 组件配置数据
│   │       ├── button.less         - 组件样式
│   │       ├── button.tpl          - 组件预览模板
│   │       └── code.tpl            - 组件查看代码
│   ├── templates                   - 模板目录
│   │   └── blog
│   │       ├── _test.tpl           - 模板内部 include 子文件
│   │       ├── blog.json           - 模板配置数据
│   │       ├── blog.less           - 模板样式
│   │       ├── blog.tpl            - 模板代码
│   │       ├── login.json
│   │       ├── login.less
│   │       └── login.tpl
│   └── www                         - 网站模板
│       ├── source                  - 网站源模板
│       │   ├── inc                 - 网站内部包含 include 子文件
│       │   ├── ├── nav.less
│       │   │   └── _nav.tpl
│       │   ├── index.json          - 首页配置数据
│       │   ├── index.less          - 首页样式
│       │   └── index.tpl           - 首页模板
│       └── static                  - 静态文件，将直接发布到 /dist/ 目录
│           └── favicon.ico
└── tools                           - 打包工具
```

## 开发模板和组件

### 目录结构

- `src/templates/模板名/模板名.tpl`           - 模板 HTML 代码
- `src/templates/模板名/模板名.less`          - 模板样式代码
- `src/templates/模板名/模板名.json`          - 模板配置数据
- `src/components/组件名/组件名.tpl`          - 组件 HTML 代码
- `src/components/组件名/组件名.less`         - 组件样式代码
- `src/components/组件名/组件名.json`         - 组件配置数据
- `src/components/组件名/组件名.code.tpl`     - 组件预览的代码

注意：

1. `文件名.tpl` 将使用 `文件名.json` 的数据去渲染。
1. `文件名.less` 将在编译时自动插入到 `文件名.tpl` 的 `<head>` 标签内。
1. 如果是文件名包含子文件，请使用以 `_` 开头的文件名，编译将忽略这些文件。
1. `less` 文件中的引用请使用相对路径。
1. 如果有图片资源请在文件夹内创建 `img` 目录，并使用相对路径引用。

### 模板语法

- 使用 [art-template](https://github.com/aui/art-template) 编译模板。
- 模板需要继承 `{{extend '../../base/templates.tpl'}}` 主模板。
- 组件需要继承 `{{extend '../../base/components.tpl'}}` 主模板。
- 模板内代码需要在 `{{block 'content'}} 内容 {{/block}}` 中完成。

### 配置数据

在 `src/[templates, components]/文件名/文件名.json` 中以 JSON 形式配置，模板变量如下：

变量名 | 说明 | 类型 | 默认值
--- | --- | --- | ---
name | 名称 | 字符串 | -
descriptions | 描述信息，将用来展示在页面中的描述文本 | 字符串 | -
tags | 搜索标签，支持多个的数组，将用来在页面中筛选条件 | 数组 | `[]`
extensions | 依赖组件（只写组件名即可） | 数组 | `[]`
page.title | 页面标题 | 字符串 | Hello World
page.canonical | 页面 `canonical` 链接 | 字符串 | https://www.mipengine.org/
page.lang | 页面语言 | 字符串 | zh-cn

注意：

1. 如果以上内置变量不能满足需求，可以使用 `{{block 'head'}}{{/block'}}` 来覆盖默认的 `<head>` 标签。
1. 如果一个文件夹内有多个模板文件，对应的配置数据文件（ `文件名.json` ）内可以使用 `"extend": "./父文件.json"` 去继承同级的其他配置数据文件。
1. `src/components/组件名/组件名.code.tpl` 和 `src/components/组件名/组件名.tpl` 的区别：
    1. `组件名.code.tpl` - 用来在页面中点击 `预览代码` 按钮时的代码片段，一般只保留组件使用的代码。
    1. `组件名.tpl` - 用来在页面中展示的代码，需要兼容 PC 端和移动端样式。
    

## 提交信息规范

git commit 信息和 pull request 标题必须遵循 MIP 项目的 [提交信息规范](https://github.com/mipengine/spec/blob/master/docs/commit-message-spec.md) ，否则不予合入。
