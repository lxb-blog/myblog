---
title: 侧边栏组件 - 日历
tags:
  - hexo
  - 教程
  - hexo美化
categories:
  - 教程
  - 美化
  - 侧边栏
cover: 'https://img.siyouyun.eu.org/file/1730263723664_p1.png'
swiper_index: 10
abstract: '有东西被加密了, 请输入密码查看.'
message: '您好, 这里需要密码.'
theme: xray
wrong_pass_message: '抱歉, 这个密码看着不太对, 请再试试.'
wrong_hash_message: '抱歉, 这个文章不能被校验, 不过您还是能看看解密后的内容.'
abbrlink: 48e0dc21
date: 2024-10-30 10:18:41
top:
password:
---

# 侧边栏组件 - 日历

### 新建 widget.yml

在`source/_data`路径下新建一个`widget.yml`文件

{% tip error %}以后所有自定义的侧边栏组件都可以写在这里面，具体写法参考 butterfly 官方文档{% endtip %}

~~~yaml
top:
  - class_name: card-times
    id_name: card-widget-calendar
    name:
    icon:
    html:
      <div id="calendar-area-left">
        <div id="calendar-week"></div>
        <div id="calendar-date"></div>
        <div id="calendar-solar"></div>
        <div id="calendar-lunar"></div>
      </div>
      <div id="calendar-area-right">
        <div id="calendar-main">
          <div class="calendar-rh">
            <div class="calendar-d0"><a>日</a></div>
            <div class="calendar-d1"><a>一</a></div>
            <div class="calendar-d2"><a>二</a></div>
            <div class="calendar-d3"><a>三</a></div>
            <div class="calendar-d4"><a>四</a></div>
            <div class="calendar-d5"><a>五</a></div>
            <div class="calendar-d6"><a>六</a></div>
          </div>
        </div>
      </div>

  - class_name: card-times
    id_name: card-widget-schedule
    name:
    icon:
    html:
      <div id="schedule-area-left">
        <div id="schedule-title">距离决赛</div>
        <div id="schedule-days">000</div>
        <div id="schedule-date">2024-12-20</div>
      </div>
      <div id="schedule-area-right">
        <div class="schedule-r0">
          <div class="schedule-d0">本年</div>
          <div class="schedule-d1">
            <span id="p_span_year" class="aside-span1"></span>
            <span class="aside-span2"></span>
            <progress max="365" value="54" id="pBar_year"></progress>
          </div>
        </div>
        <div class="schedule-r1">
          <div class="schedule-d0">本月</div>
          <div class="schedule-d1">
            <span id="p_span_month" class="aside-span1"></span>
            <span class="aside-span2"></span>
            <progress max="30" value="17" id="pBar_month"></progress>
          </div>
        </div>
        <div class="schedule-r2">
          <div class="schedule-d0">本周</div>
          <div class="schedule-d1">
            <span id="p_span_week" class="aside-span1"></span>
            <span class="aside-span2"></span>
            <progress max="7" value="1" id="pBar_week"></progress>
          </div>
        </div>
      </div>
~~~

### 引入 lunar.js

