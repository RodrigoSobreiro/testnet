(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[6],{1229:function(e,t,a){"use strict";var s,c,i=a(72),r=a(192),n=a(56),l=a(14),d=a(62),o=a(6),j=(a(68),a(1280)),b=a(51),u=a(20),h=a(16),m=a(5),x=["allowZero","wallet","closeShowLoadingEffectAfterLoaded","defaultValue"],O=Object(b.a)(j.a)(s||(s=Object(d.a)(["\n  width : ","px;\n"])),(function(e){return e.width})),v=b.a.div(c||(c=Object(d.a)(["\n  width : ",";\n  height : ",";\n"])),(function(e){return/px$/.test(e.width)?e.width:"".concat(e.width,"px")}),(function(e){return/px$/.test(e.height)?e.height:"".concat(e.height,"px")}));t.a=function(e){var t=Object(o.useState)(Object(m.jsx)("span",{className:"loading-line"})),a=Object(l.a)(t,2),s=a[0],c=a[1],d=Object(o.useState)(!0),j=Object(l.a)(d,2),b=j[0],p=j[1],f=function(){var t=e.allowZero;return"object"!==Object(n.a)(e.value)&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===Math.abs(e.value)&&!0===t},N=function(e){return e&&e.replace(/\.$/,"")};return Object(o.useEffect)((function(){var t=e.allowZero,a=(e.wallet,e.closeShowLoadingEffectAfterLoaded),s=e.defaultValue,n=void 0===s?"--":s,l=Object(r.a)(e,x);if(f())l.decimalScale>0&&l.value&&/\d+\.0*[1-9]+/.test(l.value)&&0===+Object(h.bg)(l.value).toFixed(+l.decimalScale||2)&&(l.decimalScale=Object(u.d)(Math.abs(l.value))+2),(-1===l.decimalScale||0===+l.value&&t)&&delete l.decimalScale,l.value=Object(u.J)(l.value),l.value&&/\d+.9{6}/.test(l.value)&&(l.value=(+l.value).toFixed(5)),c(Object(m.jsx)(O,Object(i.a)(Object(i.a)({},l),{},{renderText:N,displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0})));else if(b){var d=e.width,o=e.height;c(Object(m.jsx)(v,{className:"loading-line",width:d,height:o})),a&&p(!1)}var j=window.setTimeout((function(){f()||c(n)}),6e4);return function(){clearTimeout(j)}}),[e.value,e.decimalScale,e.suffix]),s}},1237:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var s,c=a(62),i=a(51),r=a(1313),n=a.n(r),l=a(145),d=a(20),o=a(1287),j=a(5),b=i.a.div(s||(s=Object(c.a)(["\n  display:",";\n  .text {\n    border-bottom : 1px dashed #93A1B8;\n    width : max-content;\n    cursor : pointer;\n    display:","\n  }\n  \n  .__react_component_tooltip.tooltip.show {\n    font-weight : "," \n  }\n"])),(function(e){return e.block}),(function(e){return e.block}),(function(e){return e.isWin?400:600}));function u(e){var t=e.text,a=e.id,s=void 0===a?String((new Date).getTime())+Math.random():a,c=e.tip,i=e.multiline,r=e.html,u=e.className,h=e.element,m=void 0===h?"":h,x=e.block,O=void 0===x?"block":x,v=e.width,p=void 0===v?"auto":v,f=e.children,N=e.tiggerEvent;return Object(j.jsxs)(b,{className:u,block:O,isWin:o.isWindows,children:[Object(j.jsx)("div",{className:"text","data-for":s,"data-tip":r?n.a.renderToString(m):c,"data-event":Object(d.y)()?"click":N,"data-html":r,children:t||f}),c&&Object(j.jsx)(l.a,{id:s,width:p,padding:"12",place:"bottom",overridePosition:function(e,t,a,s,c,i,r,n){var l=a.getBoundingClientRect(),d=s.getBoundingClientRect(),o=l.x,j=l.y,b=l.height,u=l.width;e.left,e.top;return o+d.width/2>document.documentElement.clientWidth?o-=Math.abs(u-d.width):o-(d.width-u)/2<0?o-=u:o-=(d.width-u)/2,j+b+d.height>=document.documentElement.clientHeight?j=j+b-d.height:j+=b,o<0&&(o=0),j<0&&(j=0),{top:j,left:o}},html:r,borderRadius:8,multiline:i})]})}},1314:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var s,c=a(14),i=a(62),r=a(51),n=a(6),l=a(28),d=a(5),o=r.a.div(s||(s=Object(i.a)(["\n    cursor: pointer;\n    width:","px;\n    height:","px;\n    display:flex;\n    .tab-left.inactive{\n      border-radius:0px 0px 4px 0px;\n    }\n    .tab-right.inactive{\n      border-radius:0px 0px 0px 4px;\n    }\n    .tab-left.active{\n      border-radius:0px 4px 0px 0px;\n      ",";\n    }\n    .tab-right.active{\n      border-radius:4px 0px 0px 0px;\n      ",";\n    }\n    .inactive,.active{\n      width:50%;\n      box-sizing: content-box;\n      font-size:","px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      img{\n        margin-right:","px\n      }\n    }\n    .inactive{\n      background:",";\n      ","\n    }\n    .active {\n      color: ",";\n      background : ",";\n      ",";\n    }\n    .icon-tab{\n      margin-right:20px;\n      width:25px;\n      height:25px;\n    }\n  "])),(function(e){return e.width}),(function(e){return e.height}),(function(e){return e.borderR}),(function(e){return e.borderL}),(function(e){return e.size}),(function(e){return e.iconMarginRight}),(function(e){return e.inactiveBgColor}),(function(e){return e.borderB}),(function(e){return e.activeFontColor}),(function(e){return e.activeBgColor}),(function(e){return e.borderT}));function j(e){var t=e.tabSet,a=e.inactiveBgColor,s=e.iconMarginRight,i=e.activeBgColor,r=(e.icon,e.className),j=e.width,b=void 0===j?238:j,u=e.height,h=void 0===u?47:u,m=e.size,x=void 0===m?16:m,O=e.borderTop,v=void 0!==O&&O,p=e.borderBottom,f=void 0!==p&&p,N=e.divider,g=void 0!==N&&N,w=e.activeIndex,S=void 0===w?0:w,C=Object.keys(t),k=Object(n.useState)(C[S]),y=Object(c.a)(k,2),Q=y[0],D=y[1],E=Object(n.useState)(),P=Object(c.a)(E,2),T=P[0],A=P[1],R=Object(n.useState)(),I=Object(c.a)(R,2),L=I[0],M=I[1],B=Object(n.useState)(),F=Object(c.a)(B,2),U=F[0],q=F[1],K=Object(n.useState)(),W=Object(c.a)(K,2),$=W[0],z=W[1],J=Object(n.useState)(),_=Object(c.a)(J,2),Z=_[0],H=_[1],Y=Object(n.useState)(),V=Object(c.a)(Y,2),G=V[0],X=V[1];return Object(n.useEffect)((function(){var e=Object.keys(t);D(e[S])}),[t,S]),Object(n.useEffect)((function(){var e=Object.keys(t),a=Q||e[S];if(t[a]){A(t[a].style);var s=v?"border-top:1px solid ".concat(t[a].borderColor):"border-top:0",c=f?"border-bottom:1px solid ".concat(t[a].borderColor):"border-bottom:0",i=g?"border-left:1px solid ".concat(t[a].borderColor):"border-left:0",r=g?"border-right:1px solid ".concat(t[a].borderColor):"border-right:0",n=t[a].fontColor?t[a].fontColor:"#FFFFFF";M(s),q(i),z(c),H(r),X(n)}}),[t,Q]),Object(d.jsxs)("div",{style:T,className:r,children:[Object(d.jsx)(o,{className:"tab-header",iconMarginRight:s,width:b,height:h,activeFontColor:G,activeBgColor:i,inactiveBgColor:a,size:x,borderT:L,borderB:$,borderL:U,borderR:Z,children:C.map((function(e,a){return Object(d.jsxs)("div",{className:"".concat(t[e].direction||t[e].className,e===Q?" active":" inactive"),onClick:function(t){return function(e,t){D(e)}(e)},children:[t[e].icon?Object(d.jsx)(l.a,{width:t[e].iconWidth,height:t[e].iconHeight,token:e===Q?t[e].icon:t[e].inicon}):"","  ",e]},a)}))}),t[Q]?t[Q].content:""]})}},1365:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var s,c=a(62),i=a(51),r=(a(6),a(5)),n=i.a.div(s||(s=Object(c.a)(["\nwidth:","%;\nmax-width:100%;\nheight:10px;\nbackground-color: #5577FD;\n"])),(function(e){return e.width}));function l(e){var t=e.startTimestamp,a=e.nowTimestamp,s=e.endTimestamp,c=parseInt((a-t)/(s-t)*100);return Object(r.jsx)("div",{className:"time-slider",children:Object(r.jsx)(n,{width:c})})}},2149:function(e,t,a){},2150:function(e,t,a){},2151:function(e,t,a){},2152:function(e,t,a){},2332:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return S}));var s=a(2),c=a(14),i=a(1),r=a.n(i),n=a(6),l=(a(2149),a.p+"static/media/logo-deri.d4c8b6a2.svg"),d=(a(1365),a(46)),o=(a(2150),a(169)),j=a(16),b=a(1229),u=a(37),h=a(168),m=a(5);var x=Object(d.b)("wallet")(Object(d.c)((function(e){var t=e.wallet,a=e.lang,i=Object(n.useState)(""),l=Object(c.a)(i,2),d=l[0],x=l[1],O=Object(n.useState)(""),v=Object(c.a)(O,2),p=v[0],f=v[1],N=Object(n.useState)(""),g=Object(c.a)(N,2),w=g[0],S=g[1],C=Object(n.useState)(""),k=Object(c.a)(C,2),y=k[0],Q=k[1],D=Object(n.useState)(!0),E=Object(c.a)(D,2),P=E[0],T=E[1],A=Object(o.c)(),R=function(){var e=Object(s.a)(r.a.mark((function e(){var a,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.request("getUserStakingClaimInfo",[t.detail.account,3]);case 2:(a=e.sent)&&(s=+a.claimed+ +a.locked+ +a.claimable,f(a.claimed),S(a.locked),Q(a.claimable),x(s));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(s.a)(r.a.mark((function e(){var a,s,c,i,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(+y.claimable>0)){e.next=2;break}return e.abrupt("return");case 2:if(a=new Date((new Date).toLocaleDateString()).getTime()+666e5,s=new Date((new Date).toLocaleDateString()).getTime()+648e5,!((c=parseInt(Date.now()))<a&&c>s)){e.next=8;break}return A.error("Claiming DERI is disabled during first 30 minutes of each epoch"),e.abrupt("return");case 8:return e.next=10,u.a.request("claimMyStaking",[t.detail.account,3],{includeResponse:!0});case 10:if((i=e.sent)&&i.success){e.next=16;break}return A.error("Claim fail"),e.abrupt("return",!1);case 16:A.success("Claim success"),n=Object(j.bg)(p).plus(Object(j.bg)(y)).toString(),f(n),Q(0);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){T(!(+y>0))}),[y]),Object(n.useEffect)((function(){t.isConnected()&&R()}),[t,t.detail]),Object(m.jsxs)("div",{className:"trade-claim",children:[Object(m.jsx)("div",{className:"rewards-claim",children:a.rewards}),Object(m.jsxs)("div",{className:"rewards-info",children:[Object(m.jsxs)("div",{className:"lg-rewards-info",children:[Object(m.jsxs)("div",{className:"my-rewards",children:[Object(m.jsx)("div",{className:"claim-title",children:a["my-rewards"]}),Object(m.jsxs)("div",{className:"claim-num",children:[Object(m.jsx)(b.a,{value:d,decimalScale:2})," DERI"]})]}),Object(m.jsxs)("div",{className:"claimed-deri",children:[Object(m.jsx)("div",{className:"claim-title",children:a["claimed-deri"]}),Object(m.jsx)("div",{className:"claim-num",children:Object(m.jsx)(b.a,{value:p,decimalScale:2})})]}),Object(m.jsxs)("div",{className:"locked-deri",children:[Object(m.jsx)("div",{className:"claim-title",children:a["lcked-deri"]}),Object(m.jsx)("div",{className:"claim-num",children:Object(m.jsx)(b.a,{value:w,decimalScale:2})})]}),Object(m.jsxs)("div",{className:"claimable-deri",children:[Object(m.jsx)("div",{className:"claim-title",children:a["claimable-deri"]}),Object(m.jsx)("div",{className:"claim-num",children:Object(m.jsx)(b.a,{value:y,decimalScale:2})})]}),Object(m.jsx)("div",{className:"cliam-button",children:Object(m.jsx)(h.a,{width:"102",height:"34",label:a.claim,disabled:P,onClick:function(){return I()}})})]}),Object(m.jsxs)("div",{className:"md-rewards-info",children:[Object(m.jsxs)("div",{className:"top-rewards-info",children:[Object(m.jsxs)("div",{className:"my-rewards",children:[Object(m.jsx)("div",{className:"claim-title",children:a["my-rewards"]}),Object(m.jsxs)("div",{className:"claim-num",children:[Object(m.jsx)(b.a,{value:d,decimalScale:2})," DERI"]})]}),Object(m.jsx)("div",{className:"cliam-button",children:Object(m.jsx)(h.a,{width:"102",height:"34",label:a.claim,disabled:P,onClick:function(){return I()}})})]}),Object(m.jsxs)("div",{className:"bottom-rewards-info",children:[Object(m.jsxs)("div",{className:"claimed-deri",children:[Object(m.jsx)("div",{className:"claim-title",children:a["claimed-deri"]}),Object(m.jsx)("div",{className:"claim-num",children:Object(m.jsx)(b.a,{value:p,decimalScale:2})})]}),Object(m.jsxs)("div",{className:"locked-deri",children:[Object(m.jsx)("div",{className:"claim-title",children:a["lcked-deri"]}),Object(m.jsx)("div",{className:"claim-num",children:Object(m.jsx)(b.a,{value:w,decimalScale:2})})]}),Object(m.jsxs)("div",{className:"claimable-deri",children:[Object(m.jsx)("div",{className:"claim-title",children:a["claimable-deri"]}),Object(m.jsx)("div",{className:"claim-num",children:Object(m.jsx)(b.a,{value:y,decimalScale:2})})]})]})]})]})]})})));function O(e){var t=e.lang,a=Object(n.useState)({}),i=Object(c.a)(a,2),d=i[0],o=i[1],j=Object(n.useState)(0),b=Object(c.a)(j,2),h=(b[0],b[1],Object(n.useState)("")),O=Object(c.a)(h,2);O[0],O[1];Object(n.useEffect)((function(){v()}),[]);var v=function(){var e=Object(s.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.request("getStakingAddressCount",[3]);case 2:t=e.sent,a={one:!0,two:!1,three:!1,four:!1},t.addressCount>1500&&(a.two=!0),t.addressCount>3e3&&(a.three=!0),t.addressCount>5e3&&(a.four=!0),o(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"staking",children:[Object(m.jsx)("div",{className:"title-timeout",children:Object(m.jsxs)("div",{className:"title-time-text",children:[Object(m.jsxs)("div",{className:"title-text",children:[Object(m.jsxs)("div",{className:"title-epoch",children:[t.title," (Epoch 3)"]}),Object(m.jsx)("div",{className:"time xs-hide"})]}),Object(m.jsxs)("div",{className:"start-end-time-epoch",children:[Object(m.jsx)("div",{className:"satrt-end-time",children:"10:00:00 AM, December 8th 2021  to 10:00:00 AM, January 5th 2022  UTC"}),Object(m.jsx)("div",{className:"epoch xs-hide"})]}),Object(m.jsxs)("div",{className:"xs-show",children:[Object(m.jsx)("div",{className:"epoch"}),Object(m.jsx)("div",{className:"time"})]})]})}),Object(m.jsx)("div",{className:"claim",children:Object(m.jsx)(x,{lang:t})}),Object(m.jsxs)("div",{className:"rewards-box",children:[Object(m.jsxs)("div",{className:"total-rewards-pool",children:[Object(m.jsx)("div",{className:"deri-logo-bg",children:Object(m.jsx)("img",{alt:"",src:l})}),Object(m.jsxs)("div",{className:"total-rewards-num",children:[Object(m.jsx)("div",{className:"total-rewards-pool-title",children:"TOTAL REWARDS POOL"}),Object(m.jsxs)("div",{className:"toatl-rewards-deri",children:[Object(m.jsx)("span",{children:"2,000,000"}),Object(m.jsx)("span",{className:"deri-text",children:"DERI"})]})]})]}),Object(m.jsxs)("div",{className:"open-lock-rewards",children:[Object(m.jsxs)("div",{className:"top-open-lock-box",children:[Object(m.jsxs)("div",{className:"lock-open open",children:[Object(m.jsx)("div",{className:"lock-logo open-logo ",children:"OPEN"}),Object(m.jsx)("div",{className:"address-num",children:"< 1500 addresses"}),Object(m.jsxs)("div",{className:"address-reward",children:[Object(m.jsx)("span",{children:"500,000 "}),"  ",Object(m.jsx)("span",{className:"deri-text",children:"DERI"})]}),Object(m.jsx)("div",{className:"percentage-reward",children:"25% UNLOCKED"})]}),Object(m.jsxs)("div",{className:d.two?"lock-open open":"lock-open",children:[Object(m.jsx)("div",{className:d.two?"lock-logo open-logo":"lock-logo ",children:d.two?"OPEN":"LOCK"}),Object(m.jsx)("div",{className:"address-num",children:"1,500 - 3000 addresses"}),Object(m.jsxs)("div",{className:"address-reward",children:[Object(m.jsx)("span",{children:"1,000,000 "}),"  ",Object(m.jsx)("span",{className:"deri-text",children:"DERI"})]}),Object(m.jsx)("div",{className:"percentage-reward",children:"50% UNLOCKED"})]})]}),Object(m.jsxs)("div",{className:"bottom-open-lock-box",children:[Object(m.jsxs)("div",{className:d.three?"lock-open open":"lock-open",children:[Object(m.jsx)("div",{className:d.three?"lock-logo open-logo":"lock-logo",children:d.three?"OPEN":"LOCK"}),Object(m.jsx)("div",{className:"address-num",children:"3000 - 5000 addresses"}),Object(m.jsxs)("div",{className:"address-reward",children:[Object(m.jsx)("span",{children:"1,500,000 "}),"  ",Object(m.jsx)("span",{className:"deri-text",children:"DERI"})]}),Object(m.jsx)("div",{className:"percentage-reward",children:"75% UNLOCKED"})]}),Object(m.jsxs)("div",{className:d.four?"lock-open open":"lock-open",children:[Object(m.jsx)("div",{className:d.four?"lock-logo open-logo":"lock-logo",children:d.four?"OPEN":"LOCK"}),Object(m.jsx)("div",{className:"address-num",children:"> 5,000 addresses"}),Object(m.jsxs)("div",{className:"address-reward",children:[Object(m.jsx)("span",{children:"2,000,000 "}),"  ",Object(m.jsx)("span",{className:"deri-text",children:"DERI"})]}),Object(m.jsx)("div",{className:"percentage-reward",children:"100% UNLOCKED"})]})]})]})]}),Object(m.jsx)("div",{className:"stage-points",children:Object(m.jsxs)("div",{className:"stage-points-info",children:[Object(m.jsxs)("div",{className:"top-stage-points",children:[Object(m.jsxs)("div",{className:"points-box",children:[Object(m.jsx)("div",{className:"stage-box",children:"1 ST"}),Object(m.jsx)("div",{className:"points-num",children:"10,000 POINTS"}),Object(m.jsx)("div",{className:"start-end-stage-time",children:"10 AM, Dec 8  - 10 AM, Dec 15 UTC"})]}),Object(m.jsxs)("div",{className:"points-box xs-last",children:[Object(m.jsx)("div",{className:"stage-box",children:"2 ND"}),Object(m.jsx)("div",{className:"points-num",children:"20,000 POINTS"}),Object(m.jsx)("div",{className:"start-end-stage-time",children:"10 AM, Dec 15  - 10 AM, Dec 22 UTC"})]})]}),Object(m.jsxs)("div",{className:"bottom-stage-points",children:[Object(m.jsxs)("div",{className:"points-box",children:[Object(m.jsx)("div",{className:"stage-box",children:"3 RD"}),Object(m.jsx)("div",{className:"points-num",children:"30,000 POINTS"}),Object(m.jsx)("div",{className:"start-end-stage-time",children:"10 AM, Dec 22  - 10 AM, Dec 29 UTC"})]}),Object(m.jsxs)("div",{className:"points-box last xs-last",children:[Object(m.jsx)("div",{className:"stage-box",children:"4 TH"}),Object(m.jsx)("div",{className:"points-num",children:"50,000 POINTS"}),Object(m.jsx)("div",{className:"start-end-stage-time",children:"10 AM, Dec 29  - 10 AM, Jan 5 UTC,2022"})]})]})]})})]})}var v=a(1314),p=a(20),f=a(1237);function N(e){var t=e.lang,a=e.List;return Object(m.jsx)("div",{className:"ponts-pnl-top-ten",children:Object(m.jsxs)("div",{className:"list-box",children:[Object(m.jsxs)("div",{className:"list-box-title",children:[Object(m.jsx)("span",{className:"no",children:t.no}),Object(m.jsx)("span",{className:"address",children:t["user-addr"]}),Object(m.jsx)("span",{className:"feespaid",children:t["fees-paid"]}),Object(m.jsx)("span",{className:"avgcoeff",children:t["avg-coeff"]}),Object(m.jsx)(f.a,{text:t.score,className:"score score-hover",tip:"estimated points based on the current weights"})]}),Object(m.jsx)("div",{className:"list-info",children:a.map((function(e,t){return Object(m.jsxs)("div",{className:"list-info-box",children:[Object(m.jsxs)("div",{className:"no",children:[1===e.no&&Object(m.jsx)("span",{className:"top-three-no",children:"1"}),2===e.no&&Object(m.jsx)("span",{className:"top-three-no",children:"2"}),3===e.no&&Object(m.jsx)("span",{className:"top-three-no",children:"3"}),1!==e.no&&2!==e.no&&3!==e.no&&e.no]}),Object(m.jsx)("div",{className:"address",children:e.userAddr}),Object(m.jsxs)("div",{className:"feespaid",children:["$ ",Object(m.jsx)(b.a,{value:e.feesPaid,decimalScale:0,thousandSeparator:!0})]}),Object(m.jsx)("div",{className:"avgcoeff",children:Object(m.jsx)(b.a,{value:e.avgCoeff,decimalScale:4,thousandSeparator:!0})}),Object(m.jsx)("div",{className:"score",children:Object(m.jsx)(b.a,{value:e.score,decimalScale:2,thousandSeparator:!0})})]},t)}))})]})})}function g(e){var t=e.lang,a=e.List;return Object(m.jsx)("div",{className:"ponts-pnl-top-ten",children:Object(m.jsxs)("div",{className:"list-box",children:[Object(m.jsxs)("div",{className:"list-box-title",children:[Object(m.jsx)("span",{className:"no",children:t.no}),Object(m.jsx)("span",{className:"address",children:t["user-addr"]}),Object(m.jsx)("span",{className:"pnl",children:"PnL"})]}),Object(m.jsx)("div",{className:"list-info",children:a.map((function(e,t){return Object(m.jsxs)("div",{className:"list-info-box",children:[Object(m.jsxs)("div",{className:"no",children:[1===e.no&&Object(m.jsx)("span",{className:"top-three-no",children:"1"}),2===e.no&&Object(m.jsx)("span",{className:"top-three-no",children:"2"}),3===e.no&&Object(m.jsx)("span",{className:"top-three-no",children:"3"}),1!==e.no&&2!==e.no&&3!==e.no&&e.no]}),Object(m.jsx)("div",{className:"address",children:e.userAddr}),Object(m.jsxs)("div",{className:"pnl",children:["$ ",Object(m.jsx)(b.a,{value:e.pnl,decimalScale:2,thousandSeparator:!0})]})]},t)}))})]})})}a.p,a(2151);var w=Object(d.b)("wallet")(Object(d.c)((function(e){var t=e.wallet,a=e.lang,i=Object(n.useState)([]),d=Object(c.a)(i,2),o=d[0],j=d[1],h=Object(n.useState)([]),x=Object(c.a)(h,2),O=x[0],w=x[1],S=Object(n.useState)(""),C=Object(c.a)(S,2),k=C[0],y=C[1],Q=Object(n.useState)(""),D=Object(c.a)(Q,2),E=D[0],P=D[1],T=Object(n.useState)(""),A=Object(c.a)(T,2),R=A[0],I=A[1],L=Object(n.useState)({}),M=Object(c.a)(L,2),B=M[0],F=M[1],U=Object(n.useState)(""),q=Object(c.a)(U,2),K=q[0],W=q[1],$=function(){var e=Object(s.a)(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.request("getUserStakingReward",[t.detail.account,3]);case 2:(a=e.sent)&&y(a.rewardDERI);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(s.a)(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.request("getUserStakingInfo",[t.detail.account,3]);case 2:a=e.sent,P(a.score),I(a.feePaid),W(a.coef);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(s.a)(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.request("getUserStakingContribution",[t.detail.account,3]);case 2:(a=e.sent)&&F(a);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(s.a)(r.a.mark((function e(){var t,a,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.request("getStakingTop10Users",[3]);case 2:(t=e.sent)&&(a=t.top10.map((function(e,t){var a={};return a.no=e.no,e.userAddr=Object(p.i)(e.userAddr),a.userAddr=e.userAddr,a.feesPaid=e.feePaid,a.avgCoeff=e.evgCoeff,a.score=e.score,a.specialRewardsA=e.specialRewardsA,a})),s=t.top10Pnl.map((function(e,t){var a={};return a.no=e.no,e.userAddr=Object(p.i)(e.userAddr),a.userAddr=e.userAddr,a.pnl=e.pnl,a.specialRewardsB=e.specialRewardsB,a})),w(s),j(a));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){var e;return e=window.setInterval((function(){_()}),3e4),_(),function(){e&&clearInterval(e)}}),[]),Object(n.useEffect)((function(){var e;return e=window.setInterval((function(){t.isConnected()&&($(),z(),J())}),3e4),t.isConnected()&&($(),z(),J()),function(){e&&clearInterval(e)}}),[t.detail.account]);var Z={"Top 10 Points":{content:Object(m.jsx)(N,{lang:a,List:o})},"Top 10 Pnl":{content:Object(m.jsx)(g,{lang:a,List:O})}};return Object(m.jsxs)("div",{className:"trading",children:[Object(m.jsx)("div",{className:"trading-left",children:Object(m.jsx)("div",{className:"top-ponts-pnl",children:Object(m.jsx)(v.a,{tabSet:Z,activeBgColor:"#203B60"})})}),Object(m.jsxs)("div",{className:"trading-right",children:[Object(m.jsxs)("div",{className:"your-estimated-rewards",children:[Object(m.jsx)("div",{className:"your-estimated-rewards-title",children:Object(m.jsxs)("span",{children:[a["your-rstimated-rewards"]," "]})}),Object(m.jsx)("div",{className:"your-rewards-info",children:Object(m.jsxs)("div",{className:"your-deri",children:[Object(m.jsx)("span",{className:"deri-logo-bg",children:Object(m.jsx)("img",{alt:"",src:l})}),Object(m.jsxs)("span",{className:"span",children:[" ",k?Object(m.jsx)(b.a,{decimalScale:2,value:k,thousandSeparator:!0}):"--"," "]})]})})]}),Object(m.jsxs)("div",{className:"your-score-fee-coeff",children:[Object(m.jsx)("div",{className:"your-score-fee-coeff-title",children:"Your Trading Data"}),Object(m.jsxs)("div",{className:"your-score-fee-coeff-info",children:[Object(m.jsxs)("div",{className:"your-score",children:[Object(m.jsx)("div",{className:"your-score-title",children:Object(m.jsx)(f.a,{text:a["your-scored"],tip:"estimated points based on the current weights"})}),Object(m.jsx)("div",{className:"your-score-num",children:E?Object(m.jsx)(b.a,{value:E,decimalScale:2,thousandSeparator:!0}):"--"})]}),Object(m.jsxs)("div",{className:"your-fee",children:[Object(m.jsx)("div",{className:"your-fee-title",children:Object(m.jsx)(f.a,{text:a["your-fees-paid"],tip:"Fees paid by trading Perpetual futures in Main & Inno Zone or Everlasting Options on BSC"})}),Object(m.jsxs)("div",{className:"your-fee-num",children:["$  ",R?Object(m.jsx)(b.a,{value:R,decimalScale:2,thousandSeparator:!0}):"--"]})]}),Object(m.jsxs)("div",{className:"your-coeff",children:[Object(m.jsx)("div",{className:"your-coeff-title",children:Object(m.jsx)(f.a,{multiline:!0,text:a["your-coeff"],tip:a["boosting-factor-two"]})}),Object(m.jsx)("div",{className:"your-coeff-num",children:K?Object(m.jsx)(b.a,{value:K,decimalScale:4,thousandSeparator:!0}):"--"})]})]})]}),Object(m.jsx)("div",{className:"raise-score",children:Object(m.jsxs)("div",{className:"raise-score-box",children:[Object(m.jsxs)("div",{className:"raise-score-title-link",children:[Object(m.jsx)("div",{className:"raise-score-title",children:a["raise-score"]}),Object(m.jsxs)("div",{className:"raise-score-link",children:[Object(m.jsx)("a",{className:"fist-a",tip:a["staking-hover"],href:"https://deri.io/#/pool/v2_lite/56/future/0x26bE73Bdf8C113F3630e4B766cfE6F0670Aa09cF",children:a.staking}),Object(m.jsx)("a",{tip:a["futures-hover"],href:"https://deri.io/#/trade/futures",children:a.futures}),Object(m.jsx)("a",{tip:a["options-hover"],href:"https://deri.io/#/trade/options",children:a.options})]})]}),Object(m.jsxs)("div",{className:"raise-score-des",children:["Mining rewards are calculated based on traders' total points of the 4 quarters. In each quarter, all the participating traders share \xa0",Object(m.jsx)(f.a,{text:"this quarter's points",multiline:!0,className:"raise-hover",tip:a["the-quarter-points"]}),"\xa0per their transaction fees multiplied by the\xa0",Object(m.jsx)(f.a,{text:"boosting factors",className:"raise-hover",multiline:!0,tip:a["boosting-factor"]}),"."]})]})}),Object(m.jsx)("div",{className:"total-your-contrib",children:Object(m.jsxs)("div",{className:"your-contrib",children:[Object(m.jsxs)("div",{className:"stage",children:[Object(m.jsx)("div",{className:"stage-title"}),Object(m.jsx)("div",{className:"stage-title",children:"1st"}),Object(m.jsx)("div",{className:"stage-title",children:"2nd"}),Object(m.jsx)("div",{className:"stage-title",children:"3rd"}),Object(m.jsx)("div",{className:"stage-title",children:"4th"})]}),Object(m.jsxs)("div",{className:"total-score-box",children:[Object(m.jsx)("div",{className:"total-score",children:"Total Score"}),Object(m.jsx)("div",{className:"total-score",children:B.Q1Contrib&&"0"!==B.Q1Contrib?Object(m.jsx)(b.a,{value:B.Q1Contrib,decimalScale:0,thousandSeparator:!0}):"--"}),Object(m.jsx)("div",{className:"total-score",children:B.Q2Contrib&&"0"!==B.Q2Contrib?Object(m.jsx)(b.a,{value:B.Q2Contrib,decimalScale:0,thousandSeparator:!0}):"--"}),Object(m.jsx)("div",{className:"total-score",children:B.Q3Contrib&&"0"!==B.Q3Contrib?Object(m.jsx)(b.a,{value:B.Q3Contrib,decimalScale:0,thousandSeparator:!0}):"--"}),Object(m.jsx)("div",{className:"total-score",children:B.Q4Contrib&&"0"!==B.Q4Contrib?Object(m.jsx)(b.a,{value:B.Q4Contrib,decimalScale:0,thousandSeparator:!0}):"--"})]}),Object(m.jsxs)("div",{className:"your-score-box",children:[Object(m.jsx)("div",{className:"your-score",children:"Your Score"}),Object(m.jsx)("div",{className:"your-score",children:B.userQ1Contrib&&"0"!==B.Q1Contrib?Object(m.jsx)(b.a,{value:B.userQ1Contrib,decimalScale:2,thousandSeparator:!0}):"--"}),Object(m.jsx)("div",{className:"your-score",children:B.userQ2Contrib&&"0"!==B.Q2Contrib?Object(m.jsx)(b.a,{value:B.userQ2Contrib,decimalScale:2,thousandSeparator:!0}):"--"}),Object(m.jsx)("div",{className:"your-score",children:B.userQ3Contrib&&"0"!==B.Q3Contrib?Object(m.jsx)(b.a,{value:B.userQ3Contrib,decimalScale:2,thousandSeparator:!0}):"--"}),Object(m.jsx)("div",{className:"your-score",children:B.userQ4Contrib&&"0"!==B.Q4Contrib?Object(m.jsx)(b.a,{value:B.userQ4Contrib,decimalScale:2,thousandSeparator:!0}):"--"})]}),Object(m.jsxs)("div",{className:"your-point-box",children:[Object(m.jsx)("div",{className:"your-point",children:"Your Points"}),Object(m.jsx)("div",{className:"your-point",children:B.userQ1Point&&"0"!==B.Q1Contrib?Object(m.jsx)(f.a,{text:Object(m.jsx)(b.a,{value:B.userQ1Point,decimalScale:2,thousandSeparator:!0}),className:"point-hover",tip:B.userQ1Point?" = (".concat(B.userQ1Contrib," / ").concat(B.Q1Contrib,") * 10,000"):""}):"--"}),Object(m.jsx)("div",{className:"your-point",children:B.userQ2Point&&"0"!==B.Q2Contrib?Object(m.jsx)(f.a,{text:Object(m.jsx)(b.a,{value:B.userQ2Point,decimalScale:2,thousandSeparator:!0}),className:"point-hover",tip:B.userQ1Point?" = (".concat(B.userQ2Contrib," / ").concat(B.Q2Contrib,") * 20,000"):""}):"--"}),Object(m.jsx)("div",{className:"your-point",children:B.userQ3Point&&"0"!==B.Q3Contrib?Object(m.jsx)(f.a,{text:Object(m.jsx)(b.a,{value:B.userQ3Point,decimalScale:2,thousandSeparator:!0}),className:"point-hover",tip:B.userQ1Point?" = (".concat(B.userQ3Contrib," / ").concat(B.Q3Contrib,") * 30,000"):""}):"--"}),Object(m.jsx)("div",{className:"your-point",children:B.userQ4Point&&"0"!==B.Q4Contrib?Object(m.jsx)(f.a,{text:Object(m.jsx)(b.a,{value:B.userQ4Point,decimalScale:2,thousandSeparator:!0}),className:"point-hover",tip:B.userQ1Point?" = (".concat(B.userQ4Contrib," / ").concat(B.Q4Contrib,") * 50,000"):""}):"--"})]})]})})]})]})})));a(2152);function S(e){var t=e.lang;return Object(m.jsx)("div",{className:"three",children:Object(m.jsxs)("div",{className:"finished",children:[Object(m.jsx)(O,{lang:t}),Object(m.jsx)(w,{lang:t}),Object(m.jsx)("div",{className:"detailed-rules",children:Object(m.jsx)("a",{href:"https://deri-protocol.medium.com/deri-protocol-trade-to-earn-epoch-3-7b237845e4dc",children:"Detailed Rules"})})]})})}}}]);
//# sourceMappingURL=6.2fcbfe96.chunk.js.map