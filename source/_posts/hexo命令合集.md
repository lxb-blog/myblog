---
title: hexo命令合集
tags:
  - 教程
categories:
  - 教程
cover: 'https://img.siyouyun.eu.org/file/1731473540908_p0.png'
swiper_index: 10
abstract: '有东西被加密了, 请输入密码查看.'
message: '您好, 这里需要密码.'
theme: xray
wrong_pass_message: '抱歉, 这个密码看着不太对, 请再试试.'
wrong_hash_message: '抱歉, 这个文章不能被校验, 不过您还是能看看解密后的内容.'
abbrlink: 5140
date: 2024-11-13 11:19:24
updated: 2024-11-13 11:19:24
top:
password:
---

## 新建文章和分类

{% tabs text,2 %}

<!-- tab 新建文章 -->

```clt
hexo new 文章
```

<!-- endtab -->
<!-- tab 新建分类 -->

```clt
hexo new page 分类
```
<!-- endtab -->

{% endtabs%}

## 一键三连
~~~clt
hexo cl; hexo generate; hexo s
~~~

## 安装插件和卸载

{% tabs text,2 %}

<!-- tab 安装插件 -->

```clt
npm install 插件名 --save
```

<!-- endtab -->
<!-- tab 卸载插件 -->

```clt
npm uninstall 插件名
```
<!-- endtab -->

{% endtabs%}


## 更新和删除追番数据

{% tabs text,2 %}

<!-- tab 更新追番数据 -->

```clt
exo bangumi -u
```

<!-- endtab -->
<!-- tab 删除追番数据 -->

```clt
hexo bangumi -d
```
<!-- endtab -->

{% endtabs%}