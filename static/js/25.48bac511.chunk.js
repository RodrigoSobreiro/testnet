(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[25],{1375:function(e,t,s){},1413:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return u}));var a=s(13),c=s(8),r=s(707),i=s.n(r),n=s(941),o=s(932),l=s(929),d=(s(1375),s(20));function u(e){var t=e.lang,s=i.a.utc("2021-10-13 10:00:00"),r=Object(c.useState)(!!s.isBefore(i.a.utc())),u=Object(a.a)(r,2),h=u[0],j=u[1];return Object(d.jsxs)("div",{className:"trading-mining",children:[Object(d.jsx)("div",{className:"title",children:t.title}),Object(d.jsx)("div",{className:"count-down-box",style:{display:h?"none":"block"},children:Object(d.jsx)(n.a,{lang:t,onEnd:function(){return j(!0)},lastTimestamp:s.unix()})}),Object(d.jsx)("div",{className:"staking",children:Object(d.jsx)(l.a,{lang:t})}),Object(d.jsx)("div",{className:"trading",children:Object(d.jsx)(o.a,{lang:t})})]})}},646:function(e,t,s){"use strict";s.d(t,"a",(function(){return l}));var a=s(0),c=s.n(a),r=s(1),i=s(13),n=s(8),o=s(20);function l(e){var t=e.btnText,s=e.className,a=e.disabled,l=e.click,d=e.afterClick,u=e.checkApprove,h=e.wallet,j=e.spec,b=e.lang,m=Object(n.useState)(a?"disabled":"enabled"),p=Object(i.a)(m,2),x=p[0],v=p[1],O=Object(n.useState)(!0),f=Object(i.a)(O,2),g=f[0],N=f[1],y=Object(n.useState)(!1),S=Object(i.a)(y,2),w=S[0],C=S[1],k=Object(n.useState)(t),E=Object(i.a)(k,2),B=E[0],Q=E[1],A=Object(n.useRef)(null),T=function(){var e=Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===x){e.next=2;break}return e.abrupt("return");case 2:return P(),e.next=5,l();case 5:e.sent&&d&&d(),I();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){v("disabled"),C(!0),A.current&&(A.current.style.display="inline-block")},I=function(){A.current&&(A.current.style.display="none"),v("enabled"),C(!1)},R=function(){var e=Object(r.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(u&&h&&h.detail.account)){e.next=5;break}return e.next=3,h.isApproved(j.pool,j.bTokenId);case 3:t=e.sent,N(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P(),e.next=3,h.approve(j.pool,j.bTokenId);case 3:e.sent.success?N(!0):(N(!1),alert(b["approve-failed"])),I();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){return R(),function(){}}),[h,j,u]),Object(n.useEffect)((function(){return t&&Q(t),function(){}}),[t]),Object(o.jsxs)("button",{className:s,onClick:function(){g?T():_()},children:[Object(o.jsx)("span",{className:"btn-loading-wrap",children:Object(o.jsx)("span",{ref:A,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),w?b.pending:g?B:b.approve]})}},648:function(e,t,s){"use strict";s.d(t,"a",(function(){return u}));var a=s(55),c=s(49),r=s(655),i=s(13),n=s(8),o=s(654),l=s(20),d=["allowZero"];function u(e){var t=Object(n.useState)(Object(l.jsx)("span",{className:"loading-line"})),s=Object(i.a)(t,2),u=s[0],h=s[1];return Object(n.useEffect)((function(){var t=e.allowZero,s=Object(r.a)(e,d);return("object"!==Object(c.a)(e.value)&&void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t)&&h(Object(l.jsx)(o.a,Object(a.a)(Object(a.a)({},s),{},{displayType:"text"}))),function(){}}),[e.value]),u}},657:function(e,t,s){"use strict";var a=s(8),c=s(20);t.a=function(e){var t=Object(a.useRef)(null);return Object(a.useEffect)((function(){var e=t.current;e&&e.querySelectorAll("[tip]").forEach((function(t){var s=null;t.addEventListener("mouseover",(function(e){var t=e.currentTarget.getAttribute("tip");if(t){var a="hover-box-".concat((new Date).getTime());s=document.body.querySelector("#".concat(a)),(s=document.createElement("div")).style.cssText="z-index : 9;min-width : 100px;max-width : ".concat(window.screen.width,"px ;font-size : 12px ;position : absolute;background-color: #2c2d31;border: 1px solid #AAAAAA;color: #AAAAAA;border-radius: 10px;padding: 4px;"),document.body.appendChild(s),s.innerText=t,s.id=a,s.style.display="block";var c=e.currentTarget.getBoundingClientRect();if(s.style.top="".concat(c.y+c.height+window.document.documentElement.scrollTop,"px"),s.offsetWidth+e.pageX>window.screen.width)if(e.pageX-s.offsetWidth>=0)s.style.left="".concat(e.pageX-s.offsetWidth,"px");else{var r=e.pageX-s.offsetWidth/2>0?e.pageX-s.offsetWidth/2:0;s.style.left="".concat(r,"px")}else s.style.left="".concat(e.pageX,"px")}})),e.addEventListener("mouseout",(function(e){s&&s.remove()}))}));return function(){t.current=null}}),[e.title]),e.block?Object(c.jsx)("div",{ref:t,children:e.children}):Object(c.jsx)("span",{ref:t,children:e.children})}},767:function(e,t,s){"use strict";s.p},768:function(e,t,s){"use strict";t.a=s.p+"static/media/deri.a495df32.svg"},800:function(e,t,s){"use strict";t.a=s.p+"static/media/add.2af0f559.svg"},928:function(e,t,s){},929:function(e,t,s){"use strict";s.d(t,"a",(function(){return r}));s(8),s(767);var a=s(768),c=s(20);function r(e){var t=e.lang;return Object(c.jsx)("div",{className:"rewards-bnb-deri",children:Object(c.jsxs)("div",{className:"deri-total",children:[Object(c.jsx)("div",{className:"deri-title",children:t["transaction-sharing-pool"]}),Object(c.jsxs)("div",{className:"deri-num",children:[Object(c.jsx)("img",{src:a.a}),Object(c.jsx)("span",{children:"$ 1,000,000"})]})]})})}},932:function(e,t,s){"use strict";var a=s(0),c=s.n(a),r=s(1),i=s(13),n=s(8),o=s(48),l=s(162),d=s(668),u=s.n(d),h=(s(646),s.p+"static/media/one.eb877df8.svg"),j=s.p+"static/media/two.2f5178e8.svg",b=s.p+"static/media/three.39e0d731.svg",m=s(800),p=s.p+"static/media/twitter.e9987aeb.svg",x=s.p+"static/media/share.48478a95.png",v=(s(767),s(768)),O=s(648),f=s(28),g=s(657),N=s(1030),y=s.n(N),S=s(14),w=s(20);t.a=Object(o.b)("wallet","loading")(Object(o.c)((function(e){var t=e.wallet,s=e.lang,a=e.loading,o=Object(n.useState)(""),d=Object(i.a)(o,2),N=(d[0],d[1]),C=Object(n.useState)(""),k=Object(i.a)(C,2),E=k[0],B=k[1],Q=Object(n.useState)(""),A=Object(i.a)(Q,2),T=A[0],P=A[1],I=Object(n.useState)(""),R=Object(i.a)(I,2),_=R[0],D=R[1],V=Object(n.useState)(""),F=Object(i.a)(V,2),L=F[0],M=F[1],U=Object(n.useState)(""),q=Object(i.a)(U,2),X=(q[0],q[1],Object(n.useState)("")),$=Object(i.a)(X,2),G=($[0],$[1],Object(n.useState)({})),W=Object(i.a)(G,2),Y=W[0],Z=W[1],H=Object(n.useState)([]),z=Object(i.a)(H,2),J=z[0],K=z[1],ee=function(e){var t;switch(e){case 1:t="one";break;case 2:t="two";break;case 3:t="three";break;case 4:t="four";break;case 5:t="five";break;case 6:t="six";break;case 7:t="seven";break;case 8:t="eight";break;case 9:t="nine";break;case 10:t="ten"}return t},te=function(){var e=Object(r.a)(c.a.mark((function e(){var s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.S)(t.detail.account);case 2:s=e.sent,P(s.score),D(s.feePaid),M(s.coef);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),se=function(){var e=Object(r.a)(c.a.mark((function e(){var s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.R)(t.detail.account);case 2:(s=e.sent)&&Z(s);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ae=function(){var e=Object(r.a)(c.a.mark((function e(){var s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.T)(t.detail.account);case 2:s=e.sent,N(s.rewardBNB),B(s.rewardDERI);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ce=function(){var e=Object(r.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.M)();case 2:t=e.sent,a.loaded(),t&&(t=t.map((function(e,s){var a={};return a.no=e.no,e.userAddr=Object(f.g)(e.userAddr),a.userAddr=e.userAddr,a.feesPaid=e.feePaid,a.avgCoeff=e.evgCoeff,a.score=e.score,a.rewardBNB=e.rewardBNB,a.progress="".concat(ee(e.no),"-progress progress-box"),a.progressSlider=e.score/t[0].score*100,a})),K(t));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){a.loading();var e;return e=window.setInterval((function(){ce()}),3e4),ce(),function(){e&&clearInterval(e)}}),[]);var re=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"file",s=e.split(","),a=s[0].match(/:(.*?);/)[1],c=a.split("/")[1],r=atob(s[1]),i=r.length,n=new Uint8Array(i);i--;)n[i]=r.charCodeAt(i);return new File([n],"".concat(t,".").concat(c),{type:a})},ie=function(){var e=Object(r.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:E&&(t=document.getElementsByClassName("twitter-box")[0],y()(t,{allowTaint:!1,useCORS:!0}).then((function(e){var t=e.toDataURL("image/png"),s=re(t),a=new FormData;a.append("image",s);u.a.post("https://share.deri.finance/add_image?type=image",a).then((function(e){var t=e.data.data.url;l.isBrowser?window.open("https://twitter.com/intent/tweet?url=".concat(encodeURIComponent("https://share.deri.finance/?title=Trade%20to%20Earn&description=Total%20Rewards%20$1,000,000%20in%20DERI&image=".concat(t,"&target=").concat(encodeURIComponent("https://app.deri.finance/#/trade-to-earn"))))):window.location.href="https://twitter.com/intent/tweet?url=".concat(encodeURIComponent("https://share.deri.finance/?title=Trade%20to%20Earn&description=Total%20Rewards%20$1,000,000%20in%20DERI&image=".concat(t,"&target=").concat(encodeURIComponent("https://app.deri.finance/#/trade-to-earn"))))}))})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){var e;return e=window.setInterval((function(){t.isConnected()&&(ae(),te(),se())}),3e4),t.isConnected()&&(ae(),te(),se()),function(){e&&clearInterval(e)}}),[t.detail.account]),Object(n.useEffect)((function(){J.length>=10?(document.getElementsByClassName("ten-progress")[0].style.width="".concat(J[9].progressSlider,"%"),document.getElementsByClassName("nine-progress")[0].style.width="".concat(J[8].progressSlider,"%"),document.getElementsByClassName("eight-progress")[0].style.width="".concat(J[7].progressSlider,"%"),document.getElementsByClassName("seven-progress")[0].style.width="".concat(J[6].progressSlider,"%"),document.getElementsByClassName("six-progress")[0].style.width="".concat(J[5].progressSlider,"%"),document.getElementsByClassName("five-progress")[0].style.width="".concat(J[4].progressSlider,"%"),document.getElementsByClassName("four-progress")[0].style.width="".concat(J[3].progressSlider,"%"),document.getElementsByClassName("three-progress")[0].style.width="".concat(J[2].progressSlider,"%"),document.getElementsByClassName("two-progress")[0].style.width="".concat(J[1].progressSlider,"%")):J.length>=9?(document.getElementsByClassName("nine-progress")[0].style.width="".concat(J[8].progressSlider,"%"),document.getElementsByClassName("eight-progress")[0].style.width="".concat(J[7].progressSlider,"%"),document.getElementsByClassName("seven-progress")[0].style.width="".concat(J[6].progressSlider,"%"),document.getElementsByClassName("six-progress")[0].style.width="".concat(J[5].progressSlider,"%"),document.getElementsByClassName("five-progress")[0].style.width="".concat(J[4].progressSlider,"%"),document.getElementsByClassName("four-progress")[0].style.width="".concat(J[3].progressSlider,"%"),document.getElementsByClassName("three-progress")[0].style.width="".concat(J[2].progressSlider,"%"),document.getElementsByClassName("two-progress")[0].style.width="".concat(J[1].progressSlider,"%")):J.length>=8?(document.getElementsByClassName("eight-progress")[0].style.width="".concat(J[7].progressSlider,"%"),document.getElementsByClassName("seven-progress")[0].style.width="".concat(J[6].progressSlider,"%"),document.getElementsByClassName("six-progress")[0].style.width="".concat(J[5].progressSlider,"%"),document.getElementsByClassName("five-progress")[0].style.width="".concat(J[4].progressSlider,"%"),document.getElementsByClassName("four-progress")[0].style.width="".concat(J[3].progressSlider,"%"),document.getElementsByClassName("three-progress")[0].style.width="".concat(J[2].progressSlider,"%"),document.getElementsByClassName("two-progress")[0].style.width="".concat(J[1].progressSlider,"%")):J.length>=7?(document.getElementsByClassName("seven-progress")[0].style.width="".concat(J[6].progressSlider,"%"),document.getElementsByClassName("six-progress")[0].style.width="".concat(J[5].progressSlider,"%"),document.getElementsByClassName("five-progress")[0].style.width="".concat(J[4].progressSlider,"%"),document.getElementsByClassName("four-progress")[0].style.width="".concat(J[3].progressSlider,"%"),document.getElementsByClassName("three-progress")[0].style.width="".concat(J[2].progressSlider,"%"),document.getElementsByClassName("two-progress")[0].style.width="".concat(J[1].progressSlider,"%")):J.length>=6?(document.getElementsByClassName("six-progress")[0].style.width="".concat(J[5].progressSlider,"%"),document.getElementsByClassName("five-progress")[0].style.width="".concat(J[4].progressSlider,"%"),document.getElementsByClassName("four-progress")[0].style.width="".concat(J[3].progressSlider,"%"),document.getElementsByClassName("three-progress")[0].style.width="".concat(J[2].progressSlider,"%"),document.getElementsByClassName("two-progress")[0].style.width="".concat(J[1].progressSlider,"%")):J.length>=5?(document.getElementsByClassName("five-progress")[0].style.width="".concat(J[4].progressSlider,"%"),document.getElementsByClassName("four-progress")[0].style.width="".concat(J[3].progressSlider,"%"),document.getElementsByClassName("three-progress")[0].style.width="".concat(J[2].progressSlider,"%"),document.getElementsByClassName("two-progress")[0].style.width="".concat(J[1].progressSlider,"%")):J.length>=4?(document.getElementsByClassName("four-progress")[0].style.width="".concat(J[3].progressSlider,"%"),document.getElementsByClassName("three-progress")[0].style.width="".concat(J[2].progressSlider,"%"),document.getElementsByClassName("two-progress")[0].style.width="".concat(J[1].progressSlider,"%")):J.length>=3?(document.getElementsByClassName("three-progress")[0].style.width="".concat(J[2].progressSlider,"%"),document.getElementsByClassName("two-progress")[0].style.width="".concat(J[1].progressSlider,"%")):J.length>=2&&(document.getElementsByClassName("two-progress")[0].style.width="".concat(J[1].progressSlider,"%"))}),[J]),Object(w.jsxs)("div",{className:"trading-top",children:[Object(w.jsxs)("div",{className:"twitter-box",children:[Object(w.jsx)("img",{src:x}),Object(w.jsxs)("div",{className:"twitter-box-rewards",children:["$ ",E?Object(w.jsx)(O.a,{decimalScale:2,value:E,thousandSeparator:!0}):"0"]})]}),Object(w.jsx)("div",{className:"desktop-list",children:Object(w.jsxs)("div",{className:"trading-top-list",children:[Object(w.jsxs)("div",{className:"list",children:[Object(w.jsx)("div",{className:"list-title",children:s["top-ten-users"]}),Object(w.jsxs)("div",{className:"list-box",children:[Object(w.jsxs)("div",{className:"list-box-title",children:[Object(w.jsx)("span",{className:"no",children:s.no}),Object(w.jsx)("span",{className:"address",children:s["user-addr"]}),Object(w.jsx)("span",{className:"feespaid",children:s["fees-paid"]}),Object(w.jsx)("span",{className:"avgcoeff",children:s["avg-coeff"]}),Object(w.jsx)(g.a,{block:!1,children:Object(w.jsx)("span",{className:"score",tip:" estimated points based on the current weights",children:Object(w.jsx)("span",{className:"score-hover",children:s.score})})})]}),Object(w.jsx)("div",{className:"list-info",children:J.map((function(e,t){return Object(w.jsxs)("div",{className:"list-info-box",children:[Object(w.jsxs)("div",{className:"no",children:[1===e.no&&Object(w.jsx)("img",{src:h}),2===e.no&&Object(w.jsx)("img",{src:j}),3===e.no&&Object(w.jsx)("img",{src:b}),1!==e.no&&2!==e.no&&3!==e.no&&e.no]}),Object(w.jsx)("div",{className:"address",children:e.userAddr}),Object(w.jsxs)("div",{className:"feespaid",children:["$ ",Object(w.jsx)(O.a,{value:e.feesPaid,decimalScale:4,thousandSeparator:!0})]}),Object(w.jsx)("div",{className:"avgcoeff",children:Object(w.jsx)(O.a,{value:e.avgCoeff,decimalScale:4,thousandSeparator:!0})}),Object(w.jsx)("div",{className:"score",children:Object(w.jsx)(O.a,{value:e.score,decimalScale:2,thousandSeparator:!0})}),Object(w.jsx)("div",{className:"progress",children:Object(w.jsx)("div",{className:e.progress})})]},t)}))})]})]}),Object(w.jsxs)("div",{className:"your-rewards",children:[Object(w.jsxs)("div",{className:"your-estimated-rewards",children:[Object(w.jsxs)("div",{className:"your-rewards-title",children:[Object(w.jsx)("span",{className:"your-rewards-title-text",children:s["your-rstimated-rewards"]}),Object(w.jsxs)("div",{className:"share-twitter",onClick:ie,children:[Object(w.jsx)("span",{children:Object(w.jsx)("img",{src:p})}),Object(w.jsx)("button",{children:"SHARE"})]})]}),Object(w.jsx)("div",{className:"your-rewards-info",children:Object(w.jsxs)("div",{className:"your-deri",children:[Object(w.jsx)("img",{src:v.a}),Object(w.jsxs)("span",{className:"span",children:["$ ",E?Object(w.jsx)(O.a,{decimalScale:2,value:E,thousandSeparator:!0}):"--"," "]})]})})]}),Object(w.jsxs)("div",{className:"your-score-fee-coeff",children:[Object(w.jsxs)("div",{className:"your-score",children:[Object(w.jsx)("div",{className:"your-score-title",children:Object(w.jsx)(g.a,{block:!1,children:Object(w.jsx)("span",{tip:"estimated points based on your current weights",children:s["your-scored"]})})}),Object(w.jsx)("div",{className:"your-score-num",children:T?Object(w.jsx)(O.a,{value:T,decimalScale:2,thousandSeparator:!0}):"--"})]}),Object(w.jsxs)("div",{className:"your-fee",children:[Object(w.jsx)("div",{className:"your-fee-title",children:Object(w.jsx)(g.a,{block:!1,children:Object(w.jsx)("span",{tip:"Fees paid by trading Perpetual futures in Main & Inno Zone or Everlasting Options on BSC",children:s["your-fees-paid"]})})}),Object(w.jsxs)("div",{className:"your-fee-num",children:["$  ",_?Object(w.jsx)(O.a,{value:_,decimalScale:4,thousandSeparator:!0}):"--"]})]}),Object(w.jsxs)("div",{className:"your-coeff",children:[Object(w.jsx)("div",{className:"your-coeff-title",children:Object(w.jsx)(g.a,{block:!1,children:Object(w.jsx)("span",{tip:s["boosting-factor"],children:s["your-coeff"]})})}),Object(w.jsx)("div",{className:"your-coeff-num",children:L?Object(w.jsx)(O.a,{value:L,decimalScale:4,thousandSeparator:!0}):"--"})]})]}),Object(w.jsxs)("div",{className:"raise-score",children:[Object(w.jsx)("div",{className:"raise-score-title",children:s["raise-score"]}),Object(w.jsxs)("div",{className:"button-link",children:[Object(w.jsx)(g.a,{block:!1,tip:s["staking-hover"],children:Object(w.jsx)("a",{tip:s["staking-hover"],href:"https://app.deri.finance/?locale=en#/mining/v2_lite/56/perpetual/AXSUSDT,MBOXUSDT,iBSCDEFI,iGAME,ALICEUSDT,AGLDUSDT/DERI/0x1a9b1B83C4592B9F315E933dF042F53D3e7E4819?symbolId=0",children:s.staking})}),Object(w.jsx)(g.a,{block:!1,tip:s["futures-hover"],children:Object(w.jsx)("a",{tip:s["futures-hover"],href:"https://app.deri.finance/#/futures/pro",children:s.futures})}),Object(w.jsx)(g.a,{block:!1,tip:s["options-hover"],children:Object(w.jsx)("a",{tip:s["options-hover"],href:"https://app.deri.finance/#/options/pro",children:s.options})})]}),Object(w.jsxs)("div",{className:"des",children:["Mining rewards are calculated based on traders' total points of the 4 quarters. In each quarter, all the participating traders share\xa0",Object(w.jsx)(g.a,{block:!1,tip:s["the-quater-points"],children:Object(w.jsx)("span",{className:"des-tip",tip:s["the-quarter-points"],children:"this quarter's points"})}),"\xa0 per their transaction fees multiplied by the\xa0",Object(w.jsx)(g.a,{block:!1,tip:s["boosting-factor"],children:Object(w.jsx)("span",{className:"des-tip",tip:s["boosting-factor"],children:"boosting factors"})}),"."]})]}),Object(w.jsx)("div",{className:"total-your-contrib",children:Object(w.jsxs)("div",{className:"your-contrib",children:[Object(w.jsxs)("div",{className:"stage",children:[Object(w.jsx)("div",{className:"stage-title"}),Object(w.jsx)("div",{className:"stage-title",children:"1st"}),Object(w.jsx)("div",{className:"stage-title",children:"2nd"}),Object(w.jsx)("div",{className:"stage-title",children:"3rd"}),Object(w.jsx)("div",{className:"stage-title",children:"4th"})]}),Object(w.jsxs)("div",{className:"total-score-box",children:[Object(w.jsx)("div",{className:"total-score",children:"Total Score"}),Object(w.jsx)("div",{className:"total-score",children:Y.Q1Contrib?Object(w.jsx)(O.a,{value:Y.Q1Contrib,decimalScale:2,thousandSeparator:!0}):"--"}),Object(w.jsx)("div",{className:"total-score",children:Y.Q2Contrib?Object(w.jsx)(O.a,{value:Y.Q2Contrib,decimalScale:2,thousandSeparator:!0}):"--"}),Object(w.jsx)("div",{className:"total-score",children:Y.Q3Contrib&&"0"!==Y.Q3Contrib?Object(w.jsx)(O.a,{value:Y.Q3Contrib,decimalScale:2,thousandSeparator:!0}):"--"}),Object(w.jsx)("div",{className:"total-score",children:Y.Q4Contrib&&"0"!==Y.Q3Contrib?Object(w.jsx)(O.a,{value:Y.Q4Contrib,decimalScale:2,thousandSeparator:!0}):"--"})]}),Object(w.jsxs)("div",{className:"your-score-box",children:[Object(w.jsx)("div",{className:"your-score",children:"Your Score"}),Object(w.jsx)("div",{className:"your-score",children:Y.userQ1Contrib?Object(w.jsx)(O.a,{value:Y.userQ1Contrib,decimalScale:2,thousandSeparator:!0}):"--"}),Object(w.jsx)("div",{className:"your-score",children:Y.userQ2Contrib?Object(w.jsx)(O.a,{value:Y.userQ2Contrib,decimalScale:2,thousandSeparator:!0}):"--"}),Object(w.jsx)("div",{className:"your-score",children:Y.userQ3Contrib&&"0"!==Y.Q3Contrib?Object(w.jsx)(O.a,{value:Y.userQ3Contrib,decimalScale:2,thousandSeparator:!0}):"--"}),Object(w.jsx)("div",{className:"your-score",children:Y.userQ4Contrib&&"0"!==Y.Q4Contrib?Object(w.jsx)(O.a,{value:Y.userQ4Contrib,decimalScale:2,thousandSeparator:!0}):"--"})]}),Object(w.jsxs)("div",{className:"your-point-box",children:[Object(w.jsx)("div",{className:"your-point",children:"Your Points"}),Object(w.jsx)("div",{className:"your-point",children:Y.userQ1Point?Object(w.jsx)(g.a,{block:!1,children:Object(w.jsx)("span",{className:"point-hover",tip:Y.userQ1Point?" = (".concat(Y.userQ1Contrib," / ").concat(Y.Q1Contrib,") * 10,000"):"",children:Object(w.jsx)(O.a,{value:Y.userQ1Point,decimalScale:2,thousandSeparator:!0})})}):"--"}),Object(w.jsx)("div",{className:"your-point",children:Y.userQ2Point?Object(w.jsx)(g.a,{block:!1,children:Object(w.jsx)("span",{className:"point-hover",tip:Y.userQ1Point?" = (".concat(Y.userQ2Contrib," / ").concat(Y.Q1Contrib,") * 20,000"):"",children:Object(w.jsx)(O.a,{value:Y.userQ2Point,decimalScale:2,thousandSeparator:!0})})}):"--"}),Object(w.jsx)("div",{className:"your-point",children:Y.userQ3Point&&"0"!==Y.Q3Contrib?Object(w.jsx)(O.a,{value:Y.userQ3Point,decimalScale:2,thousandSeparator:!0}):"--"}),Object(w.jsx)("div",{className:"your-point",children:Y.userQ4Point&&"0"!==Y.Q4Contrib?Object(w.jsx)(O.a,{value:Y.userQ4Point,decimalScale:2,thousandSeparator:!0}):"--"})]})]})})]})]})}),Object(w.jsx)("div",{className:"mobile-list",children:Object(w.jsx)("div",{className:"trading-top-list",children:Object(w.jsxs)("div",{className:"your-rewards",children:[Object(w.jsxs)("div",{className:"your-estimated-rewards",children:[Object(w.jsxs)("div",{className:"your-rewards-title",children:[s["your-rstimated-rewards"],Object(w.jsxs)("div",{className:"share-twitter",onClick:ie,children:[Object(w.jsx)("span",{children:Object(w.jsx)("img",{src:p})}),Object(w.jsx)("button",{children:"SHARE"})]})]}),Object(w.jsx)("div",{className:"your-rewards-info",children:Object(w.jsxs)("div",{className:"your-deri",children:[Object(w.jsx)("img",{src:v.a}),Object(w.jsxs)("span",{className:"span",children:[" $ ",E?Object(w.jsx)(O.a,{value:E,thousandSeparator:!0,decimalScale:2}):"--"," "]})]})})]}),Object(w.jsxs)("div",{className:"your-score-fee-coeff",children:[Object(w.jsxs)("div",{className:"your-score",children:[Object(w.jsx)("div",{className:"your-score-title",children:Object(w.jsx)(g.a,{block:!1,children:Object(w.jsx)("span",{tip:"estimated points based on your current weights",children:s["your-scored"]})})}),Object(w.jsx)("div",{className:"your-score-num",children:T?Object(w.jsx)(O.a,{decimalScale:2,value:T,thousandSeparator:!0}):"--"})]}),Object(w.jsxs)("div",{className:"your-fee",children:[Object(w.jsx)("div",{className:"your-fee-title",children:Object(w.jsx)(g.a,{block:!1,children:Object(w.jsx)("span",{tip:"Fees paid by trading Perpetual futures in Main & Inno Zone or Everlasting Options on BSC",children:s["your-fees-paid"]})})}),Object(w.jsxs)("div",{className:"your-fee-num",children:["$  ",_?Object(w.jsx)(O.a,{value:_,decimalScale:4,thousandSeparator:!0}):"--"]})]}),Object(w.jsxs)("div",{className:"your-coeff",children:[Object(w.jsx)("div",{className:"your-coeff-title",children:Object(w.jsx)(g.a,{block:!1,children:Object(w.jsx)("span",{tip:s["boosting-factor"],children:s["your-coeff"]})})}),Object(w.jsx)("div",{className:"your-coeff-num",children:L?Object(w.jsx)(O.a,{decimalScale:2,value:L,thousandSeparator:!0}):"--"})]})]}),Object(w.jsx)("div",{className:"total-your-contrib",children:Object(w.jsxs)("div",{className:"your-contrib",children:[Object(w.jsxs)("div",{className:"stage",children:[Object(w.jsx)("div",{className:"stage-title"}),Object(w.jsx)("div",{className:"stage-title",children:"1st"}),Object(w.jsx)("div",{className:"stage-title",children:"2nd"}),Object(w.jsx)("div",{className:"stage-title",children:"3rd"}),Object(w.jsx)("div",{className:"stage-title",children:"4th"})]}),Object(w.jsxs)("div",{className:"total-score-box",children:[Object(w.jsx)("div",{className:"total-score",children:"Total Score"}),Object(w.jsx)("div",{className:"total-score",children:Y.Q1Contrib?Object(w.jsx)(O.a,{value:Y.Q1Contrib,decimalScale:0,thousandSeparator:!0}):"--"}),Object(w.jsx)("div",{className:"total-score",children:Y.Q2Contrib?Object(w.jsx)(O.a,{value:Y.Q2Contrib,decimalScale:0,thousandSeparator:!0}):"--"}),Object(w.jsx)("div",{className:"total-score",children:Y.Q3Contrib&&"0"!==Y.Q3Contrib?Object(w.jsx)(O.a,{value:Y.Q3Contrib,decimalScale:0,thousandSeparator:!0}):"--"}),Object(w.jsx)("div",{className:"total-score",children:Y.Q4Contrib&&"0"!==Y.Q3Contrib?Object(w.jsx)(O.a,{value:Y.Q4Contrib,decimalScale:0,thousandSeparator:!0}):"--"})]}),Object(w.jsxs)("div",{className:"your-score-box",children:[Object(w.jsx)("div",{className:"your-score",children:"Your Score"}),Object(w.jsx)("div",{className:"your-score",children:Y.userQ1Contrib?Object(w.jsx)(O.a,{value:Y.userQ1Contrib,decimalScale:0,thousandSeparator:!0}):"--"}),Object(w.jsx)("div",{className:"your-score",children:Y.userQ2Contrib?Object(w.jsx)(O.a,{value:Y.userQ2Contrib,decimalScale:0,thousandSeparator:!0}):"--"}),Object(w.jsx)("div",{className:"your-score",children:Y.userQ3Contrib&&"0"!==Y.Q3Contrib?Object(w.jsx)(O.a,{value:Y.userQ3Contrib,decimalScale:0,thousandSeparator:!0}):"--"}),Object(w.jsx)("div",{className:"your-score",children:Y.userQ4Contrib&&"0"!==Y.Q4Contrib?Object(w.jsx)(O.a,{value:Y.userQ4Contrib,decimalScale:2,thousandSeparator:!0}):"--"})]}),Object(w.jsxs)("div",{className:"your-point-box",children:[Object(w.jsx)("div",{className:"your-point",children:"Your Points"}),Object(w.jsx)("div",{className:"your-point",children:Y.userQ1Point?Object(w.jsx)(g.a,{block:!1,children:Object(w.jsx)("span",{className:"point-hover",tip:Y.userQ1Point?"= (".concat(Y.userQ1Contrib," / ").concat(Y.Q1Contrib,") * 10,000"):"",children:Object(w.jsx)(O.a,{value:Y.userQ1Point,decimalScale:2,thousandSeparator:!0})})}):"--"}),Object(w.jsx)("div",{className:"your-point",children:Y.userQ2Point?Object(w.jsx)(g.a,{block:!1,children:Object(w.jsx)("span",{className:"point-hover",tip:Y.userQ1Point?"= (".concat(Y.userQ2Contrib," / ").concat(Y.Q1Contrib,") * 20,000"):"",children:Object(w.jsx)(O.a,{value:Y.userQ2Point,decimalScale:2,thousandSeparator:!0})})}):"--"}),Object(w.jsx)("div",{className:"your-point",children:Y.userQ3Point&&"0"!==Y.Q3Contrib?Object(w.jsx)(O.a,{value:Y.userQ3Point,decimalScale:0,thousandSeparator:!0}):"--"}),Object(w.jsx)("div",{className:"your-point",children:Y.userQ4Point&&"0"!==Y.Q4Contrib?Object(w.jsx)(O.a,{value:Y.userQ4Point,decimalScale:0,thousandSeparator:!0}):"--"})]})]})}),Object(w.jsxs)("div",{className:"raise-score",children:[Object(w.jsx)("div",{className:"raise-score-title",children:s["raise-score"]}),Object(w.jsxs)("div",{className:"button-link",children:[Object(w.jsx)(g.a,{block:!1,tip:s["staking-hover"],children:Object(w.jsx)("a",{tip:s["staking-hover"],href:"https://app.deri.finance/#/mining/v2_lite/56/perpetual/AXSUSDT,MBOXUSDT,iBSCDEFI,iGAME,ALICEUSDT,AGLDUSDT/DERI/0x1a9b1B83C4592B9F315E933dF042F53D3e7E4819?symbolId=0",children:s.staking})}),Object(w.jsx)(g.a,{block:!1,tip:s["futures-hover"],children:Object(w.jsx)("a",{tip:s["futures-hover"],href:"https://app.deri.finance/#/futures/pro",children:s.futures})}),Object(w.jsx)(g.a,{block:!1,tip:s["options-hover"],children:Object(w.jsx)("a",{tip:s["options-hover"],href:"https://app.deri.finance/#/options/pro",children:s.options})})]}),Object(w.jsxs)("div",{className:"des",children:["Mining rewards are calculated based on traders' total points of the 4 quarters. In each quarter, all the participating traders share\xa0",Object(w.jsx)(g.a,{block:!1,tip:s["the-quater-points"],children:Object(w.jsx)("span",{className:"des-tip",tip:s["the-quater-points"],children:"this quarter's points"})}),"\xa0 per their transaction fees multiplied by the\xa0",Object(w.jsx)(g.a,{block:!1,tip:s["boosting-factor"],children:Object(w.jsx)("span",{className:"des-tip",tip:s["boosting-factor"],children:"boosting factors"})}),"."]})]}),Object(w.jsx)("div",{className:"totalpoints",children:Object(w.jsxs)("div",{className:"dial",children:[Object(w.jsxs)("div",{className:"total-points",children:[Object(w.jsx)("span",{children:s.totalpoints}),Object(w.jsx)("span",{children:" 110,000 "})]}),Object(w.jsxs)("div",{className:"dial-box",children:[Object(w.jsxs)("div",{className:"dial-box-info",children:[Object(w.jsx)("div",{className:"dial-box-info-title",children:s["the-first"]}),Object(w.jsx)("div",{className:"dial-box-info-time",children:s["the-first-time"]}),Object(w.jsx)("div",{className:"dial-box-info-points",children:s["the-first-points"]})]}),Object(w.jsx)("div",{className:"add",children:Object(w.jsx)("img",{src:m.a})}),Object(w.jsxs)("div",{className:"dial-box-info",children:[Object(w.jsx)("div",{className:"dial-box-info-title",children:s["the-second"]}),Object(w.jsx)("div",{className:"dial-box-info-time",children:s["the-second-time"]}),Object(w.jsx)("div",{className:"dial-box-info-points",children:s["the-second-points"]})]}),Object(w.jsx)("div",{className:"add",children:Object(w.jsx)("img",{src:m.a})}),Object(w.jsxs)("div",{className:"dial-box-info",children:[Object(w.jsx)("div",{className:"dial-box-info-title",children:s["the-third"]}),Object(w.jsx)("div",{className:"dial-box-info-time",children:s["the-third-time"]}),Object(w.jsx)("div",{className:"dial-box-info-points",children:s["the-third-points"]})]}),Object(w.jsx)("div",{className:"add",children:Object(w.jsx)("img",{src:m.a})}),Object(w.jsxs)("div",{className:"dial-box-info",children:[Object(w.jsx)("div",{className:"dial-box-info-title fourth",children:s["the-fourth"]}),Object(w.jsx)("div",{className:"dial-box-info-time",children:s["the-fourth-time"]}),Object(w.jsx)("div",{className:"dial-box-info-points",children:s["the-fourth-points"]})]})]})]})}),Object(w.jsxs)("div",{className:"list",children:[Object(w.jsx)("div",{className:"list-title",children:s["top-ten-users"]}),Object(w.jsxs)("div",{className:"list-box",children:[Object(w.jsxs)("div",{className:"list-box-title",children:[Object(w.jsx)("span",{className:"no",children:s.no}),Object(w.jsx)("span",{className:"address",children:s["user-addr"]}),Object(w.jsx)("span",{className:"feespaid",children:s["fees-paid"]}),Object(w.jsx)(g.a,{block:!1,children:Object(w.jsx)("span",{className:"score score-hover",tip:" estimated points based on the current weights",children:s.score})})]}),Object(w.jsx)("div",{className:"list-info",children:J.map((function(e,t){return Object(w.jsxs)("div",{className:"list-info-box",children:[Object(w.jsxs)("div",{className:"no",children:[1===e.no&&Object(w.jsx)("img",{src:h}),2===e.no&&Object(w.jsx)("img",{src:j}),3===e.no&&Object(w.jsx)("img",{src:b}),1!==e.no&&2!==e.no&&3!==e.no&&e.no]}),Object(w.jsx)("div",{className:"address",children:e.userAddr}),Object(w.jsxs)("div",{className:"feespaid",children:["$ ",Object(w.jsx)(O.a,{value:e.feesPaid,decimalScale:4,thousandSeparator:!0})]}),Object(w.jsx)("div",{className:"score",children:Object(w.jsx)(O.a,{decimalScale:2,value:e.score,thousandSeparator:!0})})]},t)}))})]})]})]})})}),Object(w.jsx)("div",{className:"activity-rules",children:Object(w.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://deri-protocol.medium.com/trade-to-earn-with-deri-protocol-on-bsc-1cedc8f98e95",children:s["detailed-rules"]})})]})})))},941:function(e,t,s){"use strict";s.d(t,"a",(function(){return u}));var a=s(8),c=(s(707),s(928),s(49)),r=s(2),i=s(3),n=function(){function e(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"flipdown",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(Object(r.a)(this,e),"number"!==typeof t)throw new Error("FlipDown: Constructor expected unix timestamp, got ".concat(Object(c.a)(t)," instead."));"object"===Object(c.a)(s)&&(a=s,s="flipdown"),this.version="0.3.2",this.initialised=!1,this.now=this._getTime(),this.epoch=t,this.countdownEnded=!1,this.hasEndedCallback=null,this.element=document.getElementById(s),this.rotors=[],this.rotorLeafFront=[],this.rotorLeafRear=[],this.rotorTops=[],this.rotorBottoms=[],this.countdown=null,this.daysRemaining=0,this.clockValues={},this.clockStrings={},this.clockValuesAsString=[],this.prevClockValuesAsString=[],this.opts=this._parseOptions(a),this._setOptions(),console.log("FlipDown ".concat(this.version," (Theme: ").concat(this.opts.theme,")"))}return Object(i.a)(e,[{key:"start",value:function(){return this.initialised||this._init(),this.countdown=setInterval(this._tick.bind(this),1e3),this}},{key:"ifEnded",value:function(e){return this.hasEndedCallback=function(){e(),this.hasEndedCallback=null},this}},{key:"_getTime",value:function(){return(new Date).getTime()/1e3}},{key:"_hasCountdownEnded",value:function(){return this.epoch-this.now<0?(this.countdownEnded=!0,null!=this.hasEndedCallback&&(this.hasEndedCallback(),this.hasEndedCallback=null),!0):(this.countdownEnded=!1,!1)}},{key:"_parseOptions",value:function(e){var t=["Days","Hours","Minutes","Seconds"];return e.headings&&4===e.headings.length&&(t=e.headings),{theme:e.hasOwnProperty("theme")?e.theme:"dark",headings:t}}},{key:"_setOptions",value:function(){this.element.classList.add("flipdown__theme-".concat(this.opts.theme))}},{key:"_init",value:function(){this.initialised=!0,this._hasCountdownEnded()?this.daysremaining=0:this.daysremaining=Math.floor((this.epoch-this.now)/86400).toString().length;for(var e=this.daysremaining<=2?2:this.daysremaining,t=0;t<e+6;t++)this.rotors.push(this._createRotor(0));var s=[];for(t=0;t<e;t++)s.push(this.rotors[t]);this.element.appendChild(this._createRotorGroup(s,0));var a=e;for(t=0;t<3;t++){for(var c=[],r=0;r<2;r++)c.push(this.rotors[a]),a++;this.element.appendChild(this._createRotorGroup(c,t+1))}return this.rotorLeafFront=Array.prototype.slice.call(this.element.getElementsByClassName("rotor-leaf-front")),this.rotorLeafRear=Array.prototype.slice.call(this.element.getElementsByClassName("rotor-leaf-rear")),this.rotorTop=Array.prototype.slice.call(this.element.getElementsByClassName("rotor-top")),this.rotorBottom=Array.prototype.slice.call(this.element.getElementsByClassName("rotor-bottom")),this._tick(),this._updateClockValues(!0),this}},{key:"_createRotorGroup",value:function(e,t){var s=document.createElement("div");s.className="rotor-group";var a=document.createElement("div");return a.className="rotor-group-heading",a.setAttribute("data-before",this.opts.headings[t]),l(s,e),s.appendChild(a),s}},{key:"_createRotor",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=document.createElement("div"),s=document.createElement("div"),a=document.createElement("figure"),c=document.createElement("figure"),r=document.createElement("div"),i=document.createElement("div");return t.className="rotor",s.className="rotor-leaf",a.className="rotor-leaf-rear",c.className="rotor-leaf-front",r.className="rotor-top",i.className="rotor-bottom",a.textContent=e,r.textContent=e,i.textContent=e,l(t,[s,r,i]),l(s,[a,c]),t}},{key:"_tick",value:function(){this.now=this._getTime();var e=this.epoch-this.now<=0?0:this.epoch-this.now;this.clockValues.d=Math.floor(e/86400),e-=86400*this.clockValues.d,this.clockValues.h=Math.floor(e/3600),e-=3600*this.clockValues.h,this.clockValues.m=Math.floor(e/60),e-=60*this.clockValues.m,this.clockValues.s=Math.floor(e),this._updateClockValues(),this._hasCountdownEnded()}},{key:"_updateClockValues",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];function s(){var e=this;this.rotorTop.forEach((function(t,s){t.textContent!=e.clockValuesAsString[s]&&(t.textContent=e.clockValuesAsString[s])}))}function a(){var e=this;this.rotorLeafRear.forEach((function(t,s){if(t.textContent!=e.clockValuesAsString[s]){t.textContent=e.clockValuesAsString[s],t.parentElement.classList.add("flipped");var a=setInterval(function(){t.parentElement.classList.remove("flipped"),clearInterval(a)}.bind(e),500)}}))}this.clockStrings.d=o(this.clockValues.d,2),this.clockStrings.h=o(this.clockValues.h,2),this.clockStrings.m=o(this.clockValues.m,2),this.clockStrings.s=o(this.clockValues.s,2),this.clockValuesAsString=(this.clockStrings.d+this.clockStrings.h+this.clockStrings.m+this.clockStrings.s).split(""),this.rotorLeafFront.forEach((function(t,s){t.textContent=e.prevClockValuesAsString[s]})),this.rotorBottom.forEach((function(t,s){t.textContent=e.prevClockValuesAsString[s]})),t?(s.call(this),a.call(this)):(setTimeout(s.bind(this),500),setTimeout(a.bind(this),500)),this.prevClockValuesAsString=this.clockValuesAsString}}]),e}();function o(e,t){return(e=e.toString()).length<t?o("0"+e,t):e}function l(e,t){t.forEach((function(t){e.appendChild(t)}))}var d=s(20);function u(e){var t=e.lastTimestamp,s=(e.lang,e.onEnd);return Object(a.useEffect)((function(){new n(t,{theme:"light"}).start().ifEnded((function(){s&&s()}))}),[t]),Object(d.jsxs)("div",{className:"count-down",children:[Object(d.jsx)("div",{className:"tip",children:"Time to Start"}),Object(d.jsx)("div",{id:"flipdown",class:"flipdown"})]})}}}]);
//# sourceMappingURL=25.48bac511.chunk.js.map