(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[25],{1398:function(e,t,s){},1436:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return h}));var a=s(16),r=s(6),i=s(733),c=s.n(i),n=s(948),o=s(939),l=s(936),d=(s(1398),s(20));function h(e){var t=e.lang,s=c.a.utc("2021-10-13 10:00:00"),i=Object(r.useState)(!!s.isBefore(c.a.utc())),h=Object(a.a)(i,2),j=h[0],u=h[1];return Object(d.jsxs)("div",{className:"trading-mining",children:[Object(d.jsx)("div",{className:"title",children:t.title}),Object(d.jsx)("div",{className:"count-down-box",style:{display:j?"none":"block"},children:Object(d.jsx)(n.a,{lang:t,onEnd:function(){return u(!0)},lastTimestamp:s.unix()})}),Object(d.jsx)("div",{className:"staking",children:Object(d.jsx)(l.a,{lang:t})}),Object(d.jsx)("div",{className:"trading",children:Object(d.jsx)(o.a,{lang:t})})]})}},653:function(e,t,s){"use strict";s.d(t,"a",(function(){return l}));var a=s(0),r=s.n(a),i=s(1),c=s(16),n=s(6),o=s(20);function l(e){var t=e.btnText,s=e.className,a=e.disabled,l=e.click,d=e.afterClick,h=e.checkApprove,j=e.wallet,u=e.spec,b=e.lang,m=Object(n.useState)(a?"disabled":"enabled"),p=Object(c.a)(m,2),x=p[0],O=p[1],v=Object(n.useState)(!0),g=Object(c.a)(v,2),f=g[0],N=g[1],y=Object(n.useState)(!1),S=Object(c.a)(y,2),w=S[0],C=S[1],k=Object(n.useState)(t),E=Object(c.a)(k,2),B=E[0],Q=E[1],$=Object(n.useRef)(null),A=function(){var e=Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===x){e.next=2;break}return e.abrupt("return");case 2:return T(),e.next=5,l();case 5:e.sent&&d&&d(),P();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){O("disabled"),C(!0),$.current&&($.current.style.display="inline-block")},P=function(){$.current&&($.current.style.display="none"),O("enabled"),C(!1)},I=function(){var e=Object(i.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(h&&j&&j.detail.account)){e.next=5;break}return e.next=3,j.isApproved(u.pool,u.bTokenId);case 3:t=e.sent,N(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T(),e.next=3,j.approve(u.pool,u.bTokenId);case 3:e.sent.success?N(!0):(N(!1),alert(b["approve-failed"])),P();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){return I(),function(){}}),[j,u,h]),Object(n.useEffect)((function(){return t&&Q(t),function(){}}),[t]),Object(o.jsxs)("button",{className:s,onClick:function(){f?A():R()},children:[Object(o.jsx)("span",{className:"btn-loading-wrap",children:Object(o.jsx)("span",{ref:$,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),w?b.pending:f?B:b.approve]})}},655:function(e,t,s){"use strict";s.d(t,"a",(function(){return d}));var a=s(56),r=s(49),i=s(665),c=s(16),n=s(6),o=s(661),l=s(20);function d(e){var t=Object(n.useState)(Object(l.jsx)("span",{className:"loading-line"})),s=Object(c.a)(t,2),d=s[0],h=s[1];return Object(n.useEffect)((function(){var t=e.allowZero,s=Object(i.a)(e,["allowZero"]);return("object"!==Object(r.a)(e.value)&&void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t)&&h(Object(l.jsx)(o.a,Object(a.a)(Object(a.a)({},s),{},{displayType:"text"}))),function(){}}),[e.value]),d}},663:function(e,t,s){"use strict";var a=s(6),r=s(20);t.a=function(e){var t=Object(a.useRef)(null);return Object(a.useEffect)((function(){var e=t.current;e&&e.querySelectorAll("[tip]").forEach((function(t){var s=null;t.addEventListener("mouseover",(function(e){var t=e.currentTarget.getAttribute("tip");if(t){var a="hover-box-".concat((new Date).getTime());s=document.body.querySelector("#".concat(a)),(s=document.createElement("div")).style.cssText="z-index : 9;min-width : 100px;max-width : ".concat(window.screen.width,"px ;font-size : 12px ;position : absolute;background-color: #2c2d31;border: 1px solid #AAAAAA;color: #AAAAAA;border-radius: 10px;padding: 4px;"),document.body.appendChild(s),s.innerText=t,s.id=a,s.style.display="block";var r=e.currentTarget.getBoundingClientRect();if(s.style.top="".concat(r.y+r.height+window.document.documentElement.scrollTop,"px"),s.offsetWidth+e.pageX>window.screen.width)if(e.pageX-s.offsetWidth>=0)s.style.left="".concat(e.pageX-s.offsetWidth,"px");else{var i=e.pageX-s.offsetWidth/2>0?e.pageX-s.offsetWidth/2:0;s.style.left="".concat(i,"px")}else s.style.left="".concat(e.pageX,"px")}})),e.addEventListener("mouseout",(function(e){s&&s.remove()}))}));return function(){t.current=null}}),[e.title]),e.block?Object(r.jsx)("div",{ref:t,children:e.children}):Object(r.jsx)("span",{ref:t,children:e.children})}},772:function(e,t,s){"use strict";s.p},773:function(e,t,s){"use strict";t.a=s.p+"static/media/deri.a986e7f2.svg"},807:function(e,t,s){"use strict";t.a=s.p+"static/media/add.9cb56a42.svg"},935:function(e,t,s){},936:function(e,t,s){"use strict";s.d(t,"a",(function(){return i}));s(6),s(772);var a=s(773),r=s(20);function i(e){var t=e.lang;return Object(r.jsx)("div",{className:"rewards-bnb-deri",children:Object(r.jsxs)("div",{className:"deri-total",children:[Object(r.jsx)("div",{className:"deri-title",children:t["transaction-sharing-pool"]}),Object(r.jsxs)("div",{className:"deri-num",children:[Object(r.jsx)("img",{src:a.a}),Object(r.jsx)("span",{children:"$ 1,000,000"})]})]})})}},939:function(e,t,s){"use strict";var a=s(6),r=s(48),i=s(158),c=s(675),n=s.n(c),o=(s(653),s.p+"static/media/one.fade84b2.svg"),l=s.p+"static/media/two.8cc1e0c5.svg",d=s.p+"static/media/three.a6bd6d2a.svg",h=s(807),j=s.p+"static/media/twitter.a47f89ed.svg",u=s.p+"static/media/share.48478a95.png",b=(s(772),s(773)),m=s(655),p=s(29),x=s(663),O=s(1037),v=s.n(O),g=s(12),f=s(20);t.a=Object(r.b)("wallet","loading")(Object(r.c)((function({wallet:e,lang:t,loading:s}){const[r,c]=Object(a.useState)(""),[O,N]=Object(a.useState)(""),[y,S]=Object(a.useState)(""),[w,C]=Object(a.useState)(""),[k,E]=Object(a.useState)(""),[B,Q]=Object(a.useState)(""),[$,A]=Object(a.useState)(""),[T,P]=Object(a.useState)({}),[I,R]=Object(a.useState)([]),_=async()=>{let t=await Object(g.S)(e.detail.account);S(t.score),C(t.feePaid),E(t.coef)},D=async()=>{let t=await Object(g.R)(e.detail.account);t&&P(t)},V=async()=>{let t=await Object(g.T)(e.detail.account);c(t.rewardBNB),N(t.rewardDERI)},F=async()=>{let e=await Object(g.M)();s.loaded(),e&&(e=e.map(((t,s)=>{let a={};return a.no=t.no,t.userAddr=Object(p.g)(t.userAddr),a.userAddr=t.userAddr,a.feesPaid=t.feePaid,a.avgCoeff=t.evgCoeff,a.score=t.score,a.rewardBNB=t.rewardBNB,a.progress=`${(e=>{let t;switch(e){case 1:t="one";break;case 2:t="two";break;case 3:t="three";break;case 4:t="four";break;case 5:t="five";break;case 6:t="six";break;case 7:t="seven";break;case 8:t="eight";break;case 9:t="nine";break;case 10:t="ten"}return t})(t.no)}-progress progress-box`,a.progressSlider=t.score/e[0].score*100,a})),R(e))};Object(a.useEffect)((()=>{s.loading();let e=null;return e=window.setInterval((()=>{F()}),3e4),F(),()=>{e&&clearInterval(e)}}),[]);const L=async()=>{if(O){let e=document.getElementsByClassName("twitter-box")[0];v()(e,{allowTaint:!1,useCORS:!0}).then((e=>{let t=((e,t="file")=>{let s=e.split(","),a=s[0].match(/:(.*?);/)[1],r=a.split("/")[1],i=atob(s[1]),c=i.length,n=new Uint8Array(c);for(;c--;)n[c]=i.charCodeAt(c);return new File([n],`${t}.${r}`,{type:a})})(e.toDataURL("image/png")),s=new FormData;s.append("image",t);n.a.post("https://share.deri.finance/add_image?type=image",s).then((e=>{let t=e.data.data.url;i.isBrowser?window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://share.deri.finance/?title=Trade%20to%20Earn&description=Total%20Rewards%20$1,000,000%20in%20DERI&image=${t}&target=${encodeURIComponent("https://app.deri.finance/#/trade-to-earn")}`)}`):window.location.href=`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://share.deri.finance/?title=Trade%20to%20Earn&description=Total%20Rewards%20$1,000,000%20in%20DERI&image=${t}&target=${encodeURIComponent("https://app.deri.finance/#/trade-to-earn")}`)}`}))}))}};return Object(a.useEffect)((()=>{let t=null;return t=window.setInterval((()=>{e.isConnected()&&(V(),_(),D())}),3e4),e.isConnected()&&(V(),_(),D()),()=>{t&&clearInterval(t)}}),[e.detail.account]),Object(a.useEffect)((()=>{I.length>=10?(document.getElementsByClassName("ten-progress")[0].style.width=`${I[9].progressSlider}%`,document.getElementsByClassName("nine-progress")[0].style.width=`${I[8].progressSlider}%`,document.getElementsByClassName("eight-progress")[0].style.width=`${I[7].progressSlider}%`,document.getElementsByClassName("seven-progress")[0].style.width=`${I[6].progressSlider}%`,document.getElementsByClassName("six-progress")[0].style.width=`${I[5].progressSlider}%`,document.getElementsByClassName("five-progress")[0].style.width=`${I[4].progressSlider}%`,document.getElementsByClassName("four-progress")[0].style.width=`${I[3].progressSlider}%`,document.getElementsByClassName("three-progress")[0].style.width=`${I[2].progressSlider}%`,document.getElementsByClassName("two-progress")[0].style.width=`${I[1].progressSlider}%`):I.length>=9?(document.getElementsByClassName("nine-progress")[0].style.width=`${I[8].progressSlider}%`,document.getElementsByClassName("eight-progress")[0].style.width=`${I[7].progressSlider}%`,document.getElementsByClassName("seven-progress")[0].style.width=`${I[6].progressSlider}%`,document.getElementsByClassName("six-progress")[0].style.width=`${I[5].progressSlider}%`,document.getElementsByClassName("five-progress")[0].style.width=`${I[4].progressSlider}%`,document.getElementsByClassName("four-progress")[0].style.width=`${I[3].progressSlider}%`,document.getElementsByClassName("three-progress")[0].style.width=`${I[2].progressSlider}%`,document.getElementsByClassName("two-progress")[0].style.width=`${I[1].progressSlider}%`):I.length>=8?(document.getElementsByClassName("eight-progress")[0].style.width=`${I[7].progressSlider}%`,document.getElementsByClassName("seven-progress")[0].style.width=`${I[6].progressSlider}%`,document.getElementsByClassName("six-progress")[0].style.width=`${I[5].progressSlider}%`,document.getElementsByClassName("five-progress")[0].style.width=`${I[4].progressSlider}%`,document.getElementsByClassName("four-progress")[0].style.width=`${I[3].progressSlider}%`,document.getElementsByClassName("three-progress")[0].style.width=`${I[2].progressSlider}%`,document.getElementsByClassName("two-progress")[0].style.width=`${I[1].progressSlider}%`):I.length>=7?(document.getElementsByClassName("seven-progress")[0].style.width=`${I[6].progressSlider}%`,document.getElementsByClassName("six-progress")[0].style.width=`${I[5].progressSlider}%`,document.getElementsByClassName("five-progress")[0].style.width=`${I[4].progressSlider}%`,document.getElementsByClassName("four-progress")[0].style.width=`${I[3].progressSlider}%`,document.getElementsByClassName("three-progress")[0].style.width=`${I[2].progressSlider}%`,document.getElementsByClassName("two-progress")[0].style.width=`${I[1].progressSlider}%`):I.length>=6?(document.getElementsByClassName("six-progress")[0].style.width=`${I[5].progressSlider}%`,document.getElementsByClassName("five-progress")[0].style.width=`${I[4].progressSlider}%`,document.getElementsByClassName("four-progress")[0].style.width=`${I[3].progressSlider}%`,document.getElementsByClassName("three-progress")[0].style.width=`${I[2].progressSlider}%`,document.getElementsByClassName("two-progress")[0].style.width=`${I[1].progressSlider}%`):I.length>=5?(document.getElementsByClassName("five-progress")[0].style.width=`${I[4].progressSlider}%`,document.getElementsByClassName("four-progress")[0].style.width=`${I[3].progressSlider}%`,document.getElementsByClassName("three-progress")[0].style.width=`${I[2].progressSlider}%`,document.getElementsByClassName("two-progress")[0].style.width=`${I[1].progressSlider}%`):I.length>=4?(document.getElementsByClassName("four-progress")[0].style.width=`${I[3].progressSlider}%`,document.getElementsByClassName("three-progress")[0].style.width=`${I[2].progressSlider}%`,document.getElementsByClassName("two-progress")[0].style.width=`${I[1].progressSlider}%`):I.length>=3?(document.getElementsByClassName("three-progress")[0].style.width=`${I[2].progressSlider}%`,document.getElementsByClassName("two-progress")[0].style.width=`${I[1].progressSlider}%`):I.length>=2&&(document.getElementsByClassName("two-progress")[0].style.width=`${I[1].progressSlider}%`)}),[I]),Object(f.jsxs)("div",{className:"trading-top",children:[Object(f.jsxs)("div",{className:"twitter-box",children:[Object(f.jsx)("img",{src:u}),Object(f.jsxs)("div",{className:"twitter-box-rewards",children:["$ ",O?Object(f.jsx)(m.a,{decimalScale:2,value:O,thousandSeparator:!0}):"0"]})]}),Object(f.jsx)("div",{className:"desktop-list",children:Object(f.jsxs)("div",{className:"trading-top-list",children:[Object(f.jsxs)("div",{className:"list",children:[Object(f.jsx)("div",{className:"list-title",children:t["top-ten-users"]}),Object(f.jsxs)("div",{className:"list-box",children:[Object(f.jsxs)("div",{className:"list-box-title",children:[Object(f.jsx)("span",{className:"no",children:t.no}),Object(f.jsx)("span",{className:"address",children:t["user-addr"]}),Object(f.jsx)("span",{className:"feespaid",children:t["fees-paid"]}),Object(f.jsx)("span",{className:"avgcoeff",children:t["avg-coeff"]}),Object(f.jsx)(x.a,{block:!1,children:Object(f.jsx)("span",{className:"score",tip:" estimated points based on the current weights",children:Object(f.jsx)("span",{className:"score-hover",children:t.score})})})]}),Object(f.jsx)("div",{className:"list-info",children:I.map(((e,t)=>Object(f.jsxs)("div",{className:"list-info-box",children:[Object(f.jsxs)("div",{className:"no",children:[1===e.no&&Object(f.jsx)("img",{src:o}),2===e.no&&Object(f.jsx)("img",{src:l}),3===e.no&&Object(f.jsx)("img",{src:d}),1!==e.no&&2!==e.no&&3!==e.no&&e.no]}),Object(f.jsx)("div",{className:"address",children:e.userAddr}),Object(f.jsxs)("div",{className:"feespaid",children:["$ ",Object(f.jsx)(m.a,{value:e.feesPaid,decimalScale:4,thousandSeparator:!0})]}),Object(f.jsx)("div",{className:"avgcoeff",children:Object(f.jsx)(m.a,{value:e.avgCoeff,decimalScale:4,thousandSeparator:!0})}),Object(f.jsx)("div",{className:"score",children:Object(f.jsx)(m.a,{value:e.score,decimalScale:2,thousandSeparator:!0})}),Object(f.jsx)("div",{className:"progress",children:Object(f.jsx)("div",{className:e.progress})})]},t)))})]})]}),Object(f.jsxs)("div",{className:"your-rewards",children:[Object(f.jsxs)("div",{className:"your-estimated-rewards",children:[Object(f.jsxs)("div",{className:"your-rewards-title",children:[Object(f.jsx)("span",{className:"your-rewards-title-text",children:t["your-rstimated-rewards"]}),Object(f.jsxs)("div",{className:"share-twitter",onClick:L,children:[Object(f.jsx)("span",{children:Object(f.jsx)("img",{src:j})}),Object(f.jsx)("button",{children:"SHARE"})]})]}),Object(f.jsx)("div",{className:"your-rewards-info",children:Object(f.jsxs)("div",{className:"your-deri",children:[Object(f.jsx)("img",{src:b.a}),Object(f.jsxs)("span",{className:"span",children:["$ ",O?Object(f.jsx)(m.a,{decimalScale:2,value:O,thousandSeparator:!0}):"--"," "]})]})})]}),Object(f.jsxs)("div",{className:"your-score-fee-coeff",children:[Object(f.jsxs)("div",{className:"your-score",children:[Object(f.jsx)("div",{className:"your-score-title",children:Object(f.jsx)(x.a,{block:!1,children:Object(f.jsx)("span",{tip:"estimated points based on your current weights",children:t["your-scored"]})})}),Object(f.jsx)("div",{className:"your-score-num",children:y?Object(f.jsx)(m.a,{value:y,decimalScale:2,thousandSeparator:!0}):"--"})]}),Object(f.jsxs)("div",{className:"your-fee",children:[Object(f.jsx)("div",{className:"your-fee-title",children:Object(f.jsx)(x.a,{block:!1,children:Object(f.jsx)("span",{tip:"Fees paid by trading Perpetual futures in Main & Inno Zone or Everlasting Options on BSC",children:t["your-fees-paid"]})})}),Object(f.jsxs)("div",{className:"your-fee-num",children:["$  ",w?Object(f.jsx)(m.a,{value:w,decimalScale:4,thousandSeparator:!0}):"--"]})]}),Object(f.jsxs)("div",{className:"your-coeff",children:[Object(f.jsx)("div",{className:"your-coeff-title",children:Object(f.jsx)(x.a,{block:!1,children:Object(f.jsx)("span",{tip:t["boosting-factor"],children:t["your-coeff"]})})}),Object(f.jsx)("div",{className:"your-coeff-num",children:k?Object(f.jsx)(m.a,{value:k,decimalScale:4,thousandSeparator:!0}):"--"})]})]}),Object(f.jsxs)("div",{className:"raise-score",children:[Object(f.jsx)("div",{className:"raise-score-title",children:t["raise-score"]}),Object(f.jsxs)("div",{className:"button-link",children:[Object(f.jsx)(x.a,{block:!1,tip:t["staking-hover"],children:Object(f.jsx)("a",{tip:t["staking-hover"],href:"https://app.deri.finance/?locale=en#/mining/v2_lite/56/perpetual/AXSUSDT,MBOXUSDT,iBSCDEFI,iGAME,ALICEUSDT,AGLDUSDT/DERI/0x1a9b1B83C4592B9F315E933dF042F53D3e7E4819?symbolId=0",children:t.staking})}),Object(f.jsx)(x.a,{block:!1,tip:t["futures-hover"],children:Object(f.jsx)("a",{tip:t["futures-hover"],href:"https://app.deri.finance/#/futures/pro",children:t.futures})}),Object(f.jsx)(x.a,{block:!1,tip:t["options-hover"],children:Object(f.jsx)("a",{tip:t["options-hover"],href:"https://app.deri.finance/#/options/pro",children:t.options})})]}),Object(f.jsxs)("div",{className:"des",children:["Mining rewards are calculated based on traders' total points of the 4 quarters. In each quarter, all the participating traders share\xa0",Object(f.jsx)(x.a,{block:!1,tip:t["the-quater-points"],children:Object(f.jsx)("span",{className:"des-tip",tip:t["the-quarter-points"],children:"this quarter's points"})}),"\xa0 per their transaction fees multiplied by the\xa0",Object(f.jsx)(x.a,{block:!1,tip:t["boosting-factor"],children:Object(f.jsx)("span",{className:"des-tip",tip:t["boosting-factor"],children:"boosting factors"})}),"."]})]}),Object(f.jsx)("div",{className:"total-your-contrib",children:Object(f.jsxs)("div",{className:"your-contrib",children:[Object(f.jsxs)("div",{className:"stage",children:[Object(f.jsx)("div",{className:"stage-title"}),Object(f.jsx)("div",{className:"stage-title",children:"1st"}),Object(f.jsx)("div",{className:"stage-title",children:"2nd"}),Object(f.jsx)("div",{className:"stage-title",children:"3rd"}),Object(f.jsx)("div",{className:"stage-title",children:"4th"})]}),Object(f.jsxs)("div",{className:"total-score-box",children:[Object(f.jsx)("div",{className:"total-score",children:"Total Score"}),Object(f.jsx)("div",{className:"total-score",children:T.Q1Contrib?Object(f.jsx)(m.a,{value:T.Q1Contrib,decimalScale:2,thousandSeparator:!0}):"--"}),Object(f.jsx)("div",{className:"total-score",children:T.Q2Contrib?Object(f.jsx)(m.a,{value:T.Q2Contrib,decimalScale:2,thousandSeparator:!0}):"--"}),Object(f.jsx)("div",{className:"total-score",children:T.Q3Contrib&&"0"!==T.Q3Contrib?Object(f.jsx)(m.a,{value:T.Q3Contrib,decimalScale:2,thousandSeparator:!0}):"--"}),Object(f.jsx)("div",{className:"total-score",children:T.Q4Contrib&&"0"!==T.Q3Contrib?Object(f.jsx)(m.a,{value:T.Q4Contrib,decimalScale:2,thousandSeparator:!0}):"--"})]}),Object(f.jsxs)("div",{className:"your-score-box",children:[Object(f.jsx)("div",{className:"your-score",children:"Your Score"}),Object(f.jsx)("div",{className:"your-score",children:T.userQ1Contrib?Object(f.jsx)(m.a,{value:T.userQ1Contrib,decimalScale:2,thousandSeparator:!0}):"--"}),Object(f.jsx)("div",{className:"your-score",children:T.userQ2Contrib?Object(f.jsx)(m.a,{value:T.userQ2Contrib,decimalScale:2,thousandSeparator:!0}):"--"}),Object(f.jsx)("div",{className:"your-score",children:T.userQ3Contrib&&"0"!==T.Q3Contrib?Object(f.jsx)(m.a,{value:T.userQ3Contrib,decimalScale:2,thousandSeparator:!0}):"--"}),Object(f.jsx)("div",{className:"your-score",children:T.userQ4Contrib&&"0"!==T.Q4Contrib?Object(f.jsx)(m.a,{value:T.userQ4Contrib,decimalScale:2,thousandSeparator:!0}):"--"})]}),Object(f.jsxs)("div",{className:"your-point-box",children:[Object(f.jsx)("div",{className:"your-point",children:"Your Points"}),Object(f.jsx)("div",{className:"your-point",children:T.userQ1Point?Object(f.jsx)(x.a,{block:!1,children:Object(f.jsx)("span",{className:"point-hover",tip:T.userQ1Point?` = (${T.userQ1Contrib} / ${T.Q1Contrib}) * 10,000`:"",children:Object(f.jsx)(m.a,{value:T.userQ1Point,decimalScale:2,thousandSeparator:!0})})}):"--"}),Object(f.jsx)("div",{className:"your-point",children:T.userQ2Point?Object(f.jsx)(x.a,{block:!1,children:Object(f.jsx)("span",{className:"point-hover",tip:T.userQ1Point?` = (${T.userQ2Contrib} / ${T.Q1Contrib}) * 20,000`:"",children:Object(f.jsx)(m.a,{value:T.userQ2Point,decimalScale:2,thousandSeparator:!0})})}):"--"}),Object(f.jsx)("div",{className:"your-point",children:T.userQ3Point&&"0"!==T.Q3Contrib?Object(f.jsx)(m.a,{value:T.userQ3Point,decimalScale:2,thousandSeparator:!0}):"--"}),Object(f.jsx)("div",{className:"your-point",children:T.userQ4Point&&"0"!==T.Q4Contrib?Object(f.jsx)(m.a,{value:T.userQ4Point,decimalScale:2,thousandSeparator:!0}):"--"})]})]})})]})]})}),Object(f.jsx)("div",{className:"mobile-list",children:Object(f.jsx)("div",{className:"trading-top-list",children:Object(f.jsxs)("div",{className:"your-rewards",children:[Object(f.jsxs)("div",{className:"your-estimated-rewards",children:[Object(f.jsxs)("div",{className:"your-rewards-title",children:[t["your-rstimated-rewards"],Object(f.jsxs)("div",{className:"share-twitter",onClick:L,children:[Object(f.jsx)("span",{children:Object(f.jsx)("img",{src:j})}),Object(f.jsx)("button",{children:"SHARE"})]})]}),Object(f.jsx)("div",{className:"your-rewards-info",children:Object(f.jsxs)("div",{className:"your-deri",children:[Object(f.jsx)("img",{src:b.a}),Object(f.jsxs)("span",{className:"span",children:[" $ ",O?Object(f.jsx)(m.a,{value:O,thousandSeparator:!0,decimalScale:2}):"--"," "]})]})})]}),Object(f.jsxs)("div",{className:"your-score-fee-coeff",children:[Object(f.jsxs)("div",{className:"your-score",children:[Object(f.jsx)("div",{className:"your-score-title",children:Object(f.jsx)(x.a,{block:!1,children:Object(f.jsx)("span",{tip:"estimated points based on your current weights",children:t["your-scored"]})})}),Object(f.jsx)("div",{className:"your-score-num",children:y?Object(f.jsx)(m.a,{decimalScale:2,value:y,thousandSeparator:!0}):"--"})]}),Object(f.jsxs)("div",{className:"your-fee",children:[Object(f.jsx)("div",{className:"your-fee-title",children:Object(f.jsx)(x.a,{block:!1,children:Object(f.jsx)("span",{tip:"Fees paid by trading Perpetual futures in Main & Inno Zone or Everlasting Options on BSC",children:t["your-fees-paid"]})})}),Object(f.jsxs)("div",{className:"your-fee-num",children:["$  ",w?Object(f.jsx)(m.a,{value:w,decimalScale:4,thousandSeparator:!0}):"--"]})]}),Object(f.jsxs)("div",{className:"your-coeff",children:[Object(f.jsx)("div",{className:"your-coeff-title",children:Object(f.jsx)(x.a,{block:!1,children:Object(f.jsx)("span",{tip:t["boosting-factor"],children:t["your-coeff"]})})}),Object(f.jsx)("div",{className:"your-coeff-num",children:k?Object(f.jsx)(m.a,{decimalScale:2,value:k,thousandSeparator:!0}):"--"})]})]}),Object(f.jsx)("div",{className:"total-your-contrib",children:Object(f.jsxs)("div",{className:"your-contrib",children:[Object(f.jsxs)("div",{className:"stage",children:[Object(f.jsx)("div",{className:"stage-title"}),Object(f.jsx)("div",{className:"stage-title",children:"1st"}),Object(f.jsx)("div",{className:"stage-title",children:"2nd"}),Object(f.jsx)("div",{className:"stage-title",children:"3rd"}),Object(f.jsx)("div",{className:"stage-title",children:"4th"})]}),Object(f.jsxs)("div",{className:"total-score-box",children:[Object(f.jsx)("div",{className:"total-score",children:"Total Score"}),Object(f.jsx)("div",{className:"total-score",children:T.Q1Contrib?Object(f.jsx)(m.a,{value:T.Q1Contrib,decimalScale:0,thousandSeparator:!0}):"--"}),Object(f.jsx)("div",{className:"total-score",children:T.Q2Contrib?Object(f.jsx)(m.a,{value:T.Q2Contrib,decimalScale:0,thousandSeparator:!0}):"--"}),Object(f.jsx)("div",{className:"total-score",children:T.Q3Contrib&&"0"!==T.Q3Contrib?Object(f.jsx)(m.a,{value:T.Q3Contrib,decimalScale:0,thousandSeparator:!0}):"--"}),Object(f.jsx)("div",{className:"total-score",children:T.Q4Contrib&&"0"!==T.Q3Contrib?Object(f.jsx)(m.a,{value:T.Q4Contrib,decimalScale:0,thousandSeparator:!0}):"--"})]}),Object(f.jsxs)("div",{className:"your-score-box",children:[Object(f.jsx)("div",{className:"your-score",children:"Your Score"}),Object(f.jsx)("div",{className:"your-score",children:T.userQ1Contrib?Object(f.jsx)(m.a,{value:T.userQ1Contrib,decimalScale:0,thousandSeparator:!0}):"--"}),Object(f.jsx)("div",{className:"your-score",children:T.userQ2Contrib?Object(f.jsx)(m.a,{value:T.userQ2Contrib,decimalScale:0,thousandSeparator:!0}):"--"}),Object(f.jsx)("div",{className:"your-score",children:T.userQ3Contrib&&"0"!==T.Q3Contrib?Object(f.jsx)(m.a,{value:T.userQ3Contrib,decimalScale:0,thousandSeparator:!0}):"--"}),Object(f.jsx)("div",{className:"your-score",children:T.userQ4Contrib&&"0"!==T.Q4Contrib?Object(f.jsx)(m.a,{value:T.userQ4Contrib,decimalScale:2,thousandSeparator:!0}):"--"})]}),Object(f.jsxs)("div",{className:"your-point-box",children:[Object(f.jsx)("div",{className:"your-point",children:"Your Points"}),Object(f.jsx)("div",{className:"your-point",children:T.userQ1Point?Object(f.jsx)(x.a,{block:!1,children:Object(f.jsx)("span",{className:"point-hover",tip:T.userQ1Point?`= (${T.userQ1Contrib} / ${T.Q1Contrib}) * 10,000`:"",children:Object(f.jsx)(m.a,{value:T.userQ1Point,decimalScale:2,thousandSeparator:!0})})}):"--"}),Object(f.jsx)("div",{className:"your-point",children:T.userQ2Point?Object(f.jsx)(x.a,{block:!1,children:Object(f.jsx)("span",{className:"point-hover",tip:T.userQ1Point?`= (${T.userQ2Contrib} / ${T.Q1Contrib}) * 20,000`:"",children:Object(f.jsx)(m.a,{value:T.userQ2Point,decimalScale:2,thousandSeparator:!0})})}):"--"}),Object(f.jsx)("div",{className:"your-point",children:T.userQ3Point&&"0"!==T.Q3Contrib?Object(f.jsx)(m.a,{value:T.userQ3Point,decimalScale:0,thousandSeparator:!0}):"--"}),Object(f.jsx)("div",{className:"your-point",children:T.userQ4Point&&"0"!==T.Q4Contrib?Object(f.jsx)(m.a,{value:T.userQ4Point,decimalScale:0,thousandSeparator:!0}):"--"})]})]})}),Object(f.jsxs)("div",{className:"raise-score",children:[Object(f.jsx)("div",{className:"raise-score-title",children:t["raise-score"]}),Object(f.jsxs)("div",{className:"button-link",children:[Object(f.jsx)(x.a,{block:!1,tip:t["staking-hover"],children:Object(f.jsx)("a",{tip:t["staking-hover"],href:"https://app.deri.finance/#/mining/v2_lite/56/perpetual/AXSUSDT,MBOXUSDT,iBSCDEFI,iGAME,ALICEUSDT,AGLDUSDT/DERI/0x1a9b1B83C4592B9F315E933dF042F53D3e7E4819?symbolId=0",children:t.staking})}),Object(f.jsx)(x.a,{block:!1,tip:t["futures-hover"],children:Object(f.jsx)("a",{tip:t["futures-hover"],href:"https://app.deri.finance/#/futures/pro",children:t.futures})}),Object(f.jsx)(x.a,{block:!1,tip:t["options-hover"],children:Object(f.jsx)("a",{tip:t["options-hover"],href:"https://app.deri.finance/#/options/pro",children:t.options})})]}),Object(f.jsxs)("div",{className:"des",children:["Mining rewards are calculated based on traders' total points of the 4 quarters. In each quarter, all the participating traders share\xa0",Object(f.jsx)(x.a,{block:!1,tip:t["the-quater-points"],children:Object(f.jsx)("span",{className:"des-tip",tip:t["the-quater-points"],children:"this quarter's points"})}),"\xa0 per their transaction fees multiplied by the\xa0",Object(f.jsx)(x.a,{block:!1,tip:t["boosting-factor"],children:Object(f.jsx)("span",{className:"des-tip",tip:t["boosting-factor"],children:"boosting factors"})}),"."]})]}),Object(f.jsx)("div",{className:"totalpoints",children:Object(f.jsxs)("div",{className:"dial",children:[Object(f.jsxs)("div",{className:"total-points",children:[Object(f.jsx)("span",{children:t.totalpoints}),Object(f.jsx)("span",{children:" 110,000 "})]}),Object(f.jsxs)("div",{className:"dial-box",children:[Object(f.jsxs)("div",{className:"dial-box-info",children:[Object(f.jsx)("div",{className:"dial-box-info-title",children:t["the-first"]}),Object(f.jsx)("div",{className:"dial-box-info-time",children:t["the-first-time"]}),Object(f.jsx)("div",{className:"dial-box-info-points",children:t["the-first-points"]})]}),Object(f.jsx)("div",{className:"add",children:Object(f.jsx)("img",{src:h.a})}),Object(f.jsxs)("div",{className:"dial-box-info",children:[Object(f.jsx)("div",{className:"dial-box-info-title",children:t["the-second"]}),Object(f.jsx)("div",{className:"dial-box-info-time",children:t["the-second-time"]}),Object(f.jsx)("div",{className:"dial-box-info-points",children:t["the-second-points"]})]}),Object(f.jsx)("div",{className:"add",children:Object(f.jsx)("img",{src:h.a})}),Object(f.jsxs)("div",{className:"dial-box-info",children:[Object(f.jsx)("div",{className:"dial-box-info-title",children:t["the-third"]}),Object(f.jsx)("div",{className:"dial-box-info-time",children:t["the-third-time"]}),Object(f.jsx)("div",{className:"dial-box-info-points",children:t["the-third-points"]})]}),Object(f.jsx)("div",{className:"add",children:Object(f.jsx)("img",{src:h.a})}),Object(f.jsxs)("div",{className:"dial-box-info",children:[Object(f.jsx)("div",{className:"dial-box-info-title fourth",children:t["the-fourth"]}),Object(f.jsx)("div",{className:"dial-box-info-time",children:t["the-fourth-time"]}),Object(f.jsx)("div",{className:"dial-box-info-points",children:t["the-fourth-points"]})]})]})]})}),Object(f.jsxs)("div",{className:"list",children:[Object(f.jsx)("div",{className:"list-title",children:t["top-ten-users"]}),Object(f.jsxs)("div",{className:"list-box",children:[Object(f.jsxs)("div",{className:"list-box-title",children:[Object(f.jsx)("span",{className:"no",children:t.no}),Object(f.jsx)("span",{className:"address",children:t["user-addr"]}),Object(f.jsx)("span",{className:"feespaid",children:t["fees-paid"]}),Object(f.jsx)(x.a,{block:!1,children:Object(f.jsx)("span",{className:"score score-hover",tip:" estimated points based on the current weights",children:t.score})})]}),Object(f.jsx)("div",{className:"list-info",children:I.map(((e,t)=>Object(f.jsxs)("div",{className:"list-info-box",children:[Object(f.jsxs)("div",{className:"no",children:[1===e.no&&Object(f.jsx)("img",{src:o}),2===e.no&&Object(f.jsx)("img",{src:l}),3===e.no&&Object(f.jsx)("img",{src:d}),1!==e.no&&2!==e.no&&3!==e.no&&e.no]}),Object(f.jsx)("div",{className:"address",children:e.userAddr}),Object(f.jsxs)("div",{className:"feespaid",children:["$ ",Object(f.jsx)(m.a,{value:e.feesPaid,decimalScale:4,thousandSeparator:!0})]}),Object(f.jsx)("div",{className:"score",children:Object(f.jsx)(m.a,{decimalScale:2,value:e.score,thousandSeparator:!0})})]},t)))})]})]})]})})}),Object(f.jsx)("div",{className:"activity-rules",children:Object(f.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://deri-protocol.medium.com/trade-to-earn-with-deri-protocol-on-bsc-1cedc8f98e95",children:t["detailed-rules"]})})]})})))},948:function(e,t,s){"use strict";s.d(t,"a",(function(){return h}));var a=s(6),r=(s(733),s(935),s(49)),i=s(4),c=s(5),n=function(){function e(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"flipdown",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(Object(i.a)(this,e),"number"!==typeof t)throw new Error("FlipDown: Constructor expected unix timestamp, got ".concat(Object(r.a)(t)," instead."));"object"===Object(r.a)(s)&&(a=s,s="flipdown"),this.version="0.3.2",this.initialised=!1,this.now=this._getTime(),this.epoch=t,this.countdownEnded=!1,this.hasEndedCallback=null,this.element=document.getElementById(s),this.rotors=[],this.rotorLeafFront=[],this.rotorLeafRear=[],this.rotorTops=[],this.rotorBottoms=[],this.countdown=null,this.daysRemaining=0,this.clockValues={},this.clockStrings={},this.clockValuesAsString=[],this.prevClockValuesAsString=[],this.opts=this._parseOptions(a),this._setOptions(),console.log("FlipDown ".concat(this.version," (Theme: ").concat(this.opts.theme,")"))}return Object(c.a)(e,[{key:"start",value:function(){return this.initialised||this._init(),this.countdown=setInterval(this._tick.bind(this),1e3),this}},{key:"ifEnded",value:function(e){return this.hasEndedCallback=function(){e(),this.hasEndedCallback=null},this}},{key:"_getTime",value:function(){return(new Date).getTime()/1e3}},{key:"_hasCountdownEnded",value:function(){return this.epoch-this.now<0?(this.countdownEnded=!0,null!=this.hasEndedCallback&&(this.hasEndedCallback(),this.hasEndedCallback=null),!0):(this.countdownEnded=!1,!1)}},{key:"_parseOptions",value:function(e){var t=["Days","Hours","Minutes","Seconds"];return e.headings&&4===e.headings.length&&(t=e.headings),{theme:e.hasOwnProperty("theme")?e.theme:"dark",headings:t}}},{key:"_setOptions",value:function(){this.element.classList.add("flipdown__theme-".concat(this.opts.theme))}},{key:"_init",value:function(){this.initialised=!0,this._hasCountdownEnded()?this.daysremaining=0:this.daysremaining=Math.floor((this.epoch-this.now)/86400).toString().length;for(var e=this.daysremaining<=2?2:this.daysremaining,t=0;t<e+6;t++)this.rotors.push(this._createRotor(0));var s=[];for(t=0;t<e;t++)s.push(this.rotors[t]);this.element.appendChild(this._createRotorGroup(s,0));var a=e;for(t=0;t<3;t++){for(var r=[],i=0;i<2;i++)r.push(this.rotors[a]),a++;this.element.appendChild(this._createRotorGroup(r,t+1))}return this.rotorLeafFront=Array.prototype.slice.call(this.element.getElementsByClassName("rotor-leaf-front")),this.rotorLeafRear=Array.prototype.slice.call(this.element.getElementsByClassName("rotor-leaf-rear")),this.rotorTop=Array.prototype.slice.call(this.element.getElementsByClassName("rotor-top")),this.rotorBottom=Array.prototype.slice.call(this.element.getElementsByClassName("rotor-bottom")),this._tick(),this._updateClockValues(!0),this}},{key:"_createRotorGroup",value:function(e,t){var s=document.createElement("div");s.className="rotor-group";var a=document.createElement("div");return a.className="rotor-group-heading",a.setAttribute("data-before",this.opts.headings[t]),l(s,e),s.appendChild(a),s}},{key:"_createRotor",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=document.createElement("div"),s=document.createElement("div"),a=document.createElement("figure"),r=document.createElement("figure"),i=document.createElement("div"),c=document.createElement("div");return t.className="rotor",s.className="rotor-leaf",a.className="rotor-leaf-rear",r.className="rotor-leaf-front",i.className="rotor-top",c.className="rotor-bottom",a.textContent=e,i.textContent=e,c.textContent=e,l(t,[s,i,c]),l(s,[a,r]),t}},{key:"_tick",value:function(){this.now=this._getTime();var e=this.epoch-this.now<=0?0:this.epoch-this.now;this.clockValues.d=Math.floor(e/86400),e-=86400*this.clockValues.d,this.clockValues.h=Math.floor(e/3600),e-=3600*this.clockValues.h,this.clockValues.m=Math.floor(e/60),e-=60*this.clockValues.m,this.clockValues.s=Math.floor(e),this._updateClockValues(),this._hasCountdownEnded()}},{key:"_updateClockValues",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];function s(){var e=this;this.rotorTop.forEach((function(t,s){t.textContent!=e.clockValuesAsString[s]&&(t.textContent=e.clockValuesAsString[s])}))}function a(){var e=this;this.rotorLeafRear.forEach((function(t,s){if(t.textContent!=e.clockValuesAsString[s]){t.textContent=e.clockValuesAsString[s],t.parentElement.classList.add("flipped");var a=setInterval(function(){t.parentElement.classList.remove("flipped"),clearInterval(a)}.bind(e),500)}}))}this.clockStrings.d=o(this.clockValues.d,2),this.clockStrings.h=o(this.clockValues.h,2),this.clockStrings.m=o(this.clockValues.m,2),this.clockStrings.s=o(this.clockValues.s,2),this.clockValuesAsString=(this.clockStrings.d+this.clockStrings.h+this.clockStrings.m+this.clockStrings.s).split(""),this.rotorLeafFront.forEach((function(t,s){t.textContent=e.prevClockValuesAsString[s]})),this.rotorBottom.forEach((function(t,s){t.textContent=e.prevClockValuesAsString[s]})),t?(s.call(this),a.call(this)):(setTimeout(s.bind(this),500),setTimeout(a.bind(this),500)),this.prevClockValuesAsString=this.clockValuesAsString}}]),e}();function o(e,t){return(e=e.toString()).length<t?o("0"+e,t):e}function l(e,t){t.forEach((function(t){e.appendChild(t)}))}var d=s(20);function h(e){var t=e.lastTimestamp,s=(e.lang,e.onEnd);return Object(a.useEffect)((function(){new n(t,{theme:"light"}).start().ifEnded((function(){s&&s()}))}),[t]),Object(d.jsxs)("div",{className:"count-down",children:[Object(d.jsx)("div",{className:"tip",children:"Time to Start"}),Object(d.jsx)("div",{id:"flipdown",class:"flipdown"})]})}}}]);
//# sourceMappingURL=25.5396d88c.chunk.js.map