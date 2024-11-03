---
title: 页面模板
tags:
  - hexo
  - 教程
categories:
  - 教程
cover: 'https://img.siyouyun.eu.org/file/1730607529363_蒙眼少女 (2).jpg'
swiper_index: 10
abstract: '有东西被加密了, 请输入密码查看.'
message: '您好, 这里需要密码.'
theme: xray
wrong_pass_message: '抱歉, 这个密码看着不太对, 请再试试.'
wrong_hash_message: '抱歉, 这个文章不能被校验, 不过您还是能看看解密后的内容.'
abbrlink: 43222ac4
date: 2024-11-03 11:18:41
top:
password:
---

# 页面模板

## 隐私政策

~~~markdown
## 更新日期

本协议的最近更新日期为：2023-05-01

本站非常重视用户的隐私和个人信息保护。你在使用网站时，可能会收集和使用你的相关信息。通过《隐私政策》向你说明在你访问 `blog.qjqq.cn`
网站时，如何收集、使用、保存、共享和转让这些信息。

## 最新更新时间

协议最新更新时间为：2023-05-01

## 一、在访问时如何收集和使用你的个人信息

### 在访问时，收集访问信息的服务会收集不限于以下信息：

**网络身份标识信息**（浏览器 UA、IP 地址）

**设备信息**

**浏览过程**操作方式、浏览方式与时长、性能与网络加载情况）。

### 在访问时，本站内置的第三方服务会通过以下或更多途径，来获取你的以下或更多信息：

- **百度统计工具** 会收集你的访问信息、访问操作过程
- **51la 统计工具** 会收集你的访问信息
- **灵雀应用监控平台** 会收集你的访问操作过程和资源加载情况
- **今日头条搜索** 会收集你的访问信息
- **字节跳动静态资源库** 会收集你的访问信息
- **Tianlicdn** 会收集你的访问信息
- **busuanzi 统计** 会收集你的访问信息
- **腾讯云** 会收集你的访问信息
- **腾讯 Codesign** 会收集你的访问信息
- **阿里 cdn（iconfont）** 会收集你的访问信息
- **QQ 音乐** 会收集你的访问信息
- **网易云 音乐** 会收集你的访问信息

### 在访问时，本人仅会处于以下目的，使用你的个人信息：

- 用于网站的优化与文章分类，用户优化文章
- 恶意访问识别，用于维护网站
- 恶意攻击排查，用于维护网站
- 网站点击情况监测，用于优化网站页面
- 网站加载情况监测，用于优化网站性能
- 用于网站搜索结果优化
- 浏览数据的展示

### 第三方信息获取方将您的数据用于以下用途：

第三方可能会用于其他目的，详情请访问对应第三方服务提供的隐私协议。

### 你应该知道在你访问的时候不限于以下信息会被第三方获取并使用：

第三方部分为了抵抗攻击、使用不同节点 cdn 加速等需求会收集不限于以下信息

<!-- 在表格中添加 id 以便于通过 JavaScript 获取元素 -->
<table>
  <thead>
    <tr>
      <th>类型</th>
      <th>信息</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2"><b>网络信息</b></td>
    </tr>
    <tr>
      <td>IP地址</td>
      <td><div id="userAgentIp"></div></td>
    </tr>
    <tr>
      <td>国家</td>
      <td><div id="userAgentCountry"></div></td>
    </tr>
    <tr>
      <td>省份</td>
      <td><div id="userAgentProv"></div></td>
    </tr>
    <tr>
      <td>城市</td>
      <td><div id="userAgentCity"></div></td>
    </tr>
    <tr>
      <td>运营商</td>
      <td><div id="userAgentISP"></div></td>
    </tr>
    <tr>
      <td colspan="2"><b>设备信息</b></td>
    </tr>
    <tr>
      <td>操作系统</td>
      <td><div id="userAgentOS"></div></td>
    </tr>
    <tr>
      <td>浏览器</td>
      <td><div id="userAgentBrowser"></div></td>
    </tr>
  </tbody>
</table>

