(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[25],{1214:function(e,a,t){"use strict";var s,c,i=t(87),l=t(1210),d=t(88),n=t(25),r=t(185),j=t(6),o=(t(63),t(1277)),b=t(50),h=t(19),x=t(11),p=t(4),v=["allowZero","wallet","closeShowLoadingEffectAfterLoaded","defaultValue"],m=Object(b.a)(o.a)(s||(s=Object(r.a)(["\n  width : ","px;\n"])),(function(e){return e.width})),O=b.a.div(c||(c=Object(r.a)(["\n  width : ",";\n  height : ",";\n"])),(function(e){return/px$/.test(e.width)?e.width:"".concat(e.width,"px")}),(function(e){return/px$/.test(e.height)?e.height:"".concat(e.height,"px")}));a.a=function(e){var a=Object(j.useState)(Object(p.jsx)("span",{className:"loading-line"})),t=Object(n.a)(a,2),s=t[0],c=t[1],r=Object(j.useState)(!0),o=Object(n.a)(r,2),b=o[0],u=o[1],f=function(){var a=e.allowZero;return"object"!==Object(d.a)(e.value)&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===Math.abs(e.value)&&!0===a},w=function(e){return e&&e.replace(/\.$/,"")};return Object(j.useEffect)((function(){var a=e.allowZero,t=(e.wallet,e.closeShowLoadingEffectAfterLoaded),s=e.defaultValue,d=void 0===s?"--":s,n=Object(l.a)(e,v);if(f())n.decimalScale>0&&n.value&&/\d+\.0*[1-9]+/.test(n.value)&&0===+Object(x.bg)(n.value).toFixed(+n.decimalScale||2)&&(n.decimalScale=Object(h.d)(Math.abs(n.value))+2),(-1===n.decimalScale||0===+n.value&&a)&&delete n.decimalScale,n.value=Object(h.K)(n.value),n.value&&/\d+.9{6}/.test(n.value)&&(n.value=(+n.value).toFixed(5)),c(Object(p.jsx)(m,Object(i.a)(Object(i.a)({},n),{},{renderText:w,displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0})));else if(b){var r=e.width,j=e.height;c(Object(p.jsx)(O,{className:"loading-line",width:r,height:j})),t&&u(!1)}var o=window.setTimeout((function(){f()||c(d)}),6e4);return function(){clearTimeout(o)}}),[e.value,e.decimalScale,e.suffix]),s}},2131:function(e,a,t){},2329:function(e,a,t){"use strict";t.r(a);var s=t(6),c=t(47),i=t(1214),l=t(162),d=t(28),n=t(167),r=t(10),j=t(223),o=t.p+"static/media/pancake.2c13a9f3.svg",b=t.p+"static/media/sushiswap-sushi-logo.f8ccc300.svg",h=t.p+"static/media/gateio.1570dd44.svg",x=t.p+"static/media/mxc.b59b5e73.svg",p=t.p+"static/media/governance.e32bdd33.svg",v=t.p+"static/media/privilege.9c1f0375.svg",m=(t(2131),t(4));function O(e){let{item:a,index:t}=e;const[c,i]=Object(s.useState)(!1);return Object(m.jsxs)("div",{className:"faq-info-box",children:[Object(m.jsxs)("div",{className:"faq-title-img",onClick:()=>{i(!c)},children:[Object(m.jsx)("div",{className:"faq-question-title",children:a.label}),Object(m.jsx)("div",{children:Object(m.jsx)(d.a,{token:c?"arrow-up":"arrow-down",width:"20",height:"20"})})]}),c&&Object(m.jsxs)("div",{className:"faq-des",children:[a.labelDes,a.link&&Object(m.jsxs)("a",{target:"_blank",href:a.link,children:[" ",a.linkLabel]})]})]},t)}a.default=Object(c.b)("wallet")(Object(c.c)((function(e){let{wallet:a={},lang:t}=e;const[c,u]=Object(s.useState)(),[f,w]=Object(s.useState)(),[g,N]=Object(s.useState)(!1),k=Object(n.a)(),y=[{label:t["what-is-deri"],labelDes:t["what-is-deri-des"]},{label:t["is-deri-erc20-token"],labelDes:t["is-deri-erc20-token-des"]},{label:t["what-deri-token-total"],labelDes:t["what-deri-token-total-des"],link:"https://docs.deri.io/library/tokenomics",linkLabel:t.more}],S=async()=>{let e=await fetch("https://infoapi2.deri.finance/stats_for_token"),a=await e.json();if(a){let e={};e.price=a.data.price,e.market_cap=a.data.market_cap,e.circulating_supply=parseInt(a.data.circulating_supply),e.total_supply=parseInt(a.data.total_supply),w(e)}};return Object(s.useEffect)((()=>{if(a.isConnected()){let e;56===+a.detail.chainId?e="0xe60eaf5A997DFAe83739e035b005A33AfdCc6df5":1===+a.detail.chainId?e="0xa487bf43cf3b10dffc97a9a744cbb7036965d3b9":128===+a.detail.chainId?e="0x2bdA3e331Cf735D9420e41567ab843441980C4B8":137===+a.detail.chainId&&(e="0x3d1d2afd191b165d140e3e8329e634665ffb0e5e"),u(e)}}),[a.detail]),Object(s.useEffect)((()=>{let e=null;return e=window.setInterval((()=>{S()}),3e5),S(),()=>{e&&clearInterval(e)}}),[]),Object(m.jsx)("div",{className:"token-box",children:Object(m.jsxs)("div",{className:"token-info",children:[Object(m.jsxs)("div",{className:"token-header",children:[Object(m.jsxs)("div",{className:"token-header-left",children:[Object(m.jsxs)("div",{className:"logo-title",children:[Object(m.jsx)("img",{alt:"",src:j.default}),Object(m.jsx)("span",{className:"title-text",children:t.title})]}),Object(m.jsxs)("div",{className:"token-header-des",children:[t["deri-is-the-protocol-token"],Object(m.jsxs)("a",{rel:"noopener noreferrer",href:"https://docs.deri.io/tokenomics",target:"_blank",className:"learn-more",children:[" ",t["learn-more"]," "]})]})]}),Object(m.jsx)("div",{className:"token-header-right",children:Object(m.jsx)(l.a,{onClick:()=>{(async()=>{if(c){const a="DERI",t=18;try{await window.ethereum.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:c,symbol:a,decimals:t}}})?console.log("Thanks for your interest!"):console.log("Your loss!")}catch(e){console.log(e)}}})()},type:r.o,width:"242",label:t["add-deri-to-metamask"]})})]}),Object(m.jsxs)("div",{className:"token-info-content",children:[Object(m.jsxs)("div",{className:"top-info-box",children:[Object(m.jsxs)("div",{className:"info-box",children:[Object(m.jsxs)("div",{className:"num",children:["$ ",f?Object(m.jsx)(i.a,{value:f.price,displayType:"text",thousandSeparator:!0,decimalScale:4}):"--"]}),Object(m.jsx)("div",{className:"text",children:t.price})]}),Object(m.jsxs)("div",{className:"info-box min-box",children:[Object(m.jsxs)("div",{className:"num",children:["$ ",f?Object(m.jsx)(i.a,{value:f.market_cap,displayType:"text",thousandSeparator:!0,decimalScale:0}):"--"]}),Object(m.jsx)("div",{className:"text",children:t["market-cap"]})]})]}),Object(m.jsxs)("div",{className:"buttom-info-box",children:[Object(m.jsxs)("div",{className:"info-box",children:[Object(m.jsx)("div",{className:"num",children:f?Object(m.jsx)(i.a,{value:f.circulating_supply,displayType:"text",thousandSeparator:!0,decimalScale:0}):"--"}),Object(m.jsx)("div",{className:"text",children:t["circulating-supply"]})]}),Object(m.jsxs)("div",{className:"info-box min-box",children:[Object(m.jsx)("div",{className:"num",children:f?Object(m.jsx)(i.a,{value:f.total_supply,displayType:"text",thousandSeparator:!0,decimalScale:0}):"--"}),Object(m.jsx)("div",{className:"text",children:t["total-supply"]})]})]})]}),Object(m.jsx)("div",{className:"buy-deri-token",children:t["buy-deri-token"]}),Object(m.jsxs)("div",{className:"buy-deri-token-swap",children:[Object(m.jsx)("a",{target:"_blank",onClick:async()=>{a.isConnected()?(await a.switchNetwork(k[56]),window.open("https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xe60eaf5a997dfae83739e035b005a33afdcc6df5")):window.open("https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xe60eaf5a997dfae83739e035b005a33afdcc6df5")},children:Object(m.jsxs)("div",{className:"swap-box",children:[Object(m.jsx)("div",{className:"swap-logo",children:Object(m.jsx)("img",{alt:"",src:o})}),Object(m.jsx)("div",{className:"swap-name",children:t["pancake-swap"]})]})}),Object(m.jsx)("a",{target:"_blank",onClick:async()=>{a.isConnected()?(await a.switchNetwork(k[1]),window.open("https://app.sushi.com/swap?inputCurrency=&outputCurrency=0xA487bF43cF3b10dffc97A9A744cbB7036965d3b9")):window.open("https://app.sushi.com/swap?inputCurrency=&outputCurrency=0xA487bF43cF3b10dffc97A9A744cbB7036965d3b9")},children:Object(m.jsxs)("div",{className:"swap-box",children:[Object(m.jsx)("div",{className:"swap-logo",children:Object(m.jsx)("img",{alt:"",src:b})}),Object(m.jsx)("div",{className:"swap-name",children:t["sushi-swap"]})]})}),Object(m.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.gate.io/tradepro/DERI_USDT",children:Object(m.jsxs)("div",{className:"swap-box",children:[Object(m.jsx)("div",{className:"swap-logo",children:Object(m.jsx)("img",{alt:"",src:h})}),Object(m.jsx)("div",{className:"swap-name",children:t.gate})]})}),Object(m.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.mexc.com/exchange/DERI_USDT",children:Object(m.jsxs)("div",{className:"swap-box",children:[Object(m.jsx)("div",{className:"swap-logo",children:Object(m.jsx)("img",{alt:"",src:x})}),Object(m.jsx)("div",{className:"swap-name",children:t.mexc})]})})]}),Object(m.jsxs)("div",{className:"benefits-faq-box",children:[Object(m.jsxs)("div",{className:"benefits-box",children:[Object(m.jsx)("div",{className:"benefits-title",children:t["benefits-of-deri-token"]}),Object(m.jsxs)("div",{className:"benefits-info",children:[Object(m.jsxs)("div",{className:"governance",children:[Object(m.jsx)("img",{src:p,alt:""}),Object(m.jsxs)("div",{className:"governance-des",children:[Object(m.jsx)("div",{className:"governance-title",children:t.governance}),Object(m.jsx)("div",{className:"governance-text",children:t["governance-des"]})]})]}),Object(m.jsxs)("div",{className:"privilege",children:[Object(m.jsx)("img",{src:v,alt:""}),Object(m.jsxs)("div",{className:"privilege-des",children:[Object(m.jsx)("div",{className:"privilege-title",children:t.privilege}),Object(m.jsx)("div",{className:"privilege-text",children:t["privilege-des"]})]})]})]})]}),Object(m.jsxs)("div",{className:"faq-box",children:[Object(m.jsx)("div",{className:"faq-title",children:t.faq}),Object(m.jsxs)("div",{className:"faq-info",children:[y.map(((e,a)=>Object(m.jsx)(O,{item:e,index:a}))),Object(m.jsxs)("div",{className:"faq-info-box",children:[Object(m.jsxs)("div",{className:"faq-title-img",onClick:()=>{N(!g)},children:[Object(m.jsx)("div",{className:"faq-question-title",children:t["what-are-the"]}),Object(m.jsx)("div",{children:Object(m.jsx)(d.a,{token:g?"arrow-up":"arrow-down",width:"20",height:"20"})})]}),g&&Object(m.jsxs)("div",{className:"faq-des",children:[Object(m.jsx)("div",{className:"governance-privilege",children:t.governance}),Object(m.jsx)("div",{children:t["what-are-the-govenance-des"]}),Object(m.jsx)("div",{className:"governance-privilege privilege",children:t.privilege}),Object(m.jsx)("div",{children:t["what-are-the-privilege-des-one"]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("br",{}),t["what-are-the-privilege-des-two"]]}),Object(m.jsx)("div",{className:"specifically",children:t["what-are-the-privilege-des-three"]}),Object(m.jsxs)("div",{className:"specifically-des",children:[Object(m.jsx)("div",{className:"list-style"}),Object(m.jsx)("div",{children:t["what-are-the-privilege-des-three-des-one"]})]}),Object(m.jsxs)("div",{className:"specifically-des",children:[Object(m.jsx)("div",{className:"list-style"}),Object(m.jsx)("div",{children:t["what-are-the-privilege-des-three-des-two"]})]}),Object(m.jsx)("div",{className:"specifically",children:t["what-are-the-privilege-des-four"]})]})]})]})]})]})]})})})))}}]);
//# sourceMappingURL=25.6ecfeabe.chunk.js.map