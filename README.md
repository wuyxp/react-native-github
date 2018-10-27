## 概述
- 本项目采用RN技术栈开发
- 主要完成的任务是调用Github提供的API，写成一个可以跨IOS和Android平台的客户端

## 要完成的功能
[x] 图标与闪屏页面
[x] Favorite列表页面
[x] 项目详情页面
[] Code展示页面
[] Issues展示页面
[] Pull Requests展示页面
[] star展示页面 
[] Followers展示页面
[] Trending列表页面
[x] 登录功能
[x] 我的页面展示
[x] 设置列表
[x] 主题切换
[x] 退出功能

## 使用的技术栈
- "@babel/runtime": "^7.1.2",
避免 babel 编译的工具函数在每个模块里重复出现，减小库和工具包的体积；
在没有使用 babel-runtime 之前，库和工具包一般不会直接引入 polyfill。否则像 Promise 这样的全局对象会污染全局命名空间，这就要求库的使用者自己提供 polyfill。这些 polyfill 一般在库和工具的使用说明中会提到，比如很多库都会有要求提供 es5 的 polyfill。在使用 babel-runtime 后，库和工具只要在 package.json 中增加依赖 babel-runtime，交给 babel-runtime 去引入 polyfill 就行了；

- "@huchenme/github-trending": "^1.3.0",
可以获取github对trending接口的实现（github-api在v3版本并没有提供该接口）

- "github-api": "^3.0.0",
完成对github的api封装：主要是为了节省账号密码或者token授权后的请求header处理

- "lodash": "^4.17.11",
工具函数

- "native-base": "^2.8.1",
UI框架，需要对个别组件分别封装出适合修改Theme的组件

- "react-native-blur": "^3.2.2",
高斯模糊插件，对android不友好，需要单独处理

- "react-native-parallax-scroll-view": "^0.21.3",
下拉图片放大，这个组件不能在ListView中嵌套，否则失效

- "react-native-storage": "^0.2.3",
对AsyncStorage进行封装

- "react-native-vector-icons": "^6.0.2",
引入icon组件

- "react-navigation": "^2.18.0",
RN高端路由组件，谁用谁知道。目前有个问题，就是ButtonTabNavigation的icon的主题色无法通过redux来控制改变

- "react-redux": "^5.0.7",
用于连接react组件和redux的store相关操作的快捷库

- "redux": "^4.0.1",
数据统一管理，非常适合统一的数据存储比如登录信息，theme主题等

- "redux-persist": "^5.10.0",
将RN的store进行持久化存储，也就是说通过处理redux的store方法，用来处理AsyncStorage。并且可以设置白名单或者黑名单

- "rn-splash-screen": "^5.2.0"
RN的闪屏控制

目前完成的效果图
![](https://raw.githubusercontent.com/wuyxp/react-native-github/master/readme_asset/github_readme_pic.jpg)

