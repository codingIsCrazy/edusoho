webpackJsonp([18],{"/eQD":function(e,t){},AmHV:function(e,t){},CMvz:function(e,t){},"Du/2":function(e,t,n){"use strict";n.d(t,"j",function(){return r}),n.d(t,"l",function(){return a}),n.d(t,"m",function(){return o}),n.d(t,"k",function(){return i}),n.d(t,"c",function(){return u}),n.d(t,"f",function(){return s}),n.d(t,"b",function(){return c}),n.d(t,"d",function(){return l}),n.d(t,"h",function(){return m}),n.d(t,"a",function(){return d}),n.d(t,"i",function(){return f}),n.d(t,"g",function(){return p}),n.d(t,"e",function(){return h});var r="UPDATE_LOADING_STATUS",a="USER_LOGIN",o="USER_LOGOUT",i="USER_INFO",u="GET_SETTINGS",s="SET_NAVBAR_TITLE",c="GET_COURSE_DETAIL",l="JOIN_COURSE",m="SET_SOURCETYPE",d="ADD_USER",f="SMS_CENTER",p="SET_NICKNAME",h="SET_AVATAR"},GrYt:function(e,t){},"H/op":function(e,t){},IcnI:function(e,t,n){"use strict";var r={};n.d(r,"isStudent",function(){return c}),n.d(r,"isTeacher",function(){return l}),n.d(r,"isAdmin",function(){return m}),n.d(r,"isSuperAdmin",function(){return d});var a={};n.d(a,"updateLoading",function(){return v}),n.d(a,"userLogin",function(){return S}),n.d(a,"getUserInfo",function(){return b}),n.d(a,"addUser",function(){return T}),n.d(a,"sendSmsCenter",function(){return _}),n.d(a,"setNickname",function(){return I}),n.d(a,"setAvatar",function(){return k}),n.d(a,"getGlobalSettings",function(){return E});var o,i,u=n("NYxO"),s=n("7+uW"),c=function(e){return(e.user.roles||[]).includes("ROLE_USER")},l=function(e){return(e.user.roles||[]).includes("ROLE_TEACHER")},m=function(e){return(e.user.roles||[]).includes("ROLE_ADMIN")},d=function(e){return(e.user.roles||[]).includes("ROLE_SUPER_ADMIN")},f=n("//Fk"),p=n.n(f),h=n("Du/2"),g=n("gyMJ"),v=function(e,t){var n=e.commit,r=t.isLoading;n(h.j,{isLoading:r})},S=function(e,t){var n=e.commit,r=t.username,a=t.password;return localStorage.setItem("Authorization",btoa(unescape(encodeURIComponent(r+":"+a)))),g.a.login({headers:{Authorization:"Basic "+localStorage.getItem("Authorization")}}).then(function(e){return n(h.l,e),e})},b=function(e){var t=e.commit;return g.a.getUserInfo({}).then(function(e){return t(h.k,e),e})},T=function(e,t){var n=e.commit;return new p.a(function(e,r){g.a.addUser({data:t}).then(function(t){return n(h.a,t),e(t),t}).catch(function(e){return r(e)})})},_=function(e,t){var n=e.commit;return new p.a(function(e,r){g.a.getSmsCenter({data:t}).then(function(t){return n(h.i),e(t),t}).catch(function(e){return r(e)})})},I=function(e,t){var n=e.commit,r=t.nickname;return new p.a(function(e,t){g.a.setNickname({data:{nickname:r}}).then(function(t){return n(h.g,t),e(t),t}).catch(function(e){return t(e)})})},k=function(e,t){var n=e.commit,r=t.avatarId;return new p.a(function(e,t){g.a.setAvatar({data:{avatarId:r}}).then(function(t){return n(h.g,t),e(t),t}).catch(function(e){return t(e)})})},E=function(e,t){var n=e.commit,r=t.type;return new p.a(function(e,t){g.a.getSettings({query:{type:r}}).then(function(t){return document.title=t.name,n(h.c,t),e(t),t}).catch(function(e){return t(e)})})},y=n("bOdI"),A=n.n(y),O=n("woOf"),w=n.n(O),P=n("mvHQ"),N=n.n(P),D=(o={},A()(o,h.j,function(e,t){e.isLoading=t}),A()(o,h.l,function(e,t){e.token=t.token,e.user=t.user,localStorage.setItem("token",t.token),localStorage.setItem("user",N()(t.user))}),A()(o,h.m,function(e){e.token=null,e.user={},localStorage.removeItem("token"),localStorage.removeItem("user")}),A()(o,h.k,function(e,t){e.user=t,localStorage.setItem("user",N()(t))}),A()(o,h.a,function(e,t){e.user=t,localStorage.setItem("user",N()(t))}),A()(o,h.i,function(e,t){e.smsToken=t}),A()(o,h.g,function(e,t){e.user=w()({},e.user,{nickname:t.nickname}),localStorage.setItem("user",N()(t))}),A()(o,h.e,function(e,t){e.user=t,localStorage.setItem("user",N()(t))}),A()(o,h.c,function(e,t){e.settings=t}),A()(o,h.f,function(e,t){e.title=t}),o),U={namespaced:!0,state:{selectedPlanId:0,joinStatus:!1,sourceType:"img",details:{},taskId:0},actions:{getCourseDetail:function(e,t){var n=e.commit,r=t.courseId;return g.a.getCourseDetail({query:{courseId:r}}).then(function(e){return n(h.b,e),e})},joinCourse:function(e,t){var n=e.commit,r=t.id;return g.a.joinCourse({query:{id:r}}).then(function(e){return n(h.d,e),e})}},mutations:(i={},A()(i,h.b,function(e,t){e.selectedPlanId=t.id,e.details=t,e.joinStatus="member.member_exist"===t.access.code,e.sourceType="img"}),A()(i,h.d,function(e){e.joinStatus=!0}),A()(i,h.h,function(e,t){e.sourceType=t.sourceType,e.taskId=t.taskId}),i)};s.a.use(u.a);t.a=new u.a.Store({state:{isLoading:!1,token:null,user:{},smsToken:"",settings:{},title:""},getters:r,actions:a,mutations:D,modules:{course:U}})},"Ll/l":function(e,t){},"NHd/":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={};n.d(r,"formatTime",function(){return b}),n.d(r,"formatTimeByNumber",function(){return S});n("jti4");var a=n("uk7J"),o=(n("nOaS"),n("pIDD")),i=(n("MY4N"),n("0zAV")),u=(n("jAcA"),n("86U2")),s=(n("yIEv"),n("OIh9")),c=(n("3Lne"),n("SSsa")),l=(n("9++/"),n("QhyB")),m=(n("zP7x"),n("rD0v")),d=(n("3AsM"),n("7ZPY")),f=(n("1E9F"),n("2Ux5")),p=(n("RgoE"),n("0KWt")),h=(n("FO5P"),n("woHG")),g=n("7+uW"),v=n("YaEn"),S=function(e){if((e=parseInt(e,10))<0)return e;var t=parseInt(e/3600,10);e%=3600;var n=parseInt(e/60,10),r=e%=60;return t<=0?[n,r].map(function(e){return(e=e.toString())[1]?e:"0"+e}).join(":"):[t,n,r].map(function(e){return(e=e.toString())[1]?e:"0"+e}).join(":")},b=function(e){var t=e.getFullYear(),n=e.getMonth()+1,r=e.getDate(),a=e.getHours(),o=e.getMinutes(),i=e.getSeconds();return[t,n,r].map(function(e){return(e=e.toString())[1]?e:"0"+e}).join("/")+" "+[a,o,i].map(function(e){return(e=e.toString())[1]?e:"0"+e}).join(":")},T=[{name:"toMoney",handler:function(e){return isNaN(Number(e))?"0.00":(Number(e)/100).toFixed(2)}},{name:"isFree",handler:function(e){return e?"value":"免费"}},{name:"taskType",handler:function(e){switch(e){case"video":e="视频";break;case"audio":e="音频";break;case"live":e="直播";break;case"text":e="图文";break;case"ppt":case"doc":e="文档";break;default:e="暂不支持此类型"}return e}},{name:"filterTask",handler:function(e){switch(e.type){case"video":case"audio":return"self"!==e.mediaSource&&"audio"!==e.type?"":" | 时长:  "+S(e.length);case"live":return"";case"text":case"doc":default:return""}}},{name:"filterJoinStatus",handler:function(e){switch(e){case"success":case"user.not_login":e="加入学习";break;case"user.locked":e="用户被锁";break;case"course.unpublished":e="课程未发布";break;case"course.closed":e="课程已关闭";break;case"course.not_buyable":e="课程不可加入";break;case"course.buy_expired":e="购买有效期已过 ";break;case"course.expired":e="学习有效期已过";break;case"course.only_vip_join_way":e="只能通过VIP加入"}return e}},{name:"filterOrderStatus",handler:function(e){switch(e){case"created":e="去支付";break;case"success":e="已付款";break;case"refunded":e="退款成功";break;case"finished":e="交易成功";break;case"closed":e="交易关闭";break;case"paid":e="已付款"}return e}}],_={install:function(e){T.map(function(t){return e.filter(t.name,t.handler),t})}},I={RULES:n("SgDA").a,DateToolkit:r},k=n("IcnI"),E=n("AmHV"),y=n.n(E),A={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"e-panel"},[t("div",{directives:[{name:"show",rawName:"v-show",value:!this.hiddeTitle,expression:"!hiddeTitle"}],staticClass:"e-panel-heading"},[this._v(this._s(this.title))]),this._v(" "),t("div",{staticClass:"e-panel-body"},[this._t("default",[this._v("\n      暂无简介\n    ")])],2)])},staticRenderFns:[]},O=n("VU/8")({name:"e-panel",props:["title","hidde-title"]},A,!1,null,null,null).exports,w={render:function(){var e=this.$createElement;return(this._self._c||e)("footer",{staticClass:"footer-bar"},[this._t("default")],2)},staticRenderFns:[]},P=n("VU/8")(null,w,!1,null,null,null).exports,N={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"loading"},[t("van-loading",{attrs:{type:"spinner",color:"white",size:"40px"}})],1)},staticRenderFns:[]};var D=n("VU/8")(null,N,!1,function(e){n("Zy+P")},null,null).exports,U={install:function(e){e.component("e-panel",O),e.component("e-footer",P),e.component("e-loading",D)}},C=(n("CMvz"),n("H/op"),n("Dd8w")),L=n.n(C),G=n("gyMJ"),R=n("Du/2"),j=n("NYxO"),x={data:function(){return{showLeftArrow:!1}},methods:L()({},Object(j.c)({setNavbarTitle:R.f})),computed:L()({},Object(j.d)(["title"])),watch:{$route:{handler:function(e){var t=e.query.redirect||"";this.showLeftArrow=!["my","find","learning","prelogin"].includes(e.name),"learning"!==t?this.setNavbarTitle(e.meta.title):this.setNavbarTitle("我的学习")}}}},M={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("van-nav-bar",{staticClass:"nav-bar",attrs:{title:e.title,"left-arrow":e.showLeftArrow},on:{"click-left":function(t){e.$router.go(-1)}}}),e._v(" "),n("router-view")],1)},staticRenderFns:[]},F=n("VU/8")(x,M,!1,null,null,null).exports;g.a.component("van-nav-bar",h.a),g.a.component("van-tabbar",p.a),g.a.component("van-tabbar-item",f.a),g.a.component("van-swipe",d.a),g.a.component("van-swipe-item",m.a),g.a.component("van-list",l.a),g.a.component("van-button",c.a),g.a.component("van-tab",s.a),g.a.component("van-tabs",u.a),g.a.component("van-field",i.a),g.a.component("van-loading",o.a),g.a.component("van-uploader",a.a),g.a.use(_),g.a.use(y.a),g.a.use(I),g.a.use(U),g.a.config.productionTip=!1,G.a.getSettings({query:{type:"wap"}}).then(function(e){if(2===parseInt(e.version)){var t;new g.a({el:"#app",router:v.a,store:k.a,components:{App:F},template:"<App/>"})}else{var n=location.hash;window.location.href=location.origin+(-1===(t=n).indexOf("?")?t.slice(1):t.match(/#.*\?/g)[0].slice(1,-1))}})},SgDA:function(e,t,n){"use strict";t.a={phone:{message:"请输入正确的手机号",validator:function(e){return/^1\d{10}$/.test(e)}},mobile:{message:"请输入正确的手机号",validator:function(e){return/^1\d{10}$/.test(e)}},encrypt_password:{message:"最小需要输入5个字符",validator:function(e){return/^[\S]{5,20}$/i.test(e)}},email:{message:"请输入正确的邮箱",validator:function(e){return/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.tes(e)}}}},Sji2:function(e,t){},YaEn:function(e,t,n){"use strict";var r=n("fZjL"),a=n.n(r),o=n("Gu7T"),i=n.n(o),u=n("7+uW"),s=n("IcnI"),c=n("Du/2"),l=n("/ocq"),m=[{path:"/",name:"find",meta:{title:""},component:function(){return Promise.all([n.e(0),n.e(15)]).then(n.bind(null,"oS40"))}}],d=[{path:"/my/courses/learning",name:"learning",meta:{title:"我的学习"},component:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"l5Ph"))}}],f=[{path:"/my/orders",name:"my",meta:{title:"我的"},component:function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,"SOOt"))}}];u.a.use(l.a);var p=[{path:"/",meta:{title:""},component:function(){return n.e(14).then(n.bind(null,"NFKP"))},children:[].concat(i()(m),i()(d),i()(f),[{path:"/prelogin",name:"prelogin",meta:{title:"我的"},component:function(){return n.e(12).then(n.bind(null,"kxIp"))}}])},{path:"/login",name:"login",meta:{title:""},component:function(){return Promise.all([n.e(0),n.e(13)]).then(n.bind(null,"ZNO8"))}},{path:"/register",name:"register",meta:{title:""},component:function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"qtn/"))}},{path:"/protocol",name:"protocol",meta:{title:""},component:function(){return n.e(8).then(n.bind(null,"gYLh"))}},{path:"/settings",name:"my_setting",meta:{title:"设置"},component:function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"odi1"))}},{path:"/setting/nickname",name:"setting_nickname",meta:{title:"昵称设置"},component:function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"cyWR"))}},{path:"/course/try",name:"course_try",component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"P8if"))}},{path:"/course/web",name:"course_web",component:function(){return Promise.all([n.e(0),n.e(16)]).then(n.bind(null,"pEIs"))}},{path:"/course/explore",name:"more",meta:{title:""},component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"zl+l"))}},{path:"/course/:id",name:"course",meta:{title:"课程详情"},component:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"f0vb"))}},{path:"/order/:id",name:"order",meta:{title:"确认订单"},component:function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"Jpvt"))}},{path:"/pay",name:"pay",meta:{title:"订单支付"},component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"NDEt"))}},{path:"/weixin_pay",name:"wxpay",meta:{title:"微信支付"},component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"GQcO"))}}];localStorage.getItem("token")&&s.a.commit(c.l,{token:localStorage.getItem("token"),user:JSON.parse(localStorage.getItem("user"))});var h=new l.a({routes:p});h.beforeEach(function(e,t,n){a()(s.a.state.settings).length?["register","login","protocol","find"].includes(e.name)?(e.meta.title=s.a.state.settings.name,n()):n():s.a.dispatch("getGlobalSettings",{type:"site"}).then(function(t){"find"===e.name&&(e.meta.title=t.name),n()})});t.a=h},"Zy+P":function(e,t){},f4F5:function(e,t){},gyMJ:function(e,t,n){"use strict";var r=n("woOf"),a=n.n(r),o=n("mtWM"),i=n.n(o),u=[{name:"login",url:"/tokens",method:"POST"},{name:"getSmsCenter",url:"/sms_center",method:"POST"},{name:"addUser",url:"/user",method:"POST"},{name:"getCourse",url:"/course_sets/{courseId}",method:"GET"},{name:"discoveries",url:"/pages/h5/discoveries",method:"GET"},{name:"dragCaptcha",url:"/drag_captcha",method:"POST"},{name:"dragValidate",url:"/drag_captcha/{token}",method:"GET"},{name:"getUserInfo",url:"/me",method:"GET"},{name:"setAvatar",url:"/me",method:"PATCH"},{name:"setNickname",url:"/me/nicknames/h5",method:"PATCH"},{name:"updateFile",url:"/files",method:"POST"},{name:"getMyOrder",url:"/me/orders",method:"GET"},{name:"confirmOrder",url:"/order_infos",method:"POST"},{name:"createOrder",url:"/orders",method:"POST"},{name:"createTrade",url:"/trades",method:"POST"},{name:"getOrderDetail",url:"/orders/{sn}",method:"GET"},{name:"getCourseDetail",url:"/pages/h5/courses/{courseId}",method:"GET"},{name:"myStudyState",url:"/me/courses",method:"GET"},{name:"joinCourse",url:"/courses/{id}/members",method:"POST"},{name:"getMedia",url:"/courses/{courseId}/task_medias/{taskId}",method:"GET"},{name:"getSelectItems",url:"/pages/h5/settings/course"},{name:"getCourseList",url:"/courses"},{name:"getCourseSets",url:"/course_sets"},{name:"getSettings",url:"/settings/{type}",method:"GET"},{name:"getTrade",url:"/trades/{tradesSn}",method:"GET"}],s=n("//Fk"),c=n.n(s),l=n("IcnI"),m=n("YaEn"),d=n("Du/2"),f=5;i.a.interceptors.request.use(function(e){return e.headers.Accept="application/vnd.edusoho.v2+json",e.headers.SessionIgnore=1,l.a.state.token&&(e.headers["X-Auth-Token"]=l.a.state.token),l.a.commit("UPDATE_LOADING_STATUS",!0),e},function(e){return c.a.reject(e)}),i.a.interceptors.response.use(function(e){return l.a.commit("UPDATE_LOADING_STATUS",!1),e.data},function(e){switch(l.a.commit("UPDATE_LOADING_STATUS",!1),e.response.status){case 401:e.response.data.error.code===f&&(l.a.commit(d.m),m.a.replace({name:"login",query:{redirect:m.a.currentRoute.name}}))}return c.a.reject(e.response.data.error)});var p={};u.map(function(e){return p[e.name]=function(t){var n=e.url;return n=t&&t.query?function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n="";return e.split("/").map(function(e){if(/^{[^({|})]*}$/.test(e)){if(e=e.replace("{","").replace("}",""),void 0===t[e])throw new Error("query "+e+" is undefined");e=t[e]}return n=n+e+"/",e}),n.substring(0,n.length-1)}(n,t.query):n,n=e.noPrefix?n:function(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/api")+e}(n),i()(a()({},e,t,{url:n}))},e});t.a=p},mx3f:function(e,t){},znX2:function(e,t){}},["NHnr"]);