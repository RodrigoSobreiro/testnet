(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[30],{1906:function(e,t,r){},2155:function(e,t,r){"use strict";r.r(t);var s=r(65),c=r(7),a=r(16),n=r(1),o=r.n(n),l=r(5),i=r(40),d=r(1655),j=r(30),u=(r(260),r(1594),r(1906),r(4));t.default=Object(i.b)("wallet","poolManager")(Object(i.c)((function(e){var t=e.lang,r=e.wallet,n=void 0===r?{}:r,i=e.poolManager,p=Object(l.useState)("amm"),b=Object(a.a)(p,2),O=b[0],f=(b[1],Object(l.useState)(!1)),h=Object(a.a)(f,2),m=h[0],x=(h[1],Object(l.useState)(t["deri-pool-title"])),v=Object(a.a)(x,2),N=v[0],g=v[1],k=Object(l.useState)([]),w=Object(a.a)(k,2),S=w[0],y=w[1],F=Object(l.useState)(!1),P=Object(a.a)(F,2),E=(P[0],P[1],Object(l.useState)([])),I=Object(a.a)(E,2),M=(I[0],I[1]),_=Object(l.useState)([]),J=Object(a.a)(_,2),U=(J[0],J[1]),V=function(){var e=Object(c.a)(o.a.mark((function e(){var t,r,a,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[].concat(Object(s.a)(i.ammPools),Object(s.a)(i.lpPools)),e.next=3,Promise.all(t.map(function(){var e=Object(c.a)(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=[t.chainId,t.address,n.detail.account],e.next=3,j.a.request("getUserStakeInfo",r);case 3:if(!e.sent.isStaked){e.next=8;break}return e.abrupt("return",t);case 8:return e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 3:r=(r=e.sent).filter((function(e){return e})),a=r.filter((function(e){return"lp"!==e.type})),l=r.filter((function(e){return"lp"===e.type})),M(a),U(l);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){n.isConnected()&&V()}),[n.detail,i,O]),Object(l.useEffect)((function(){g(m?t["open-pool-title"]:t["deri-pool-title"])}),[m]),Object(l.useEffect)((function(){i.load()}),[]),Object(l.useEffect)((function(){y(i.retiredPools)}),[i.pools]),Object(u.jsx)("div",{className:"pool-box",children:Object(u.jsx)("div",{className:"pool-info",children:Object(u.jsxs)("div",{className:"left",children:[Object(u.jsx)("div",{className:"left-header-info",children:Object(u.jsxs)("div",{className:"pool-title",children:[Object(u.jsx)("div",{className:"pool-title-text",children:N}),Object(u.jsxs)("div",{className:"pool-title-select-text",children:[!m&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"pool-test-des",children:t["pool-title-des-one"]}),Object(u.jsx)("div",{className:"pool-test-des",children:t["pool-title-des-two"]})]}),m&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"pool-test-des",children:t["open-pool-title-des-one"]}),Object(u.jsx)("div",{className:"pool-test-des",children:t["open-pool-title-des-two"]})]})]})]})}),Object(u.jsxs)("div",{className:"pool-card-claim-bg",children:[Object(u.jsx)("div",{className:"retired-hint",children:Object(u.jsxs)("div",{children:["Several V2 markets ( ",Object(u.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://deri.io/#/retired/trade/options",children:"Options"})," , ",Object(u.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://deri.io/#/retired/trade/futures",children:"Fut Main & Fut Inno-BUSD "})," pools) are no longer supported, please close position and remove your collaterals.",Object(u.jsx)("br",{})," For V1 and Premining markets, please visit ",Object(u.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://v2deri.io/#/retired",children:"here"}),"  to close position and remove your collaterals."]})}),Object(u.jsx)("div",{className:"pool-card",children:S.map((function(e,r){return Object(u.jsx)(d.a,{wallet:n,lang:t,pool:e},r)}))}),Object(u.jsx)("div",{className:!0})]})]})})})})))}}]);
//# sourceMappingURL=30.357ec3b1.chunk.js.map