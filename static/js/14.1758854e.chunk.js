(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[14],{608:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var s=n(40),a=n.n(s),c=n(87),l=n(148),i=n(2),r=n(16);function o(e){var t=e.btnText,n=e.className,s=e.disabled,o=e.click,d=e.afterClick,b=e.checkApprove,j=e.wallet,p=e.spec,u=e.lang,O=Object(i.useState)(s?"disabled":"enabled"),m=Object(l.a)(O,2),h=m[0],f=m[1],x=Object(i.useState)(!0),v=Object(l.a)(x,2),y=v[0],g=v[1],k=Object(i.useState)(!1),N=Object(l.a)(k,2),I=N[0],w=N[1],S=Object(i.useState)(t),T=Object(l.a)(S,2),A=T[0],$=T[1],C=Object(i.useRef)(null),F=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===h){e.next=2;break}return e.abrupt("return");case 2:return E(),e.next=5,o();case 5:e.sent&&d&&d(),q();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){f("disabled"),w(!0),C.current&&(C.current.style.display="inline-block")},q=function(){C.current&&(C.current.style.display="none"),f("enabled"),w(!1)},_=function(){var e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(b&&j&&j.detail.account)){e.next=5;break}return e.next=3,j.isApproved(p.pool,p.bTokenId);case 3:t=e.sent,g(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(),e.next=3,j.approve(p.pool,p.bTokenId);case 3:e.sent.success?g(!0):(g(!1),alert(u["approve-failed"])),q();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){return _(),function(){}}),[j,p,b]),Object(i.useEffect)((function(){return t&&$(t),function(){}}),[t]),Object(r.jsxs)("button",{className:n,onClick:function(){y?F():K()},children:[Object(r.jsx)("span",{className:"btn-loading-wrap",children:Object(r.jsx)("span",{ref:C,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),I?u.pending:y?A:u.approve]})}},609:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var s=n(88),a=n(611),c=n(148),l=n(2),i=n(610),r=n(16);function o(e){var t=Object(l.useState)("--"),n=Object(c.a)(t,2),o=n[0],d=n[1];return Object(l.useEffect)((function(){var t=e.allowZero,n=Object(a.a)(e,["allowZero"]);return(void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t)&&d(Object(r.jsx)(i.a,Object(s.a)(Object(s.a)({},n),{},{displayType:"text"}))),function(){}}),[e.value]),o}},613:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var s=n(2),a=n(14),c=n(89),l=n(34);n(21);const i=a.a.get(),{chainInfo:r}=c[i];function o(e){const[t,n]=Object(s.useState)(!1),[c,o]=Object(s.useState)([]),[d,b]=Object(s.useState)([]),[j,p]=Object(s.useState)([]),[u,O]=Object(s.useState)([]),[m,h]=Object(s.useState)([]),[f,x]=Object(s.useState)([]);return Object(s.useEffect)((()=>{const t=e=>{const t=[];return e.reduce(((e,t)=>{const n=e.find((e=>Object(l.c)(e.pool.address,t.address)));if(n&&n.list.length<5)n.list.push(t);else{const n={pool:{network:t.network,symbol:t.symbol,address:t.address,formatAdd:t.formatAdd,version:t.version,chainId:t.chainId,airdrop:t.airdrop,type:t.type,bTokenSymbol:t.bTokenSymbol,bTokenId:t.bTokenId,symbolId:t.symbolId},list:[t]};e.push(n)}return e}),t),t};let s=Object(a.l)(i,"v2"),d=Object(a.l)(i,"v1");const j=Object(a.l)(i,"v2_lite"),u=Object(a.l)(i,"option"),m=Object(a.B)(i);let f=s.concat(d).concat(m).concat(j).concat(u).reduce(((e,t)=>{const n=e.findIndex((e=>e.chainId===t.chainId&&e.bTokenSymbol===t.bTokenSymbol&&t.version===e.version));return("v2"===t.version||"v2_lite"===t.version||"option"===t.version)&&n>-1&&-1===e[n].symbol.indexOf(t.symbol)?e[n].symbol+=`,${t.symbol}`:e.push(t),e}),[]);f=f.map((async e=>{const t=await Object(a.z)(e.chainId,e.pool,e.bTokenId)||{},n=await Object(a.y)(e.chainId,e.pool,e.bTokenId)||{},s=e.pool||"";return Object.assign(e,{network:r[e.chainId]&&r[e.chainId].name,liquidity:t.liquidity,apy:(100*+n.apy).toFixed(2),formatAdd:Object(l.d)(s),address:s,type:"perpetual",buttonText:"STAKING",multiplier:n.multiplier})}));const v=Object(a.t)(i).map((async e=>{const t=await Object(a.z)(e.chainId,e.pool)||{},n=await Object(a.y)(e.chainId,e.pool)||{},s=e.pool||"";let c,i;if(Object(l.k)(e.pool)){let t=await Object(a.v)(e.chainId,e.pool);c=t&&(100*+t.apy2).toFixed(2)}return Object(l.l)(e.pool)&&(i="SUSHI-APY"),Object(l.j)(e.pool)&&(i="CAKE-APY"),Object.assign(e,{network:r[e.chainId].name,liquidity:t.liquidity,apy:(100*+n.apy).toFixed(2),formatAdd:Object(l.d)(s),lpApy:c,address:s,type:"lp",label:i,buttonText:"STAKING"})})),y=f.concat(v);return Promise.all(y).then((s=>{let a=s.filter((e=>("v1"===e.version||!e.version)&&!e.retired)),c=s.filter((e=>("v2"===e.version||"v2_lite"===e.version)&&!e.retired)),l=s.filter((e=>"option"===e.version&&!e.retired));const i=s.filter((e=>e.retired&&!e.premining)),r=s.filter((e=>e.retired&&e.premining));e&&(a=t(a),c=t(c),l=t(l)),p(c),b(a),O(l),o(s),h(i),x(r),n(!0)})),()=>c.length=0}),[]),[t,c,d,j,u,m,f]}},627:function(e,t,n){"use strict";var s=n(2),a=n(20),c=n(89),l=n(14),i=n(609),r=n(45),o=n(608),d=n(34),b=n(607),j=n.n(b),p=n(16);const u=c[l.a.get()].chainInfo;function O({wallet:e,pool:t,card:n,index:c,list:r,lang:b}){const[j,u]=Object(s.useState)(""),[O,m]=Object(s.useState)(!1),h=Object(a.useHistory)(),f=()=>{e.connect().then((()=>{m(!0)}))},x=async()=>{let t=await Object(l.F)(e.detail.account);t.valid?Object(d.c)(e.detail.chainId,t.chainId)?(await Object(l.O)(t.chainId,e.detail.account)).success||alert(b["claim-failed"]):alert(b["please-switch-to-BSC-to-claim-deri"]):alert(b["no-deri-to-claim"])};return Object(s.useEffect)((()=>{if(t&&t.airdrop)e.isConnected()?u(Object(p.jsx)(o.a,{btnText:b.claim,click:x,lang:b})):u(Object(p.jsx)(o.a,{btnText:b["connect-wallet"],click:f,lang:b}));else{let e=`/mining/${t.version||"v1"}/${t.chainId}/${n.type}/${n.symbol}/${n.bTokenSymbol}/${t.address}`;n.bTokenId&&(e=`${e}?baseTokenId=${n.bTokenId}`),n.symbolId&&(e=e.indexOf("?")>0?`${e}&symbolId=${n.symbolId}`:`${e}?symbolId=${n.symbolId}`),u(Object(p.jsx)("button",{onClick:()=>(e=>{h.push(e)})(e),children:b.staking}))}return()=>{}}),[e.detail.account,O]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"info",children:[Object(p.jsxs)("div",{className:"top-info",children:[Object(p.jsxs)("div",{className:"pool-top",children:[Object(p.jsx)("span",{className:`logo ${n.bTokenSymbol}`}),Object(p.jsx)("span",{className:"base-token",children:n.bTokenSymbol})]}),Object(p.jsxs)("div",{className:"pool-detail",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("span",{className:"title",children:n.airdrop?b.total:b["pool-liq"]}),Object(p.jsx)(i.a,{value:n.liquidity,displayType:"text",thousandSeparator:!0,decimalScale:n.lpApy?7:0})]}),Object(p.jsx)("div",{className:"multiplier",children:n.multiplier&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("span",{children:b.multiplier}),Object(p.jsxs)("span",{className:"multiplier-value",title:b["multiplier-tip"],children:[n.multiplier,"x"]})]})}),Object(p.jsxs)("div",{className:"apy",children:[Object(p.jsx)("span",{children:b.apy}),Object(p.jsxs)("span",{children:[Object(p.jsx)("span",{className:n.lpApy?"sushi-apy-underline":"",title:n.lpApy&&b["deri-apy"],children:n.apy?Object(p.jsx)(i.a,{value:n.apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2}):"--"}),n.lpApy&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("span",{children:" + "}),Object(p.jsxs)("span",{className:n.lpApy?"sushi-apy-underline":"",title:n.lpApy&&n.label,children:[" ",Object(p.jsx)(i.a,{value:n.lpApy,displayType:"text",suffix:"%",decimalScale:2})]})]})]})]})]})]}),Object(p.jsx)("div",{className:"bottom-btn",children:j})]}),c!==r.length-1&&Object(p.jsx)("div",{className:"top-line"})]})}t.a=Object(r.b)("wallet","version")(Object(r.c)((function({wallet:e,group:t={},lang:n}){const{pool:s,list:a}=t,c=j()("pool",{"only-one":1===a.length,full:5===a.length});return Object(p.jsxs)("div",{className:c,children:[Object(p.jsxs)("div",{className:"pool-header",children:[Object(p.jsxs)("div",{className:"left",children:[Object(p.jsx)("div",{className:"network",children:s.network&&s.network.toUpperCase()}),Object(p.jsxs)("div",{className:"pool-desc",children:[Object(p.jsxs)("span",{className:"symbol",children:[Object(p.jsxs)("span",{className:"symbol-label",children:[n.symbol,":"]}),Object(p.jsx)("span",{className:"symbol-value",children:s.symbol})]}),Object(p.jsxs)("span",{className:"address",children:[Object(p.jsxs)("span",{className:"address-label",children:[n.address,":"]}),s.airdrop?"--":Object(p.jsx)("a",{target:"_blank",rel:"noreferrer",href:`${u[s.chainId]&&u[s.chainId].viewUrl}/address/${s.address}`,children:s.formatAdd})]})]})]}),Object(p.jsx)("div",{className:"version",children:n[s.version]})]}),Object(p.jsx)("div",{className:"pool-info",children:a.map(((t,c)=>Object(p.jsx)(O,{card:t,index:c,pool:s,list:a,wallet:e,lang:n},c)))})]})})))},680:function(e,t,n){},681:function(e,t,n){},721:function(e,t,n){"use strict";n.r(t);var s=n(2),a=n(627),c=n(613),l=n(607),i=n.n(l),r=(n(680),n(681),n(45)),o=n(16);t.default=Object(r.b)("version","loading")(Object(r.c)((function({lang:e,loading:t}){const[n,l,r,d,b]=Object(c.a)(!0),[j,p]=Object(s.useState)("all"),u=e=>{p(e)},O=i()("checkout-pools",j);return Object(s.useEffect)((()=>(n?t.loaded():t.loading(),()=>{})),[n]),Object(o.jsxs)("div",{className:"mining-info",children:[Object(o.jsxs)("div",{className:O,children:[Object(o.jsx)("div",{className:"all",onClick:()=>u("all"),children:e.all}),Object(o.jsx)("div",{className:"futures",onClick:()=>u("futures"),children:e.futures}),Object(o.jsx)("div",{className:"options",onClick:()=>u("options"),children:e.options})]}),"all"===j&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"pools",children:d.map(((t,n)=>Object(o.jsx)(a.a,{group:t,lang:e},n)))}),Object(o.jsx)("div",{className:"pools",children:r.map(((t,n)=>Object(o.jsx)(a.a,{group:t,lang:e},n)))})]}),"options"===j&&Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"pools",children:b.map(((t,n)=>Object(o.jsx)(a.a,{group:t,lang:e},n)))})}),"futures"===j&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"pools",children:d.map(((t,n)=>Object(o.jsx)(a.a,{group:t,lang:e},n)))}),Object(o.jsx)("div",{className:"pools",children:r.map(((t,n)=>Object(o.jsx)(a.a,{group:t,lang:e},n)))})]})]})})))}}]);
//# sourceMappingURL=14.1758854e.chunk.js.map