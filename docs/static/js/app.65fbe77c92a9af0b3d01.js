webpackJsonp([24],{"0xDb":function(t,e,n){"use strict";e.c=r,e.b=function(t){var e=t.split("?")[1];if(!e)return{};return JSON.parse('{"'+decodeURIComponent(e).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}')},e.a=function(t,e,n){var i=void 0,a=void 0,o=void 0,r=void 0,s=void 0,c=function c(){var u=+new Date-r;u<e&&u>0?i=setTimeout(c,e-u):(i=null,n||(s=t.apply(o,a),i||(o=a=null)))};return function(){for(var a=arguments.length,u=Array(a),l=0;l<a;l++)u[l]=arguments[l];o=this,r=+new Date;var d=n&&!i;return i||(i=setTimeout(c,e)),d&&(s=t.apply(o,u),o=u=null),s}};var i=n("ZLEe"),a=(n.n(i),n("hRKE")),o=n.n(a);function r(t,e){if(0===arguments.length)return null;var n=e||"{y}-{m}-{d} {h}:{i}:{s}",i=void 0;"object"===(void 0===t?"undefined":o()(t))?i=t:(10===(""+t).length&&(t=1e3*parseInt(t)),i=new Date(t));var a={y:i.getFullYear(),m:i.getMonth()+1,d:i.getDate(),h:i.getHours(),i:i.getMinutes(),s:i.getSeconds(),a:i.getDay()};return n.replace(/{(y|m|d|h|i|s|a)+}/g,function(t,e){var n=a[e];return"a"===e?["一","二","三","四","五","六","日"][n-1]:(t.length>0&&n<10&&(n="0"+n),n||0)})}},"6Wph":function(t,e){},"991W":function(t,e){},A66B:function(t,e,n){t.exports=function(t){return function(){return n("Opzk")("./"+t+".vue")}}},"IE+w":function(t,e){},IcnI:function(t,e,n){"use strict";var i=n("rVsN"),a=n.n(i),o=n("IvJb"),r=n("9rMa"),s=n("vLgD");var c=n("TuU3");o.default.use(r.a);var u={login_out:function(t){t.user="",c.a.removeToken()},set_user:function(t,e){t.user=e},set_role:function(t,e){t.user.role=e},set_logs:function(t,e){t.logs.push(e)},set_theme:function(t,e){t.theme=e},toggle_sidebar:function(t){t.sidebar.opened=!t.sidebar.opened}},l={get_login_data:function(t,e){var n=t.commit;return new a.a(function(t,i){var a;(a=e,Object(s.b)("/login","POST",a)).then(function(e){e&&e.token?(c.a.setToken(e.token),n("set_role",e.data),t(e)):i(new Error("暂无登录数据！"))}).catch(function(t){i(t)})})},get_user_data:function(t,e){var n=t.commit;return new a.a(function(t,i){(function(t){return Object(s.b)("/user/info","get",t)})(e).then(function(e){e&&200===e.code&&e.data?(n("set_user",e.data),t(e.data)):i(new Error("nothing user data"))}).catch(function(t){i(t)})})},ToggleSideBar:function(t){(0,t.commit)("toggle_sidebar")}};e.a=new r.a.Store({state:{user:"",logs:[],theme:"#42B983",sidebar:{opened:!0}},getters:{token:function(t){return t.user.token},role:function(t){return t.user.role},name:function(t){return t.user.name},sidebar:function(t){return t.sidebar}},mutations:u,actions:l})},KsN1:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={name:"menuItem",props:{json:Array}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menuItem"},[t._l(t.json,function(e,i){return[e.children?n("el-submenu",{key:i,attrs:{index:e.name}},[n("template",{slot:"title"},[e.icon?n("i",{class:e.icon}):t._e(),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.name))])]),t._v(" "),t._l(e.children,function(e,i){return[e.children?n("wl-menu-item",{key:i,attrs:{json:[e]}}):n("router-link",{key:i,attrs:{to:{name:e.name}}},[n("el-menu-item",{attrs:{index:e.name}},[e.icon?n("i",{class:e.icon}):t._e(),t._v(t._s(e.name)+"\n                    ")])],1)]})],2):n("router-link",{key:i,attrs:{to:{name:e.name}}},[n("el-menu-item",{attrs:{index:e.name}},[e.icon?n("i",{class:e.icon}):t._e(),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.name))])])],1)]})],2)},staticRenderFns:[]};var o=n("vSla")(i,a,!1,function(t){n("6Wph")},null,null);e.default=o.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={};n.d(i,"devide_10k",function(){return rt}),n.d(i,"parseTime",function(){return st}),n.d(i,"formatTime",function(){return ct});var a=n("ZLEe"),o=n.n(a),r=n("IvJb"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("transition",{attrs:{name:"el-fade-in-linear",mode:"out-in"}},[e("router-view")],1),this._v(" "),e("vue-progress-bar")],1)},staticRenderFns:[]},c=n("vSla")({name:"app",methods:{init_Progress:function(){var t=this;this.$router.beforeEach(function(e,n,i){t.$Progress.start(),i()}),this.$router.afterEach(function(e,n){t.$Progress.finish()})}},created:function(){this.$Progress.start(),this.init_Progress()},mounted:function(){this.$Progress.finish()}},s,!1,null,null,null).exports,u=n("YaEn"),l=n("IcnI"),d=n("TuU3"),h=n("aozt"),m=n.n(h),p=n("Axgm"),f=n.n(p),v=n("6TLn"),g=n.n(v),b=n("ybg9"),w=n.n(b),y=(n("dRIH"),n("SPU+"),n("991W"),n("UfKn"),this);u.a.beforeEach(function(t,e,n){function i(){n({path:"/login",query:{redirect:t.fullPath}})}function a(t,e){var i=!1;(!e||t.indexOf("admin")>-1)&&(i=!0),"string"==typeof e?t.indexOf(e)>-1&&(i=!0):Array.isArray(e)&&e.some(function(e){return t.indexOf(e)>-1})&&(i=!0),i?n():n("/401")}t.matched.some(function(t){return t.meta.login})?d.a.getToken()?"/login"===t.path?n("/"):l.a.state.user?a(l.a.state.user.role,t.meta.role):l.a.dispatch("get_user_data").then(function(e){a(e.role,t.meta.role)}).catch(function(t){y.$message.error("登录已失效，请重新登录"),i()}):i():n()}),r.default.config.errorHandler=function(t,e,n){l.a.commit("set_logs",{error:t,vm:e,info:n,url:window.location.href,time:new Date})};for(var k=n("cLQA"),_=n.n(k),x=n("0xDb"),S=[],V=0;V<100;V++)S.push(_.a.mock({id:"@increment",name:_.a.Random.cname(),names:_.a.Random.cname(),addr:_.a.mock("@county(true)"),timestamp:+_.a.Random.date("T"),title:_.a.Random.ctitle(),forecast:"@float(0, 100, 2, 2)",importance:"@integer(1, 3)","type|1":["自主开发","自然到店","工地回单","广告推广","其它来源","蜂巢网","网销部转入","朋友介绍","电话营销","电话来源","电视广告","网络推广"],"rank|1":["中意向","高意向"],"status|1":["合同客户","见面客户","意向客户"],"moblie|1":["13531544954","13632250649","15820292420","15999905612"],display_time:"@datetime",pageviews:"@integer(300, 5000)"}));var T=function(t){var e=Object(x.b)(t.url),n=e.importance,i=e.type,a=e.title,o=e.page,r=void 0===o?1:o,s=e.limit,c=void 0===s?20:s,u=e.sort,l=S.filter(function(t){return(!n||t.importance===+n)&&((!i||t.type===i)&&!(a&&t.title.indexOf(a)<0))});"-id"===u&&(l=l.reverse());var d=l.filter(function(t,e){return e<c*r&&e>=c*(r-1)});return{total:l.length,items:d}},D=function(){return{pvData:[{key:"PC",pv:1024},{key:"mobile",pv:1024},{key:"ios",pv:1024},{key:"android",pv:1024}]}},C=function(){return{id:120000000001,author:{key:"mockAaron"},source_name:"原创作者",category_item:[{key:"global",name:"全球"}],comment_disabled:!0,content:'<p>我是测试数据我是测试数据</p><p><img class="wscnph" src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943" data-wscntype="image" data-wscnh="300" data-wscnw="400" data-mce-src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>"',content_short:"我是测试数据",display_time:+new Date,image_uri:"https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",platforms:["a-platform"],status:"published",tags:[],title:"erp-admin"}},E=function(){return{data:"success"}},N=function(){return{data:"success"}};_.a.mock(/\/login/,{token:_.a.Random.guid()}),_.a.mock(/\/user\/info\.*/,{code:200,msg:"success",data:{nickname:"超哥哥",headimgurl:"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",role:"0"}}),_.a.mock(/\/customer\/list/,"get",T),_.a.mock(/\/customer\/detail/,"get",C),_.a.mock(/\/customer\/pv/,"get",D),_.a.mock(/\/customer\/create/,"post",E),_.a.mock(/\/customer\/update/,"post",N);_.a;var F=n("4YfN"),I=n.n(F),R=n("9rMa"),A=n("dahE"),$={name:"breadcrumb",props:{separator:{type:String},separatorClass:{type:String}},data:function(){return{json:[]}},watch:{$route:function(){this.getBreadcrumb()}},methods:{getBreadcrumb:function(){var t=this.$route.matched.filter(function(t){return t.name}),e=t[0];e&&"首页"!==e.name&&""!==e.path&&(t=[{name:"首页",path:"/index"}].concat(t)),this.json=t},toggleSideBar:function(){this.$store.dispatch("ToggleSideBar")}},mounted:function(){this.getBreadcrumb()},computed:I()({},Object(R.b)(["sidebar"])),components:{Hamburger:A.a}},O={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("hamburger",{staticClass:"hamburger-container",attrs:{toggleClick:t.toggleSideBar}}),t._v(" "),t.separator?n("el-breadcrumb",{attrs:{separator:t.separator}},t._l(t.json,function(e,i){return n("el-breadcrumb-item",{key:i,attrs:{to:e.path}},[t._v(t._s(e.name))])})):n("el-breadcrumb",{attrs:{"separator-class":t.separatorClass?t.separatorClass:"el-icon-arrow-right"}},t._l(t.json,function(e,i){return n("el-breadcrumb-item",{key:i,attrs:{to:e.path}},[t._v(t._s(e.name))])}))],1)},staticRenderFns:[]};for(var P=n("vSla")($,O,!1,function(t){n("bgbq")},"data-v-33dec58d",null).exports,j={name:"Sticky",props:{stickyTop:{type:Number,default:0},zIndex:{type:Number,default:9},stickyClass:{type:String}},data:function(){return{active:!1,position:"",currentTop:"",width:void 0,height:void 0,child:null,stickyHeight:0}},mounted:function(){this.height=this.$el.getBoundingClientRect().height,window.addEventListener("scroll",this.handleScroll)},activated:function(){this.handleScroll()},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{sticky:function(){this.active||(this.position="fixed",this.active=!0,this.width=this.width+"px")},reset:function(){this.active&&(this.position="",this.width="auto",this.active=!1)},handleScroll:function(){this.width=this.$el.getBoundingClientRect().width,this.$el.getBoundingClientRect().top<=this.stickyTop?this.sticky():this.reset()}}},M={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:{height:t.height+"px",zIndex:t.zIndex}},[n("div",{class:t.stickyClass,style:{top:t.stickyTop+"px",zIndex:t.zIndex,position:t.position,width:t.width,height:t.height+"px"}},[t._t("default",[n("div",[t._v("sticky")])])],2)])},staticRenderFns:[]},B=n("vSla")(j,M,!1,null,null,null).exports,L=n("a3Yh"),z=n.n(L),U=0,q=["webkit","moz","ms","o"],H=window.requestAnimationFrame,K=window.cancelAnimationFrame,Y=0;Y<q.length&&(!H||!K);++Y)H=window[q[Y]+"RequestAnimationFrame"],K=window[q[Y]+"CancelAnimationFrame"]||window[q[Y]+"CancelRequestAnimationFrame"];H||(H=function(t){var e=(new Date).getTime(),n=Math.max(0,16-(e-U)),i=window.setTimeout(function(){t(e+n)},n);return U=e+n,i}),K||(K=function(t){clearTimeout(t)});var J={props:{height:{type:Number,default:150},bottom:{type:Number,default:30},right:{type:Number,default:30},duration:{type:Number,default:1e3}},data:function(){return{visible:!1}},computed:{classes:function(){return["backTop",z()({},"backTop-show",this.visible)]},styles:function(){return{bottom:this.bottom+"px",right:this.right+"px"}},innerClasses:function(){return"backTop-inner"}},methods:{scrollTop:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:500,a=Math.abs(t-n);!function t(n,i,a){if(n!==i){var o=n-a<i?i:n-a;window.scrollTo(o,o),H(function(){return t(o,i,a)})}else e.$emit("complete")}(t,n,Math.ceil(a/i*50))},handleScroll:function(){this.visible=window.pageYOffset>=this.height},back:function(){var t=window.pageYOffset;this.scrollTop(t,0,this.duration),this.$emit("onClick")}},mounted:function(){document.addEventListener("scroll",this.handleScroll,!1),window.addEventListener("resize",this.handleScroll,!1)},beforeDestroy:function(){document.removeEventListener("scroll",this.handleScroll,!1),document.removeEventListener("resize",this.handleScroll,!1)}},W={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:this.classes,style:this.styles,on:{click:this.back}},[this._t("default",[e("div",{class:this.innerClasses},[e("i",{staticClass:"el-icon-arrow-up"})])])],2)},staticRenderFns:[]};var Z=n("vSla")(J,W,!1,function(t){n("x/6U")},null,null).exports,G={props:{startVal:{type:Number,default:0},endVal:{type:Number,default:function(){return(new Date).getFullYear()}},duration:{type:Number,default:3e3},autoplay:{type:Boolean,default:!0},prefix:{type:String,default:""},suffix:{type:String,default:""},separator:{type:String,default:","},decimals:{type:Number,default:0,validator:function(t){return t>=0}},decimal:{type:String,default:"."},ease:{type:Boolean,default:!0},easeMethod:{type:Function,default:function(t,e,n,i){return n*(1-Math.pow(2,-10*t/i))*1024/1023+e}}},data:function(){return{localStartVal:this.startVal,localDuration:this.duration,displayValue:this.formatNumber(this.startVal),printVal:null,isPause:!1,startTime:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},methods:{count:function(t){this.startTime||(this.startTime=t);var e=t-this.startTime;this.remaining=this.localDuration-e>0?this.localDuration-e:0,this.ease?this.countDown?this.printVal=this.localStartVal-this.easeMethod(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easeMethod(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.endVal-this.localStartVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=H(this.count):this.$emit("complete",this.displayValue)},start:function(){this.isPause=!1,this.startTime=null,this.localStartVal=this.startVal,this.localDuration=this.duration,this.rAF=H(this.count)},pause:function(){this.isPause=!0,K(this.rAF)},resume:function(){this.remaining>0&&(this.isPause=!1,this.startTime=null,this.localStartVal=this.printVal,this.localDuration=this.remaining,H(this.count))},reset:function(){this.startTime=null,K(this.rAF),this.displayValue=this.formatNumber(this.startVal)},pauseResume:function(){this.isPause?this.resume():this.pause()},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals);var e=(t+="").split("."),n=e[0],i=e.length>1?this.decimal+e[1]:"",a=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;a.test(n);)n=n.replace(a,"$1"+this.separator+"$2");return this.prefix+n+i+this.suffix}},mounted:function(){this.autoplay&&this.start()},beforeDestroy:function(){K(this.rAF)}},Q={render:function(){var t=this.$createElement;return(this._self._c||t)("span",[this._v("\n    "+this._s(this.displayValue)+"\n")])},staticRenderFns:[]},X=n("vSla")(G,Q,!1,null,null,null).exports,tt={props:{visible:[Boolean,String],reload:Function}},et={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.visible?n("div",[!0===t.visible?n("div",{staticClass:"loading"},[t._t("default",[n("i",{staticClass:"el-icon-loading"}),t._v("数据加载中...")])],2):"nothing"===t.visible?n("div",{staticClass:"nothing"},[t._t("nothing",[t._v("没有符合条件的数据")])],2):"error"===t.visible?n("div",{staticClass:"error",on:{click:function(e){return e.stopPropagation(),t.reload(e)}}},[t._t("error",[n("i",{staticClass:"el-icon-error"}),t._v("请求错误，点击重新加载")])],2):t._e()]):t._e()},staticRenderFns:[]};var nt=n("vSla")(tt,et,!1,function(t){n("eqoZ")},"data-v-6f9a1a17",null).exports,it=n("KsN1"),at=n("hRKE"),ot=n.n(at);function rt(t){return t>=1e4?(t/1e4).toFixed(1)+"万":t}function st(t,e){if(0===arguments.length)return null;10===(t+"").length&&(t=1e3*+t);var n=e||"{y}-{m}-{d} {h}:{i}:{s}",i=void 0,a={y:(i="object"===(void 0===t?"undefined":ot()(t))?t:new Date(parseInt(t))).getFullYear(),m:i.getMonth()+1,d:i.getDate(),h:i.getHours(),i:i.getMinutes(),s:i.getSeconds(),a:i.getDay()};return n.replace(/{(y|m|d|h|i|s|a)+}/g,function(t,e){var n=a[e];return"a"===e?["一","二","三","四","五","六","日"][n-1]:(t.length>0&&n<10&&(n="0"+n),n||0)})}function ct(t,e){t=1e3*+t;var n=new Date(t),i=(Date.now()-n)/1e3;return i<30?"刚刚":i<3600?Math.ceil(i/60)+"分钟前":i<86400?Math.ceil(i/3600)+"小时前":i<172800?"1天前":e?st(t,e):n.getMonth()+1+"月"+n.getDate()+"日"+n.getHours()+"时"+n.getMinutes()+"分"}r.default.component("wl-breadcrumb",P),r.default.component("wl-sticky",B),r.default.component("wl-back-top",Z),r.default.component("wl-countTo",X),r.default.component("wl-loading",nt),r.default.component("wl-menu-item",it.default),r.default.config.productionTip=!1,r.default.prototype.$http=m.a,r.default.use(f.a,{size:"small"}),r.default.use(g.a,{color:"#29F",failedColor:"red",thickness:"2px"}),r.default.use(w.a),o()(i).forEach(function(t){r.default.filter(t,i[t])}),new r.default({el:"#app",router:u.a,store:l.a,render:function(t){return t(c)}})},Opzk:function(t,e,n){var i={"./404/404.vue":["23Cv",10],"./aside/index.vue":["8Uo4",11],"./ball/balls.vue":["RLK1",0],"./ball/cart.vue":["z+Og",0,22],"./ball/index.vue":["rSv8",9,0],"./ball/list.vue":["lw2A",21],"./form/form.vue":["/joN",4,0],"./form/preview.vue":["FRNf",18],"./form/selectPicture.vue":["xYSr",13],"./form/uploadPicture.vue":["4hqv",6,0],"./home/components/card.vue":["xViV",15],"./home/components/chart.vue":["K92U",3],"./home/components/todo.vue":["n3SW",16],"./home/index.vue":["KR8f",2],"./layout/index.vue":["6f/g",8,0],"./layout/menu.vue":["NccL",0,12],"./layout/menuItem.vue":["KsN1"],"./layout/page.vue":["zHeO",20],"./layout/view.vue":["J+X9",1],"./loadmore/index.vue":["NkOT",17],"./login/index.vue":["T+/8",0,19],"./table/index.vue":["YBQJ",5,0],"./table/table.vue":["GMSx",7,0],"./update/index.vue":["nKAQ",14]};function a(t){var e=i[t];return e?Promise.all(e.slice(1).map(n.e)).then(function(){return n(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}a.keys=function(){return Object.keys(i)},a.id="Opzk",t.exports=a},"SPU+":function(t,e){},TuU3:function(t,e,n){"use strict";var i=n("3cXf"),a=n.n(i),o=n("uAC3"),r=n.n(o);e.a={getToken:function(){return r.a.get("token")},setToken:function(t){return r.a.set("token",t,{expires:7})},removeToken:function(){return r.a.remove("token")},getSession:function(t){if(t)return window.sessionStorage.getItem(t)},setSession:function(t,e){t&&("string"!=typeof e&&(e=a()(e)),window.sessionStorage.setItem(t,e))},removeSession:function(t){t&&window.sessionStorage.removeItem(t)},getLocal:function(t){if(t)return window.localStorage.getItem(t)},setLocal:function(t,e){t&&("string"!=typeof e&&(e=a()(e)),window.localStorage.setItem(t,e))},removeLocal:function(t){t&&window.localStorage.removeItem(t)}}},UfKn:function(t,e){},YaEn:function(t,e,n){"use strict";n.d(e,"b",function(){return s});var i=n("IvJb"),a=n("zO6J");i.default.use(a.a);var o=n("A66B"),r=function(){return n.e(1).then(n.bind(null,"J+X9"))},s=[{path:"/",redirect:"/index"},{name:"首页",path:"/index",redirect:"index/home/crm/b",meta:{login:!0},component:o("layout/index"),children:[{name:"营销",path:"home",icon:"i-icon-formdata",component:r,children:[{name:"CRM",path:"crm",icon:"i-icon-dashboard",component:r,children:[{name:"统计分析",path:"b",icon:"i-icon-echart",component:o("home/index")},{name:"客户管理",path:"a",icon:"i-icon-table",component:o("table/index")}]},{name:"公司相关",path:"plugins",icon:"i-icon-product",component:r,children:[{name:"公司介绍",path:"a",icon:"i-icon-home",component:o("aside/index")},{name:"设计团队",path:"b",icon:"i-icon-peoples",component:o("form/form")}]}]},{name:"客户",path:"customer",icon:"i-icon-people",component:r,children:[{name:"用户管理",path:"a",icon:"i-icon-home",component:o("loadmore/index")},{name:"客户相关",path:"b",icon:"i-icon-peoples",component:o("ball/index")}]},{name:"设计",path:"electric",icon:"i-icon-edit",component:r,children:[{name:"设计人员",path:"a",icon:"i-icon-home",component:o("table/index")}]},{name:"合同",path:"sms",component:r,children:[{name:"合同标题",path:"a",icon:"i-icon-home",component:o("table/index")}]},{name:"工程",path:"project",component:r,children:[{name:"工程标题",path:"a",icon:"i-icon-home",component:o("update/index")}]},{name:"材料",path:"material",component:r,children:[{name:"材料标题",path:"a",icon:"i-icon-home",component:o("update/index")}]},{name:"成控",path:"control",component:r,children:[{name:"成控标题",path:"a",icon:"i-icon-home",component:o("update/index")}]},{name:"报表",path:"excel",component:r,children:[{name:"报表标题",path:"a",icon:"i-icon-home",component:o("update/index")}]},{name:"设置",path:"setup",component:r,children:[{name:"设置标题",path:"a",icon:"i-icon-home",component:o("update/index")}]}]},{name:"login",path:"/login",component:o("login/index")},{path:"/404",component:o("404/404")},{path:"*",redirect:"/404"}];e.a=new a.a({mode:"history",scrollBehavior:function(){return{y:0}},routes:s})},bgbq:function(t,e){},dRIH:function(t,e){},dahE:function(t,e,n){"use strict";var i={name:"hamburger",props:{isActive:{type:Boolean,default:!1},toggleClick:{type:Function,default:null}}},a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hamburger"},[e("i",{staticClass:"i-icon-menu",class:{"is-active":this.isActive},on:{click:this.toggleClick}})])},staticRenderFns:[]};var o=n("vSla")(i,a,!1,function(t){n("IE+w")},"data-v-a9f0f32a",null);e.a=o.exports},eqoZ:function(t,e){},vLgD:function(t,e,n){"use strict";n.d(e,"a",function(){return w}),n.d(e,"b",function(){return k});var i=n("lC5x"),a=n.n(i),o=n("J0Oq"),r=n.n(o),s=n("rVsN"),c=n.n(s),u=n("aA9S"),l=n.n(u),d=n("aozt"),h=n.n(d),m=n("6iV/"),p=n.n(m),f=n("IcnI"),v=n("Axgm"),g=(n.n(v),n("TuU3")),b=this,w=h.a.create({baseURL:"https://api-prod",timeout:5e3});w.interceptors.request.use(function(t){f.a.getters.token&&(t.headers.auth_token=g.a.getToken()),t.headers={"Content-Type":"application/x-www-form-urlencoded"};var e={auth_token:g.a.getToken(),timestamp:Date.parse(new Date)/1e3,nonce:Math.random().toString(36).substr(2)};return l()(t.headers,e),t},function(t){console.log(t),c.a.reject(t)}),w.interceptors.response.use(function(t){var e=t.data;return e&&e.error?c.a.reject(e.error):t},function(t){return Object(v.Message)({message:t.message,type:"error",duration:5e3}),c.a.reject(t)});var y,k=(y=r()(a.a.mark(function t(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=void 0,"GET"!==(i=i.toUpperCase())){t.next=7;break}return t.next=5,w.get(n,{params:o}).then(function(t){e=t.data});case 5:t.next=10;break;case 7:if("POST"!==i){t.next=10;break}return t.next=10,w.post(n,p.a.stringify(o)).then(function(t){e=t.data});case 10:return t.abrupt("return",e);case 11:case"end":return t.stop()}},t,b)})),function(){return y.apply(this,arguments)})},"x/6U":function(t,e){}},["NHnr"]);