从[链接地址](https://github.com/wvv8oo/lunar/blob/master/lib/chinese-lunar.js)下载 lunar.js 文件放在`source/js`路径下

### calendar.js

路径`source/js`下新建`calendar.js`文件

~~~javascript
// pjax适配
document.addEventListener("DOMContentLoaded", () => {
    cardTimes();
    cardRefreshTimes();
}); //第一次加载

document.addEventListener("pjax:complete", () => {
    cardTimes();
    cardRefreshTimes();
}) // pjax加载完成（切换页面）后再执行一次

var now = new Date();
var year, month, week, date, dates, weekStr, monthStr;
var asideTime, asideDay, asideDayNum;
var animalYear, ganzhiYear, lunarMon, lunarDay;

// 刷新时钟时间
function cardRefreshTimes() {
    var cardWidgetSchedule = document.getElementById("card-widget-schedule");
    if (cardWidgetSchedule) {
        asideDay = (now - asideTime) / 1e3 / 60 / 60 / 24;
        cardWidgetSchedule.querySelector("#pBar_year").value = asideDay;
        cardWidgetSchedule.querySelector("#p_span_year").innerHTML = (asideDay / 365 * 100).toFixed(2) + "%";
        cardWidgetSchedule.querySelector(".schedule-r0 .schedule-d1 .aside-span2").innerHTML = "还剩<a> " + (365 - asideDay).toFixed(0) + " </a>天";
        cardWidgetSchedule.querySelector("#pBar_month").value = date;
        cardWidgetSchedule.querySelector("#pBar_month").max = dates;
        cardWidgetSchedule.querySelector("#p_span_month").innerHTML = (date / dates * 100).toFixed(2) + "%";
        cardWidgetSchedule.querySelector(".schedule-r1 .schedule-d1 .aside-span2").innerHTML = "还剩<a> " + (dates - date) + " </a>天";
        cardWidgetSchedule.querySelector("#pBar_week").value = week == 0 ? 7 : week;
        cardWidgetSchedule.querySelector("#p_span_week").innerHTML = ((week == 0 ? 7 : week) / 7 * 100).toFixed(2) + "%";
        cardWidgetSchedule.querySelector(".schedule-r2 .schedule-d1 .aside-span2").innerHTML = "还剩<a> " + (7 - (week == 0 ? 7 : week)) + " </a>天";
    }
}
// 侧边栏日历卡片
function cardTimes() {
    year = now.getFullYear();
    month = now.getMonth();
    week = now.getDay();
    date = now.getDate();
    var cardWidgetCalendar = document.getElementById("card-widget-calendar");
    if (cardWidgetCalendar) {
        var year_flag = year % 4 == 0 && year % 100 != 0 || year % 400 == 0 ? true : false;
        switch (week) {
            case 0: weekStr = "周日"; break;
            case 1: weekStr = "周一"; break;
            case 2: weekStr = "周二"; break;
            case 3: weekStr = "周三"; break;
            case 4: weekStr = "周四"; break;
            case 5: weekStr = "周五"; break;
            case 6: weekStr = "周六"; break;
            default: console.log("异常情况");
        }
        switch (month) {
            case 0: monthStr = "1月"; dates = 31; break;
            case 1: monthStr = "2月"; dates = year_flag ? 29 : 28; break;
            case 2: monthStr = "3月"; dates = 31; break;
            case 3: monthStr = "4月"; dates = 30; break;
            case 4: monthStr = "5月"; dates = 31; break;
            case 5: monthStr = "6月"; dates = 30; break;
            case 6: monthStr = "7月"; dates = 31; break;
            case 7: monthStr = "8月"; dates = 31; break;
            case 8: monthStr = "9月"; dates = 30; break;
            case 9: monthStr = "10月"; dates = 31; break;
            case 10: monthStr = "11月"; dates = 30; break;
            case 11: monthStr = "12月"; dates = 31; break;
            default: console.log("异常情况");
        }
        var week_first = (week + 8 - date % 7) % 7;
        var count_days = "";
        var count_flag = false;
        var ds;
        var row_h = 7 - week_first; //第一行天数
        var row_f = (dates - row_h) % 7; //最后一行的天数
        var rows = row_f == 0 ? Math.floor((dates - row_h) / 7) + 1 : Math.floor((dates - row_h) / 7) + 2;
        var calendar = cardWidgetCalendar.querySelector("#calendar-main");
        var gap = cardWidgetCalendar.querySelector("#calendar-date");
        switch (rows) {
            case 4: gap.style.fontSize = "36px"; break;
            case 5: gap.style.fontSize = "48px"; break;
            case 6: gap.style.fontSize = "64px"; break;
            default: gap.style.fontSize = "64px";
        }
        for (let r = 0; r < rows; r++) {
            if (calendar.querySelector(".calendar-r" + r) == null) {
                calendar.innerHTML += "<div class='calendar-r" + r + "'></div>";
            }
            for (let d = 0; d < 7; d++) {
                if (r == 0 && d == week_first) { //本月第一天
                    count_days = 1;
                    count_flag = true;
                }
                if (count_days == date) { //当日日期
                    ds = " class='now'";
                } else ds = "";
                if (calendar.querySelector(".calendar-r" + r + " .calendar-d" + d + " a") == null) {
                    calendar.querySelector(".calendar-r" + r).innerHTML += "<div class='calendar-d" + d + "'><a" + ds + ">" + count_days + "</a></div>";
                }
                if (count_days >= dates) {
                    count_days = "";
                    count_flag = false;
                }
                if (count_flag) count_days += 1;
            }
        }
        var lunar = chineseLunar.solarToLunar(new Date(year, month, date));
        animalYear = chineseLunar.format(lunar, "A"); //生肖属相
        ganzhiYear = chineseLunar.format(lunar, "T").slice(0, -1); //天干地支
        lunarMon = chineseLunar.format(lunar, "M"); //月份
        lunarDay = chineseLunar.format(lunar, "d"); //日期
        var anniversary = new Date("2024/12/20 08:30:00");
        var countDown = Math.floor((anniversary - now) / 1e3 / 60 / 60 / 24);
        asideTime = new Date(new Date().getFullYear() + "/01/01 00:00:00");	// 侧边栏倒计时
        asideDay = (now - asideTime) / 1e3 / 60 / 60 / 24;
        asideDayNum = Math.floor(asideDay);
        var asideWeekNum = ((week - asideDayNum % 7) >= 0) ? (Math.ceil(asideDayNum / 7)) : (Math.ceil(asideDayNum / 7) + 1);
        cardWidgetCalendar.querySelector("#calendar-week").innerHTML = "第" + asideWeekNum + "周&nbsp;" + weekStr; //星期
        cardWidgetCalendar.querySelector("#calendar-date").innerHTML = date.toString().padStart(2, '0'); //日期
        cardWidgetCalendar.querySelector("#calendar-solar").innerHTML = year + "年" + monthStr + "&nbsp;第" + asideDay.toFixed(0) + "天"; //年份
        cardWidgetCalendar.querySelector("#calendar-lunar").innerHTML = ganzhiYear + animalYear + "年&nbsp;" + lunarMon + lunarDay; //农历
        document.getElementById("schedule-days").innerHTML = countDown; //农历
    }
}
~~~

### calendar.css

路径`source/css`下新建`calendar.css`文件

{% tip error %}css代码不一定全（比如部分公共样式），遗漏的可以自行F12调试补充{% endtip %}

~~~css

:root {
    --gavin-highlight: rgb(var(--gavin-theme-color));
    --gavin-theme-color-light: 0,100,255;
    --gavin-theme-color-dark: 0,150,255;
}

[data-theme="light"] {
    --op: 255, 255, 255;
    --op-dis: 0, 0, 0;
    --f-0: #fff;
    --dis-f-0: #000;
    --gavin-theme-color: var(--gavin-theme-color-light);
}

[data-theme="dark"] {
    --op: 0, 0, 0;
    --op-dis: 255, 255, 255;
    --f-0: #000;
    --dis-f-0: #fff;
    --gavin-theme-color: var(--gavin-theme-color-dark);
}

.card-widget {
    padding: 10px !important;
    max-height: calc(100vh - 100px);
}

.card-times a,
.card-times div {
    color: var(--dis-f-0);
}

#card-widget-calendar .item-content {
    display: flex;
}

