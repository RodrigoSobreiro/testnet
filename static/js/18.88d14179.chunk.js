(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[18],{609:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(60),a=n.n(c),s=n(607),i=n(606),r=n(2),o=n(17);function l(e){var t=e.btnText,n=e.className,c=e.disabled,l=e.click,d=e.afterClick,b=e.checkApprove,p=e.wallet,u=e.spec,j=e.lang,O=Object(r.useState)(c?"disabled":"enabled"),A=Object(i.a)(O,2),f=A[0],m=A[1],h=Object(r.useState)(!0),x=Object(i.a)(h,2),v=x[0],y=x[1],w=Object(r.useState)(!1),k=Object(i.a)(w,2),g=k[0],S=k[1],I=Object(r.useState)(t),N=Object(i.a)(I,2),T=N[0],V=N[1],C=Object(r.useRef)(null),E=function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===f){e.next=2;break}return e.abrupt("return");case 2:return Y(),e.next=5,l();case 5:e.sent&&d&&d(),Z();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(){m("disabled"),S(!0),C.current&&(C.current.style.display="inline-block")},Z=function(){C.current&&(C.current.style.display="none"),m("enabled"),S(!1)},U=function(){var e=Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(b&&p&&p.detail.account)){e.next=5;break}return e.next=3,p.isApproved(u.pool,u.bTokenId);case 3:t=e.sent,y(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Y(),e.next=3,p.approve(u.pool,u.bTokenId);case 3:e.sent.success?y(!0):(y(!1),alert(j["approve-failed"])),Z();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){return U(),function(){}}),[p,u,b]),Object(r.useEffect)((function(){return t&&V(t),function(){}}),[t]),Object(o.jsxs)("button",{className:n,onClick:function(){v?E():B()},children:[Object(o.jsx)("span",{className:"btn-loading-wrap",children:Object(o.jsx)("span",{ref:C,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),g?j.pending:v?T:j.approve]})}},610:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(89),a=n(613),s=n(606),i=n(2),r=n(611),o=n(17);function l(e){var t=Object(i.useState)("--"),n=Object(s.a)(t,2),l=n[0],d=n[1];return Object(i.useEffect)((function(){var t=e.allowZero,n=Object(a.a)(e,["allowZero"]);return(void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t)&&d(Object(o.jsx)(r.a,Object(c.a)(Object(c.a)({},n),{},{displayType:"text"}))),function(){}}),[e.value]),l}},615:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(2),a=n(13),s=n(90),i=n(35);n(9);const r=a.a.get(),{chainInfo:o}=s[r];function l(e){const[t,n]=Object(c.useState)(!1),[s,l]=Object(c.useState)([]),[d,b]=Object(c.useState)([]),[p,u]=Object(c.useState)([]),[j,O]=Object(c.useState)([]),[A,f]=Object(c.useState)([]),[m,h]=Object(c.useState)([]);return Object(c.useEffect)((()=>{const t=e=>{const t=[];return e.reduce(((e,t)=>{const n=e.find((e=>Object(i.c)(e.pool.address,t.address)));if(n&&n.list.length<5)n.list.push(t);else{const n={pool:{network:t.network,symbol:t.symbol,address:t.address,formatAdd:t.formatAdd,version:t.version,chainId:t.chainId,airdrop:t.airdrop,type:t.type,bTokenSymbol:t.bTokenSymbol,bTokenId:t.bTokenId,symbolId:t.symbolId},list:[t]};e.push(n)}return e}),t),t};let c=Object(a.l)(r,"v2"),d=Object(a.l)(r,"v1");const p=Object(a.l)(r,"v2_lite"),j=Object(a.l)(r,"option"),A=Object(a.D)(r);let m=c.concat(d).concat(A).concat(p).concat(j).reduce(((e,t)=>{const n=e.findIndex((e=>e.chainId===t.chainId&&e.bTokenSymbol===t.bTokenSymbol&&t.version===e.version));return("v2"===t.version||"v2_lite"===t.version||"option"===t.version)&&n>-1&&-1===e[n].symbol.indexOf(t.symbol)?e[n].symbol+=`,${t.symbol}`:e.push(t),e}),[]);m=m.map((async e=>{const t=await Object(a.B)(e.chainId,e.pool,e.bTokenId)||{},n=await Object(a.A)(e.chainId,e.pool,e.bTokenId)||{},c=e.pool||"";return Object.assign(e,{network:o[e.chainId]&&o[e.chainId].name,liquidity:t.liquidity,apy:(100*+n.apy).toFixed(2),formatAdd:Object(i.d)(c),address:c,type:"perpetual",buttonText:"STAKING",multiplier:n.multiplier})}));const x=Object(a.v)(r).map((async e=>{const t=await Object(a.B)(e.chainId,e.pool)||{},n=await Object(a.A)(e.chainId,e.pool)||{},c=e.pool||"";let s,r;if(Object(i.k)(e.pool)){let t=await Object(a.x)(e.chainId,e.pool);s=t&&(100*+t.apy2).toFixed(2)}return Object(i.l)(e.pool)&&(r="SUSHI-APY"),Object(i.j)(e.pool)&&(r="CAKE-APY"),Object.assign(e,{network:o[e.chainId].name,liquidity:t.liquidity,apy:(100*+n.apy).toFixed(2),formatAdd:Object(i.d)(c),lpApy:s,address:c,type:"lp",label:r,buttonText:"STAKING"})})),v=m.concat(x);return Promise.all(v).then((c=>{c.push({network:"BSC",bTokenSymbol:"GIVEAWAY",liquidity:"1002200",symbol:"--",airdrop:!0,chainId:56,buttonText:"CLAIM"});let a=c.filter((e=>("v1"===e.version||!e.version)&&!e.retired)),s=c.filter((e=>("v2"===e.version||"v2_lite"===e.version)&&!e.retired)),i=c.filter((e=>"option"===e.version&&!e.retired));const r=c.filter((e=>e.retired&&!e.premining)),o=c.filter((e=>e.retired&&e.premining));e&&(a=t(a),s=t(s),i=t(i)),u(s),b(a),O(i),l(c),f(r),h(o),n(!0)})),()=>s.length=0}),[]),[t,s,d,p,j,A,m]}},642:function(e,t,n){"use strict";var c=n(60),a=n.n(c),s=n(607),i=n(606),r=n(2),o=n(21),l=n(90),d=n(13),b=n(610),p=n(45),u=n(609),j=n(35),O=n(17),A=l[d.a.get()].chainInfo;t.a=Object(p.b)("wallet","version")(Object(p.c)((function(e){var t,n=e.wallet,c=(e.version,e.pool),l=e.lang,p=Object(r.useState)(""),f=Object(i.a)(p,2),m=f[0],h=f[1],x="logo ".concat(c.bTokenSymbol),v=Object(o.useHistory)(),y=function(){n.connect()},w=function(){var e=Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.H)(n.detail.account);case 2:if((t=e.sent).valid){e.next=6;break}return alert(l["no-deri-to-claim"]),e.abrupt("return");case 6:if(Object(j.c)(n.detail.chainId,t.chainId)){e.next=9;break}return alert(l["please-switch-to-BSC-to-claim-deri"]),e.abrupt("return");case 9:return e.next=11,Object(d.Q)(t.chainId,n.detail.account);case 11:e.sent.success||alert(l["claim-failed"]);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){if(c&&c.airdrop)n.isConnected()?h(Object(O.jsx)(u.a,{btnText:l.claim,click:w,lang:l})):h(Object(O.jsx)(u.a,{btnText:l["connect-wallet"],click:y,lang:l}));else if(c.premining)h(Object(O.jsx)("a",{target:"_blank",href:c.url,children:l.staking}));else{var e="/mining/".concat(c.version||"v1","/").concat(c.chainId,"/").concat(c.type,"/").concat(c.symbol,"/").concat(c.bTokenSymbol,"/").concat(c.address);c.bTokenId&&(e="".concat(e,"?baseTokenId=").concat(c.bTokenId)),c.symbolId&&(e=e.indexOf("?")>0?"".concat(e,"&symbolId=").concat(c.symbolId):"".concat(e,"?symbolId=").concat(c.symbolId)),h(Object(O.jsx)("button",{onClick:function(){return function(e){v.push(e)}(e)},children:l.staking}))}return function(){}}),[c]),Object(O.jsxs)("div",{className:"pool",children:[Object(O.jsxs)("div",{className:"pool-header",children:[Object(O.jsx)("div",{className:"network",children:c.network&&c.network.toUpperCase()}),Object(O.jsxs)("div",{className:"pool-label",children:["v1"===c.version&&Object(O.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAUCAYAAAAHpoRMAAAACXBIWXMAAAsSAAALEgHS3X78AAACpUlEQVRIicVWT2jTYBx9k4ZlLYhQb3aXFdZO8NCAG7RSVukOOmUwkLmDCN4UPSxF0PZeCqMZHmoOwi6evEgr4k2PTpeTUDrbyURaL8UU7GT1DzTyyS/lW0zabFZ98BGatvm99773+30ZMQwD/wspWfYCCAAYB1D3/AseKVlmxfxU1E9rkr6uAegwMkNzhlN5nCtmFtZp1flrXlF0/hmDyLyg61mLyjEAIbPYbCKRiEajM51O58OaoqxTMbb28opSo78mAeQA3ACwaVfMloyp8m46nfP5fKdKxeIzTdM+kfJ9KuPx+Pfz8/NZQRB+ALgC4KPlcScAZABMA2jzwqzwpGSZqYtylprKG9Vq9YskSYhEIm1N0x5xKnk8JKfWLESS3GrTPVtHTHjI7jFS+9Kyl0zNyVA47HcgkgYwBeAxLRNXAcwA2AKwQJ8X+5FhprgJ8G+5ISwSmS3ann4ose16t719WVXVI+S+1xLyp25a+y05NM0pYzm4SfbfsVHZa+VYLHY6OTcnNZvNjqqqt6mVzdw9p51g+YMbMq+JyBRHJmcYxrH3OzvrhUIhDEByaOXaZCg0Kori50AgcC+vKA/6FRpIplKptILBoFdvtZbyq6sjS8vLC8GJiTPlcrn2pFQapczVrSo5nAPwFcCbQbV+ZcZhYJn39HQmc0kQhG+vNjbU2UTierfb3RRF8ZoLV48CKALYpSD3JyOvrFwEcIEfyzYD6z43J3YpsO0BzwYXctZpWVfOuABrzVv0M8cJaoM0EcryrZ+SZdP5cW6u1f7aqU3DlD8c+UOywZznOotN98Yfk3FQyZ/IZmdVWQxsAt6DKzKW9w6ryl4bk1pWrJFXlL2DCttHxsV7h255BXBUeRiwbopSNw1V5WHAhh7by/qwVR4YAH4C104ah/PdWdoAAAAASUVORK5CYII=",alt:"v1"}),"v2"===c.version&&Object(O.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAUCAYAAAAHpoRMAAAACXBIWXMAAAsSAAALEgHS3X78AAACuUlEQVRIicVWS2gTURQ9hcTEBAtpstOsGtoaKZhAKswiJkUIWkUtSOmiCO78LTrpIqYLd6VQEgkSBReRkpUbm/hbVVdCtQNuAqMZpC7S7hKRGBNKICNP7pRnkmlGbe2Bx4Nh5t577j3nvelTVRUHhago2gAcA+AGUDL9jzqiosiSHQYwDMBJS3umAGiwYvasMxxLFyUbAqA9q9Aq8XsimazwMXoV84b28d1YhsLhsCAIp37UalupVOoRSxaJREyBQOCsY2DAz8VbB/AewHK3ZLrFREVx6E48vmi320fzudwrSZLKxLJBzNhqBIPBb+cmJhbMZnMTwAyALQCTAOIAPgJYoJ1hEcAZAPe7FWSKiiJjJxBbNzfLzWKxWPP7/fD5fFVJkp4kkkmlS91Zev8eFcJwC0AVwE3aNcQA5AFc7VoMl5wxft42yzEA3uGREadOIYz9cQBPaWkYp4TVLt8c0ZmEzYiAO3RD4Ecx0ysIQ7PZTKiqGlEU5eXjTOYtiVxz1wsj1v5EHRojATIc5UYR68LSzdnX6fV6vadDoUsOh8Mhy/JqbmVF09BrmgTTX083gdp9u010WVVVT3zZ2Mik0+kPnJU1ljtWjs7NXXa5XKNQVfmQxXKXE3MHenZGluWvHo/HWq5UphJLS31T09MXPYODQqFQ+Pwsn7cAOEnOYizrnLYmqXv9AJb07MzjV2d6HVjx+fkrZrN5+93a2sNQOHy91WqtW63Wazox+8nC2lhjOkLuLEacnb0A4DyzctspWeZYPqDgLOh3Eqxegiw5bJlGaxhGrwNNNww3OCHv9p4eVqOimKHO8+easm+3Nh2mO47idl7gijYFNpl/LqbdxpzmwCXjL8eSXixDxbT9d9h0bMwS1ynpZiKZrP8psd+K2UuWfwPmJoHc5DT637FfYIdesc3GBwMAPwHwfCc5wAJXPgAAAABJRU5ErkJggg==",alt:"v2"})]})]}),Object(O.jsx)("div",{className:"pool-info",children:Object(O.jsxs)("div",{className:"info-center",children:[Object(O.jsxs)("div",{className:"top-info",children:[Object(O.jsx)("div",{className:x}),Object(O.jsxs)("div",{className:"pool-detail",children:[Object(O.jsx)("div",{className:"base-token",children:c.bTokenSymbol}),Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{className:"title",children:c.airdrop?l.total:l["pool-liq"]}),Object(O.jsx)(b.a,{value:c.liquidity,displayType:"text",thousandSeparator:!0,decimalScale:(t=c.pool,"0x3f98429b673AF39671a495b5B12Ebd5C10092ccB"===t||"0x03dA5cB10D868c5F979b277eb6DF17D50E78fE2A"===t?7:0)})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{children:l.symbol}),c.symbol]}),Object(O.jsxs)("div",{className:"apy",children:[Object(O.jsx)("span",{children:l.apy}),Object(O.jsxs)("span",{children:[Object(O.jsx)("span",{className:c.lpApy?"sushi-apy-underline":"",title:c.lpApy&&l["deri-apy"],children:c.apy?Object(O.jsx)(b.a,{value:c.apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2}):"--"}),c.lpApy&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("span",{children:" + "}),Object(O.jsxs)("span",{className:c.lpApy?"sushi-apy-underline":"",title:c.lpApy&&c.label,children:[" ",Object(O.jsx)(b.a,{value:c.lpApy,displayType:"text",suffix:"%",decimalScale:2})]})]})]})]}),Object(O.jsxs)("div",{className:"pool-address",children:[Object(O.jsx)("span",{children:l.address}),c.airdrop?"--":Object(O.jsx)("a",{target:"_blank",rel:"noreferrer",href:A[c.chainId]&&"".concat(A[c.chainId].viewUrl,"/address/").concat(c.address||c.pool),children:c.formatAdd})]})]})]}),Object(O.jsx)("div",{className:"bottom-btn",children:m})]})})]})})))},738:function(e,t,n){},739:function(e,t,n){},770:function(e,t,n){"use strict";n.r(t);var c=n(606),a=n(2),s=(n(738),n(739),n(642)),i=n(615),r=n(45),o=n(17);t.default=Object(r.b)("version","loading")(Object(r.c)((function(e){var t=e.version,n=e.lang,r=e.loading,l=Object(i.a)(t),d=Object(c.a)(l,6),b=d[0],p=(d[1],d[2],d[3],d[4]),u=d[5];return Object(a.useEffect)((function(){return b?r.loaded():r.loading(),function(){}}),[b]),Object(o.jsxs)("div",{className:"retired",children:[Object(o.jsxs)("div",{className:"retired-title",children:[Object(o.jsx)("div",{className:"retired-pools",children:n["retired-pools"]}),n["retired-text"],Object(o.jsx)("a",{href:"https://app.deri.finance/#/mining",children:n["new-pools"]})]}),Object(o.jsx)("div",{className:"retired-mining-info",children:Object(o.jsx)("div",{className:"pools",children:p.map((function(e,t){return Object(o.jsx)(s.a,{pool:e,lang:n},t)}))})}),Object(o.jsxs)("div",{className:"retired-title",children:[Object(o.jsxs)("div",{className:"premining",children:[" ",n["premining-pools"]]}),Object(o.jsx)("span",{children:n["premining-finished"]})]}),Object(o.jsx)("div",{className:"retired-mining-info",children:Object(o.jsx)("div",{className:"pools",children:u.map((function(e,t){return Object(o.jsx)(s.a,{pool:e,lang:n},t)}))})})]})})))}}]);
//# sourceMappingURL=18.88d14179.chunk.js.map