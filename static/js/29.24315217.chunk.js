(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[29],{572:function(e,a,c){"use strict";c.d(a,"a",(function(){return n}));var t=c(2),s=c(573),i=c(13);function n(e){const[a,c]=Object(t.useState)("--");return Object(t.useEffect)((()=>{const{allowZero:a,...t}=e;return(void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===a)&&c(Object(i.jsx)(s.a,{...t,displayType:"text"})),()=>{}}),[e.value]),a}},605:function(e,a,c){"use strict";var t=c(2),s=c(37),i=c(572),n=c(576),l=c.p+"static/media/pancake.c40eba3d.svg",d=c.p+"static/media/sushi.084b9b6d.svg",r=c(13);a.a=Object(s.b)("wallet","loading")(Object(s.c)((function({wallet:e={},lang:a,loading:c}){const[s,o]=Object(t.useState)(),[p,u]=Object(t.useState)(),b=Object(n.a)(),j=()=>e&&e.detail&&e.detail.account;return Object(t.useEffect)((()=>{c.loading(),p&&c.loaded()}),[p]),Object(t.useEffect)((()=>{if(j()){let a;56==e.detail.chainId?a="0xe60eaf5A997DFAe83739e035b005A33AfdCc6df5":1==e.detail.chainId?a="0xa487bf43cf3b10dffc97a9a744cbb7036965d3b9":128==e.detail.chainId?a="0x2bdA3e331Cf735D9420e41567ab843441980C4B8":137==e.detail.chainId&&(a="0x3d1d2afd191b165d140e3e8329e634665ffb0e5e"),o(a)}}),[e.detail]),Object(t.useEffect)((()=>{let e=null;return e=window.setInterval((()=>{(async()=>{let e=await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=deri-protocol&order=market_cap_desc&per_page=100&page=1&sparkline=false"),a=await e.json();if(a){let e={};e.price=a[0].current_price,e.market_cap=a[0].market_cap,e.circulating_supply=parseInt(a[0].circulating_supply),e.total_supply=parseInt(a[0].total_supply),u(e)}})()}),1e3),()=>{e&&clearInterval(e)}}),[]),Object(r.jsxs)("div",{className:"token-info",children:[Object(r.jsx)("div",{className:"title",children:a["the-deri-token"]}),Object(r.jsx)("div",{className:"add-to-matemask",children:Object(r.jsx)("button",{onClick:async()=>{if(s){const a="DERI",c=18;try{await window.ethereum.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:s,symbol:a,decimals:c}}})?console.log("Thanks for your interest!"):console.log("Your loss!")}catch(e){console.log(e)}}},children:a["add-deri-to-matemask"]})}),Object(r.jsxs)("div",{className:"buy-deri",children:[Object(r.jsx)("a",{target:"_blank",onClick:async()=>{j()?(await e.switchNetwork(b[56]),window.open("https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xe60eaf5a997dfae83739e035b005a33afdcc6df5")):window.open("https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xe60eaf5a997dfae83739e035b005a33afdcc6df5")},children:Object(r.jsxs)("div",{className:"pancake-buy",children:[Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:l})}),Object(r.jsx)("span",{children:a["buy-deri"]})]})}),Object(r.jsx)("a",{target:"_blank",onClick:async()=>{j()?(await e.switchNetwork(b[1]),window.open("https://app.sushi.com/swap?inputCurrency=&outputCurrency=0xA487bF43cF3b10dffc97A9A744cbB7036965d3b9")):window.open("https://app.sushi.com/swap?inputCurrency=&outputCurrency=0xA487bF43cF3b10dffc97A9A744cbB7036965d3b9")},children:Object(r.jsxs)("div",{className:"sushi-buy",children:[Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:d})}),Object(r.jsx)("span",{children:a["buy-deri"]})]})})]}),Object(r.jsxs)("div",{className:"deri-info",children:[Object(r.jsx)("div",{className:"bottom-square"}),Object(r.jsxs)("div",{className:"line-of-box",children:[Object(r.jsxs)("div",{className:"box",children:[Object(r.jsxs)("div",{className:"num",children:["$ ",p?Object(r.jsx)(i.a,{value:p.price,displayType:"text",thousandSeparator:!0,decimalScale:"4"}):"--"]}),Object(r.jsx)("div",{className:"text",children:a.price})]}),Object(r.jsxs)("div",{className:"box",children:[Object(r.jsxs)("div",{className:"num",children:["$ ",p?Object(r.jsx)(i.a,{value:p.market_cap,displayType:"text",thousandSeparator:!0,decimalScale:"0"}):"--"]}),Object(r.jsx)("div",{className:"text",children:a["market-cap"]})]})]}),Object(r.jsxs)("div",{className:"line-of-box",children:[Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("div",{className:"num",children:p?Object(r.jsx)(i.a,{value:p.circulating_supply,displayType:"text",thousandSeparator:!0,decimalScale:"0"}):"--"}),Object(r.jsx)("div",{className:"text",children:a["circulating-supply"]})]}),Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("div",{className:"num",children:p?Object(r.jsx)(i.a,{value:p.total_supply,displayType:"text",thousandSeparator:!0,decimalScale:"0"}):"--"}),Object(r.jsx)("div",{className:"text",children:a["total-supply"]})]})]})]})]})})))},698:function(e,a,c){},730:function(e,a,c){"use strict";c.r(a),c.d(a,"default",(function(){return i}));var t=c(605),s=(c(698),c(13));function i({lang:e}){return Object(s.jsx)("div",{className:"token",children:Object(s.jsx)(t.a,{lang:e})})}}}]);
//# sourceMappingURL=29.24315217.chunk.js.map