(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[28],{1156:function(e,t,n){},1192:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var a=n(723),r=(n(1156),n(20));function c(e){var t=e.lang;return Object(r.jsx)(a.a,{lang:t})}},616:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),r=n.n(a),c=n(1),s=n(13),i=n(4),u=n(20);function l(e){var t=e.btnText,n=e.className,a=e.disabled,l=e.click,d=e.afterClick,o=e.checkApprove,b=e.wallet,p=e.spec,f=e.lang,j=Object(i.useState)(a?"disabled":"enabled"),O=Object(s.a)(j,2),v=O[0],h=O[1],x=Object(i.useState)(!0),k=Object(s.a)(x,2),m=k[0],w=k[1],g=Object(i.useState)(!1),y=Object(s.a)(g,2),N=y[0],S=y[1],C=Object(i.useState)(t),T=Object(s.a)(C,2),E=T[0],I=T[1],A=Object(i.useRef)(null),J=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===v){e.next=2;break}return e.abrupt("return");case 2:return L(),e.next=5,l();case 5:e.sent&&d&&d(),R();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){h("disabled"),S(!0),A.current&&(A.current.style.display="inline-block")},R=function(){A.current&&(A.current.style.display="none"),h("enabled"),S(!1)},_=function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(o&&b&&b.detail.account)){e.next=5;break}return e.next=3,b.isApproved(p.pool,p.bTokenId);case 3:t=e.sent,w(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L(),e.next=3,b.approve(p.pool,p.bTokenId);case 3:e.sent.success?w(!0):(w(!1),alert(f["approve-failed"])),R();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){return _(),function(){}}),[b,p,o]),Object(i.useEffect)((function(){return t&&I(t),function(){}}),[t]),Object(u.jsxs)("button",{className:n,onClick:function(){m?J():$()},children:[Object(u.jsx)("span",{className:"btn-loading-wrap",children:Object(u.jsx)("span",{ref:A,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),N?f.pending:m?E:f.approve]})}},723:function(e,t,n){"use strict";var a=n(4),r=n(48),c=n(616),s=n(15),i=n(20);t.a=Object(r.b)("wallet")(Object(r.c)((function({wallet:e={},lang:t}){const[n,r]=Object(a.useState)(),[u,l]=Object(a.useState)(!0);return Object(a.useEffect)((()=>{(async()=>{let t=`/broker/${e.detail.account}/get_broker`,n=await Object(s.k)(t);n.data&&n.data.length?(l(!0),r(n.data[0].broker_address)):l(!1)})()}),[e.detail]),Object(i.jsxs)("div",{className:"broker-bind",children:[Object(i.jsx)("div",{className:"header",children:t["brokers-address"]}),Object(i.jsxs)("div",{className:"bind-input",children:[Object(i.jsx)("div",{className:"address",children:Object(i.jsx)("input",{className:"address-input",type:"text",placeholder:t.address,value:n,onChange:e=>(e=>{let{value:t}=e.target;r(t)})(e)})}),Object(i.jsx)("div",{className:"bind-button",children:Object(i.jsx)(c.a,{className:"btn",btnText:t.bind,lang:t,click:async()=>{if(e&&e.detail&&e.detail.account){if(void 0===n)return void alert(t["please-enter-address"]);let a=n.toLocaleLowerCase();if(42!==a.length||0!==a.indexOf("0x"))return void alert(t["please-enter-a-correct-address"]);if(a===e.detail.account)return void alert(t["brokder-addr-cannot-be-the-same-as-trader"]);if(u)return void alert(t["cannot-bind-twice"]);let r=await Object(s.cb)(e.detail.chainId,e.detail.account,n);console.log(r),r.success||alert(t["bind-faild"]),r.success&&l(!0)}}})})]})]})})))}}]);
//# sourceMappingURL=28.d0999110.chunk.js.map