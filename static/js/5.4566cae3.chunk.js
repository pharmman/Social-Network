(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[5],{294:function(e,t,a){e.exports={wrapper:"Users_wrapper__1HsrA"}},295:function(e,t,a){e.exports={wrapper:"User_wrapper__33sPP",avatar:"User_avatar__1g62K",bodyCard:"User_bodyCard__2Uzhc",cardNameStatus:"User_cardNameStatus__2CfLY",status:"User_status__1qE-g",noStatus:"User_noStatus__2mTRM",card__location:"User_card__location__1qGSe",card__location_country:"User_card__location_country__XtQ63"}},296:function(e,t,a){e.exports={reactPaginate:"Paginator_reactPaginate__1i8ai",active:"Paginator_active__2Eo7w"}},297:function(e,t,a){(function(r){var n;e.exports=(n=a(0),function(e){var t={};function a(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}return a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=4)}([function(e,t,a){e.exports=a(2)()},function(e,t){e.exports=n},function(e,t,a){"use strict";var r=a(3);function n(){}function o(){}o.resetWarningCache=n,e.exports=function(){function e(e,t,a,n,o,i){if(i!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:n};return a.PropTypes=a,a}},function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,a,r){"use strict";r.r(a);var n=r(1),o=r.n(n),i=r(0),s=r.n(i);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var c=function(e){var t=e.pageClassName,a=e.pageLinkClassName,r=e.page,n=e.selected,i=e.activeClassName,s=e.activeLinkClassName,c=e.getEventListener,u=e.pageSelectedHandler,p=e.href,f=e.extraAriaContext,g=e.ariaLabel||"Page "+r+(f?" "+f:""),d=null;return n&&(d="page",g=e.ariaLabel||"Page "+r+" is your current page",t=void 0!==t?t+" "+i:i,void 0!==a?void 0!==s&&(a=a+" "+s):a=s),o.a.createElement("li",{className:t},o.a.createElement("a",l({role:"button",className:a,href:p,tabIndex:"0","aria-label":g,"aria-current":d,onKeyPress:u},c(u)),r))};c.propTypes={pageSelectedHandler:s.a.func.isRequired,selected:s.a.bool.isRequired,pageClassName:s.a.string,pageLinkClassName:s.a.string,activeClassName:s.a.string,activeLinkClassName:s.a.string,extraAriaContext:s.a.string,href:s.a.string,ariaLabel:s.a.string,page:s.a.number.isRequired,getEventListener:s.a.func.isRequired};var u=c;function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==a?a:t;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var o=void 0;try{o=r[n]}catch(e){continue}e.register(o,n,"/home/adele/workspace/react-paginate/react_components/PageView.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/PageView.js")}}();var f=function(e){var t=e.breakLabel,a=e.breakClassName,r=e.breakLinkClassName,n=e.breakHandler,i=e.getEventListener,s=a||"break";return o.a.createElement("li",{className:s},o.a.createElement("a",p({className:r,role:"button",tabIndex:"0",onKeyPress:n},i(n)),t))};f.propTypes={breakLabel:s.a.oneOfType([s.a.string,s.a.node]),breakClassName:s.a.string,breakLinkClassName:s.a.string,breakHandler:s.a.func.isRequired,getEventListener:s.a.func.isRequired};var g=f;function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function m(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==a?a:t;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var o=void 0;try{o=r[n]}catch(e){continue}e.register(o,n,"/home/adele/workspace/react-paginate/react_components/BreakView.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/BreakView.js")}}();var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(n,e);var t,a,r=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=C(e);if(t){var n=C(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return h(this,a)}}(n);function n(e){var t,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),P(y(t=r.call(this,e)),"handlePreviousPage",(function(e){var a=t.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,a>0&&t.handlePageSelected(a-1,e)})),P(y(t),"handleNextPage",(function(e){var a=t.state.selected,r=t.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,a<r-1&&t.handlePageSelected(a+1,e)})),P(y(t),"handlePageSelected",(function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1,t.state.selected!==e&&(t.setState({selected:e}),t.callCallback(e))})),P(y(t),"getEventListener",(function(e){return P({},t.props.eventListener,e)})),P(y(t),"handleBreakClick",(function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1;var r=t.state.selected;t.handlePageSelected(r<e?t.getForwardJump():t.getBackwardJump(),a)})),P(y(t),"callCallback",(function(e){void 0!==t.props.onPageChange&&"function"==typeof t.props.onPageChange&&t.props.onPageChange({selected:e})})),P(y(t),"pagination",(function(){var e=[],a=t.props,r=a.pageRangeDisplayed,n=a.pageCount,i=a.marginPagesDisplayed,s=a.breakLabel,l=a.breakClassName,c=a.breakLinkClassName,u=t.state.selected;if(n<=r)for(var p=0;p<n;p++)e.push(t.getPageElement(p));else{var f,d,v,m=r/2,b=r-m;u>n-r/2?m=r-(b=n-u):u<r/2&&(b=r-(m=u));var h=function(e){return t.getPageElement(e)};for(f=0;f<n;f++)(d=f+1)<=i||d>n-i||f>=u-m&&f<=u+b?e.push(h(f)):s&&e[e.length-1]!==v&&(v=o.a.createElement(g,{key:f,breakLabel:s,breakClassName:l,breakLinkClassName:c,breakHandler:t.handleBreakClick.bind(null,f),getEventListener:t.getEventListener}),e.push(v))}return e})),a=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,t.state={selected:a},t}return t=n,(a=[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,a=e.disableInitialCallback,r=e.extraAriaContext;void 0===t||a||this.callCallback(t),r&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.")}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:this.props.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,t=this.props,a=t.pageCount,r=e+t.pageRangeDisplayed;return r>=a?a-1:r}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var t=this.props,a=t.hrefBuilder,r=t.pageCount;if(a&&e!==this.state.selected&&e>=0&&e<r)return a(e+1)}},{key:"ariaLabelBuilder",value:function(e){var t=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var a=this.props.ariaLabelBuilder(e+1,t);return this.props.extraAriaContext&&!t&&(a=a+" "+this.props.extraAriaContext),a}}},{key:"getPageElement",value:function(e){var t=this.state.selected,a=this.props,r=a.pageClassName,n=a.pageLinkClassName,i=a.activeClassName,s=a.activeLinkClassName,l=a.extraAriaContext;return o.a.createElement(u,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:t===e,pageClassName:r,pageLinkClassName:n,activeClassName:i,activeLinkClassName:s,extraAriaContext:l,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props,t=e.disabledClassName,a=e.pageCount,r=e.containerClassName,n=e.previousLabel,i=e.previousClassName,s=e.previousLinkClassName,l=e.previousAriaLabel,c=e.prevRel,u=e.nextLabel,p=e.nextClassName,f=e.nextLinkClassName,g=e.nextAriaLabel,d=e.nextRel,m=this.state.selected,b=i+(0===m?" ".concat(t):""),h=p+(m===a-1?" ".concat(t):""),y=0===m?"true":"false",C=m===a-1?"true":"false";return o.a.createElement("ul",{className:r},o.a.createElement("li",{className:b},o.a.createElement("a",v({className:s,href:this.hrefBuilder(m-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":y,"aria-label":l,rel:c},this.getEventListener(this.handlePreviousPage)),n)),this.pagination(),o.a.createElement("li",{className:h},o.a.createElement("a",v({className:f,href:this.hrefBuilder(m+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":C,"aria-label":g,rel:d},this.getEventListener(this.handleNextPage)),u)))}}])&&m(t.prototype,a),n}(n.Component);P(k,"propTypes",{pageCount:s.a.number.isRequired,pageRangeDisplayed:s.a.number.isRequired,marginPagesDisplayed:s.a.number.isRequired,previousLabel:s.a.node,previousAriaLabel:s.a.string,prevRel:s.a.string,nextLabel:s.a.node,nextAriaLabel:s.a.string,nextRel:s.a.string,breakLabel:s.a.oneOfType([s.a.string,s.a.node]),hrefBuilder:s.a.func,onPageChange:s.a.func,initialPage:s.a.number,forcePage:s.a.number,disableInitialCallback:s.a.bool,containerClassName:s.a.string,pageClassName:s.a.string,pageLinkClassName:s.a.string,activeClassName:s.a.string,activeLinkClassName:s.a.string,previousClassName:s.a.string,nextClassName:s.a.string,previousLinkClassName:s.a.string,nextLinkClassName:s.a.string,disabledClassName:s.a.string,breakClassName:s.a.string,breakLinkClassName:s.a.string,extraAriaContext:s.a.string,ariaLabelBuilder:s.a.func,eventListener:s.a.string}),P(k,"defaultProps",{pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextRel:"next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1,eventListener:"onClick"}),function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==a?a:t;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var o=void 0;try{o=r[n]}catch(e){continue}e.register(o,n,"/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}(),a.default=k,function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==a?a:t;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var o=void 0;try{o=r[n]}catch(e){continue}e.register(o,n,"/home/adele/workspace/react-paginate/react_components/index.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/index.js")}}()}]))}).call(this,a(34))},311:function(e,t,a){"use strict";a.r(t);var r=a(51),n=a(52),o=a(62),i=a(63),s=a(16),l=a(0),c=a.n(l),u=a(294),p=a.n(u),f=a(61),g=a(295),d=a.n(g),v=a(98),m=a.n(v),b=a(22),h=function(e){var t=e.user,a=e.unFollow,r=e.followingInProgress,n=e.follow;return c.a.createElement("div",{className:d.a.wrapper},c.a.createElement("div",{className:d.a.avatarWrapper},c.a.createElement(b.b,{to:"/profile/".concat(t.id)},c.a.createElement("img",{alt:"Avatar",className:d.a.avatar,src:null!==t.photos.small?t.photos.small:m.a})),c.a.createElement("div",null,t.followed?c.a.createElement("button",{disabled:r.some((function(e){return e===t.id})),onClick:function(){return a(t.id)}},"Unfollow"):c.a.createElement("button",{disabled:r.some((function(e){return e===t.id})),onClick:function(){return n(t.id)}},"Follow"))),c.a.createElement("div",{className:d.a.bodyCard},c.a.createElement("div",{className:d.a.cardNameStatus},c.a.createElement("h3",null,t.name),t.status?c.a.createElement("div",{className:d.a.status},t.status):c.a.createElement("div",{className:d.a.noStatus},c.a.createElement("i",null,"Here will be status")))))},y=a(296),C=a.n(y),P=a(297),k=a.n(P),w=function(e){var t=e.totalUsersCount,a=e.pageSize,r=e.onChangeHandler;return c.a.createElement("div",{className:C.a.reactPaginate},c.a.createElement(k.a,{pageCount:Math.ceil(t/a),pageRangeDisplayed:8,marginPagesDisplayed:2,onPageChange:function(e){return r(e.selected+1)},activeClassName:C.a.active,disableInitialCallback:!0}))},N=function(e){return e.isFetching?c.a.createElement(f.a,null):c.a.createElement(c.a.Fragment,null,e.users.map((function(t){return c.a.createElement("div",{className:p.a.wrapper,key:t.id},c.a.createElement(c.a.Fragment,null,c.a.createElement(h,{user:t,unFollow:e.unFollow,follow:e.follow,followingInProgress:e.followingInProgress})))})),c.a.createElement(w,{totalUsersCount:e.totalUsersCount,pageSize:e.pageSize,onChangeHandler:function(t){e.onPageChanged(t)}}))},_=a(131);function L(e,t){return e===t}function x(e,t,a){if(null===t||null===a||t.length!==a.length)return!1;for(var r=t.length,n=0;n<r;n++)if(!e(t[n],a[n]))return!1;return!0}function E(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var a=t.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+a+"]")}return t}var O=function(e){for(var t=arguments.length,a=Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];var o=0,i=r.pop(),s=E(r),l=e.apply(void 0,[function(){return o++,i.apply(null,arguments)}].concat(a)),c=e((function(){for(var e=[],t=s.length,a=0;a<t;a++)e.push(s[a].apply(null,arguments));return l.apply(null,e)}));return c.resultFunc=i,c.dependencies=s,c.recomputations=function(){return o},c.resetRecomputations=function(){return o=0},c}}((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:L,a=null,r=null;return function(){return x(t,a,arguments)||(r=e.apply(null,arguments)),a=arguments,r}}));var S=O((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),j=function(e){return e.usersPage.currentPage},R=function(e){return e.usersPage.pageSize},D=function(e){return e.usersPage.totalUsersCount},U=function(e){return e.usersPage.isFetching},A=function(e){return e.usersPage.followingInProgress},T=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).onPageChanged=function(t){e.props.requestUsers(t,e.props.pageSize)},e}return Object(n.a)(a,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(N,{users:this.props.users,currentPage:this.props.currentPage,pageSize:this.props.pageSize,totalUsersCount:this.props.totalUsersCount,unFollow:this.props.unFollow,follow:this.props.follow,isFetching:this.props.isFetching,onPageChanged:this.onPageChanged,followingInProgress:this.props.followingInProgress}))}}]),a}(c.a.Component);t.default=Object(s.b)((function(e){return{users:S(e),currentPage:j(e),pageSize:R(e),totalUsersCount:D(e),isFetching:U(e),followingInProgress:A(e)}}),{follow:_.a,setCurrentPage:_.c,setTotalUsersCount:_.d,unFollow:_.e,requestUsers:_.b})(T)}}]);
//# sourceMappingURL=5.4566cae3.chunk.js.map