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
├── dist                                    - 产出 html 目录
├── src
│   ├── base                                - 基础模板
│   │   ├── components.html                 - 组件（ `src/components` ）继承的基础模板
│   │   ├── inc
│   │   │   ├── head.html
│   │   │   └── scripts.html
│   │   ├── layout.html                     - 主模板
│   │   └── templates.html                  - 模板 `src/templates` ）继承的基础模板
│   ├── components                          - 组件目录
│   │   ├── button
│   │   │   ├── button-size.code.html
│   │   │   ├── button-size.styl
│   │   │   ├── button-size.html
│   │   │   ├── button-size.json
│   │   │   ├── button-style.code.html
│   │   │   ├── button-style.html
│   │   │   ├── button-style.json
│   │   │   ├── button.code.html
│   │   │   ├── button.html
│   │   │   └── button.json
│   │   └── select
│   │       ├── select.code.html
│   │       ├── select.html
│   │       └── select.json
│   ├── templates
│   │   └── blog
│   │       ├── about.html
│   │       ├── about.json
│   │       ├── blog.html
│   │       ├── blog.json
│   │       ├── blog.styl
│   │       ├── img
│   │       │   └── logo.png
│   │       ├── login.html
│   │       ├── login.json
│   │       └── login.styl
│   └── www                                 - 网站目录
└── tools                                   - 构建工具目录
```

## 开发模板和组件

### 目录结构

- `src/templates/模板名/模板名.html`          - 模板 HTML 代码
- `src/templates/模板名/模板名.styl`          - 模板样式代码
- `src/templates/模板名/模板名.json`          - 模板配置数据
- `src/components/组件名/组件名.html`         - 组件 HTML 代码
- `src/components/组件名/组件名.styl`         - 组件样式代码
- `src/components/组件名/组件名.json`         - 组件配置数据
- `src/components/组件名/组件名.code.html`    - 组件预览的代码

注意：

1. `文件名.html` 将使用 `文件名.json` 的数据去渲染。
1. `文件名.styl` 将在编译时自动插入到 `文件名.html` 的 `<head>` 标签内。
1. 如果是文件名包含子文件，请使用以 `_` 开头的文件名，编译将忽略这些文件。
1. `styl` 文件中的引用请使用相对路径。
1. 如果有图片资源请在文件夹内创建 `img` 目录，并使用相对路径引用。

### 模板语法

- 使用 [art-template](https://github.com/aui/art-template) 编译模板。
- 模板需要继承 `{{extend '../../base/templates.html'}}` 主模板。
- 组件需要继承 `{{extend '../../base/components.html'}}` 主模板。
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

1. 如果以上内置变量不能满足需求，可以使用 `{{block 'head'}}{{/block'}}` 来覆盖默认的 `<head>` 标签，甚至你模板内可以自己创建一个主模板（ `layout.tpl` ）。
1. 如果一个文件夹内有多个模板文件，对应的配置数据文件（ `文件名.json` ）内可以使用 `"extend": "./父文件.json"` 去继承同级的其他配置数据文件，并且支持以数组形式配置多个继承文件，需要注意的是继承是按引用文件顺序去覆盖。
1. `src/components/组件名/组件名.code.html` 和 `src/components/组件名/组件名.html` 的区别：
    1. `组件名.code.html` - 用来在页面中点击 `预览代码` 按钮时的代码片段，一般只保留组件使用的代码。
    1. `组件名.html` - 用来在页面中展示的代码，需要兼容 PC 端和移动端样式，并且自身继承了 `base` 模板。
    

## 提交信息规范

git commit 信息和 pull request 标题必须遵循 MIP 项目的 [提交信息规范](https://github.com/mipengine/spec/blob/master/docs/commit-message-spec.md) ，否则不予合入。
