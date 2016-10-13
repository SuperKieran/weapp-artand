# 微信小程序 Artand Demo


## ScreenShots
![](screenshot/1.jpeg)
![](screenshot/2.jpeg)
![](screenshot/3.jpeg)
![](screenshot/4.jpeg)
![](screenshot/5.jpeg)
![](screenshot/6.jpeg)

## Features

- 顶部 Tab 切换
- 下拉刷新
- 上拉加载更多
- <del>登录注册</del>

## PS
下拉刷新需要在全局的 app.json 里配置  
``` js
"window":{
    "enablePullDownRefresh": true
}
```
有两个用于下拉刷新的事件  
``` js
// 下拉刷新触发事件
Page({
  onPullDownRefresh () {
 
  }
})
 
// 停止下拉刷新
wx.stopPullDownRefresh()
```

## Links

- [开发工具文档](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html)
- [组件](https://mp.weixin.qq.com/debug/wxadoc/dev/component/)
- [常见问题](https://mp.weixin.qq.com/debug/wxadoc/dev/qa/qa.html)
- [微信小程序开发资源汇总](https://github.com/justjavac/awesome-wechat-weapp/)

## Contributing

欢迎任何形式的贡献，有任何建议或意见您可以进行 [Pull Request](https://github.com/SuperKieran/weapp-artand/pulls)，或者给我 [提issues](https://github.com/SuperKieran/weapp-artand/issues)。

## LICENSE

[MIT](./LICENSE)
