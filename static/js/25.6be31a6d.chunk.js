(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[25],{607:function(e,t,n){"use strict";function r(e,t,n,r,a,c,s){try{var i=e[c](s),u=i.value}catch(o){return void n(o)}i.done?t(u):Promise.resolve(u).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,c){var s=e.apply(t,n);function i(e){r(s,a,c,i,u,"next",e)}function u(e){r(s,a,c,i,u,"throw",e)}i(void 0)}))}}n.d(t,"a",(function(){return a}))},609:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(60),a=n.n(r),c=n(607),s=n(606),i=n(2),u=n(17);function o(e){var t=e.btnText,n=e.className,r=e.disabled,o=e.click,d=e.afterClick,l=e.checkApprove,b=e.wallet,f=e.spec,p=e.lang,j=Object(i.useState)(r?"disabled":"enabled"),v=Object(s.a)(j,2),O=v[0],x=v[1],h=Object(i.useState)(!0),k=Object(s.a)(h,2),m=k[0],w=k[1],g=Object(i.useState)(!1),y=Object(s.a)(g,2),N=y[0],S=y[1],C=Object(i.useState)(t),T=Object(s.a)(C,2),E=T[0],I=T[1],A=Object(i.useRef)(null),J=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===O){e.next=2;break}return e.abrupt("return");case 2:return L(),e.next=5,o();case 5:e.sent&&d&&d(),P();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){x("disabled"),S(!0),A.current&&(A.current.style.display="inline-block")},P=function(){A.current&&(A.current.style.display="none"),x("enabled"),S(!1)},R=function(){var e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(l&&b&&b.detail.account)){e.next=5;break}return e.next=3,b.isApproved(f.pool,f.bTokenId);case 3:t=e.sent,w(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L(),e.next=3,b.approve(f.pool,f.bTokenId);case 3:e.sent.success?w(!0):(w(!1),alert(p["approve-failed"])),P();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){return R(),function(){}}),[b,f,l]),Object(i.useEffect)((function(){return t&&I(t),function(){}}),[t]),Object(u.jsxs)("button",{className:n,onClick:function(){m?J():_()},children:[Object(u.jsx)("span",{className:"btn-loading-wrap",children:Object(u.jsx)("span",{ref:A,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),N?p.pending:m?E:p.approve]})}},637:function(e,t,n){"use strict";var r=n(60),a=n.n(r),c=n(607),s=n(606),i=n(2),u=n(45),o=n(609),d=n(12),l=n(17);t.a=Object(u.b)("wallet")(Object(u.c)((function(e){var t=e.wallet,n=void 0===t?{}:t,r=e.lang,u=Object(i.useState)(),b=Object(s.a)(u,2),f=b[0],p=b[1],j=Object(i.useState)(!0),v=Object(s.a)(j,2),O=v[0],x=v[1],h=function(){var e=Object(c.a)(a.a.mark((function e(){var t,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n&&n.detail&&n.detail.account)){e.next=20;break}if(void 0!==f){e.next=4;break}return alert(r["please-enter-address"]),e.abrupt("return");case 4:if(42==(t=f.toLocaleLowerCase()).length&&0==t.indexOf("0x")){e.next=8;break}return alert(r["please-enter-a-correct-address"]),e.abrupt("return");case 8:if(t!==n.detail.account){e.next=11;break}return alert(r["brokder-addr-cannot-be-the-same-as-trader"]),e.abrupt("return");case 11:if(!O){e.next=14;break}return alert(r["cannot-bind-twice"]),e.abrupt("return");case 14:return e.next=16,Object(d.X)(n.detail.chainId,n.detail.account,f);case 16:c=e.sent,console.log(c),c.success||alert(r["bind-faild"]),c.success&&x(!0);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(c.a)(a.a.mark((function e(){var t,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/broker/".concat(n.detail.account,"/get_broker"),e.next=3,Object(d.i)(t);case 3:(r=e.sent).data&&r.data.length?(x(!0),p(r.data[0].broker_address)):x(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){k()}),[n.detail]),Object(l.jsxs)("div",{className:"broker-bind",children:[Object(l.jsx)("div",{className:"header",children:r["brokers-address"]}),Object(l.jsxs)("div",{className:"bind-input",children:[Object(l.jsx)("div",{className:"address",children:Object(l.jsx)("input",{className:"address-input",type:"text",placeholder:r.address,value:f,onChange:function(e){return function(e){var t=e.target.value;p(t)}(e)}})}),Object(l.jsx)("div",{className:"bind-button",children:Object(l.jsx)(o.a,{className:"btn",btnText:r.bind,lang:r,click:h})})]})]})})))},727:function(e,t,n){},762:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var r=n(637),a=(n(727),n(17));function c(e){var t=e.lang;return Object(a.jsx)(r.a,{lang:t})}}}]);
//# sourceMappingURL=25.6be31a6d.chunk.js.map