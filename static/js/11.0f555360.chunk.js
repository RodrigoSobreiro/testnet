(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[11],{575:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(27),a=n(167),s=n(16),r=n(5),i=n(577),o=n(59);function l(e){var t=Object(r.useState)("--"),n=Object(s.a)(t,2),l=n[0],b=n[1];return Object(r.useEffect)((function(){var t=e.allowZero,n=Object(a.a)(e,["allowZero"]);return(void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t)&&b(Object(o.jsx)(i.a,Object(c.a)(Object(c.a)({},n),{},{displayType:"text"}))),function(){}}),[e.value]),l}},576:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(0),a=n.n(c),s=n(1),r=n(16),i=n(5),o=(n(24),n(59));function l(e){var t=e.btnText,n=e.className,c=e.disabled,l=e.click,b=e.afterClick,p=e.checkApprove,d=e.wallet,u=e.spec,j=Object(i.useState)(c?"disabled":"enabled"),A=Object(r.a)(j,2),O=A[0],f=A[1],x=Object(i.useState)(!0),m=Object(r.a)(x,2),h=m[0],y=m[1],v=Object(i.useState)(!1),w=Object(r.a)(v,2),I=w[0],S=w[1],k=Object(i.useRef)(null),N=function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===O){e.next=2;break}return e.abrupt("return");case 2:return g(),e.next=5,l();case 5:e.sent&&b&&b(),T();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){f("disabled"),S(!0),k.current&&(k.current.style.display="inline-block")},T=function(){k.current&&(k.current.style.display="none"),f("enabled"),S(!1)},C=function(){var e=Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(p&&d&&d.detail.account)){e.next=5;break}return e.next=3,d.isApproved(u.pool,u.bTokenId);case 3:t=e.sent,y(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(),e.next=3,d.approve(u.pool,u.bTokenId);case 3:e.sent.success?y(!0):(y(!1),alert("Approve faild")),T();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){return C(),function(){}}),[d,u,p]),Object(o.jsxs)("button",{className:n,onClick:function(){h?N():V()},children:[Object(o.jsx)("span",{className:"btn-loading-wrap",children:Object(o.jsx)("span",{ref:k,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),I?"PENDING":h?t:"APPROVE"]})}},591:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(5),a=n(24),s=n(166),r=n(43);const i=a.DeriEnv.get(),{chainInfo:o}=s[i];function l(e){const[t,n]=Object(c.useState)(!1),[s,l]=Object(c.useState)([]),[b,p]=Object(c.useState)([]),[d,u]=Object(c.useState)([]);return Object(c.useEffect)((()=>{const t=async e=>{const t=await Object(a.getPoolLiquidity)(e.chainId,e.pool,e.bTokenId)||{},n=await Object(a.getPoolInfoApy)(e.chainId,e.pool,e.bTokenId)||{},c=e.pool||"";return Object.assign(e,{network:o[e.chainId].name,liquidity:t.liquidity,apy:(100*+n.apy).toFixed(2),pool:Object(r.c)(c),address:c,type:"perpetual",buttonText:"STAKING"})};let c=Object(a.getContractAddressConfig)(i,e.current),b=Object(a.getContractAddressConfig)(i,"v1");c=c.reduce(((e,t)=>{const n=e.findIndex((e=>e.bTokenSymbol===t.bTokenSymbol));return n>-1&&-1===e[n].symbol.indexOf(t.symbol)?e[n].symbol+=`,${t.symbol}`:e.push(t),e}),[]),c=e.isV2?c.map(t):b.map(t);const d=Object(a.getLpContractAddressConfig)(i).map((async e=>{const t=await Object(a.getPoolLiquidity)(e.chainId,e.pool)||{},n=await Object(a.getPoolInfoApy)(e.chainId,e.pool)||{},c=e.pool||"";let s,i;if(Object(r.g)(e.pool)){s=(100*+(await Object(a.getLpPoolInfoApy)(e.chainId,e.pool)).apy2).toFixed(2)}return Object(r.h)(e.pool)&&(i="SUSHI-APY"),Object(r.f)(e.pool)&&(i="CAKE-APY"),Object.assign(e,{network:o[e.chainId].name,liquidity:t.liquidity,apy:(100*+n.apy).toFixed(2),pool:Object(r.c)(c),lpApy:s,address:c,type:"lp",label:i,buttonText:"STAKING"})})),j=c.concat(d);return Promise.all(j).then((e=>{const t=e.filter((e=>"v1"===e.version||!e.version)),c=e.filter((e=>"v2"===e.version));u(c),p(t),l(e),n(!0)})),()=>s.length=0}),[e.current]),[t,s,b,d]}},593:function(e,t,n){"use strict";var c=n(0),a=n.n(c),s=n(1),r=n(16),i=n(5),o=n(31),l=n(166),b=n(24),p=n(575),d=n(164),u=n(576),j=(n(43),n(59)),A=l[b.DeriEnv.get()].chainInfo;t.a=Object(d.b)("wallet","version")(Object(d.c)((function(e){var t=e.wallet,n=e.version,c=e.pool,l=Object(i.useState)(""),d=Object(r.a)(l,2),O=d[0],f=d[1],x="logo ".concat(c.bTokenSymbol),m=Object(o.g)(),h=function(){t.connect()},y=function(){var e=Object(s.a)(a.a.mark((function e(){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.getUserInfoAllForAirDrop)(t.detail.account);case 2:if((n=e.sent).valid){e.next=6;break}return alert("No DERI to claim"),e.abrupt("return");case 6:if(t.detail.chainId==n.chainId){e.next=9;break}return alert("Please switch to BSC to claim DERI"),e.abrupt("return");case 9:return e.next=11,Object(b.mintAirdrop)(n.chainId,t.detail.account);case 11:e.sent.success||alert("Claim failed");case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){if(c&&c.airdrop)t.isConnected()?f(Object(j.jsx)(u.a,{btnText:"CLAIM",click:y})):f(Object(j.jsx)(u.a,{btnText:"Connect Wallet",click:h}));else{var e="/mining/".concat(c.version||"v1","/").concat(c.chainId,"/").concat(c.type,"/").concat(c.symbol,"/").concat(c.bTokenSymbol,"/").concat(c.address);c.bTokenId&&(e="".concat(e,"?baseTokenId=").concat(c.bTokenId)),c.symbolId&&(e=e.indexOf("?")>0?"".concat(e,"&symbolId=").concat(c.symbolId):"".concat(e,"?symbolId=").concat(c.symbolId)),f(Object(j.jsx)("button",{onClick:function(){return function(e){m.push(e)}(e)},children:"STAKING"}))}return function(){}}),[c]),Object(j.jsxs)("div",{className:"pool",children:[Object(j.jsxs)("div",{className:"pool-header",children:[Object(j.jsx)("div",{className:"network",children:c.network&&c.network.toUpperCase()}),Object(j.jsxs)("div",{className:"pool-label",children:[n.isV2&&"v1"===c.version&&Object(j.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAUCAYAAAAHpoRMAAAACXBIWXMAAAsSAAALEgHS3X78AAACpUlEQVRIicVWT2jTYBx9k4ZlLYhQb3aXFdZO8NCAG7RSVukOOmUwkLmDCN4UPSxF0PZeCqMZHmoOwi6evEgr4k2PTpeTUDrbyURaL8UU7GT1DzTyyS/lW0zabFZ98BGatvm99773+30ZMQwD/wspWfYCCAAYB1D3/AseKVlmxfxU1E9rkr6uAegwMkNzhlN5nCtmFtZp1flrXlF0/hmDyLyg61mLyjEAIbPYbCKRiEajM51O58OaoqxTMbb28opSo78mAeQA3ACwaVfMloyp8m46nfP5fKdKxeIzTdM+kfJ9KuPx+Pfz8/NZQRB+ALgC4KPlcScAZABMA2jzwqzwpGSZqYtylprKG9Vq9YskSYhEIm1N0x5xKnk8JKfWLESS3GrTPVtHTHjI7jFS+9Kyl0zNyVA47HcgkgYwBeAxLRNXAcwA2AKwQJ8X+5FhprgJ8G+5ISwSmS3ann4ose16t719WVXVI+S+1xLyp25a+y05NM0pYzm4SfbfsVHZa+VYLHY6OTcnNZvNjqqqt6mVzdw9p51g+YMbMq+JyBRHJmcYxrH3OzvrhUIhDEByaOXaZCg0Kori50AgcC+vKA/6FRpIplKptILBoFdvtZbyq6sjS8vLC8GJiTPlcrn2pFQapczVrSo5nAPwFcCbQbV+ZcZhYJn39HQmc0kQhG+vNjbU2UTierfb3RRF8ZoLV48CKALYpSD3JyOvrFwEcIEfyzYD6z43J3YpsO0BzwYXctZpWVfOuABrzVv0M8cJaoM0EcryrZ+SZdP5cW6u1f7aqU3DlD8c+UOywZznOotN98Yfk3FQyZ/IZmdVWQxsAt6DKzKW9w6ryl4bk1pWrJFXlL2DCttHxsV7h255BXBUeRiwbopSNw1V5WHAhh7by/qwVR4YAH4C104ah/PdWdoAAAAASUVORK5CYII=",alt:"v1"}),n.isV2&&"v2"===c.version&&Object(j.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAUCAYAAAAHpoRMAAAACXBIWXMAAAsSAAALEgHS3X78AAACuUlEQVRIicVWS2gTURQ9hcTEBAtpstOsGtoaKZhAKswiJkUIWkUtSOmiCO78LTrpIqYLd6VQEgkSBReRkpUbm/hbVVdCtQNuAqMZpC7S7hKRGBNKICNP7pRnkmlGbe2Bx4Nh5t577j3nvelTVRUHhago2gAcA+AGUDL9jzqiosiSHQYwDMBJS3umAGiwYvasMxxLFyUbAqA9q9Aq8XsimazwMXoV84b28d1YhsLhsCAIp37UalupVOoRSxaJREyBQOCsY2DAz8VbB/AewHK3ZLrFREVx6E48vmi320fzudwrSZLKxLJBzNhqBIPBb+cmJhbMZnMTwAyALQCTAOIAPgJYoJ1hEcAZAPe7FWSKiiJjJxBbNzfLzWKxWPP7/fD5fFVJkp4kkkmlS91Zev8eFcJwC0AVwE3aNcQA5AFc7VoMl5wxft42yzEA3uGREadOIYz9cQBPaWkYp4TVLt8c0ZmEzYiAO3RD4Ecx0ysIQ7PZTKiqGlEU5eXjTOYtiVxz1wsj1v5EHRojATIc5UYR68LSzdnX6fV6vadDoUsOh8Mhy/JqbmVF09BrmgTTX083gdp9u010WVVVT3zZ2Mik0+kPnJU1ljtWjs7NXXa5XKNQVfmQxXKXE3MHenZGluWvHo/HWq5UphJLS31T09MXPYODQqFQ+Pwsn7cAOEnOYizrnLYmqXv9AJb07MzjV2d6HVjx+fkrZrN5+93a2sNQOHy91WqtW63Wazox+8nC2lhjOkLuLEacnb0A4DyzctspWeZYPqDgLOh3Eqxegiw5bJlGaxhGrwNNNww3OCHv9p4eVqOimKHO8+easm+3Nh2mO47idl7gijYFNpl/LqbdxpzmwCXjL8eSXixDxbT9d9h0bMwS1ynpZiKZrP8psd+K2UuWfwPmJoHc5DT637FfYIdesc3GBwMAPwHwfCc5wAJXPgAAAABJRU5ErkJggg==",alt:"v2"})]})]}),Object(j.jsx)("div",{className:"pool-info",children:Object(j.jsxs)("div",{className:"info-center",children:[Object(j.jsxs)("div",{className:"top-info",children:[Object(j.jsx)("div",{className:x}),Object(j.jsxs)("div",{className:"pool-detail",children:[Object(j.jsx)("div",{className:"base-token",children:c.bTokenSymbol}),Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{children:c.airdrop?"Total":"Pool Liq"}),Object(j.jsx)(p.a,{value:c.liquidity,displayType:"text",thousandSeparator:!0,decimalScale:c.lpApy?7:0})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{children:"Symbol"}),c.symbol]}),Object(j.jsxs)("div",{className:"apy",children:[Object(j.jsx)("span",{children:"APY"}),Object(j.jsxs)("span",{children:[Object(j.jsx)("span",{className:c.lpApy?"sushi-apy-underline":"",title:c.lpApy&&"DERI-APY",children:c.apy?Object(j.jsx)(p.a,{value:c.apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2}):"--"}),c.lpApy&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("span",{children:" + "}),Object(j.jsxs)("span",{className:c.lpApy?"sushi-apy-underline":"",title:c.lpApy&&c.label,children:[" ",Object(j.jsx)(p.a,{value:c.lpApy,displayType:"text",suffix:"%",decimalScale:2})]})]})]})]}),Object(j.jsxs)("div",{className:"pool-address",children:[Object(j.jsx)("span",{children:"Address"}),c.airdrop?"--":Object(j.jsx)("a",{target:"_blank",rel:"noreferrer",href:"".concat(A[c.chainId].viewUrl,"/address/").concat(c.address||c.pool),children:c.pool})]})]})]}),Object(j.jsx)("div",{className:"bottom-btn",children:O})]})})]})})))},633:function(e,t,n){},640:function(e,t,n){"use strict";n.r(t);var c=n(16),a=(n(5),n(633),n(593)),s=n(591),r=n(164),i=n(59);t.default=Object(r.b)("version")(Object(r.c)((function(e){var t=e.version,n=Object(s.a)(t),r=Object(c.a)(n,2),o=r[0],l=r[1];return Object(i.jsx)("div",{className:"mining-info",children:Object(i.jsxs)("div",{className:"pools",children:[l.map((function(e,t){return Object(i.jsx)(a.a,{pool:e},t)})),!o&&Object(i.jsx)("div",{className:"loading",children:Object(i.jsx)("span",{className:"spinner spinner-border spinner-border-sm"})})]})})})))}}]);
//# sourceMappingURL=11.0f555360.chunk.js.map