(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[19],{1580:function(e,t,n){},1590:function(e,t,n){"use strict";n.r(t);n(10);var c=n(36),s=n(282),i=n(34),a=n(221),o=(n(1580),n(46)),l=n(9);t.default=Object(o.b)("wallet")(Object(o.c)((function({wallet:e,lang:t}){const n=Object(a.c)();return Object(l.jsx)("div",{className:"testnet-faucet",children:Object(l.jsxs)("div",{className:"faucet-info",children:[Object(l.jsx)("div",{className:"faucet-title",children:t["obtain-testnet-token"]}),Object(l.jsx)("div",{className:"mint-token",children:[{token:"BUSD"},{token:"SXP"},{token:"ETH"},{token:"LTC"},{token:"XRP"},{token:"BTCB"},{token:"ADA"},{token:"CAKE"},{token:"MATIC"},{token:"AAVE"},{token:"TUSD"},{token:"TRX"}].map(((a,o)=>Object(l.jsxs)("div",{className:"mint-token-box",children:[Object(l.jsx)("div",{className:"token-logo",children:Object(l.jsx)(c.a,{token:a.token,width:60,height:60})}),Object(l.jsx)("div",{className:"token-name",children:a.token}),Object(l.jsx)("div",{className:"token-button",children:Object(l.jsx)(s.a,{fontWeight:300,label:t.mint,width:88,height:31,onClick:()=>(async t=>{if(e.isConnected()){let c=[e.detail.chainId,e.detail.account,t],s=await i.a.request("mintTokenV3",c,{includeResponse:!0});s&&s.success?n.success("mint success"):n.error("mint fail")}else n.error("Please connect wallet")})(a.token)})})]},o)))}),Object(l.jsxs)("div",{className:"mint-bnb",children:[Object(l.jsx)("div",{children:t["go-to-min-bnb"]}),Object(l.jsx)("div",{className:"bnb-button",children:Object(l.jsx)("a",{rel:"norelerror",target:"_blank",href:"https://testnet.binance.org/faucet-smart",children:"BNB"})})]})]})})})))}}]);
//# sourceMappingURL=19.e8c330ae.chunk.js.map