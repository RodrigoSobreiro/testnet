(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[30],{1150:function(e,a,t){},1187:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return s}));var c=t(731),n=(t(1150),t(20));function s(e){var a=e.lang;return Object(n.jsx)("div",{className:"token",children:Object(n.jsx)(c.a,{lang:a})})}},619:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var c=t(5),n=t(621),s=t(20);function r(e){const[a,t]=Object(c.useState)("--");return Object(c.useEffect)((()=>{const{allowZero:a,...c}=e;return("object"!==typeof e.value&&void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===a)&&t(Object(s.jsx)(n.a,{...c,displayType:"text"})),()=>{}}),[e.value]),a}},731:function(e,a,t){"use strict";var c=t(0),n=t.n(c),s=t(1),r=t(11),i=t(5),l=t(49),d=t(619),u=t(642),o=t.p+"static/media/pancake.ca855998.svg",p=t.p+"static/media/sushi.69219f52.svg",b=t(20);a.a=Object(l.b)("wallet","loading")(Object(l.c)((function(e){var a=e.wallet,t=void 0===a?{}:a,c=e.lang,l=e.loading,j=Object(i.useState)(),f=Object(r.a)(j,2),x=f[0],h=f[1],v=Object(i.useState)(),m=Object(r.a)(v,2),O=m[0],k=m[1],y=Object(u.a)(),w=function(){var e=Object(s.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!x){e.next=13;break}return"DERI",18,e.prev=3,e.next=6,window.ethereum.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:x,symbol:"DERI",decimals:18}}});case 6:e.sent?console.log("Thanks for your interest!"):console.log("Your loss!"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(s.a)(n.a.mark((function e(){var a,t,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=deri-protocol&order=market_cap_desc&per_page=100&page=1&sparkline=false",e.next=3,fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=deri-protocol&order=market_cap_desc&per_page=100&page=1&sparkline=false");case 3:return a=e.sent,e.next=6,a.json();case 6:(t=e.sent)&&((c={}).price=t[0].current_price,c.market_cap=t[0].market_cap,c.circulating_supply=parseInt(t[0].circulating_supply),c.total_supply=parseInt(t[0].total_supply),k(c));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){return t&&t.detail&&t.detail.account},_=function(){var e=Object(s.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!g()){e.next=6;break}return e.next=3,t.switchNetwork(y[1]);case 3:window.open("https://app.sushi.com/swap?inputCurrency=&outputCurrency=0xA487bF43cF3b10dffc97A9A744cbB7036965d3b9"),e.next=7;break;case 6:window.open("https://app.sushi.com/swap?inputCurrency=&outputCurrency=0xA487bF43cF3b10dffc97A9A744cbB7036965d3b9");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(s.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!g()){e.next=6;break}return e.next=3,t.switchNetwork(y[56]);case 3:window.open("https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xe60eaf5a997dfae83739e035b005a33afdcc6df5"),e.next=7;break;case 6:window.open("https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xe60eaf5a997dfae83739e035b005a33afdcc6df5");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){l.loading(),O&&l.loaded()}),[O]),Object(i.useEffect)((function(){var e;g()&&(56==t.detail.chainId?e="0xe60eaf5A997DFAe83739e035b005A33AfdCc6df5":1==t.detail.chainId?e="0xa487bf43cf3b10dffc97a9a744cbb7036965d3b9":128==t.detail.chainId?e="0x2bdA3e331Cf735D9420e41567ab843441980C4B8":137==t.detail.chainId&&(e="0x3d1d2afd191b165d140e3e8329e634665ffb0e5e"),h(e))}),[t.detail]),Object(i.useEffect)((function(){var e;return e=window.setInterval((function(){N()}),1e3),function(){e&&clearInterval(e)}}),[]),Object(b.jsxs)("div",{className:"token-info",children:[Object(b.jsx)("div",{className:"title",children:c["the-deri-token"]}),Object(b.jsx)("div",{className:"add-to-matemask",children:Object(b.jsx)("button",{onClick:w,children:c["add-deri-to-matemask"]})}),Object(b.jsxs)("div",{className:"buy-deri",children:[Object(b.jsx)("a",{target:"_blank",onClick:C,children:Object(b.jsxs)("div",{className:"pancake-buy",children:[Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:o})}),Object(b.jsx)("span",{children:c["buy-deri"]})]})}),Object(b.jsx)("a",{target:"_blank",onClick:_,children:Object(b.jsxs)("div",{className:"sushi-buy",children:[Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:p})}),Object(b.jsx)("span",{children:c["buy-deri"]})]})})]}),Object(b.jsxs)("div",{className:"deri-info",children:[Object(b.jsx)("div",{className:"bottom-square"}),Object(b.jsxs)("div",{className:"line-of-box",children:[Object(b.jsxs)("div",{className:"box",children:[Object(b.jsxs)("div",{className:"num",children:["$ ",O?Object(b.jsx)(d.a,{value:O.price,displayType:"text",thousandSeparator:!0,decimalScale:"4"}):"--"]}),Object(b.jsx)("div",{className:"text",children:c.price})]}),Object(b.jsxs)("div",{className:"box",children:[Object(b.jsxs)("div",{className:"num",children:["$ ",O?Object(b.jsx)(d.a,{value:O.market_cap,displayType:"text",thousandSeparator:!0,decimalScale:"0"}):"--"]}),Object(b.jsx)("div",{className:"text",children:c["market-cap"]})]})]}),Object(b.jsxs)("div",{className:"line-of-box",children:[Object(b.jsxs)("div",{className:"box",children:[Object(b.jsx)("div",{className:"num",children:O?Object(b.jsx)(d.a,{value:O.circulating_supply,displayType:"text",thousandSeparator:!0,decimalScale:"0"}):"--"}),Object(b.jsx)("div",{className:"text",children:c["circulating-supply"]})]}),Object(b.jsxs)("div",{className:"box",children:[Object(b.jsx)("div",{className:"num",children:O?Object(b.jsx)(d.a,{value:O.total_supply,displayType:"text",thousandSeparator:!0,decimalScale:"0"}):"--"}),Object(b.jsx)("div",{className:"text",children:c["total-supply"]})]})]})]})]})})))}}]);
//# sourceMappingURL=30.684827ff.chunk.js.map