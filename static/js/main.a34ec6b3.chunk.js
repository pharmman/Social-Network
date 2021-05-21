(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[0],{10:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return l}));var r=n(6),a=n(134),o=n.n(a).a.create({withCredentials:!0,headers:{"API-KEY":"ea1464d3-6693-4a83-9755-2421f1dd088c"},baseURL:"https://social-network.samuraijs.com/api/1.0/"}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return o.get("users?count=".concat(t,"&page=").concat(e)).then((function(e){return e.data}))}},i={follow:function(e){return o.post("follow/".concat(e)).then((function(e){return e.data}))},unFollow:function(e){return o.delete("follow/".concat(e)).then((function(e){return e.data}))}},u={getProfile:function(e){return o.get("profile/".concat(e)).then((function(e){return e.data}))},getProfileStatus:function(e){return o.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateProfileStatus:function(e){return o.put("profile/status",{status:e}).then((function(e){return e.data}))},updateProfilePhoto:function(e){var t=new FormData;return t.append("photo",e),o.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},updateProfile:function(e){return o.put("profile",Object(r.a)({},e)).then((function(e){return e.data}))}},l={authMe:function(){return o.get("/auth/me").then((function(e){return e.data}))},login:function(e,t,n,r){return o.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r}).then((function(e){return e.data}))},logOut:function(){return o.delete("auth/login").then((function(e){return e.data}))},getCaptchaUrl:function(){return o.get("security/get-captcha-url").then((function(e){return e.data}))}}},12:function(e,t,n){e.exports={header:"Header_header__36jKL",leftSide:"Header_leftSide__2kPZ1",burgerMenu:"Header_burgerMenu__edcLE",headerLogoContainer:"Header_headerLogoContainer__2vtn0",rightSide:"Header_rightSide__3meJM",loginMenu:"Header_loginMenu__1CEA7",profileImgContainer:"Header_profileImgContainer__3LtCf",profileImg:"Header_profileImg__2fNSy",profileMenuHidden:"Header_profileMenuHidden__13oSg",profileMenuShow:"Header_profileMenuShow__28P6m",profileMenuAvatar:"Header_profileMenuAvatar__3hzc5",profileMenuImg:"Header_profileMenuImg__24kBE",profileUserName:"Header_profileUserName__lS7fG",loginButton:"Header_loginButton__1QYbi"}},127:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var r=n(33),a=n(6),o={textForNewMessage:"",dialogs:[{id:1,name:"Steve"},{id:2,name:"Tim"},{id:3,name:"Jhonny"},{id:4,name:"Andy"},{id:5,name:"Sasha"}],messages:[{id:1,message:"Hello"},{id:2,message:"How is your day?"},{id:3,message:"Introduce Iphone"},{id:4,message:"Introduce Ipad"},{id:5,message:"Google suck"}]},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DIALOGS/ADD-NEW-MESSAGE":return Object(a.a)({},e,{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:t.value}]),textForNewMessage:""});default:return e}},i=function(e){return{type:"DIALOGS/ADD-NEW-MESSAGE",value:e}}},130:function(e,t,n){"use strict";n.d(t,"f",(function(){return f})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return E})),n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return O})),n.d(t,"e",(function(){return S}));var r=n(7),a=n.n(r),o=n(13),c=n(33),i=n(6),u=n(10);function l(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}var s={users:[],totalUsersCount:0,currentPage:1,pageSize:10,isFetching:!1,followingInProgress:[]},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USERS/FOLLOW":return Object(i.a)({},e,{users:e.users.map((function(e){return e.id===t.id?Object(i.a)({},e,{followed:!0}):e}))});case"USERS/UNFOLLOW":return Object(i.a)({},e,{users:e.users.map((function(e){return e.id===t.id?Object(i.a)({},e,{followed:!1}):e}))});case"USERS/SET-USERS":return Object(i.a)({},e,{users:Object(c.a)(t.users)});case"USERS/SET-CURRENT-PAGE":return l("currentUsersPage",t.page),Object(i.a)({},e,{currentPage:t.page});case"USERS/SET-TOTAL-USERS-COUNT":return Object(i.a)({},e,{totalUsersCount:t.count});case"USERS/CHANGE-FETCHING-STATUS":return Object(i.a)({},e,{isFetching:t.fetching});case"USERS/TOGGLE-FOLLOWING-PROGRESS":return Object(i.a)({},e,{followingInProgress:t.followingProgress?[].concat(Object(c.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},d=function(e){return{type:"USERS/FOLLOW",id:e}},m=function(e){return{type:"USERS/UNFOLLOW",id:e}},p=function(e){return{type:"USERS/SET-CURRENT-PAGE",page:e}},E=function(e){return{type:"USERS/SET-TOTAL-USERS-COUNT",count:e}},g=function(e){return{type:"USERS/CHANGE-FETCHING-STATUS",fetching:e}},h=function(e,t){return{type:"USERS/TOGGLE-FOLLOWING-PROGRESS",followingProgress:e,userId:t}},b=function(e,t){return function(){var n=Object(o.a)(a.a.mark((function n(r){var o;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(g(!0)),n.next=3,u.d.getUsers(e,t);case 3:o=n.sent,r(p(e)),r(E(+o.totalCount)),r({type:"USERS/SET-USERS",users:o.items}),r(g(!1));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},v=function(){var e=Object(o.a)(a.a.mark((function e(t,n,r,o){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(h(!0,r)),e.next=3,n(r);case 3:0===e.sent.resultCode&&t(o(r)),t(h(!1,r));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),O=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(n,u.b.follow.bind(u.b),e,d);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(n,u.b.unFollow.bind(u.b),e,m);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},131:function(e,t,n){e.exports={navbar:"Navbar_navbar__F898k"}},132:function(e,t){e.exports="data:image/png;base64,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"},137:function(e,t,n){e.exports={lds_grid:"Preloader_lds_grid__lJrG2","lds-grid":"Preloader_lds-grid__32jtE"}},138:function(e,t,n){e.exports={text:"ConstructionPage_text__3To9Z"}},165:function(e,t,n){e.exports=n(291)},170:function(e,t,n){},23:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return d}));var r=n(86),a=n(87),o=n(0),c=n.n(o),i=n(24),u=n.n(i),l=function(e){var t=e.meta,n=t.touched&&t.error;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:n?u.a.error:""},e.children),c.a.createElement("div",null,n&&c.a.createElement("span",{className:u.a.errorSpan},t.error)))},s=function(e){var t=e.input,n=e.meta,a=Object(r.a)(e,["input","meta"]);return c.a.createElement(l,{input:t,meta:n},c.a.createElement("textarea",Object.assign({},t,a)))},f=function(e){var t=e.input,n=e.meta,a=Object(r.a)(e,["input","meta"]);return c.a.createElement(l,{input:t,meta:n},c.a.createElement("input",Object.assign({},t,a)))},d=function(e,t,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return c.a.createElement(c.a.Fragment,null,c.a.createElement(a.a,{type:r,validate:o,placeholder:e,name:t,component:n}),c.a.createElement("span",null,i))}},24:function(e,t,n){e.exports={error:"FormControls_error__SafJ6",errorSpan:"FormControls_errorSpan__2gy5U",commonError:"FormControls_commonError__dMkCY",text:"FormControls_text__13LLO"}},291:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(0),a=n.n(r),o=n(64),c=n.n(o),i=n(22),u=n(51),l=n(52),s=n(62),f=n(63),d=(n(170),n(131)),m=n.n(d),p=n(88),E=n.n(p),g=n(40),h=function(e){var t=e.linkName,n=e.link,r=e.icon;return a.a.createElement("li",{className:E.a.link},a.a.createElement(i.b,{to:n,activeClassName:E.a.activeLink},a.a.createElement(g.a,{icon:r,size:"lg"}),a.a.createElement("span",null,t)))},b=n(19);function v(){return a.a.createElement("nav",{className:m.a.navbar},a.a.createElement("ul",null,a.a.createElement(h,{linkName:"Profile",link:"/profile",icon:b.f}),a.a.createElement(h,{linkName:"Messages",link:"/dialogs",icon:b.e}),a.a.createElement(h,{linkName:"News",link:"/news",icon:b.h}),a.a.createElement(h,{linkName:"Music",link:"/music",icon:b.g}),a.a.createElement(h,{linkName:"Settings",link:"/settings",icon:b.d}),a.a.createElement(h,{linkName:"Users",link:"/users",icon:b.n}),a.a.createElement(h,{linkName:"Login",link:"/login",icon:b.k})))}var O=n(9),S=n(95),A=n(12),w=n.n(A),P=n(132),U=n.n(P),N=n(133);function j(e){var t=function(){e.logOutTC()},n=Object(r.useState)(!1),o=Object(S.a)(n,2),c=o[0],u=o[1];return a.a.createElement("header",{className:w.a.header},a.a.createElement("div",{className:w.a.leftSide},a.a.createElement("div",{className:w.a.burgerMenu},a.a.createElement(g.a,{onClick:t,icon:b.a,size:"lg"})),a.a.createElement("div",{className:w.a.headerLogoContainer},a.a.createElement(i.b,{to:"/"},a.a.createElement("img",{className:w.a.headerLogo,src:U.a,alt:"logo"})))),a.a.createElement("div",{className:w.a.rightSide},e.isAuth&&a.a.createElement("div",{className:w.a.loginMenu},a.a.createElement("div",{className:w.a.loginButton},a.a.createElement(g.a,{onClick:t,icon:b.l,size:"lg"})),a.a.createElement(N.a,{onClickAway:function(){c&&u(!1)}},a.a.createElement("div",{className:w.a.profileImgContainer},a.a.createElement("img",{onClick:function(){u(!c)},className:w.a.profileImg,src:e.profilePhoto,alt:"Profile"}),a.a.createElement("div",{className:c?w.a.profileMenuShow:w.a.profileMenuHidden},a.a.createElement("div",{className:w.a.profileMenuAvatar},a.a.createElement(i.b,{to:"/profile/:".concat(e.authorizedUserId,"?")},a.a.createElement("img",{className:w.a.profileMenuImg,src:e.profilePhoto,alt:"Profile"}))),a.a.createElement("div",{className:w.a.profileUserName},e.userName)))))))}var C=n(7),k=n.n(C),y=n(13),I=n(6),T=n(10),x=n(27),R={id:null,email:null,login:null,isAuth:!1,captchaUrl:""},L=function(e,t,n,r){return{type:"AUTH/SET-AUTH-DATA",payload:{id:e,email:t,login:n,isAuth:r}}},M=function(){return function(){var e=Object(y.a)(k.a.mark((function e(t){var n,r,a,o,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.authMe();case 2:0===(n=e.sent).resultCode&&(r=n.data,a=r.id,o=r.email,c=r.login,t(L(a,o,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},H=function(){return function(){var e=Object(y.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.logOut();case 2:0===e.sent.resultCode&&t(L(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},F=function(){return function(){var e=Object(y.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.getCaptchaUrl();case 2:n=e.sent,t({type:"AUTH/SET-CAPTCHA-URL",payload:{captchaUrl:n.url}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},G=n(16),W=n(65),J=function(e){Object(f.a)(n,e);var t=Object(s.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.isAuth&&this.props.authorizedUserId&&this.props.getUserProfile(this.props.authorizedUserId)}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(j,this.props))}}]),n}(a.a.Component),z=Object(G.b)((function(e){var t,n;return{isAuth:e.auth.isAuth,login:e.auth.login,authorizedUserId:e.auth.id,profilePhoto:null===(t=e.profilePage.profile)||void 0===t?void 0:t.photos.small,userName:null===(n=e.profilePage.profile)||void 0===n?void 0:n.fullName}}),{logOutTC:H,getUserProfile:W.b})(J),D=n(128),B=n(23),q=n(66),_=n(24),X=n.n(_),Z=Object(q.a)(30),V=Object(D.a)({form:"login",shouldValidate:function(e){}})((function(e){return console.log(e.error),a.a.createElement("form",{onSubmit:e.handleSubmit},a.a.createElement("p",{className:X.a.text},"To log in get registered",a.a.createElement("a",{href:"https://social-network.samuraijs.com/",target:"_blank",rel:"noopener noreferrer"}," here")),a.a.createElement("p",{className:X.a.text},"or use common test account credentials:"),a.a.createElement("p",{className:X.a.text},"Email: free@samuraijs.com"),a.a.createElement("p",{className:X.a.text},"Password: free"),Object(B.c)("Email","email",B.a,"email",[Z,q.b]),Object(B.c)("Password","password",B.a,"password",[Z,q.b]),Object(B.c)(null,"RememberMe",B.a,"checkbox",[]," Remember me"),a.a.createElement("div",null,e.captchaUrl&&a.a.createElement("img",{src:e.captchaUrl,alt:"captcha"})),a.a.createElement("div",null,e.captchaUrl&&Object(B.c)("Enter symbols form image","captcha",B.a,"text")),a.a.createElement("div",null,a.a.createElement("button",null,"Login")),a.a.createElement("div",null,e.error&&a.a.createElement("div",{className:X.a.commonError},e.error)))})),Q=Object(G.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{loginTC:function(e,t,n,r){return function(){var a=Object(y.a)(k.a.mark((function a(o){var c,i,u;return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,T.a.login(e,t,n,r);case 2:0===(c=a.sent).resultCode?o(M()):10===c.resultCode?(i=c.messages.length>0?c.messages[0]:"Email or password incorrect",o(Object(x.a)("login",{_error:i})),o(F())):(u=c.messages.length>0?c.messages[0]:"Email or password incorrect",o(Object(x.a)("login",{_error:u})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},logOutTC:H})((function(e){return e.isAuth?a.a.createElement(O.a,{to:"/Profile"}):a.a.createElement(V,{onSubmit:function(t){e.loginTC(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl})})),K={initialization:!1},Y=n(61),$=n(8);function ee(e){return function(t){return a.a.createElement(a.a.Suspense,{fallback:a.a.createElement(Y.a,null)},a.a.createElement(e,t))}}var te=n(138),ne=n.n(te),re=function(){return a.a.createElement("div",null,a.a.createElement("h2",{className:ne.a.text},"Coming soon"))},ae=function(){return a.a.createElement(re,null)},oe=function(){return a.a.createElement(re,null)},ce=function(){return a.a.createElement(re,null)},ie=a.a.lazy((function(){return n.e(4).then(n.bind(null,311))})),ue=a.a.lazy((function(){return n.e(5).then(n.bind(null,312))})),le=a.a.lazy((function(){return n.e(3).then(n.bind(null,310))})),se=function(e){Object(f.a)(n,e);var t=Object(s.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialization?a.a.createElement("div",null,a.a.createElement(z,null),a.a.createElement("div",{className:"appWrapper"},a.a.createElement(v,null),a.a.createElement("div",{className:"appMain"},a.a.createElement(O.d,null,a.a.createElement(O.b,{exact:!0,path:"/",render:function(){return a.a.createElement(O.a,{to:"/login"})}}),a.a.createElement(O.b,{exact:!0,path:"/Social-Network",render:function(){return a.a.createElement(O.a,{to:"/login"})}}),a.a.createElement(O.b,{path:"/dialogs",render:ee(ue)}),a.a.createElement(O.b,{path:"/news",render:function(){return a.a.createElement(ae,null)}}),a.a.createElement(O.b,{path:"/settings",render:function(){return a.a.createElement(oe,null)}}),a.a.createElement(O.b,{path:"/music",render:function(){return a.a.createElement(ce,null)}}),a.a.createElement(O.b,{path:"/profile/:userId?",render:ee(le)}),a.a.createElement(O.b,{path:"/users",render:ee(ie)}),a.a.createElement(O.b,{path:"/login",render:function(){return a.a.createElement(Q,null)}}),a.a.createElement(O.b,{path:"*",render:function(){return a.a.createElement(O.a,{to:"/404"})}}),a.a.createElement(O.b,{path:"404",render:function(){return a.a.createElement("h1",null,"Page not found")}}))))):a.a.createElement(Y.a,null)}}]),n}(a.a.Component),fe=Object($.d)(O.g,Object(G.b)((function(e){return{initialization:e.app.initialization}}),{getAuthUserData:M,initializeApp:function(){return function(e){e(M()).then((function(){e({type:"APP/SET-INITIALIZATION"})}))}}}))(se),de=n(127),me=n(130),pe=n(139),Ee=n(129),ge=Object($.c)({profilePage:W.c,dialogsPage:de.b,usersPage:me.f,auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH/SET-AUTH-DATA":case"AUTH/SET-CAPTCHA-URL":return Object(I.a)({},e,{},t.payload);default:return e}},form:Ee.a,app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SET-INITIALIZATION":return Object(I.a)({},e,{initialization:!0});default:return e}}}),he=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||$.d,be=Object($.e)(ge,he(Object($.a)(pe.a)));window.store=be,c.a.render(a.a.createElement(i.a,null,a.a.createElement(G.a,{store:be},a.a.createElement(fe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},61:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),a=n.n(r),o=n(137),c=n.n(o),i=function(){return a.a.createElement("div",{className:c.a.lds_grid},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))}},65:function(e,t,n){"use strict";n.d(t,"c",(function(){return f})),n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return p})),n.d(t,"f",(function(){return E})),n.d(t,"e",(function(){return g})),n.d(t,"d",(function(){return h}));var r=n(7),a=n.n(r),o=n(13),c=n(33),i=n(6),u=n(10),l=n(27),s={profile:null,messageForNewPost:"",status:"",posts:[{id:1,message:"Hi, how are you?",likesCount:12},{id:2,message:"It's my first post",likesCount:12},{id:3,message:"Yo Yo Yo",likesCount:12},{id:4,message:"It's revolution Jhonny!",likesCount:100500}]},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PROFILE/ADD-POST":return Object(i.a)({},e,{posts:[].concat(Object(c.a)(e.posts),[{id:5,message:t.value,likesCount:0}])});case"PROFILE/SET-PROFILE":return Object(i.a)({},e,{profile:t.profile});case"PROFILE/SET-PROFILE-STATUS":return Object(i.a)({},e,{status:t.status});case"PROFILE/DELETE-POST":return Object(i.a)({},e,{posts:e.posts.filter((function(e){return e.id!==t.id}))});case"PROFILE/UPDATE-PHOTO":return Object(i.a)({},e,{profile:Object(i.a)({},e.profile,{photos:Object(i.a)({},t.photos)})});case"PROFILE/UPDATE-PROFILE":return Object(i.a)({},e,{profile:t.profile});default:return e}},d=function(e){return{type:"PROFILE/SET-PROFILE-STATUS",status:e}},m=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.getProfileStatus(e);case 2:r=t.sent,n(d(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(t){u.c.getProfile(e).then((function(e){t({type:"PROFILE/SET-PROFILE",profile:e})}))}},E=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.updateProfileStatus(e);case 2:0===t.sent.resultCode&&n(d(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.updateProfilePhoto(e);case 2:0===(r=t.sent).resultCode&&n({type:"PROFILE/UPDATE-PHOTO",photos:r.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n,r){var o,c,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=null===(o=r().profilePage.profile)||void 0===o?void 0:o.userId,t.next=3,u.c.updateProfile(e);case 3:if(0!==(i=t.sent).resultCode){t.next=8;break}c&&n(p(c.toString())),t.next=10;break;case 8:return n(Object(l.a)("edit-profile",{_error:i.messages[0]})),t.abrupt("return",Promise.reject(i.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}},66:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){return e?void 0:"Required field"},a=function(e){return function(t){return t&&t.length>e?"Must be ".concat(e," characters or less"):void 0}}},88:function(e,t,n){e.exports={link:"Link_link__3bXki",activeLink:"Link_activeLink__2npe1"}}},[[165,1,2]]]);
//# sourceMappingURL=main.a34ec6b3.chunk.js.map