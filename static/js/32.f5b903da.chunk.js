(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[32],{1982:function(e,t,r){},2348:function(e,t,r){"use strict";r.r(t);var s=r(48),a=r(2),c=r(14),n=r(1),o=r.n(n),l=r(6),i=r(46),d=r(1748),j=r(37),p=(r(295),r(1641),r(1982),r(5));t.default=Object(i.b)("wallet","poolManager")(Object(i.c)((function(e){var t=e.lang,r=e.wallet,n=void 0===r?{}:r,i=e.poolManager,u=Object(l.useState)("amm"),b=Object(c.a)(u,2),O=b[0],f=(b[1],Object(l.useState)(!1)),h=Object(c.a)(f,2),m=h[0],x=(h[1],Object(l.useState)(t["deri-pool-title"])),v=Object(c.a)(x,2),N=v[0],g=v[1],k=Object(l.useState)([]),w=Object(c.a)(k,2),S=w[0],y=w[1],F=Object(l.useState)(!1),P=Object(c.a)(F,2),E=(P[0],P[1],Object(l.useState)([])),I=Object(c.a)(E,2),M=(I[0],I[1]),_=Object(l.useState)([]),J=Object(c.a)(_,2),U=(J[0],J[1]),V=function(){var e=Object(a.a)(o.a.mark((function e(){var t,r,c,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[].concat(Object(s.a)(i.ammPools),Object(s.a)(i.lpPools)),e.next=3,Promise.all(t.map(function(){var e=Object(a.a)(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=[t.chainId,t.address,n.detail.account],e.next=3,j.a.request("getUserStakeInfo",r);case 3:if(!e.sent.isStaked){e.next=8;break}return e.abrupt("return",t);case 8:return e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 3:r=(r=e.sent).filter((function(e){return e})),c=r.filter((function(e){return"lp"!==e.type})),l=r.filter((function(e){return"lp"===e.type})),M(c),U(l);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){n.isConnected()&&V()}),[n.detail,i,O]),Object(l.useEffect)((function(){g(m?t["open-pool-title"]:t["deri-pool-title"])}),[m]),Object(l.useEffect)((function(){i.load()}),[]),Object(l.useEffect)((function(){y(i.retiredPools)}),[i.pools]),Object(p.jsx)("div",{className:"pool-box",children:Object(p.jsx)("div",{className:"pool-info",children:Object(p.jsxs)("div",{className:"left",children:[Object(p.jsx)("div",{className:"left-header-info",children:Object(p.jsxs)("div",{className:"pool-title",children:[Object(p.jsx)("div",{className:"pool-title-text",children:N}),Object(p.jsxs)("div",{className:"pool-title-select-text",children:[!m&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"pool-test-des",children:t["pool-title-des-one"]}),Object(p.jsx)("div",{className:"pool-test-des",children:t["pool-title-des-two"]})]}),m&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"pool-test-des",children:t["open-pool-title-des-one"]}),Object(p.jsx)("div",{className:"pool-test-des",children:t["open-pool-title-des-two"]})]})]})]})}),Object(p.jsxs)("div",{className:"pool-card-claim-bg",children:[Object(p.jsx)("div",{className:"retired-hint",children:Object(p.jsxs)("div",{children:["Several V2 markets ( ",Object(p.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://deri.io/#/retired/trade/options",children:"Options"})," , ",Object(p.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://deri.io/#/retired/trade/futures",children:"Fut Main & Fut Inno-BUSD "})," pools) are no longer supported, please close position and remove your collaterals.",Object(p.jsx)("br",{})," For V1 and Premining markets, please visit ",Object(p.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://v2app.deri.io/#/retired",children:"here"}),"  to close position and remove your collaterals."]})}),Object(p.jsx)("div",{className:"pool-card",children:S.map((function(e,r){return Object(p.jsx)(d.a,{wallet:n,lang:t,pool:e},r)}))}),Object(p.jsx)("div",{className:!0})]})]})})})})))}}]);
//# sourceMappingURL=32.f5b903da.chunk.js.map