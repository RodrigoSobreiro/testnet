(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[30],{1005:function(e,t,n){"use strict";var c=n(0),a=n.n(c),s=n(1),i=n(7),r=n(13),l=n(46),o=n(93),b=n(17),d=n(700),p=n(79),j=n(699),u=n(35),O=n(34),f=o[b.a.get()].chainInfo;t.a=Object(p.b)("wallet","version")(Object(p.c)((function(e){var t,n=e.wallet,c=(e.version,e.pool),o=e.lang,p=Object(r.useState)(""),A=Object(i.a)(p,2),m=A[0],x=A[1],h="logo ".concat(c.bTokenSymbol),v=Object(r.useState)({}),y=Object(i.a)(v,2),w=y[0],g=y[1],k=Object(l.useHistory)(),N=function(){n.connect()},S=function(){var e=Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.Q)(n.detail.account);case 2:if((t=e.sent).valid){e.next=6;break}return alert(o["no-deri-to-claim"]),e.abrupt("return");case 6:if(Object(u.e)(n.detail.chainId,t.chainId)){e.next=9;break}return alert(o["please-switch-to-BSC-to-claim-deri"]),e.abrupt("return");case 9:return e.next=11,Object(b.mb)(t.chainId,n.detail.account);case 11:e.sent.success||alert(o["claim-failed"]);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(s.a)(a.a.mark((function e(t){var n,c,s,i,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.G)(t.chainId,t.pool,t.bTokenId);case 2:return n=e.sent,e.next=5,Object(b.H)(t.chainId,t.pool,t.bTokenId);case 5:if(c=e.sent,s={liquidity:c.liquidity,apy:(100*+n.apy).toFixed(2),multiplier:n.multiplier},!t.isLp){e.next=13;break}return e.next=10,Object(b.C)(t.chainId,t.pool);case 10:i=e.sent,r=(100*+i.apy2).toFixed(2),s.lpApy=r;case 13:g(s);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){if(c&&c.airdrop)n.isConnected()?x(Object(O.jsx)(j.a,{btnText:o.claim,click:S,lang:o})):x(Object(O.jsx)(j.a,{btnText:o["connect-wallet"],click:N,lang:o}));else if(c.premining)x(Object(O.jsx)("a",{target:"_blank",href:c.url,children:o.staking}));else{var e="/mining/".concat(c.version||"v1","/").concat(c.chainId,"/").concat(c.type,"/").concat(c.symbol,"/").concat(c.bTokenSymbol,"/").concat(c.address);c.bTokenId&&(e="".concat(e,"?baseTokenId=").concat(c.bTokenId)),c.symbolId&&(e=e.indexOf("?")>0?"".concat(e,"&symbolId=").concat(c.symbolId):"".concat(e,"?symbolId=").concat(c.symbolId)),x(Object(O.jsx)("button",{onClick:function(){return function(e){k.push(e)}(e)},children:o.staking}))}return c&&I(c),function(){}}),[c]),Object(O.jsxs)("div",{className:"pool",children:[Object(O.jsxs)("div",{className:"pool-header",children:[Object(O.jsx)("div",{className:"network",children:c.network&&c.network.toUpperCase()}),Object(O.jsxs)("div",{className:"pool-label",children:["v1"===c.version&&Object(O.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAUCAYAAAAHpoRMAAAACXBIWXMAAAsSAAALEgHS3X78AAACpUlEQVRIicVWT2jTYBx9k4ZlLYhQb3aXFdZO8NCAG7RSVukOOmUwkLmDCN4UPSxF0PZeCqMZHmoOwi6evEgr4k2PTpeTUDrbyURaL8UU7GT1DzTyyS/lW0zabFZ98BGatvm99773+30ZMQwD/wspWfYCCAAYB1D3/AseKVlmxfxU1E9rkr6uAegwMkNzhlN5nCtmFtZp1flrXlF0/hmDyLyg61mLyjEAIbPYbCKRiEajM51O58OaoqxTMbb28opSo78mAeQA3ACwaVfMloyp8m46nfP5fKdKxeIzTdM+kfJ9KuPx+Pfz8/NZQRB+ALgC4KPlcScAZABMA2jzwqzwpGSZqYtylprKG9Vq9YskSYhEIm1N0x5xKnk8JKfWLESS3GrTPVtHTHjI7jFS+9Kyl0zNyVA47HcgkgYwBeAxLRNXAcwA2AKwQJ8X+5FhprgJ8G+5ISwSmS3ann4ose16t719WVXVI+S+1xLyp25a+y05NM0pYzm4SfbfsVHZa+VYLHY6OTcnNZvNjqqqt6mVzdw9p51g+YMbMq+JyBRHJmcYxrH3OzvrhUIhDEByaOXaZCg0Kori50AgcC+vKA/6FRpIplKptILBoFdvtZbyq6sjS8vLC8GJiTPlcrn2pFQapczVrSo5nAPwFcCbQbV+ZcZhYJn39HQmc0kQhG+vNjbU2UTierfb3RRF8ZoLV48CKALYpSD3JyOvrFwEcIEfyzYD6z43J3YpsO0BzwYXctZpWVfOuABrzVv0M8cJaoM0EcryrZ+SZdP5cW6u1f7aqU3DlD8c+UOywZznOotN98Yfk3FQyZ/IZmdVWQxsAt6DKzKW9w6ryl4bk1pWrJFXlL2DCttHxsV7h255BXBUeRiwbopSNw1V5WHAhh7by/qwVR4YAH4C104ah/PdWdoAAAAASUVORK5CYII=",alt:"v1"}),"v2"===c.version&&Object(O.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAUCAYAAAAHpoRMAAAACXBIWXMAAAsSAAALEgHS3X78AAACuUlEQVRIicVWS2gTURQ9hcTEBAtpstOsGtoaKZhAKswiJkUIWkUtSOmiCO78LTrpIqYLd6VQEgkSBReRkpUbm/hbVVdCtQNuAqMZpC7S7hKRGBNKICNP7pRnkmlGbe2Bx4Nh5t577j3nvelTVRUHhago2gAcA+AGUDL9jzqiosiSHQYwDMBJS3umAGiwYvasMxxLFyUbAqA9q9Aq8XsimazwMXoV84b28d1YhsLhsCAIp37UalupVOoRSxaJREyBQOCsY2DAz8VbB/AewHK3ZLrFREVx6E48vmi320fzudwrSZLKxLJBzNhqBIPBb+cmJhbMZnMTwAyALQCTAOIAPgJYoJ1hEcAZAPe7FWSKiiJjJxBbNzfLzWKxWPP7/fD5fFVJkp4kkkmlS91Zev8eFcJwC0AVwE3aNcQA5AFc7VoMl5wxft42yzEA3uGREadOIYz9cQBPaWkYp4TVLt8c0ZmEzYiAO3RD4Ecx0ysIQ7PZTKiqGlEU5eXjTOYtiVxz1wsj1v5EHRojATIc5UYR68LSzdnX6fV6vadDoUsOh8Mhy/JqbmVF09BrmgTTX083gdp9u010WVVVT3zZ2Mik0+kPnJU1ljtWjs7NXXa5XKNQVfmQxXKXE3MHenZGluWvHo/HWq5UphJLS31T09MXPYODQqFQ+Pwsn7cAOEnOYizrnLYmqXv9AJb07MzjV2d6HVjx+fkrZrN5+93a2sNQOHy91WqtW63Wazox+8nC2lhjOkLuLEacnb0A4DyzctspWeZYPqDgLOh3Eqxegiw5bJlGaxhGrwNNNww3OCHv9p4eVqOimKHO8+easm+3Nh2mO47idl7gijYFNpl/LqbdxpzmwCXjL8eSXixDxbT9d9h0bMwS1ynpZiKZrP8psd+K2UuWfwPmJoHc5DT637FfYIdesc3GBwMAPwHwfCc5wAJXPgAAAABJRU5ErkJggg==",alt:"v2"})]})]}),Object(O.jsx)("div",{className:"pool-info",children:Object(O.jsxs)("div",{className:"info-center",children:[Object(O.jsxs)("div",{className:"top-info",children:[Object(O.jsx)("div",{className:h}),Object(O.jsxs)("div",{className:"pool-detail",children:[Object(O.jsx)("div",{className:"base-token",children:c.bTokenSymbol}),Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{className:"title",children:c.airdrop?o.total:o["pool-liq"]}),Object(O.jsx)(d.a,{value:w.liquidity,displayType:"text",thousandSeparator:!0,decimalScale:(t=c.pool,"0x3f98429b673AF39671a495b5B12Ebd5C10092ccB"===t||"0x03dA5cB10D868c5F979b277eb6DF17D50E78fE2A"===t?7:0)})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{children:o.symbol}),c.symbol]}),Object(O.jsxs)("div",{className:"apy",children:[Object(O.jsx)("span",{children:o.apy}),Object(O.jsxs)("span",{children:[Object(O.jsx)("span",{className:w.lpApy?"sushi-apy-underline":"",tip:w.lpApy&&o["deri-apy"],children:w.apy?Object(O.jsx)(d.a,{value:w.apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2}):"--"}),w.lpApy&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("span",{children:" + "}),Object(O.jsxs)("span",{className:w.lpApy?"sushi-apy-underline":"",tip:w.lpApy&&c.label,children:[" ",Object(O.jsx)(d.a,{value:w.lpApy,displayType:"text",suffix:"%",decimalScale:2})]})]})]})]}),Object(O.jsxs)("div",{className:"pool-address",children:[Object(O.jsx)("span",{children:o.address}),c.airdrop?"--":Object(O.jsx)("a",{target:"_blank",rel:"noreferrer",href:f[c.chainId]&&"".concat(f[c.chainId].viewUrl,"/address/").concat(c.address||c.pool),children:c.formatAdd})]})]})]}),Object(O.jsx)("div",{className:"bottom-btn",children:m})]})})]})})))},1406:function(e,t,n){},1407:function(e,t,n){},1466:function(e,t,n){"use strict";n.r(t);var c=n(7),a=n(13),s=n(1005),i=n(761),r=(n(1406),n(1407),n(79)),l=n(154),o=n(34);t.default=Object(r.b)("version","loading")(Object(r.c)((function(e){var t=e.version,n=e.lang,r=e.loading,b=Object(i.a)(t,null,!0),d=Object(c.a)(b,7),p=d[0],j=(d[1],d[2],d[3],d[4],d[5]),u=d[6];return Object(a.useEffect)((function(){return p?r.loaded():r.loading(),function(){}}),[p]),Object(o.jsxs)("div",{className:"retired",children:[Object(o.jsxs)("div",{className:"retired-title",children:[Object(o.jsx)("div",{className:"retired-pools",children:n["retired-markets"]}),Object(o.jsxs)("span",{children:[n["v1-markets"]," ",Object(o.jsx)(l.b,{to:"/futures/pro/v1",children:n["v1-here"]})," ",n["to-close-position"]," "]}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{className:"retired-pools",children:n["retired-pools"]}),n["retired-text"],Object(o.jsx)("a",{href:"https://app.deri.finance/#/mining",children:n["new-pools"]})]}),Object(o.jsx)("div",{className:"retired-mining-info",children:Object(o.jsx)("div",{className:"pools",children:j.map((function(e,t){return Object(o.jsx)(s.a,{pool:e,lang:n},t)}))})}),Object(o.jsxs)("div",{className:"retired-title premining",children:[n["premining-pools"],Object(o.jsx)("span",{className:"premining-finished",children:n["premining-finished"]})]}),Object(o.jsx)("div",{className:"retired-mining-info",children:Object(o.jsx)("div",{className:"pools",children:u.map((function(e,t){return Object(o.jsx)(s.a,{pool:e,lang:n},t)}))})})]})})))},699:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n(0),a=n.n(c),s=n(1),i=n(7),r=n(13),l=n(34);function o(e){var t=e.btnText,n=e.className,c=e.disabled,o=e.click,b=e.afterClick,d=e.checkApprove,p=e.wallet,j=e.spec,u=e.lang,O=Object(r.useState)(c?"disabled":"enabled"),f=Object(i.a)(O,2),A=f[0],m=f[1],x=Object(r.useState)(!0),h=Object(i.a)(x,2),v=h[0],y=h[1],w=Object(r.useState)(!1),g=Object(i.a)(w,2),k=g[0],N=g[1],S=Object(r.useState)(t),I=Object(i.a)(S,2),T=I[0],V=I[1],C=Object(r.useRef)(null),E=function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===A){e.next=2;break}return e.abrupt("return");case 2:return Y(),e.next=5,o();case 5:e.sent&&b&&b(),Z();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(){m("disabled"),N(!0),C.current&&(C.current.style.display="inline-block")},Z=function(){C.current&&(C.current.style.display="none"),m("enabled"),N(!1)},L=function(){var e=Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(d&&p&&p.detail.account)){e.next=5;break}return e.next=3,p.isApproved(j.pool,j.bTokenId);case 3:t=e.sent,y(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Y(),e.next=3,p.approve(j.pool,j.bTokenId);case 3:e.sent.success?y(!0):(y(!1),alert(u["approve-failed"])),Z();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){return L(),function(){}}),[p,j,d]),Object(r.useEffect)((function(){return t&&V(t),function(){}}),[t]),Object(l.jsxs)("button",{className:n,onClick:function(){v?E():U()},children:[Object(l.jsx)("span",{className:"btn-loading-wrap",children:Object(l.jsx)("span",{ref:C,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),k?u.pending:v?T:u.approve]})}},700:function(e,t,n){"use strict";var c=n(51),a=n(709),s=n(45),i=n(7),r=n(13),l=n(706),o=n(79),b=n(34);t.a=Object(o.b)("wallet","trading")(Object(o.c)((function(e){var t=Object(r.useState)(Object(b.jsx)("span",{className:"loading-line"})),n=Object(i.a)(t,2),o=n[0],d=n[1],p=function(){var t=e.allowZero;return"object"!==Object(s.a)(e.value)&&void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t};return Object(r.useEffect)((function(){e.allowZero;var t=e.wallet,n=e.defaultValue,s=void 0===n?"--":n,i=Object(a.a)(e,["allowZero","wallet","defaultValue"]);p()?d(Object(b.jsx)(l.a,Object(c.a)(Object(c.a)({},i),{},{displayType:"text",fixedDecimalScale:!0}))):d(Object(b.jsx)("span",{className:"loading-line"}));var r=window.setTimeout((function(){p()||!t||t.isConnected()||d(s)}),3e4);return function(){clearTimeout(r)}}),[e.value]),o})))},761:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var c=n(13),a=n(17),s=n(93),i=n(35),r=n(19);n(754);const l=a.a.get(),{chainInfo:o}=s[l];function b(e,t,n){const[s,b]=Object(c.useState)(!1),[d,p]=Object(c.useState)([]),[j,u]=Object(c.useState)([]),[O,f]=Object(c.useState)([]),[A,m]=Object(c.useState)([]),[x,h]=Object(c.useState)([]),[v,y]=Object(c.useState)([]);return Object(c.useEffect)((()=>((async()=>{let c=Object(a.q)(l,"v2");const s=Object(a.q)(l,"v2_lite"),d=Object(a.q)(l,"option");let j=c.concat(s).concat(d);if(n){let e=Object(a.q)(l,"v1");const t=Object(a.L)(l);j=e.concat(t)}j=Object(i.c)(j),j=j.map((e=>Object(i.u)(e,t,o)));const O=Object(a.A)(l).map((async e=>{const t=e.pool||"";let n;return Object(i.s)(e.pool),Object(i.t)(e.pool)&&(n=r.a.get("mining","sushi-apy")),Object(i.r)(e.pool)&&(n=r.a.get("mining","cake-apy")),Object.assign(e,{network:o[e.chainId].name,formatAdd:Object(i.g)(t),address:t,type:"lp",label:n,buttonText:"STAKING"})})),A=j.concat(O);Promise.all(A).then((t=>{const n={network:"BSC",bTokenSymbol:"GIVEAWAY",liquidity:"5500",symbol:"--",airdrop:!0,chainId:56,apy:"--",buttonText:"CLAIM"};(new Date).getTime()<=1637316e6&&"testnet"!==l&&t.push(n);let c=t.filter((e=>("v1"===e.version||!e.version)&&!e.retired)),a=t.filter((e=>("v2"===e.version||"v2_lite"===e.version||"v2_lite_dpmm"===e.version)&&!e.retired)),s=t.filter((e=>"option"===e.version&&!e.retired));const r=t.filter((e=>e.retired&&!e.premining)),o=t.filter((e=>e.retired&&e.premining));let d=t.filter((e=>e.isOpen));e&&(c=Object(i.o)(c),a=Object(i.o)(a),s=Object(i.o)(s),d=Object(i.o)(d)),f(a),u(c),m(s),p(t),h(r),y(o),b(!0)}))})(),()=>d.length=0)),[]),[s,d,j,O,A,x,v]}},865:function(e,t){}}]);
//# sourceMappingURL=30.ef08696a.chunk.js.map