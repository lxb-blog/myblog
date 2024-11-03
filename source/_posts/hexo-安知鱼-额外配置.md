---
title: 安知鱼主题额外配置
tags:
  - hexo
  - 教程
  - hexo配置
categories:
  - 教程
cover: 'https://img.siyouyun.eu.org/file/1728867599517_1.jpg'
swiper_index: 10
abstract: '有东西被加密了, 请输入密码查看.'
message: '您好, 这里需要密码.'
theme: xray
wrong_pass_message: '抱歉, 这个密码看着不太对, 请再试试.'
wrong_hash_message: '抱歉, 这个文章不能被校验, 不过您还是能看看解密后的内容.'
abbrlink: 48a4e2e7
date: 2024-10-27 09:18:41
top:
password:
---
# 安知鱼主题额外配置

## 额外配置

### Footer 设置

`since` 是一个来展示你站点起始时间的选项。它位于页面的最底部。

~~~yaml
# Footer Settings
# --------------------------------------
footer:
  owner:
    enable: true
    since: 2024
  custom_text:
  runtime:
    enable: true
    launch_time: 10/01/2024 00:00:00 # 网站上线时间
    work_img: \config\imgs\李小白-上班摸鱼中.svg
    work_description: 距离月入25k也就还差一个大佬带我~
    offduty_img: \config\imgs\李小白-下班啦.svg
    offduty_description: 下班了就该开开心心的玩耍，嘿嘿~
  # 徽标部分配置项 https://shields.io/
  # https://img.shields.io/badge/CDN-jsDelivr-orange?style=flat&logo=jsDelivr
  bdageitem:
    enable: true
    list:
      - link: https://hexo.io/ #徽标指向网站链接
        shields: https://npm.elemecdn.com/anzhiyu-blog@2.1.5/img/badge/Frame-Hexo.svg #徽标API
        message: 博客框架为Hexo_v5.4.0 #徽标提示语
      - link: https://blog.anheyu.com/
        shields: https://npm.elemecdn.com/anzhiyu-theme-static@1.0.9/img/Theme-AnZhiYu-2E67D3.svg
        message: 本站使用AnZhiYu主题
      # - link: https://www.dogecloud.com/
      #   shields: https://npm.elemecdn.com/anzhiyu-blog@2.2.0/img/badge/CDN-多吉云-3693F3.svg
      #   message: 本站使用多吉云为静态资源提供CDN加速
      - link: https://github.com/
        shields: https://npm.elemecdn.com/anzhiyu-blog@2.1.5/img/badge/Source-Github.svg
        message: 本站项目由Github托管
      - link: http://creativecommons.org/licenses/by-nc-sa/4.0/
        shields: https://npm.elemecdn.com/anzhiyu-blog@2.2.0/img/badge/Copyright-BY-NC-SA.svg
        message: 本站采用知识共享署名-非商业性使用-相同方式共享4.0国际许可协议进行许可
~~~

| 参数                        | 解释                                       |
| :-------------------------- | :----------------------------------------- |
| owner                       | 页脚网站所有者@2020-当前年份               |
| owner.enable                | 页脚网站所有者是否启用                     |
| owner.since                 | 页脚年份，控制台中打印的运行时间也来自这里 |
| runtime                     | 运行时间                                   |
| runtime.enable              | 运行时间是否启用                           |
| runtime.launch_time         | 网站上线时间                               |
| runtime.work_img            | 页脚上班时间的徽标                         |
| runtime.work_description    | 页脚上班时间的 title 描述                  |
| runtime.offduty_img         | 页脚下班时间的徽标                         |
| runtime.offduty_description | 页脚下班时间的 title 描述                  |
| bdageitem                   | 徽标配置项                                 |
| bdageitem.link              | 徽标配置链接                               |
| bdageitem.shields           | 徽标配置徽标                               |
| bdageitem.message           | 徽标配置徽标 title                         |

