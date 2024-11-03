---
title: hexo图片懒加载
tags:
  - hexo
  - 教程
  - hexo美化
categories:
  - 教程
  - 美化
cover: 'https://img.siyouyun.eu.org/file/1730593120821_1 (5)(1).jpg'
swiper_index: 10
abstract: '有东西被加密了, 请输入密码查看.'
message: '您好, 这里需要密码.'
theme: xray
wrong_pass_message: '抱歉, 这个密码看着不太对, 请再试试.'
wrong_hash_message: '抱歉, 这个文章不能被校验, 不过您还是能看看解密后的内容.'
abbrlink: a92aee60
date: 2024-10-31 13:10:41
top:
password:
---

# hexo图片懒加载

## 图片懒加载

​	图片懒加载是提升网站性能和用户体验的一个非常很好方式，并且几乎所有的大型网站都使用到了，比如微博，仅把用户可见的部分显示图片，其余的都暂时不加载，做法就是：让所有图片元素src指向一个小的站位图片比如loading，并新增一个属性(如data-original)存放真实图片地址。每当页面加载（或者滚动条滚动），使用JS脚本将可视区域内的图片src替换回真实地址，并做请求重新加载。

## Hexo-lazy-image 使用

插件地址：

{% link 插件地址,图片懒加载,https://github.com/Troy-Yang/hexo-lazyload-image %}

安装步骤：

~~~yaml
npm install hexo-lazyload-image --save
~~~

然后 _config.yml 文件加入下面内容

~~~yaml
lazyload:
  enable: true  # 是否开启图片懒加载
  onlypost: true  # 是否只对文章的图片做懒加载，rue：只有路由页面或者文章的图片才会被懒加载。false：除了站点背景图（如果有的话），整个站点的图片均会被懒加载
  loadingImg: /img/00.gif # 指定的话，加载自定义路径的图片用作文章图片加载时显示，不指定的话显示默认图片。
  isSPA: true  # true：针对单页面应用，当滚动条滚动到图片位置时就会向后端请求图片。false：刷新才能请求图片
  preloadRatio: 3 # 在多少倍的可见区域时触发图片请求，默认为1，即当前屏幕的区域。
~~~

效果展示：

自己看本博客
