---
title: hexo-主题美化-侧边栏steam卡片
tags:
  - hexo
  - 教程
  - hexo美化
categories:
  - 教程
  - 美化
  - 侧边栏
cover: 'https://img.siyouyun.eu.org/file/1731301130073_p0.png'
swiper_index: 10
abstract: '有东西被加密了, 请输入密码查看.'
message: '您好, 这里需要密码.'
theme: xray
wrong_pass_message: '抱歉, 这个密码看着不太对, 请再试试.'
wrong_hash_message: '抱歉, 这个文章不能被校验, 不过您还是能看看解密后的内容.'
password: 
abbrlink: 29816
date: 2024-11-11 12:54:51
updated: 2024-11-11 12:54:51
top:
---

# 侧边栏steam卡片

## 效果展示

{% label 不想截图了，自己看本站侧边栏 %}

{% link GitHub地址,动态展示steam卡片,https://github.com/yuyinws/steam-card %}

### 教程开始

#### 第一步

点击[steam卡片生成](https://cardn.yuy1n.io/)跳转到卡片生成网站，点击``steam登录``进行授权登录,或者直接输入``Steam ID``

![image.png](https://img.siyouyun.eu.org/file/1731302041175_image.png)

``Steam ID``获取：如图

![image.png](https://img.siyouyun.eu.org/file/1731302249737_image.png)

![image-20241111131807068](C:\Users\64822\AppData\Roaming\Typora\typora-user-images\image-20241111131807068.png)

#### 第二步

输入后直接点击添加进行自定义设置

![image.png](https://img.siyouyun.eu.org/file/1731302422102_image.png)

要想向我的一样骚气呢，游戏的``appid``和我一样就行了，想自己找呢在steam商店里面自己找就行了

![image.png](https://img.siyouyun.eu.org/file/1731302533576_image.png)

#### 第三步

在source👉_data下面新建widget.yml

~~~yaml
# top: 创建的 widget 会出现在非 sticky 区域（即所有页面都会显示)
# bottom: 创建的 widget 会出现在 sticky 区域（除了文章页都会显示)
top:
  - class_name: game-card-widget
    id_name: game-card-widget
    name: 游戏卡片
    icon: fas fa-gamepad  # 你可以根据需要添加图标
    order: 1
    html: |
      <div id="game-card-widget">
        这里填入Card中得到的HTML代码块里面的链接
      </div>
~~~

自定义css，在根目录下面的source下的css文件架里面自己创建一个xxx.css文件，没有css文件夹自建一个，然后再主题配置文件中引入即可

~~~yaml
inject:
  head:
    - <link rel="stylesheet" href="/css/customize-css.css?1">
    # 自定义css
    # - <link rel="stylesheet" href="/css/custom.css" media="defer" onload="this.media='all'">
  bottom:


~~~

在自定义css文件里面加入下面css

~~~css
#game-card-widget {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;  
}

#game-card-widget img {
  max-width: 100%;  
  height: auto;   
}

~~~

hexo一键三连看效果

~~~bash
hexo cl; hexo generate; hexo s
~~~