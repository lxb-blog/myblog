---
title: violet留言板
tags:
  - hexo
  - 教程
  - hexo美化
categories:
  - 教程
  - 美化
cover: 'https://img.siyouyun.eu.org/file/1730263719373_p2.png'
swiper_index: 10
abstract: '有东西被加密了, 请输入密码查看.'
message: '您好, 这里需要密码.'
theme: xray
wrong_pass_message: '抱歉, 这个密码看着不太对, 请再试试.'
wrong_hash_message: '抱歉, 这个文章不能被校验, 不过您还是能看看解密后的内容.'
abbrlink: 2d242429
date: 2024-10-29 10:18:41
top:
password:
---

# violet留言板（店长）

详见[信笺样式留言板](https://akilar.top/posts/e2d3c450/)

![效果预览](https://img.siyouyun.eu.org/file/1728952884937_image.png)

1. 在`[BlogRoot]`运行指令

   ~~~bash
   npm install hexo-butterfly-envelope --save
   ~~~

   

2. 在站点配置文件`_config.yml`**或**主题配置文件`_config.butterfly.yml`添加以下配置项

   ~~~
   # envelope_comment
   # see https://akilar.top/posts/e2d3c450/
   envelope_comment:
     enable: true #控制开关
     custom_pic:      
       cover: https://npm.elemecdn.com/hexo-butterfly-envelope/lib/violet.jpg #信笺头部图片
       line: https://npm.elemecdn.com/hexo-butterfly-envelope/lib/line.png #信笺底部图片
       beforeimg: https://npm.elemecdn.com/hexo-butterfly-envelope/lib/before.png # 信封前半部分
       afterimg: https://npm.elemecdn.com/hexo-butterfly-envelope/lib/after.png # 信封后半部分
     message: #信笺正文，多行文本，写法如下
       - 有什么想问的？
       - 有什么想说的？
       - 有什么想吐槽的？
       - 哪怕是有什么想吃的，都可以告诉我哦~
     bottom: 自动书记人偶竭诚为您服务！ #仅支持单行文本
     height: #1050px，信封划出的高度
     path: #【可选】comments 的路径名称。默认为 comments，生成的页面为 comments/index.html
     front_matter: #【可选】comments页面的 front_matter 配置
       title: 留言板
       comments: true
   ~~~

   