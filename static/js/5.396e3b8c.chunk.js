(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[5],{1146:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,c=a(163),s=(n=c)&&n.__esModule?n:{default:n};t.default=s.default,e.exports=t.default},617:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),c=a.n(n),s=a(1),r=a(14),i=a(6),l=a(20);function d(e){var t=e.btnText,a=e.className,n=e.disabled,d=e.click,u=e.afterClick,o=e.checkApprove,j=e.wallet,b=e.spec,x=e.lang,m=Object(i.useState)(n?"disabled":"enabled"),v=Object(r.a)(m,2),O=v[0],p=v[1],f=Object(i.useState)(!0),h=Object(r.a)(f,2),N=h[0],y=h[1],k=Object(i.useState)(!1),w=Object(r.a)(k,2),g=w[0],I=w[1],S=Object(i.useState)(t),q=Object(r.a)(S,2),C=q[0],T=q[1],_=Object(i.useRef)(null),L=function(){var e=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===O){e.next=2;break}return e.abrupt("return");case 2:return E(),e.next=5,d();case 5:e.sent&&u&&u(),F();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){p("disabled"),I(!0),_.current&&(_.current.style.display="inline-block")},F=function(){_.current&&(_.current.style.display="none"),p("enabled"),I(!1)},A=function(){var e=Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(o&&j&&j.detail.account)){e.next=5;break}return e.next=3,j.isApproved(b.pool,b.bTokenId);case 3:t=e.sent,y(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=function(){var e=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(),e.next=3,j.approve(b.pool,b.bTokenId);case 3:e.sent.success?y(!0):(y(!1),alert(x["approve-failed"])),F();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){return A(),function(){}}),[j,b,o]),Object(i.useEffect)((function(){return t&&T(t),function(){}}),[t]),Object(l.jsxs)("button",{className:a,onClick:function(){N?L():Z()},children:[Object(l.jsx)("span",{className:"btn-loading-wrap",children:Object(l.jsx)("span",{ref:_,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),g?x.pending:N?C:x.approve]})}},619:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(6),c=a(621),s=a(20);function r(e){const[t,a]=Object(n.useState)("--");return Object(n.useEffect)((()=>{const{allowZero:t,...n}=e;return("object"!==typeof e.value&&void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t)&&a(Object(s.jsx)(c.a,{...n,displayType:"text"})),()=>{}}),[e.value]),t}},643:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(6);function c(e){return Object(n.useEffect)((function(){return document.querySelector("body").style.overflow="hidden",function(){e||(document.querySelector("body").style.overflow="auto")}}),[]),null}},658:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),c=a.n(n),s=a(1),r=a(14),i=a(6),l=a(15);function d(e){var t=Object(i.useState)({}),a=Object(r.a)(t,2),n=a[0],d=a[1],u=null,o=function(){var t=Object(s.a)(c.a.mark((function t(){var a,n,s,r,i,u;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.isConnected()){t.next=10;break}return t.next=3,Object(l.K)(e.detail.account);case 3:a=t.sent,n=(+a.total).toFixed(2),s=a.valid?(+a.amount).toFixed(2):0,r=(+a.lp).toFixed(2),i=(+a.trade).toFixed(2),u=a.chainId,d({claimed:n,unclaimed:s,harvestDeriLp:r,harvestDeriTrade:i,chainId:u});case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(i.useEffect)((function(){return u=window.setInterval(o,18e4),o(),function(){return clearInterval(u)}}),[e.detail.account]),[n,u]}},819:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),c=a.n(n),s=a(1),r=a(14),i=a(6),l=a(658),d=a(637),u=a(15),o=a(617),j=a(29),b=a(619),x=a(20);function m(e){var t=e.wallet,a=e.miningClaim,n=e.tradingClaim,m=e.lang,v=Object(i.useState)(m["connect-wallet"]),O=Object(r.a)(v,2),p=O[0],f=O[1],h=Object(i.useState)(!1),N=Object(r.a)(h,2),y=N[0],k=N[1],w=Object(l.a)(t),g=Object(r.a)(w,2),I=g[0],S=g[1],q=Object(i.useState)(""),C=Object(r.a)(q,2),T=C[0],_=C[1],L=Object(d.a)(I.chainId),E=function(){var e=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==L.name){e.next=3;break}return alert("".concat(m["wrong-network"])),e.abrupt("return");case 3:if(Object(j.c)(t.detail.chainId,I.chainId)){e.next=6;break}return alert("".concat(m["your-deri-is-on"]," ").concat(L.name," ").concat(m["connect-to"]," ").concat(L.name," ").concat(m["to-claim"])),e.abrupt("return");case 6:if(0!==+I.unclaimed){e.next=9;break}return alert(m["no-deri-to-claim-yet"]),e.abrupt("return");case 9:if(!(parseInt(Date.now()/1e3)%28800<1800)){e.next=13;break}return alert(m["claiming-DERI-is-disabled-during-first-30-minutes-of-each-epoch"]),e.abrupt("return");case 13:return e.next=15,Object(u.W)(t.detail.chainId,t.detail.account);case 15:if(!e.sent.success){e.next=21;break}return clearInterval(S),e.abrupt("return",!0);case 21:return alert(m["claim-failed"]),e.abrupt("return",!1);case 23:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(s.a)(c.a.mark((function e(){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isConnected()){e.next=7;break}return e.next=3,E();case 3:e.sent&&k(!0),e.next=17;break;case 7:return e.prev=7,e.next=10,t.connect();case 10:return a=e.sent,e.abrupt("return",!!a);case 14:return e.prev=14,e.t0=e.catch(7),e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e,null,[[7,14]])})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){var e=null;return a&&(e=window.setInterval((function(){var e=28800,t=parseInt(Date.now()/1e3),a=parseInt(t/e)*e+e-t,n=parseInt(a/3600),c=parseInt(a%3600/60),s=parseInt(a%60);_("".concat(n," ").concat(m.h," ").concat(c," ").concat(m.m," ").concat(s," ").concat(m.s))}),1e3)),t.isConnected()?f(m.claim):f(m["collect-wallet"]),function(){e&&clearInterval(e)}}),[t.detail.account]),Object(x.jsxs)("div",{className:"claim-box",children:[Object(x.jsx)("div",{className:"odd title",children:a?m["my-liquidity-providing-harvest-in-current-epoch"]:m["my-trading-harvest-in-current-epoch"]}),a&&Object(x.jsxs)("div",{className:"odd text",children:[Object(x.jsx)("div",{className:"text-title",children:m["current-epoch-remaining-time"]}),Object(x.jsx)("div",{className:"text-num",children:T})]}),Object(x.jsxs)("div",{className:"odd text",children:[a&&Object(x.jsx)("div",{className:"text-title",children:m["my-harvest-in-current-epoch-estimated"]}),n&&Object(x.jsx)("div",{className:"text-title",children:m["my-trading-harvest-in-current-epoch-Est"]}),Object(x.jsxs)("div",{className:"text-num",children:[a?I.harvestDeriLp:I.harvestDeriTrade," ",m.deri]})]}),Object(x.jsxs)("div",{className:"odd text",children:[Object(x.jsx)("div",{className:"text-title",children:m["claimed-deri"]}),Object(x.jsx)("div",{className:"text-num",children:y?(+I.claimed+ +I.unclaimed).toFixed(2):I.claimed})]}),Object(x.jsxs)("div",{className:"odd text",children:[Object(x.jsx)("div",{className:"text-title"}),Object(x.jsx)("div",{className:"text-num"})]}),Object(x.jsxs)("div",{className:"odd text",children:[Object(x.jsx)("div",{className:"text-title",children:m["unclaimed-deri"]}),Object(x.jsx)("div",{className:"text-num",children:y?0:Object(x.jsx)(b.a,{value:I.unclaimed,decimalScale:2})})]}),n&&Object(x.jsxs)("div",{className:"odd text",children:[Object(x.jsx)("div",{className:"text-title"}),Object(x.jsx)("div",{className:"text-num"})]}),Object(x.jsx)("div",{className:"odd claim-network",children:a&&Object(x.jsxs)("div",{className:"text-title",children:[m["your-deri-is-on"]," ",L.name,"  ",m["connect-to"]," ",L.name," ",m["to-claim"]]})}),Object(x.jsx)("div",{className:"claim-btn",children:Object(x.jsx)(o.a,{btnText:p,click:F,className:"claim",lang:m})})]})}},822:function(e,t,a){"use strict";var n=a(57),c=a(819),s=a(47),r=a(0),i=a.n(r),l=a(1),d=a(14),u=a(6),o=a(15),j=a(621),b=a(617);a(1146);var x=a(643),m=a(619),v=a(20);var O=a(49),p=a(158),f=a(29);var h=Object(p.a)((function(e){var t=e.wallet,a=e.address,n=e.baseToken,c=e.onClose,s=e.afterAdd,r=e.balance,O=e.isLpPool,p=e.baseTokenId,f=e.symbolId,h=e.lang,N=Object(u.useState)("0"),y=Object(d.a)(N,2),k=y[0],w=y[1],g=Object(u.useState)("00"),I=Object(d.a)(g,2),S=I[0],q=I[1],C=Object(u.useState)(""),T=Object(d.a)(C,2),_=T[0],L=T[1],E=function(e){var t=e.wallet,a=e.address,n=e.symbolId,c=Object(u.useState)({}),s=Object(d.a)(c,2),r=s[0],j=s[1],b=function(){var e=Object(l.a)(i.a.mark((function e(){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isConnected()||!a){e.next=5;break}return e.next=3,Object(o.I)(t.detail.chainId,a,n);case 3:c=e.sent,j(c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.useEffect)((function(){return b(),function(){}}),t.detail.account,a),r}({wallet:t,address:a,symbolId:f});Object(x.a)();var F=function(){var e=Object(l.a)(i.a.mark((function e(){var n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=Object(o.f)(r),!Object(o.f)(_).gt(n)){e.next=5;break}return alert(h["not-sufficient-funds"]),e.abrupt("return",!1);case 5:if(!(E&&+_<+E.minAddLiquidity)){e.next=8;break}return alert("".concat(h["the-input-liquidity-shall-not-be-less-than"]," ").concat(E.minAddLiquidity)),e.abrupt("return",!1);case 8:if(!(_<=0||isNaN(_))){e.next=11;break}return alert(h["it-has-to-be-greater-than-zero"]),e.abrupt("return",!1);case 11:if(c=null,!O){e.next=18;break}return e.next=15,Object(o.c)(t.detail.chainId,a,t.detail.account,_);case 15:c=e.sent,e.next=21;break;case 18:return e.next=20,Object(o.b)(t.detail.chainId,a,t.detail.account,_,p);case 20:c=e.sent;case 21:return c&&c.success||alert(h["failure-of-transaction"]),e.abrupt("return",!0);case 23:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.useEffect)((function(){var e=(+r).toFixed(2),t=e.substring(e.indexOf(".")+1,e.length);return w(e),q(t),function(){}}),[r]),Object(v.jsx)("div",{className:"modal-dialog",children:Object(v.jsxs)("div",{className:"modal-content",children:[Object(v.jsxs)("div",{className:"modal-header",children:[Object(v.jsx)("div",{className:"title",children:h["add-liquidity"]}),Object(v.jsx)("div",{className:"close",onClick:c,children:Object(v.jsx)("span",{children:"\xd7"})})]}),Object(v.jsx)("div",{className:"modal-body",children:Object(v.jsxs)("div",{className:"margin-box-info",children:[Object(v.jsx)("div",{children:h["wallet-balance"]}),Object(v.jsxs)("div",{className:"money",children:[Object(v.jsxs)("span",{children:[Object(v.jsxs)("span",{className:"bt-balance",children:[Object(v.jsx)(j.a,{displayType:"text",value:k,thousandSeparator:!0,allowZero:!0,decimalScale:0}),".",Object(v.jsx)("span",{className:"float",children:Object(v.jsx)(j.a,{displayType:"text",value:S,thousandSeparator:!0,decimalScale:2,allowZero:!0})})]}),Object(v.jsx)("div",{className:"base-token",children:n})]}),Object(v.jsx)("span",{className:"add"})]}),Object(v.jsxs)("div",{className:"enter-margin",children:[Object(v.jsx)("div",{className:"input-margin",children:Object(v.jsxs)("div",{className:"box",children:[Object(v.jsx)("div",{className:"amount",style:{display:_?"block":"none"},children:h.liquidity}),Object(v.jsx)("input",{type:"number",className:"margin-value",placeholder:h.liquidity,value:_,onChange:function(e){var t=e.target.value;L(t)}})]})}),Object(v.jsx)("div",{children:n})]}),Object(v.jsxs)("div",{className:"max",children:[h.max,": ",Object(v.jsx)("span",{className:"max-num",children:Object(v.jsx)(m.a,{value:r,decimalScale:8})}),Object(v.jsx)("span",{className:"max-btn-left",onClick:function(){L(r)},children:h["add-all"]})]}),Object(v.jsx)("div",{className:"add-margin-btn",children:Object(v.jsx)(b.a,{className:"margin-btn",click:F,btnText:h.add,afterClick:s,lang:h})})]})})]})})})),N=Object(p.a)((function(e){var t=e.wallet,a=e.address,n=e.liqInfo,c=e.onClose,s=e.afterRemove,r=e.isLpPool,O=e.baseTokenId,p=e.unit,f=e.lang,h=e.version,N=Object(u.useState)(""),y=Object(d.a)(N,2),k=y[0],w=y[1],g=Object(u.useState)("0"),I=Object(d.a)(g,2),S=I[0],q=I[1],C=Object(u.useState)("00"),T=Object(d.a)(C,2),_=T[0],L=T[1];Object(x.a)();var E=function(){var e=Object(l.a)(i.a.mark((function e(){var c,s,l,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=Object(o.f)(n.totalShares),!(s=Object(o.f)(k)).gt(c)){e.next=5;break}return alert("".concat(f["your-current-max-removable-shares-are"],"  ").concat(n.totalShares)),e.abrupt("return",!1);case 5:if(r||"v1"!==h){e.next=10;break}if(!((l=+n.totalShares-+k)<1&&l>0)){e.next=10;break}return alert(f["staking-max-limit-tip"]),e.abrupt("return",!1);case 10:if(!(+k<=0||isNaN(k))){e.next=13;break}return alert(f["invalid-liquidity"]),e.abrupt("return",!1);case 13:if(d=null,!r){e.next=20;break}return e.next=17,Object(o.bb)(t.detail.chainId,a,t.detail.account,k);case 17:d=e.sent,e.next=23;break;case 20:return e.next=22,Object(o.ab)(t.detail.chainId,a,t.detail.account,k,O,c.eq(s));case 22:d=e.sent;case 23:if(d&&d.success){e.next=26;break}return alert(f["failure-of-transaction"]),e.abrupt("return",!1);case 26:return e.abrupt("return",!0);case 27:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.useEffect)((function(){if(n&&n.formatShares){var e=n.formatShares,t=e.substring(e.indexOf(".")+1,e.indexOf(".")+3);q(e),L(t)}return function(){}}),[n.totalShares]),Object(v.jsx)("div",{className:"modal-dialog",children:Object(v.jsxs)("div",{className:"modal-content",children:[Object(v.jsxs)("div",{className:"modal-header",children:[Object(v.jsx)("div",{className:"title",children:f["remove-liquidity"]}),Object(v.jsx)("div",{className:"close","data-dismiss":"modal",onClick:c,children:Object(v.jsx)("span",{children:"\xd7"})})]}),Object(v.jsx)("div",{className:"modal-body",children:Object(v.jsxs)("div",{className:"margin-box-info",children:[Object(v.jsxs)("div",{children:[" ","v1"===h||"v2_lite"===h||"v2_lite_open"===h?f["shares-available"]:f["liquidity-available"]]}),Object(v.jsxs)("div",{className:"money",children:[Object(v.jsx)("span",{children:Object(v.jsxs)("span",{className:"bt-balance",children:[Object(v.jsx)(j.a,{displayType:"text",value:S,decimalScale:0,thousandSeparator:!0}),".",Object(v.jsx)("span",{className:"float",children:_})]})}),Object(v.jsx)("span",{className:"remove"})]}),Object(v.jsxs)("div",{className:"enter-margin",children:[Object(v.jsx)("div",{className:"input-margin",children:Object(v.jsxs)("div",{className:"box",children:[Object(v.jsx)("div",{className:"amount",style:{display:k?"block":"none"},children:"v1"===h||"v2_lite"===h||"v2_lite_open"===h?f["liquidity-shares"]:f.liquidity}),Object(v.jsx)("input",{type:"number",className:"margin-value",placeholder:"v1"===h||"v2_lite"===h||"v2_lite_open"===h?f["liquidity-shares"]:f.liquidity,value:k,onChange:function(e){var t=e.target.value;w(t)}})]})}),Object(v.jsx)("div",{children:"v2"===h?p:f.shares})]}),Object(v.jsxs)("div",{className:"max",children:[Object(v.jsx)("span",{children:f["max-removeable"]}),Object(v.jsx)("span",{className:"max-num",children:Object(v.jsx)(m.a,{value:n.totalShares,decimalScale:8})}),Object(v.jsx)("span",{className:"max-btn-left",onClick:function(){w(n.totalShares)},children:f["remove-all"]})]}),Object(v.jsx)("div",{className:"add-margin-btn",children:Object(v.jsx)(b.a,{click:E,className:"margin-btn",btnText:f.remove,afterClick:s,lang:f})})]})})]})})})),y=function(e){var t=e.version,a=e.wallet,n=e.chainId,c=e.address,r=e.baseToken,j=e.isLpPool,x=e.liqInfo,m=e.loadLiqidityInfo,O=e.baseTokenId,p=e.symbolId,y=e.lang,k=Object(u.useState)(!1),w=Object(d.a)(k,2),g=w[0],I=w[1],S=Object(u.useState)("add"),q=Object(d.a)(S,2),C=q[0],T=q[1],_=Object(u.useState)(!1),L=Object(d.a)(_,2),E=L[0],F=L[1],A=Object(u.useState)(""),Z=Object(d.a)(A,2),D=Z[0],P=Z[1],V=Object(u.useState)(null),R=Object(d.a)(V,2),B=R[0],M=R[1],K=function(){var e=Object(l.a)(i.a.mark((function e(){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.isConnected()||!Object(f.c)(a.detail.chainId,n)){e.next=15;break}if(r=null,"v2_lite_open"!==t){e.next=5;break}return e.next=5,o.Y.update();case 5:if(!j){e.next=11;break}return e.next=8,Object(o.z)(a.detail.chainId,c,a.detail.account);case 8:r=e.sent,e.next=14;break;case 11:return e.next=13,Object(o.P)(a.detail.chainId,c,a.detail.account,O);case 13:r=e.sent;case 14:"object"!==Object(s.a)(r)&&P(r);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(u.useEffect)((function(){return K(),m(),function(){}}),[a.detail.account]);var Y=function(){var e=Object(l.a)(i.a.mark((function e(){var s,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("v2_lite_open"!==t){e.next=3;break}return e.next=3,o.Y.update();case 3:if(!j){e.next=11;break}return e.next=6,Object(o.R)(n,c,a.detail.account);case 6:return s=e.sent,I(s),e.abrupt("return",s);case 11:return e.next=13,Object(o.T)(n,c,a.detail.account,O);case 13:return r=e.sent,I(r),e.abrupt("return",r);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=null,!j){e.next=7;break}return e.next=4,Object(o.hb)(n,c,a.detail.account);case 4:t=e.sent,e.next=10;break;case 7:return e.next=9,Object(o.fb)(n,c,a.detail.account,O);case 9:t=e.sent;case 10:t&&t.success?I(!0):alert(t.error&&t.error.message||y["approve-failed"]);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.connect();case 3:return t=e.sent,e.abrupt("return",!!t);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),H=function(){F(!0),T("add")},W=function(){F(!1),K(),m(),a.refresh()},G=function(){F(!0),T("remove")};return Object(u.useEffect)((function(){return a.isConnected()&&Object(f.c)(a.detail.chainId,n)&&Y(),function(){}}),[a.detail.account]),Object(u.useEffect)((function(){if(a.isConnected()&&Object(f.c)(a.detail.chainId,n)&&g)M(Object(v.jsxs)("div",{className:"add-remove-liquidity",children:[Object(v.jsx)("button",{className:"add-liquidity",onClick:H,children:y["add-liquidity"]}),Object(v.jsx)("button",{className:"remove-liquidity",onClick:G,children:y["remove-liquidity"]})]}));else{var e=null;a.isConnected()?Object(f.c)(a.detail.chainId,n)?g||(e=Object(v.jsx)("div",{className:"approve",children:Object(v.jsx)(b.a,{className:"approve-btn",click:z,btnText:y.approve,lang:y})})):(a.switchNetwork({id:n}),e=Object(v.jsx)("div",{className:"approve",children:Object(v.jsx)(b.a,{className:"approve-btn wrong-network",btnText:y["wrong-network"],lang:y,click:function(){return a.switchNetwork({id:n})}})})):e=Object(v.jsx)("div",{className:"approve",children:Object(v.jsx)(b.a,{className:"approve-btn",click:J,btnText:y["connect-wallet"],lang:y})}),M(e)}return function(){}}),[a.detail.account,g]),Object(v.jsxs)("div",{className:"liquidity-btn",children:["add"===C?Object(v.jsx)(h,{modalIsOpen:E,isLpPool:j,onClose:W,balance:D,address:c,wallet:a,baseToken:r,afterAdd:W,baseTokenId:O,symbolId:p,lang:y}):Object(v.jsx)(N,{modalIsOpen:E,isLpPool:j,onClose:W,liqInfo:x,address:c,wallet:a,version:t,unit:"v1"===t||"v2_lite"===t||"option"===t?y.shares:r,afterRemove:W,baseTokenId:O,symbolId:p,lang:y}),B]})},k=Object(O.b)("wallet","loading")(Object(O.c)((function(e){var t=e.wallet,a=e.version,n=e.chainId,c=e.baseToken,s=e.address,r=e.type,j=e.baseTokenId,b=e.symbolId,x=e.lang,O=e.loading,p=Object(u.useState)({}),h=Object(d.a)(p,2),N=h[0],k=h[1],w=Object(u.useState)(c),g=Object(d.a)(w,2),I=g[0],S=g[1],q="lp"===r,C=function(){var e=Object(l.a)(i.a.mark((function e(){var r,l,d,u,b,m,v,p,h;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("v2_lite_open"!==a){e.next=3;break}return e.next=3,o.Y.update();case 3:return O.loading(),e.next=6,Object(o.C)(n,s,j);case 6:return r=e.sent,e.next=9,Object(o.D)(n,s,j);case 9:if(l=e.sent,!t.isConnected()||!Object(f.c)(n,t.detail.chainId)){e.next=29;break}if(d=null,!q){e.next=18;break}return e.next=15,Object(o.x)(n,s,t.detail.account);case 15:d=e.sent,e.next=21;break;case 18:return e.next=20,Object(o.u)(n,s,t.detail.account,j);case 20:d=e.sent;case 21:if(!Object(f.m)(s)){e.next=26;break}return e.next=24,Object(o.y)(n,s);case 24:b=e.sent,u=100*+b.apy2;case 26:d&&(m=d.shares?Object(o.f)(d.shares):Object(o.f)(0),"v1"===a||"v2_lite"===a||"v2_lite_open"===a||"option"===a?(v=m.isNaN()?Object(o.f)(0):m.multipliedBy(d.shareValue),k({total:d.poolLiquidity,apy:(100*+r.apy).toFixed(2),shareValue:d.shareValue,percent:d.poolLiquidity>0?v.dividedBy(d.poolLiquidity).multipliedBy(100).toFixed(2):0,shares:m.toFixed(2),formatShares:m.toFixed(2),totalShares:Object(o.f)(m).toString(),values:v.toFixed(2),lpApy:u,unit:x.shares,sharesTitle:x["staked-balance"]})):k({total:d.poolLiquidity,apy:(100*+r.apy).toFixed(2),pnl:(+d.pnl).toFixed(2),shares:m.toString(),formatShares:Object(o.f)(m).plus(d.pnl).toFixed(2),totalShares:Object(o.f)(m).plus(d.pnl).toString(),percent:d.poolLiquidity>0?m.dividedBy(d.poolLiquidity).multipliedBy(100).toFixed(2):0,unit:c,sharesTitle:x["my-Liquidity"],multiplier:"".concat(r.multiplier,"x")})),e.next=35;break;case 29:if(!Object(f.m)(s)){e.next=34;break}return e.next=32,Object(o.y)(n,s);case 32:h=e.sent,p=100*+h.apy2;case 34:l&&k({total:l.liquidity,apy:100*+r.apy,lpApy:p});case 35:O.loaded();case 36:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.useEffect)((function(){return C(),Object(f.l)(s)&&S("CAKE-LP"),function(){}}),[t.detail.account,c]),Object(v.jsxs)("div",{className:"liquidity-box",children:["v2_lite_open"===a?Object(v.jsx)("div",{className:"odd title",children:x["my-liqudity-providing"]}):Object(v.jsxs)("div",{className:"odd title",children:[x.provide," ",I," ",x["earn-deri"]]}),Object(v.jsxs)("div",{className:"odd text",children:[Object(v.jsx)("div",{className:"text-title",children:x["pool-total-liquidity"]}),Object(v.jsx)("div",{className:"text-num",children:Object(v.jsx)(m.a,{allowZero:!0,value:N.total,suffix:" ".concat(I),thousandSeparator:!0})})]}),"v2"===a&&Object(v.jsxs)("div",{className:"odd text",children:[Object(v.jsx)("div",{className:"text-title",children:x.multiplier}),Object(v.jsx)("div",{className:"text-num multiplier",title:x["multiplier-tip"],children:N.multiplier})]}),"v2_lite_open"!==a&&Object(v.jsxs)("div",{className:"odd text",children:[Object(v.jsx)("div",{className:"text-title",children:x.apy}),Object(v.jsxs)("div",{className:"text-num",children:[Object(v.jsx)("span",{title:Object(f.m)(s)&&x["deri-apy"],className:"".concat(Object(f.m)(s)&&"sushi-apy-underline"),children:Object(v.jsx)(m.a,{value:N.apy,decimalScale:2,suffix:"%"})}),Object(f.m)(s)&&N.lpApy>0&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("span",{children:" +"})," ",Object(v.jsx)("span",{className:"sushi-apy-underline text-num",title:Object(f.n)(s)?x["sushi-apy"]:x["cake-apy"],children:Object(v.jsx)(m.a,{value:N.lpApy,allowZero:!0,decimalScale:2,suffix:"%"})})]})]})]}),("v1"===a||"v2_lite"===a||"v2_lite_open"===a||"option"===a)&&Object(v.jsxs)("div",{className:"odd text",children:[Object(v.jsx)("div",{className:"text-title",children:x["liquidity-share-value"]}),Object(v.jsx)("div",{className:"text-num",children:Object(v.jsx)(m.a,{allowZero:!0,decimalScale:6,value:N.shareValue,suffix:" "+I,thousandSeparator:!0})})]}),Object(v.jsxs)("div",{className:"odd text",children:[Object(v.jsx)("div",{className:"text-title",children:x["my-liquidity-pencentage"]}),Object(v.jsx)("div",{className:"text-num",children:Object(v.jsx)(m.a,{allowZero:!0,value:N.percent,decimalScale:2,suffix:"%"})})]}),Object(v.jsxs)("div",{className:"odd text",children:[Object(v.jsxs)("div",{className:"text-title",children:[N.sharesTitle," "]}),Object(v.jsxs)("div",{className:"text-num",children:[Object(v.jsx)(m.a,{allowZero:!0,value:N.formatShares,decimalScale:2})," ",Object(v.jsx)("span",{children:N.unit})," "]})]}),"v2"===a&&Object(v.jsxs)("div",{className:"odd text claim-network",children:[Object(v.jsx)("div",{className:"text-title",children:x["mining-pnl"]}),Object(v.jsxs)("div",{className:"text-num",children:["\u2248 \xa0",Object(v.jsx)(m.a,{allowZero:!0,prefix:" ",value:N.pnl,decimalScale:2,suffix:" "+I})]})]}),("v1"===a||"v2_lite"===a||"v2_lite_open"===a||"option"===a)&&Object(v.jsx)("div",{className:"odd claim-network",children:Object(v.jsxs)("div",{className:"text-title money",children:[" ",Object(v.jsx)(m.a,{allowZero:!0,value:N.values,suffix:" "+I,decimalScale:2})]})}),Object(v.jsx)(y,{version:a,wallet:t,chainId:n,address:s,liqInfo:N,baseToken:I,isLpPool:q,loadLiqidityInfo:C,symbolId:b,baseTokenId:j,lang:x})]})})));t.a=function(e){return Object(v.jsxs)("div",{className:"liquidity-info",children:["v2_lite_open"!==e.version&&Object(v.jsx)(c.a,Object(n.a)(Object(n.a)({},e),{},{miningClaim:!0})),Object(v.jsx)(k,Object(n.a)({},e))]})}},824:function(e,t,a){"use strict";a(57),a(735),a(819);var n=a(0),c=a.n(n),s=a(1),r=a(14),i=a(6),l=a(15),d=a(27),u=a(49),o=a(29),j=a(264),b=a(20),x=new j.a;Object(u.b)("version")(Object(u.c)((function(e){var t=e.wallet,a=void 0===t?{}:t,n=e.version,u=e.chainId,j=e.address,m=e.symbolId,v=e.lang,O=Object(i.useState)({}),p=Object(r.a)(O,2),f=p[0],h=p[1],N=Object(i.useState)({}),y=Object(r.a)(N,2),k=y[0],w=y[1],g=Object(d.useHistory)(),I=function(){var e=Object(s.a)(c.a.mark((function e(){var t,n,s,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.K)(a.account);case 2:return t=e.sent,e.next=5,Object(l.M)(u,j,a.account);case 5:n=e.sent,s=(+t.trade).toFixed(2),r=n.volume1h,h({harvestDeriTrade:s,myTradingVolumeCurrent:r});case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(s.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.C)(u,j);case 2:t=e.sent,a=t.volume1h,w({totalTradingVolumeCurrent:a});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){return a&&a.account&&(I(),S()),function(){}}),[]),Object(b.jsxs)("div",{className:"liquidity-box",children:[Object(b.jsx)("div",{className:"odd title",children:v["trade-to-earn-deri"]}),Object(b.jsxs)("div",{className:"odd text",children:[Object(b.jsx)("div",{className:"text-title",children:v["total-trading-volume-in-current-hour"]}),Object(b.jsx)("div",{className:"text-num",children:k.totalTradingVolumeCurrent||0})]}),Object(b.jsxs)("div",{className:"odd text",children:[Object(b.jsx)("div",{className:"text-title",children:v["my-trading-volume-in-current-hour"]}),Object(b.jsx)("div",{className:"text-num",children:f.myTradingVolumeCurrent||0})]}),Object(b.jsxs)("div",{className:"odd text",children:[Object(b.jsx)("div",{className:"text-title"}),Object(b.jsx)("div",{className:"text-num"})]}),Object(b.jsxs)("div",{className:"odd text",children:[Object(b.jsx)("div",{className:"text-title"}),Object(b.jsx)("div",{className:"text-num"})]}),Object(b.jsxs)("div",{className:"odd text",children:[Object(b.jsx)("div",{className:"text-title"}),Object(b.jsx)("div",{className:"text-num"})]}),Object(b.jsx)("div",{className:"odd claim-network"}),Object(b.jsx)("div",{className:"claim-btn",children:Object(b.jsx)("button",{className:"claim",onClick:function(){var e=x.load(n),t=n.isV1?e.find((function(e){return Object(o.c)(e.pool,j)})):e.find((function(e){return Object(o.c)(e.pool,j)&&e.symbolId===m}));Object(o.r)(n.current,t),g.push("/lite")},children:v.trade})})]})})))}}]);
//# sourceMappingURL=5.396e3b8c.chunk.js.map