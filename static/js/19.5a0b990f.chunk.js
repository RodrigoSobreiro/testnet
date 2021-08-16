(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[19],{571:function(e,t,s){"use strict";s.d(t,"a",(function(){return i}));var a=s(2),c=s(13);function i({btnText:e,className:t,disabled:s,click:i,afterClick:n,checkApprove:l,wallet:o,spec:r,lang:d}){const[b,p]=Object(a.useState)(s?"disabled":"enabled"),[j,A]=Object(a.useState)(!0),[O,m]=Object(a.useState)(!1),[u,h]=Object(a.useState)(e),y=Object(a.useRef)(null),x=()=>{p("disabled"),m(!0),y.current&&(y.current.style.display="inline-block")},f=()=>{y.current&&(y.current.style.display="none"),p("enabled"),m(!1)};return Object(a.useEffect)((()=>((async()=>{if(l&&o&&o.detail.account){const e=await o.isApproved(r.pool,r.bTokenId);A(e)}})(),()=>{})),[o,r,l]),Object(a.useEffect)((()=>(e&&h(e),()=>{})),[e]),Object(c.jsxs)("button",{className:t,onClick:()=>{j?(async()=>{if("enabled"!==b)return;x(),await i()&&n&&n(),f()})():(async()=>{x(),(await o.approve(r.pool,r.bTokenId)).success?A(!0):(A(!1),alert(d["approve-failed"])),f()})()},children:[Object(c.jsx)("span",{className:"btn-loading-wrap",children:Object(c.jsx)("span",{ref:y,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),O?d.pending:j?u:d.approve]})}},572:function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));var a=s(2),c=s(573),i=s(13);function n(e){const[t,s]=Object(a.useState)("--");return Object(a.useEffect)((()=>{const{allowZero:t,...a}=e;return(void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t)&&s(Object(i.jsx)(c.a,{...a,displayType:"text"})),()=>{}}),[e.value]),t}},577:function(e,t,s){"use strict";s.d(t,"a",(function(){return r}));var a=s(2),c=s(10),i=s(76),n=s(26);s(7);const l=c.a.get(),{chainInfo:o}=i[l];function r(e){const[t,s]=Object(a.useState)(!1),[i,r]=Object(a.useState)([]),[d,b]=Object(a.useState)([]),[p,j]=Object(a.useState)([]),[A,O]=Object(a.useState)([]),[m,u]=Object(a.useState)([]),[h,y]=Object(a.useState)([]);return Object(a.useEffect)((()=>{const t=e=>{const t=[];return e.reduce(((e,t)=>{const s=e.find((e=>Object(n.c)(e.pool.address,t.address)));if(s&&s.list.length<5)s.list.push(t);else{const s={pool:{network:t.network,symbol:t.symbol,address:t.address,formatAdd:t.formatAdd,version:t.version,chainId:t.chainId,airdrop:t.airdrop,type:t.type,bTokenSymbol:t.bTokenSymbol,bTokenId:t.bTokenId,symbolId:t.symbolId},list:[t]};e.push(s)}return e}),t),t};let a=Object(c.l)(l,"v2"),d=Object(c.l)(l,"v1");const p=Object(c.l)(l,"v2_lite"),A=Object(c.l)(l,"option"),m=Object(c.E)(l);let h=a.concat(d).concat(m).concat(p).concat(A).reduce(((e,t)=>{const s=e.findIndex((e=>e.chainId===t.chainId&&e.bTokenSymbol===t.bTokenSymbol&&t.version===e.version));return("v2"===t.version||"v2_lite"===t.version||"option"===t.version)&&s>-1&&-1===e[s].symbol.indexOf(t.symbol)?e[s].symbol+=`,${t.symbol}`:e.push(t),e}),[]);h=h.map((async e=>{const t=await Object(c.B)(e.chainId,e.pool,e.bTokenId)||{},s=await Object(c.A)(e.chainId,e.pool,e.bTokenId)||{},a=e.pool||"";return Object.assign(e,{network:o[e.chainId]&&o[e.chainId].name,liquidity:t.liquidity,apy:(100*+s.apy).toFixed(2),formatAdd:Object(n.d)(a),address:a,type:"perpetual",buttonText:"STAKING",multiplier:s.multiplier})}));const x=Object(c.v)(l).map((async e=>{const t=await Object(c.B)(e.chainId,e.pool)||{},s=await Object(c.A)(e.chainId,e.pool)||{},a=e.pool||"";let i,l;if(Object(n.k)(e.pool)){let t=await Object(c.x)(e.chainId,e.pool);i=t&&(100*+t.apy2).toFixed(2)}return Object(n.l)(e.pool)&&(l="SUSHI-APY"),Object(n.j)(e.pool)&&(l="CAKE-APY"),Object.assign(e,{network:o[e.chainId].name,liquidity:t.liquidity,apy:(100*+s.apy).toFixed(2),formatAdd:Object(n.d)(a),lpApy:i,address:a,type:"lp",label:l,buttonText:"STAKING"})})),f=h.concat(x);return Promise.all(f).then((a=>{a.push({network:"BSC",bTokenSymbol:"GIVEAWAY",liquidity:"1002200",symbol:"--",airdrop:!0,chainId:56,buttonText:"CLAIM"});let c=a.filter((e=>("v1"===e.version||!e.version)&&!e.retired)),i=a.filter((e=>("v2"===e.version||"v2_lite"===e.version)&&!e.retired)),n=a.filter((e=>"option"===e.version&&!e.retired));const l=a.filter((e=>e.retired&&!e.premining)),o=a.filter((e=>e.retired&&e.premining));e&&(c=t(c),i=t(i),n=t(n)),j(i),b(c),O(n),r(a),u(l),y(o),s(!0)})),()=>i.length=0}),[]),[t,i,d,p,A,m,h]}},606:function(e,t,s){"use strict";var a=s(2),c=s(17),i=s(76),n=s(10),l=s(572),o=s(37),r=s(571),d=s(26),b=s(13);const p=i[n.a.get()].chainInfo;t.a=Object(o.b)("wallet","version")(Object(o.c)((function({wallet:e,version:t,pool:s,lang:i}){const[o,j]=Object(a.useState)(""),A=`logo ${s.bTokenSymbol}`,O=Object(c.useHistory)(),m=()=>{e.connect()},u=async()=>{let t=await Object(n.I)(e.detail.account);t.valid?Object(d.c)(e.detail.chainId,t.chainId)?(await Object(n.R)(t.chainId,e.detail.account)).success||alert(i["claim-failed"]):alert(i["please-switch-to-BSC-to-claim-deri"]):alert(i["no-deri-to-claim"])};return Object(a.useEffect)((()=>{if(s&&s.airdrop)e.isConnected()?j(Object(b.jsx)(r.a,{btnText:i.claim,click:u,lang:i})):j(Object(b.jsx)(r.a,{btnText:i["connect-wallet"],click:m,lang:i}));else if(s.premining)j(Object(b.jsx)("a",{target:"_blank",href:s.url,children:i.staking}));else{let e=`/mining/${s.version||"v1"}/${s.chainId}/${s.type}/${s.symbol}/${s.bTokenSymbol}/${s.address}`;s.bTokenId&&(e=`${e}?baseTokenId=${s.bTokenId}`),s.symbolId&&(e=e.indexOf("?")>0?`${e}&symbolId=${s.symbolId}`:`${e}?symbolId=${s.symbolId}`),j(Object(b.jsx)("button",{onClick:()=>(e=>{O.push(e)})(e),children:i.staking}))}return()=>{}}),[s]),Object(b.jsxs)("div",{className:"pool",children:[Object(b.jsxs)("div",{className:"pool-header",children:[Object(b.jsx)("div",{className:"network",children:s.network&&s.network.toUpperCase()}),Object(b.jsxs)("div",{className:"pool-label",children:["v1"===s.version&&Object(b.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAUCAYAAAAHpoRMAAAACXBIWXMAAAsSAAALEgHS3X78AAACpUlEQVRIicVWT2jTYBx9k4ZlLYhQb3aXFdZO8NCAG7RSVukOOmUwkLmDCN4UPSxF0PZeCqMZHmoOwi6evEgr4k2PTpeTUDrbyURaL8UU7GT1DzTyyS/lW0zabFZ98BGatvm99773+30ZMQwD/wspWfYCCAAYB1D3/AseKVlmxfxU1E9rkr6uAegwMkNzhlN5nCtmFtZp1flrXlF0/hmDyLyg61mLyjEAIbPYbCKRiEajM51O58OaoqxTMbb28opSo78mAeQA3ACwaVfMloyp8m46nfP5fKdKxeIzTdM+kfJ9KuPx+Pfz8/NZQRB+ALgC4KPlcScAZABMA2jzwqzwpGSZqYtylprKG9Vq9YskSYhEIm1N0x5xKnk8JKfWLESS3GrTPVtHTHjI7jFS+9Kyl0zNyVA47HcgkgYwBeAxLRNXAcwA2AKwQJ8X+5FhprgJ8G+5ISwSmS3ann4ose16t719WVXVI+S+1xLyp25a+y05NM0pYzm4SfbfsVHZa+VYLHY6OTcnNZvNjqqqt6mVzdw9p51g+YMbMq+JyBRHJmcYxrH3OzvrhUIhDEByaOXaZCg0Kori50AgcC+vKA/6FRpIplKptILBoFdvtZbyq6sjS8vLC8GJiTPlcrn2pFQapczVrSo5nAPwFcCbQbV+ZcZhYJn39HQmc0kQhG+vNjbU2UTierfb3RRF8ZoLV48CKALYpSD3JyOvrFwEcIEfyzYD6z43J3YpsO0BzwYXctZpWVfOuABrzVv0M8cJaoM0EcryrZ+SZdP5cW6u1f7aqU3DlD8c+UOywZznOotN98Yfk3FQyZ/IZmdVWQxsAt6DKzKW9w6ryl4bk1pWrJFXlL2DCttHxsV7h255BXBUeRiwbopSNw1V5WHAhh7by/qwVR4YAH4C104ah/PdWdoAAAAASUVORK5CYII=",alt:"v1"}),"v2"===s.version&&Object(b.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAUCAYAAAAHpoRMAAAACXBIWXMAAAsSAAALEgHS3X78AAACuUlEQVRIicVWS2gTURQ9hcTEBAtpstOsGtoaKZhAKswiJkUIWkUtSOmiCO78LTrpIqYLd6VQEgkSBReRkpUbm/hbVVdCtQNuAqMZpC7S7hKRGBNKICNP7pRnkmlGbe2Bx4Nh5t577j3nvelTVRUHhago2gAcA+AGUDL9jzqiosiSHQYwDMBJS3umAGiwYvasMxxLFyUbAqA9q9Aq8XsimazwMXoV84b28d1YhsLhsCAIp37UalupVOoRSxaJREyBQOCsY2DAz8VbB/AewHK3ZLrFREVx6E48vmi320fzudwrSZLKxLJBzNhqBIPBb+cmJhbMZnMTwAyALQCTAOIAPgJYoJ1hEcAZAPe7FWSKiiJjJxBbNzfLzWKxWPP7/fD5fFVJkp4kkkmlS91Zev8eFcJwC0AVwE3aNcQA5AFc7VoMl5wxft42yzEA3uGREadOIYz9cQBPaWkYp4TVLt8c0ZmEzYiAO3RD4Ecx0ysIQ7PZTKiqGlEU5eXjTOYtiVxz1wsj1v5EHRojATIc5UYR68LSzdnX6fV6vadDoUsOh8Mhy/JqbmVF09BrmgTTX083gdp9u010WVVVT3zZ2Mik0+kPnJU1ljtWjs7NXXa5XKNQVfmQxXKXE3MHenZGluWvHo/HWq5UphJLS31T09MXPYODQqFQ+Pwsn7cAOEnOYizrnLYmqXv9AJb07MzjV2d6HVjx+fkrZrN5+93a2sNQOHy91WqtW63Wazox+8nC2lhjOkLuLEacnb0A4DyzctspWeZYPqDgLOh3Eqxegiw5bJlGaxhGrwNNNww3OCHv9p4eVqOimKHO8+easm+3Nh2mO47idl7gijYFNpl/LqbdxpzmwCXjL8eSXixDxbT9d9h0bMwS1ynpZiKZrP8psd+K2UuWfwPmJoHc5DT637FfYIdesc3GBwMAPwHwfCc5wAJXPgAAAABJRU5ErkJggg==",alt:"v2"})]})]}),Object(b.jsx)("div",{className:"pool-info",children:Object(b.jsxs)("div",{className:"info-center",children:[Object(b.jsxs)("div",{className:"top-info",children:[Object(b.jsx)("div",{className:A}),Object(b.jsxs)("div",{className:"pool-detail",children:[Object(b.jsx)("div",{className:"base-token",children:s.bTokenSymbol}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{className:"title",children:s.airdrop?i.total:i["pool-liq"]}),Object(b.jsx)(l.a,{value:s.liquidity,displayType:"text",thousandSeparator:!0,decimalScale:(h=s.pool,"0x3f98429b673AF39671a495b5B12Ebd5C10092ccB"===h||"0x03dA5cB10D868c5F979b277eb6DF17D50E78fE2A"===h?7:0)})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:i.symbol}),s.symbol]}),Object(b.jsxs)("div",{className:"apy",children:[Object(b.jsx)("span",{children:i.apy}),Object(b.jsxs)("span",{children:[Object(b.jsx)("span",{className:s.lpApy?"sushi-apy-underline":"",title:s.lpApy&&i["deri-apy"],children:s.apy?Object(b.jsx)(l.a,{value:s.apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2}):"--"}),s.lpApy&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("span",{children:" + "}),Object(b.jsxs)("span",{className:s.lpApy?"sushi-apy-underline":"",title:s.lpApy&&s.label,children:[" ",Object(b.jsx)(l.a,{value:s.lpApy,displayType:"text",suffix:"%",decimalScale:2})]})]})]})]}),Object(b.jsxs)("div",{className:"pool-address",children:[Object(b.jsx)("span",{children:i.address}),s.airdrop?"--":Object(b.jsx)("a",{target:"_blank",rel:"noreferrer",href:p[s.chainId]&&`${p[s.chainId].viewUrl}/address/${s.address||s.pool}`,children:s.formatAdd})]})]})]}),Object(b.jsx)("div",{className:"bottom-btn",children:o})]})})]});var h})))},700:function(e,t,s){},701:function(e,t,s){},732:function(e,t,s){"use strict";s.r(t);var a=s(2),c=(s(700),s(701),s(606)),i=s(577),n=s(37),l=s(13);t.default=Object(n.b)("version","loading")(Object(n.c)((function({version:e,lang:t,loading:s}){const[n,o,r,d,b,p]=Object(i.a)(e);return Object(a.useEffect)((()=>(n?s.loaded():s.loading(),()=>{})),[n]),Object(l.jsxs)("div",{className:"retired",children:[Object(l.jsxs)("div",{className:"retired-title",children:[Object(l.jsx)("div",{className:"retired-pools",children:t["retired-pools"]}),t["retired-text"],Object(l.jsx)("a",{href:"https://app.deri.finance/#/mining",children:t["new-pools"]})]}),Object(l.jsx)("div",{className:"retired-mining-info",children:Object(l.jsx)("div",{className:"pools",children:b.map(((e,s)=>Object(l.jsx)(c.a,{pool:e,lang:t},s)))})}),Object(l.jsxs)("div",{className:"retired-title",children:[Object(l.jsxs)("div",{className:"premining",children:[" ",t["premining-pools"]]}),Object(l.jsx)("span",{children:t["premining-finished"]})]}),Object(l.jsx)("div",{className:"retired-mining-info",children:Object(l.jsx)("div",{className:"pools",children:p.map(((e,s)=>Object(l.jsx)(c.a,{pool:e,lang:t},s)))})})]})})))}}]);
//# sourceMappingURL=19.5a0b990f.chunk.js.map