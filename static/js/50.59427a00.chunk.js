(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[50],{1410:function(e,t,n){},1411:function(e,t,n){},1449:function(e,t,n){"use strict";n.r(t);var a=n(61),c=n(0),i=n.n(c),s=n(2),r=n(14),d=n(12),l=n(43),o=n(1081),u=(n(1083),n(20)),b=n(99),j=n(691),p=n.n(j),f=n(76),h=n(819),O=(n(1410),n(1411),n(34)),m=b[u.a.get()].chainInfo;t.default=Object(f.b)("wallet")(Object(f.c)((function(e){var t=e.wallet,n=e.lang,c=Object(d.useState)("liquidity"),b=Object(r.a)(c,2),j=b[0],f=b[1],v=Object(l.useParams)(),x=v.version,y=v.chainId,k=v.baseToken,w=v.address,I=v.type,g=Object(h.a)(),N=m[y].name,q=Object(d.useState)(!1),T=Object(r.a)(q,2),_=T[0],C=T[1],J={version:x,chainId:y,baseToken:k,address:w,wallet:t,type:I,lang:n},S=p()("mining-info",j);g.has("baseTokenId")&&(J.baseTokenId=g.get("baseTokenId")),g.has("symbolId")&&(J.symbolId=g.get("symbolId"));var E=function(){var e=Object(s.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.fb)(t.detail.chainId,w,t.detail.account);case 2:n=e.sent,C(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.nb.update();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){t&&t.detail&&t.detail.account&&"v2_lite_open"===x&&(F(),E())}),[t,t.detail,w]),Object(O.jsxs)("div",{className:S,children:[Object(O.jsxs)("div",{className:"pool-header",children:[Object(O.jsxs)("div",{className:"pool-network",children:[k," @ ",N]}),"v2_lite_open"!==x&&Object(O.jsx)("div",{className:"check-trade-liquidity",children:Object(O.jsx)("div",{className:"liquidity-mining",onClick:function(){return f("liquidity")},children:n["liquidity-mining"]})})]}),Object(O.jsx)("div",{className:"pool-info",children:Object(O.jsx)(o.a,Object(a.a)({},J))}),_&&Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"add-symbol",children:Object(O.jsx)("button",{onClick:function(){alert(n["please-operat"])},children:n["add-symbol"]})})})]})})))}}]);
//# sourceMappingURL=50.59427a00.chunk.js.map