(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[33],{1171:function(e,a,t){},1172:function(e,a,t){},1202:function(e,a,t){"use strict";t.r(a);var i=t(5),s=t(27),c=t(821),n=(t(823),t(15)),l=t(95),d=t(618),o=t.n(d),b=t(49),j=t(658),r=(t(1171),t(1172),t(20));const u=n.a.get(),{chainInfo:h}=l[u];a.default=Object(b.b)("wallet")(Object(b.c)((function({wallet:e,lang:a}){const[t,l]=Object(i.useState)("liquidity"),{version:d,chainId:b,baseToken:u,address:p,type:m}=Object(s.useParams)(),O=Object(j.a)(),y=h[b].name,[f,v]=Object(i.useState)(!1),k={version:d,chainId:b,baseToken:u,address:p,wallet:e,type:m,lang:a},x=o()("mining-info",t);return O.has("baseTokenId")&&(k.baseTokenId=O.get("baseTokenId")),O.has("symbolId")&&(k.symbolId=O.get("symbolId")),Object(i.useEffect)((()=>{e&&e.detail&&e.detail.account&&((async()=>{let a=await Object(n.S)(e.detail.chainId,p,e.detail.account);v(a)})(),"v2_lite_open"===d&&(async()=>{await n.Y.update()})())}),[e,e.detail,p]),Object(r.jsxs)("div",{className:x,children:[Object(r.jsxs)("div",{className:"pool-header",children:[Object(r.jsxs)("div",{className:"pool-network",children:[u," @ ",y]}),"v2_lite_open"!==d&&Object(r.jsx)("div",{className:"check-trade-liquidity",children:Object(r.jsx)("div",{className:"liquidity-mining",onClick:()=>l("liquidity"),children:a["liquidity-mining"]})})]}),Object(r.jsx)("div",{className:"pool-info",children:Object(r.jsx)(c.a,{...k})}),f&&Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"add-symbol",children:Object(r.jsx)("button",{onClick:()=>{alert(a["please-operat"])},children:a["add-symbol"]})})})]})})))}}]);
//# sourceMappingURL=33.4ccfd03a.chunk.js.map