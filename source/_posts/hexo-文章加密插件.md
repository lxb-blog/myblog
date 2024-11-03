---
title: 文章加密插件
tags:
  - hexo
  - 教程
  - hexo插件
categories:
  - 教程
  - 插件
  - 美化
cover: 'https://img.siyouyun.eu.org/file/1730263972093_p3.jpg'
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
# 文章加密插件

1. 在根目录执行以下命令

~~~bash
npm install --save hexo-blog-encrypt
~~~

2. Front matter配置方法

~~~markdown
---
title: Hello World
tags:
- 作为日记加密
date: 2016-03-30 21:12:21
password: mikemessi
abstract: 有东西被加密了, 请输入密码查看.
message: 您好, 这里需要密码.
theme: xray
wrong_pass_message: 抱歉, 这个密码看着不太对, 请再试试.
wrong_hash_message: 抱歉, 这个文章不能被校验, 不过您还是能看看解密后的内容.
---
~~~

3. 配置文件`[BlogRoot]\_config.yml`中针对tags的加密

~~~yaml
# Security
encrypt: # hexo-blog-encrypt
  abstract: 有东西被加密了, 请输入密码查看.
  message: 您好, 这里需要密码.
  tags:
  - {name: tagName, password: 密码A}
  - {name: tagName, password: 密码B}
  theme: xray
  wrong_pass_message: 抱歉, 这个密码看着不太对, 请再试试.
  wrong_hash_message: 抱歉, 这个文章不能被校验, 不过您还是能看看解密后的内容.
~~~

4. 你可以在线挑选你喜欢的主题,并应用到你的博客中:

- [default](https://mhexo.github.io/2020/12/23/Theme-Test-Default/)
- [blink](https://mhexo.github.io/2020/12/23/Theme-Test-Blink/)
- [shrink](https://mhexo.github.io/2020/12/23/Theme-Test-Shrink/)
- [flip](https://mhexo.github.io/2020/12/23/Theme-Test-Flip/)
- [up](https://mhexo.github.io/2020/12/23/Theme-Test-Up/)
- [surge](https://mhexo.github.io/2020/12/23/Theme-Test-Surge/)
- [wave](https://mhexo.github.io/2020/12/23/Theme-Test-Wave/)
- [xray](https://mhexo.github.io/2020/12/23/Theme-Test-Xray/)

5. 重启项目进入对应的文章页面即可看到加密效果

~~~bash
hexo cl; hexo s
~~~

