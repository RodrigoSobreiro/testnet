(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[4],{574:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(27),c=a(167),s=a(15),r=a(5),i=a(576),l=a(58);function d(e){var t=Object(r.useState)("--"),a=Object(s.a)(t,2),d=a[0],o=a[1];return Object(r.useEffect)((function(){var t=e.allowZero,a=Object(c.a)(e,["allowZero"]);return(void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t)&&o(Object(l.jsx)(i.a,Object(n.a)(Object(n.a)({},a),{},{displayType:"text"}))),function(){}}),[e.value]),d}},575:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),c=a.n(n),s=a(1),r=a(15),i=a(5),l=(a(24),a(58));function d(e){var t=e.btnText,a=e.className,n=e.disabled,d=e.click,o=e.afterClick,u=e.checkApprove,b=e.wallet,j=e.spec,x=Object(i.useState)(n?"disabled":"enabled"),O=Object(r.a)(x,2),m=O[0],f=O[1],v=Object(i.useState)(!0),p=Object(r.a)(v,2),h=p[0],N=p[1],y=Object(i.useState)(!1),I=Object(r.a)(y,2),k=I[0],g=I[1],w=Object(i.useRef)(null),S=function(){var e=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===m){e.next=2;break}return e.abrupt("return");case 2:return L(),e.next=5,d();case 5:e.sent&&o&&o(),C();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){f("disabled"),g(!0),w.current&&(w.current.style.display="inline-block")},C=function(){w.current&&(w.current.style.display="none"),f("enabled"),g(!1)},T=function(){var e=Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(u&&b&&b.detail.account)){e.next=5;break}return e.next=3,b.isApproved(j.pool,j.bTokenId);case 3:t=e.sent,N(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L(),e.next=3,b.approve(j.pool,j.bTokenId);case 3:e.sent.success?N(!0):(N(!1),alert("Approve faild")),C();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){return T(),function(){}}),[b,j,u]),Object(l.jsxs)("button",{className:a,onClick:function(){h?S():E()},children:[Object(l.jsx)("span",{className:"btn-loading-wrap",children:Object(l.jsx)("span",{ref:w,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),k?"PENDING":h?t:"APPROVE"]})}},577:function(e,t,a){"use strict";var n=a(27),c=a(4),s=a(6),r=a(12),i=a(11),l=a(5),d=a.n(l),o=a(582),u=a.n(o),b=a(58);t.a=function(e){var t=document.getElementById("root"),a={overlay:{position:"fixed",zIndex:1,background:"rgb(0 0 0 / 0.5)"},content:{position:"absolute",border:0,background:"none",inset:0,overflow:"initial"}};return function(l){Object(r.a)(o,l);var d=Object(i.a)(o);function o(e){var t;return Object(c.a)(this,o),(t=d.call(this,e)).state={modalIsOpen:!1},t}return Object(s.a)(o,[{key:"render",value:function(){var c=this.props,s=c.modalIsOpen,r=c.className,i=c.overlay,l=void 0===i?{}:i,d=Object.assign(a.overlay,Object(n.a)({},l)),o=Object.assign(a,{overlay:d});return Object(b.jsx)(u.a,{isOpen:s,style:o,appElement:t,children:Object(b.jsx)("div",{className:r,children:Object(b.jsx)(e,Object(n.a)(Object(n.a)({},this.props),{},{className:r,onClose:this.props.onClose}))})})}}]),o}(d.a.Component)}},578:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(5);function c(e){return Object(n.useEffect)((function(){return document.querySelector("body").style.overflow="hidden",function(){e||(document.querySelector("body").style.overflow="auto")}}),[]),null}},601:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(31);function c(){return new URLSearchParams(Object(n.h)().search)}},602:function(e,t,a){"use strict";var n=a(27),c=a(603),s=a(68),r=a(0),i=a.n(r),l=a(1),d=a(15),o=a(5),u=a(24),b=a(576),j=a(575);a(629);var x=a(578),O=a(58);var m=a(164),f=a(577),v=a(43),p=a(574);var h=Object(f.a)((function(e){var t=e.wallet,a=e.address,n=e.baseToken,c=e.onClose,s=e.afterAdd,r=e.balance,m=e.isLpPool,f=e.baseTokenId,v=e.symbolId,p=Object(o.useState)("0"),h=Object(d.a)(p,2),N=h[0],y=h[1],I=Object(o.useState)("00"),k=Object(d.a)(I,2),g=k[0],w=k[1],S=Object(o.useState)(""),L=Object(d.a)(S,2),C=L[0],T=L[1],E=function(e){var t=e.wallet,a=e.address,n=e.symbolId,c=Object(o.useState)({}),s=Object(d.a)(c,2),r=s[0],b=s[1],j=function(){var e=Object(l.a)(i.a.mark((function e(){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isConnected()||!a){e.next=5;break}return e.next=3,Object(u.getSpecification)(t.detail.chainId,a,n);case 3:c=e.sent,b(c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){return j(),function(){}}),t.detail.account,a),r}({wallet:t,address:a,symbolId:v});Object(x.a)();var A=function(){var e=Object(l.a)(i.a.mark((function e(){var n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=Object(u.bg)(r),!Object(u.bg)(C).gt(n)){e.next=5;break}return alert("not sufficient funds"),e.abrupt("return",!1);case 5:if(!(E&&+C<+E.minAddLiquidity)){e.next=8;break}return alert("The input liquidity shall not be less than ".concat(E.minAddLiquidity)),e.abrupt("return",!1);case 8:if(!(C<=0||isNaN(C))){e.next=11;break}return alert("It has to be greater than zero"),e.abrupt("return",!1);case 11:if(c=null,!m){e.next=18;break}return e.next=15,Object(u.addLpLiquidity)(t.detail.chainId,a,t.detail.account,C);case 15:c=e.sent,e.next=21;break;case 18:return e.next=20,Object(u.addLiquidity)(t.detail.chainId,a,t.detail.account,C,f);case 20:c=e.sent;case 21:return c&&c.success||alert("failure of transaction"),e.abrupt("return",!0);case 23:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){var e=(+r).toFixed(2),t=e.substring(e.indexOf(".")+1,e.length);return y(e),w(t),function(){}}),[r]),Object(O.jsx)("div",{className:"modal-dialog",children:Object(O.jsxs)("div",{className:"modal-content",children:[Object(O.jsxs)("div",{className:"modal-header",children:[Object(O.jsx)("div",{className:"title",children:"ADD LIQUIDITY"}),Object(O.jsx)("div",{className:"close",onClick:c,children:Object(O.jsx)("span",{children:"\xd7"})})]}),Object(O.jsx)("div",{className:"modal-body",children:Object(O.jsxs)("div",{className:"margin-box-info",children:[Object(O.jsx)("div",{children:"Wallet Balance"}),Object(O.jsxs)("div",{className:"money",children:[Object(O.jsxs)("span",{children:[Object(O.jsxs)("span",{className:"bt-balance",children:[Object(O.jsx)(b.a,{displayType:"text",value:N,thousandSeparator:!0,allowZero:!0,decimalScale:0}),".",Object(O.jsx)("span",{className:"float",children:Object(O.jsx)(b.a,{displayType:"text",value:g,thousandSeparator:!0,decimalScale:2,allowZero:!0})})]}),Object(O.jsx)("div",{className:"base-token",children:n})]}),Object(O.jsx)("span",{className:"add"})]}),Object(O.jsxs)("div",{className:"enter-margin",children:[Object(O.jsx)("div",{className:"input-margin",children:Object(O.jsxs)("div",{className:"box",children:[Object(O.jsx)("div",{className:"amount",style:{display:C?"block":"none"},children:"LIQUIDITY"}),Object(O.jsx)("input",{type:"number",className:"margin-value",placeholder:"LIQUIDITY",value:C,onChange:function(e){var t=e.target.value;T(t)}})]})}),Object(O.jsx)("div",{children:n})]}),Object(O.jsxs)("div",{className:"max",children:["MAX: ",Object(O.jsx)("span",{className:"max-num",children:r}),Object(O.jsx)("span",{className:"max-btn-left",onClick:function(){T(r)},children:"ADD ALL"})]}),Object(O.jsx)("div",{className:"add-margin-btn",children:Object(O.jsx)(j.a,{className:"margin-btn",click:A,btnText:"ADD",afterClick:s})})]})})]})})})),N=Object(f.a)((function(e){var t=e.wallet,a=e.address,n=e.liqInfo,c=e.onClose,s=e.afterRemove,r=e.isLpPool,m=e.baseTokenId,f=e.unit,v=Object(o.useState)(""),p=Object(d.a)(v,2),h=p[0],N=p[1],y=Object(o.useState)("0"),I=Object(d.a)(y,2),k=I[0],g=I[1],w=Object(o.useState)("00"),S=Object(d.a)(w,2),L=S[0],C=S[1];Object(x.a)();var T=function(){var e=Object(l.a)(i.a.mark((function e(){var c,s,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=Object(u.bg)(n.totalShares),!Object(u.bg)(h).gt(c)){e.next=5;break}return alert("Your current max removable shares are  ".concat(n.totalShares)),e.abrupt("return",!1);case 5:if(r){e.next=10;break}if(!((s=+n.totalShares-+h)<1&&s>0)){e.next=10;break}return alert('Leaving staking balance of smaller than 1 is not allowed. Please click "MAX" to remove all if you are to withdraw all of your liquidity.'),e.abrupt("return",!1);case 10:if(!(+h<=0||isNaN(h))){e.next=13;break}return alert("Invalid Liquidity!"),e.abrupt("return",!1);case 13:if(l=null,!r){e.next=20;break}return e.next=17,Object(u.removeLpLiquidity)(t.detail.chainId,a,t.detail.account,h);case 17:l=e.sent,e.next=23;break;case 20:return e.next=22,Object(u.removeLiquidity)(t.detail.chainId,a,t.detail.account,h,m);case 22:l=e.sent;case 23:if(l&&l.success){e.next=26;break}return alert("failure of transaction"),e.abrupt("return",!1);case 26:return e.abrupt("return",!0);case 27:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){if(n&&n.formatShares){var e=n.formatShares,t=e.substring(e.indexOf(".")+1,e.indexOf(".")+3);g(e),C(t)}return function(){}}),[n.totalShares]),Object(O.jsx)("div",{className:"modal-dialog",children:Object(O.jsxs)("div",{className:"modal-content",children:[Object(O.jsxs)("div",{className:"modal-header",children:[Object(O.jsx)("div",{className:"title",children:"REMOVE LIQUIDITY"}),Object(O.jsx)("div",{className:"close","data-dismiss":"modal",onClick:c,children:Object(O.jsx)("span",{children:"\xd7"})})]}),Object(O.jsx)("div",{className:"modal-body",children:Object(O.jsxs)("div",{className:"margin-box-info",children:[Object(O.jsx)("div",{children:"Shares Available"}),Object(O.jsxs)("div",{className:"money",children:[Object(O.jsx)("span",{children:Object(O.jsxs)("span",{className:"bt-balance",children:[Object(O.jsx)(b.a,{displayType:"text",value:k,decimalScale:0,thousandSeparator:!0}),".",Object(O.jsx)("span",{className:"float",children:L})]})}),Object(O.jsx)("span",{className:"remove"})]}),Object(O.jsxs)("div",{className:"enter-margin",children:[Object(O.jsx)("div",{className:"input-margin",children:Object(O.jsxs)("div",{className:"box",children:[Object(O.jsx)("div",{className:"amount",style:{display:h?"block":"none"},children:"LIQUIDITY SHARES"}),Object(O.jsx)("input",{type:"number",className:"margin-value",placeholder:"LIQUIDITY SHARES",value:h,onChange:function(e){var t=e.target.value;N(t)}})]})}),Object(O.jsx)("div",{children:f})]}),Object(O.jsxs)("div",{className:"max",children:[Object(O.jsx)("span",{children:"MAX REMOVEABLE:"}),Object(O.jsx)("span",{className:"max-num",children:n.totalShares}),Object(O.jsx)("span",{className:"max-btn-left",onClick:function(){N(n.totalShares)},children:"REMOVE ALL"})]}),Object(O.jsx)("div",{className:"add-margin-btn",children:Object(O.jsx)(j.a,{click:T,className:"margin-btn",btnText:"REMOVE",afterClick:s})})]})})]})})})),y=function(e){var t=e.version,a=e.wallet,n=e.chainId,c=e.address,r=e.baseToken,b=e.isLpPool,x=e.liqInfo,m=e.loadLiqidityInfo,f=e.baseTokenId,p=e.symbolId,y=Object(o.useState)(!1),I=Object(d.a)(y,2),k=I[0],g=I[1],w=Object(o.useState)("add"),S=Object(d.a)(w,2),L=S[0],C=S[1],T=Object(o.useState)(!1),E=Object(d.a)(T,2),A=E[0],q=E[1],D=Object(o.useState)(""),P=Object(d.a)(D,2),R=P[0],M=P[1],V=Object(o.useState)(null),F=Object(d.a)(V,2),U=F[0],Y=F[1],B=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.isConnected()||!Object(v.b)(a.detail.chainId,n)){e.next=12;break}if(t=null,!b){e.next=8;break}return e.next=5,Object(u.getLpWalletBalance)(a.detail.chainId,c,a.detail.account);case 5:t=e.sent,e.next=11;break;case 8:return e.next=10,Object(u.getWalletBalance)(a.detail.chainId,c,a.detail.account,f);case 10:t=e.sent;case 11:"object"!==Object(s.a)(t)&&M(t);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){return B(),m(),function(){}}),[a.detail.account]);var Z=function(){var e=Object(l.a)(i.a.mark((function e(){var t,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!b){e.next=8;break}return e.next=3,Object(u.isLpUnlocked)(n,c,a.detail.account);case 3:return t=e.sent,g(t),e.abrupt("return",t);case 8:return e.next=10,Object(u.isUnlocked)(n,c,a.detail.account,f);case 10:return s=e.sent,g(s),e.abrupt("return",s);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=null,!b){e.next=7;break}return e.next=4,Object(u.unlockLp)(n,c,a.detail.account);case 4:t=e.sent,e.next=10;break;case 7:return e.next=9,Object(u.unlock)(n,c,a.detail.account,f);case 9:t=e.sent;case 10:t&&t.success?g(!0):alert(t.error&&t.error.message||"Approve failed");case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Q=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.connect();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){q(!0),C("add")},_=function(){q(!1),B(),m()},X=function(){q(!0),C("remove")};return Object(o.useEffect)((function(){return a.isConnected()&&Object(v.b)(a.detail.chainId,n)&&Z(),function(){}}),[a.detail.account]),Object(o.useEffect)((function(){if(a.isConnected()&&Object(v.b)(a.detail.chainId,n)&&k)Y(Object(O.jsxs)("div",{className:"add-remove-liquidity",children:[Object(O.jsx)("button",{className:"add-liquidity",onClick:W,children:"ADD LIQUIDITY"}),Object(O.jsx)("button",{className:"remove-liquidity",onClick:X,children:"REMOVE LIQUIDITY"})]}));else{var e=null;a.isConnected()?Object(v.b)(a.detail.chainId,n)?k||(e=Object(O.jsx)("div",{className:"approve",children:Object(O.jsx)(j.a,{className:"approve-btn",click:H,btnText:"APPROVE"})})):e=Object(O.jsx)("div",{className:"approve",children:Object(O.jsx)(j.a,{className:"approve-btn wrong-network",btnText:"Wrong Network"})}):e=Object(O.jsx)("div",{className:"approve",children:Object(O.jsx)(j.a,{className:"approve-btn",click:Q,btnText:"Connect Wallet"})}),Y(e)}return function(){}}),[a.detail.account,k]),Object(O.jsxs)("div",{className:"liquidity-btn",children:["add"===L?Object(O.jsx)(h,{modalIsOpen:A,isLpPool:b,onClose:_,balance:R,address:c,wallet:a,baseToken:r,afterAdd:_,baseTokenId:f,symbolId:p}):Object(O.jsx)(N,{modalIsOpen:A,isLpPool:b,onClose:_,liqInfo:x,address:c,wallet:a,unit:"v1"===t?"shares":r,afterRemove:_,baseTokenId:f,symbolId:p}),U]})},I=Object(m.b)("wallet")(Object(m.c)((function(e){var t=e.wallet,a=e.version,n=e.chainId,c=e.baseToken,s=e.address,r=e.type,b=e.baseTokenId,j=e.symbolId,x=Object(o.useState)({}),m=Object(d.a)(x,2),f=m[0],h=m[1],N=Object(o.useState)(c),I=Object(d.a)(N,2),k=I[0],g=I[1],w="lp"===r,S=function(){var e=Object(l.a)(i.a.mark((function e(){var r,l,d,o,j,x,O,m,f;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.getPoolInfoApy)(n,s,b);case 2:return r=e.sent,e.next=5,Object(u.getPoolLiquidity)(n,s,b);case 5:if(l=e.sent,!t.isConnected()||!Object(v.b)(n,t.detail.chainId)){e.next=25;break}if(d=null,!w){e.next=14;break}return e.next=11,Object(u.getLpLiquidityInfo)(n,s,t.detail.account);case 11:d=e.sent,e.next=17;break;case 14:return e.next=16,Object(u.getLiquidityInfo)(n,s,t.detail.account,b);case 16:d=e.sent;case 17:if(!Object(v.g)(s)){e.next=22;break}return e.next=20,Object(u.getLpPoolInfoApy)(n,s);case 20:j=e.sent,o=100*+j.apy2;case 22:d&&(x=Object(u.bg)(d.shares),"v1"===a?(O=x.multipliedBy(d.shareValue),h({total:+d.poolLiquidity,apy:(100*+r.apy).toFixed(2),shareValue:d.shareValue,percent:d.poolLiquidity>0?O.dividedBy(d.poolLiquidity).multipliedBy(100).toFixed(2):0,shares:x.toFixed(2),formatShares:x.toFixed(2),totalShares:Object(u.bg)(x).toString(),values:O.toFixed(2),lpApy:o,unit:"shares",sharesTitle:"Staked Balance"})):h({total:+d.poolLiquidity,apy:(100*+r.apy).toFixed(2),pnl:(+d.pnl).toFixed(2),shares:x.toString(),formatShares:x.toFixed(2),totalShares:Object(u.bg)(x).plus(d.pnl).toString(),percent:d.poolLiquidity>0?x.dividedBy(d.poolLiquidity).multipliedBy(100).toFixed(2):0,unit:c,sharesTitle:"My Liquidity"})),e.next=31;break;case 25:if(!Object(v.g)(s)){e.next=30;break}return e.next=28,Object(u.getLpPoolInfoApy)(n,s);case 28:f=e.sent,m=100*+f.apy2;case 30:l&&h({total:l.liquidity,apy:100*+r.apy,lpApy:m});case 31:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){return S(),Object(v.f)(s)&&g("CAKE-LP"),function(){}}),[t.detail.account,c]),Object(O.jsxs)("div",{className:"liquidity-box",children:[Object(O.jsxs)("div",{className:"odd title",children:["Provide ",k," Earn DERI"]}),Object(O.jsxs)("div",{className:"odd text",children:[Object(O.jsx)("div",{className:"text-title",children:"Pool Total Liquidity"}),Object(O.jsx)("div",{className:"text-num",children:Object(O.jsx)(p.a,{allowZero:!0,value:f.total,suffix:" ".concat(k),thousandSeparator:!0})})]}),Object(O.jsxs)("div",{className:"odd text",children:[Object(O.jsx)("div",{className:"text-title",children:"APY"}),Object(O.jsxs)("div",{className:"text-num",children:[Object(O.jsx)("span",{title:Object(v.g)(s)&&"DERI-APY",className:"".concat(Object(v.g)(s)&&"sushi-apy-underline"),children:Object(O.jsx)(p.a,{value:f.apy,decimalScale:2,suffix:"%"})}),Object(v.g)(s)&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("span",{children:" +"})," ",Object(O.jsx)("span",{className:"sushi-apy-underline text-num",title:Object(v.h)(s)?"SUSHI-APY":"CAKE-APY",children:Object(O.jsx)(p.a,{value:f.lpApy,allowZero:!0,decimalScale:2,suffix:"%"})})]})]})]}),"v1"===a&&Object(O.jsxs)("div",{className:"odd text",children:[Object(O.jsx)("div",{className:"text-title",children:"Liquidity Share Value"}),Object(O.jsx)("div",{className:"text-num",children:Object(O.jsx)(p.a,{allowZero:!0,decimalScale:6,value:f.shareValue,suffix:" "+k,thousandSeparator:!0})})]}),Object(O.jsxs)("div",{className:"odd text",children:[Object(O.jsx)("div",{className:"text-title",children:"My Liquidity Pencentage"}),Object(O.jsx)("div",{className:"text-num",children:Object(O.jsx)(p.a,{allowZero:!0,value:f.percent,decimalScale:2,suffix:"%"})})]}),Object(O.jsxs)("div",{className:"odd text",children:[Object(O.jsxs)("div",{className:"text-title",children:[f.sharesTitle," "]}),Object(O.jsxs)("div",{className:"text-num",children:[Object(O.jsx)(p.a,{allowZero:!0,value:f.formatShares,decimalScale:2})," ",Object(O.jsx)("span",{children:f.unit})," "]})]}),"v2"===a&&Object(O.jsxs)("div",{className:"odd text",children:[Object(O.jsx)("div",{className:"text-title",children:"Mining PnL"}),Object(O.jsxs)("div",{className:"text-num",children:["\u2248 \xa0",Object(O.jsx)(p.a,{allowZero:!0,prefix:" ",value:f.pnl,decimalScale:2,suffix:" "+k})]})]}),Object(O.jsx)("div",{className:"odd claim-network",children:Object(O.jsx)("div",{className:"text-title money",children:"v1"===a&&Object(O.jsx)(p.a,{allowZero:!0,value:f.values,suffix:" "+k,decimalScale:2})})}),Object(O.jsx)(y,{version:a,wallet:t,chainId:n,address:s,liqInfo:f,baseToken:k,isLpPool:w,loadLiqidityInfo:S,symbolId:j,baseTokenId:b})]})})));t.a=function(e){return Object(O.jsxs)("div",{className:"liquidity-info",children:[Object(O.jsx)(c.a,Object(n.a)(Object(n.a)({},e),{},{miningClaim:!0})),Object(O.jsx)(I,Object(n.a)({},e))]})}},603:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var n=a(0),c=a.n(n),s=a(1),r=a(15),i=a(5),l=a(24);var d=a(166);var o=a(575),u=a(43),b=a(58);function j(e){var t=e.wallet,a=e.miningClaim,n=e.tradingClaim,j=Object(i.useState)("Collect Wallet"),x=Object(r.a)(j,2),O=x[0],m=x[1],f=Object(i.useState)(!1),v=Object(r.a)(f,2),p=v[0],h=v[1],N=function(e){var t=Object(i.useState)({}),a=Object(r.a)(t,2),n=a[0],d=a[1],o=null,u=function(){var t=Object(s.a)(c.a.mark((function t(){var a,n,s,r,i,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.isConnected()){t.next=10;break}return t.next=3,Object(l.getUserInfoAll)(e.detail.account);case 3:a=t.sent,n=(+a.total).toFixed(2),s=a.valid?(+a.amount).toFixed(2):0,r=(+a.lp).toFixed(2),i=(+a.trade).toFixed(2),o=a.chainId,d({claimed:n,unclaimed:s,harvestDeriLp:r,harvestDeriTrade:i,chainId:o});case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(i.useEffect)((function(){return o=window.setInterval(u,18e4),u(),function(){return clearInterval(o)}}),[e.detail.account]),[n,o]}(t),y=Object(r.a)(N,2),I=y[0],k=y[1],g=Object(i.useState)(""),w=Object(r.a)(g,2),S=w[0],L=w[1],C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"chainInfo";return d[l.DeriEnv.get()][t][e]||{}}(I.chainId),T=function(){var e=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Object(u.b)(t.detail.chainId,I.chainId)){e.next=3;break}return alert("Your DERI is on ".concat(C.text," . Connect to ").concat(C.text," to claim.")),e.abrupt("return");case 3:if(0!==I.unclaimed){e.next=6;break}return alert("Sorry,no DERI to claim yet"),e.abrupt("return");case 6:if(!(parseInt(Date.now()/1e3)%28800<1800)){e.next=10;break}return alert("Claiming DERI is disabled during first 30 minutes of each epoch"),e.abrupt("return");case 10:return e.next=12,Object(l.mintDToken)(t.detail.chainId,t.detail.account);case 12:if(!e.sent.success){e.next=18;break}return clearInterval(k),e.abrupt("return",!0);case 18:return alert("Claim failed"),e.abrupt("return",!1);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isConnected()){e.next=5;break}return e.next=3,T();case 3:e.sent&&h(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){var e=null;return a&&(e=window.setInterval((function(){var e=28800,t=parseInt(Date.now()/1e3),a=parseInt(t/e)*e+e-t,n=parseInt(a/3600),c=parseInt(a%3600/60),s=parseInt(a%60);L("".concat(n," h ").concat(c," m ").concat(s," s"))}),1e3)),t.isConnected()?m("CLAIM"):m("Collect Wallet"),function(){e&&clearInterval(e)}}),[t.detail.account]),Object(b.jsxs)("div",{className:"claim-box",children:[Object(b.jsx)("div",{className:"odd title",children:a?"My Liquidity-Providing Harvest in Current Epoch":"My Trading Harvest in Current Epoch"}),a&&Object(b.jsxs)("div",{className:"odd text",children:[Object(b.jsx)("div",{className:"text-title",children:"Current Epoch Remaining Time"}),Object(b.jsx)("div",{className:"text-num",children:S})]}),Object(b.jsxs)("div",{className:"odd text",children:[a&&Object(b.jsx)("div",{className:"text-title",children:"My Harvest in Current Epoch (estimated)"}),n&&Object(b.jsx)("div",{className:"text-title",children:" My Trading Harvest in Current Epoch (Est)"}),Object(b.jsxs)("div",{className:"text-num",children:[a?I.harvestDeriLp:I.harvestDeriTrade," DERI"]})]}),Object(b.jsxs)("div",{className:"odd text",children:[Object(b.jsx)("div",{className:"text-title",children:"Claimed DERI"}),Object(b.jsx)("div",{className:"text-num",children:p?(+I.claimed+ +I.unclaimed).toFixed(2):I.claimed})]}),Object(b.jsxs)("div",{className:"odd text",children:[Object(b.jsx)("div",{className:"text-title"}),Object(b.jsx)("div",{className:"text-num"})]}),Object(b.jsxs)("div",{className:"odd text",children:[Object(b.jsx)("div",{className:"text-title",children:"Unclaimed DERI"}),Object(b.jsx)("div",{className:"text-num",children:p?0:(+I.unclaimed).toFixed(2)})]}),n&&Object(b.jsxs)("div",{className:"odd text",children:[Object(b.jsx)("div",{className:"text-title"}),Object(b.jsx)("div",{className:"text-num"})]}),Object(b.jsx)("div",{className:"odd claim-network",children:a&&Object(b.jsxs)("div",{className:"text-title",children:["Your DERI is on ",C.text," . Connect to ",C.text," to claim."]})}),Object(b.jsx)("div",{className:"claim-btn",children:Object(b.jsx)(o.a,{btnText:O,click:E,className:"claim"})})]})}},604:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(27),c=a(167),s=a(603),r=a(0),i=a.n(r),l=a(1),d=a(15),o=a(5),u=a(24),b=a(31),j=a(164),x=a(43),O=a(272),m=a(58),f=new O.a;var v=Object(j.b)("version")(Object(j.c)((function(e){var t=e.wallet,a=void 0===t?{}:t,n=e.version,c=e.chainId,s=e.address,r=e.symbolId,j=Object(o.useState)({}),O=Object(d.a)(j,2),v=O[0],p=O[1],h=Object(o.useState)({}),N=Object(d.a)(h,2),y=N[0],I=N[1],k=Object(b.g)(),g=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,r,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.getUserInfoAll)(a.account);case 2:return t=e.sent,e.next=5,Object(u.getUserInfoInPool)(c,s,a.account);case 5:n=e.sent,r=(+t.trade).toFixed(2),l=n.volume1h,p({harvestDeriTrade:r,myTradingVolumeCurrent:l});case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(l.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.getPoolInfoApy)(c,s);case 2:t=e.sent,a=t.volume1h,I({totalTradingVolumeCurrent:a});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){return a&&a.account&&(g(),w()),function(){}}),[]),Object(m.jsxs)("div",{className:"liquidity-box",children:[Object(m.jsx)("div",{className:"odd title",children:"Trade to Earn DERI"}),Object(m.jsxs)("div",{className:"odd text",children:[Object(m.jsx)("div",{className:"text-title",children:"Total Trading Volume in Current Hour"}),Object(m.jsx)("div",{className:"text-num",children:y.totalTradingVolumeCurrent||0})]}),Object(m.jsxs)("div",{className:"odd text",children:[Object(m.jsx)("div",{className:"text-title",children:"My Trading Volume in Current Hour"}),Object(m.jsx)("div",{className:"text-num",children:v.myTradingVolumeCurrent||0})]}),Object(m.jsxs)("div",{className:"odd text",children:[Object(m.jsx)("div",{className:"text-title"}),Object(m.jsx)("div",{className:"text-num"})]}),Object(m.jsxs)("div",{className:"odd text",children:[Object(m.jsx)("div",{className:"text-title"}),Object(m.jsx)("div",{className:"text-num"})]}),Object(m.jsxs)("div",{className:"odd text",children:[Object(m.jsx)("div",{className:"text-title"}),Object(m.jsx)("div",{className:"text-num"})]}),Object(m.jsx)("div",{className:"odd claim-network"}),Object(m.jsx)("div",{className:"claim-btn",children:Object(m.jsx)("button",{className:"claim",onClick:function(){var e=f.load(n),t=n.isV1?e.find((function(e){return Object(x.b)(e.pool,s)})):e.find((function(e){return Object(x.b)(e.pool,s)&&e.symbolId===r}));Object(x.l)(n.current,t),k.push("/lite")},children:"TRADE"})})]})})));function p(e){var t=e.wallet,a=Object(c.a)(e,["wallet"]);return Object(m.jsxs)("div",{className:"trade-info",children:[Object(m.jsx)(s.a,{wallet:t,tradingClaim:!0}),Object(m.jsx)(v,Object(n.a)({},a))]})}},629:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,c=a(582),s=(n=c)&&n.__esModule?n:{default:n};t.default=s.default,e.exports=t.default}}]);
//# sourceMappingURL=4.51086471.chunk.js.map