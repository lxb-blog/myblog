---
title: 首页背景图渐进式加载
tags:
  - hexo
  - 教程
  - hexo美化
categories:
  - 教程
  - 美化
cover: 'https://img.siyouyun.eu.org/file/1730593104768_1 (1).jpg'
swiper_index: 10
abstract: '有东西被加密了, 请输入密码查看.'
message: '您好, 这里需要密码.'
theme: xray
wrong_pass_message: '抱歉, 这个密码看着不太对, 请再试试.'
wrong_hash_message: '抱歉, 这个文章不能被校验, 不过您还是能看看解密后的内容.'
abbrlink: 8a8b35ba
date: 2024-11-03 10:18:41
top:
password:
---
# Kouseki式首页背景图渐进式加载 · 改

[点击前往]: https://satera.cn/posts/6a8fb549/	"小旦"

1. 新建文件
   - 新建文件`source/js/imgloaded.js`新增以下内容，并按照注释调整图片路径

~~~yaml
const addStyles = () => {
    const style = document.createElement('style');
    style.textContent = `
        #welcome-info {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 192px;
        }
        .loading-spinner {
            width: 50px;
            height: 50px;
            border: 3px solid rgba(0, 0, 0, 0.1);
            border-radius: 50%;
            border-top: 3px solid #3498db;
            animation: spin 1s linear infinite;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
};

// 创建来访者卡片  在头像容器下方插入 位置更改自己找找元素
const createAnnouncementComponent = () => {
    const ipInfoElement = document.createElement('div');
    //ipInfoElement.className = "card-widget card-ip-info";
  //  ipInfoElement.innerHTML = `
   //     <div class="item-headline">
  //          <i class="fa-solid fa-restroom" style="font-size: 21px;color: red;"></i>
   //         <span>轻轻的你来了</span>
   //     </div>
   //     <div class="announcement_content">
   //         <div id="welcome-info">
   //             <div class="loading-spinner"></div>
   //         </div>
   //     </div>
  //  `;
    return ipInfoElement;
};

// 插入组件
const insertAnnouncementComponent = () => {
    if (!isHomePage()) return; // 只在首页插入

    const cardInfo = document.querySelector('.card-widget.card-info');
    if (cardInfo) {
        const existingComponent = document.querySelector('.card-widget.card-ip-info');
        if (existingComponent) {
            existingComponent.remove();
        }
        cardInfo.parentNode.insertBefore(createAnnouncementComponent(), cardInfo.nextSibling);
    }
};

// 获取 IP 信息
const fetchIpInfo = () => {
    fetch('https://api.76.al/api/ip/query?key=RkpZUXb9t9BSnJv1sQpbO1R48Q')   //修改为自己都key
        .then(response => response.ok ? response.json() : Promise.reject('网络响应不正常'))
        .then(data => {
            showWelcome(data);
        })
        .catch(error => {
            console.error('错误:', error);
            showErrorMessage();
        });
};

// 距离计算函数
const getDistance = (e1, n1, e2, n2) => {
    const R = 6371; // 地球半径
    const { sin, cos, asin, PI, hypot } = Math;

    const getPoint = (e, n) => {
        e *= PI / 180;
        n *= PI / 180;
        return { x: cos(n) * cos(e), y: cos(n) * sin(e), z: sin(n) };
    };

    const a = getPoint(e1, n1);
    const b = getPoint(e2, n2);
    const c = hypot(a.x - b.x, a.y - b.y, a.z - b.z);
    return Math.round(asin(c / 2) * 2 * R);
};

