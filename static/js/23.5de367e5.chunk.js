(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[23],{723:function(e,i,n){},724:function(e,i,n){},745:function(e,i,n){"use strict";n.r(i);var s=n(28),a=n(19),t=n(7),c=n(33),d=n(670),l=(n(671),n(26)),o=n(177),b=n(623),r=n.n(b),j=n(97),u=n(631),h=(n(723),n(724),n(60)),p=o[l.DeriEnv.get()].chainInfo;i.default=Object(j.b)("wallet")(Object(j.c)((function(e){var i=e.wallet,n=e.lang,l=Object(t.useState)("liquidity"),o=Object(a.a)(l,2),b=o[0],j=o[1],O=Object(c.useParams)(),m=O.version,f=O.chainId,v=O.baseToken,k=O.address,y=O.type,I=Object(u.a)(),g=p[f].text,x={version:m,chainId:f,baseToken:v,address:k,wallet:i,type:y,lang:n},w=r()("mining-info",b);return I.has("baseTokenId")&&(x.baseTokenId=I.get("baseTokenId")),I.has("symbolId")&&(x.symbolId=I.get("symbolId")),Object(h.jsxs)("div",{className:w,children:[Object(h.jsxs)("div",{className:"pool-header",children:[Object(h.jsxs)("div",{className:"pool-network",children:[v," @ ",g]}),Object(h.jsx)("div",{className:"check-trade-liquidity",children:Object(h.jsx)("div",{className:"liquidity-mining",onClick:function(){return j("liquidity")},children:n["liquidity-mining"]})})]}),Object(h.jsx)("div",{className:"pool-info",children:Object(h.jsx)(d.a,Object(s.a)({},x))})]})})))}}]);
//# sourceMappingURL=23.5de367e5.chunk.js.map