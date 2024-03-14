# Sensing

## setup

```bash
npm i
npm start
```

## 技术栈


- Vue3
- Vite2
- TypeScript
- Pinia
- scss

> 使用vue3框架，紧贴时代
> 使用vite2，编译更快
> 使用TS技术，更好的规范代码
> 使用pinia完成代码分离
> 使用scss规范样式
> 尽量使用语义化标签，方便维护

## 相关文档


[开发规范](./docs/guide.md)


[语义化](./docs/semantics.md)


[eslint解析](./docs/eslint.md)


## 结构

<pre>
vite.config.js | 工程化配置
tsconfig.json | typescript配置
.postcssrc | postcss配置
.eslintrc.js | eslint配置
.gitignore.js | git忽略
public | 不编译部分
┣ favicon.ico | 页面icon
src | 源文件
┣ assets | 静态资源文件
┃ ┣ image.png | 图片
┃ ┗ shape.svg | 矢量图
┣ components | 公共组件
┃ ┣ tree.vue | 单文件公共组件
┃ ┗ roll-screen | 多文件公共组件
┃ &ensp; ┣ index.ts | 多文件公共组件主文件
┃ &ensp; ┣ main.vue | 多文件公共组件子文件
┃ &ensp; ┣ item.vue | 多文件公共组件子文件
┃ &ensp; ┗ roll-screen.scss | 多文件公共组件样式文件
┣ layout | 布局
┃ ┣ index.vue | 主文件
┃ ┣ header-nav.vue | 头部导航文件
┃ ┗ footer-info.vue | 底部信息文件
┣ router | 导航
┃ ┣ index.ts | 主文件
┃ ┗ pages | 所有页面
┃ &ensp; ┣ appeal.ts | 页面
┃ &ensp; ┣ list.ts | 页面
┃ &ensp; ┗ base.ts | 基础文件
┣ store | 数据
┃ ┣ index.ts | 数据主文件
┃ ┗ modules | 数据模块
┃ &ensp; ┗ article.ts | 基础文件
┣ types | 类型
┃ ┣ article.ts | 类型
┃ ┣ base.ts | 基础类型
┣ styles | 公共样式
┃ ┣ _index.scss | 样式主文件
┃ ┣ _utils.scss | 工具
┃ ┣ _mixin.scss | 混合
┃ ┗ _variables.scss | 变量
┣ utils | 工具
┃ ┣ rem.ts | rem设置工具
┃ ┗ http | 请求封装
┃ &ensp; ┣ custom-axios.ts | 自定义axios
┃ &ensp; ┣ url.ts | 地址
┃ &ensp; ┗ index.ts | 主文件
┗ pages | 页面
&ensp; ┗ list | 单独页面
&ensp; &ensp; ┣ index.vue | 主文件
&ensp; &ensp; ┗ components | 页面组件
index.html | 模版文件
App.vue | 主模版
main.ts | 主文件
</pre>