// 国家及省份的欢迎信息
const greetings = {
    "中国": {
        "北京市": "北——京——欢迎你~~~",
        "天津市": "讲段相声吧",
        "河北省": "山势巍巍成壁垒,天下雄关铁马金戈由此向,无限江山",
        "山西省": "展开坐具长三尺,已占山河五百余",
        "内蒙古自治区": "天苍苍,野茫茫,风吹草低见牛羊",
        "辽宁省": "我想吃烤鸡架!",
        "吉林省": "状元阁就是东北烧烤之王",
        "黑龙江省": "很喜欢哈尔滨大剧院",
        "上海市": "众所周知,中国只有两个城市",
        "江苏省": {
            "南京市": "这是我挺想去的城市啦",
            "苏州市": "上有天堂,下有苏杭",
            "default": "散装是必须要散装的"
        },
        "浙江省": {
            "杭州市": "东风渐绿西湖柳,雁已还人未南归",
            "default": "望海楼明照曙霞,护江堤白蹋晴沙"
        },
        "河南省": {
            "郑州市": "豫州之域,天地之中",
            "信阳市": "品信阳毛尖,悟人间芳华",
            "南阳市": "臣本布衣,躬耕于南阳此南阳非彼南阳!",
            "驻马店市": "峰峰有奇石,石石挟仙气嵖岈山的花很美哦!",
            "开封市": "刚正不阿包青天",
            "洛阳市": "洛阳牡丹甲天下",
            "default": "可否带我品尝河南烩面啦?"
        },
        "安徽省": "蚌埠住了,芜湖起飞",
        "福建省": "井邑白云间,岩城远带山",
        "江西省": "落霞与孤鹜齐飞,秋水共长天一色",
        "山东省": "遥望齐州九点烟,一泓海水杯中泻",
        "湖北省": {
            "黄冈市": "红安将军县!辈出将才!",
            "default": "来碗热干面~"
        },
        "湖南省": "74751,长沙斯塔克",
        "广东省": {
            "广州市": "看小蛮腰,喝早茶了嘛~",
            "深圳市": "今天消费了吗?~",
            "阳江市": "阳春合水~ 欢迎来玩~",
            "default": "来两斤福建人~"
        },
        "广西壮族自治区": "桂林山水甲天下",
        "海南省": "朝观日出逐白浪,夕看云起收霞光",
        "四川省": "康康川妹子",
        "贵州省": "茅台,学生,再塞200",
        "云南省": "玉龙飞舞云缠绕,万仞冰川直耸天",
        "西藏自治区": "躺在茫茫草原上,仰望蓝天",
        "陕西省": "来份臊子面加馍",
        "甘肃省": "羌笛何须怨杨柳,春风不度玉门关",
        "青海省": "牛肉干和老酸奶都好好吃",
        "宁夏回族自治区": "大漠孤烟直,长河落日圆",
        "新疆维吾尔自治区": "驼铃古道丝绸路,胡马犹闻唐汉风",
        "台湾省": "我在这头,大陆在那头",
        "香港特别行政区": "永定贼有残留地鬼嚎,迎击光非岁玉",
        "澳门特别行政区": "性感荷官,在线发牌",
        "default": "带我去你的城市逛逛吧!"
    },
    "美国": "Let us live in peace!",
    "日本": "よろしく,一緒に桜を見ませんか",
    "俄罗斯": "干了这瓶伏特加!",
    "法国": "C'est La Vie",
    "德国": "Die Zeit verging im Fluge.",
    "澳大利亚": "一起去大堡礁吧!",
    "加拿大": "拾起一片枫叶赠予你",
    "default": "带我去你的国家逛逛吧"
};

// 获取欢迎信息
const getGreeting = (country, province, city) => {
    const countryGreeting = greetings[country] || greetings.default;
    if (typeof countryGreeting === 'object') {
        return countryGreeting[province]?.[city] || countryGreeting[province] || countryGreeting.default;
    }
    return countryGreeting;
};

// 显示欢迎信息
const showWelcome = (ipLocationData) => {
    if (!ipLocationData || !ipLocationData.data) {
        return showErrorMessage();
    }

    const { lng, lat, country, prov, city, district } = ipLocationData.data;
    const dist = getDistance(121.23403,31.39427, lng, lat);     //修改为你自己的经纬度  
    const ip = ipLocationData.ip.includes(":") ? "<br>好复杂,咱看不懂~(ipv6)" : ipLocationData.ip;
    const pos = country === "中国" ? `${prov} ${city} ${district}` : country;
    const posdesc = getGreeting(country, prov, city);

    const timeChange = (() => {
        const hour = new Date().getHours();
        if (hour < 11) return "🌤️ 早上好,一日之计在于晨";
        if (hour < 13) return "☀️ 中午好,记得午休喔~";
        if (hour < 17) return "🕞 下午好,记得多喝水!";
        if (hour < 19) return "🚶‍♂️ 即将下班,记得按时吃饭~";
        return "🌙 晚上好,夜生活来咯!";
    })();

    const welcomeInfoElement = document.getElementById("welcome-info");
    welcomeInfoElement.style.display = 'block'; // 改回块级显示
    welcomeInfoElement.style.height = 'auto';    
    welcomeInfoElement.innerHTML = `
        
            欢迎来自 <b><span style="color: var(--kouseki-ip-color);font-size: var(--kouseki-gl-size)">${pos}</span></b> 的小友💖<br>${posdesc}🍂<br>当前位置距博主约 <b><span style="color: var(--kouseki-ip-color)">${dist}</span></b> 公里！<br>您的IP地址为：<b><span>${ip}</span></b><br>${timeChange} <br>`;
    
    ;
};

// 显示错误信息
const showErrorMessage = () => {
    const welcomeInfoElement = document.getElementById("welcome-info");
    welcomeInfoElement.style.display = 'block';
    welcomeInfoElement.innerHTML = `
        <p>获取IP信息失败,请检查网络.</p>
    `;
};

// 处理 PJAX 完成事件
const handlePjaxComplete = () => {
    insertAnnouncementComponent(); // 重新插入组件
    if (isHomePage()) fetchIpInfo();
};

// 判断是否是首页
const isHomePage = () => {
    return window.location.pathname === '/' || window.location.pathname === '/index.html';
};

// 初始化
const initialize = () => {
    addStyles(); // 添加CSS样式
    insertAnnouncementComponent(); // 插入组件
    if (isHomePage()) {
        fetchIpInfo(); // 获取 IP 信息并显示欢迎信息
    }
    document.addEventListener("pjax:complete", handlePjaxComplete);
};

