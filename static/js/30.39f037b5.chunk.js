(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[30],{724:function(e,n,i){},725:function(e,n,i){},763:function(e,n,i){"use strict";i.r(n);var a=i(55),c=i(18),t=i(4),s=i(24),o=i(672),l=(i(674),i(16)),d=i(95),b=(i(724),i(725),i(613)),r=i.n(b),j=i(49),p=i(632),u=i(20),h=d[l.a.get()].chainInfo;n.default=Object(j.b)("wallet")(Object(j.c)((function(e){var n=e.wallet,i=e.lang,l=Object(t.useState)("liquidity"),d=Object(c.a)(l,2),b=d[0],j=d[1],m=Object(s.useParams)(),v=m.version,O=m.chainId,y=m.symbol,f=m.baseToken,k=m.address,I=m.type,g=Object(p.a)(),x=h[O]&&h[O].name,_={version:v,chainId:O,symbol:y,baseToken:f,address:k,wallet:n,type:I,lang:i};g.has("baseTokenId")&&(_.baseTokenId=g.get("baseTokenId")),g.has("symbolId")&&(_.symbolId=g.get("symbolId"));var w=r()("mining-info",b,{"open-zone":"v2_lite_open"===v});return Object(u.jsxs)("div",{className:w,children:[Object(u.jsxs)("div",{className:"pool-header",children:[Object(u.jsx)("div",{className:"pool-network",children:"lp"===I||"v2"===v||"v2_lite"===v||"v2_lite_open"===v||"option"===v?"".concat(f," @ ").concat(x):"".concat(y,"/").concat(f," @ ").concat(x)}),"v2_lite_open"!==v&&Object(u.jsx)("div",{className:"check-trade-liquidity",children:Object(u.jsx)("div",{className:"liquidity-mining",onClick:function(){return j("liquidity")},children:i["liquidity-mining"]})})]}),Object(u.jsx)("div",{className:"pool-info",children:Object(u.jsx)(o.a,Object(a.a)({},_))})]})})))}}]);
//# sourceMappingURL=30.39f037b5.chunk.js.map