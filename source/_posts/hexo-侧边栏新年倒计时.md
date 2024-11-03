---
title: 侧边栏新年倒计时
tags:
  - hexo
  - 教程
  - hexo美化
categories:
  - 教程
  - 美化
  - 侧边栏
cover: 'https://img.siyouyun.eu.org/file/1730162413414_IMG_0152.jpeg'
swiper_index: 10
abstract: '有东西被加密了, 请输入密码查看.'
message: '您好, 这里需要密码.'
theme: xray
wrong_pass_message: '抱歉, 这个密码看着不太对, 请再试试.'
wrong_hash_message: '抱歉, 这个文章不能被校验, 不过您还是能看看解密后的内容.'
abbrlink: 594d4c8e
date: 2024-10-29 09:18:41
top:
password:
---
# 侧边栏新年倒计时

1. 添加侧边栏：新建文件`[BlogRoot]\source\_data\widget.yml`，建议查看butterfly官方文档：[自定义侧边栏](https://butterfly.js.org/posts/ea33ab97/#自定義-widget)

~~~yaml
# top: 创建的 widget 会出现在非 sticky 区域（即所有页面都会显示)
# bottom: 创建的 widget 会出现在 sticky 区域（除了文章页都会显示)
top:
  - class_name:
    id_name: newYear
    name:
    icon:
    order: 1
    html: '<div id="newYear-main"><div class="mask"></div>
      <p class="title"></p>
      <div class="newYear-time"></div>
      <p class="today" style="text-align: right;"></p>
      </div>'
~~~

2. 在`custom.css`中添加如下代码：

~~~css
/* 新年侧边栏 */

#newYear {
    color: white;
    padding: 0 !important;
}

#newYear p,
#newYear h3 {
    font-weight: normal;
    color: inherit;
    margin: 0;
}

#newYear .item-headline {
    display: none;
}

#newYear-main {
    min-height: 160px;
    padding: 1rem;
    position: relative;
    border-radius: 12px;
    background-image: url(https://tuchuang.voooe.cn/images/2023/01/02/tunian.webp);
    background-size: cover;
    background-position: center;
}

#newYear-main * {
    position: relative;
    line-height: 1.3;
}

#newYear-main .newYear-time {
    font-weight: bold;
    text-align: center;
}

#newYear-main .time,
#newYear-main .happyNewYear {
    font-size: 3.5rem;
    margin: 1rem 0;
    display: block;
}

#newYear-main .day {
    font-size: 5rem;
}

#newYear-main .day .unit {
    font-size: 1rem;
}

#newYear-main .mask {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, .1);
}
~~~

3. 新建文件`[BlogRoot]\source\js\newYear.js`，并写入如下代码，注意最后的Pjax适配，如果没开Pjax直接是`newYear()`即可，如果是开启了Pjax就用我的即可：

~~~js
let newYearTimer = null;
var newYear = () => {
    clearTimeout(newYearTimer);
    if (!document.querySelector('#newYear')) return;
    // 新年时间戳 and 星期对象
    let newYear = new Date('2023-01-22 00:00:00').getTime() / 1000,
        week = { 0: '周日', 1: '周一', 2: '周二', 3: '周三', 4: '周四', 5: '周五', 6: '周六' }

    time();

    // 补零函数
    function nol(h) { return h > 9 ? h : '0' + h; };

    function time() {
        // 现在 时间对象
        let now = new Date();

        // 右下角 今天
        document.querySelector('#newYear .today').innerHTML = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate() + ' ' + week[now.getDay()]

        // 现在与新年相差秒数
        let second = newYear - Math.round(now.getTime() / 1000);

        // 小于0则表示已经过年
        if (second < 0) {
            document.querySelector('#newYear .title').innerHTML = 'Happy New Year!';
            document.querySelector('#newYear .newYear-time').innerHTML = '<span class="happyNewYear">新年快乐</p>';
        } else {
            // 大于0则还未过年
            document.querySelector('#newYear .title').innerHTML = '距离2023年春节：'

            // 大于一天则直接渲染天数
            if (second > 86400) {
                document.querySelector('#newYear .newYear-time').innerHTML = `<span class="day">${Math.ceil(second / 86400)}<span class="unit">天</span></span>`
            } else {
                // 小于一天则使用时分秒计时。
                let h = nol(parseInt(second / 3600));
                second %= 3600;
                let m = nol(parseInt(second / 60));
                second %= 60;
                let s = nol(second);
                document.querySelector('#newYear .newYear-time').innerHTML = `<span class="time">${h}:${m}:${s}</span></span>`;
                // 计时
                newYearTimer = setTimeout(time, 1000);
            }
        }
    }

    // 元宝飘落
    jQuery(document).ready(function ($) {
        $('#newYear').wpSuperSnow({
            flakes: ['https://tuchuang.voooe.cn/images/2023/01/02/yb1.webp', 'https://tuchuang.voooe.cn/images/2023/01/02/yb2.webp', 'https://tuchuang.voooe.cn/images/2023/01/02/yb3.webp'],
            totalFlakes: '100',
            zIndex: '999999',
            maxSize: '30',
            maxDuration: '20',
            useFlakeTrans: false
        });
    });
}
// Pjax适配：若没有开启Pjax这里直接是newYear()即可
// 开了Pjax的用以下两句
document.addEventListener('pjax:complete', newYear);
document.addEventListener('DOMContentLoaded', newYear);
~~~

4. 引入依赖：在主题配置文件`_config.butterfly.yml`中添加如下代码：

~~~diff
inject: 
  bottom: 
+    - <script src="https://cdn.staticfile.org/jquery/3.6.3/jquery.min.js"></script> # jQuery
+    - <script async data-pjax src="https://cdn.wpon.cn/2022-sucai/Gold-ingot.js"></script>  # 新年元宝
+    - <script async data-pjax src="/js/newYear.js"></script>  # 新年倒计时
~~~

5. 重启项目：

~~~bash
hexo cl; hexo s
~~~

