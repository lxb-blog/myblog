---
title: hexo博客配置
tags:
  - hexo
  - 教程
  - hexo配置
categories:
  - 教程
cover: 'https://img.siyouyun.eu.org/file/1730264168785_p7.jpg'
swiper_index: 10
abstract: '有东西被加密了, 请输入密码查看.'
message: '您好, 这里需要密码.'
theme: xray
wrong_pass_message: '抱歉, 这个密码看着不太对, 请再试试.'
wrong_hash_message: '抱歉, 这个文章不能被校验, 不过您还是能看看解密后的内容.'
abbrlink: 65b9c749
date: 2024-10-29 10:18:41
top:
password:
---

# hexo博客配置

## 页面配置

### 标签页配置

1. 前往你的 Hexo 博客的根目录
2. 在 Hexo 博客根目录 `[blog]`下打开终端，输入

```bash
hexo new page tags
```

3. 你会找到 `source/tags/index.md` 这个文件
4. 修改这个文件： 记得添加 `type: "tags"`

~~~yaml
---
title: 标签
date: 2021-04-06 12:01:51
type: "tags"
comments: false
top_img: false
---
~~~

| 参数     |                             解释                             |
| :------- | :----------------------------------------------------------: |
| type     |                【必须】页面类型，必须为 tags                 |
| comments |                     【可选】是否显示评论                     |
| top_img  |                    【可选】是否显示顶部图                    |
| orderby  |            【可选】排序方式 ：random/name/length             |
| order    | 【可选】排序次序： 1, asc for ascending; -1, desc for descending |

![6432634045c13.png](https://img.siyouyun.eu.org/file/1729917301375_6432634045c13.png)

![6432637cecf77.png](https://img.siyouyun.eu.org/file/1729917315949_6432637cecf77.png)

### 分类页配置

1. 前往你的 Hexo 博客的根目录

2. 在 Hexo 博客根目录 `[blog]`下打开终端，输入

```bash
hexo new page categories
```

3. 你会找到 `source/categories/index.md` 这个文件

4. 修改这个文件： 记得添加 `type: "categories"`

```yaml
---
title: 分类
date: 2022-02-23 17:56:00
aside: false
top_img: false
type: "categories"
---
```

### 404页面配置

主题内置了一个简单的 404 页面，可在设置中开启 本地预览时，访问出错的网站是不会跳到 404 页面的。

如需本地预览，请访问 `http://localhost:4000/404.html`

```yaml
# A simple 404 page
error_404:
  enable: true
  subtitle: "页面没有找到"
  background:
```

