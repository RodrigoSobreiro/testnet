(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[28],{1321:function(e,t,n){},1322:function(e,t,n){},1380:function(e,t,n){"use strict";n.r(t);var c=n(12),a=n(8),s=n(938),r=n(701),i=(n(1321),n(1322),n(48)),o=n(118),l=n(20);t.default=Object(i.b)("version","loading")(Object(i.c)((function(e){var t=e.version,n=e.lang,i=e.loading,b=Object(r.a)(t,null,!0),d=Object(c.a)(b,7),p=d[0],j=(d[1],d[2],d[3],d[4],d[5]),u=d[6];return Object(a.useEffect)((function(){return p?i.loaded():i.loading(),function(){}}),[p]),Object(l.jsxs)("div",{className:"retired",children:[Object(l.jsxs)("div",{className:"retired-title",children:[Object(l.jsx)("div",{className:"retired-pools",children:n["retired-markets"]}),Object(l.jsxs)("span",{children:[n["v1-markets"]," ",Object(l.jsx)(o.b,{to:"/futures/pro/v1",children:n["v1-here"]})," ",n["to-close-position"]," "]}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{className:"retired-pools",children:n["retired-pools"]}),n["retired-text"],Object(l.jsx)("a",{href:"https://app.deri.finance/#/mining",children:n["new-pools"]})]}),Object(l.jsx)("div",{className:"retired-mining-info",children:Object(l.jsx)("div",{className:"pools",children:j.map((function(e,t){return Object(l.jsx)(s.a,{pool:e,lang:n},t)}))})}),Object(l.jsxs)("div",{className:"retired-title premining",children:[n["premining-pools"],Object(l.jsx)("span",{className:"premining-finished",children:n["premining-finished"]})]}),Object(l.jsx)("div",{className:"retired-mining-info",children:Object(l.jsx)("div",{className:"pools",children:u.map((function(e,t){return Object(l.jsx)(s.a,{pool:e,lang:n},t)}))})})]})})))},646:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(0),a=n.n(c),s=n(1),r=n(12),i=n(8),o=n(20);function l(e){var t=e.btnText,n=e.className,c=e.disabled,l=e.click,b=e.afterClick,d=e.checkApprove,p=e.wallet,j=e.spec,u=e.lang,O=Object(i.useState)(c?"disabled":"enabled"),f=Object(r.a)(O,2),A=f[0],m=f[1],x=Object(i.useState)(!0),h=Object(r.a)(x,2),v=h[0],y=h[1],g=Object(i.useState)(!1),w=Object(r.a)(g,2),k=w[0],N=w[1],S=Object(i.useState)(t),I=Object(r.a)(S,2),T=I[0],V=I[1],C=Object(i.useRef)(null),E=function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===A){e.next=2;break}return e.abrupt("return");case 2:return Y(),e.next=5,l();case 5:e.sent&&b&&b(),Z();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(){m("disabled"),N(!0),C.current&&(C.current.style.display="inline-block")},Z=function(){C.current&&(C.current.style.display="none"),m("enabled"),N(!1)},U=function(){var e=Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(d&&p&&p.detail.account)){e.next=5;break}return e.next=3,p.isApproved(j.pool,j.bTokenId);case 3:t=e.sent,y(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Y(),e.next=3,p.approve(j.pool,j.bTokenId);case 3:e.sent.success?y(!0):(y(!1),alert(u["approve-failed"])),Z();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){return U(),function(){}}),[p,j,d]),Object(i.useEffect)((function(){return t&&V(t),function(){}}),[t]),Object(o.jsxs)("button",{className:n,onClick:function(){v?E():B()},children:[Object(o.jsx)("span",{className:"btn-loading-wrap",children:Object(o.jsx)("span",{ref:C,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),k?u.pending:v?T:u.approve]})}},648:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var c=n(55),a=n(49),s=n(655),r=n(12),i=n(8),o=n(654),l=n(20),b=["allowZero"];function d(e){var t=Object(i.useState)(Object(l.jsx)("span",{className:"loading-line"})),n=Object(r.a)(t,2),d=n[0],p=n[1];return Object(i.useEffect)((function(){var t=e.allowZero,n=Object(s.a)(e,b);return("object"!==Object(a.a)(e.value)&&void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t)&&p(Object(l.jsx)(o.a,Object(c.a)(Object(c.a)({},n),{},{displayType:"text"}))),function(){}}),[e.value]),d}},701:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var c=n(8),a=n(15),s=n(67),r=n(29),i=n(13);n(691);const o=a.a.get(),{chainInfo:l}=s[o];function b(e,t,n){const[s,b]=Object(c.useState)(!1),[d,p]=Object(c.useState)([]),[j,u]=Object(c.useState)([]),[O,f]=Object(c.useState)([]),[A,m]=Object(c.useState)([]),[x,h]=Object(c.useState)([]),[v,y]=Object(c.useState)([]);return Object(c.useEffect)((()=>((async()=>{let c=Object(a.p)(o,"v2");const s=Object(a.p)(o,"v2_lite"),d=Object(a.p)(o,"option");let j=c.concat(s).concat(d);if(n){let e=Object(a.p)(o,"v1");const t=Object(a.K)(o);j=e.concat(t)}j=Object(r.c)(j),j=j.map((e=>Object(r.r)(e,t,l)));const O=Object(a.z)(o).map((async e=>{const t=e.pool||"";let n;return Object(r.p)(e.pool),Object(r.q)(e.pool)&&(n=i.a.get("mining","sushi-apy")),Object(r.o)(e.pool)&&(n=i.a.get("mining","cake-apy")),Object.assign(e,{network:l[e.chainId].name,formatAdd:Object(r.g)(t),address:t,type:"lp",label:n,buttonText:"STAKING"})})),A=j.concat(O);Promise.all(A).then((t=>{const n={network:"BSC",bTokenSymbol:"GIVEAWAY",liquidity:"1740",symbol:"--",airdrop:!0,chainId:56,apy:"--",buttonText:"CLAIM"};(new Date).getTime()<=16356744e5&&t.push(n);let c=t.filter((e=>("v1"===e.version||!e.version)&&!e.retired)),a=t.filter((e=>("v2"===e.version||"v2_lite"===e.version||"v2_lite_dpmm"===e.version)&&!e.retired)),s=t.filter((e=>"option"===e.version&&!e.retired));const i=t.filter((e=>e.retired&&!e.premining)),o=t.filter((e=>e.retired&&e.premining));let l=t.filter((e=>e.isOpen));e&&(c=Object(r.l)(c),a=Object(r.l)(a),s=Object(r.l)(s),l=Object(r.l)(l)),f(a),u(c),m(s),p(t),h(i),y(o),b(!0)}))})(),()=>d.length=0)),[]),[s,d,j,O,A,x,v]}},799:function(e,t){},938:function(e,t,n){"use strict";var c=n(0),a=n.n(c),s=n(1),r=n(12),i=n(8),o=n(26),l=n(67),b=n(15),d=n(648),p=n(48),j=n(646),u=n(29),O=n(20),f=l[b.a.get()].chainInfo;t.a=Object(p.b)("wallet","version")(Object(p.c)((function(e){var t,n=e.wallet,c=(e.version,e.pool),l=e.lang,p=Object(i.useState)(""),A=Object(r.a)(p,2),m=A[0],x=A[1],h="logo ".concat(c.bTokenSymbol),v=Object(i.useState)({}),y=Object(r.a)(v,2),g=y[0],w=y[1],k=Object(o.useHistory)(),N=function(){n.connect()},S=function(){var e=Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.P)(n.detail.account);case 2:if((t=e.sent).valid){e.next=6;break}return alert(l["no-deri-to-claim"]),e.abrupt("return");case 6:if(Object(u.e)(n.detail.chainId,t.chainId)){e.next=9;break}return alert(l["please-switch-to-BSC-to-claim-deri"]),e.abrupt("return");case 9:return e.next=11,Object(b.jb)(t.chainId,n.detail.account);case 11:e.sent.success||alert(l["claim-failed"]);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(s.a)(a.a.mark((function e(t){var n,c,s,r,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.F)(t.chainId,t.pool,t.bTokenId);case 2:return n=e.sent,e.next=5,Object(b.G)(t.chainId,t.pool,t.bTokenId);case 5:if(c=e.sent,s={liquidity:c.liquidity,apy:(100*+n.apy).toFixed(2),multiplier:n.multiplier},!t.isLp){e.next=13;break}return e.next=10,Object(b.B)(t.chainId,t.pool);case 10:r=e.sent,i=(100*+r.apy2).toFixed(2),s.lpApy=i;case 13:w(s);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){if(c&&c.airdrop)n.isConnected()?x(Object(O.jsx)(j.a,{btnText:l.claim,click:S,lang:l})):x(Object(O.jsx)(j.a,{btnText:l["connect-wallet"],click:N,lang:l}));else if(c.premining)x(Object(O.jsx)("a",{target:"_blank",href:c.url,children:l.staking}));else{var e="/mining/".concat(c.version||"v1","/").concat(c.chainId,"/").concat(c.type,"/").concat(c.symbol,"/").concat(c.bTokenSymbol,"/").concat(c.address);c.bTokenId&&(e="".concat(e,"?baseTokenId=").concat(c.bTokenId)),c.symbolId&&(e=e.indexOf("?")>0?"".concat(e,"&symbolId=").concat(c.symbolId):"".concat(e,"?symbolId=").concat(c.symbolId)),x(Object(O.jsx)("button",{onClick:function(){return function(e){k.push(e)}(e)},children:l.staking}))}return c&&I(c),function(){}}),[c]),Object(O.jsxs)("div",{className:"pool",children:[Object(O.jsxs)("div",{className:"pool-header",children:[Object(O.jsx)("div",{className:"network",children:c.network&&c.network.toUpperCase()}),Object(O.jsxs)("div",{className:"pool-label",children:["v1"===c.version&&Object(O.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAUCAYAAAAHpoRMAAAACXBIWXMAAAsSAAALEgHS3X78AAACpUlEQVRIicVWT2jTYBx9k4ZlLYhQb3aXFdZO8NCAG7RSVukOOmUwkLmDCN4UPSxF0PZeCqMZHmoOwi6evEgr4k2PTpeTUDrbyURaL8UU7GT1DzTyyS/lW0zabFZ98BGatvm99773+30ZMQwD/wspWfYCCAAYB1D3/AseKVlmxfxU1E9rkr6uAegwMkNzhlN5nCtmFtZp1flrXlF0/hmDyLyg61mLyjEAIbPYbCKRiEajM51O58OaoqxTMbb28opSo78mAeQA3ACwaVfMloyp8m46nfP5fKdKxeIzTdM+kfJ9KuPx+Pfz8/NZQRB+ALgC4KPlcScAZABMA2jzwqzwpGSZqYtylprKG9Vq9YskSYhEIm1N0x5xKnk8JKfWLESS3GrTPVtHTHjI7jFS+9Kyl0zNyVA47HcgkgYwBeAxLRNXAcwA2AKwQJ8X+5FhprgJ8G+5ISwSmS3ann4ose16t719WVXVI+S+1xLyp25a+y05NM0pYzm4SfbfsVHZa+VYLHY6OTcnNZvNjqqqt6mVzdw9p51g+YMbMq+JyBRHJmcYxrH3OzvrhUIhDEByaOXaZCg0Kori50AgcC+vKA/6FRpIplKptILBoFdvtZbyq6sjS8vLC8GJiTPlcrn2pFQapczVrSo5nAPwFcCbQbV+ZcZhYJn39HQmc0kQhG+vNjbU2UTierfb3RRF8ZoLV48CKALYpSD3JyOvrFwEcIEfyzYD6z43J3YpsO0BzwYXctZpWVfOuABrzVv0M8cJaoM0EcryrZ+SZdP5cW6u1f7aqU3DlD8c+UOywZznOotN98Yfk3FQyZ/IZmdVWQxsAt6DKzKW9w6ryl4bk1pWrJFXlL2DCttHxsV7h255BXBUeRiwbopSNw1V5WHAhh7by/qwVR4YAH4C104ah/PdWdoAAAAASUVORK5CYII=",alt:"v1"}),"v2"===c.version&&Object(O.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAUCAYAAAAHpoRMAAAACXBIWXMAAAsSAAALEgHS3X78AAACuUlEQVRIicVWS2gTURQ9hcTEBAtpstOsGtoaKZhAKswiJkUIWkUtSOmiCO78LTrpIqYLd6VQEgkSBReRkpUbm/hbVVdCtQNuAqMZpC7S7hKRGBNKICNP7pRnkmlGbe2Bx4Nh5t577j3nvelTVRUHhago2gAcA+AGUDL9jzqiosiSHQYwDMBJS3umAGiwYvasMxxLFyUbAqA9q9Aq8XsimazwMXoV84b28d1YhsLhsCAIp37UalupVOoRSxaJREyBQOCsY2DAz8VbB/AewHK3ZLrFREVx6E48vmi320fzudwrSZLKxLJBzNhqBIPBb+cmJhbMZnMTwAyALQCTAOIAPgJYoJ1hEcAZAPe7FWSKiiJjJxBbNzfLzWKxWPP7/fD5fFVJkp4kkkmlS91Zev8eFcJwC0AVwE3aNcQA5AFc7VoMl5wxft42yzEA3uGREadOIYz9cQBPaWkYp4TVLt8c0ZmEzYiAO3RD4Ecx0ysIQ7PZTKiqGlEU5eXjTOYtiVxz1wsj1v5EHRojATIc5UYR68LSzdnX6fV6vadDoUsOh8Mhy/JqbmVF09BrmgTTX083gdp9u010WVVVT3zZ2Mik0+kPnJU1ljtWjs7NXXa5XKNQVfmQxXKXE3MHenZGluWvHo/HWq5UphJLS31T09MXPYODQqFQ+Pwsn7cAOEnOYizrnLYmqXv9AJb07MzjV2d6HVjx+fkrZrN5+93a2sNQOHy91WqtW63Wazox+8nC2lhjOkLuLEacnb0A4DyzctspWeZYPqDgLOh3Eqxegiw5bJlGaxhGrwNNNww3OCHv9p4eVqOimKHO8+easm+3Nh2mO47idl7gijYFNpl/LqbdxpzmwCXjL8eSXixDxbT9d9h0bMwS1ynpZiKZrP8psd+K2UuWfwPmJoHc5DT637FfYIdesc3GBwMAPwHwfCc5wAJXPgAAAABJRU5ErkJggg==",alt:"v2"})]})]}),Object(O.jsx)("div",{className:"pool-info",children:Object(O.jsxs)("div",{className:"info-center",children:[Object(O.jsxs)("div",{className:"top-info",children:[Object(O.jsx)("div",{className:h}),Object(O.jsxs)("div",{className:"pool-detail",children:[Object(O.jsx)("div",{className:"base-token",children:c.bTokenSymbol}),Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{className:"title",children:c.airdrop?l.total:l["pool-liq"]}),Object(O.jsx)(d.a,{value:g.liquidity,displayType:"text",thousandSeparator:!0,decimalScale:(t=c.pool,"0x3f98429b673AF39671a495b5B12Ebd5C10092ccB"===t||"0x03dA5cB10D868c5F979b277eb6DF17D50E78fE2A"===t?7:0)})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{children:l.symbol}),c.symbol]}),Object(O.jsxs)("div",{className:"apy",children:[Object(O.jsx)("span",{children:l.apy}),Object(O.jsxs)("span",{children:[Object(O.jsx)("span",{className:g.lpApy?"sushi-apy-underline":"",tip:g.lpApy&&l["deri-apy"],children:g.apy?Object(O.jsx)(d.a,{value:g.apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2}):"--"}),g.lpApy&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("span",{children:" + "}),Object(O.jsxs)("span",{className:g.lpApy?"sushi-apy-underline":"",tip:g.lpApy&&c.label,children:[" ",Object(O.jsx)(d.a,{value:g.lpApy,displayType:"text",suffix:"%",decimalScale:2})]})]})]})]}),Object(O.jsxs)("div",{className:"pool-address",children:[Object(O.jsx)("span",{children:l.address}),c.airdrop?"--":Object(O.jsx)("a",{target:"_blank",rel:"noreferrer",href:f[c.chainId]&&"".concat(f[c.chainId].viewUrl,"/address/").concat(c.address||c.pool),children:c.formatAdd})]})]})]}),Object(O.jsx)("div",{className:"bottom-btn",children:m})]})})]})})))}}]);
//# sourceMappingURL=28.8a57fbd1.chunk.js.map