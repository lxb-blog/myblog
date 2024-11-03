---
title: 侧边栏添加个性定位欢迎信息
tags:
  - hexo
  - 教程
  - hexo美化
categories:
  - 教程
  - 美化
  - 侧边栏
cover: 'https://img.siyouyun.eu.org/file/1730263971714_p4.jpg'
swiper_index: 10
abstract: '有东西被加密了, 请输入密码查看.'
message: '您好, 这里需要密码.'
theme: xray
wrong_pass_message: '抱歉, 这个密码看着不太对, 请再试试.'
wrong_hash_message: '抱歉, 这个文章不能被校验, 不过您还是能看看解密后的内容.'
abbrlink: a5b8269f
date: 2024-10-29 10:18:41
top:
password:
---
# 在侧边栏添加个性定位欢迎信息

## 样式预览

![image.png](https://img.siyouyun.eu.org/file/1729924734569_image.png)


{% link 点击跳转原帖,Kouseki,https://blog.kouseki.cn/posts/da2a.html %}

{% link 在侧边栏添加个性定位欢迎信息,铭心石刻,https://blog.kouseki.cn/posts/da2a.html %}



## 操作步骤

- 打开[腾讯位置服务](https://lbs.qq.com/dev/console/application/mine)，登录你的账号
- 点击`创建应用`，填一下名称和类型，随意即可
- 点击`添加Key`，key名称随意，勾选`WebServiceAPI`，此处白名单可以自选
  例如我选的是域名白名单，注意此处本地部署localhost是有效的，需带上端口号。
  部署至公网填写域名即可，不需要端口号。例如本站：blog.kouseki.cn。

![image.png](https://img.siyouyun.eu.org/file/1729924710311_image.png)

- 记录下得到的`Key`

- 在`_config.anzhiyu.yml`主题配置文件下`inject`配置项中的`bottom`引入`jquery.min.js`

~~~yaml
inject:

  bottom:
    - <script type="text/javascript" src="https://unpkg.zhimg.com/jquery@latest/dist/jquery.min.js"></script> # jquery.min.js
~~~

- 在hexo目录下新建`source/js/welcome.js`文件，新增以下内容(若没有js文件夹直接新建即可)

~~~yaml
const _0x5aba8d = _0x4cd5;
function _0x4cd5(_0x217f06, _0x73ce01) {
    const _0x21378a = _0x2137();
    return _0x4cd5 = function(_0x4cd5b9, _0x54a2d3) {
        _0x4cd5b9 = _0x4cd5b9 - 0x1f0;
        let _0x405c46 = _0x21378a[_0x4cd5b9];
        return _0x405c46;
    }
    ,
    _0x4cd5(_0x217f06, _0x73ce01);
}
(function(_0x237c32, _0x12657d) {
    const _0x362468 = _0x4cd5
      , _0x59ee31 = _0x237c32();
    while (!![]) {
        try {
            const _0x524e0c = parseInt(_0x362468(0x236)) / 0x1 + -parseInt(_0x362468(0x24c)) / 0x2 * (parseInt(_0x362468(0x226)) / 0x3) + -parseInt(_0x362468(0x201)) / 0x4 + parseInt(_0x362468(0x1f4)) / 0x5 * (-parseInt(_0x362468(0x21e)) / 0x6) + -parseInt(_0x362468(0x1fb)) / 0x7 + -parseInt(_0x362468(0x254)) / 0x8 + parseInt(_0x362468(0x244)) / 0x9;
            if (_0x524e0c === _0x12657d)
                break;
            else
                _0x59ee31['push'](_0x59ee31['shift']());
        } catch (_0x2a362c) {
            _0x59ee31['push'](_0x59ee31['shift']());
        }
    }
}(_0x2137, 0x555ef));
const addStyles = () => {
    const _0x503e6e = _0x4cd5
      , _0x5bd15e = document[_0x503e6e(0x20d)](_0x503e6e(0x25e));
    _0x5bd15e[_0x503e6e(0x1f7)] = '\x0a\x20\x20\x20\x20.item-content\x20{\x0a\x20\x20\x20\x20\x20\x20margin:\x205px\x200\x2010px\x200;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20#welcome-info\x20{\x0a\x20\x20\x20\x20\x20\x20user-select:\x20none;\x0a\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20height:\x20212px;\x0a\x20\x20\x20\x20\x20\x20padding:\x2010px;\x0a\x20\x20\x20\x20\x20\x20border-radius:\x2012px;\x0a\x20\x20\x20\x20\x20\x20background-color:\x20var(--anzhiyu-background);\x0a\x20\x20\x20\x20\x20\x20outline:\x201px\x20solid\x20var(--anzhiyu-card-border);\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.loading-spinner\x20{\x0a\x20\x20\x20\x20\x20\x20width:\x2050px;\x0a\x20\x20\x20\x20\x20\x20height:\x2050px;\x0a\x20\x20\x20\x20\x20\x20border:\x203px\x20solid\x20rgba(0,\x200,\x200,\x200.1);\x0a\x20\x20\x20\x20\x20\x20border-radius:\x2050%;\x0a\x20\x20\x20\x20\x20\x20border-top:\x203px\x20solid\x20var(--anzhiyu-main);\x0a\x20\x20\x20\x20\x20\x20animation:\x20spin\x201s\x20linear\x20infinite;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20@keyframes\x20spin\x20{\x0a\x20\x20\x20\x20\x20\x200%\x20{\x20transform:\x20rotate(0deg);\x20}\x0a\x20\x20\x20\x20\x20\x20100%\x20{\x20transform:\x20rotate(360deg);\x20}\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.ip-address\x20{\x0a\x20\x20\x20\x20\x20\x20filter:\x20blur(5px);\x0a\x20\x20\x20\x20\x20\x20transition:\x20filter\x200.3s\x20ease;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.ip-address:hover\x20{\x0a\x20\x20\x20\x20\x20\x20filter:\x20blur(0);\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.error-message\x20{\x0a\x20\x20\x20\x20\x20\x20color:\x20#ff6565;\x0a\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.error-message\x20p,\x0a\x20\x20\x20\x20.permission-dialog\x20p\x20{\x0a\x20\x20\x20\x20\x20\x20margin:\x200;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.error-icon\x20{\x0a\x20\x20\x20\x20\x20\x20font-size:\x203rem;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20#retry-button\x20{\x0a\x20\x20\x20\x20\x20\x20margin:\x200\x205px;\x0a\x20\x20\x20\x20\x20\x20color:\x20var(--anzhiyu-main);\x0a\x20\x20\x20\x20\x20\x20transition:\x20transform\x200.3s\x20ease;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20#retry-button:hover\x20{\x0a\x20\x20\x20\x20\x20\x20transform:\x20rotate(180deg);\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.permission-dialog\x20{\x0a\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.permission-dialog\x20button\x20{\x0a\x20\x20\x20\x20\x20\x20margin:\x2010px\x205px;\x0a\x20\x20\x20\x20\x20\x20padding:\x205px\x2010px;\x0a\x20\x20\x20\x20\x20\x20border:\x20none;\x0a\x20\x20\x20\x20\x20\x20border-radius:\x205px;\x0a\x20\x20\x20\x20\x20\x20background-color:\x20var(--anzhiyu-main);\x0a\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20transition:\x20opacity\x200.3s\x20ease;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.permission-dialog\x20button:hover\x20{\x0a\x20\x20\x20\x20\x20\x20opacity:\x200.8;\x0a\x20\x20\x20\x20}\x0a\x20\x20',
    document[_0x503e6e(0x206)][_0x503e6e(0x20b)](_0x5bd15e);
}
  , insertAnnouncementComponent = () => {
    const _0x527b36 = _0x4cd5;
    if (!isHomePage())
        return;
    const _0x44e3c3 = document[_0x527b36(0x215)]('.card-widget.card-info');
    if (_0x44e3c3) {
        const _0x32512a = document[_0x527b36(0x215)](_0x527b36(0x1fe));
        _0x32512a?.[_0x527b36(0x221)]();
        const _0x45866d = document['createElement'](_0x527b36(0x235));
        _0x45866d[_0x527b36(0x20f)][_0x527b36(0x1f3)](_0x527b36(0x1fd), 'card-ip-info'),
        _0x45866d[_0x527b36(0x23b)] = '\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22item-headline\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fa-solid\x20fa-user-large\x22\x20style=\x22font-size:\x2018px;color:\x20red;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span>欢迎来访者！</span>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22item-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20👋🏻\x20Hi，我是李小白，欢迎你！<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20❓\x20如有问题欢迎评论区交流！<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20😫\x20页面异常？尝试<kbd>Ctrl</kbd>+<kbd>F5</kbd><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20📧\x20如需联系我：<a\x20href=\x22mailto:648226460@qq.com\x22><b>发送邮件🚀</b></a>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22welcome-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22loading-spinner\x22></div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20',
        _0x44e3c3[_0x527b36(0x23c)][_0x527b36(0x247)](_0x45866d, _0x44e3c3[_0x527b36(0x224)]);
    }
}
  , checkLocationPermission = () => localStorage[_0x5aba8d(0x20c)](_0x5aba8d(0x1f6)) === _0x5aba8d(0x211)
  , saveLocationPermission = _0x3a8099 => {
    const _0x187aa1 = _0x5aba8d;
    localStorage[_0x187aa1(0x21c)]('locationPermission', _0x3a8099);
}
  , showLocationPermissionDialog = () => {
    const _0x2455c2 = _0x5aba8d
      , _0x2b4960 = document[_0x2455c2(0x202)](_0x2455c2(0x22e));
    _0x2b4960[_0x2455c2(0x23b)] = _0x2455c2(0x22c),
    _0x2b4960[_0x2455c2(0x209)](_0x2455c2(0x24d), _0x5408a9 => {
        const _0x1ae6b1 = _0x2455c2;
        if (_0x5408a9[_0x1ae6b1(0x1fa)][_0x1ae6b1(0x252)] === 'BUTTON') {
            const _0x4bb323 = _0x5408a9[_0x1ae6b1(0x1fa)][_0x1ae6b1(0x24e)][_0x1ae6b1(0x1f8)]
              , _0x13cf7f = _0x4bb323 === _0x1ae6b1(0x219) ? _0x1ae6b1(0x211) : _0x1ae6b1(0x227);
            handleLocationPermission(_0x13cf7f);
        }
    }
    );
}
  , handleLocationPermission = _0x1454ce => {
    saveLocationPermission(_0x1454ce),
    _0x1454ce === 'granted' ? (showLoadingSpinner(),
    fetchIpInfo()) : showErrorMessage('您已拒绝访问位置信息');
}
  , showLoadingSpinner = () => {
    const _0x51d00b = _0x5aba8d
      , _0x255686 = document[_0x51d00b(0x202)](_0x51d00b(0x22e));
    _0x255686['innerHTML'] = _0x51d00b(0x21a);
}
  , fetchIpInfo = async () => {
    const _0x5ef504 = _0x5aba8d;
    if (!checkLocationPermission()) {
        showLocationPermissionDialog();
        return;
    }
    showLoadingSpinner();
    try {
        const _0x50ab59 = await fetch('https://api.76.al/api/ip/query?key=qx9sB0WG5yYlZYuNZubjDm3w9m');
        if (!_0x50ab59['ok'])
            throw new Error(_0x5ef504(0x20e));
        const _0x489cba = await _0x50ab59[_0x5ef504(0x238)]();
        showWelcome(_0x489cba);
    } catch (_0x12eeb1) {
        console['error']('错误:', _0x12eeb1),
        showErrorMessage();
    }
}
  , getDistance = (_0x8b1f97, _0x29294b, _0x341486, _0x36cb36) => {
    const _0x27618b = _0x5aba8d
      , _0x937e83 = _0x5b9d0c => _0x5b9d0c * Math['PI'] / 0xb4
      , [_0x12c223,_0x33a126] = [_0x29294b, _0x36cb36][_0x27618b(0x239)](_0x937e83)
      , [_0x34d1ec,_0x220170] = [_0x36cb36 - _0x29294b, _0x341486 - _0x8b1f97]['map'](_0x937e83)
      , _0x54ecdc = Math[_0x27618b(0x200)](_0x34d1ec / 0x2) ** 0x2 + Math[_0x27618b(0x225)](_0x12c223) * Math['cos'](_0x33a126) * Math[_0x27618b(0x200)](_0x220170 / 0x2) ** 0x2
      , _0x2d9a60 = 0x2 * Math[_0x27618b(0x208)](Math[_0x27618b(0x24b)](_0x54ecdc), Math[_0x27618b(0x24b)](0x1 - _0x54ecdc));
    return Math[_0x27618b(0x259)](0x18e3 * _0x2d9a60);
}
  , greetings = {
    '中国': {
        '北京市': _0x5aba8d(0x233),
        '天津市': _0x5aba8d(0x210),
        '河北省': '山势巍巍成壁垒，天下雄关铁马金戈由此向，无限江山',
        '山西省': _0x5aba8d(0x256),
        '内蒙古自治区': _0x5aba8d(0x232),
        '辽宁省': '我想吃烤鸡架！',
        '吉林省': _0x5aba8d(0x1fc),
        '黑龙江省': _0x5aba8d(0x258),
        '上海市': _0x5aba8d(0x240),
        '江苏省': {
            '南京市': _0x5aba8d(0x1ff),
            '苏州市': _0x5aba8d(0x230),
            '其他': _0x5aba8d(0x250)
        },
        '浙江省': {
            '杭州市': _0x5aba8d(0x248),
            '其他': _0x5aba8d(0x25a)
        },
        '河南省': {
            '郑州市': _0x5aba8d(0x23d),
            '信阳市': '品信阳毛尖，悟人间芳华',
            '南阳市': _0x5aba8d(0x21f),
            '驻马店市': _0x5aba8d(0x231),
            '开封市': _0x5aba8d(0x246),
            '洛阳市': _0x5aba8d(0x218),
            '其他': _0x5aba8d(0x228)
        },
        '安徽省': _0x5aba8d(0x203),
        '福建省': '井邑白云间，岩城远带山',
        '江西省': _0x5aba8d(0x214),
        '山东省': _0x5aba8d(0x21b),
        '湖北省': {
            '黄冈市': _0x5aba8d(0x25d),
            '其他': _0x5aba8d(0x23f)
        },
        '湖南省': '74751，长沙斯塔克',
        '广东省': {
            '广州市': '看小蛮腰，喝早茶了嘛~',
            '深圳市': _0x5aba8d(0x24a),
            '阳江市': '阳春合水！博主家乡~\x20欢迎来玩~',
            '其他': '来两斤福建人~'
        },
        '广西壮族自治区': _0x5aba8d(0x204),
        '海南省': _0x5aba8d(0x220),
        '四川省': _0x5aba8d(0x25b),
        '贵州省': _0x5aba8d(0x22d),
        '云南省': _0x5aba8d(0x23e),
        '西藏自治区': _0x5aba8d(0x253),
        '陕西省': _0x5aba8d(0x1f2),
        '甘肃省': '羌笛何须怨杨柳，春风不度玉门关',
        '青海省': _0x5aba8d(0x251),
        '宁夏回族自治区': '大漠孤烟直，长河落日圆',
        '新疆维吾尔自治区': '驼铃古道丝绸路，胡马犹闻唐汉风',
        '台湾省': _0x5aba8d(0x1f5),
        '香港特别行政区': '永定贼有残留地鬼嚎，迎击光非岁玉',
        '澳门特别行政区': _0x5aba8d(0x205),
        '其他': _0x5aba8d(0x23a)
    },
    '美国': 'Let\x20us\x20live\x20in\x20peace!',
    '日本': _0x5aba8d(0x223),
    '俄罗斯': '干了这瓶伏特加！',
    '法国': _0x5aba8d(0x229),
    '德国': _0x5aba8d(0x217),
    '澳大利亚': _0x5aba8d(0x20a),
    '加拿大': _0x5aba8d(0x257),
    '其他': _0x5aba8d(0x243)
}
  , getGreeting = (_0x13a73f, _0x16e4df, _0x2dcc78) => {
    const _0x45bd79 = _0x5aba8d
      , _0x17a1c7 = greetings[_0x13a73f] || greetings['其他'];
    if (typeof _0x17a1c7 === _0x45bd79(0x245))
        return _0x17a1c7;
    const _0xab1fb8 = _0x17a1c7[_0x16e4df] || _0x17a1c7['其他'];
    if (typeof _0xab1fb8 === _0x45bd79(0x245))
        return _0xab1fb8;
    return _0xab1fb8[_0x2dcc78] || _0xab1fb8['其他'] || _0x17a1c7['其他'];
}
  , getTimeGreeting = () => {
    const _0x7e85d1 = _0x5aba8d
      , _0x2def10 = new Date()[_0x7e85d1(0x241)]();
    if (_0x2def10 < 0xb)
        return _0x7e85d1(0x237);
    if (_0x2def10 < 0xd)
        return _0x7e85d1(0x212);
    if (_0x2def10 < 0x11)
        return '下午好🕞\x20，饮茶先啦！';
    if (_0x2def10 < 0x13)
        return '即将下班🚶‍♂️，记得按时吃饭~';
    return _0x7e85d1(0x207);
}
  , showWelcome = ({data: _0x52d269, ip: _0x711021}) => {
    const _0x1d0abd = _0x5aba8d;
    if (!_0x52d269)
        return showErrorMessage();
    const {lng: _0x3a9429, lat: _0x44fb11, country: _0x2343c6, prov: _0x13edeb, city: _0x365ef5} = _0x52d269
      , _0x1b702c = {
        'lng': 121.23403,
        'lat': 31.39427
    }
      , _0x578f4c = _0x3a9429 && _0x44fb11 ? getDistance(_0x1b702c[_0x1d0abd(0x1f1)], _0x1b702c[_0x1d0abd(0x22b)], _0x3a9429, _0x44fb11) : 'N'
      , _0x59a919 = _0x711021['includes'](':') ? _0x1d0abd(0x25c) : _0x711021
      , _0x337643 = _0x2343c6 ? _0x2343c6 === '中国' ? _0x13edeb + '\x20' + _0x365ef5 : _0x2343c6 : _0x1d0abd(0x22a)
      , _0x10386d = getGreeting(_0x2343c6, _0x13edeb, _0x365ef5)
      , _0x33acab = getTimeGreeting()
      , _0x5a0ab1 = document[_0x1d0abd(0x202)](_0x1d0abd(0x22e));
    _0x5a0ab1['style'][_0x1d0abd(0x222)] = _0x1d0abd(0x22f),
    _0x5a0ab1[_0x1d0abd(0x25e)][_0x1d0abd(0x24f)] = 'auto',
    _0x5a0ab1[_0x1d0abd(0x23b)] = _0x1d0abd(0x25f) + _0x337643 + _0x1d0abd(0x21d) + _0x578f4c + '</b>\x20公里！<br>\x0a\x20\x20\x20\x20你的IP地址：<b\x20class=\x22ip-address\x22>' + _0x59a919 + _0x1d0abd(0x255) + _0x33acab + _0x1d0abd(0x213) + _0x10386d + _0x1d0abd(0x249);
}
  , showErrorMessage = (_0x7ef4a='抱歉，无法获取信息') => {
    const _0x34abac = _0x5aba8d
      , _0x6a4d56 = document[_0x34abac(0x202)](_0x34abac(0x22e));
    _0x6a4d56['innerHTML'] = _0x34abac(0x1f0) + _0x7ef4a + _0x34abac(0x242),
    document[_0x34abac(0x202)]('retry-button')[_0x34abac(0x209)](_0x34abac(0x24d), fetchIpInfo);
}
  , handlePjaxComplete = () => {
    insertAnnouncementComponent();
    if (isHomePage())
        fetchIpInfo();
}
  , isHomePage = () => {
    const _0x1310bf = _0x5aba8d;
    return window['location'][_0x1310bf(0x234)] === '/' || window[_0x1310bf(0x216)][_0x1310bf(0x234)] === '/index.html';
}
  , initialize = () => {
    const _0x206c37 = _0x5aba8d;
    addStyles(),
    isHomePage() && (insertAnnouncementComponent(),
    fetchIpInfo()),
    document[_0x206c37(0x209)](_0x206c37(0x1f9), handlePjaxComplete);
}
;
function _0x2137() {
    const _0x32e485 = ['豫州之域，天地之中', '玉龙飞舞云缠绕，万仞冰川直耸天', '来碗热干面~', '众所周知，中国只有两个城市', 'getHours', '</p>\x0a\x20\x20\x20\x20\x20\x20<p>请<i\x20id=\x22retry-button\x22\x20class=\x22fa-solid\x20fa-arrows-rotate\x22></i>重试或检查网络连接</p>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20', '带我去你的国家逛逛吧', '14137965kBPEEw', 'string', '刚正不阿包青天', 'insertBefore', '东风渐绿西湖柳，雁已还人未南归', '🍂</b>\x0a\x20\x20', '今天你逛商场了嘛~', 'sqrt', '37942otfuns', 'click', 'dataset', 'height', '散装是必须要散装的', '牛肉干和老酸奶都好好吃', 'tagName', '躺在茫茫草原上，仰望蓝天', '4940936iNydOP', '</b><br>\x0a\x20\x20\x20\x20', '展开坐具长三尺，已占山河五百余', '拾起一片枫叶赠予你', '很喜欢哈尔滨大剧院', 'round', '望海楼明照曙霞,护江堤白蹋晴沙', '康康川妹子', '<br>好复杂，咱看不懂~(ipv6)', '红安将军县！辈出将才！', 'style', '\x0a\x20\x20\x20\x20欢迎来自\x20<b>', '\x0a\x20\x20\x20\x20<div\x20class=\x22error-message\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22error-icon\x22>😕</div>\x0a\x20\x20\x20\x20\x20\x20<p>', 'lng', '来份臊子面加馍', 'add', '4820ACVhcY', '我在这头，大陆在那头', 'locationPermission', 'textContent', 'action', 'pjax:complete', 'target', '3848131DSodZK', '状元阁就是东北烧烤之王', 'card-widget', '.card-widget.card-ip-info', '这是我挺想去的城市啦', 'sin', '167528bKuBAU', 'getElementById', '蚌埠住了，芜湖起飞', '桂林山水甲天下', '性感荷官，在线发牌', 'head', '晚上好🌙\x20，夜生活嗨起来！', 'atan2', 'addEventListener', '一起去大堡礁吧！', 'appendChild', 'getItem', 'createElement', '网络响应不正常', 'classList', '讲段相声吧', 'granted', '中午好☀️\x20，记得午休喔~', '<br>\x0a\x20\x20\x20\x20Tip：<b>', '落霞与孤鹜齐飞，秋水共长天一色', 'querySelector', 'location', 'Die\x20Zeit\x20verging\x20im\x20Fluge.', '洛阳牡丹甲天下', 'allow', '<div\x20class=\x22loading-spinner\x22></div>', '遥望齐州九点烟，一泓海水杯中泻', 'setItem', '</b>\x20的小友💖<br>\x0a\x20\x20\x20\x20你当前距博主约\x20<b>', '1602GutGSS', '臣本布衣，躬耕于南阳此南阳非彼南阳！', '朝观日出逐白浪，夕看云起收霞光', 'remove', 'display', 'よろしく、一緒に桜を見ませんか', 'nextSibling', 'cos', '48Qikowl', 'denied', '可否带我品尝河南烩面啦？', 'C\x27est\x20La\x20Vie', '神秘地区', 'lat', '\x0a\x20\x20\x20\x20<div\x20class=\x22permission-dialog\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22error-icon\x22>❓</div>\x0a\x20\x20\x20\x20\x20\x20<p>是否允许访问您的位置信息？</p>\x0a\x20\x20\x20\x20\x20\x20<button\x20data-action=\x22allow\x22>允许</button>\x0a\x20\x20\x20\x20\x20\x20<button\x20data-action=\x22deny\x22>拒绝</button>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20', '茅台，学生，再塞200', 'welcome-info', 'block', '上有天堂，下有苏杭', '峰峰有奇石，石石挟仙气嵖岈山的花很美哦！', '天苍苍，野茫茫，风吹草低见牛羊', '北——京——欢迎你~~~', 'pathname', 'div', '548950hdYVif', '早上好🌤️\x20，一日之计在于晨', 'json', 'map', '带我去你的城市逛逛吧！', 'innerHTML', 'parentNode'];
    _0x2137 = function() {
        return _0x32e485;
    }
    ;
    return _0x2137();
}
window['onload'] = initialize;


~~~

- 在第`6`行及第`32`行分别填入自己的Key和经纬度
- 在`_config.anzhiyu.yml`主题配置文件下`inject`配置项中的`bottom`引入`welcome.js`

~~~yaml
inject:

  bottom:
    - <script defer="true" src="/js/welcome.js"></script> # 个性定位欢迎信息
~~~

- 在hexo目录下新建`source/css/welcome.css`文件，新增以下内容(若没有css文件夹直接新建即可)
  这块可以根据自己的喜好去修改~

~~~yaml
#welcome-info {
    overflow: hidden;
    border-radius: 14px;
    --kouseki-welcome-color: #49B1F5;
    --kouseki-ip-color: #49B1F5;
    --kouseki-gl-size: 16px!important;
  }
~~~

- 在`_config.anzhiyu.yml`主题配置文件下`inject`配置项中的`head`引入`welcome.css`

~~~yaml
inject:

  head:
    - <link rel="stylesheet" href="/css/welcome.css?1">
~~~

至此已经整体配置完毕，可以将相应的div容器放在需要的位置~，例如放到anzhiyu主题的公告栏位置

- 在`_config.anzhiyu.yml`主题配置文件下`aside`配置项中添加以下内容

~~~yaml
card_announcement:
  enable: true
  content: <div id="welcome-info"></div>
~~~

