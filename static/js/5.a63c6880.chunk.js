(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[5],{292:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(86),s=t(0),i=t.n(s),l=t(16),o=t(9),r=function(e){return{isAuth:e.auth.isAuth}};function c(e){return Object(l.b)(r)((function(a){var t=a.isAuth,s=Object(n.a)(a,["isAuth"]);return t?i.a.createElement(e,s):i.a.createElement(o.a,{to:"/login"})}))}},298:function(e,a,t){e.exports={dialogName:"Dialog_dialogName__1tfS7",name:"Dialog_name__294Qh"}},299:function(e,a,t){e.exports={speechBubble:"Message_speechBubble__3FuJm"}},300:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__vq8c7",dialogs__button:"Dialogs_dialogs__button__3ky7C",title:"Dialogs_title__1dMkn",dialogsContainer:"Dialogs_dialogsContainer__5-z8X"}},312:function(e,a,t){"use strict";t.r(a);var n=t(127),s=t(0),i=t.n(s),l=t(298),o=t.n(l),r=t(22);function c(e){return i.a.createElement("div",{className:o.a.dialogName},i.a.createElement(r.b,{className:o.a.name,to:"/dialogs/".concat(e.id)},e.name))}var u=t(299),m=t.n(u);function g(e){return i.a.createElement("div",{className:m.a.speechBubble},e.message)}var d=t(300),b=t.n(d),_=t(87),f=t(128),E=t(66),h=t(23),v=Object(E.a)(10);var p=Object(f.a)({form:"dialog"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(_.a,{name:"message",component:h.b,validate:[E.b,v]})),i.a.createElement("div",null,i.a.createElement("button",null,"Send Message")))})),k=t(16),N=t(8),j=t(292);a.default=Object(N.d)(j.a,Object(k.b)((function(e){return{dialogs:e.dialogsPage.dialogs,messages:e.dialogsPage.messages,textForNewMessage:e.dialogsPage.textForNewMessage,isAuth:e.auth.isAuth}}),(function(e){return{onClickSendMessageHandler:function(a){return e(Object(n.a)(a))}}})))((function(e){var a=e.dialogs.map((function(e){return i.a.createElement(c,{key:e.id,name:e.name,id:e.id})})),t=e.messages.map((function(e){return i.a.createElement(g,{key:e.id,message:e.message})}));return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{className:b.a.title},"In progress"),i.a.createElement("div",null,i.a.createElement("div",{className:b.a.dialogsContainer},a),i.a.createElement("div",null,t,i.a.createElement(p,{onSubmit:function(a){e.onClickSendMessageHandler(a.message)}}))))}))}}]);
//# sourceMappingURL=5.a63c6880.chunk.js.map