![64412c4c08266.png](https://img.siyouyun.eu.org/file/1729923124574_64412c4c08266.png)

![64412cb6bbbf5.png](https://img.siyouyun.eu.org/file/1729923123713_64412cb6bbbf5.png)

### 侧边栏设置

可自行决定哪个项目需要显示，可决定位置，也可以设置不显示侧边栏。

修改 `主题配置文件`

~~~yaml
# aside (侧边栏)
# --------------------------------------

aside:
  enable: true
  hide: false
  button: true
  mobile: true # display on mobile
  position: right # left or right
  display: # 控制对应详情页面是否显示侧边栏
    archive: true
    tag: true
    category: true
  card_author:
    enable: true
    description: <div style="line-height:1.38;margin:0.6rem 0;text-align:justify;color:rgba(255, 255, 255, 0.8);">这有关于<b style="color:#fff">产品、设计、开发</b>相关的问题和看法，还有<b style="color:#fff">文章翻译</b>和<b style="color:#fff">分享</b>。</div><div style="line-height:1.38;margin:0.6rem 0;text-align:justify;color:rgba(255, 255, 255, 0.8);">相信你可以在这里找到对你有用的<b style="color:#fff">知识</b>和<b style="color:#fff">教程</b>。</div>
    name_link: /about
  card_announcement:
    enable: false
    content: 欢迎来看我的博客鸭~
  card_weixin:
    enable: true
    face: https://img02.anheyu.com/adminuploads/1/2022/09/11/631ddb7c9b250.png
    backFace: https://img02.anheyu.com/adminuploads/1/2022/09/11/631ddeb0900b7.png
  card_recent_post:
    enable: true
    limit: 5 # if set 0 will show all
    sort: date # date or updated
    sort_order: # Don't modify the setting unless you know how it works
  card_categories:
    enable: false
    limit: 8 # if set 0 will show all
    expand: none # none/true/false
    sort_order: # Don't modify the setting unless you know how it works
  card_tags:
    enable: true
    limit: 40 # if set 0 will show all
    color: false
    sort_order: # Don't modify the setting unless you know how it works
    highlightTags:
      - Hexo
      - 前端
  card_archives:
    enable: true
    type: monthly # yearly or monthly
    format: MMMM YYYY # eg: YYYY年MM月
    order: -1 # Sort of order. 1, asc for ascending; -1, desc for descending
    limit: 8 # if set 0 will show all
    sort_order: # Don't modify the setting unless you know how it works
  card_webinfo:
    enable: true
    post_count: true
    last_push_date: false
    sort_order: # Don't modify the setting unless you know how it works
~~~

其中 `card_weixin` 可以控制微信公众号的图片，`face`为翻转前的图片，`backFace`为翻转后的图片。

> [!IMPORTANT]
>
> 本站使用见hexo-主题美化-侧边栏添加个性定位欢迎信息

### 运行时间

网页已运行时间

修改 `主题配置文件`

~~~yaml
# Time difference between publish date and now (网页运行时间)
# Formal: Month/Day/Year Time or Year/Month/Day Time
runtimeshow:
  enable: true
  publish_date: 4/1/2021 00:00:00
~~~

![6441319e80977.webp](https://img.siyouyun.eu.org/file/1729925940344_6441319e80977.webp)

### 最新评论

最新评论只会在刷新时才会去读取，并不会实时变化

由于 API 有 访问次数限制，为了避免调用太多，主题默认存取期限为 10 分钟。也就是説，调用后资料会存在 localStorage 里，10 分钟内刷新网站只会去 localStorage 读取资料。 10 分钟期限一过，刷新页面时才会去调取 API 读取新的数据。（ 配置 storage，可自行配置缓存时间）

在侧边栏显示最新评论板块

修改 `主题配置文件`

~~~yaml
# Console - Newest Comments
newest_comments:
  enable: true
  sort_order: # Don't modify the setting unless you know how it works
  limit: 6
  storage: 10 # unit: mins, save data to localStorage
  avatar: true
~~~

| 配置    | 解释                    |
| :------ | :---------------------- |
| limit   | 显示的数量              |
| storage | 设置缓存时间，单位 分钟 |
| avatar  | 是否显示头像            |

![644132e885d91.webp](https://img.siyouyun.eu.org/file/1729926061487_644132e885d91.webp)

### 右下角按钮

#### 简繁转换

简体繁体互换

右下角会有简繁转换按钮。

修改 `主题配置文件`

~~~yaml
translate:
  enable: true
  # 默认按钮显示文字(网站是简体，应设置为'default: 繁')
  default: 简
  #网站默认语言，1: 繁体中文, 2: 简体中文
  defaultEncoding: 1
  #延迟时间,若不在前, 要设定延迟翻译时间, 如100表示100ms,默认为0
  translateDelay: 0
  #当文字是简体时，按钮显示的文字
  msgToTraditionalChinese: "繁"
  #当文字是繁体时，按钮显示的文字
  msgToSimplifiedChinese: "简"
~~~

#### 阅读模式

阅读模式下会去掉除文章外的内容，避免干扰阅读。

只会出现在文章页面，右下角会有阅读模式按钮。

修改 `主题配置文件`

~~~yaml
readmode: true
~~~

#### 夜间模式

右下角会有夜间模式按钮

修改 `主题配置文件`

~~~yaml
# dark mode
darkmode:
  enable: true
  # Toggle Button to switch dark/light mode
  button: true
  # Switch dark/light mode automatically (自动切换 dark mode和 light mode)
  # autoChangeMode: 1  Following System Settings, if the system doesn't support dark mode, it will switch dark mode between 6 pm to 6 am
  # autoChangeMode: 2  Switch dark mode between 6 pm to 6 am
  # autoChangeMode: false
  autoChangeMode: 1
  # Set the light mode time. The value is between 0 and 24. If not set, the default value is 6 and 18
  start: # 8
  end: # 22
~~~

| 参数           | 解释                                                         |
| :------------- | :----------------------------------------------------------- |
| button         | 是否在右下角显示日夜模式切换按钮                             |
| autoChangeMode | 自动切换的模式                                               |
| autoChangeMode | autoChangeMode: 1 跟随系统而变化，不支持的浏览器/系统将按照时间 start 到 end 之间切换为 light mode autoChangeMode: 2 只按照时间 start 到 end 之间切换为 light mode ,其余时间为 dark mode autoChangeMode: false 取消自动切换 |
| start          | light mode 的开始时间                                        |
| end            | light mode 的结束时间                                        |

#### 按钮排序

~~~yaml
# Don't modify the following settings unless you know how they work (非必要请不要修改 )
# Choose: readmode,translate,darkmode,hideAside,toc,chat,comment
# Don't repeat 不要重复
rightside_item_order:
  enable: false
  hide: # readmode,translate,darkmode,hideAside
  show: # toc,chat,comment
~~~

#### 页面加载动画

当进入网页时，因为加载速度的问题，可能会导致 top_img 图片出现断层显示，或者网页加载不全而出现等待时间，开启preloader后，会显示加载动画，等页面加载完，加载动画会消失。

主题支持 pace.js 的加载动画，具体可查看 [pace.js](https://codebyzach.github.io/pace/)

修改 `主题配置文件`，其中`avatar`可以自定义加载时的头像

~~~yaml
# Loading Animation (加载动画)
preloader:
  enable: true
  # source
  # 1. fullpage-loading
  # 2. pace (progress bar)
  # else all
  source: 3
  # pace theme (see https://codebyzach.github.io/pace/)
  pace_css_url:
  avatar: # 自定义头像
~~~

#### Pangu

> 如果你跟我一样，每次看到网页上的中文字和英文、数字、符号挤在一块，就会坐立难安，忍不住想在它们之间加个空格。这个外挂正是你在网路世界走跳所需要的东西，它会自动替你在网页中所有的中文字和半形的英文、数字、符号之间插入空白。

修改 `主题配置文件`

~~~yaml
# https://github.com/vinta/pangu.js
# Insert a space between Chinese character and English character (中英文之间添加空格)
pangu:
  enable: false
  field: post # site/post
~~~

`field`只支持两个参数，`post`(只在文章页生效)和`site`(全站生效)

