---
title: 自定义字体
tags:
  - hexo
  - 教程
  - hexo美化
categories:
  - 教程
  - 美化
cover: 'https://img.siyouyun.eu.org/file/1730263724692_p0.png'
swiper_index: 10
abstract: '有东西被加密了, 请输入密码查看.'
message: '您好, 这里需要密码.'
theme: xray
wrong_pass_message: '抱歉, 这个密码看着不太对, 请再试试.'
wrong_hash_message: '抱歉, 这个文章不能被校验, 不过您还是能看看解密后的内容.'
abbrlink: b5601a7e
date: 2024-10-29 10:18:41
top:
password:
---
# 自定义字体

1. 准备好字体文件后，在`[BlogRoot]\source\css\custom.css`（没有就自己创建）中添加以下代码：

~~~css
@font-face {
  /* 为载入的字体取名字(随意) */
  font-family: 'YSHST';	
  /* 字体文件地址(相对或者绝对路径都可以) */
  src: url(/font/优设好身体.woff2);
  /* 定义加粗样式(加粗多少) */
  font-weight: normal;
  /* 定义字体样式(斜体/非斜体) */
  font-style: normal;
  /* 定义显示样式 */
  font-display: block;
}
~~~

2. 各个属性的定义：
   1. font-family属性值中使用webfont来声明使用的是服务器端字体，即设置文本的字体名称。
   2. src属性值中首先指定了字体文件所在的路径。
   3. format声明字体文件的格式，可以省略文件格式的声明，单独使用src属性值。
   4. font-style：设置文本样式。取值：normal:不使用斜体；italic:使用斜体；oblique:使用倾斜体；inherit：从父元素继承。
   5. 支持格式：*.eot(老版本IE)，*.otf，*.ttf，*.woff，*.woff2(推荐)

3. 在主题配置文件`_config.butterfly.yml`中的`font`配置项以及`blog_title_font`配置项写上你刚刚引入的字体名称，系统会根据先后次序从前到后依次加载这些字体：

~~~yaml
# Global font settings
# Don't modify the following settings unless you know how they work (非必要不要修改)
font:
  global-font-size: '15px'
  code-font-size: '14px'
  font-family: YSHST, -apple-system, 'Quicksand', 'Nimbus Roman No9 L', 'PingFang SC', 'Hiragino Sans GB', 'Noto Serif SC', 'Microsoft Yahei', 'WenQuanYi Micro Hei', 'ST Heiti', sans-serif;
  code-font-family: Consolas, YSHST, "Microsoft YaHei", Menlo, "PingFang SC", "Microsoft JhengHei", sans-serif

# 左上角網站名字 主頁居中網站名字
blog_title_font:
  font_link: 
  font-family: YSHST, -apple-system, BlinkMacSystemFont, "Segoe UI" , "Helvetica Neue" , Lato, Roboto, "PingFang SC" , "Microsoft JhengHei" , "Microsoft YaHei" , sans-serif
~~~

4. 重启项目即可看到

~~~bash
hexo cl; hexo s
~~~

## wowjs动画

1. 安装插件,在博客根目录`[BlogRoot]`下打开终端，运行以下指令：

~~~bash
npm install hexo-butterfly-wowjs --save
~~~

2. 添加配置信息，以下为写法示例
   在站点配置文件`_config.yml`或者主题配置文件`_config.butterfly.yml`中添加

~~~yaml
wowjs:
  enable: true #控制动画开关。true是打开，false是关闭
  priority: 10 #过滤器优先级
  mobile: false #移动端是否启用，默认移动端禁用
  animateitem:
    - class: recent-post-item #必填项，需要添加动画的元素的class
      style: animate__zoomIn #必填项，需要添加的动画
      duration: 2s #选填项，动画持续时间，单位可以是ms也可以是s。例如3s，700ms。
      delay: 1s #选填项，动画开始的延迟时间，单位可以是ms也可以是s。例如3s，700ms。
      offset: 100 #选填项，开始动画的距离（相对浏览器底部）
      iteration: 2 #选填项，动画重复的次数
    - class: card-widget
      style: animate__zoomIn
  animate_css: https://npm.elemecdn.com/hexo-butterfly-wowjs/lib/animate.min.css
  wow_js: https://npm.elemecdn.com/hexo-butterfly-wowjs/lib/wow.min.js
  wow_init_js: https://npm.elemecdn.com/hexo-butterfly-wowjs/lib/wow_init.js
~~~

3. 参数释义

