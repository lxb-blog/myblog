var posts=["undefined/d0612c0e.html","undefined/3c50d03d.html","undefined/a92aee60.html","undefined/29816.html","undefined/a5b8269f.html","undefined/55b969e.html","undefined/48e0dc21.html","undefined/57573.html","undefined/2d242429.html","undefined/8a8b35ba.html","undefined/b5601a7e.html","undefined/594d4c8e.html","undefined/5c86eaf5.html","undefined/4096dbb9.html","undefined/48a4e2e7.html","undefined/65b9c749.html","undefined/35384273.html","undefined/43222ac4.html","undefined/5140.html","undefined/65b9c749.html","undefined/44518.html","undefined/4a5c89b6.html","undefined/33690.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"李小白","link":"https://lxb.icu","avatar":"https://q1.qlogo.cn/g?b=qq&nk=648226460&s=640","descr":"个人博客","siteshot":"https://img.siyouyun.eu.org/file/1728793454327_image.png"},{"name":"anzhiyu主题","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"李小白","link":"https://lxb.icu","avatar":"https://q1.qlogo.cn/g?b=qq&nk=648226460&s=640","descr":"与风共舞，随心而行.","siteshot":"https://q1.qlogo.cn/g?b=qq&nk=648226460&s=640","color":"vip","tag":"技术"},{"name":"李小白网盘","link":"https://wp.lxb.icu/","avatar":"https://q1.qlogo.cn/g?b=qq&nk=648226460&s=640","descr":"网盘","recommend":true},{"name":"李小白短剧","link":"https://video.lxb.icu/","avatar":"https://q1.qlogo.cn/g?b=qq&nk=648226460&s=640","descr":"短剧","recommend":true},{"name":"李小白监控","link":"https://status.lxb.icu/","avatar":"https://q1.qlogo.cn/g?b=qq&nk=648226460&s=640","descr":"监控","recommend":true},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","recommend":true},{"name":"一粒微尘","link":"https://blog.667408.xyz","avatar":"https://blog.667408.xyz/favicon.ico","descr":"撷光以望，纳星于瞳"},{"name":"东方月初","link":"https://hexo.200038.xyz/","avatar":"https://hexo.200038.xyz/img/favicon.ico","descr":"东方月初"},{"name":"梦爱吃鱼","link":"https://blog.bsgun.cn/","avatar":"https://lib.bsgun.cn/Hexo-static/img/favicon.ico","descr":"梦爱吃鱼"},{"name":"eurkon","link":"https://blog.eurkon.com/","avatar":"https://npm.elemecdn.com/eurkon-cdn/hexo/images/user/avatar.jpg","descr":"eurkon"},{"name":"Fomalhaut🥝","link":"https://www.fomal.cc/","avatar":"https://npm.elemecdn.com/eurkon-cdn/hexo/images/user/avatar.jpg","descr":"Fomalhaut🥝"},{"name":"XingJi の Blog","link":"https://love.xingji.fun/","avatar":"https://i.p-i.vip/47/20240920-66ed7b168c38c.jpg","descr":"迄今所有人生都大写着失败，但不妨碍我继续向前✨","siteshot":"https://i.p-i.vip/47/20240920-66ed7b6730ca9.png"},{"name":"陆小启","link":"https://lxqxm.top/","avatar":"https://bu.dusays.com/2024/08/28/66ceb35deb5b1.webp","descr":"一个对你有帮助的圈子"},{"name":"Elykia","link":"https://blog.elykia.cn/","avatar":"https://bu.dusays.com/2024/10/25/671b2438203a6.gif","descr":"致以无暇之人","siteshot":"https://bu.dusays.com/2024/10/25/671b50dc2dd2b.png"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };