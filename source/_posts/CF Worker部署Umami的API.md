---
title: CF Worker部署Umami的API
tags:
  - hexo
  - 教程
  - 统计
categories:
  - 教程
cover: 'https://img.siyouyun.eu.org/file/1729829138382_IMG_0105.png'
swiper_index: 10
abstract: '有东西被加密了, 请输入密码查看.'
message: '您好, 这里需要密码.'
theme: xray
wrong_pass_message: '抱歉, 这个密码看着不太对, 请再试试.'
wrong_hash_message: '抱歉, 这个文章不能被校验, 不过您还是能看看解密后的内容.'
abbrlink: d0612c0e
date: 2024-11-1 09:16:41
top:
password:
---

# CF Worker部署Umami的API

{% link 原文链接,梦爱吃鱼,https://blog.bsgun.cn/posts/d0612c0e/ %}

## 第一步使用 Vercel 自建 Umami 服务

### 前期准备

GitHub 账号，Vercel 账号，Umami 账号。

### 操作步骤

登录 [Vercel](https://vercel.com/) ，点击 `Storage` 创建 Postgres 数据库。

![202406281955778.png](https://img.siyouyun.eu.org/file/1730177579174_202406281955778.png)

![202406281955938.png](https://img.siyouyun.eu.org/file/1730177581149_202406281955938.png)

创建成功后查看数据库的 `.env.local`，点击 `Show secret` 复制 `POSTGRES_PRISMA_URL` 的值（引号里面的部分）。

![202406281958572.png](https://img.siyouyun.eu.org/file/1730177604787_202406281958572.png)

根据 Umami [官方文档](https://umami.is/docs/guides/running-on-vercel) ，可以直接一键 [Deploy](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FUmami-software%2FUmami&env=DATABASE_URL) 到 Vercel。点击后页面如下。

![202406282008572.png](https://img.siyouyun.eu.org/file/1730177625860_202406282008572.png)

在红色框内填入对应内容，然后分别点击 `Create` 和 `Deploy`，等待部署完成。

部署结束后进入项目的 Deployment 页面点击 `Visit` 访问 Umami。

![202406282026132.png](https://img.siyouyun.eu.org/file/1730177645965_202406282026132.png)

首次进入需输入账号密码，初始账号为 `admin`，密码为 `umami`，可自行在设置中更改。记住网址和账号密码，后续可通过该地址访问查看网站统计数据。

在页面中点击 `Add Website` 添加自己的网站，格式为 `mydomin.com`。完成后复制 `Tracking Code` 加到自己网站的 `<head>` 里，静态博客的话通常是 `layouts/partials/header.html` 文件，具体可查看自己的博客结构。这部分没截图，可以参考 [官方文档](https://umami.is/docs/collect-data) 。

完成！

## 第二步CF Worker部署Umami的API

进入[Hoppscotch](https://blog.bsgun.cn/go.html?url=aHR0cHM6Ly9ob3Bwc2NvdGNoLmlvLw==) 获取token

![image.png](https://img.siyouyun.eu.org/file/1730175122026_image.png)

成功后会返回token信息

![image.png](https://img.siyouyun.eu.org/file/1730177717861_image.png)

也许是我的操作方法有问题获取不到token，直接开启抓包工具抓取token

![image.png](https://img.siyouyun.eu.org/file/1730178675082_image.png)

1. 直接去[cloudflare](https://blog.bsgun.cn/go.html?url=aHR0cHM6Ly93d3cuY2xvdWRmbGFyZS5jb20v)创建一个`Workers`，修改名称点击部署

   ![image.png](https://img.siyouyun.eu.org/file/1730178868563_image.png)

2. 部署完后在右上角点击编辑代码修改`worker.js`的内容

![image.png](https://img.siyouyun.eu.org/file/1730178905431_image.png)

![image.png](https://img.siyouyun.eu.org/file/1730178968410_image.png)

![image.png](https://img.siyouyun.eu.org/file/1730179293741_image.png)

![image.png](https://img.siyouyun.eu.org/file/1730179012085_image.png)3. 粘贴下面的内容，并修改 `API_BASE_URL`、`TOKEN` 和`WEBSITE_ID`为你的内容

~~~js
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event));
});

const API_BASE_URL = 'https://umami.yourdomain.com';
const TOKEN = 'your_token';
const WEBSITE_ID = 'your_website_id';
const CACHE_KEY = 'umami_cache';
const CACHE_TIME = 600; // Cache time in seconds

async function fetchUmamiData(startAt, endAt) {
  const url = `${API_BASE_URL}/api/websites/${WEBSITE_ID}/stats?startAt=${startAt}&endAt=${endAt}`;
  const response = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${TOKEN}`,
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    console.error(`Error fetching data: ${response.statusText}`);
    return null;
  }

  return response.json();
}

async function handleRequest(event) {
  const cache = await caches.open(CACHE_KEY);
  const cachedResponse = await cache.match(event.request);

  if (cachedResponse) {
    return cachedResponse;
  }

  const now = Date.now();
  const todayStart = new Date(now).setHours(0, 0, 0, 0);
  const yesterdayStart = new Date(now - 86400000).setHours(0, 0, 0, 0);
  const lastMonthStart = new Date(now).setMonth(new Date(now).getMonth() - 1);
  const lastYearStart = new Date(now).setFullYear(new Date(now).getFullYear() - 1);

  const [todayData, yesterdayData, lastMonthData, lastYearData] = await Promise.all([
    fetchUmamiData(todayStart, now),
    fetchUmamiData(yesterdayStart, todayStart),
    fetchUmamiData(lastMonthStart, now),
    fetchUmamiData(lastYearStart, now)
  ]);

  const responseData = {
    today_uv: todayData?.visitors?.value ?? null,
    today_pv: todayData?.pageviews?.value ?? null,
    yesterday_uv: yesterdayData?.visitors?.value ?? null,
    yesterday_pv: yesterdayData?.pageviews?.value ?? null,
    last_month_pv: lastMonthData?.pageviews?.value ?? null,
    last_year_pv: lastYearData?.pageviews?.value ?? null
  };

  const jsonResponse = new Response(JSON.stringify(responseData), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    }
  });

  event.waitUntil(cache.put(event.request, jsonResponse.clone()));

  return jsonResponse;
}
~~~

可以根据图片绑定自己的域名，也可以直接使用默认的

![image.png](https://img.siyouyun.eu.org/file/1730180436862_image.png)

访问后你会得到返回的JSON数据

![image.png](https://img.siyouyun.eu.org/file/1730180530992_image.png)

## 第三步配置Umami到about页

**如果你都搞定了，那么修改关于页面的正文开始了**

在 **themes/anzhiyu/layout/includes/head.pug** 添加

~~~plaintext
//- Umami
if theme.Umami
  if theme.Umami.umami_url
    script(async defer src=`${theme.Umami.umami_url_js}` data-website-id=`${theme.Umami.umami_id}` data-host-url=`${theme.Umami.umami_url}`)
  else
    script(async defer src=`${theme.Umami.umami_url_js}` data-website-id=`${theme.Umami.umami_id}`)
~~~

然后修改 **themes/anzhiyu/source/css/_page/about.styl**

~~~stylus
大致在1255行
- if (hexo-config('LA.enable')) {
+ if (hexo-config('LA.enable') || hexo-config('Umami.enable')) {
~~~

接着修改 **themes/anzhiyu/layout/includes/page/about.pug**

~~~plaintext
//-  应该是91行
       .author-content
-        if theme.LA.enable
+        if theme.LA.enable || theme.Umami.enable
           - let cover = item.statistic.cover
           .about-statistic.author-content-item(style=`background: url(${cover}) top / cover no-repeat;`)
             .card-content
               .author-content-item-tips 数据
               span.author-content-item-title 访问统计
               #statistic
-              .post-tips
-                | 统计信息来自
-                a(href='https://invite.51.la/1NzKqTeb?target=V6', target='_blank', rel='noopener nofollow') 51la网站统计
+              if theme.LA.enable
+                .post-tips
+                  | 统计信息来自
+                  a(href='https://www.51.la/', target='_blank', rel='noopener nofollow') 51LA统计
+              else if theme.Umami.enable
+                .post-tips
+                  | 统计信息来自
+                  a(href='https://um.ruom.top', target='_blank', rel='noopener nofollow') Umami统计
               .banner-button-group
                 - let link = item.statistic.link
                 - let text = item.statistic.text
~~~

继续修改 直接搜 `- const ck = theme.LA.ck` 把下面的全部替换

~~~plaintext
// 复制即是正常缩进(两个字符) 需要删除本行
    //- Umami 统计 和 51LA 统计
    if theme.Umami && theme.Umami.enable
      script(defer).
        (function() {
          const umamiApiUrl = "#{url_for(theme.Umami.umami_api)}";
          fetch(umamiApiUrl)
            .then(res => res.json())
            .then(data => {
              let title = {
                "today_uv": "今日人数",
                "today_pv": "今日访问",
                "yesterday_uv": "昨日人数",
                "yesterday_pv": "昨日访问",
                "last_month_pv": "本月访问",
                "last_year_pv": "本年访问"
              };
              let s = document.getElementById("statistic");
              for (let key in data) {
                if (data.hasOwnProperty(key) && title[key]) {
                  s.innerHTML += `<div><span>${title[key]}</span><span id="${key}">${data[key]}</span></div>`;
                }
              }
              initCountUp(data, title);
            })
            .catch(error => console.error('Error:', error));
        })();
    else
      script(defer).
        function initAboutPage() {
          fetch("https://v6-widget.51.la/v6/#{ck}/quote.js")
            .then(res => res.text())
            .then(data => {
              let title = ["最近活跃", "今日人数", "今日访问", "昨日人数", "昨日访问", "本月访问", "总访问量"];
              let num = data.match(/(<\/span><span>).*?(\/span><\/p>)/g);

              num = num.map(el => {
                let val = el.replace(/(<\/span><span>)/g, "");
                let str = val.replace(/(<\/span><\/p>)/g, "");
                return str;
              });

              let statisticEl = document.getElementById("statistic");

              // 自定义不显示哪个或者显示哪个，如下为不显示 最近活跃访客 和 总访问量
              let statistic = [];
              for (let i = 0; i < num.length; i++) {
                if (!statisticEl) return;
                if (i == 0) continue;
                statisticEl.innerHTML +=
                  "<div><span>" + title[i] + "</span><span id=" + title[i] + ">" + num[i] + "</span></div>";
                queueMicrotask(() => {
                  statistic.push(
                    new CountUp(title[i], 0, num[i], 0, 2, {
                      useEasing: true,
                      useGrouping: true,
                      separator: ",",
                      decimal: ".",
                      prefix: "",
                      suffix: "",
                    })
                  );
                });
              }

              let statisticElement = document.querySelector(".about-statistic.author-content-item");
              function statisticUP() {
                if (!statisticElement) return;

                const callback = (entries, observer) => {
                  entries.forEach(entry => {
                    if (entry.isIntersecting) {
                      for (let i = 0; i < num.length; i++) {
                        if (i == 0) continue;
                        queueMicrotask(() => {
                          statistic[i - 1].start();
                        });
                      }
                      observer.disconnect(); // 停止观察元素，因为不再需要触发此回调
                    }
                  });
                };

                const options = {
                  root: null,
                  rootMargin: "0px",
                  threshold: 0
                };
                const observer = new IntersectionObserver(callback, options);
                observer.observe(statisticElement);
              }

              statisticUP();
              initCountUp({}, {});
            });

          initAnimation();
        }
        if (typeof gsap === "object") {
          initAboutPage()
        } else {
          getScript("!{url_for(theme.asset.gsap_js)}").then(initAboutPage);
        }

    //- 初始化 countup.js
    script(defer).
      function initCountUp(data, title) {
        const elements = [];

        for (let key in data) {
          if (data.hasOwnProperty(key) && title[key]) {
            const element = document.getElementById(key);
            if (element) {
              elements.push({ id: key, value: data[key], element: element });
            }
          }
        }

        const selfInfoContentYearElement = document.getElementById("selfInfo-content-year");
        if (selfInfoContentYearElement) {
          elements.push({ id: "selfInfo-content-year", value: #{selfInfoContentYear}, element: selfInfoContentYearElement });
        }

        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const target = elements.find(el => el.element === entry.target);
              if (target) {
                const countUp = new CountUp(target.id, 0, target.value, 0, 2, {
                  useEasing: true,
                  useGrouping: target.id === "selfInfo-content-year" ? false : true,
                  separator: ",",
                  decimal: ".",
                  prefix: "",
                  suffix: "",
                });
                countUp.start();
                observer.unobserve(entry.target);
              }
            }
          });
        }, { threshold: 0 });

        elements.forEach(el => observer.observe(el.element));
      }

    //- 独立鼠标跟随动画
    script(defer).
      function initAnimation() {
        var pursuitInterval = null;
        pursuitInterval = setInterval(function () {
          const show = document.querySelector("span[data-show]");
          const next = show.nextElementSibling || document.querySelector(".first-tips");
          const up = document.querySelector("span[data-up]");

          if (up) {
            up.removeAttribute("data-up");
          }

          show.removeAttribute("data-show");
          show.setAttribute("data-up", "");

          next.setAttribute("data-show", "");
        }, 2000);

        document.addEventListener("pjax:send", function () {
          pursuitInterval && clearInterval(pursuitInterval);
        });

        var helloAboutEl = document.querySelector(".hello-about");
        helloAboutEl.addEventListener("mousemove", evt => {
          const mouseX = evt.offsetX;
          const mouseY = evt.offsetY;
          gsap.set(".cursor", {
            x: mouseX,
            y: mouseY,
          });

          gsap.to(".shape", {
            x: mouseX,
            y: mouseY,
            stagger: -0.1,
          });
        });
      }
      if (typeof gsap === "object") {
        initAnimation()
      } else {
        getScript("!{url_for(theme.asset.gsap_js)}").then(initAnimation);
      }
~~~

最后在主题的**config.yml**配置项内添加

~~~yaml
# Umami
Umami:
  enable: true # 开关
  umami_url_js: https://um.ruom.top/script.js # 填写 umami js地址 可以使用第三方CDN加速但需要配置下面的 umami_url
  umami_id: c19add88-59e1-4fa1-a406-09e64d2845f3 # 填写 umami 统计 ID
  umami_api: https://umam-api.jlinmr.workers.dev/ # 填写 umami API 地址
  umami_url: # https://um.ruom.top 填写 umami 服务器地址 使用 CDN 加速 Umami 静态资源后需配置此项
~~~

起飞
