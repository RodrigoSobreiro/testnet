(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[30],{1331:function(e,t,c){},1381:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return r}));var n=c(879),a=(c(1331),c(880),c(20));function r(e){var t=e.lang;return Object(a.jsx)("div",{className:"governance",children:Object(a.jsx)(n.a,{lang:t})})}},645:function(e,t,c){"use strict";c.d(t,"a",(function(){return l}));var n=c(0),a=c.n(n),r=c(1),s=c(11),i=c(8),o=c(20);function l(e){var t=e.btnText,c=e.className,n=e.disabled,l=e.click,u=e.afterClick,j=e.checkApprove,b=e.wallet,d=e.spec,O=e.lang,f=Object(i.useState)(n?"disabled":"enabled"),p=Object(s.a)(f,2),v=p[0],x=p[1],h=Object(i.useState)(!0),m=Object(s.a)(h,2),w=m[0],N=m[1],g=Object(i.useState)(!1),I=Object(s.a)(g,2),k=I[0],y=I[1],S=Object(i.useState)(t),C=Object(s.a)(S,2),E=C[0],_=C[1],T=Object(i.useRef)(null),R=function(){var e=Object(r.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===v){e.next=2;break}return e.abrupt("return");case 2:return D(),e.next=5,l();case 5:e.sent&&u&&u(),B();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){x("disabled"),y(!0),T.current&&(T.current.style.display="inline-block")},B=function(){T.current&&(T.current.style.display="none"),x("enabled"),y(!1)},V=function(){var e=Object(r.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(j&&b&&b.detail.account)){e.next=5;break}return e.next=3,b.isApproved(d.pool,d.bTokenId);case 3:t=e.sent,N(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(r.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return D(),e.next=3,b.approve(d.pool,d.bTokenId);case 3:e.sent.success?N(!0):(N(!1),alert(O["approve-failed"])),B();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){return V(),function(){}}),[b,d,j]),Object(i.useEffect)((function(){return t&&_(t),function(){}}),[t]),Object(o.jsxs)("button",{className:c,onClick:function(){w?R():q()},children:[Object(o.jsx)("span",{className:"btn-loading-wrap",children:Object(o.jsx)("span",{ref:T,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),k?O.pending:w?E:O.approve]})}},647:function(e,t,c){"use strict";c.d(t,"a",(function(){return j}));var n=c(55),a=c(49),r=c(655),s=c(11),i=c(8),o=c(653),l=c(20),u=["allowZero"];function j(e){var t=Object(i.useState)(Object(l.jsx)("span",{className:"loading-line"})),c=Object(s.a)(t,2),j=c[0],b=c[1];return Object(i.useEffect)((function(){var t=e.allowZero,c=Object(r.a)(e,u);return("object"!==Object(a.a)(e.value)&&void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t)&&b(Object(l.jsx)(o.a,Object(n.a)(Object(n.a)({},c),{},{displayType:"text"}))),function(){}}),[e.value]),j}},749:function(e,t,c){"use strict";var n=c(0),a=c.n(n),r=c(1),s=c(11),i=c(8),o=c(48),l=c(645),u=c(647),j=c(15),b=c(20);t.a=Object(o.b)("wallet","loading")(Object(o.c)((function(e){var t=e.wallet,c=void 0===t?{}:t,n=e.lang,o=e.loading,d=Object(i.useState)(!1),O=Object(s.a)(d,2),f=O[0],p=O[1],v=Object(i.useState)(!1),x=Object(s.a)(v,2),h=x[0],m=x[1],w=Object(i.useState)(!1),N=Object(s.a)(w,2),g=N[0],I=N[1],k=Object(i.useState)(""),y=Object(s.a)(k,2),S=y[0],C=y[1],E=Object(i.useState)(""),_=Object(s.a)(E,2),T=_[0],R=_[1],D=Object(i.useState)(""),B=Object(s.a)(D,2),V=B[0],q=B[1],A=Object(i.useState)([]),F=Object(s.a)(A,2),H=F[0],J=F[1],Z=Object(i.useState)(""),z=Object(s.a)(Z,2),M=z[0],P=z[1],U=Object(i.useState)(""),Y=Object(s.a)(U,2),G=Y[0],K=Y[1],L=function(){c.connect()},Q=Object(i.useState)(Object(b.jsx)(l.a,{click:L,lang:n,className:"vote",btnText:n["connet-wallet"]})),W=Object(s.a)(Q,2),X=W[0],$=W[1],ee=function(e){var t=e.target.value;C(t)},te=function(){var e=Object(r.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(S){e.next=3;break}return alert(n["please-choose-your-vote-first"]),e.abrupt("return");case 3:return e.next=5,ce();case 5:e.sent&&(ne(),ae(),re());case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ce=function(){var e=Object(r.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.zb)(c.detail.chainId,c.detail.account,S);case 2:if(!e.sent.success){e.next=13;break}t=!0;case 5:if(!t){e.next=12;break}return e.next=8,Object(j.V)(c.detail.account);case 8:n=e.sent,t=n.timestamp?!(n.timestamp>G):!n.timestamp,e.next=5;break;case 12:return e.abrupt("return",!0);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ne=function(){var e=Object(r.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.V)(c.detail.account);case 2:(t=e.sent)&&("1"===t.option?(p(!0),R("I")):"2"===t.option?(m(!0),R("II")):"3"===t.option&&(I(!0),R("III")),K(t.timestamp));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ae=function(){var e=Object(r.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.U)(c.detail.account);case 2:(t=e.sent)&&q(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),re=function(){var e=Object(r.a)(a.a.mark((function e(){var t,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.Y)();case 2:t=e.sent,o.loaded(),t?(c=+t[0]+ +t[1]+ +t[2],J(t),P(c)):alert(t.error);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){o.loading();window.setInterval((function(){re()}),1e3)}),[]),Object(i.useEffect)((function(){document.getElementsByClassName("pre_eth")[0].style.width="".concat(+H[0]/M*100,"%"),document.getElementsByClassName("pre_bsc")[0].style.width="".concat(+H[1]/M*100,"%"),document.getElementsByClassName("pre_heco")[0].style.width="".concat(+H[2]/M*100,"%")}),[H,M]),Object(i.useEffect)((function(){c.isConnected()&&window.setInterval((function(){ae(),ne()}),1e3)}),[c,c.detail.account]),Object(i.useEffect)((function(){var e;e=c.isConnected()?Object(b.jsx)(l.a,{className:"vote",lang:n,btnText:n.vote,click:te}):Object(b.jsx)(l.a,{click:L,className:"vote",lang:n,btnText:n["connet-wallet"]}),$(e)}),[c.detail.account,S]),Object(b.jsxs)("div",{className:"dip_two_box",children:[Object(b.jsx)("div",{className:"H2 DIP1",children:n["governance-title"]}),Object(b.jsxs)("div",{className:"title-describe",children:[Object(b.jsx)("div",{children:n["governance-describe"]}),Object(b.jsx)("div",{children:n["governance-describe-two"]}),Object(b.jsxs)("div",{children:[n["governance-describe-three"]," ",Object(b.jsx)("a",{className:"doc-a",rel:"noreferrer",target:"_blank",href:"https://docs.deri.finance/mining-faq#what-do-i-harvest-for-liquidity-mining",children:n["governance-describe-three-a"]}),"  ",n["governance-describe-three-one"]]}),Object(b.jsx)("br",{})]}),Object(b.jsxs)("div",{className:"flex",children:["I.",n["governance-options-one-describe"],Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"II.",n["governance-options-two-describe"],Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"III.",n["governance-options-three"],Object(b.jsx)("br",{})]}),Object(b.jsxs)("div",{className:"radio",children:[Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"fle",children:[Object(b.jsxs)("div",{className:"rad",children:[Object(b.jsx)("input",{type:"radio",name:"option",value:"1",id:"I",onChange:function(e){return ee(e)},defaultChecked:f})," ",Object(b.jsx)("label",{for:"I",children:"I"})]}),Object(b.jsxs)("div",{className:"prele_eth",children:[Object(b.jsx)("div",{className:"pre_eth"}),Object(b.jsxs)("span",{className:"num-deri",children:[" ",H[0]?Object(b.jsx)(u.a,{value:H[0],decimalScale:0,thousandSeparator:!0}):"0","   DERI"]})]})]}),Object(b.jsxs)("div",{className:"fle",children:[Object(b.jsxs)("div",{className:"rad",children:[Object(b.jsx)("input",{type:"radio",name:"option",value:"2",id:"II",onChange:function(e){return ee(e)},defaultChecked:h})," ",Object(b.jsx)("label",{for:"II",children:"II"})]}),Object(b.jsxs)("div",{className:"prele_bsc",children:[Object(b.jsx)("div",{className:"pre_bsc"}),Object(b.jsxs)("span",{className:"num-deri",children:[" ",H[1]?Object(b.jsx)(u.a,{value:H[1],decimalScale:0,thousandSeparator:!0}):"0","   DERI"]})]})]}),Object(b.jsxs)("div",{className:"fle",children:[Object(b.jsxs)("div",{className:"rad",children:[Object(b.jsx)("input",{type:"radio",name:"option",value:"3",id:"III",onChange:function(e){return ee(e)},defaultChecked:g})," ",Object(b.jsx)("label",{for:"III",children:"III"})]}),Object(b.jsxs)("div",{className:"prele_heco",children:[Object(b.jsx)("div",{className:"pre_heco"}),Object(b.jsxs)("span",{className:"num-deri",children:[" ",H[2]?Object(b.jsx)(u.a,{value:H[2],decimalScale:0,thousandSeparator:!0}):"0","   DERI"]})]})]})]}),Object(b.jsx)("div",{children:X}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{children:[n["your-vote"]," : ",T]}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{children:[n["your-voting-power"]," : ",V?Object(b.jsx)(u.a,{value:V,decimalScale:0,thousandSeparator:!0}):"0"]}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{class:"H2",children:"Voting rules:"}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"1.",n["vote-rules-one"],Object(b.jsx)("br",{}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{className:"rules-describe",children:n["vote-rules-one-describe-one"]}),Object(b.jsx)("li",{className:"rules-describe",children:n["vote-rules-one-describe-two"]}),Object(b.jsx)("li",{className:"rules-describe",children:n["vote-rules-one-describe-three"]}),Object(b.jsx)("li",{className:"rules-describe",children:n["vote-rules-one-describe-four"]})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"2. ",n["vote-rules-two"],Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"3. ",n["vote-rules-three"],Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"4. ",n["vote-rules-four"]]})]})]})})))},879:function(e,t,c){"use strict";var n=c(0),a=c.n(n),r=c(1),s=c(11),i=c(8),o=c(48),l=(c(644),c(118)),u=c(749),j=c(20);t.a=Object(o.b)("wallet")(Object(o.c)((function(e){e.wallet;var t=e.lang,c=Object(i.useState)(!0),n=Object(s.a)(c,2),o=n[0],b=n[1],d=function(){var e=Object(r.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"governance_box",children:[Object(j.jsxs)("div",{className:"check",children:[Object(j.jsx)("div",{className:o?"checked-now":"",onClick:function(){return d(!0)},children:t["vote-now"]}),Object(j.jsx)("div",{className:o?"":"checked-now",onClick:function(){return d(!1)},children:t.closed})]}),o&&Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"now-vote",children:Object(j.jsx)(u.a,{lang:t})})}),!o&&Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"closed",children:[Object(j.jsx)("div",{className:"title"}),Object(j.jsx)("div",{children:Object(j.jsxs)(l.b,{to:"/diphistory",children:[" ",t["dip-one"]," "]})})]})})]})})))},880:function(e,t,c){}}]);
//# sourceMappingURL=30.5f4af335.chunk.js.map