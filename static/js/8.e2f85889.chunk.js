(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[8],{1201:function(e,t,n){"use strict";var a,s,c=n(25),i=n(141),o=n(78),r=n(7),l=n(56),d=n(5),b=(n(60),n(1285)),u=n(50),j=n(29),v=n(16),x=n(6),m=Object(u.a)(b.a)(a||(a=Object(l.a)(["\n  width : ","px;\n"])),(function(e){return e.width})),p=u.a.div(s||(s=Object(l.a)(["\n  width : ",";\n  height : ",";\n"])),(function(e){return/px$/.test(e.width)?e.width:"".concat(e.width,"px")}),(function(e){return/px$/.test(e.height)?e.height:"".concat(e.height,"px")}));t.a=function(e){var t=Object(d.useState)(Object(x.jsx)("span",{className:"loading-line"})),n=Object(r.a)(t,2),a=n[0],s=n[1],l=Object(d.useState)(!0),b=Object(r.a)(l,2),u=b[0],h=b[1],f=function(){var t=e.allowZero;return"object"!==Object(o.a)(e.value)&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===Math.abs(e.value)&&!0===t};return Object(d.useEffect)((function(){var t=e.allowZero,n=(e.wallet,e.closeShowLoadingEffectAfterLoaded),a=e.defaultValue,o=void 0===a?"--":a,r=Object(i.a)(e,["allowZero","wallet","closeShowLoadingEffectAfterLoaded","defaultValue"]);if(f())!t&&r.value&&/\d+\.0*[1-9]+/.test(r.value)&&0===+Object(v.bg)(r.value).toFixed(+r.decimalScale||2)&&(r.decimalScale=Object(j.d)(Math.abs(r.value))+2),r.value=Object(j.J)(r.value),r.value&&/\d+.9{6}/.test(r.value)&&(r.value=(+r.value).toFixed(5)),s(Object(x.jsx)(m,Object(c.a)(Object(c.a)({},r),{},{displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0})));else if(u){var l=e.width,d=e.height;s(Object(x.jsx)(p,{className:"loading-line",width:l,height:d})),n&&h(!1)}var b=window.setTimeout((function(){f()||s(o)}),6e4);return function(){clearTimeout(b)}}),[e.value,e.decimalScale,e.suffix]),a}},1535:function(e,t,n){"use strict";t.a=n.p+"static/media/staked.46571832.svg"},1761:function(e,t,n){},1841:function(e,t,n){"use strict";n.d(t,"a",(function(){return N}));var a,s,c=n(56),i=n(0),o=n.n(i),r=n(2),l=n(7),d=n(5),b=n(51),u=n(1201),j=n(168),v=n(472),x=n(474),m=n(471),p=n(1535),h=n(476),f=n(104),O=n.n(f),g=n.p+"static/media/close.61c9d399.svg",k=(n(2094),n(50)),y=n(6);function N(e){var t=e.lang,n=e.pool,a=e.wallet,s=Object(b.g)(),c=Object(d.useState)({}),i=Object(l.a)(c,2),f=i[0],k=i[1],N=Object(d.useState)(!1),w=Object(l.a)(N,2),S=w[0],_=w[1],X=Object(d.useState)(),z=Object(l.a)(X,2),E=z[0],L=z[1],F=Object(d.useState)(!0),I=Object(l.a)(F,2),q=I[0],V=I[1],C=function(){var e=Object(r.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k({}),e.next=3,n.getPoolInfo(a,n);case 3:t=e.sent,k(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=function(){var e=Object(r.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n||"v3"!==n.version&&"v3_lite"!==n.version){e.next=5;break}return e.next=3,n.getVenusEarned(a,n.address);case 3:t=e.sent,L(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(r.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getIsStaked(a,n);case 2:(t=e.sent)&&_(t.isStaked);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(e){e.target.src=h.default};Object(d.useEffect)((function(){C(),a.isConnected()&&(A(),Z())}),[n,a.detail.account]),Object(d.useEffect)((function(){var e=sessionStorage.getItem(n.address);null!==e&&e&&V(!1)}),[n]);var M="/pool/".concat(n.version||"v1","/").concat(n.chainId,"/").concat(n.type,"/").concat(n.address);return Object(y.jsxs)("div",{className:"card-box",children:[Object(y.jsxs)("div",{className:"v2_lite_open"===n.version?"card-list open-list":"card-list",onClick:function(){!function(e){"v2_lite_open"!==n.version&&s.push(e)}(M)},children:[Object(y.jsxs)("div",{className:O()("card-header",{v3:n.isAllV3}),children:[Object(y.jsxs)("div",{className:"pool-network-type",children:[Object(y.jsx)("div",{className:"network-logo",children:Object(y.jsx)("img",{alt:"",src:function(e){var t;return"56"===e||"97"===e?t=v.default:"137"===e?t=x.default:"1"===e&&(t=m.default),t}(n.chainId)})}),Object(y.jsxs)("div",{className:"pool-type-network-text",children:[Object(y.jsxs)("div",{className:"pool-type-text",children:[t[n.type]," ",t[n.zone]]}),Object(y.jsx)("div",{className:"pool-network-text",children:n.chain.toUpperCase()})]})]}),Object(y.jsxs)("div",{className:"base-token-logo",children:[n.isLp&&Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("div",{className:"lp-base-token-bg",children:[Object(y.jsx)("div",{className:"base-token-bg ".concat(n.bTokens[0].bTokenSymbol)}),Object(y.jsx)("span",{className:"lp-con",children:"+"}),Object(y.jsx)("div",{className:"base-token-bg ".concat(n.bTokens[1].bTokenSymbol)})]})}),!n.isLp&&"v3"!==n.version&&"v3_lite"!==n.version&&Object(y.jsx)(y.Fragment,{children:n.bTokens.map((function(e,t){return Object(y.jsx)("div",{className:"base-token-box-bg",children:Object(y.jsx)("div",{className:"base-token-bg ".concat(e.bTokenSymbol),children:"v2_lite_open"===n.version&&Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("img",{alt:"",onError:J,src:"https://raw.githubusercontent.com/deri-finance/deri-open-zone/main/img/".concat(e.bTokenSymbol,".png")})})})},t)}))}),("v3"===n.version||"v3_lite"===n.version)&&Object(y.jsx)(T,{bTokens:n.bTokens})]})]}),Object(y.jsxs)("div",{className:"card-content",children:[Object(y.jsx)("div",{className:"max-apy",children:"v2_lite_open"!==n.version&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("div",{className:"max-apy-title",children:"v2"===n.version||"v3_lite"===n.version||"v3"===n.version?t["max-apy"]:t.apy}),Object(y.jsx)("div",{className:"max-apy-num",children:Object(y.jsx)(u.a,{value:f.apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2})})]})}),Object(y.jsxs)("div",{className:"total-pool-liquidity",children:[Object(y.jsx)("div",{className:"total-liquidity-title",children:t["total-pool-liquidity"]}),Object(y.jsx)("div",{className:"total-liquidity-num",children:Object(y.jsx)(u.a,{value:f.liquidity,displayType:"text",thousandSeparator:!0,decimalScale:"lp"===n.type?7:0})})]}),Object(y.jsxs)("div",{className:"your-deri-epoch",children:[S&&Object(y.jsxs)("div",{className:"staked-box",children:[Object(y.jsx)("img",{src:p.a,alt:""}),t.staked]}),+E>0&&("v3"===n.version||"v3_lite"===n.version)&&Object(y.jsx)("span",{className:"xvs-collectable",children:Object(y.jsxs)("div",{className:"staked-box",children:[Object(y.jsx)(u.a,{width:"50px",value:E,displayType:"text",thousandSeparator:!0,decimalScale:2})," \xa0 XVS  ",t.collectable]})})]}),Object(y.jsx)("div",{className:"stake-button",children:Object(y.jsx)(j.a,{disabled:"v2_lite_open"===n.version,className:"button",outline:!0,label:"v2_lite_open"===n.version?t.operating:t.stake})})]})]}),"v3_lite"===n.version&&q&&Object(y.jsxs)("div",{className:"new-symbol",children:[Object(y.jsx)("div",{className:"new-symbol-text",children:"New Listing : Babydoge, X2Y2"}),Object(y.jsx)("div",{className:"close-symbol",children:Object(y.jsx)("img",{src:g,alt:"close",onClick:function(){return e=n.address,sessionStorage.setItem(e,!1),void V(!1);var e}})})]})]})}var w=k.a.div(a||(a=Object(c.a)(["\n  @-webkit-keyframes explode {\n    0% {\n        transform: translateX(0px);\n        -moz-transform : translateX(0px);\n    }\n    100% {\n        transform: translateX(100px);\n        -moz-transform : translateX(100px);\n    }\n  }\n\n  @keyframes explode {\n    0% {\n        transform: translateX(0px);\n        -moz-transform : translateX(0px);\n    }\n    100% {\n        transform: translateX(100px);\n        -moz-transform : translateX(100px);\n    }\n  }\n  .base-token{\n    margin-left: 0px!important;\n    z-index : -2;\n    visibility: hidden;\n    background-color: #111e34;\n    border : 1px solid #fff;\n  }\n  @media only screen and (max-width: 760px) {\n    .base-token{\n      display:none;\n    }\n  }\n  .base-token-box-bg.explode:hover .move  {\n    -webkit-animation : explode .4s .0s linear;\n    -moz-animation :  explode .4s .0s linear;\n    animation: explode .4s .0s linear;\n    // transform : translateX(100px)!important;\n    visibility: visible;    \n  }\n  \n  .base-token-box-bg.explode:hover .base-token {\n    z-index : 2!important;\n  } \n\n"]))),S=k.a.div(s||(s=Object(c.a)(["\n  position: absolute;\n  transform : ",";\n  width: 48px;\n  height: 48px;\n  display: inline-block;\n  border-radius: 50%;\n  .move {\n    transform : translateX(100px) ",";\n  }\n"])),(function(e){return"rotate(".concat(-e.rotate,"deg)")}),(function(e){return"rotate(".concat(e.rotate,"deg) !important")})),T=function(e){var t=e.bTokens,n=void 0===t?[]:t,a=360/n.length;return Object(y.jsxs)(w,{className:"v3-tokens",children:[Object(y.jsx)("div",{className:"tokens",children:n.filter((function(e,t){return t<3})).map((function(e,t){return Object(y.jsx)("div",{className:"base-token-box-bg",children:Object(y.jsx)("div",{className:"base-token-bg ".concat(e.bTokenSymbol)})},t)}))}),Object(y.jsxs)("div",{className:"base-token-box-bg explode",children:[Object(y.jsxs)("div",{className:"base-token-bg",children:[n.length-3," +"]}),n.map((function(e,t){var n=a*t;return Object(y.jsx)(S,{className:"base-token",rotate:n,width:"100",children:Object(y.jsx)("div",{width:"100",rotate:n,className:"base-token-bg move ".concat(e.bTokenSymbol)})},t)}))]})]})}},2094:function(e,t,n){}}]);
//# sourceMappingURL=8.e2f85889.chunk.js.map