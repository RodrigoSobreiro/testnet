(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[13],{1022:function(e,t,c){},1231:function(e,t,c){"use strict";c.r(t);var n,a=c(0),s=c.n(a),i=c(18),r=c(2),l=c(5),o=c(10),d=c(45),u=c(876),h=c(49),j=c(165),b=c(48),f=c(106),p=c.n(f),v=c(9),O=b.a.div(n||(n=Object(h.a)(["\ncursor:pointer;\nfont-weight: 600;\n.dropdown-menu{\n  display:none\n}\n.dropdown-menu.show{\n  margin-top:8px;\n  background: #203B60;\n  display:block;\n  border-radius:4px;\n  z-index:8;\n  position:relative;\n  .dropdown-item{\n    padding:0 24px;\n  }\n}\n.btn{\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 24px;\n  color:#FFFFFF;\n\n}\n.dropdown-item:hover{\n  color:#FFFFFF\n}\n"])));function m(e){var t=e.selectList,c=void 0===t?[]:t,n=e.onChange,a=Object(o.useState)(!1),s=Object(l.a)(a,2),i=s[0],r=s[1],d=Object(o.useState)(c[0].text),u=Object(l.a)(d,2),h=u[0],b=u[1],f=p()("dropdown-menu",{show:i});return Object(v.jsxs)(O,{children:[Object(v.jsxs)("div",{onClick:function(){r(!i)},className:"btn checked",children:[h,Object(v.jsx)("img",{src:j.default,alt:""})]}),Object(v.jsx)("div",{className:f,children:c.map((function(e,t){return Object(v.jsx)("div",{className:"dropdown-item",onClick:function(){!function(e){b(e.text),n(e.index),r(!1)}(e)},children:e.text},t)}))})]})}var x=c(856),k=c(857),g=c(209),y=c(330),N=c(328),w=c(948),C=(c(1022),c.p+"static/media/filter-close.80f134f0.svg");function S(e){var t=e.lang,c=(e.isShowFilter,e.checkedStaked),n=e.setCheckedStaked,a=e.setIsShowFilter,s=e.curTabPool,i=e.checkedPolygon,r=e.checkedETH,l=e.checkedOption,o=e.checkedFutureMain,d=e.checkedFutureInno,u=e.checkedBSC,h=e.setCheckedOption,j=e.setCheckedFutureMain,b=e.setCheckedFutureInno,f=e.setCheckedPolygon,p=e.setCheckedBSC,O=e.setCheckedETH,m=e.clearFilter;return Object(v.jsxs)("div",{className:"filter-modal",children:[Object(v.jsx)("div",{className:"close-filter-modal",children:Object(v.jsx)("span",{className:"close-icon",onClick:function(){a()},children:Object(v.jsx)("img",{alt:"",src:C})})}),Object(v.jsxs)("div",{className:"staked-only",children:[Object(v.jsx)("div",{className:"staked-only-text",children:t["staked-only"]}),Object(v.jsx)("div",{children:Object(v.jsx)(x.a,{className:"l-toggle",checked:c,onClick:function(e){n(e)}})})]}),Object(v.jsxs)("div",{className:"select-pool-type-network",children:[Object(v.jsxs)("div",{className:"pool-type",children:[Object(v.jsx)("div",{className:"type-cols",children:t.type}),Object(v.jsxs)("div",{className:"type-cols",children:[Object(v.jsx)("div",{className:"type-title",children:t.options}),Object(v.jsx)("div",{children:Object(v.jsx)(k.a,{checked:l,className:"l-checkbox",onChange:function(e){h(e)}})})]}),Object(v.jsxs)("div",{className:"type-cols",children:[Object(v.jsx)("div",{className:"type-title",children:t["future-main"]}),Object(v.jsx)("div",{children:Object(v.jsx)(k.a,{checked:o,className:"l-checkbox",onChange:function(e){j(e)}})})]}),Object(v.jsxs)("div",{className:"type-cols",children:[Object(v.jsx)("div",{className:"type-title",children:t["future-inno"]}),Object(v.jsx)("div",{children:Object(v.jsx)(k.a,{checked:d,className:"l-checkbox",onChange:function(e){b(e)}})})]})]}),Object(v.jsxs)("div",{className:"network",children:[Object(v.jsx)("div",{className:"type-cols",children:t.network}),Object(v.jsxs)("div",{className:"type-cols",children:[Object(v.jsxs)("div",{className:"type-title",children:[Object(v.jsx)("img",{alt:"",src:g.default})," BSC"]}),Object(v.jsx)("div",{children:Object(v.jsx)(k.a,{checked:u,className:"l-checkbox",onChange:function(e){p(e)}})})]}),"deri"!==s&&Object(v.jsxs)("div",{className:"type-cols",children:[Object(v.jsxs)("div",{className:"type-title",children:[Object(v.jsx)("img",{alt:"",src:y.default})," Polygon"]}),Object(v.jsx)("div",{children:Object(v.jsx)(k.a,{checked:i,className:"l-checkbox",onChange:function(e){f(e)}})})]}),"deri"===s&&Object(v.jsxs)("div",{className:"type-cols",children:[Object(v.jsxs)("div",{className:"type-title",children:[Object(v.jsx)("img",{alt:"",src:N.default})," Ethereum"]}),Object(v.jsx)("div",{children:Object(v.jsx)(k.a,{checked:r,className:"l-checkbox",onChange:function(e){O(e)}})})]})]})]}),Object(v.jsx)("div",{className:"select-footer",children:Object(v.jsx)("div",{className:"clear-all-filter",onClick:function(){m()},children:t["clear-all-filter"]})})]})}var F=c(32),I=c.p+"static/media/filter.c289b063.svg",E=(c(949),c(38));t.default=Object(d.b)("wallet","poolManager")(Object(d.c)((function(e){var t=e.lang,c=e.wallet,n=void 0===c?{}:c,a=e.poolManager,d=Object(o.useState)("amm"),h=Object(l.a)(d,2),b=h[0],f=h[1],p=Object(o.useState)(!1),O=Object(l.a)(p,2),C=O[0],T=O[1],P=Object(o.useState)(t["deri-pool-title"]),_=Object(l.a)(P,2),M=_[0],D=_[1],B=Object(o.useState)([]),X=Object(l.a)(B,2),L=X[0],R=X[1],q=Object(o.useState)(!1),Y=Object(l.a)(q,2),H=Y[0],U=Y[1],z=Object(o.useState)(!1),J=Object(l.a)(z,2),W=J[0],$=J[1],A=Object(o.useState)(!1),G=Object(l.a)(A,2),K=G[0],Q=G[1],V=Object(o.useState)(!1),Z=Object(l.a)(V,2),ee=Z[0],te=Z[1],ce=Object(o.useState)(!1),ne=Object(l.a)(ce,2),ae=ne[0],se=ne[1],ie=Object(o.useState)(!1),re=Object(l.a)(ie,2),le=re[0],oe=re[1],de=Object(o.useState)(!1),ue=Object(l.a)(de,2),he=ue[0],je=ue[1],be=Object(o.useState)(!1),fe=Object(l.a)(be,2),pe=fe[0],ve=fe[1],Oe=Object(o.useState)([]),me=Object(l.a)(Oe,2),xe=me[0],ke=me[1],ge=Object(o.useState)([]),ye=Object(l.a)(ge,2),Ne=ye[0],we=ye[1],Ce=[{text:t["deri-pool-title"],index:"official"},{text:t["open-pool-title"],index:"open"}],Se=function(e){"official"===e?(R(a.ammPools),T(!1)):"open"===e&&(R([]),Ee(),T(!0))},Fe=function(){var e=Object(r.a)(s.a.mark((function e(){var t,c,l,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[].concat(Object(i.a)(a.ammPools),Object(i.a)(a.lpPools)),e.next=3,Promise.all(t.map(function(){var e=Object(r.a)(s.a.mark((function e(t){var c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=[t.chainId,t.address,n.detail.account],e.next=3,F.a.request("getUserStakeInfo",c);case 3:if(!e.sent.isStaked){e.next=8;break}return e.abrupt("return",t);case 8:return e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 3:c=(c=e.sent).filter((function(e){return e})),l=c.filter((function(e){return"lp"!==e.type})),o=c.filter((function(e){return"lp"===e.type})),ke(l),we(o);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ie=function(){U(!1),Q(!1),te(!1),oe(!1),se(!1),je(!1)};Object(o.useEffect)((function(){n.isConnected()&&Fe()}),[n.detail,a,b]),Object(o.useEffect)((function(){var e=[],t="amm"===b?a.ammPools:a.lpPools;if(H){var c=t.filter((function(e){return"option"===e.type}));e=[].concat(Object(i.a)(e),Object(i.a)(c))}if(K){var n=t.filter((function(e){return("v2"===e.version||"v3"===e.version)&&"option"!==e.type}));e=[].concat(Object(i.a)(e),Object(i.a)(n))}if(ee){var s=t.filter((function(e){return"v2_lite"===e.version||"v3_lite"===e.version}));e=[].concat(Object(i.a)(e),Object(i.a)(s))}if(ae){if(e=[],H){var r=t.filter((function(e){return(56===+e.chainId||97===+e.chainId)&&"option"===e.type}));e=[].concat(Object(i.a)(e),Object(i.a)(r))}if(K){var l=t.filter((function(e){return(56===+e.chainId||97===+e.chainId)&&("v2"===e.version||"v3"===e.version)&&"option"!==e.type}));e=[].concat(Object(i.a)(e),Object(i.a)(l))}if(ee){var o=t.filter((function(e){return(56===+e.chainId||97===+e.chainId)&&("v2_lite"===e.version||"v3_lite"===e.version)}));e=[].concat(Object(i.a)(e),Object(i.a)(o))}if(!H&&!K&&!ee){var d=t.filter((function(e){return 56===+e.chainId||97===+e.chainId}));e=[].concat(Object(i.a)(e),Object(i.a)(d))}}if(le){if(e=[],H){var u=t.filter((function(e){return 137===+e.chainId&&"option"===e.type}));e=[].concat(Object(i.a)(e),Object(i.a)(u))}if(K){var h=t.filter((function(e){return 137===+e.chainId&&("v2"===e.version||"v3"===e.version)&&"option"!==e.type}));e=[].concat(Object(i.a)(e),Object(i.a)(h))}if(ee){var j=t.filter((function(e){return 137===+e.chainId&&("v2_lite"===e.version||"v3_lite"===e.version)}));e=[].concat(Object(i.a)(e),Object(i.a)(j))}if(!H&&!K&&!ee){var f=t.filter((function(e){return 137===+e.chainId}));e=[].concat(Object(i.a)(e),Object(i.a)(f))}}if(ae&&le){e=[];var p=t.filter((function(e){return 137===+e.chainId||56===+e.chainId}));e=[].concat(Object(i.a)(e),Object(i.a)(p))}if(he){var v=t.filter((function(e){return 1===+e.chainId}));e=[].concat(Object(i.a)(e),Object(i.a)(v))}H||K||ee||ae||le||he||(e=t),R(e)}),[H,K,ee,ae,le,he]);var Ee=function(){var e=Object(r.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.loadOpen();case 2:R(a.openPools);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){D(C?t["open-pool-title"]:t["deri-pool-title"])}),[C]),Object(o.useEffect)((function(){a.load()}),[]),Object(o.useEffect)((function(){"amm"===b?C||(R([]),R(pe?xe:a.ammPools)):"deri"===b&&(R([]),R(pe?Ne:a.lpPools))}),[b,pe]),Object(o.useEffect)((function(){R(a.ammPools)}),[a.pools]),Object(v.jsx)("div",{className:"pool-box",children:Object(v.jsxs)("div",{className:"pool-info",children:[Object(v.jsxs)("div",{className:"left",children:[Object(v.jsx)("div",{className:"left-header-info",children:Object(v.jsxs)("div",{className:"pool-title",children:[Object(v.jsx)("div",{className:"pool-title-text",children:M}),Object(v.jsxs)("div",{className:"pool-title-select-text",children:[!C&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:"pool-test-des",children:t["pool-title-des-one"]}),Object(v.jsx)("div",{className:"pool-test-des",children:t["pool-title-des-two"]})]}),C&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:"pool-test-des",children:t["open-pool-title-des-one"]}),Object(v.jsx)("div",{className:"pool-test-des",children:t["open-pool-title-des-two"]})]})]}),Object(v.jsx)("div",{className:"select-pool-ves",children:Object(v.jsx)(m,{selectList:Ce,onChange:Se})}),Object(v.jsx)("div",{className:"simple-select-ves",children:Object(v.jsx)("img",{alt:"",src:j.default})})]})}),Object(v.jsxs)("div",{className:"pool-card-claim-bg",children:[!C&&Object(v.jsx)(u.a,{lang:t,wallet:n}),!C&&Object(v.jsx)("div",{className:"pool-tab",children:Object(v.jsxs)("div",{className:"pool-tab-info",children:[Object(v.jsxs)("div",{className:"tab-mining",children:[Object(v.jsx)("div",{className:"amm"===b?"pool-active":"pool-unactive",onClick:function(){f("amm")},children:t["amm-liquidity-mining"]}),Object(v.jsx)("div",{className:"deri"===b?"pool-active":"pool-unactive",onClick:function(){f("deri")},children:t["deri-liquidity-mining"]})]}),Object(v.jsxs)("div",{className:"simple-tab-mining",children:[Object(v.jsx)("div",{className:"amm"===b?"pool-active":"pool-unactive",onClick:function(){f("amm")},children:t.amm}),Object(v.jsx)("div",{className:"deri"===b?"pool-active":"pool-unactive",onClick:function(){f("deri")},children:t["type-deri"]})]}),Object(v.jsxs)("div",{className:"filter",children:[Object(v.jsx)("img",{alt:"",src:I,className:"filter-img",onClick:function(){$(!W)}}),W&&Object(v.jsx)(S,{curTabPool:b,lang:t,isShowFilter:W,checkedStaked:pe,setCheckedStaked:ve,setIsShowFilter:$,setCheckedOption:U,setCheckedFutureMain:Q,setCheckedFutureInno:te,setCheckedPolygon:oe,setCheckedBSC:se,setCheckedETH:je,clearFilter:Ie,checkedPolygon:le,checkedETH:he,checkedOption:H,checkedFutureMain:K,checkedFutureInno:ee,checkedBSC:ae})]})]})}),Object(v.jsx)("div",{className:"pool-card",children:L.map((function(e,c){return Object(v.jsx)(w.a,{wallet:n,lang:t,pool:e},c)}))}),Object(v.jsx)("div",{className:!0})]})]}),Object(v.jsx)("div",{className:"right",children:Object(v.jsxs)("div",{className:"right-info",children:[Object(v.jsxs)("div",{className:"select-pool-ves-staked",children:[Object(v.jsx)("div",{className:"select-pool-ves",children:Object(v.jsx)(m,{selectList:Ce,onChange:Se})}),!C&&Object(v.jsxs)("div",{className:"staked-only",children:[Object(v.jsx)("div",{className:"staked-only-text",children:t["staked-only"]}),Object(v.jsx)("div",{children:Object(v.jsx)(x.a,{className:"l-toggle",checked:pe,onClick:function(e){ve(e)}})})]})]}),!C&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{className:"select-pool-type-network",children:[Object(v.jsxs)("div",{className:"pool-type",children:[Object(v.jsx)("div",{className:"type-cols",children:t.type}),Object(v.jsxs)("div",{className:"type-cols",children:[Object(v.jsx)("div",{className:"type-title",children:t.options}),Object(v.jsx)("div",{children:Object(v.jsx)(k.a,{checked:H,className:"l-checkbox",onChange:function(e){U(e)}})})]}),Object(v.jsxs)("div",{className:"type-cols",children:[Object(v.jsx)("div",{className:"type-title",children:t["future-main"]}),Object(v.jsx)("div",{children:Object(v.jsx)(k.a,{checked:K,className:"l-checkbox",onChange:function(e){Q(e)}})})]}),Object(v.jsxs)("div",{className:"type-cols",children:[Object(v.jsx)("div",{className:"type-title",children:t["future-inno"]}),Object(v.jsx)("div",{children:Object(v.jsx)(k.a,{checked:ee,className:"l-checkbox",onChange:function(e){te(e)}})})]})]}),Object(v.jsxs)("div",{className:"network",children:[Object(v.jsx)("div",{className:"type-cols",children:t.network}),Object(v.jsxs)("div",{className:"type-cols",children:[Object(v.jsxs)("div",{className:"type-title",children:[" ",Object(v.jsx)("img",{alt:"",src:g.default})," BSC"]}),Object(v.jsx)("div",{children:Object(v.jsx)(k.a,{checked:ae,className:"l-checkbox",onChange:function(e){se(e)}})})]}),"deri"!==b&&Object(v.jsxs)("div",{className:"type-cols",children:[Object(v.jsxs)("div",{className:"type-title",children:[" ",Object(v.jsx)("img",{alt:"",src:y.default})," Polygon"]}),Object(v.jsx)("div",{children:Object(v.jsx)(k.a,{checked:le,className:"l-checkbox",onChange:function(e){oe(e)}})})]}),"deri"===b&&Object(v.jsxs)("div",{className:"type-cols",children:[Object(v.jsxs)("div",{className:"type-title",children:[Object(v.jsx)("img",{alt:"",src:N.default})," Ethereum"]}),Object(v.jsx)("div",{children:Object(v.jsx)(k.a,{checked:he,className:"l-checkbox",onChange:function(e){je(e)}})})]})]})]}),Object(v.jsxs)("div",{className:"select-footer",children:[Object(v.jsx)("div",{className:"clear-all-filter",onClick:Ie,children:t["clear-all-filter"]}),Object(v.jsx)("div",{className:"deri-logo",children:Object(v.jsx)(E.a,{token:"pool-deri-logo",width:"72",height:"84"})})]})]})]})})]})})})))},845:function(e,t,c){"use strict";c.d(t,"a",(function(){return l}));var n,a=c(49),s=c(48),i=(c(10),c(9)),r=s.a.div(n||(n=Object(a.a)(["\nwidth:","%;\nmax-width:100%;\nheight:10px;\nbackground-color: #5577FD;\n"])),(function(e){return e.width}));function l(e){var t=e.startTimestamp,c=e.nowTimestamp,n=e.endTimestamp,a=parseInt((c-t)/(n-t)*100);return Object(i.jsx)("div",{className:"time-slider",children:Object(i.jsx)(r,{width:a})})}},856:function(e,t,c){"use strict";c.d(t,"a",(function(){return i}));var n=c(878),a=c.n(n),s=(c(882),c(883),c(9));function i(e){var t=e.label,c=e.className,n=e.checked,i=e.onClick,r=function(e){i&&i(!n)};return Object(s.jsxs)("div",{className:"l-toggle",children:[Object(s.jsx)("span",{className:"label-text",children:t}),Object(s.jsx)(a.a,{onClick:r,checked:n,className:c,onChange:r,icons:!1})]})}},857:function(e,t,c){"use strict";var n,a,s,i,r=c(20),l=c(5),o=c(107),d=c(49),u=c(10),h=c(48),j=c(106),b=c.n(j),f=c(9),p=h.a.div(n||(n=Object(d.a)(["\n  display: inline-block;\n  vertical-align: middle;\n"]))),v=h.a.svg(a||(a=Object(d.a)(["\n  fill: none;\n  stroke: white;\n  stroke-width: 2px;\n"]))),O=h.a.input.attrs({type:"checkbox"})(s||(s=Object(d.a)(["\n  border: 0;\n  clip: rect(0 0 0 0);\n  clippath: inset(50%);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n"]))),m=h.a.div(i||(i=Object(d.a)(["\n  background: ",";\n  border: 2px solid #5577FD;\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  border-radius: 4px;\n  box-sizing: border-box;\n  border-radius: 4px;\n  cursor : pointer;\n\n  ",":focus + & {\n    box-shadow: 0 0 0 3px pink;\n  }\n\n  "," {\n    visibility: ",";\n    display: flex;\n  }\n"])),(function(e){return e.checked?"#5577FD":"none"}),O,v,(function(e){return e.checked?"visible":"hidden"}));t.a=function(e){var t=e.className,c=e.onChange,n=e.checked,a=Object(o.a)(e,["className","onChange","checked"]),s=Object(u.useState)(n),i=Object(l.a)(s,2),d=i[0],h=i[1];Object(u.useEffect)((function(){h(n)}),[n]);var j=b()("c-checkbox",{checked:d});return Object(f.jsxs)(p,{className:t,children:[Object(f.jsx)(O,Object(r.a)(Object(r.a)({checked:d},a),{},{onChange:c})),Object(f.jsx)(m,{checked:d,className:j,onClick:function(){var e=!d;h(e),c&&c(e)},children:Object(f.jsx)(v,{className:"icon",viewBox:"0 0 24 24",children:Object(f.jsx)("polyline",{points:"20 6 9 17 4 12"})})})]})}},876:function(e,t,c){"use strict";c.d(t,"a",(function(){return p}));var n=c(0),a=c.n(n),s=c(2),i=c(5),r=c(10),l=c(208),o=c(845),d=c(329),u=c(164),h=c(792),j=c(32),b=c(29),f=(c(877),c(9));function p(e){var t=e.lang,c=e.poolShow,n=void 0===c||c,p=e.wallet,v=void 0===p?{}:p,O=Object(r.useState)(""),m=Object(i.a)(O,2),x=m[0],k=m[1],g=Object(r.useState)(0),y=Object(i.a)(g,2),N=y[0],w=y[1],C=Object(u.c)(),S=Object(r.useState)(0),F=Object(i.a)(S,2),I=F[0],E=F[1],T=Object(r.useState)(0),P=Object(i.a)(T,2),_=P[0],M=P[1],D=Object(r.useState)({}),B=Object(i.a)(D,2),X=B[0],L=B[1],R=Object(r.useState)(!1),q=Object(i.a)(R,2),Y=q[0],H=q[1],U=Object(r.useState)(""),z=Object(i.a)(U,2),J=z[0],W=z[1],$=Object(d.a)(X.chainId);Object(r.useEffect)((function(){var e;return e=window.setInterval((function(){var e=28800,c=parseInt(Date.now()/1e3),n=parseInt(c/e)*e,a=n+e-c,s=parseInt(a/3600),i=parseInt(a%3600/60),r=parseInt(a%60);w(n),E(n+e),M(c),k("".concat(s," ").concat(t.h," ").concat(i," ").concat(t.m," ").concat(r," ").concat(t.s))}),1e3),function(){e&&clearInterval(e)}}),[]);var A=function(){var e=Object(s.a)(a.a.mark((function e(){var t,c,n,s,i,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!v.isConnected()){e.next=10;break}return e.next=3,j.a.request("getUserInfoAll",[v.detail.account]);case 3:t=e.sent,c=(+t.total).toFixed(2),n=t.valid?(+t.amount).toFixed(2):0,s=t.lp,i=(+t.trade).toFixed(2),r=t.chainId,L({claimed:c,unclaimed:n,harvestDeriLp:s,harvestDeriTrade:i,chainId:r});case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==$.name){e.next=3;break}return C.error("".concat(t["wrong-network"])),e.abrupt("return");case 3:if(Object(b.e)(v.detail.chainId,X.chainId)){e.next=6;break}return C.error("".concat(t["your-deri-is-on"]," ").concat($.name," ").concat(t["connect-to"]," ").concat($.name," ").concat(t["to-claim"])),e.abrupt("return");case 6:if(0!==+X.unclaimed){e.next=9;break}return C.error(t["no-deri-to-claim-yet"]),e.abrupt("return");case 9:if(!(parseInt(Date.now()/1e3)%28800<1800)){e.next=13;break}return C.error(t["claiming-DERI-is-disabled-during-first-30-minutes-of-each-epoch"]),e.abrupt("return");case 13:return e.next=15,j.a.request("mintDToken",[v.detail.chainId,v.detail.account],{includeResponse:!0});case 15:if(!e.sent.success){e.next=20;break}return e.abrupt("return",!0);case 20:return C.error(t["claim-failed"]),e.abrupt("return",!1);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!v.isConnected()){e.next=7;break}return e.next=3,G();case 3:e.sent&&H(!0),e.next=17;break;case 7:return e.prev=7,e.next=10,v.connect();case 10:return t=e.sent,e.abrupt("return",!!t);case 14:return e.prev=14,e.t0=e.catch(7),e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e,null,[[7,14]])})));return function(){return e.apply(this,arguments)}}(),Q=function(e){var c;switch(e){case 1:c=t.jan;break;case 2:c=t.feb;break;case 3:c=t.mar;break;case 4:c=t.apr;break;case 5:c=t.may;break;case 6:c=t.jun;break;case 7:c=t.jul;break;case 8:c=t.aug;break;case 9:c=t.sep;break;case 10:c=t.oct;break;case 11:c=t.nov;break;case 12:c=t.dec}return c},V=function(){var e=Object(s.a)(a.a.mark((function e(){var t,c,n,s,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!v.isConnected()){e.next=5;break}return e.next=3,j.a.request("getUserFirstClaimInfo",[v.detail.account]);case 3:(t=e.sent).first_timestamp&&(c=new Date(1e3*t.first_timestamp),n=c.getFullYear(),s=c.getMonth()+1,s=Q(s),i=c.getDate(),W("".concat(s," ").concat(i,", ").concat(n)));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){var e=window.setInterval(A,18e4);return A(),V(),function(){return clearInterval(e)}}),[v.detail.account]),Object(f.jsx)("div",{className:"mining-claim",children:Object(f.jsxs)("div",{className:"mining-claim-info",children:[Object(f.jsxs)("div",{className:"deri-num-slider",children:[Object(f.jsxs)("div",{className:"deri-claim-time",children:[t["current-epoch-remaining-time"]," : ",x]}),X.harvestDeriLp>0&&Object(f.jsxs)("div",{className:"deri-claim-text",children:[t["your-harvest-in-current"]," ",Object(f.jsx)("span",{className:"deri-num",children:Object(f.jsx)(h.a,{value:X.harvestDeriLp,decimalScale:2,displayType:"text",di:!0,thousandSeparator:!0})}),"   $DERI."]}),n&&Object(f.jsxs)("div",{className:"deri-claim-text",children:["You have ",Object(f.jsx)("span",{className:"deri-num",children:Object(f.jsx)(h.a,{value:Y?0:X.unclaimed,displayType:"text",thousandSeparator:!0})}),"  unclaimed $DERI across all staked pools. You\u2019ve earned a total of ",Object(f.jsx)(h.a,{value:Y?+X.claimed+ +X.unclaimed:X.claimed,displayType:"text",thousandSeparator:!0})," Deri token",J&&Object(f.jsxs)("span",{children:[" since ",J,". Woohoo!"]})]}),Object(f.jsx)("div",{className:"deri-claim-slider",children:Object(f.jsx)(o.a,{startTimestamp:N,nowTimestamp:_,endTimestamp:I})})]}),n&&Object(f.jsx)("div",{className:"cliam-button",children:Object(f.jsx)(l.a,{fontWeight:"bold",label:t["claim-all"],onClick:K})})]})})}},877:function(e,t,c){},878:function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e},a=function(){function e(e,t){for(var c=0;c<t.length;c++){var n=t[c];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,c,n){return c&&e(t.prototype,c),n&&e(t,n),t}}(),s=c(10),i=h(s),r=h(c(106)),l=h(c(13)),o=h(c(879)),d=h(c(880)),u=c(881);function h(e){return e&&e.__esModule?e:{default:e}}var j=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var c=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return c.handleClick=c.handleClick.bind(c),c.handleTouchStart=c.handleTouchStart.bind(c),c.handleTouchMove=c.handleTouchMove.bind(c),c.handleTouchEnd=c.handleTouchEnd.bind(c),c.handleFocus=c.handleFocus.bind(c),c.handleBlur=c.handleBlur.bind(c),c.previouslyChecked=!(!e.checked&&!e.defaultChecked),c.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},c}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){if(!this.props.disabled){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var c=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:c})}}},{key:"handleTouchStart",value:function(e){this.props.disabled||(this.startX=(0,u.pointerCoord)(e).x,this.activated=!0)}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,u.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var c=(0,u.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>c?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<c&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var c=this.props.icons;return c?void 0===c[e]?t.defaultProps.icons[e]:c[e]:null}},{key:"render",value:function(){var e=this,t=this.props,c=t.className,a=(t.icons,function(e,t){var c={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(c[n]=e[n]);return c}(t,["className","icons"])),s=(0,r.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},c);return i.default.createElement("div",{className:s,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},i.default.createElement("div",{className:"react-toggle-track"},i.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),i.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),i.default.createElement("div",{className:"react-toggle-thumb"}),i.default.createElement("input",n({},a,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(s.PureComponent);t.default=j,j.displayName="Toggle",j.defaultProps={icons:{checked:i.default.createElement(o.default,null),unchecked:i.default.createElement(d.default,null)}},j.propTypes={checked:l.default.bool,disabled:l.default.bool,defaultChecked:l.default.bool,onChange:l.default.func,onFocus:l.default.func,onBlur:l.default.func,className:l.default.string,name:l.default.string,value:l.default.string,id:l.default.string,"aria-labelledby":l.default.string,"aria-label":l.default.string,icons:l.default.oneOfType([l.default.bool,l.default.shape({checked:l.default.node,unchecked:l.default.node})])}},879:function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=c(10),s=(n=a)&&n.__esModule?n:{default:n};t.default=function(){return s.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},s.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},880:function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=c(10),s=(n=a)&&n.__esModule?n:{default:n};t.default=function(){return s.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},s.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},881:function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var c=t[0];return{x:c.clientX,y:c.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},882:function(e,t,c){},883:function(e,t,c){}}]);
//# sourceMappingURL=13.739a90f5.chunk.js.map