(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[13],{621:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(0),a=n.n(c),s=n(1),r=n(17),i=n(7),o=n(60);function l(e){var t=e.btnText,n=e.className,c=e.disabled,l=e.click,p=e.afterClick,b=e.checkApprove,d=e.wallet,u=e.spec,j=e.lang,A=Object(i.useState)(c?"disabled":"enabled"),O=Object(r.a)(A,2),f=O[0],m=O[1],x=Object(i.useState)(!0),h=Object(r.a)(x,2),y=h[0],v=h[1],w=Object(i.useState)(!1),g=Object(r.a)(w,2),k=g[0],S=g[1],I=Object(i.useRef)(null),N=function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===f){e.next=2;break}return e.abrupt("return");case 2:return T(),e.next=5,l();case 5:e.sent&&p&&p(),V();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){m("disabled"),S(!0),I.current&&(I.current.style.display="inline-block")},V=function(){I.current&&(I.current.style.display="none"),m("enabled"),S(!1)},C=function(){var e=Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(b&&d&&d.detail.account)){e.next=5;break}return e.next=3,d.isApproved(u.pool,u.bTokenId);case 3:t=e.sent,v(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T(),e.next=3,d.approve(u.pool,u.bTokenId);case 3:e.sent.success?v(!0):(v(!1),alert(j["approve-failed"])),V();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){return C(),function(){}}),[d,u,b]),Object(o.jsxs)("button",{className:n,onClick:function(){y?N():Y()},children:[Object(o.jsx)("span",{className:"btn-loading-wrap",children:Object(o.jsx)("span",{ref:I,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),k?j.pending:y?t:j.approve]})}},622:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(29),a=n(177),s=n(17),r=n(7),i=n(623),o=n(60);function l(e){var t=Object(r.useState)("--"),n=Object(s.a)(t,2),l=n[0],p=n[1];return Object(r.useEffect)((function(){var t=e.allowZero,n=Object(a.a)(e,["allowZero"]);return(void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t)&&p(Object(o.jsx)(i.a,Object(c.a)(Object(c.a)({},n),{},{displayType:"text"}))),function(){}}),[e.value]),l}},643:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(7),a=n(26),s=n(176),r=n(43);const i=a.DeriEnv.get(),{chainInfo:o}=s[i];function l(e){const[t,n]=Object(c.useState)(!1),[s,l]=Object(c.useState)([]),[p,b]=Object(c.useState)([]),[d,u]=Object(c.useState)([]);return Object(c.useEffect)((()=>{const t=async e=>{const t=await Object(a.getPoolLiquidity)(e.chainId,e.pool,e.bTokenId)||{},n=await Object(a.getPoolInfoApy)(e.chainId,e.pool,e.bTokenId)||{},c=e.pool||"";return Object.assign(e,{network:o[e.chainId].name,liquidity:t.liquidity,apy:(100*+n.apy).toFixed(2),pool:Object(r.c)(c),address:c,type:"perpetual",buttonText:"STAKING"})};let c=Object(a.getContractAddressConfig)(i,e.current),p=Object(a.getContractAddressConfig)(i,"v1");c=c.reduce(((e,t)=>{const n=e.findIndex((e=>e.bTokenSymbol===t.bTokenSymbol));return n>-1&&-1===e[n].symbol.indexOf(t.symbol)?e[n].symbol+=`,${t.symbol}`:e.push(t),e}),[]),c=e.isV2?c.map(t):p.map(t);const d=Object(a.getLpContractAddressConfig)(i).map((async e=>{const t=await Object(a.getPoolLiquidity)(e.chainId,e.pool)||{},n=await Object(a.getPoolInfoApy)(e.chainId,e.pool)||{},c=e.pool||"";let s,i;if(Object(r.h)(e.pool)){s=(100*+(await Object(a.getLpPoolInfoApy)(e.chainId,e.pool)).apy2).toFixed(2)}return Object(r.i)(e.pool)&&(i="SUSHI-APY"),Object(r.g)(e.pool)&&(i="CAKE-APY"),Object.assign(e,{network:o[e.chainId].name,liquidity:t.liquidity,apy:(100*+n.apy).toFixed(2),pool:Object(r.c)(c),lpApy:s,address:c,type:"lp",label:i,buttonText:"STAKING"})})),j=c.concat(d);return Promise.all(j).then((e=>{e.push({network:"BSC",bTokenSymbol:"GIVEAWAY",liquidity:"4100",symbol:"--",airdrop:!0,buttonText:"CLAIM"});const t=e.filter((e=>"v1"===e.version||!e.version)),c=e.filter((e=>"v2"===e.version));u(c),b(t),l(e),n(!0)})),()=>s.length=0}),[e.current]),[t,s,p,d]}},650:function(e,t,n){"use strict";var c=n(0),a=n.n(c),s=n(1),r=n(17),i=n(7),o=n(33),l=n(176),p=n(26),b=n(622),d=n(96),u=n(621),j=n(43),A=n(60),O=l[p.DeriEnv.get()].chainInfo;t.a=Object(d.b)("wallet","version")(Object(d.c)((function(e){var t=e.wallet,n=e.version,c=e.pool,l=e.lang,d=Object(i.useState)(""),f=Object(r.a)(d,2),m=f[0],x=f[1],h="logo ".concat(c.bTokenSymbol),y=Object(o.useHistory)(),v=function(){t.connect()},w=function(){var e=Object(s.a)(a.a.mark((function e(){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.getUserInfoAllForAirDrop)(t.detail.account);case 2:if((n=e.sent).valid){e.next=6;break}return alert(l["no-deri-to-claim"]),e.abrupt("return");case 6:if(Object(j.b)(t.detail.chainId,n.chainId)){e.next=9;break}return alert(l["please-switch-to-BSC-to-claim-deri"]),e.abrupt("return");case 9:return e.next=11,Object(p.mintAirdrop)(n.chainId,t.detail.account);case 11:e.sent.success||alert(l["claim-failed"]);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){if(c&&c.airdrop)t.isConnected()?x(Object(A.jsx)(u.a,{btnText:l.claim,click:w,lang:l})):x(Object(A.jsx)(u.a,{btnText:l["connect-wallet"],click:v,lang:l}));else{var e="/mining/".concat(c.version||"v1","/").concat(c.chainId,"/").concat(c.type,"/").concat(c.symbol,"/").concat(c.bTokenSymbol,"/").concat(c.address);c.bTokenId&&(e="".concat(e,"?baseTokenId=").concat(c.bTokenId)),c.symbolId&&(e=e.indexOf("?")>0?"".concat(e,"&symbolId=").concat(c.symbolId):"".concat(e,"?symbolId=").concat(c.symbolId)),x(Object(A.jsx)("button",{onClick:function(){return function(e){y.push(e)}(e)},children:l.staking}))}return function(){}}),[c]),Object(A.jsxs)("div",{className:"pool",children:[Object(A.jsxs)("div",{className:"pool-header",children:[Object(A.jsx)("div",{className:"network",children:c.network&&c.network.toUpperCase()}),Object(A.jsxs)("div",{className:"pool-label",children:[n.isV2&&"v1"===c.version&&Object(A.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAUCAYAAAAHpoRMAAAACXBIWXMAAAsSAAALEgHS3X78AAACpUlEQVRIicVWT2jTYBx9k4ZlLYhQb3aXFdZO8NCAG7RSVukOOmUwkLmDCN4UPSxF0PZeCqMZHmoOwi6evEgr4k2PTpeTUDrbyURaL8UU7GT1DzTyyS/lW0zabFZ98BGatvm99773+30ZMQwD/wspWfYCCAAYB1D3/AseKVlmxfxU1E9rkr6uAegwMkNzhlN5nCtmFtZp1flrXlF0/hmDyLyg61mLyjEAIbPYbCKRiEajM51O58OaoqxTMbb28opSo78mAeQA3ACwaVfMloyp8m46nfP5fKdKxeIzTdM+kfJ9KuPx+Pfz8/NZQRB+ALgC4KPlcScAZABMA2jzwqzwpGSZqYtylprKG9Vq9YskSYhEIm1N0x5xKnk8JKfWLESS3GrTPVtHTHjI7jFS+9Kyl0zNyVA47HcgkgYwBeAxLRNXAcwA2AKwQJ8X+5FhprgJ8G+5ISwSmS3ann4ose16t719WVXVI+S+1xLyp25a+y05NM0pYzm4SfbfsVHZa+VYLHY6OTcnNZvNjqqqt6mVzdw9p51g+YMbMq+JyBRHJmcYxrH3OzvrhUIhDEByaOXaZCg0Kori50AgcC+vKA/6FRpIplKptILBoFdvtZbyq6sjS8vLC8GJiTPlcrn2pFQapczVrSo5nAPwFcCbQbV+ZcZhYJn39HQmc0kQhG+vNjbU2UTierfb3RRF8ZoLV48CKALYpSD3JyOvrFwEcIEfyzYD6z43J3YpsO0BzwYXctZpWVfOuABrzVv0M8cJaoM0EcryrZ+SZdP5cW6u1f7aqU3DlD8c+UOywZznOotN98Yfk3FQyZ/IZmdVWQxsAt6DKzKW9w6ryl4bk1pWrJFXlL2DCttHxsV7h255BXBUeRiwbopSNw1V5WHAhh7by/qwVR4YAH4C104ah/PdWdoAAAAASUVORK5CYII=",alt:"v1"}),n.isV2&&"v2"===c.version&&Object(A.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAUCAYAAAAHpoRMAAAACXBIWXMAAAsSAAALEgHS3X78AAACuUlEQVRIicVWS2gTURQ9hcTEBAtpstOsGtoaKZhAKswiJkUIWkUtSOmiCO78LTrpIqYLd6VQEgkSBReRkpUbm/hbVVdCtQNuAqMZpC7S7hKRGBNKICNP7pRnkmlGbe2Bx4Nh5t577j3nvelTVRUHhago2gAcA+AGUDL9jzqiosiSHQYwDMBJS3umAGiwYvasMxxLFyUbAqA9q9Aq8XsimazwMXoV84b28d1YhsLhsCAIp37UalupVOoRSxaJREyBQOCsY2DAz8VbB/AewHK3ZLrFREVx6E48vmi320fzudwrSZLKxLJBzNhqBIPBb+cmJhbMZnMTwAyALQCTAOIAPgJYoJ1hEcAZAPe7FWSKiiJjJxBbNzfLzWKxWPP7/fD5fFVJkp4kkkmlS91Zev8eFcJwC0AVwE3aNcQA5AFc7VoMl5wxft42yzEA3uGREadOIYz9cQBPaWkYp4TVLt8c0ZmEzYiAO3RD4Ecx0ysIQ7PZTKiqGlEU5eXjTOYtiVxz1wsj1v5EHRojATIc5UYR68LSzdnX6fV6vadDoUsOh8Mhy/JqbmVF09BrmgTTX083gdp9u010WVVVT3zZ2Mik0+kPnJU1ljtWjs7NXXa5XKNQVfmQxXKXE3MHenZGluWvHo/HWq5UphJLS31T09MXPYODQqFQ+Pwsn7cAOEnOYizrnLYmqXv9AJb07MzjV2d6HVjx+fkrZrN5+93a2sNQOHy91WqtW63Wazox+8nC2lhjOkLuLEacnb0A4DyzctspWeZYPqDgLOh3Eqxegiw5bJlGaxhGrwNNNww3OCHv9p4eVqOimKHO8+easm+3Nh2mO47idl7gijYFNpl/LqbdxpzmwCXjL8eSXixDxbT9d9h0bMwS1ynpZiKZrP8psd+K2UuWfwPmJoHc5DT637FfYIdesc3GBwMAPwHwfCc5wAJXPgAAAABJRU5ErkJggg==",alt:"v2"})]})]}),Object(A.jsx)("div",{className:"pool-info",children:Object(A.jsxs)("div",{className:"info-center",children:[Object(A.jsxs)("div",{className:"top-info",children:[Object(A.jsx)("div",{className:h}),Object(A.jsxs)("div",{className:"pool-detail",children:[Object(A.jsx)("div",{className:"base-token",children:c.bTokenSymbol}),Object(A.jsxs)("div",{children:[Object(A.jsx)("span",{className:"title",children:c.airdrop?l.total:l["pool-liq"]}),Object(A.jsx)(b.a,{value:c.liquidity,displayType:"text",thousandSeparator:!0,decimalScale:c.lpApy?7:0})]}),Object(A.jsxs)("div",{children:[Object(A.jsx)("span",{children:l.symbol}),c.symbol]}),Object(A.jsxs)("div",{className:"apy",children:[Object(A.jsx)("span",{children:l.apy}),Object(A.jsxs)("span",{children:[Object(A.jsx)("span",{className:c.lpApy?"sushi-apy-underline":"",title:c.lpApy&&l["deri-apy"],children:c.apy?Object(A.jsx)(b.a,{value:c.apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2}):"--"}),c.lpApy&&Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("span",{children:" + "}),Object(A.jsxs)("span",{className:c.lpApy?"sushi-apy-underline":"",title:c.lpApy&&c.label,children:[" ",Object(A.jsx)(b.a,{value:c.lpApy,displayType:"text",suffix:"%",decimalScale:2})]})]})]})]}),Object(A.jsxs)("div",{className:"pool-address",children:[Object(A.jsx)("span",{children:l.address}),c.airdrop?"--":Object(A.jsx)("a",{target:"_blank",rel:"noreferrer",href:"".concat(O[c.chainId].viewUrl,"/address/").concat(c.address||c.pool),children:c.pool})]})]})]}),Object(A.jsx)("div",{className:"bottom-btn",children:m})]})})]})})))},692:function(e,t,n){},693:function(e,t,n){},718:function(e,t,n){"use strict";n.r(t);var c=n(650),a=n(643),s=(n(692),n(693),n(96)),r=n(60);t.default=Object(s.b)("version")(Object(s.c)((function({version:e,lang:t}){const[n,s,i,o]=Object(a.a)(e);return Object(r.jsxs)("div",{className:"mining-info",children:[Object(r.jsxs)("div",{className:"pools",children:[o.map(((e,n)=>Object(r.jsx)(c.a,{pool:e,lang:t},n))),!n&&Object(r.jsx)("div",{className:"loading",children:Object(r.jsx)("span",{className:"spinner spinner-border spinner-border-sm"})})]}),Object(r.jsx)("div",{className:"pools",children:i.map(((e,n)=>Object(r.jsx)(c.a,{pool:e,lang:t},n)))})]})})))}}]);
//# sourceMappingURL=13.4f0cb5dc.chunk.js.map