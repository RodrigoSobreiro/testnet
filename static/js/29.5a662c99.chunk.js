(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[29],{715:function(e,i,s){},716:function(e,i,s){},754:function(e,i,s){"use strict";s.r(i);var n=s(2),a=s(21),t=s(663),c=(s(664),s(13)),l=s(90),d=(s(715),s(716),s(608)),o=s.n(d),b=s(45),r=s(622),j=s(17);const h=c.a.get(),{chainInfo:m}=l[h];i.default=Object(b.b)("wallet")(Object(b.c)((function({wallet:e,lang:i}){const[s,c]=Object(n.useState)("liquidity"),{version:l,chainId:d,symbol:b,baseToken:h,address:p,type:u}=Object(a.useParams)(),y=Object(r.a)(),O=m[d]&&m[d].name,v={version:l,chainId:d,symbol:b,baseToken:h,address:p,wallet:e,type:u,lang:i};y.has("baseTokenId")&&(v.baseTokenId=y.get("baseTokenId")),y.has("symbolId")&&(v.symbolId=y.get("symbolId"));const f=o()("mining-info",s);return Object(j.jsxs)("div",{className:f,children:[Object(j.jsxs)("div",{className:"pool-header",children:[Object(j.jsx)("div",{className:"pool-network",children:"lp"===u||"v2"===l||"v2_lite"===l||"option"===l?`${h} @ ${O}`:`${b}/${h} @ ${O}`}),Object(j.jsx)("div",{className:"check-trade-liquidity",children:Object(j.jsx)("div",{className:"liquidity-mining",onClick:()=>c("liquidity"),children:i["liquidity-mining"]})})]}),Object(j.jsx)("div",{className:"pool-info",children:Object(j.jsx)(t.a,{...v})})]})})))}}]);
//# sourceMappingURL=29.5a662c99.chunk.js.map