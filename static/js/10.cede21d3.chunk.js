(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[10],{571:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(23),a=n(165),s=n(14),r=n(6),i=n(573),o=n(57);function l(e){var t=Object(r.useState)("--"),n=Object(s.a)(t,2),l=n[0],b=n[1];return Object(r.useEffect)((function(){var t=e.allowZero,n=Object(a.a)(e,["allowZero"]);return(void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t)&&b(Object(o.jsx)(i.a,Object(c.a)(Object(c.a)({},n),{},{displayType:"text"}))),function(){}}),[e.value]),l}},572:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var c=n(0),a=n.n(c),s=n(1),r=n(14),i=n(6),o=n(21),l=n(57);function b(e){var t=e.btnText,n=e.className,c=e.disabled,b=e.click,p=e.afterClick,u=e.checkApprove,d=e.wallet,j=e.spec,A=Object(i.useState)(c?"disabled":"enabled"),O=Object(r.a)(A,2),f=O[0],x=O[1],h=Object(i.useState)(!0),m=Object(r.a)(h,2),y=m[0],v=m[1],w=Object(i.useState)(!1),k=Object(r.a)(w,2),N=k[0],g=k[1],I=Object(i.useRef)(null),S=function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===f){e.next=2;break}return e.abrupt("return");case 2:return V(),e.next=5,b();case 5:e.sent&&p&&p(),T();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){x("disabled"),g(!0),I.current&&(I.current.style.display="inline-block")},T=function(){I.current&&(I.current.style.display="none"),x("enabled"),g(!1)},C=function(){var e=Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(u&&d&&d.detail.account)){e.next=5;break}return e.next=3,Object(o.isUnlocked)(d.detail.chainId,j.pool,d.detail.account,j.bTokenId);case 3:t=e.sent,v(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return V(),e.next=3,Object(o.unlock)(d.detail.chainId,j.pool,d.detail.account,j.bTokenId);case 3:e.sent.success?v(!0):(v(!1),alert("Approve faild")),T();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){return C(),function(){}}),[d,j,u]),Object(l.jsxs)("button",{className:n,onClick:function(){y?S():Y()},children:[Object(l.jsx)("span",{className:"btn-loading-wrap",children:Object(l.jsx)("span",{ref:I,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),N?"PENDING":y?t:"APPROVE"]})}},587:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var c=n(0),a=n.n(c),s=n(1),r=n(14),i=n(6),o=n(21),l=n(164),b=n(50),p=o.DeriEnv.get(),u=l[p].chainInfo;function d(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),c=n[0],l=n[1],d=Object(i.useState)([]),j=Object(r.a)(d,2),A=j[0],O=j[1];return Object(i.useEffect)((function(){var t=Object(o.getContractAddressConfig)(p,e.current).map(function(){var e=Object(s.a)(a.a.mark((function e(t){var n,c,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.getPoolLiquidity)(t.chainId,t.pool,t.bTokenId);case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={};case 5:return n=e.t0,e.next=8,Object(o.getPoolInfoApy)(t.chainId,t.pool);case 8:if(e.t1=e.sent,e.t1){e.next=11;break}e.t1={};case 11:return c=e.t1,s=t.pool||"",e.abrupt("return",Object.assign(t,{network:u[t.chainId].name,liquidity:n.liquidity,apy:100*+c.apy,pool:Object(b.c)(s),address:s,type:"perpetual",buttonText:"STAKING"}));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),n=Object(o.getLpContractAddressConfig)(p).map(function(){var e=Object(s.a)(a.a.mark((function e(t){var n,c,s,r,i,l;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.getPoolLiquidity)(t.chainId,t.pool);case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={};case 5:return n=e.t0,e.next=8,Object(o.getPoolInfoApy)(t.chainId,t.pool);case 8:if(e.t1=e.sent,e.t1){e.next=11;break}e.t1={};case 11:if(c=e.t1,s=t.pool||"",!Object(b.g)(t.pool)){e.next=18;break}return e.next=16,Object(o.getLpPoolInfoApy)(t.chainId,t.pool);case 16:l=e.sent,r=100*+l.apy2;case 18:return Object(b.h)(t.pool)&&(i="SUSHI-APY"),Object(b.f)(t.pool)&&(i="CAKE-APY"),e.abrupt("return",Object.assign(t,{network:u[t.chainId].name,liquidity:n.liquidity,apy:100*+c.apy,pool:Object(b.c)(s),lpApy:r,address:s,type:"lp",label:i,buttonText:"STAKING"}));case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),c=t.concat(n);return Promise.all(c).then((function(e){O(e),l(!0)})),function(){return A.length=0}}),[e.current]),[c,A]}},589:function(e,t,n){"use strict";var c=n(14),a=n(6),s=n(29),r=n(164),i=n(21),o=n(571),l=n(162),b=n(572),p=(n(50),n(57)),u=r[i.DeriEnv.get()].chainInfo;t.a=Object(l.b)("wallet","version")(Object(l.c)((function(e){var t=e.wallet,n=e.version,r=e.pool,i=Object(a.useState)(""),l=Object(c.a)(i,2),d=l[0],j=l[1],A="logo ".concat(r.bTokenSymbol),O=Object(s.g)(),f=function(){t.connect()};return Object(a.useEffect)((function(){if(r&&r.airdrop)t.isConnected()?j(Object(p.jsx)("button",{children:"CLAIM"})):j(Object(p.jsx)(b.a,{btnText:"Connect Wallet",click:f}));else{var e="/mining/".concat(r.version,"/").concat(r.chainId,"/").concat(r.type,"/").concat(r.symbol,"/").concat(r.bTokenSymbol,"/").concat(r.address);r.bTokenId&&(e="".concat(e,"?baseTokenId=").concat(r.bTokenId)),r.symbolId&&(e=e.indexOf("?")>0?"".concat(e,"&symbolId=").concat(r.symbolId):"".concat(e,"?symbolId=").concat(r.symbolId)),j(Object(p.jsx)("button",{onClick:function(){return function(e){O.push(e)}(e)},children:"STAKING"}))}return function(){}}),[r]),Object(p.jsxs)("div",{className:"pool",children:[Object(p.jsxs)("div",{className:"pool-header",children:[Object(p.jsx)("div",{className:"network",children:r.network&&r.network.toUpperCase()}),Object(p.jsxs)("div",{className:"pool-label",children:[n.isV2&&"v1"===r.version&&Object(p.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAUCAYAAAAHpoRMAAAACXBIWXMAAAsSAAALEgHS3X78AAACpUlEQVRIicVWT2jTYBx9k4ZlLYhQb3aXFdZO8NCAG7RSVukOOmUwkLmDCN4UPSxF0PZeCqMZHmoOwi6evEgr4k2PTpeTUDrbyURaL8UU7GT1DzTyyS/lW0zabFZ98BGatvm99773+30ZMQwD/wspWfYCCAAYB1D3/AseKVlmxfxU1E9rkr6uAegwMkNzhlN5nCtmFtZp1flrXlF0/hmDyLyg61mLyjEAIbPYbCKRiEajM51O58OaoqxTMbb28opSo78mAeQA3ACwaVfMloyp8m46nfP5fKdKxeIzTdM+kfJ9KuPx+Pfz8/NZQRB+ALgC4KPlcScAZABMA2jzwqzwpGSZqYtylprKG9Vq9YskSYhEIm1N0x5xKnk8JKfWLESS3GrTPVtHTHjI7jFS+9Kyl0zNyVA47HcgkgYwBeAxLRNXAcwA2AKwQJ8X+5FhprgJ8G+5ISwSmS3ann4ose16t719WVXVI+S+1xLyp25a+y05NM0pYzm4SfbfsVHZa+VYLHY6OTcnNZvNjqqqt6mVzdw9p51g+YMbMq+JyBRHJmcYxrH3OzvrhUIhDEByaOXaZCg0Kori50AgcC+vKA/6FRpIplKptILBoFdvtZbyq6sjS8vLC8GJiTPlcrn2pFQapczVrSo5nAPwFcCbQbV+ZcZhYJn39HQmc0kQhG+vNjbU2UTierfb3RRF8ZoLV48CKALYpSD3JyOvrFwEcIEfyzYD6z43J3YpsO0BzwYXctZpWVfOuABrzVv0M8cJaoM0EcryrZ+SZdP5cW6u1f7aqU3DlD8c+UOywZznOotN98Yfk3FQyZ/IZmdVWQxsAt6DKzKW9w6ryl4bk1pWrJFXlL2DCttHxsV7h255BXBUeRiwbopSNw1V5WHAhh7by/qwVR4YAH4C104ah/PdWdoAAAAASUVORK5CYII=",alt:"v1"}),n.isV2&&"v2"===r.version&&Object(p.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAUCAYAAAAHpoRMAAAACXBIWXMAAAsSAAALEgHS3X78AAACuUlEQVRIicVWS2gTURQ9hcTEBAtpstOsGtoaKZhAKswiJkUIWkUtSOmiCO78LTrpIqYLd6VQEgkSBReRkpUbm/hbVVdCtQNuAqMZpC7S7hKRGBNKICNP7pRnkmlGbe2Bx4Nh5t577j3nvelTVRUHhago2gAcA+AGUDL9jzqiosiSHQYwDMBJS3umAGiwYvasMxxLFyUbAqA9q9Aq8XsimazwMXoV84b28d1YhsLhsCAIp37UalupVOoRSxaJREyBQOCsY2DAz8VbB/AewHK3ZLrFREVx6E48vmi320fzudwrSZLKxLJBzNhqBIPBb+cmJhbMZnMTwAyALQCTAOIAPgJYoJ1hEcAZAPe7FWSKiiJjJxBbNzfLzWKxWPP7/fD5fFVJkp4kkkmlS91Zev8eFcJwC0AVwE3aNcQA5AFc7VoMl5wxft42yzEA3uGREadOIYz9cQBPaWkYp4TVLt8c0ZmEzYiAO3RD4Ecx0ysIQ7PZTKiqGlEU5eXjTOYtiVxz1wsj1v5EHRojATIc5UYR68LSzdnX6fV6vadDoUsOh8Mhy/JqbmVF09BrmgTTX083gdp9u010WVVVT3zZ2Mik0+kPnJU1ljtWjs7NXXa5XKNQVfmQxXKXE3MHenZGluWvHo/HWq5UphJLS31T09MXPYODQqFQ+Pwsn7cAOEnOYizrnLYmqXv9AJb07MzjV2d6HVjx+fkrZrN5+93a2sNQOHy91WqtW63Wazox+8nC2lhjOkLuLEacnb0A4DyzctspWeZYPqDgLOh3Eqxegiw5bJlGaxhGrwNNNww3OCHv9p4eVqOimKHO8+easm+3Nh2mO47idl7gijYFNpl/LqbdxpzmwCXjL8eSXixDxbT9d9h0bMwS1ynpZiKZrP8psd+K2UuWfwPmJoHc5DT637FfYIdesc3GBwMAPwHwfCc5wAJXPgAAAABJRU5ErkJggg==",alt:"v2"})]})]}),Object(p.jsx)("div",{className:"pool-info",children:Object(p.jsxs)("div",{className:"info-center",children:[Object(p.jsxs)("div",{className:"top-info",children:[Object(p.jsx)("div",{className:A}),Object(p.jsxs)("div",{className:"pool-detail",children:[Object(p.jsx)("div",{className:"base-token",children:r.bTokenSymbol}),Object(p.jsxs)("div",{children:[Object(p.jsx)("span",{children:r.airdrop?"Total":"Pool Liq"}),Object(p.jsx)(o.a,{value:r.liquidity,displayType:"text",thousandSeparator:!0,decimalScale:r.lpApy?7:0})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("span",{children:"Symbol"}),r.symbol]}),Object(p.jsxs)("div",{className:"apy",children:[Object(p.jsx)("span",{children:"APY"}),Object(p.jsxs)("span",{children:[Object(p.jsx)("span",{className:r.lpApy?"sushi-apy-underline":"",title:r.lpApy&&"DERI-APY",children:r.apy?Object(p.jsx)(o.a,{value:r.apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2}):"--"}),r.lpApy&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("span",{children:" + "}),Object(p.jsxs)("span",{className:r.lpApy?"sushi-apy-underline":"",title:r.lpApy&&r.label,children:[" ",Object(p.jsx)(o.a,{value:r.lpApy,displayType:"text",suffix:"%",decimalScale:2})]})]})]})]}),Object(p.jsxs)("div",{className:"pool-address",children:[Object(p.jsx)("span",{children:"Address"}),r.airdrop?"--":Object(p.jsx)("a",{target:"_blank",rel:"noreferrer",href:"".concat(u[r.chainId].viewUrl,"/address/").concat(r.address||r.pool),children:r.pool})]})]})]}),Object(p.jsx)("div",{className:"bottom-btn",children:d})]})})]})})))},625:function(e,t,n){},633:function(e,t,n){"use strict";n.r(t);var c=n(14),a=n(589),s=n(587),r=(n(625),n(162)),i=n(57);t.default=Object(r.b)("version")(Object(r.c)((function(e){var t=e.version,n=Object(s.a)(t),r=Object(c.a)(n,2),o=r[0],l=r[1];return Object(i.jsx)("div",{className:"mining-info",children:Object(i.jsxs)("div",{className:"pools",children:[l.map((function(e,t){return Object(i.jsx)(a.a,{pool:e},t)})),!o&&Object(i.jsx)("div",{className:"loading",children:Object(i.jsx)("span",{className:"spinner spinner-border spinner-border-sm"})})]})})})))}}]);
//# sourceMappingURL=10.cede21d3.chunk.js.map