(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[28],{749:function(e,i,n){},750:function(e,i,n){},775:function(e,i,n){"use strict";n.r(i);var s=n(29),a=n(23),t=n(6),c=n(37),d=n(686),l=(n(688),n(27)),o=n(144),b=n(637),r=n.n(b),j=n(107),u=n(650),h=(n(749),n(750),n(65)),p=o[l.DeriEnv.get()].chainInfo;i.default=Object(j.b)("wallet")(Object(j.c)((function(e){var i=e.wallet,n=e.lang,l=Object(t.useState)("liquidity"),o=Object(a.a)(l,2),b=o[0],j=o[1],O=Object(c.useParams)(),m=O.version,f=O.chainId,v=O.baseToken,k=O.address,y=O.type,I=Object(u.a)(),g=p[f].text,x={version:m,chainId:f,baseToken:v,address:k,wallet:i,type:y,lang:n},w=r()("mining-info",b);return I.has("baseTokenId")&&(x.baseTokenId=I.get("baseTokenId")),I.has("symbolId")&&(x.symbolId=I.get("symbolId")),Object(h.jsxs)("div",{className:w,children:[Object(h.jsxs)("div",{className:"pool-header",children:[Object(h.jsxs)("div",{className:"pool-network",children:[v," @ ",g]}),Object(h.jsx)("div",{className:"check-trade-liquidity",children:Object(h.jsx)("div",{className:"liquidity-mining",onClick:function(){return j("liquidity")},children:n["liquidity-mining"]})})]}),Object(h.jsx)("div",{className:"pool-info",children:Object(h.jsx)(d.a,Object(s.a)({},x))})]})})))}}]);
//# sourceMappingURL=28.d314cc87.chunk.js.map