| 参数                  | 备选值/类型        | 释义                                                         |
| :-------------------- | :----------------- | :----------------------------------------------------------- |
| enable                | true/false         | 【必选】控制开关                                             |
| priority              | number             | 【可选】过滤器优先级，数值越小，执行越早，默认为10，选填     |
| mobile                | true/false         | 控制移动端是否启用，默认移动端禁用                           |
| animateitem.class     | class              | 【可选】添加动画类名，只支持给class添加                      |
| animateitem.style     | text               | 【可选】动画样式，具体类型参考[animate.css](https://animate.style/) |
| animateitem.duration  | time,单位为s或ms   | 【可选】动画持续时间，单位可以是ms也可以是s。例如3s，700ms。 |
| animateitem.delay     | time,单位为s或ms   | 【可选】动画开始的延迟时间，单位可以是ms也可以是s。例如3s，700ms。 |
| animateitem.offset    | number,单位为px    | 【可选】开始动画的距离（相对浏览器底部）。                   |
| animateitem.iteration | number,单位为s或ms | 【可选】动画重复的次数                                       |
| animate_css           | URL                | 【可选】animate.css的CDN链接,默认为`https://npm.elemecdn.com/hexo-butterfly-wowjs/lib/animate.min.css` |
| wow_js                | URL                | 【可选】wow.min.js的CDN链接,默认为`https://npm.elemecdn.com/hexo-butterfly-wowjs/lib/wow.min.js` |
| wow_init_js           | URL                | 【可选】wow_init.js的CDN链接,默认为`https://npm.elemecdn.com/hexo-butterfly-wowjs/lib/wow_init.js` |

wowjs详细用法见原帖。

## 黑夜霓虹灯2.0（纯CSS实现）

1. 在自定义的`custom.css`中添加如下代码，实现的原理就是关键帧线性插值，然后一直循环，这里默认是左上角标题、中间标题和副标题，还有文章页头的标题和信息有循环霓虹灯，菜单的文字实现起来要改一下源码，个人觉得没必要了，这样就够了，多了反而花里胡哨：

~~~css
/* 日间模式不生效 */
[data-theme="light"] #site-name,
[data-theme="light"] #site-title,
[data-theme="light"] #site-subtitle,
[data-theme="light"] #post-info {
  animation: none;
}
/* 夜间模式生效 */
[data-theme="dark"] #site-name,
[data-theme="dark"] #site-title {
  animation: light_15px 10s linear infinite;
}
[data-theme="dark"] #site-subtitle {
  animation: light_10px 10s linear infinite;
}
[data-theme="dark"] #post-info {
  animation: light_5px 10s linear infinite;
}
/* 关键帧描述 */
@keyframes light_15px {
  0% {
    text-shadow: #5636ed 0 0 15px;
  }
  12.5% {
    text-shadow: #11ee5e 0 0 15px;
  }
  25% {
    text-shadow: #f14747 0 0 15px;
  }
  37.5% {
    text-shadow: #f1a247 0 0 15px;
  }
  50% {
    text-shadow: #f1ee47 0 0 15px;
  }
  50% {
    text-shadow: #b347f1 0 0 15px;
  }
  62.5% {
    text-shadow: #002afa 0 0 15px;
  }
  75% {
    text-shadow: #ed709b 0 0 15px;
  }
  87.5% {
    text-shadow: #39c5bb 0 0 15px;
  }
  100% {
    text-shadow: #5636ed 0 0 15px;
  }
}

@keyframes light_10px {
  0% {
    text-shadow: #5636ed 0 0 10px;
  }
  12.5% {
    text-shadow: #11ee5e 0 0 10px;
  }
  25% {
    text-shadow: #f14747 0 0 10px;
  }
  37.5% {
    text-shadow: #f1a247 0 0 10px;
  }
  50% {
    text-shadow: #f1ee47 0 0 10px;
  }
  50% {
    text-shadow: #b347f1 0 0 10px;
  }
  62.5% {
    text-shadow: #002afa 0 0 10px;
  }
  75% {
    text-shadow: #ed709b 0 0 10px;
  }
  87.5% {
    text-shadow: #39c5bb 0 0 10px;
  }
  100% {
    text-shadow: #5636ed 0 0 10px;
  }
}

@keyframes light_5px {
  0% {
    text-shadow: #5636ed 0 0 5px;
  }
  12.5% {
    text-shadow: #11ee5e 0 0 5px;
  }
  25% {
    text-shadow: #f14747 0 0 5px;
  }
  37.5% {
    text-shadow: #f1a247 0 0 15px;
  }
  50% {
    text-shadow: #f1ee47 0 0 5px;
  }
  50% {
    text-shadow: #b347f1 0 0 5px;
  }
  62.5% {
    text-shadow: #002afa 0 0 5px;
  }
  75% {
    text-shadow: #ed709b 0 0 5px;
  }
  87.5% {
    text-shadow: #39c5bb 0 0 5px;
  }
  100% {
    text-shadow: #5636ed 0 0 5px;
  }
}
~~~

2. 刷新页面即可看到效果，默认是夜间模式才开启的，因为白天模式开启霓虹灯会显得很奇怪