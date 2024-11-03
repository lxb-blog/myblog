---
title: 文章html短链接
tags:
  - hexo
  - 教程
  - hexo插件
categories:
  - 教程
  - 插件
  - 美化
cover: 'https://img.siyouyun.eu.org/file/1730263978125_p5.png'
swiper_index: 10
abstract: '有东西被加密了, 请输入密码查看.'
message: '您好, 这里需要密码.'
theme: xray
wrong_pass_message: '抱歉, 这个密码看着不太对, 请再试试.'
wrong_hash_message: '抱歉, 这个文章不能被校验, 不过您还是能看看解密后的内容.'
abbrlink: '35384273'
date: 2024-10-29 09:16:41
top:
password:
---

# hexo-文章html短链接插件

## 前言

- Hexo默认的静态URL格式是 `:year/:month/:day/:title`，即按年、月、日、标题的形式生成固定链接
  - 例如：`http://www.xxx.com/2022/11/08/文章标题`
  - 默认URL的格式会产生很多斜杠，百度蜘蛛在抓取网页时会根据网页权重抓取网页，比如最先抓取的首页（一般都是自己的域名，比较简短），因此在链接里不宜出现过多的斜杠，最好不要超过两个
  - 还有一个问题：如果文章的标题使用了中文，经过转码后，URL会变得特别长，在最后我会贴上对比图。
- 使用`hexo-abbrlink`插件便可解决以上出现的问题，以往修改标题会导致原始链接失效，使用这个插件后只要不更改文章中的abbrlink值，文章的链接就会是持久的

1. 安装插件

~~~bash
npm install hexo-abbrlink --save
~~~

具体插件链接：[hexo-abbrlink](https://github.com/Rozbo/hexo-abbrlink)

2. 配置

修改`_config.yml`配置文件

~~~yaml
## permalink: :year/:month/:day/:title/
permalink: posts/:abbrlink.html  ## 或 :/abbrlink/ （此处可自定义'posts'处，如：posts:year/:abbrlink.html 或 :abbrlink.html）
~~~

注意：如果使用":/abbrlink/“，abbrlink后须带”/"，否则点击链接不会跳转到文章页、而是会触发浏览器下载页面代码操作或跳转到空白链接页面

在`_config.yml`配置文件下增加以下配置
如果你是`butterfly`主题，应该都有自己创建了一个主题配置的yml（我的是`_config.butterfly.yml`），以下的配置放在自定义的主题配置的yml文件中也是可以的

~~~yaml
## abbrlink config
abbrlink:
  alg: crc32      #support crc16(default) and crc32 进制
  rep: hex        #support dec(default) and hex  算法
  drafts: false   #(true)Process draft,(false)Do not process draft. false(default) 
  ## Generate categories from directory-tree
  ## depth: the max_depth of directory-tree you want to generate, should > 0
  auto_category:
     enable: true  #true(default)
     depth:        #3(default)
     over_write: false 
  auto_title: false #enable auto title, it can auto fill the title by path
  auto_date: false #enable auto date, it can auto fill the date by time today
  force: false #enable force mode,in this mode, the plugin will ignore the cache, and calc the abbrlink for every post even it already had abbrlink.

~~~

- `alg`: 算法(目前支持`crc16`和`crc32`算法，默认值是`crc16`)
- `rep`: 形式(生成的链接可以是十六进制格式也可以是十进制格式，默认值是十进制格式)

3. 示例

~~~html
crc16 & hex
https://test.com/posts/55c6.html
crc16 & dec
https://test.com/posts/43212.html

crc32 & hex
https://test.com/posts/6ec16a2c.html
crc32 & dec
https://test.com/posts/1521457752.html
~~~

更多配置可查看具体插件链接：[hexo-abbrlink](https://github.com/Rozbo/hexo-abbrlink)

4. 效果展示

![image.png](https://img.siyouyun.eu.org/file/1730162347406_image.png)