window.onload = initialize;
~~~

新建文件`source/css/imgloaded.css`新增以下内容，并按照注释自行决定调整内容

~~~yaml
/* 首页头图加载 */
body[data-type=anzhiyu] #nav,body[data-type=anzhiyu] #scroll-down,body[data-type=anzhiyu] #site-info {
  -webkit-animation: scale 2.2s cubic-bezier(.6,.1,.25,1) .5s 1 backwards;
  animation: scale 2.2s cubic-bezier(.6,.1,.25,1) .5s 1 backwards
}

@media screen and (max-width: 768px) {
  .pl-container {
      position:relative!important
  }
}

@media screen and (min-width: 768px) {
  #page-header.full_page,.pl-container {
    height:100vh
  }

  #page-header.full_page.expand-to-full,.pl-container.expand-to-full {
    height: 50vh!important
  }
  .pl-container {
      will-change: opacity,transform,filter;
      opacity: calc(1 - var(--process) * 1)!important;
      transform: scale(calc(1 + var(--process) * .1));
      filter: blur(calc(var(--process) * 10px));
  }
}

.pl-container {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: -2;
    overflow: hidden;
    will-change: transform; /* 添加性能优化 */
    animation: blur-to-clear 2.5s cubic-bezier(.6,.25,.25,1) 0s 1 backwards,scale 2.2s cubic-bezier(.6,.1,.25,1) .5s 1 backwards;
  }

  .pl-img {
    width: 100%;
    height: 100%;
    position: absolute;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: .1;
    transition: opacity 1s;
    will-change: transform,opacity
  }
  .pl-video.pl-visible {
    display: block
}
  @keyframes blur-to-clear {
    0% {
      filter: blur(50px);
      opacity: 1;
    }
    100% {
      filter: blur(0);
      opacity: 1;
    }
  }
  
  @keyframes scale {
    0% {
      transform: scale(1.5) translateZ(0);
      opacity: 0;
    }
    to {
      transform: scale(1) translateZ(0);
      opacity: 1;
    }
  }
  .pl-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKUlEQVQImU3IMREAIAgAwJfNkQCEsH8cijjpMf6vnXlQaIiJFx+omEBfmqIEZLe2jzcAAAAASUVORK5CYII=);
 }

  .pl-visible {
    opacity: 1;
  }
  
  .pl-blur {
    /* 小图锯齿多，增加高斯模糊 */
    filter: blur(50px);
  }
~~~

2. 引入文件

   - 在`_config.anzhiyu.yml`主题配置文件下`inject`配置项中`head`和`bottom`处
   - 分别引入`imgloaded.css`和`imgloaded.js`文件

   ~~~yaml
   inject:  
     head:  
       - <link rel="stylesheet" href="/css/imgloaded.css?1">  
     
     bottom:  
       - <script async data-pjax src="/js/imgloaded.js?1"></script> # 首页图片渐进式加载
   ~~~

   3. 配置图片

   务必记得在主题配置文件中开启顶部图的功能，就像这样配置空链接。

   ~~~yaml
   # The banner image of home page  
   index_img: "background: url() top / cover no-repeat"
   ~~~

   - 在`imgloaded.js`中的73到76行（或是83到86行）修改以下示例的部分
   - 配置自己的图片，可以是图片直链也可以是本地路径

   ~~~json
   const config = {  
     smallSrc: '/img/xiaotu.jpg', // 小图链接 尽可能配置小于100k的图片  
     largeSrc: '/img/tu.jpg', // 大图链接 最终显示的图片  
     mobileSmallSrc: '/img/sjxt.jpg', // 手机端小图链接 尽可能配置小于100k的图片  
     mobileLargeSrc: '/img/sjdt.jpg', // 手机端大图链接 最终显示的图片  
     enableRoutes: ['/'],  
     };
   ~~~

   

4. 图片懒加载配置修改

在主题配置文件中找到`# Lazyload`，将`field`项改为`post`，`blur`维持`true`

~~~yaml
lazyload:
  enable: true
  field: post # site/post
  placeholder:
  blur: true
  progressive: true
~~~

5. 大功告成

到这一步若你配置的图片文件没有问题，可以执行hexo三连查看效果啦！

- 灵感来源：[Butterfly主题优化首页大图加载效果 - 假想国](http://demian.wang/2021/06/05/Butterfly主题优化首页大图加载效果/)

6. 常见问题

- 首页图下方的有个奇怪的边界的情况(还有一图流的时候，自行设计渐变)

  - 如果大图的下边界有不透明度变化，模糊小图，小图会超出不透明度范围，露出小图

  - 如果开了夜间模式，是因为由夜间模式的阅读模式叠加一层0.3的alpha，具体是

    - blog\themes\anzhiyu\source\css_mode\darkmode.styl文件里的`background-color: alpha($dark-black, 0.3)`，改为

    ~~~yaml
    background-image: linear-gradient(
      to bottom,
      rgba($dark-black, 0.1) 0%, 
      rgba($dark-black, 0) 75%,
      rgba($dark-black, 0) 100%  
    );
    ~~~

    