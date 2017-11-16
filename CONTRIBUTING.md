# page-design 贡献指南

## 问题反馈

todo

## 开发设置

需要安装 [nodejs](https://nodejs.org/) 版本4+ ，下载项目到本地后安装依赖 `npm install` 。

### 常用脚本命令（ npm scripts ）

``` bash
# 启动本地开发调试，将运行 web server 服务并修改浏览器实时生效
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
├── src
│   ├── base                        - 基础模板
│   │   ├── components.tpl          - 组件（ `src/components` ）继承的基础模板
│   │   ├── inc                     - 包含的子模板
│   │   │   ├── head.tpl            - 头部 `<head>` 模板
│   │   │   └── scripts.tpl         - 底部 `<script>` 模板
│   │   ├── layout.tpl              - 主模板
│   │   └── templates.tpl           - 模板 `src/templates` ）继承的基础模板
│   ├── components                  - 组件目录
│   │   └── button
│   │       ├── button.code.tpl     - 组件的查看代码
│   │       ├── button.json         - 组件数据
│   │       ├── button.styl         - 组件样式
│   │       └── button.tpl          - 组件模板
│   ├── templates                   - 模板目录
│   │   └── blog
│   │       ├── _test.tpl           - 被包含的模板，通常是多个文件引用的公用文件（不会编译产出 HTML 文件）
│   │       ├── blog.json           - 配置数据
│   │       ├── blog.styl           - 样式
│   │       ├── blog.tpl            - 模板
│   │       ├── img                 - 图片目录
│   │       │   └── logo.png
│   │       ├── login.json
│   │       ├── login.styl
│   │       └── login.tpl
│   └── www                         - 官网代码，下面的文件将编译到 / 根目录
│       ├── _nav.tpl                - 被包含的模板，通常是多个文件引用的公用文件（不会编译产出 HTML 文件）
│       ├── favicon.ico
│       ├── img                     - 图片目录
│       │   └── logo.png
│       ├── index.json              - 主页数据
│       ├── index.styl              - 主页样式
│       ├── index.tpl               - 主页模板
│       ├── nav.styl                - 导航样式
│       └── templates.tpl           - 模板
└── tools                           - 构建工具目录
```

## 开发模板和组件

### 目录结构

- `src/templates/模板名/模板名.tpl`           - 模板 HTML 代码
- `src/templates/模板名/模板名.styl`          - 模板样式代码
- `src/templates/模板名/模板名.json`          - 模板配置数据
- `src/components/组件名/组件名.tpl`          - 组件 HTML 代码
- `src/components/组件名/组件名.styl`         - 组件样式代码
- `src/components/组件名/组件名.json`         - 组件配置数据
- `src/components/组件名/组件名.code.tpl`     - 组件预览的代码

注意：

1. `文件名.tpl` 将使用 `文件名.json` 的数据去渲染。
1. `文件名.styl` 将在编译时自动插入到 `文件名.tpl` 的 `<head>` 标签内。
1. 如果是文件名包含子文件，请使用以 `_` 开头的文件名，编译将忽略这些文件。
1. `styl` 文件中的引用请使用相对路径。
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
extensions | 依赖组件（只写组件名即可） | 数组 | `[]`
page.title | 页面标题 | 字符串 | Hello World
page.canonical | 页面 `canonical` 链接 | 字符串 | https://www.mipengine.org/
page.lang | 页面语言 | 字符串 | zh-cn

注意：

1. 如果以上内置变量不能满足需求，可以使用 `{{block 'head'}}{{/block'}}` 来覆盖默认的 `<head>` 标签。
1. 如果一个文件夹内有多个模板文件，对应的配置数据文件（ `文件名.json` ）内可以使用 `"extend": "./父文件.json"` 去继承同级的其他配置数据文件，并且支持以数组形式配置多个继承文件，需要注意的是继承是按引用文件顺序去覆盖。
1. `src/components/组件名/组件名.code.tpl` 和 `src/components/组件名/组件名.tpl` 的区别：
    1. `组件名.code.tpl` - 用来在页面中点击 `预览代码` 按钮时的代码片段，一般只保留组件使用的代码。
    1. `组件名.tpl` - 用来在页面中展示的代码，需要兼容 PC 端和移动端样式。
    

## 提交信息规范

git commit 信息和 pull request 标题必须遵循 MIP 项目的 [提交信息规范](https://github.com/mipengine/spec/blob/master/docs/commit-message-spec.md) ，否则不予合入。
