webpackJsonp([1],{"3p5a":function(e,t){},"G/K4":function(e,t){},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("7+uW"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("keep-alive",[this.$route.meta.keepAlive?t("router-view"):this._e()],1),this._v(" "),this.$route.meta.keepAlive?this._e():t("router-view")],1)},staticRenderFns:[]};var r=i("VU/8")({name:"App"},a,!1,function(e){i("3p5a")},null,null).exports,o=i("/ocq"),s=i("Gu7T"),c=i.n(s),l=i("//Fk"),d=i.n(l),u=(i("rdLu"),i("qK+J")),f=i.n(u),m={name:"PhoneCell",props:{info:Object,showSummary:Boolean},data:function(){return{thumb:this.info.thumb}},methods:{cellClicked:function(){this.$router.push("/article/"+this.info.sid)}}},h={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"phone-cell-container",on:{click:e.cellClicked}},[i("div",{staticClass:"cell-icon",style:{background:"url("+e.thumb+") no-repeat","background-size":"100% 100%"}}),e._v(" "),i("div",{staticClass:"cell-info"},[i("div",{staticClass:"cell-title",domProps:{innerHTML:e._s(e.info.title)}}),e._v(" "),e.showSummary?i("div",{staticClass:"cell-summary",domProps:{innerHTML:e._s(e.info.summary)}}):e._e(),e._v(" "),i("div",{staticClass:"cell-date",domProps:{innerHTML:e._s(e.info.inputtime)}})])])},staticRenderFns:[]};var p=i("VU/8")(m,h,!1,function(e){i("mA70")},null,null).exports,v=new n.a,g=i("mtWM"),_=i.n(g);_.a.defaults.withCredentials=!0;function b(e){return/^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i.test(e.url)?e.url:"http://api.turling.me/api/"+e.url}function C(e,t){e.then(function(e){e&&e.data?t.success&&t.success(e.data):t.error&&t.error(e)}).catch(function(e){t.error&&t.error(e)})}var $=function(e){C(_.a.get(b(e),{params:e.params}),e)};var y={name:"Home",data:function(){return{articleList:[],paginationInfo:{current_page:1,total_page:0,page_size:35},selectedPage:1,refreshBtn:null,isMobile:!1}},components:{InfiniteLoading:f.a,PhoneCell:p},methods:{onInfinite:function(){var e=this;this.selectedPage=this.selectedPage+1,this.getArticleList().then(function(){e.$refs.infiniteLoading.$emit("$InfiniteLoading:loaded")}).catch(function(t){e.$refs.infiniteLoading.$emit("$InfiniteLoading:loaded")})},getArticleList:function(e){var t=this,i=this.articleList[this.articleList.length-1];return new d.a(function(e,n){$({url:"timeline",params:{last_sid:t.articleList.length?i.sid:0},success:function(i){t.refreshBtn&&t.refreshBtn.$stopLoading(),"200"===i.status_code.toString()?(t.articleList=[].concat(c()(t.articleList),c()(i.result)),t.paginationInfo=i.result.pagination):t.$toast({text:"请求出错",duration:2e3}),e()},error:function(){t.refreshBtn&&t.refreshBtn.$stopLoading(),t.$toast({text:"网络错误！",duration:2e3}),n()}})})}},mounted:function(){var e,t=this,i={trident:(e=navigator.userAgent).indexOf("Trident")>-1,presto:e.indexOf("Presto")>-1,webKit:e.indexOf("AppleWebKit")>-1,gecko:e.indexOf("Gecko")>-1&&-1===e.indexOf("KHTML"),mobile:!!e.match(/AppleWebKit.*Mobile.*/),ios:!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:e.indexOf("Android")>-1||e.indexOf("Linux")>-1,iPhone:e.indexOf("iPhone")>-1,iPad:e.indexOf("iPad")>-1,webApp:-1===e.indexOf("Safari")};(navigator.browserLanguage||navigator.language).toLowerCase();(i.mobile||i.ios||i.android||i.iPhone||i.iPad)&&(this.isMobile=!0),this.isMobile&&(this.refreshBtn=this.$showRefresh(),v.$on("onRefresh",function(){document.documentElement.scrollTop=0,t.selectedPage=1,t.articleList=[],t.getArticleList()}))},activated:function(){this.refreshBtn&&this.refreshBtn.$appear()},deactivated:function(){this.refreshBtn&&this.refreshBtn.$disappear()},beforeDestroy:function(){this.refreshBtn&&(this.refreshBtn.$remove(),v.$off("onRefresh"))}},x={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"page-content"},[e._m(0),e._v(" "),i("div",{staticClass:"article-list"},e._l(e.articleList,function(t){return i("phone-cell",{key:t.sid,attrs:{info:t,showSummary:!e.isMobile}})}),1),e._v(" "),i("infinite-loading",{ref:"infiniteLoading",attrs:{"on-infinite":e.onInfinite,spinner:"bubbles"}})],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"header"},[t("div",{staticClass:"cnbeta-icon"}),this._v(" "),t("div",{staticClass:"cnbeta-slogan"},[this._v("中文业界资讯站")])])}]};var w=i("VU/8")(y,x,!1,function(e){i("qHOd")},null,null).exports;function L(){for(var e=document.getElementsByTagName("embed"),t=e.length-1;t>=0;t--){if((f=(c=e[t]).src).indexOf("youku.com")>-1)if(r=f.match(/sid\/(\w+)/i)){var i="http://player.youku.com/embed/"+r[1];(l=document.createElement("iframe")).src=i,c.parentNode.replaceChild(l,c)}else{var n=h();c.parentNode.replaceChild(n,c)}else if(f.indexOf("tudou.com")>-1){if(r=f.match(/\/v\/(\S*)\/&/i)){i="http://www.tudou.com/programs/view/html5embed.action?code="+r[1];(l=document.createElement("iframe")).src=i,c.parentNode.replaceChild(l,c)}else{n=h();c.parentNode.replaceChild(n,c)}}else if(f.indexOf("qq.com")>-1){if(r=f.match(/vid=(\S*)&/i)){i="https://v.qq.com/iframe/player.html?vid="+r[1]+"&tiny=0&auto=0";(l=document.createElement("iframe")).src=i,c.parentNode.replaceChild(l,c)}else{n=h();c.parentNode.replaceChild(n,c)}}else if(f.indexOf("qiyi.com")>-1){if((r=f.match(/com\/(\S*?)\/0/i))&(o=f.match(/tvId=(\S*?)-/i))){i="http://open.iqiyi.com/developer/player_js/coopPlayerIndex.html?vid="+r[1]+"&tvId="+o[1]+"&accessToken=2.f22860a2479ad60d8da7697274de9346&appKey=3955c3425820435e86d0f4cdfe56f5e7&appId=1368&height=100%&width=100%";(l=document.createElement("iframe")).src=i,c.parentNode.replaceChild(l,c)}else{n=h();c.parentNode.replaceChild(n,c)}}else if(f.indexOf("letv.com")>-1){var a=c.getAttribute("flashvars"),r=a.match(/uu=(\S*?)&/i),o=a.match(/vu=(\S*?)&/i);if(r&&o){i="http://yuntv.letv.com/bcloud.html?uu="+r[1]+"&vu="+o[1]+"&auto_play=0&width=320&height=240&lang=zh_CN";(l=document.createElement("iframe")).src=i,c.parentNode.replaceChild(l,c)}}}var s=document.getElementsByTagName("iframe");for(t=s.length-1;t>=0;t--){var c;if(f=(c=s[t]).src){var l;if(f.indexOf("qq.com")>-1)if(r=f.match(/vid=(\S*?)&/i))f=i="https://v.qq.com/iframe/player.html?vid="+r[1]+"&tiny=0&auto=0";if(f.indexOf("player.youku.com")>-1)if(r=f.match(/embed\/((\S*?)\==)/i))f="http://player.youku.com/embed/"+r[1];if(-1==f.indexOf("http")&&f.indexOf("//")>=0){var d=f.indexOf("//");f="https:"+f.substr(d)}(l=document.createElement("iframe")).src=f,l.width=document.documentElement.clientWidth,l.height=document.documentElement.clientWidth/2,c.parentNode.replaceChild(l,c)}else{n=h();c.parentNode.replaceChild(n,c)}}var u=document.getElementsByTagName("video");for(t=u.length-1;t>=0;t--){var f,m=u[t];if(-1==(f=m.src).indexOf("http")&&f.indexOf("//")>=0){d=f.indexOf("//");f="https:"+f.substr(d)}m.src=f,m.setAttribute("webkit-playsinline",!0),m.setAttribute("playsinline",!0),m.width=document.documentElement.clientWidth,m.height=document.documentElement.clientWidth/2}function h(){var e=document.createElement("div");e.class="videoPlaceholder";var t=document.createElement("div");return t.class="videoForbidden",e.appendChild(t),e}}var O={name:"cnbeta-article",data:function(){return{info:null}},methods:{getArticleContent:function(){var e=this,t=[].concat(c()(location.href.split("/"))).pop();$({url:"article/"+t,success:function(t){"200"===t.status_code.toString()?(e.info=t.result,document.title=e.info.title,e.$nextTick(L)):e.$toast({text:"请求出错",duration:2e3})},error:function(){e.$toast({text:"网络错误！",duration:2e3})}})}},mounted:function(){this.getArticleContent()}},k={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.info?i("div",{staticClass:"cnbeta-article-container"},[i("h1",{domProps:{innerHTML:e._s(e.info.title)}}),e._v(" "),i("div",{staticClass:"news-info"},[i("span",{staticClass:"time"},[e._v(e._s(e.info.inputtime))]),e._v(" "),i("span",{staticClass:"source",domProps:{innerHTML:e._s(e.info.source)}})]),e._v(" "),i("summary",{domProps:{innerHTML:e._s(e.info.summary)}}),e._v(" "),i("div",{staticClass:"content",domProps:{innerHTML:e._s(e.info.content)}}),e._v(" "),i("div",{staticClass:"orign"},[i("div",[i("a",{attrs:{href:e.info.url_show,target:"_blank"}},[e._v("查看原文")])])])]):e._e()},staticRenderFns:[]};var A=i("VU/8")(O,k,!1,function(e){i("G/K4")},null,null).exports;n.a.use(o.a);var E=new o.a({mode:"history",routes:[{path:"/",name:"MobileHome",component:w,meta:{keepAlive:!0}},{path:"/article/:sid",name:"Article",component:A}]}),P={name:"Refresh",data:function(){return{visible:!1,loading:!1}},methods:{onClick:function(){this.loading||(this.loading=!0,v.$emit("onRefresh"))}}},N={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{directives:[{name:"show",rawName:"v-show",value:this.visible,expression:"visible"}],staticClass:"refresh-btn",on:{click:this.onClick}},[t("div",{staticClass:"refresh-icon",class:{"loading-icon":this.loading}})])},staticRenderFns:[]};var B=i("VU/8")(P,N,!1,function(e){i("WUV9")},null,null).exports,M=n.a.extend(B),T=i("qJdI"),q=i.n(T);n.a.config.productionTip=!1,n.a.use(q.a),n.a.prototype.$showRefresh=function(e){var t=new M({el:document.createElement("div"),data:e||{}});return t.visible=!0,document.getElementById("app").appendChild(t.$el),t.$stopLoading=function(){t.loading=!1},t.$disappear=function(){t.loading=!1,t.visible=!1},t.$appear=function(){t.visible=!0},t.$remove=function(){t.$el&&t.$el.parentNode&&t.$el.parentNode.removeChild(t.$el),t.$destroy()},t},new n.a({el:"#app",router:E,components:{App:r},template:"<App/>"})},WUV9:function(e,t){},mA70:function(e,t){},qHOd:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.8a707a34cc3eb44b01bb.js.map