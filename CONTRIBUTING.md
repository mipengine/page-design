# page-design 贡献指南

非常感谢您关注 [mipengine/page-design](https://github.com/mipengine/page-design) 项目，在提交您的贡献之前，请务必认真阅读以下准则。

- [问题反馈](#issue)
- [开发设置](#dev)
    - [常用脚本命令（ npm scripts ）](#npm-scripts)
    - [代码风格](#code-spec)
    - [项目结构](#dir-spec)
- [开发模板和组件](#start)
    - [目录结构](#start-dir)
    - [模板语法](#tpl-syntax)
    - [样式语法](#style-syntax)
    - [配置数据](#json-syntax)
    - [异步数据](#async-data)
    - [在官网展示](#showcase)
- [提交信息规范](#commit-message-spec)
- [提交请求（pull request）](#pull-request)

<a id="issue"></a>
## 问题反馈

- 请避免提交重复的 issue，在提交之前搜索现有的 issue 。
- 请确定 issue 的类型，并在 issue 内容描述清晰，我们将根据内容对 issue 打上对应的 label 。

<a id="dev"></a>
## 开发设置

需要安装 [nodejs](https://nodejs.org/) 版本4+ ，下载项目到本地后安装依赖 `npm install` 。

<a id="npm-scripts"></a>
### 常用脚本命令（ npm scripts ）

``` bash
# 启动本地开发调试，将运行 web server 服务并修改浏览器实时生效，根据命令输出文本即可打开对应预览链接
$ npm run dev

# 编译 html ，将产出 dist/ 目录
$ npm run build

# 验证编译是否符合 MIP HTML 规范
$ npm run validator

# 使用 fecs 验证 tools/ 目录下代码风格
$ npm run lint
```

<a id="code-spec"></a>
### 代码风格

基于 <https://github.com/ecomfe/spec> 风格编写代码，基于 <https://github.com/ecomfe/fecs> 验证代码风格。

<a id="dir-spec"></a>
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

<a id="start"></a>
## 开发模板和组件

<a id="start-dir"></a>
### 目录结构

- `src/templates/模板名/模板名.html`          - 模板 HTML 代码，该文件是模板的入口文件
- `src/templates/模板名/模板名.styl`          - 模板样式代码
- `src/templates/模板名/模板名.json`          - 模板配置数据
- `src/components/组件名/组件名.html`         - 组件 HTML 代码
- `src/components/组件名/组件名.styl`         - 组件样式代码
- `src/components/组件名/组件名.json`         - 组件配置数据
- `src/components/组件名/组件名.code.html`    - 组件预览的代码

注意：

1. `文件名.html` 将使用 `文件名.json` 的数据去渲染。
1. `文件名.styl` 将在编译时自动插入到 `文件名.html` 的 `<head>` 标签内。
1. 编译产出时将忽略以 `_` 开头的文件或文件夹。
1. `styl` 文件中的引用请使用相对路径。
1. 如果有图片资源请在文件夹内创建 `img` 目录，并使用相对路径引用。
1. `src/components/组件名/组件名.code.html` 和 `src/components/组件名/组件名.html` 的区别：
    1. `组件名.code.html` - 用来在页面中点击 `预览代码` 按钮时的代码片段，只是组件使用的代码，没有页面框架代码，如 `<html>` 、 `<head>` 等。
    1. `组件名.html` - 用来在页面中展示的代码，需要兼容 PC 端和移动端样式，并且自身继承了 `base` 模板。

<a id="tpl-syntax"></a>
### 模板语法

- 模板需要继承 `{{extend '../../base/templates.html'}}` 主模板。
- 组件需要继承 `{{extend '../../base/components.html'}}` 主模板。
- 模板内代码需要在 `{{block 'content'}} 内容 {{/block}}` 中完成。
- 支持使用 `{{include './_inc/xx.html}}` 继承子模板。
- 其他语法请看 [art-template 模板引擎语法文档](https://aui.github.io/art-template/zh-cn/docs/syntax.html) 。

<a id="style-syntax"></a>
### 样式语法

基于 `stylus` 开发，已加载 `autoprefixer` 插件，语法请参考官网： <http://stylus-lang.com> 。

<a id="json-syntax"></a>
### 配置数据

在 `src/[templates, components]/文件名/文件名.json` 中以 JSON 形式配置，模板变量如下：

变量名 | 说明 | 类型 | 默认值
--- | --- | --- | ---
extend | 继承的数据文件地址，将按顺序的去合并数据，支持递归依赖，使用 [deepmerge](https://www.npmjs.com/package/deepmerge) 处理合并 | 数组、字符串 | -
extensions | 依赖组件（只写组件名即可） | 数组 | []
page.title | 页面标题 | 字符串 | Hello World
page.canonical | 页面 `canonical` 链接 | 字符串 | https://www.mipengine.org
page.lang | 页面语言 | 字符串 | zh-cn

注意：

1. 如果以上内置变量不能满足需求，可以使用 `{{block 'head'}}{{/block'}}` 来覆盖默认的 `<head>` 标签，甚至你模板内可以自己创建一个主模板（ `layout.tpl` ）。
1. `extend` 继承数据字段是为了解决一个行业模板内包含了多个页面文件，又存在一些公用的数据字段，可以使用该字段来继承一些公用的数据配置。支持继承多个文件、递归深度继承。

<a id="async-data"></a>
### 异步数据

由于丰富的组件、模板可能需要请求后端异步接口，mipgo支持配置 JSON 静态数据和高级 `node server` 中间件形式的异步接口，如：

文件路径 | 说明 | 对应链接
--- | --- | ---
`src/templates/模板名/api/接口名称.json` | 静态的接口数据 | `https://www.mipgo.org/html/templates/模板名/api/接口名称.json`
`src/components/组件名/api/接口名称.json` | 静态的接口数据 | `https://www.mipgo.org/html/components/组件名/api/接口名称.json`
`src/templates/模板名/api/中间件.js` | 高级 `node server` 中间件 | `https://www.mipgo.org/html/templates/模板名/api/中间件.json`
`src/templates/组件名/api/中间件.js` | 高级 `node server` 中间件 | `https://www.mipgo.org/html/templates/组件名/api/中间件.json`

#### 中间件示例

```js
module.exports = function (req, res, next) {
    // req 为 request 请求对象
    // res 为 response 响应对象
    // next() 为进入下个路由

    // 输出响应内容
    res.end('ok');

    // 输出 JSON 对象的响应内容
    res.json({});

    // 输出 JSONP 数据
    res.jsonp({});
};
```

更多中间件信息请点击 <https://nodejs.org/api/http.html> 获得更多帮助。

#### 注意

1. 开发模板中异步接口链接就写绝对 `https` 的链接，本地开发时会做替换处理。
1. 异步接口请求只支持在当前模板目录下的 `./api/` 目录，不支持跨模板。

<a id="showcase"></a>
### 在官网展示

模板展示在 `src/www/templates.json` 中分类别去配置 `templatesList[].templates` ，字段有：

```json
{
    "name": "模板名称（文件夹名）",
    "title": "页面展示的标题",
    "descriptions": "页面展示的描述",
    "url": "预览链接入口，以 `src` 为基础路径，如： `templates/blog/blog.html`",
    "img": "页面展示图片，以 `src` 为基础路径，如： `templates/blog/img/logo.png`"
}
```

组件展示在 `src/www/components.json` 中分类别去配置 `componentsList[].components` ，字段有：

```json
{
    "iframe": {
        "url": "官网中展示预览的链接地址，以 `src` 为基础路径，如： `components/button/button.html`",
        "height": 200
    }
}
```

注意：由于组件是单独的页面，会在官网组件页面中以 `<mip-iframe>` 形式去引用所以需要配置预览链接和容器的高度，而容器宽度默认为 `100%` 。

<a id="commit-message-spec"></a>
## 提交信息规范

git commit 信息和 pull request 标题必须遵循 MIP 项目的 [提交信息规范](https://github.com/mipengine/spec/blob/master/docs/commit-message-spec.md) ，否则不予合入。


<a id="pull-request"></a>
### 提交请求（pull request）

1. fork [mipengine/page-design](https://github.com/mipengine/page-design) 。
1. 把个人仓库（repository）克隆到电脑上，并安装所依赖的插件（ `npm install` ）。
1. 开始开发，使用 `npm run dev` 命令开发预览，开发完成后，需要运行 `npm run validator` 确认检查 MIP HTML 规范通过。
1. 推送（push）分支。
1. 建立一个新的合并申请（pull request）并描述变动。
