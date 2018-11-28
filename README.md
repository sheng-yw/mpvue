# mpvue_test

> A Mpvue project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

### 问题
1、index首页授权无弹框，解决是因为打开项目时没有传入appid
2、定义小程序的template时，思想误区（想用小程序定义模板的思路写），其实就应该把他当做vue组件编写传值props
3、开发当中不能使用全局的app对象、使用vue状态管理vuex
4、跳转路由携带参数时，参数存放在this.$map.query.xxxx  跳转使用wx的api
5、开发中定义vue文件template中不写入东西在main.js中配置挂载会有问题报错  for xxxxx
6、使用redux 把store对象添加到vue的原型上面 全局都能访问
