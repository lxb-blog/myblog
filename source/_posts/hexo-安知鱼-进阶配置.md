---
title: 安知鱼主题进阶配置
tags:
  - hexo
  - 教程
  - hexo配置
categories:
  - 教程
cover: 'https://img.siyouyun.eu.org/file/1729829138382_IMG_0105.png'
swiper_index: 10
abstract: '有东西被加密了, 请输入密码查看.'
message: '您好, 这里需要密码.'
theme: xray
wrong_pass_message: '抱歉, 这个密码看着不太对, 请再试试.'
wrong_hash_message: '抱歉, 这个文章不能被校验, 不过您还是能看看解密后的内容.'
abbrlink: 4096dbb9
date: 2024-10-27 09:18:41
top:
password:
---
# 安知鱼主题进阶配置

## 评论

开启评论需要在 comments-use 中填写你需要的评论。

支持双评论显示，只需要配置两个评论（第一个为默认显示）

~~~yaml
comments:
  # Up to two comments system, the first will be shown as default
  # Choose: Valine/Waline/Twikoo/Artalk
  use: Twikoo # Twikoo/Waline
  text: false # Display the comment name next to the button
  # lazyload: The comment system will be load when comment element enters the browser's viewport.
  # If you set it to true, the comment count will be invalid
  lazyload: true
  count: true # Display comment count in post's top_img
  card_post_count: true # Display comment count in Home Page
~~~

| 参数            | 解释                                                         |
| :-------------- | :----------------------------------------------------------- |
| use             | 使用的评论（请注意，最多支持两个，如果不需要请留空）         |
| text            | 是否显示评论服务商的名字                                     |
| lazyload        | 是否为评论开启 lazyload，开启后，只有滚动到评论位置时才会加载评论所需要的资源（开启 lazyload 后，评论数将不显示） |
| count           | 是否在文章顶部显示评论数                                     |
| card_post_count | 是否在首页文章卡片显示评论数                                 |

### Twikoo

`Twikoo` 是一个简洁、安全、无后端的静态网站评论系统，基于[腾讯云开发](https://cloud.tencent.com/product/tcb)。

具体如何配置评论，请查看 [Twikoo 文档](https://twikoo.js.org/quick-start.html)

你只需要把获取到的 `环境 ID (envId)` 填写到配置上去就行

修改 `主题配置文件`

~~~yaml
# Twikoo
# https://github.com/imaegoo/twikoo
twikoo:
  envId: 
  region:
  visitor: true
  option:
~~~

| 参数            | 解释                                                         |
| :-------------- | :----------------------------------------------------------- |
| envId           | 环境 ID                                                      |
| region          | 环境地域，默认为 ap-shanghai，如果您的环境地域不是上海，需传此参数 |
| visitor         | 是否显示文章阅读数                                           |
| option          | 可选配置                                                     |
| card_post_count | 是否在首页文章卡片显示评论数                                 |

开启 visitor 后，文章页的访问人数将改为 Twikoo 提供，而不是 `不蒜子`

### 首页技能点配置

[blog]代表你的博客根目录。示例数据中的图片链接为本人图床，请自行上传至您自己的图床，（不保证永久可用性）。

主题配置文件，关闭`peoplecanvas.enable`

~~~yaml
# 首页随便逛逛people模式 而非技能点模式，关闭后为技能点模式需要配置creativity.yml
peoplecanvas:
  enable: false
  img: https://upload-bbs.miyoushe.com/upload/2023/09/03/125766904/ee23df8517f3c3e3efc4145658269c06_5714860933110284659.png
~~~

创建`[blog]/source/_data/creativity.yml`，输入以下内容

~~~yaml
- class_name: 开启创造力
  creativity_list:
    - name: Java
      color: "#fff"
      icon: https://bu.dusays.com/2023/04/09/643293b1184e9.jpg
    - name: Docker
      color: "#57b6e6"
      icon: https://bu.dusays.com/2023/04/09/643293b0f0abe.png
    - name: Photoshop
      color: "#4082c3"
      icon: https://bu.dusays.com/2022/12/15/639aa3a5c240e.png
    - name: Node
      color: "#333"
      icon: https://npm.elemecdn.com/anzhiyu-blog@2.1.1/img/svg/node-logo.svg
    - name: Webpack
      color: "#2e3a41"
      icon: https://bu.dusays.com/2023/04/09/643293b68026c.png
    - name: Pinia
      color: "#fff"
      icon: https://npm.elemecdn.com/anzhiyu-blog@2.0.8/img/svg/pinia-logo.svg
    - name: Python
      color: "#fff"
      icon: https://bu.dusays.com/2023/04/09/643293b1230f7.png
    - name: Vite
      color: "#937df7"
      icon: https://npm.elemecdn.com/anzhiyu-blog@2.0.8/img/svg/vite-logo.svg
    - name: Flutter
      color: "#4499e4"
      icon: https://bu.dusays.com/2023/04/09/643293b1055c2.png
    - name: Vue
      color: "#b8f0ae"
      icon: https://bu.dusays.com/2023/04/09/643293b6788bd.png
    - name: React
      color: "#222"
      icon: data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K
    - name: CSS3
      color: "#2c51db"
      icon: https://bu.dusays.com/2022/12/15/639aa3a5c251e.png
    - name: JS
      color: "#f7cb4f"
      icon: https://bu.dusays.com/2023/04/09/643293b121f02.png
    - name: HTML
      color: "#e9572b"
      icon: https://bu.dusays.com/2022/12/15/639aa3a5c241c.png
    - name: Git
      color: "#df5b40"
      icon: https://bu.dusays.com/2023/04/09/643293b10ccdd.webp
    - name: Apifox
      color: "#e65164"
      icon: https://bu.dusays.com/2022/11/19/6378d6458c6b6.png
~~~

此时可以看到首页顶部已经有技能点的轮播了。

![641fe7b5c77c3.webp](https://img.siyouyun.eu.org/file/1729928922206_641fe7b5c77c3.webp)

文字部分在主题配置文件中`home_top`配置项修改

#### 字数统计

要为 AnZhiYu 配上字数统计特性, 你需要如下几个步骤:

打开 hexo 工作目录

~~~yaml
npm install hexo-wordcount --save
或者
yarn add hexo-wordcount
~~~

修改 主题配置文件:

~~~yaml
wordcount:
  enable: true
  post_wordcount: true
  min2read: true
  total_wordcount: true
~~~

#### 搜索系统

##### 本地搜索

记得运行 `hexo clean`

你需要安装 [hexo-generator-search](https://github.com/wzpan/hexo-generator-search)，根据它的文档去做相应配置

修改 主题配置文件

~~~yaml
local_search:
  enable: false
  preload: false
  CDN:
~~~

| 参数    | 解释                                                         |
| :------ | :----------------------------------------------------------- |
| enable  | 是否开启本地搜索                                             |
| preload | 预加载，开启后，进入网页后会自动加载搜索文件。关闭时，只有点击搜索按钮后，才会加载搜索文件 |
| CDN     | 搜索文件的 CDN 地址（默认使用的本地链接）                    |

### 定制化的右键菜单

开启`rightClickMenu`即可。

~~~yaml
# 右键菜单
rightClickMenu:
  enable: true
~~~

### 页面卡片顶部气泡升起效果

~~~yaml
# 页面卡片顶部气泡升起效果
bubble:
  enable: false
~~~

### 深色模式粒子效果canvas

~~~yaml
# 深色模式粒子效果canvas
universe:
  enable: true
~~~

