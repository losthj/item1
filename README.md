### 安装

## 项目源代码
```
git clone git@git.jylc168.com:JYLC/jylcpc.git
cd jylcpc
npm install
npm start
```
#### zent框架
https://youzan.github.io/zent/zh/guides/install

#### 项目目录
```
├── README.md
├── config 配置文件
│   ├── env.js
│   ├── jest
│   │   ├── cssTransform.js
│   │   └── fileTransform.js
│   ├── paths.js
│   ├── webpack.config.js
│   └── webpackDevServer.config.js
├── package-lock.json
├── package.json
├── public 模版文件
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── scripts
│   ├── build.js
│   ├── start.js
│   └── test.js
└── src
    ├── App.js
    ├── assets  资源文件目录
    │   ├── account
    │   ├── common 公共文件目录
    │   │   └── common.scss
    │   └── home
    ├── components 动态组件（需要绑定数据的组件）
    │   ├── account
    │   ├── common
    │   └── home
    ├── containers 静态组件
    │   ├── account
    │   ├── common
    │   │   └── top.js
    │   └── home
    ├── index.js  入口文件
    ├── router    outer
    ├── serviceWorker.js
    ├── utils
    └── views
        ├── account
        └── home
```
