(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[5],{635:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var c=a(0),n=a.n(c),s=a(3),i=a(22),l=a(7),r=a(62);function d(e){var t=e.btnText,a=e.className,c=e.disabled,d=e.click,o=e.afterClick,u=e.checkApprove,j=e.wallet,b=e.spec,m=e.lang,x=Object(l.useState)(c?"disabled":"enabled"),O=Object(i.a)(x,2),v=O[0],p=O[1],h=Object(l.useState)(!0),f=Object(i.a)(h,2),y=f[0],N=f[1],g=Object(l.useState)(!1),k=Object(i.a)(g,2),w=k[0],I=k[1],S=Object(l.useState)(t),q=Object(i.a)(S,2),C=q[0],T=q[1],L=Object(l.useRef)(null),E=function(){var e=Object(s.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===v){e.next=2;break}return e.abrupt("return");case 2:return A(),e.next=5,d();case 5:e.sent&&o&&o(),F();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){p("disabled"),I(!0),L.current&&(L.current.style.display="inline-block")},F=function(){L.current&&(L.current.style.display="none"),p("enabled"),I(!1)},P=function(){var e=Object(s.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(u&&j&&j.detail.account)){e.next=5;break}return e.next=3,j.isApproved(b.pool,b.bTokenId);case 3:t=e.sent,N(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=Object(s.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A(),e.next=3,j.approve(b.pool,b.bTokenId);case 3:e.sent.success?N(!0):(N(!1),alert(m["approve-failed"])),F();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){return P(),function(){}}),[j,b,u]),Object(l.useEffect)((function(){return t&&T(t),function(){}}),[t]),Object(r.jsxs)("button",{className:a,onClick:function(){y?E():$()},children:[Object(r.jsx)("span",{className:"btn-loading-wrap",children:Object(r.jsx)("span",{ref:L,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),w?m.pending:y?C:m.approve]})}},637:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var c=a(31),n=a(186),s=a(22),i=a(7),l=a(638),r=a(62);function d(e){var t=Object(i.useState)("--"),a=Object(s.a)(t,2),d=a[0],o=a[1];return Object(i.useEffect)((function(){var t=e.allowZero,a=Object(n.a)(e,["allowZero"]);return(void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t)&&o(Object(r.jsx)(l.a,Object(c.a)(Object(c.a)({},a),{},{displayType:"text"}))),function(){}}),[e.value]),d}},641:function(e,t,a){"use strict";var c=a(31),n=a(6),s=a(9),i=a(14),l=a(13),r=a(7),d=a.n(r),o=a(651),u=a.n(o),j=a(106),b=a(62);t.a=function(e){var t=document.getElementById("root"),a={overlay:{position:"fixed",zIndex:1,background:"rgb(0 0 0 / 0.5)"},content:{position:"absolute",border:0,background:"none",inset:0,overflow:"initial"}},r=function(r){Object(i.a)(o,r);var d=Object(l.a)(o);function o(e){var t;return Object(n.a)(this,o),(t=d.call(this,e)).state={modalIsOpen:!1},t}return Object(s.a)(o,[{key:"render",value:function(){var n=this.props,s=n.modalIsOpen,i=n.className,l=n.overlay,r=void 0===l?{}:l,d=Object.assign(a.overlay,Object(c.a)({},r)),o=Object.assign(a,{overlay:d});return Object(b.jsx)(u.a,{isOpen:s,style:o,appElement:t,portalClassName:this.props.intl.locale,children:Object(b.jsx)("div",{className:i,children:Object(b.jsx)(e,Object(c.a)(Object(c.a)({},this.props),{},{className:i,onClose:this.props.onClose}))})})}}]),o}(d.a.Component);return Object(j.b)("intl")(Object(j.c)(r))}},642:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var c=a(7);function n(e){return Object(c.useEffect)((function(){return document.querySelector("body").style.overflow="hidden",function(){e||(document.querySelector("body").style.overflow="auto")}}),[]),null}},645:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var c=a(0),n=a.n(c),s=a(3),i=a(22),l=a(7),r=a(26);function d(e){var t=Object(l.useState)({}),a=Object(i.a)(t,2),c=a[0],d=a[1],o=null,u=function(){var t=Object(s.a)(n.a.mark((function t(){var a,c,s,i,l,o;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.isConnected()){t.next=10;break}return t.next=3,Object(r.getUserInfoAll)(e.detail.account);case 3:a=t.sent,c=(+a.total).toFixed(2),s=a.valid?(+a.amount).toFixed(2):0,i=(+a.lp).toFixed(2),l=(+a.trade).toFixed(2),o=a.chainId,d({claimed:c,unclaimed:s,harvestDeriLp:i,harvestDeriTrade:l,chainId:o});case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(l.useEffect)((function(){return o=window.setInterval(u,18e4),u(),function(){return clearInterval(o)}}),[e.detail.account]),[c,o]}},682:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var c=a(7),n=a(645),s=a(647),i=a(26),l=a(635),r=a(50),d=a(637),o=a(62);function u({wallet:e,miningClaim:t,tradingClaim:a,lang:u}){const[j,b]=Object(c.useState)(u["connect-wallet"]),[m,x]=Object(c.useState)(!1),[O,v]=Object(n.a)(e),[p,h]=Object(c.useState)(""),f=Object(s.a)(O.chainId);return Object(c.useEffect)((()=>{let a=null;return t&&(a=window.setInterval((()=>{let e=28800,t=parseInt(Date.now()/1e3),a=parseInt(t/e)*e+e-t,c=parseInt(a/3600),n=parseInt(a%3600/60),s=parseInt(a%60);h(`${c} ${u.h} ${n} ${u.m} ${s} ${u.s}`)}),1e3)),e.isConnected()?b(u.claim):b(u["collect-wallet"]),()=>{a&&clearInterval(a)}}),[e.detail.account]),Object(o.jsxs)("div",{className:"claim-box",children:[Object(o.jsx)("div",{className:"odd title",children:t?u["my-liquidity-providing-harvest-in-current-epoch"]:u["my-trading-harvest-in-current-epoch"]}),t&&Object(o.jsxs)("div",{className:"odd text",children:[Object(o.jsx)("div",{className:"text-title",children:u["current-epoch-remaining-time"]}),Object(o.jsx)("div",{className:"text-num",children:p})]}),Object(o.jsxs)("div",{className:"odd text",children:[t&&Object(o.jsx)("div",{className:"text-title",children:u["my-harvest-in-current-epoch-estimated"]}),a&&Object(o.jsx)("div",{className:"text-title",children:u["my-trading-harvest-in-current-epoch-Est"]}),Object(o.jsxs)("div",{className:"text-num",children:[t?O.harvestDeriLp:O.harvestDeriTrade," ",u.deri]})]}),Object(o.jsxs)("div",{className:"odd text",children:[Object(o.jsx)("div",{className:"text-title",children:u["claimed-deri"]}),Object(o.jsx)("div",{className:"text-num",children:m?(+O.claimed+ +O.unclaimed).toFixed(2):O.claimed})]}),Object(o.jsxs)("div",{className:"odd text",children:[Object(o.jsx)("div",{className:"text-title"}),Object(o.jsx)("div",{className:"text-num"})]}),Object(o.jsxs)("div",{className:"odd text",children:[Object(o.jsx)("div",{className:"text-title",children:u["unclaimed-deri"]}),Object(o.jsx)("div",{className:"text-num",children:m?0:Object(o.jsx)(d.a,{value:O.unclaimed,decimalScale:2})})]}),a&&Object(o.jsxs)("div",{className:"odd text",children:[Object(o.jsx)("div",{className:"text-title"}),Object(o.jsx)("div",{className:"text-num"})]}),Object(o.jsx)("div",{className:"odd claim-network",children:t&&Object(o.jsxs)("div",{className:"text-title",children:[u["your-deri-is-on"]," ",f.text,"  ",u["connect-to"]," ",f.text," ",u["to-claim"]]})}),Object(o.jsx)("div",{className:"claim-btn",children:Object(o.jsx)(l.a,{btnText:j,click:async()=>{if(e.isConnected()){await(async()=>void 0===f.text?void alert(`${u["wrong-network"]}`):Object(r.c)(e.detail.chainId,O.chainId)?0===+O.unclaimed?void alert(u["no-deri-to-claim-yet"]):parseInt(Date.now()/1e3)%28800<1800?void alert(u["claiming-DERI-is-disabled-during-first-30-minutes-of-each-epoch"]):(await Object(i.mintDToken)(e.detail.chainId,e.detail.account)).success?(clearInterval(v),!0):(alert(u["claim-failed"]),!1):void alert(`${u["your-deri-is-on"]} ${f.text} ${u["connect-to"]} ${f.text} ${u["to-claim"]}`))()&&x(!0)}else try{return!!await e.connect()}catch(t){return!1}},className:"claim",lang:u})})]})}},685:function(e,t,a){"use strict";var c=a(31),n=a(682),s=a(7),i=a(26),l=a(0),r=a.n(l),d=a(3),o=a(22),u=a(638),j=a(635);a(725);var b=a(642),m=a(637),x=a(62);var O=a(106),v=a(641),p=a(50);const h=Object(v.a)((function(e){var t=e.wallet,a=e.address,c=e.baseToken,n=e.onClose,l=e.afterAdd,O=e.balance,v=e.isLpPool,p=e.baseTokenId,h=e.symbolId,f=e.lang,y=Object(s.useState)("0"),N=Object(o.a)(y,2),g=N[0],k=N[1],w=Object(s.useState)("00"),I=Object(o.a)(w,2),S=I[0],q=I[1],C=Object(s.useState)(""),T=Object(o.a)(C,2),L=T[0],E=T[1],A=function(e){var t=e.wallet,a=e.address,c=e.symbolId,n=Object(s.useState)({}),l=Object(o.a)(n,2),u=l[0],j=l[1],b=function(){var e=Object(d.a)(r.a.mark((function e(){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isConnected()||!a){e.next=5;break}return e.next=3,Object(i.getSpecification)(t.detail.chainId,a,c);case 3:n=e.sent,j(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){return b(),function(){}}),t.detail.account,a),u}({wallet:t,address:a,symbolId:h});Object(b.a)();var F=function(){var e=Object(d.a)(r.a.mark((function e(){var c,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=Object(i.bg)(O),!Object(i.bg)(L).gt(c)){e.next=5;break}return alert(f["not-sufficient-funds"]),e.abrupt("return",!1);case 5:if(!(A&&+L<+A.minAddLiquidity)){e.next=8;break}return alert("".concat(f["the-input-liquidity-shall-not-be-less-than"]," ").concat(A.minAddLiquidity)),e.abrupt("return",!1);case 8:if(!(L<=0||isNaN(L))){e.next=11;break}return alert(f["it-has-to-be-greater-than-zero"]),e.abrupt("return",!1);case 11:if(n=null,!v){e.next=18;break}return e.next=15,Object(i.addLpLiquidity)(t.detail.chainId,a,t.detail.account,L);case 15:n=e.sent,e.next=21;break;case 18:return e.next=20,Object(i.addLiquidity)(t.detail.chainId,a,t.detail.account,L,p);case 20:n=e.sent;case 21:return n&&n.success||alert(f["failure-of-transaction"]),e.abrupt("return",!0);case 23:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){var e=(+O).toFixed(2),t=e.substring(e.indexOf(".")+1,e.length);return k(e),q(t),function(){}}),[O]),Object(x.jsx)("div",{className:"modal-dialog",children:Object(x.jsxs)("div",{className:"modal-content",children:[Object(x.jsxs)("div",{className:"modal-header",children:[Object(x.jsx)("div",{className:"title",children:f["add-liquidity"]}),Object(x.jsx)("div",{className:"close",onClick:n,children:Object(x.jsx)("span",{children:"\xd7"})})]}),Object(x.jsx)("div",{className:"modal-body",children:Object(x.jsxs)("div",{className:"margin-box-info",children:[Object(x.jsx)("div",{children:f["wallet-balance"]}),Object(x.jsxs)("div",{className:"money",children:[Object(x.jsxs)("span",{children:[Object(x.jsxs)("span",{className:"bt-balance",children:[Object(x.jsx)(u.a,{displayType:"text",value:g,thousandSeparator:!0,allowZero:!0,decimalScale:0}),".",Object(x.jsx)("span",{className:"float",children:Object(x.jsx)(u.a,{displayType:"text",value:S,thousandSeparator:!0,decimalScale:2,allowZero:!0})})]}),Object(x.jsx)("div",{className:"base-token",children:c})]}),Object(x.jsx)("span",{className:"add"})]}),Object(x.jsxs)("div",{className:"enter-margin",children:[Object(x.jsx)("div",{className:"input-margin",children:Object(x.jsxs)("div",{className:"box",children:[Object(x.jsx)("div",{className:"amount",style:{display:L?"block":"none"},children:f.liquidity}),Object(x.jsx)("input",{type:"number",className:"margin-value",placeholder:f.liquidity,value:L,onChange:function(e){var t=e.target.value;E(t)}})]})}),Object(x.jsx)("div",{children:c})]}),Object(x.jsxs)("div",{className:"max",children:[f.max,": ",Object(x.jsx)("span",{className:"max-num",children:Object(x.jsx)(m.a,{value:O,decimalScale:8})}),Object(x.jsx)("span",{className:"max-btn-left",onClick:function(){E(O)},children:f["add-all"]})]}),Object(x.jsx)("div",{className:"add-margin-btn",children:Object(x.jsx)(j.a,{className:"margin-btn",click:F,btnText:f.add,afterClick:l,lang:f})})]})})]})})})),f=Object(v.a)((function(e){var t=e.wallet,a=e.address,c=e.liqInfo,n=e.onClose,l=e.afterRemove,O=e.isLpPool,v=e.baseTokenId,p=e.unit,h=e.lang,f=e.version,y=Object(s.useState)(""),N=Object(o.a)(y,2),g=N[0],k=N[1],w=Object(s.useState)("0"),I=Object(o.a)(w,2),S=I[0],q=I[1],C=Object(s.useState)("00"),T=Object(o.a)(C,2),L=T[0],E=T[1];Object(b.a)();var A=function(){var e=Object(d.a)(r.a.mark((function e(){var n,s,l,d;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=Object(i.bg)(c.totalShares),!(s=Object(i.bg)(g)).gt(n)){e.next=5;break}return alert("".concat(h["your-current-max-removable-shares-are"],"  ").concat(c.totalShares)),e.abrupt("return",!1);case 5:if(O||"v1"!==f){e.next=10;break}if(!((l=+c.totalShares-+g)<1&&l>0)){e.next=10;break}return alert(h["staking-max-limit-tip"]),e.abrupt("return",!1);case 10:if(!(+g<=0||isNaN(g))){e.next=13;break}return alert(h["invalid-liquidity"]),e.abrupt("return",!1);case 13:if(d=null,!O){e.next=20;break}return e.next=17,Object(i.removeLpLiquidity)(t.detail.chainId,a,t.detail.account,g);case 17:d=e.sent,e.next=23;break;case 20:return e.next=22,Object(i.removeLiquidity)(t.detail.chainId,a,t.detail.account,g,v,n.eq(s));case 22:d=e.sent;case 23:if(d&&d.success){e.next=26;break}return alert(h["failure-of-transaction"]),e.abrupt("return",!1);case 26:return e.abrupt("return",!0);case 27:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){if(c&&c.formatShares){var e=c.formatShares,t=e.substring(e.indexOf(".")+1,e.indexOf(".")+3);q(e),E(t)}return function(){}}),[c.totalShares]),Object(x.jsx)("div",{className:"modal-dialog",children:Object(x.jsxs)("div",{className:"modal-content",children:[Object(x.jsxs)("div",{className:"modal-header",children:[Object(x.jsx)("div",{className:"title",children:h["remove-liquidity"]}),Object(x.jsx)("div",{className:"close","data-dismiss":"modal",onClick:n,children:Object(x.jsx)("span",{children:"\xd7"})})]}),Object(x.jsx)("div",{className:"modal-body",children:Object(x.jsxs)("div",{className:"margin-box-info",children:[Object(x.jsxs)("div",{children:[" ","v1"===f?h["shares-available"]:h["liquidity-available"]]}),Object(x.jsxs)("div",{className:"money",children:[Object(x.jsx)("span",{children:Object(x.jsxs)("span",{className:"bt-balance",children:[Object(x.jsx)(u.a,{displayType:"text",value:S,decimalScale:0,thousandSeparator:!0}),".",Object(x.jsx)("span",{className:"float",children:L})]})}),Object(x.jsx)("span",{className:"remove"})]}),Object(x.jsxs)("div",{className:"enter-margin",children:[Object(x.jsx)("div",{className:"input-margin",children:Object(x.jsxs)("div",{className:"box",children:[Object(x.jsx)("div",{className:"amount",style:{display:g?"block":"none"},children:"v1"===f?h["liquidity-shares"]:h.liquidity}),Object(x.jsx)("input",{type:"number",className:"margin-value",placeholder:"v1"===f?h["liquidity-shares"]:h.liquidity,value:g,onChange:function(e){var t=e.target.value;k(t)}})]})}),Object(x.jsx)("div",{children:p})]}),Object(x.jsxs)("div",{className:"max",children:[Object(x.jsx)("span",{children:h["max-removeable"]}),Object(x.jsx)("span",{className:"max-num",children:Object(x.jsx)(m.a,{value:c.totalShares,decimalScale:8})}),Object(x.jsx)("span",{className:"max-btn-left",onClick:function(){k(c.totalShares)},children:h["remove-all"]})]}),Object(x.jsx)("div",{className:"add-margin-btn",children:Object(x.jsx)(j.a,{click:A,className:"margin-btn",btnText:h.remove,afterClick:l,lang:h})})]})})]})})})),y=({version:e,wallet:t,chainId:a,address:c,baseToken:n,isLpPool:l,liqInfo:r,loadLiqidityInfo:d,baseTokenId:o,symbolId:u,lang:b})=>{const[m,O]=Object(s.useState)(!1),[v,y]=Object(s.useState)("add"),[N,g]=Object(s.useState)(!1),[k,w]=Object(s.useState)(""),[I,S]=Object(s.useState)(null),q=async()=>{if(t.isConnected()&&Object(p.c)(t.detail.chainId,a)){let e=null;e=l?await Object(i.getLpWalletBalance)(t.detail.chainId,c,t.detail.account):await Object(i.getWalletBalance)(t.detail.chainId,c,t.detail.account,o),"object"!==typeof e&&w(e)}};Object(s.useEffect)((()=>(q(),d(),()=>{})),[t.detail.account]);const C=async()=>{let e=null;e=l?await Object(i.unlockLp)(a,c,t.detail.account):await Object(i.unlock)(a,c,t.detail.account,o),e&&e.success?O(!0):alert(e.error&&e.error.message||b["approve-failed"])},T=async()=>{try{return!!await t.connect()}catch(e){return!1}},L=()=>{g(!0),y("add")},E=()=>{g(!1),q(),d(),t.refresh()},A=()=>{g(!0),y("remove")};return Object(s.useEffect)((()=>(t.isConnected()&&Object(p.c)(t.detail.chainId,a)&&(async()=>{if(l){const e=await Object(i.isLpUnlocked)(a,c,t.detail.account);return O(e),e}{const e=await Object(i.isUnlocked)(a,c,t.detail.account,o);O(e)}})(),()=>{})),[t.detail.account]),Object(s.useEffect)((()=>{if(t.isConnected()&&Object(p.c)(t.detail.chainId,a)&&m)S(Object(x.jsxs)("div",{className:"add-remove-liquidity",children:[Object(x.jsx)("button",{className:"add-liquidity",onClick:L,children:b["add-liquidity"]}),Object(x.jsx)("button",{className:"remove-liquidity",onClick:A,children:b["remove-liquidity"]})]}));else{let e=null;t.isConnected()?Object(p.c)(t.detail.chainId,a)?m||(e=Object(x.jsx)("div",{className:"approve",children:Object(x.jsx)(j.a,{className:"approve-btn",click:C,btnText:b.approve,lang:b})})):(t.switchNetwork({id:a}),e=Object(x.jsx)("div",{className:"approve",children:Object(x.jsx)(j.a,{className:"approve-btn wrong-network",btnText:b["wrong-network"],lang:b,click:()=>t.switchNetwork({id:a})})})):e=Object(x.jsx)("div",{className:"approve",children:Object(x.jsx)(j.a,{className:"approve-btn",click:T,btnText:b["connect-wallet"],lang:b})}),S(e)}return()=>{}}),[t.detail.account,m]),Object(x.jsxs)("div",{className:"liquidity-btn",children:["add"===v?Object(x.jsx)(h,{modalIsOpen:N,isLpPool:l,onClose:E,balance:k,address:c,wallet:t,baseToken:n,afterAdd:E,baseTokenId:o,symbolId:u,lang:b}):Object(x.jsx)(f,{modalIsOpen:N,isLpPool:l,onClose:E,liqInfo:r,address:c,wallet:t,version:e,unit:"v1"===e?b.shares:n,afterRemove:E,baseTokenId:o,symbolId:u,lang:b}),I]})};var N=Object(O.b)("wallet")(Object(O.c)((function({wallet:e,version:t,chainId:a,baseToken:c,address:n,type:l,baseTokenId:r,symbolId:d,lang:o}){const[u,j]=Object(s.useState)({}),[b,O]=Object(s.useState)(c),v="lp"===l,h=async()=>{const s=await Object(i.getPoolInfoApy)(a,n,r),l=await Object(i.getPoolLiquidity)(a,n,r);if(e.isConnected()&&Object(p.c)(a,e.detail.chainId)){let l,d=null;if(d=v?await Object(i.getLpLiquidityInfo)(a,n,e.detail.account):await Object(i.getLiquidityInfo)(a,n,e.detail.account,r),Object(p.k)(n)){l=100*+(await Object(i.getLpPoolInfoApy)(a,n)).apy2}if(d){const e=d.shares?Object(i.bg)(d.shares):Object(i.bg)(0);if("v1"===t||"v2_lite"===t){const t=e.isNaN()?Object(i.bg)(0):e.multipliedBy(d.shareValue);j({total:d.poolLiquidity,apy:(100*+s.apy).toFixed(2),shareValue:d.shareValue,percent:d.poolLiquidity>0?t.dividedBy(d.poolLiquidity).multipliedBy(100).toFixed(2):0,shares:e.toFixed(2),formatShares:e.toFixed(2),totalShares:Object(i.bg)(e).toString(),values:t.toFixed(2),lpApy:l,unit:o.shares,sharesTitle:o["staked-balance"]})}else j({total:d.poolLiquidity,apy:(100*+s.apy).toFixed(2),pnl:(+d.pnl).toFixed(2),shares:e.toString(),formatShares:Object(i.bg)(e).plus(d.pnl).toFixed(2),totalShares:Object(i.bg)(e).plus(d.pnl).toString(),percent:d.poolLiquidity>0?e.dividedBy(d.poolLiquidity).multipliedBy(100).toFixed(2):0,unit:c,sharesTitle:o["my-Liquidity"],multiplier:`${s.multiplier}x`})}}else{let e;if(Object(p.k)(n)){e=100*+(await Object(i.getLpPoolInfoApy)(a,n)).apy2}l&&j({total:l.liquidity,apy:100*+s.apy,lpApy:e})}};return Object(s.useEffect)((()=>(h(),Object(p.j)(n)&&O("CAKE-LP"),()=>{})),[e.detail.account,c]),Object(x.jsxs)("div",{className:"liquidity-box",children:[Object(x.jsxs)("div",{className:"odd title",children:[o.provide," ",b," ",o["earn-deri"]]}),Object(x.jsxs)("div",{className:"odd text",children:[Object(x.jsx)("div",{className:"text-title",children:o["pool-total-liquidity"]}),Object(x.jsx)("div",{className:"text-num",children:Object(x.jsx)(m.a,{allowZero:!0,value:u.total,suffix:` ${b}`,thousandSeparator:!0})})]}),"v2"===t&&Object(x.jsxs)("div",{className:"odd text",children:[Object(x.jsx)("div",{className:"text-title",children:o.multiplier}),Object(x.jsx)("div",{className:"text-num multiplier",title:o["multiplier-tip"],children:u.multiplier})]}),Object(x.jsxs)("div",{className:"odd text",children:[Object(x.jsx)("div",{className:"text-title",children:o.apy}),Object(x.jsxs)("div",{className:"text-num",children:[Object(x.jsx)("span",{title:Object(p.k)(n)&&"DERI-APY",className:`${Object(p.k)(n)&&"sushi-apy-underline"}`,children:Object(x.jsx)(m.a,{value:u.apy,decimalScale:2,suffix:"%"})}),Object(p.k)(n)&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("span",{children:" +"})," ",Object(x.jsx)("span",{className:"sushi-apy-underline text-num",title:Object(p.l)(n)?o["sushi-apy"]:o["cake-apy"],children:Object(x.jsx)(m.a,{value:u.lpApy,allowZero:!0,decimalScale:2,suffix:"%"})})]})]})]}),("v1"===t||"v2_lite"===t)&&Object(x.jsxs)("div",{className:"odd text",children:[Object(x.jsx)("div",{className:"text-title",children:o["liquidity-share-value"]}),Object(x.jsx)("div",{className:"text-num",children:Object(x.jsx)(m.a,{allowZero:!0,decimalScale:6,value:u.shareValue,suffix:" "+b,thousandSeparator:!0})})]}),Object(x.jsxs)("div",{className:"odd text",children:[Object(x.jsx)("div",{className:"text-title",children:o["my-liquidity-pencentage"]}),Object(x.jsx)("div",{className:"text-num",children:Object(x.jsx)(m.a,{allowZero:!0,value:u.percent,decimalScale:2,suffix:"%"})})]}),Object(x.jsxs)("div",{className:"odd text",children:[Object(x.jsxs)("div",{className:"text-title",children:[u.sharesTitle," "]}),Object(x.jsxs)("div",{className:"text-num",children:[Object(x.jsx)(m.a,{allowZero:!0,value:u.formatShares,decimalScale:2})," ",Object(x.jsx)("span",{children:u.unit})," "]})]}),"v2"===t&&Object(x.jsxs)("div",{className:"odd text claim-network",children:[Object(x.jsx)("div",{className:"text-title",children:o["mining-pnl"]}),Object(x.jsxs)("div",{className:"text-num",children:["\u2248 \xa0",Object(x.jsx)(m.a,{allowZero:!0,prefix:" ",value:u.pnl,decimalScale:2,suffix:" "+b})]})]}),("v1"===t||"v2_lite"===t)&&Object(x.jsx)("div",{className:"odd claim-network",children:Object(x.jsxs)("div",{className:"text-title money",children:[" ",Object(x.jsx)(m.a,{allowZero:!0,value:u.values,suffix:" "+b,decimalScale:2})]})}),Object(x.jsx)(y,{version:t,wallet:e,chainId:a,address:n,liqInfo:u,baseToken:b,isLpPool:v,loadLiqidityInfo:h,symbolId:d,baseTokenId:r,lang:o})]})})));t.a=function(e){return Object(x.jsxs)("div",{className:"liquidity-info",children:[Object(x.jsx)(n.a,Object(c.a)(Object(c.a)({},e),{},{miningClaim:!0})),Object(x.jsx)(N,Object(c.a)({},e))]})}},686:function(e,t,a){"use strict";a(31),a(186),a(682);var c=a(0),n=a.n(c),s=a(3),i=a(22),l=a(7),r=a(26),d=a(35),o=a(106),u=a(50),j=a(293),b=a(62),m=new j.a;Object(o.b)("version")(Object(o.c)((function(e){var t=e.wallet,a=void 0===t?{}:t,c=e.version,o=e.chainId,j=e.address,x=e.symbolId,O=e.lang,v=Object(l.useState)({}),p=Object(i.a)(v,2),h=p[0],f=p[1],y=Object(l.useState)({}),N=Object(i.a)(y,2),g=N[0],k=N[1],w=Object(d.useHistory)(),I=function(){var e=Object(s.a)(n.a.mark((function e(){var t,c,s,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(r.getUserInfoAll)(a.account);case 2:return t=e.sent,e.next=5,Object(r.getUserInfoInPool)(o,j,a.account);case 5:c=e.sent,s=(+t.trade).toFixed(2),i=c.volume1h,f({harvestDeriTrade:s,myTradingVolumeCurrent:i});case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(s.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(r.getPoolInfoApy)(o,j);case 2:t=e.sent,a=t.volume1h,k({totalTradingVolumeCurrent:a});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){return a&&a.account&&(I(),S()),function(){}}),[]),Object(b.jsxs)("div",{className:"liquidity-box",children:[Object(b.jsx)("div",{className:"odd title",children:O["trade-to-earn-deri"]}),Object(b.jsxs)("div",{className:"odd text",children:[Object(b.jsx)("div",{className:"text-title",children:O["total-trading-volume-in-current-hour"]}),Object(b.jsx)("div",{className:"text-num",children:g.totalTradingVolumeCurrent||0})]}),Object(b.jsxs)("div",{className:"odd text",children:[Object(b.jsx)("div",{className:"text-title",children:O["my-trading-volume-in-current-hour"]}),Object(b.jsx)("div",{className:"text-num",children:h.myTradingVolumeCurrent||0})]}),Object(b.jsxs)("div",{className:"odd text",children:[Object(b.jsx)("div",{className:"text-title"}),Object(b.jsx)("div",{className:"text-num"})]}),Object(b.jsxs)("div",{className:"odd text",children:[Object(b.jsx)("div",{className:"text-title"}),Object(b.jsx)("div",{className:"text-num"})]}),Object(b.jsxs)("div",{className:"odd text",children:[Object(b.jsx)("div",{className:"text-title"}),Object(b.jsx)("div",{className:"text-num"})]}),Object(b.jsx)("div",{className:"odd claim-network"}),Object(b.jsx)("div",{className:"claim-btn",children:Object(b.jsx)("button",{className:"claim",onClick:function(){var e=m.load(c),t=c.isV1?e.find((function(e){return Object(u.c)(e.pool,j)})):e.find((function(e){return Object(u.c)(e.pool,j)&&e.symbolId===x}));Object(u.o)(c.current,t),w.push("/lite")},children:O.trade})})]})})))},725:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var c,n=a(651),s=(c=n)&&c.__esModule?c:{default:c};t.default=s.default,e.exports=t.default}}]);
//# sourceMappingURL=5.45b54a80.chunk.js.map