#calendar-area-left {
    width: 45%;
}

#calendar-area-right {
    width: 55%;
}

#calendar-area-left,
#calendar-area-right {
    height: 100%;
    padding: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

#calendar-main {
    width: 100%;
}

#calendar-week {
    height: 1.2rem;
    font-size: 14px;
    letter-spacing: 1px;
    font-weight: bold;
    align-items: center;
    display: flex;
}

#calendar-date {
    height: 3rem;
    line-height: 1.3;
    font-size: 64px;
    letter-spacing: 3px;
    color: var(--gavin-highlight);
    font-weight: bold;
    align-items: center;
    display: flex;
    position: absolute;
    top: calc(50% - 2.1rem);
}

#calendar-solar,
#calendar-lunar {
    height: 1rem;
    font-size: 12px;
    align-items: center;
    display: flex;
    position: absolute;
}

#calendar-solar {
    bottom: 2.1rem;
}

#calendar-lunar {
    bottom: 1rem;
    color: rgba(var(--op-dis),.4);
}

#calendar-main a {
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    font-size: 12px;
    line-height: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
}

#calendar-main a.now {
    background: var(--gavin-highlight);
    color: var(--f-0);
}

#calendar-main .calendar-rh a {
    color: rgba(var(--op-dis),.4);
}

.calendar-rh,
.calendar-r0,
.calendar-r1,
.calendar-r2,
.calendar-r3,
.calendar-r4,
.calendar-r5 {
    height: 1.2rem;
    display: flex;
}

.calendar-d0,
.calendar-d1,
.calendar-d2,
.calendar-d3,
.calendar-d4,
.calendar-d5,
.calendar-d6 {
    width: calc(100% / 7);
    display: flex;
    justify-content: center;
    align-items: center;
}

#card-widget-schedule .item-content {
    display: flex;
}

#schedule-area-left,
#schedule-area-right {
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#schedule-area-left {
    width: 30%;
}

#schedule-area-right {
    width: 70%;
    padding: 0 5px;
}

.schedule-r0,
.schedule-r1,
.schedule-r2 {
    height: 2rem;
    width: 100%;
    align-items: center;
    display: flex;
}

.schedule-d0 {
    width: 30px;
    margin-right: 5px;
    text-align: center;
    font-size: 12px;
}

.schedule-d1 {
    width: calc(100% - 35px);
    height: 1.5rem;
    align-items: center;
    display: flex;
}

progress::-webkit-progress-bar {
    background: linear-gradient(to right, rgba(var(--gavin-theme-color), .03), rgba(var(--gavin-theme-color), .05), rgba(var(--gavin-theme-color), .12));
    border-radius: 5px;
    overflow: hidden;
}

progress::-webkit-progress-value {
    background: rgba(var(--gavin-theme-color), .24);
    border-radius: 5px;
}

.aside-span1,
.aside-span2 {
    height: 1rem;
    font-size: 12px;
    z-index: 1;
    display: flex;
    align-items: center;
    position: absolute;
}

.aside-span1 {
    margin-left: 5px;
}

.aside-span2 {
    right: 20px;
    color: rgba(var(--op-dis),.5);
}

.aside-span2 a {
    margin: 0 3px;
}

#pBar_year,
#pBar_month,
#pBar_week {
    width: 100%;
    border-radius: 5px;
    height: 100%;
}

#schedule-title,
#schedule-days,
#schedule-date {
    display: flex;
    align-items: center;
}

#schedule-title {
    height: 25px;
    line-height: 1;
    font-size: 14px;
    font-weight: bold;
}

#schedule-days {
    height: 40px;
    line-height: 1;
    font-size: 30px;
    font-weight: 900;
    color: var(--gavin-highlight);
}

#schedule-date {
    height: 20px;
    line-height: 1;
    font-size: 12px;
    color: rgba(var(--op-dis),.5);
}
~~~

