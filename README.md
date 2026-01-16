<div align="center">
<a href="https://github.com/shulkme/nextship">
    <picture>
      <img alt="NextShip logo" src="public/images/logo.png" height="256" style="height: 128px">
    </picture>
</a>
<h1>NextShip</h1>
<p>基于Next.js快速构建出海项目模版</p>
<a href="https://react.dev/"><img src="https://img.shields.io/badge/-React-0f60f8?style=flat-square&logo=react&logoColor=white&labelColor=black" alt="React"/></a>
<a href="https://nextjs.org/"><img src="https://img.shields.io/badge/-Next.js-0f60f8?style=flat-square&logo=nextdotjs&logoColor=white&labelColor=black" alt="Next.js"/></a>
<a href="https://ant.design/"><img src="https://img.shields.io/badge/-Ant%20Design-0f60f8?labelColor=black&logo=antdesign&logoColor=white&style=flat-square" alt="AntDesign"/></a>
<a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/-Typescript-0f60f8?style=flat-square&logo=typescript&logoColor=white&labelColor=black" alt="Typescript"/></a>
<a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/-Tailwindcss-0f60f8?style=flat-square&logo=tailwindcss&logoColor=white&labelColor=black" alt="Tailwindcss"/></a>
</div>

## Features
- 开箱即用的前后台模版
- 内置丰富的页面模版及高阶组件
- 支持流行的付费模式
- 支持多种国际化模式
- 支持暗色主题切换
- 积极更新主流技术栈

## Usage

```shell
$ git clone https://github.com/shulkme/nextship.git
$ cd nextship
$ pnpm install
$ pnpm dev
```

## Development

### 项目结构
```shell
├─ apis                 # 接口目录
│  └─ auth     
│     ├─ index.ts       # 接口服务
│     └─ types.ts       # 接口类型
├─ app
│  ├─ [locale]          # 国际化（路由）
│  │  ├─ components     # 通用组件（服务端组件）
│  │  ├─ (app)          # 后台页面
│  │  │  ├─ page.tsx    # 页面组件
│  │  │  └─ layout.tsx  # 布局组件
│  │  └─ (web)          # 前台页面
│  │     ├─ page.tsx    # 页面组件
│  │     └─ layout.tsx  # 布局组件
│  └─ globals.css       # 全局样式
├─ components           # 全局组件（客户端组件）     
├─ config               # 全局配置
├─ i18n                 # 国际化配置 
├─ icons                # 自定义图标
├─ locales              # 语言包目录
├─ providers            # 状态库
├─ public               # 公开目录
│  └─ images            # 图片目录
├─ utils                # 通用工具
├─ .env                 # 环境变量
├─ next.config.ts
├─ package.json
└─ ...
```

## Environment Support

| [![edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png)](http://godban.github.io/browsers-support-badges/) | [![Edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png)](http://godban.github.io/browsers-support-badges/) | [![chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png)](http://godban.github.io/browsers-support-badges/) | [![safari](https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png)](http://godban.github.io/browsers-support-badges/) |
| --- | --- |---------------------------------------------------------------------------------------------------------------------------------------------------------| --- |
| Edge | 最近 2 个版本 | 最近 2 个版本                                                                                                                      | 最近 2 个版本 |


## License

[MIT协议](LICENSE)


