webpackJsonp([1],{"/KGY":function(e,t){},"2J4S":function(e,t){},JQVn:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("7+uW"),r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("keep-alive",[this.$route.meta.keepAlive?t("router-view"):this._e()],1),this._v(" "),this.$route.meta.keepAlive?this._e():t("router-view")],1)},staticRenderFns:[]};var o=n("VU/8")({name:"App"},r,!1,function(e){n("/KGY")},null,null).exports,a=n("/ocq"),s=n("Gu7T"),c=n.n(s),l=n("mvHQ"),d=n.n(l),u=n("rdLu"),m={name:"PhoneCell",props:{info:Object},data:function(){return{thumb:this.info.thumb}},methods:{cellClicked:function(){this.$router.push("/article/"+this.info.sid)}}},f={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"phone-cell-container",on:{click:e.cellClicked}},[n("div",{staticClass:"cell-icon",style:{background:"url("+e.thumb+") no-repeat","background-size":"100% 100%"}}),e._v(" "),n("div",{staticClass:"cell-info"},[n("div",{staticClass:"cell-title",domProps:{innerHTML:e._s(e.info.title)}}),e._v(" "),n("div",{staticClass:"cell-date",domProps:{innerHTML:e._s(e.info.inputtime)}})])])},staticRenderFns:[]};var h=n("VU/8")(m,f,!1,function(e){n("cFPm")},null,null).exports,p=new i.a,v=n("mtWM"),g=n.n(v);g.a.defaults.withCredentials=!0;function _(e){return/^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i.test(e.url)?e.url:"http://api.turling.me/api/"+e.url}function b(e,t){e.then(function(e){e&&e.data?t.success&&t.success(e.data):t.error&&t.error(e)}).catch(function(e){t.error&&t.error(e)})}var C=function(e){b(g.a.get(_(e),{params:e.params}),e)};var y={name:"Home",data:function(){return{articleList:[],paginationInfo:{current_page:1,total_page:0,page_size:35},selectedPage:1,refreshBtn:null}},components:{PhoneCell:h},methods:{getArticleList:function(e){var t=this,n=this.articleList[this.articleList.length-1];console.log(d()(n)),C({url:"timeline",params:{last_sid:this.articleList.length?n.sid:0},success:function(e){t.refreshBtn.$stopLoading(),"200"===e.status_code.toString()?(t.articleList=[].concat(c()(t.articleList),c()(e.result)),t.paginationInfo=e.result.pagination):t.$toast({text:"请求出错",duration:2e3})},error:function(){t.refreshBtn.$stopLoading(),t.$toast({text:"网络错误！",duration:2e3})}})}},mounted:function(){var e=this;this.refreshBtn=this.$showRefresh(),p.$on("onRefresh",function(){document.documentElement.scrollTop=0,e.selectedPage=1,e.articleList=[],e.getArticleList()}),this.getArticleList()},activated:function(){var e=this;this.refreshBtn&&this.refreshBtn.$appear(),document.body.onscroll=u.throttle(function(){(document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop)+document.body.offsetHeight>=document.body.scrollHeight&&(e.selectedPage=e.selectedPage+1,e.getArticleList())},500)},deactivated:function(){this.refreshBtn.$disappear(),document.body.onscroll=null},beforeDestroy:function(){this.refreshBtn.$remove(),p.$off("onRefresh")}},$={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"page-content"},[t("div",{staticClass:"article-list"},this._l(this.articleList,function(e){return t("phone-cell",{key:e.sid,attrs:{info:e}})}),1)])},staticRenderFns:[]};var w=n("VU/8")(y,$,!1,function(e){n("JQVn")},null,null).exports;function x(){for(var e=document.getElementsByTagName("embed"),t=e.length-1;t>=0;t--){if((m=(c=e[t]).src).indexOf("youku.com")>-1)if(o=m.match(/sid\/(\w+)/i)){var n="http://player.youku.com/embed/"+o[1];(l=document.createElement("iframe")).src=n,c.parentNode.replaceChild(l,c)}else{var i=h();c.parentNode.replaceChild(i,c)}else if(m.indexOf("tudou.com")>-1){if(o=m.match(/\/v\/(\S*)\/&/i)){n="http://www.tudou.com/programs/view/html5embed.action?code="+o[1];(l=document.createElement("iframe")).src=n,c.parentNode.replaceChild(l,c)}else{i=h();c.parentNode.replaceChild(i,c)}}else if(m.indexOf("qq.com")>-1){if(o=m.match(/vid=(\S*)&/i)){n="https://v.qq.com/iframe/player.html?vid="+o[1]+"&tiny=0&auto=0";(l=document.createElement("iframe")).src=n,c.parentNode.replaceChild(l,c)}else{i=h();c.parentNode.replaceChild(i,c)}}else if(m.indexOf("qiyi.com")>-1){if((o=m.match(/com\/(\S*?)\/0/i))&(a=m.match(/tvId=(\S*?)-/i))){n="http://open.iqiyi.com/developer/player_js/coopPlayerIndex.html?vid="+o[1]+"&tvId="+a[1]+"&accessToken=2.f22860a2479ad60d8da7697274de9346&appKey=3955c3425820435e86d0f4cdfe56f5e7&appId=1368&height=100%&width=100%";(l=document.createElement("iframe")).src=n,c.parentNode.replaceChild(l,c)}else{i=h();c.parentNode.replaceChild(i,c)}}else if(m.indexOf("letv.com")>-1){var r=c.getAttribute("flashvars"),o=r.match(/uu=(\S*?)&/i),a=r.match(/vu=(\S*?)&/i);if(o&&a){n="http://yuntv.letv.com/bcloud.html?uu="+o[1]+"&vu="+a[1]+"&auto_play=0&width=320&height=240&lang=zh_CN";(l=document.createElement("iframe")).src=n,c.parentNode.replaceChild(l,c)}}}var s=document.getElementsByTagName("iframe");for(t=s.length-1;t>=0;t--){var c;if(m=(c=s[t]).src){var l;if(m.indexOf("qq.com")>-1)if(o=m.match(/vid=(\S*?)&/i))m=n="https://v.qq.com/iframe/player.html?vid="+o[1]+"&tiny=0&auto=0";if(m.indexOf("player.youku.com")>-1)if(o=m.match(/embed\/((\S*?)\==)/i))m="http://player.youku.com/embed/"+o[1];if(-1==m.indexOf("http")&&m.indexOf("//")>=0){var d=m.indexOf("//");m="https:"+m.substr(d)}(l=document.createElement("iframe")).src=m,l.width=document.documentElement.clientWidth,l.height=document.documentElement.clientWidth/2,c.parentNode.replaceChild(l,c)}else{i=h();c.parentNode.replaceChild(i,c)}}var u=document.getElementsByTagName("video");for(t=u.length-1;t>=0;t--){var m,f=u[t];if(-1==(m=f.src).indexOf("http")&&m.indexOf("//")>=0){d=m.indexOf("//");m="https:"+m.substr(d)}f.src=m,f.setAttribute("webkit-playsinline",!0),f.setAttribute("playsinline",!0),f.width=document.documentElement.clientWidth,f.height=document.documentElement.clientWidth/2}function h(){var e=document.createElement("div");e.class="videoPlaceholder";var t=document.createElement("div");return t.class="videoForbidden",e.appendChild(t),e}}var E={name:"cnbeta-article",data:function(){return{info:null}},methods:{getArticleContent:function(){var e=this,t=[].concat(c()(location.href.split("/"))).pop();C({url:"article/"+t,success:function(t){"200"===t.status_code.toString()?(e.info=t.result,document.title=e.info.title,e.$nextTick(x)):e.$toast({text:"请求出错",duration:2e3})},error:function(){e.$toast({text:"网络错误！",duration:2e3})}})}},mounted:function(){this.getArticleContent()}},k={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.info?n("div",{staticClass:"cnbeta-article-container"},[n("h1",{domProps:{innerHTML:e._s(e.info.title)}}),e._v(" "),n("div",{staticClass:"news-info"},[n("span",{staticClass:"time"},[e._v(e._s(e.info.inputtime))]),e._v(" "),n("span",{staticClass:"source",domProps:{innerHTML:e._s(e.info.source)}})]),e._v(" "),n("summary",{domProps:{innerHTML:e._s(e.info.summary)}}),e._v(" "),n("div",{staticClass:"content",domProps:{innerHTML:e._s(e.info.content)}}),e._v(" "),n("div",{staticClass:"orign"},[n("div",[n("a",{attrs:{href:e.info.url_show,target:"_blank"}},[e._v("查看原文")])])])]):e._e()},staticRenderFns:[]};var L=n("VU/8")(E,k,!1,function(e){n("2J4S")},null,null).exports;i.a.use(a.a);var N=new a.a({mode:"history",routes:[{path:"/",name:"MobileHome",component:w,meta:{keepAlive:!0}},{path:"/article/:sid",name:"Article",component:L}]}),A={name:"Refresh",data:function(){return{visible:!1,loading:!1}},methods:{onClick:function(){this.loading||(this.loading=!0,p.$emit("onRefresh"))}}},P={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{directives:[{name:"show",rawName:"v-show",value:this.visible,expression:"visible"}],staticClass:"refresh-btn",on:{click:this.onClick}},[t("div",{staticClass:"refresh-icon",class:{"loading-icon":this.loading}})])},staticRenderFns:[]};var O=n("VU/8")(A,P,!1,function(e){n("SU9l")},null,null).exports,T=i.a.extend(O),S=n("qJdI"),H=n.n(S);i.a.config.productionTip=!1,i.a.use(H.a),i.a.prototype.$showRefresh=function(e){var t=new T({el:document.createElement("div"),data:e||{}});return t.visible=!0,document.body.appendChild(t.$el),t.$stopLoading=function(){t.loading=!1},t.$disappear=function(){t.loading=!1,t.visible=!1},t.$appear=function(){t.visible=!0},t.$remove=function(){t.$el&&t.$el.parentNode&&t.$el.parentNode.removeChild(t.$el),t.$destroy()},t},new i.a({el:"#app",router:N,components:{App:o},template:"<App/>"})},SU9l:function(e,t){},cFPm:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.a4f61da32ecc08efb93e.js.map