此页面如果未能获取到信息并不代表无法读取上述信息，以实际情况为准。此页面获取地址信息展示使用的是[青桔](https://api.76.al)提供的API。

<script src="privacy.js"></script>
<script src="https://cdn.jsdelivr.net/npm/ua-parser-js@0.7.14/dist/ua-parser.min.js"></script>

## 二、在评论时如何收集和使用你的个人信息

评论使用的是无登陆系统的匿名评论系统，你可以自愿填写真实的、或者虚假的信息作为你评论的展示信息。

`鼓励你使用不易被人恶意识别的昵称进行评论`，但是建议你填写`真实的邮箱`以便收到回复（邮箱信息不会被公开）。

在你评论时，会额外收集你的个人信息。

### 在评论时，本站内置的第三方服务会通过以下或更多途径，来获取你的相关信息：

- `cravatar` 会收集你的访问信息、评论填写的个人信息用于展示头像

### 在访问时，本人仅会处于以下目的，收集并使用以下信息：

- 评论时会记录你的 QQ 账号（如果在邮箱位置填写 QQ 邮箱或 QQ 号），方便获取你的 QQ 头像。如果使用 QQ 邮箱但不想展示 QQ
  头像，可以填写不含 QQ 号的 QQ 邮箱。（主动，存储）
- 评论时会记录你的邮箱，当我回复后会通过邮件通知你（主动，存储，不会公开邮箱）
- 评论时会记录你的网址，用于点击头像时快速进入你的网站（主动，存储）
- 评论时会记录你的 IP 地址，作为反垃圾的用户判别依据（被动，存储，不会公开 IP，会公开 IP 所在城市）
- 评论会记录你的浏览器代理，用作展示系统版本、浏览器版本方便展示你使用的设备，快速定位问题（被动，存储）

## 三、如何使用-Cookies-和本地-LocalStorage-存储

本站为实现无账号评论、深色模式切换，不蒜子的 uv 统计等功能，会在你的浏览器中进行本地存储，你可以随时清除浏览器中保存的所有
Cookies 以及 LocalStorage，不影响你的正常使用。

本博客中的以下业务会在你的计算机上主动存储数据：

`内置服务`

- 评论系统
- 即刻短文
- 鱼塘
- 中控台
- 胶囊音乐

`第三方服务`

- 百度统计
- busuanzi 统计

关于如何使用你的 Cookies，请访问 [Cookies 政策](https://blog.qjqq.cn/cookies/)。

关于如何[在 Chrome 中清除、启用和管理 Cookie](https://support.google.com/chrome/answer/95647?co=GENIE.Platform=Desktop&hl=zh-Hans)。

## 四、如何共享、转让你的个人信息

本人不会与任何公司、组织和个人共享你的隐私信息

本人不会将你的个人信息转让给任何公司、组织和个人

第三方服务的共享、转让情况详见对应服务的隐私协议

## 五、附属协议

当监测到存在恶意访问、恶意请求、恶意攻击、恶意评论的行为时，为了防止增大受害范围，可能会临时将你的 ip
地址及访问信息短期内添加到黑名单，短期内禁止访问。

此黑名单可能被公开，并共享给其他站点（主体并非本人）使用，包括但不限于：IP 地址、设备信息、地理位置。
~~~

js

~~~js
// 获取ip
function getIpInfo(){
    var fetchUrl = "https://api.76.al/api/ipv4/query?key=LXKgmDJbdg4GKE7vpWamMuGiZx" #https://api.76.al获取key
    fetch(fetchUrl)
      .then(res => res.json())
      .then(json =>{
        var country = json.data.country || "未能获取到信息";
        var ip = json.data.ip || "未能获取到信息";
        var province = json.data.province || "未能获取到信息";
        var city = json.data.city || "未能获取到信息";
        var isp = json.data.isp || "未能获取到信息";
  
        document.getElementById("userAgentIp").innerHTML = ip;
        document.getElementById("userAgentCountry").innerHTML = country;
        document.getElementById("userAgentProv").innerHTML = province;
        document.getElementById("userAgentCity").innerHTML = city;
        document.getElementById("userAgentISP").innerHTML = isp;
  
        // 使用ua-parser-js解析User-Agent
        var parser = new UAParser();
        var result = parser.getResult();
        document.getElementById("userAgentOS").innerHTML = result.os.name + " " + result.os.version;
        document.getElementById("userAgentBrowser").innerHTML = result.browser.name + " " + result.browser.version;
      })
  }
  
  getIpInfo()
~~~

## 版本协议

~~~markdown
## 更新日期

本协议的最近更新日期为：2023-05-01

为了保持文章质量，并保持互联网的开放共享精神，保持页面流量的稳定，综合考虑下本站的所有原创文章均采用 cc 协议中比较严格的[署名-非商业性使用-禁止演绎 4.0 国际标准](https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh)。这篇文章主要想能够更加清楚明白的介绍本站的协议标准和要求。方便你合理的使用本站的文章。

本站无广告嵌入和商业行为。违反协议的行为不仅会损害原作者的创作热情，而且会影响整个版权环境。强烈呼吁你能够在转载时遵守协议。遵守协议的行为几乎不会对你的目标产生负面影响，鼓励创作环境是每个创作者的期望。

## 哪些文章适于本协议？

所有原创内容均在文章标题顶部，以及文章结尾的版权说明部分展示。

原创内容的非商用转载必须为完整转载且标注出处的`带有完整 url 链接`或`访问原文`之类字样的超链接。

作为参考资料的情况可以无需完整转载，摘录所需要的部分内容即可，但需标注出处。

## 你可以做什么？

只要你遵守本页的许可，你可以自由地共享文章的内容 — 在任何媒介以任何形式复制、发行本作品。并且无需通知作者。

## 你需要遵守什么样的许可？

### 署名

你必须标注内容的来源，你需要在文章开头部分（或者明显位置）标注原文章链接（建议使用超链接提升阅读体验）。

### 禁止商用

本站内容免费向互联网所有用户提供，分享本站文章时禁止商业性使用、禁止在转载页面中插入广告（例如谷歌广告、百度广告）、禁止阅读的拦截行为（例如关注公众号、下载 App 后观看文章）。

### 禁止演绎

- 分享全部内容（无修改）
  你需要在文章开头部分（或者明显位置）标注原文章链接（建议使用超链接）
- 分享部分截取内容或者衍生创作
  目前本站全部原创文章的衍生品禁止公开分享和分发。如有更好的修改建议，可以在对应文章下留言。如有衍生创作需求，可以在评论中联系。
- 作为参考资料截取部分内容
  作为参考资料的情况可以无需完整转载，摘录所需要的部分内容即可，但需标注出处。

## 什么内容会被版权保护

包括但不限于：

- 文章封面图片
- 文章标题和正文
- 站点图片素材（不含主题自带素材）

## 例外情况

本着友好互相进步的原则，被本站友链收录的博客允许博客文章内容的衍生品的分享和分发，但仍需标注出处。

本着互联网开放精神，你可以在博客文章下方留言要求授权博文的衍生品的分享和分发，标注你的网站地址。

## 网站源代码协议

网站源代码（仅包含 css、js）的代码部分采用 GPL 协议。
~~~

## cookie协议

~~~markdown
## 更新日期

本协议的最近更新日期为：2023-05-01

为了确保网站和我开发的软件的可靠性、安全性和个性化，我使用 Cookies。当你接受 Cookies 时，这有助于通过识别你的身份、记住你的偏好或提供个性化用户体验来帮助我改善网站。

本政策应与我的[隐私政策](https://blog.lemonso.com/privacy/)一起阅读，该隐私政策解释了我如何使用个人信息。

如果你对我使用你的个人信息或 Cookies 的方式有任何疑问，请通过 `lemon#lemonso.com` 与我联系。

如果你想管理你的 Cookies，请按照下面“如何管理 Cookies”部分中的说明进行操作。

## 什么是 Cookies？

Cookies 是一种小型文本文件，当你访问网站时，网站可能会将这些文件放在你的计算机或设备上。Cookies 会帮助网站或其他网站在你下次访问时识别你的设备。网站信标、像素或其他类似文件也可以做同样的事情。我在此政策中使用术语“Cookies”来指代以这种方式收集信息的所有文件。

Cookies 提供许多功能。例如，他们可以帮助我记住你喜欢深色模式还是浅色模式，分析我网站的效果。

大多数网站使用 Cookies 来收集和保留有关其访问者的个人信息。大多数 Cookies 收集一般信息，例如访问者如何到达和使用我的网站，他们使用的设备，他们的互联网协议地址（IP 地址），他们正在查看的页面及其大致位置（例如，我将能够认识到你正在从长沙访问我的网站）。

## Cookies 的目的

我将 Cookies 分为以下类别:

| 用途                 | 说明                                                         |
| -------------------- | ------------------------------------------------------------ |
| 授权                 | 你访问我的网站时，我可通过 Cookie 提供正确信息，为你打造个性化的体验。例如：Cookie 会告知你通过搜索引擎搜索的具体内容来改善文章的标题优化关键词、或者创建更符合你搜索需求的文章内容。 |
| 安全措施             | 我通过 Cookie 启用及支持安全功能，监控和防止可疑活动、欺诈性流量和违反版权协议的行为。 |
| 偏好、功能和服务     | 我使用功能性 Cookies 来让我记住你的偏好，或保存你向我提供的有关你的喜好或其他信息。 |
| 个性化广告           | 本站涉及 GoogleADS 个性化广告服务                            |
| 网站性能、分析和研究 | 我使用这些 cookie 来监控网站性能。这使我能够通过快速识别和解决出现的任何问题来提供高质量的体验。 |

## 我的网站上的第三方 Cookies

我还在我的网站上使用属于上述类别的第三方 Cookies，用于以下目的：

- 帮助我监控网站上的流量；
- 识别欺诈或非人为性流量；
- 协助市场调研；
- 改善网站功能；
- 监督我的版权协议和隐私政策的遵守情况。

| 第三方服务商 | 用途                                                         |
| ------------ | ------------------------------------------------------------ |
| baidu.com    | 用于统计站内访问情况，进行针对性优化                         |
| ibruce.info  | busuznzi 统计，用于区分访问 pv 数量和 uv 数量，在文章处展示人气 |

## 如何管理 Cookies？

在将 Cookie 放置在你的计算机或设备上之前，系统会显示一个弹出窗口，要求你同意设置这些 Cookie。通过同意放置 Cookies，你可以让我为你提供最佳的体验和服务。如果你愿意，你可以通过浏览器设置关闭本站的 Cookie 来拒绝同意放置 Cookies；但是，我网站的部分功能可能无法完全或按预期运行。你有机会允许和/或拒绝使用 Cookie。你可以通过访问浏览器设置随时返回到你的 Cookie 偏好设置以查看和/或删除它们。

除了我提供的控件之外，你还可以选择在 Internet 浏览器中启用或禁用 Cookie。大多数互联网浏览器还允许你选择是要禁用所有 Cookie 还是仅禁用第三方 Cookie。默认情况下，大多数互联网浏览器都接受 Cookie，但这可以更改。有关详细信息，请参阅 Internet 浏览器中的帮助菜单或设备随附的文档。

以下链接提供了有关如何在所有主流浏览器中控制 Cookie 的说明：

[Google Chrome](https://support.google.com/chrome/answer/95647?hl=en)
[IE](https://support.microsoft.com/en-us/help/260971/description-of-cookies)
[Safari（mac 桌面版）](https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac)
[Safari（移动版）](https://support.apple.com/en-us/HT201265)
[火狐浏览器](https://support.mozilla.org/en-US/kb/Cookies-information-websites-store-on-your-computer)
[Android 浏览器](http://support.google.com/ics/nexus/bin/answer.py?hl=en&answer=2425067)

如你使用其他浏览器，请参阅浏览器制造商提供的文档。
有关 Cookies 以及如何管理 Cookies 的更多信息，请访问：

[wikipedia.org](https://zh.wikipedia.org/wiki/Cookie) 、 [allaboutCookies.org](https://www.allaboutcookies.org/) 或 [aboutCookies.org](https://www.aboutcookies.org/)

## 更多信息

有关我数据处理的更多信息，请参阅我的[隐私政策](https://blog.lemonso.com/privacy/)。如果你对此 Cookie 政策有任何疑问，请通过`lemon#lemonso.com`与我联系。

## 对此 Cookie 政策的更改

我可能对此 Cookie 政策所做的任何更改都将发布在此页面上。如果更改很重要，我会在我的主页或应用上明确指出该政策已更新。
~~~

