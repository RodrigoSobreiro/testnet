(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[14],{630:function(e,c,a){},637:function(e,c,a){"use strict";a.r(c);var i=a(25),n=a(15),t=a(6),s=a(32),d=a(602),l=a(604),o=a(24),b=a(166),r=(a(630),a(573)),j=a.n(r),h=a(164),I=a(601),O=a(59),u=b[o.DeriEnv.get()].chainInfo;c.default=Object(h.b)("wallet")(Object(h.c)((function(e){var c=e.wallet,a=Object(t.useState)("liquidity"),o=Object(n.a)(a,2),b=o[0],r=o[1],h=Object(s.i)(),m=h.version,p=h.chainId,v=h.symbol,N=h.baseToken,f=h.address,k=h.type,y=Object(I.a)(),x=u[p].text,T={version:m,chainId:p,symbol:v,baseToken:N,address:f,wallet:c,type:k};y.has("baseTokenId")&&(T.baseTokenId=y.get("baseTokenId")),y.has("symbolId")&&(T.symbolId=y.get("symbolId"));var g=j()("mining-info",b);return Object(O.jsxs)("div",{className:g,children:[Object(O.jsxs)("div",{className:"pool-header",children:[Object(O.jsx)("div",{className:"pool-network",children:"lp"===k||"v2"===m?"".concat(N," @ ").concat(x):"".concat(v,"/").concat(N," @ ").concat(x)}),Object(O.jsxs)("div",{className:"check-trade-liquidity",children:[Object(O.jsx)("div",{className:"liquidity-mining",onClick:function(){return r("liquidity")},children:"LIUQIDITY MINING"}),Object(O.jsx)("div",{className:"trade-mining",onClick:function(){return r("trade")},children:"TRADING MINING"})]})]}),Object(O.jsxs)("div",{className:"pool-info",children:[Object(O.jsx)(d.a,Object(i.a)({},T)),Object(O.jsx)(l.a,Object(i.a)({},T))]})]})})))}}]);
//# sourceMappingURL=14.bbcc9a99.chunk.js.map