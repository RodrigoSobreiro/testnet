(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[11],{1040:function(e,t,s){"use strict";t.a=s.p+"static/media/add.2af0f559.svg"},1041:function(e,t,s){"use strict";s.p},1042:function(e,t,s){"use strict";t.a=s.p+"static/media/deri.a495df32.svg"},1043:function(e,t,s){"use strict";s.d(t,"a",(function(){return i}));s(8),s(1041);var a=s(1042),r=s(20);function i(e){var t=e.lang;return Object(r.jsx)("div",{className:"rewards-bnb-deri",children:Object(r.jsxs)("div",{className:"deri-total",children:[Object(r.jsx)("div",{className:"deri-title",children:t["transaction-sharing-pool"]}),Object(r.jsxs)("div",{className:"deri-num",children:[Object(r.jsx)("img",{src:a.a}),Object(r.jsx)("span",{children:"$ 1,000,000"})]})]})})}},1048:function(e,t,s){"use strict";var a=s(8),r=s(48),i=(s(645),s.p+"static/media/one.eb877df8.svg"),c=s.p+"static/media/two.2f5178e8.svg",n=s.p+"static/media/three.39e0d731.svg",o=s(1040),l=(s(1041),s(1042)),d=s(647),h=s(29),u=s(658),j=s(1348),b=s.n(j),m=s(15),p=s(20);t.a=Object(r.b)("wallet","loading")(Object(r.c)((function({wallet:e,lang:t,loading:s}){const[r,j]=Object(a.useState)(""),[x,v]=Object(a.useState)(""),[O,g]=Object(a.useState)(""),[f,N]=Object(a.useState)(""),[y,S]=Object(a.useState)(""),[w,C]=Object(a.useState)(""),[k,E]=Object(a.useState)(""),[B,Q]=Object(a.useState)({}),[$,A]=Object(a.useState)("https://mcdex.io/homepage/assets/static/twitter_20210515.jpg"),[T,_]=Object(a.useState)([]),P=async()=>{let t=await Object(m.S)(e.detail.account);g(t.score),N(t.feePaid),S(t.coef)},V=async()=>{let t=await Object(m.R)(e.detail.account);t&&Q(t)},D=async()=>{let t=await Object(m.T)(e.detail.account);j(t.rewardBNB),v(t.rewardDERI)},I=async()=>{let e=await Object(m.M)();s.loaded(),e&&(e=e.map(((t,s)=>{let a={};return a.no=t.no,t.userAddr=Object(h.g)(t.userAddr),a.userAddr=t.userAddr,a.feesPaid=t.feePaid,a.avgCoeff=t.evgCoeff,a.score=t.score,a.rewardBNB=t.rewardBNB,a.progress=`${(e=>{let t;switch(e){case 1:t="one";break;case 2:t="two";break;case 3:t="three";break;case 4:t="four";break;case 5:t="five";break;case 6:t="six";break;case 7:t="seven";break;case 8:t="eight";break;case 9:t="nine";break;case 10:t="ten"}return t})(t.no)}-progress progress-box`,a.progressSlider=t.score/e[0].score*100,a})),_(e))};return Object(a.useEffect)((()=>{s.loading();let e=null;return e=window.setInterval((()=>{I()}),3e4),I(),()=>{e&&clearInterval(e)}}),[]),Object(a.useEffect)((()=>{if(x){let e=document.getElementsByClassName("twitter-box")[0];b()(e,{allowTaint:!1,useCORS:!0}).then((e=>{let t=(e=>{let t=e.split(","),s=t[0].match(/:(.*?);/)[1],a=window.atob(t[1]),r=a.length,i=new Uint8Array(r);for(;r--;)i[r]=a.charCodeAt(r);return new Blob([i],{type:s})})(e.toDataURL("image/png"));console.log("img",t),(new FormData).append("file",t)}))}}),[x]),Object(a.useEffect)((()=>{let t=null;return t=window.setInterval((()=>{e.isConnected()&&(D(),P(),V())}),3e4),e.isConnected()&&(D(),P(),V()),()=>{t&&clearInterval(t)}}),[e.detail.account]),Object(a.useEffect)((()=>{T.length>=10?(document.getElementsByClassName("ten-progress")[0].style.width=`${T[9].progressSlider}%`,document.getElementsByClassName("nine-progress")[0].style.width=`${T[8].progressSlider}%`,document.getElementsByClassName("eight-progress")[0].style.width=`${T[7].progressSlider}%`,document.getElementsByClassName("seven-progress")[0].style.width=`${T[6].progressSlider}%`,document.getElementsByClassName("six-progress")[0].style.width=`${T[5].progressSlider}%`,document.getElementsByClassName("five-progress")[0].style.width=`${T[4].progressSlider}%`,document.getElementsByClassName("four-progress")[0].style.width=`${T[3].progressSlider}%`,document.getElementsByClassName("three-progress")[0].style.width=`${T[2].progressSlider}%`,document.getElementsByClassName("two-progress")[0].style.width=`${T[1].progressSlider}%`):T.length>=9?(document.getElementsByClassName("nine-progress")[0].style.width=`${T[8].progressSlider}%`,document.getElementsByClassName("eight-progress")[0].style.width=`${T[7].progressSlider}%`,document.getElementsByClassName("seven-progress")[0].style.width=`${T[6].progressSlider}%`,document.getElementsByClassName("six-progress")[0].style.width=`${T[5].progressSlider}%`,document.getElementsByClassName("five-progress")[0].style.width=`${T[4].progressSlider}%`,document.getElementsByClassName("four-progress")[0].style.width=`${T[3].progressSlider}%`,document.getElementsByClassName("three-progress")[0].style.width=`${T[2].progressSlider}%`,document.getElementsByClassName("two-progress")[0].style.width=`${T[1].progressSlider}%`):T.length>=8?(document.getElementsByClassName("eight-progress")[0].style.width=`${T[7].progressSlider}%`,document.getElementsByClassName("seven-progress")[0].style.width=`${T[6].progressSlider}%`,document.getElementsByClassName("six-progress")[0].style.width=`${T[5].progressSlider}%`,document.getElementsByClassName("five-progress")[0].style.width=`${T[4].progressSlider}%`,document.getElementsByClassName("four-progress")[0].style.width=`${T[3].progressSlider}%`,document.getElementsByClassName("three-progress")[0].style.width=`${T[2].progressSlider}%`,document.getElementsByClassName("two-progress")[0].style.width=`${T[1].progressSlider}%`):T.length>=7?(document.getElementsByClassName("seven-progress")[0].style.width=`${T[6].progressSlider}%`,document.getElementsByClassName("six-progress")[0].style.width=`${T[5].progressSlider}%`,document.getElementsByClassName("five-progress")[0].style.width=`${T[4].progressSlider}%`,document.getElementsByClassName("four-progress")[0].style.width=`${T[3].progressSlider}%`,document.getElementsByClassName("three-progress")[0].style.width=`${T[2].progressSlider}%`,document.getElementsByClassName("two-progress")[0].style.width=`${T[1].progressSlider}%`):T.length>=6?(document.getElementsByClassName("six-progress")[0].style.width=`${T[5].progressSlider}%`,document.getElementsByClassName("five-progress")[0].style.width=`${T[4].progressSlider}%`,document.getElementsByClassName("four-progress")[0].style.width=`${T[3].progressSlider}%`,document.getElementsByClassName("three-progress")[0].style.width=`${T[2].progressSlider}%`,document.getElementsByClassName("two-progress")[0].style.width=`${T[1].progressSlider}%`):T.length>=5?(document.getElementsByClassName("five-progress")[0].style.width=`${T[4].progressSlider}%`,document.getElementsByClassName("four-progress")[0].style.width=`${T[3].progressSlider}%`,document.getElementsByClassName("three-progress")[0].style.width=`${T[2].progressSlider}%`,document.getElementsByClassName("two-progress")[0].style.width=`${T[1].progressSlider}%`):T.length>=4?(document.getElementsByClassName("four-progress")[0].style.width=`${T[3].progressSlider}%`,document.getElementsByClassName("three-progress")[0].style.width=`${T[2].progressSlider}%`,document.getElementsByClassName("two-progress")[0].style.width=`${T[1].progressSlider}%`):T.length>=3?(document.getElementsByClassName("three-progress")[0].style.width=`${T[2].progressSlider}%`,document.getElementsByClassName("two-progress")[0].style.width=`${T[1].progressSlider}%`):T.length>=2&&(document.getElementsByClassName("two-progress")[0].style.width=`${T[1].progressSlider}%`)}),[T]),Object(p.jsxs)("div",{className:"trading-top",children:[Object(p.jsx)("div",{className:"twitter-box",children:Object(p.jsxs)("div",{className:"twitter-box-rewards",children:["$ ",x?Object(p.jsx)(d.a,{decimalScale:2,value:x,thousandSeparator:!0}):"0"]})}),Object(p.jsx)("div",{className:"desktop-list",children:Object(p.jsxs)("div",{className:"trading-top-list",children:[Object(p.jsxs)("div",{className:"list",children:[Object(p.jsx)("div",{className:"list-title",children:t["top-ten-users"]}),Object(p.jsxs)("div",{className:"list-box",children:[Object(p.jsxs)("div",{className:"list-box-title",children:[Object(p.jsx)("span",{className:"no",children:t.no}),Object(p.jsx)("span",{className:"address",children:t["user-addr"]}),Object(p.jsx)("span",{className:"feespaid",children:t["fees-paid"]}),Object(p.jsx)("span",{className:"avgcoeff",children:t["avg-coeff"]}),Object(p.jsx)(u.a,{block:!1,children:Object(p.jsx)("span",{className:"score",tip:" estimated points based on the current weights",children:Object(p.jsx)("span",{className:"score-hover",children:t.score})})})]}),Object(p.jsx)("div",{className:"list-info",children:T.map(((e,t)=>Object(p.jsxs)("div",{className:"list-info-box",children:[Object(p.jsxs)("div",{className:"no",children:[1===e.no&&Object(p.jsx)("img",{src:i}),2===e.no&&Object(p.jsx)("img",{src:c}),3===e.no&&Object(p.jsx)("img",{src:n}),1!==e.no&&2!==e.no&&3!==e.no&&e.no]}),Object(p.jsx)("div",{className:"address",children:e.userAddr}),Object(p.jsxs)("div",{className:"feespaid",children:["$ ",Object(p.jsx)(d.a,{value:e.feesPaid,decimalScale:4,thousandSeparator:!0})]}),Object(p.jsx)("div",{className:"avgcoeff",children:Object(p.jsx)(d.a,{value:e.avgCoeff,decimalScale:4,thousandSeparator:!0})}),Object(p.jsx)("div",{className:"score",children:Object(p.jsx)(d.a,{value:e.score,decimalScale:2,thousandSeparator:!0})}),Object(p.jsx)("div",{className:"progress",children:Object(p.jsx)("div",{className:e.progress})})]},t)))})]})]}),Object(p.jsxs)("div",{className:"your-rewards",children:[Object(p.jsxs)("div",{className:"your-estimated-rewards",children:[Object(p.jsxs)("div",{className:"your-rewards-title",children:[t["your-rstimated-rewards"],Object(p.jsx)("a",{target:"_blank",rel:"noreferrer",href:`https://share.deri.finance/?title=${t.title}&description=Total Rewards $1,000,000 in DERI&image=${$}&target=https://app.deri.finance/#/trade-to-earn`,class:"twitter-share-button",children:"Tweet"})]}),Object(p.jsx)("div",{className:"your-rewards-info",children:Object(p.jsxs)("div",{className:"your-deri",children:[Object(p.jsx)("img",{src:l.a}),Object(p.jsxs)("span",{className:"span",children:["$ ",x?Object(p.jsx)(d.a,{decimalScale:2,value:x,thousandSeparator:!0}):"--"," "]})]})})]}),Object(p.jsxs)("div",{className:"your-score-fee-coeff",children:[Object(p.jsxs)("div",{className:"your-score",children:[Object(p.jsx)("div",{className:"your-score-title",children:Object(p.jsx)(u.a,{block:!1,children:Object(p.jsx)("span",{tip:"estimated points based on your current weights",children:t["your-scored"]})})}),Object(p.jsx)("div",{className:"your-score-num",children:O?Object(p.jsx)(d.a,{value:O,decimalScale:2,thousandSeparator:!0}):"--"})]}),Object(p.jsxs)("div",{className:"your-fee",children:[Object(p.jsx)("div",{className:"your-fee-title",children:Object(p.jsx)(u.a,{block:!1,children:Object(p.jsx)("span",{tip:"Fees paid by trading Perpetual futures in Main & Inno Zone or Everlasting Options on BSC",children:t["your-fees-paid"]})})}),Object(p.jsxs)("div",{className:"your-fee-num",children:["$  ",f?Object(p.jsx)(d.a,{value:f,decimalScale:4,thousandSeparator:!0}):"--"]})]}),Object(p.jsxs)("div",{className:"your-coeff",children:[Object(p.jsx)("div",{className:"your-coeff-title",children:Object(p.jsx)(u.a,{block:!1,children:Object(p.jsx)("span",{tip:t["boosting-factor"],children:t["your-coeff"]})})}),Object(p.jsx)("div",{className:"your-coeff-num",children:y?Object(p.jsx)(d.a,{value:y,decimalScale:4,thousandSeparator:!0}):"--"})]})]}),Object(p.jsxs)("div",{className:"raise-score",children:[Object(p.jsx)("div",{className:"raise-score-title",children:t["raise-score"]}),Object(p.jsxs)("div",{className:"button-link",children:[Object(p.jsx)(u.a,{block:!1,tip:t["staking-hover"],children:Object(p.jsx)("a",{tip:t["staking-hover"],href:"https://app.deri.finance/?locale=en#/mining/v2_lite/56/perpetual/AXSUSDT,MBOXUSDT,iBSCDEFI,iGAME,ALICEUSDT,AGLDUSDT/DERI/0x1a9b1B83C4592B9F315E933dF042F53D3e7E4819?symbolId=0",children:t.staking})}),Object(p.jsx)(u.a,{block:!1,tip:t["futures-hover"],children:Object(p.jsx)("a",{tip:t["futures-hover"],href:"https://app.deri.finance/#/futures/pro",children:t.futures})}),Object(p.jsx)(u.a,{block:!1,tip:t["options-hover"],children:Object(p.jsx)("a",{tip:t["options-hover"],href:"https://app.deri.finance/#/options/pro",children:t.options})})]}),Object(p.jsxs)("div",{className:"des",children:["Mining rewards are calculated based on traders' total points of the 4 quarters. In each quarter, all the participating traders share\xa0",Object(p.jsx)(u.a,{block:!1,tip:t["the-quater-points"],children:Object(p.jsx)("span",{className:"des-tip",tip:t["the-quarter-points"],children:"this quarter's points"})}),"\xa0 per their transaction fees multiplied by the\xa0",Object(p.jsx)(u.a,{block:!1,tip:t["boosting-factor"],children:Object(p.jsx)("span",{className:"des-tip",tip:t["boosting-factor"],children:"boosting factors"})}),"."]})]}),Object(p.jsx)("div",{className:"total-your-contrib",children:Object(p.jsxs)("div",{className:"your-contrib",children:[Object(p.jsxs)("div",{className:"stage",children:[Object(p.jsx)("div",{className:"stage-title"}),Object(p.jsx)("div",{className:"stage-title",children:"1st"}),Object(p.jsx)("div",{className:"stage-title",children:"2nd"}),Object(p.jsx)("div",{className:"stage-title",children:"3rd"}),Object(p.jsx)("div",{className:"stage-title",children:"4th"})]}),Object(p.jsxs)("div",{className:"total-score-box",children:[Object(p.jsx)("div",{className:"total-score",children:"Total Score"}),Object(p.jsx)("div",{className:"total-score",children:B.Q1Contrib?Object(p.jsx)(d.a,{value:B.Q1Contrib,decimalScale:2,thousandSeparator:!0}):"--"}),Object(p.jsx)("div",{className:"total-score",children:B.Q2Contrib?Object(p.jsx)(d.a,{value:B.Q2Contrib,decimalScale:2,thousandSeparator:!0}):"--"}),Object(p.jsx)("div",{className:"total-score",children:B.Q3Contrib&&"0"!==B.Q3Contrib?Object(p.jsx)(d.a,{value:B.Q3Contrib,decimalScale:2,thousandSeparator:!0}):"--"}),Object(p.jsx)("div",{className:"total-score",children:B.Q4Contrib&&"0"!==B.Q3Contrib?Object(p.jsx)(d.a,{value:B.Q4Contrib,decimalScale:2,thousandSeparator:!0}):"--"})]}),Object(p.jsxs)("div",{className:"your-score-box",children:[Object(p.jsx)("div",{className:"your-score",children:"Your Score"}),Object(p.jsx)("div",{className:"your-score",children:B.userQ1Contrib?Object(p.jsx)(d.a,{value:B.userQ1Contrib,decimalScale:2,thousandSeparator:!0}):"--"}),Object(p.jsx)("div",{className:"your-score",children:B.userQ2Contrib?Object(p.jsx)(d.a,{value:B.userQ2Contrib,decimalScale:2,thousandSeparator:!0}):"--"}),Object(p.jsx)("div",{className:"your-score",children:B.userQ3Contrib&&"0"!==B.Q3Contrib?Object(p.jsx)(d.a,{value:B.userQ3Contrib,decimalScale:2,thousandSeparator:!0}):"--"}),Object(p.jsx)("div",{className:"your-score",children:B.userQ4Contrib&&"0"!==B.Q4Contrib?Object(p.jsx)(d.a,{value:B.userQ4Contrib,decimalScale:2,thousandSeparator:!0}):"--"})]}),Object(p.jsxs)("div",{className:"your-point-box",children:[Object(p.jsx)("div",{className:"your-point",children:"Your Points"}),Object(p.jsx)("div",{className:"your-point",children:B.userQ1Point?Object(p.jsx)(u.a,{block:!1,children:Object(p.jsx)("span",{className:"point-hover",tip:B.userQ1Point?` = (${B.userQ1Contrib} / ${B.Q1Contrib}) * 10,000`:"",children:Object(p.jsx)(d.a,{value:B.userQ1Point,decimalScale:2,thousandSeparator:!0})})}):"--"}),Object(p.jsx)("div",{className:"your-point",children:B.userQ2Point?Object(p.jsx)(u.a,{block:!1,children:Object(p.jsx)("span",{className:"point-hover",tip:B.userQ1Point?` = (${B.userQ2Contrib} / ${B.Q1Contrib}) * 20,000`:"",children:Object(p.jsx)(d.a,{value:B.userQ2Point,decimalScale:2,thousandSeparator:!0})})}):"--"}),Object(p.jsx)("div",{className:"your-point",children:B.userQ3Point&&"0"!==B.Q3Contrib?Object(p.jsx)(d.a,{value:B.userQ3Point,decimalScale:2,thousandSeparator:!0}):"--"}),Object(p.jsx)("div",{className:"your-point",children:B.userQ4Point&&"0"!==B.Q4Contrib?Object(p.jsx)(d.a,{value:B.userQ4Point,decimalScale:2,thousandSeparator:!0}):"--"})]})]})})]})]})}),Object(p.jsx)("div",{className:"mobile-list",children:Object(p.jsx)("div",{className:"trading-top-list",children:Object(p.jsxs)("div",{className:"your-rewards",children:[Object(p.jsxs)("div",{className:"your-estimated-rewards",children:[Object(p.jsxs)("div",{className:"your-rewards-title",children:[t["your-rstimated-rewards"],Object(p.jsx)("a",{href:"https://twitter.com/share?ref_src=twsrc%5Etfw",class:"twitter-share-button","data-show-count":"false",children:"Tweet"})]}),Object(p.jsx)("div",{className:"your-rewards-info",children:Object(p.jsxs)("div",{className:"your-deri",children:[Object(p.jsx)("img",{src:l.a}),Object(p.jsxs)("span",{className:"span",children:[" $ ",x?Object(p.jsx)(d.a,{value:x,thousandSeparator:!0,decimalScale:2}):"--"," "]})]})})]}),Object(p.jsxs)("div",{className:"your-score-fee-coeff",children:[Object(p.jsxs)("div",{className:"your-score",children:[Object(p.jsx)("div",{className:"your-score-title",children:Object(p.jsx)(u.a,{block:!1,children:Object(p.jsx)("span",{tip:"estimated points based on your current weights",children:t["your-scored"]})})}),Object(p.jsx)("div",{className:"your-score-num",children:O?Object(p.jsx)(d.a,{decimalScale:2,value:O,thousandSeparator:!0}):"--"})]}),Object(p.jsxs)("div",{className:"your-fee",children:[Object(p.jsx)("div",{className:"your-fee-title",children:Object(p.jsx)(u.a,{block:!1,children:Object(p.jsx)("span",{tip:"Fees paid by trading Perpetual futures in Main & Inno Zone or Everlasting Options on BSC",children:t["your-fees-paid"]})})}),Object(p.jsxs)("div",{className:"your-fee-num",children:["$  ",f?Object(p.jsx)(d.a,{value:f,decimalScale:4,thousandSeparator:!0}):"--"]})]}),Object(p.jsxs)("div",{className:"your-coeff",children:[Object(p.jsx)("div",{className:"your-coeff-title",children:Object(p.jsx)(u.a,{block:!1,children:Object(p.jsx)("span",{tip:t["boosting-factor"],children:t["your-coeff"]})})}),Object(p.jsx)("div",{className:"your-coeff-num",children:y?Object(p.jsx)(d.a,{decimalScale:2,value:y,thousandSeparator:!0}):"--"})]})]}),Object(p.jsx)("div",{className:"total-your-contrib",children:Object(p.jsxs)("div",{className:"your-contrib",children:[Object(p.jsxs)("div",{className:"stage",children:[Object(p.jsx)("div",{className:"stage-title"}),Object(p.jsx)("div",{className:"stage-title",children:"1st"}),Object(p.jsx)("div",{className:"stage-title",children:"2nd"}),Object(p.jsx)("div",{className:"stage-title",children:"3rd"}),Object(p.jsx)("div",{className:"stage-title",children:"4th"})]}),Object(p.jsxs)("div",{className:"total-score-box",children:[Object(p.jsx)("div",{className:"total-score",children:"Total Score"}),Object(p.jsx)("div",{className:"total-score",children:B.Q1Contrib?Object(p.jsx)(d.a,{value:B.Q1Contrib,decimalScale:0,thousandSeparator:!0}):"--"}),Object(p.jsx)("div",{className:"total-score",children:B.Q2Contrib?Object(p.jsx)(d.a,{value:B.Q2Contrib,decimalScale:0,thousandSeparator:!0}):"--"}),Object(p.jsx)("div",{className:"total-score",children:B.Q3Contrib&&"0"!==B.Q3Contrib?Object(p.jsx)(d.a,{value:B.Q3Contrib,decimalScale:0,thousandSeparator:!0}):"--"}),Object(p.jsx)("div",{className:"total-score",children:B.Q4Contrib&&"0"!==B.Q3Contrib?Object(p.jsx)(d.a,{value:B.Q4Contrib,decimalScale:0,thousandSeparator:!0}):"--"})]}),Object(p.jsxs)("div",{className:"your-score-box",children:[Object(p.jsx)("div",{className:"your-score",children:"Your Score"}),Object(p.jsx)("div",{className:"your-score",children:B.userQ1Contrib?Object(p.jsx)(d.a,{value:B.userQ1Contrib,decimalScale:0,thousandSeparator:!0}):"--"}),Object(p.jsx)("div",{className:"your-score",children:B.userQ2Contrib?Object(p.jsx)(d.a,{value:B.userQ2Contrib,decimalScale:0,thousandSeparator:!0}):"--"}),Object(p.jsx)("div",{className:"your-score",children:B.userQ3Contrib&&"0"!==B.Q3Contrib?Object(p.jsx)(d.a,{value:B.userQ3Contrib,decimalScale:0,thousandSeparator:!0}):"--"}),Object(p.jsx)("div",{className:"your-score",children:B.userQ4Contrib&&"0"!==B.Q4Contrib?Object(p.jsx)(d.a,{value:B.userQ4Contrib,decimalScale:2,thousandSeparator:!0}):"--"})]}),Object(p.jsxs)("div",{className:"your-point-box",children:[Object(p.jsx)("div",{className:"your-point",children:"Your Points"}),Object(p.jsx)("div",{className:"your-point",children:B.userQ1Point?Object(p.jsx)(u.a,{block:!1,children:Object(p.jsx)("span",{className:"point-hover",tip:B.userQ1Point?`= (${B.userQ1Contrib} / ${B.Q1Contrib}) * 10,000`:"",children:Object(p.jsx)(d.a,{value:B.userQ1Point,decimalScale:2,thousandSeparator:!0})})}):"--"}),Object(p.jsx)("div",{className:"your-point",children:B.userQ2Point?Object(p.jsx)(u.a,{block:!1,children:Object(p.jsx)("span",{className:"point-hover",tip:B.userQ1Point?`= (${B.userQ2Contrib} / ${B.Q1Contrib}) * 20,000`:"",children:Object(p.jsx)(d.a,{value:B.userQ2Point,decimalScale:2,thousandSeparator:!0})})}):"--"}),Object(p.jsx)("div",{className:"your-point",children:B.userQ3Point&&"0"!==B.Q3Contrib?Object(p.jsx)(d.a,{value:B.userQ3Point,decimalScale:0,thousandSeparator:!0}):"--"}),Object(p.jsx)("div",{className:"your-point",children:B.userQ4Point&&"0"!==B.Q4Contrib?Object(p.jsx)(d.a,{value:B.userQ4Point,decimalScale:0,thousandSeparator:!0}):"--"})]})]})}),Object(p.jsxs)("div",{className:"raise-score",children:[Object(p.jsx)("div",{className:"raise-score-title",children:t["raise-score"]}),Object(p.jsxs)("div",{className:"button-link",children:[Object(p.jsx)(u.a,{block:!1,tip:t["staking-hover"],children:Object(p.jsx)("a",{tip:t["staking-hover"],href:"https://app.deri.finance/#/mining/v2_lite/56/perpetual/AXSUSDT,MBOXUSDT,iBSCDEFI,iGAME,ALICEUSDT,AGLDUSDT/DERI/0x1a9b1B83C4592B9F315E933dF042F53D3e7E4819?symbolId=0",children:t.staking})}),Object(p.jsx)(u.a,{block:!1,tip:t["futures-hover"],children:Object(p.jsx)("a",{tip:t["futures-hover"],href:"https://app.deri.finance/#/futures/pro",children:t.futures})}),Object(p.jsx)(u.a,{block:!1,tip:t["options-hover"],children:Object(p.jsx)("a",{tip:t["options-hover"],href:"https://app.deri.finance/#/options/pro",children:t.options})})]}),Object(p.jsxs)("div",{className:"des",children:["Mining rewards are calculated based on traders' total points of the 4 quarters. In each quarter, all the participating traders share\xa0",Object(p.jsx)(u.a,{block:!1,tip:t["the-quater-points"],children:Object(p.jsx)("span",{className:"des-tip",tip:t["the-quater-points"],children:"this quarter's points"})}),"\xa0 per their transaction fees multiplied by the\xa0",Object(p.jsx)(u.a,{block:!1,tip:t["boosting-factor"],children:Object(p.jsx)("span",{className:"des-tip",tip:t["boosting-factor"],children:"boosting factors"})}),"."]})]}),Object(p.jsx)("div",{className:"totalpoints",children:Object(p.jsxs)("div",{className:"dial",children:[Object(p.jsxs)("div",{className:"total-points",children:[Object(p.jsx)("span",{children:t.totalpoints}),Object(p.jsx)("span",{children:" 110,000 "})]}),Object(p.jsxs)("div",{className:"dial-box",children:[Object(p.jsxs)("div",{className:"dial-box-info",children:[Object(p.jsx)("div",{className:"dial-box-info-title",children:t["the-first"]}),Object(p.jsx)("div",{className:"dial-box-info-time",children:t["the-first-time"]}),Object(p.jsx)("div",{className:"dial-box-info-points",children:t["the-first-points"]})]}),Object(p.jsx)("div",{className:"add",children:Object(p.jsx)("img",{src:o.a})}),Object(p.jsxs)("div",{className:"dial-box-info",children:[Object(p.jsx)("div",{className:"dial-box-info-title",children:t["the-second"]}),Object(p.jsx)("div",{className:"dial-box-info-time",children:t["the-second-time"]}),Object(p.jsx)("div",{className:"dial-box-info-points",children:t["the-second-points"]})]}),Object(p.jsx)("div",{className:"add",children:Object(p.jsx)("img",{src:o.a})}),Object(p.jsxs)("div",{className:"dial-box-info",children:[Object(p.jsx)("div",{className:"dial-box-info-title",children:t["the-third"]}),Object(p.jsx)("div",{className:"dial-box-info-time",children:t["the-third-time"]}),Object(p.jsx)("div",{className:"dial-box-info-points",children:t["the-third-points"]})]}),Object(p.jsx)("div",{className:"add",children:Object(p.jsx)("img",{src:o.a})}),Object(p.jsxs)("div",{className:"dial-box-info",children:[Object(p.jsx)("div",{className:"dial-box-info-title fourth",children:t["the-fourth"]}),Object(p.jsx)("div",{className:"dial-box-info-time",children:t["the-fourth-time"]}),Object(p.jsx)("div",{className:"dial-box-info-points",children:t["the-fourth-points"]})]})]})]})}),Object(p.jsxs)("div",{className:"list",children:[Object(p.jsx)("div",{className:"list-title",children:t["top-ten-users"]}),Object(p.jsxs)("div",{className:"list-box",children:[Object(p.jsxs)("div",{className:"list-box-title",children:[Object(p.jsx)("span",{className:"no",children:t.no}),Object(p.jsx)("span",{className:"address",children:t["user-addr"]}),Object(p.jsx)("span",{className:"feespaid",children:t["fees-paid"]}),Object(p.jsx)(u.a,{block:!1,children:Object(p.jsx)("span",{className:"score score-hover",tip:" estimated points based on the current weights",children:t.score})})]}),Object(p.jsx)("div",{className:"list-info",children:T.map(((e,t)=>Object(p.jsxs)("div",{className:"list-info-box",children:[Object(p.jsxs)("div",{className:"no",children:[1===e.no&&Object(p.jsx)("img",{src:i}),2===e.no&&Object(p.jsx)("img",{src:c}),3===e.no&&Object(p.jsx)("img",{src:n}),1!==e.no&&2!==e.no&&3!==e.no&&e.no]}),Object(p.jsx)("div",{className:"address",children:e.userAddr}),Object(p.jsxs)("div",{className:"feespaid",children:["$ ",Object(p.jsx)(d.a,{value:e.feesPaid,decimalScale:4,thousandSeparator:!0})]}),Object(p.jsx)("div",{className:"score",children:Object(p.jsx)(d.a,{decimalScale:2,value:e.score,thousandSeparator:!0})})]},t)))})]})]})]})})}),Object(p.jsx)("div",{className:"activity-rules",children:Object(p.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://deri-protocol.medium.com/trade-to-earn-with-deri-protocol-on-bsc-1cedc8f98e95",children:t["detailed-rules"]})})]})})))},1051:function(e,t,s){"use strict";s.d(t,"a",(function(){return h}));var a=s(8),r=(s(748),s(1347),s(49)),i=s(2),c=s(3),n=function(){function e(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"flipdown",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(Object(i.a)(this,e),"number"!==typeof t)throw new Error("FlipDown: Constructor expected unix timestamp, got ".concat(Object(r.a)(t)," instead."));"object"===Object(r.a)(s)&&(a=s,s="flipdown"),this.version="0.3.2",this.initialised=!1,this.now=this._getTime(),this.epoch=t,this.countdownEnded=!1,this.hasEndedCallback=null,this.element=document.getElementById(s),this.rotors=[],this.rotorLeafFront=[],this.rotorLeafRear=[],this.rotorTops=[],this.rotorBottoms=[],this.countdown=null,this.daysRemaining=0,this.clockValues={},this.clockStrings={},this.clockValuesAsString=[],this.prevClockValuesAsString=[],this.opts=this._parseOptions(a),this._setOptions(),console.log("FlipDown ".concat(this.version," (Theme: ").concat(this.opts.theme,")"))}return Object(c.a)(e,[{key:"start",value:function(){return this.initialised||this._init(),this.countdown=setInterval(this._tick.bind(this),1e3),this}},{key:"ifEnded",value:function(e){return this.hasEndedCallback=function(){e(),this.hasEndedCallback=null},this}},{key:"_getTime",value:function(){return(new Date).getTime()/1e3}},{key:"_hasCountdownEnded",value:function(){return this.epoch-this.now<0?(this.countdownEnded=!0,null!=this.hasEndedCallback&&(this.hasEndedCallback(),this.hasEndedCallback=null),!0):(this.countdownEnded=!1,!1)}},{key:"_parseOptions",value:function(e){var t=["Days","Hours","Minutes","Seconds"];return e.headings&&4===e.headings.length&&(t=e.headings),{theme:e.hasOwnProperty("theme")?e.theme:"dark",headings:t}}},{key:"_setOptions",value:function(){this.element.classList.add("flipdown__theme-".concat(this.opts.theme))}},{key:"_init",value:function(){this.initialised=!0,this._hasCountdownEnded()?this.daysremaining=0:this.daysremaining=Math.floor((this.epoch-this.now)/86400).toString().length;for(var e=this.daysremaining<=2?2:this.daysremaining,t=0;t<e+6;t++)this.rotors.push(this._createRotor(0));var s=[];for(t=0;t<e;t++)s.push(this.rotors[t]);this.element.appendChild(this._createRotorGroup(s,0));var a=e;for(t=0;t<3;t++){for(var r=[],i=0;i<2;i++)r.push(this.rotors[a]),a++;this.element.appendChild(this._createRotorGroup(r,t+1))}return this.rotorLeafFront=Array.prototype.slice.call(this.element.getElementsByClassName("rotor-leaf-front")),this.rotorLeafRear=Array.prototype.slice.call(this.element.getElementsByClassName("rotor-leaf-rear")),this.rotorTop=Array.prototype.slice.call(this.element.getElementsByClassName("rotor-top")),this.rotorBottom=Array.prototype.slice.call(this.element.getElementsByClassName("rotor-bottom")),this._tick(),this._updateClockValues(!0),this}},{key:"_createRotorGroup",value:function(e,t){var s=document.createElement("div");s.className="rotor-group";var a=document.createElement("div");return a.className="rotor-group-heading",a.setAttribute("data-before",this.opts.headings[t]),l(s,e),s.appendChild(a),s}},{key:"_createRotor",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=document.createElement("div"),s=document.createElement("div"),a=document.createElement("figure"),r=document.createElement("figure"),i=document.createElement("div"),c=document.createElement("div");return t.className="rotor",s.className="rotor-leaf",a.className="rotor-leaf-rear",r.className="rotor-leaf-front",i.className="rotor-top",c.className="rotor-bottom",a.textContent=e,i.textContent=e,c.textContent=e,l(t,[s,i,c]),l(s,[a,r]),t}},{key:"_tick",value:function(){this.now=this._getTime();var e=this.epoch-this.now<=0?0:this.epoch-this.now;this.clockValues.d=Math.floor(e/86400),e-=86400*this.clockValues.d,this.clockValues.h=Math.floor(e/3600),e-=3600*this.clockValues.h,this.clockValues.m=Math.floor(e/60),e-=60*this.clockValues.m,this.clockValues.s=Math.floor(e),this._updateClockValues(),this._hasCountdownEnded()}},{key:"_updateClockValues",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];function s(){var e=this;this.rotorTop.forEach((function(t,s){t.textContent!=e.clockValuesAsString[s]&&(t.textContent=e.clockValuesAsString[s])}))}function a(){var e=this;this.rotorLeafRear.forEach((function(t,s){if(t.textContent!=e.clockValuesAsString[s]){t.textContent=e.clockValuesAsString[s],t.parentElement.classList.add("flipped");var a=setInterval(function(){t.parentElement.classList.remove("flipped"),clearInterval(a)}.bind(e),500)}}))}this.clockStrings.d=o(this.clockValues.d,2),this.clockStrings.h=o(this.clockValues.h,2),this.clockStrings.m=o(this.clockValues.m,2),this.clockStrings.s=o(this.clockValues.s,2),this.clockValuesAsString=(this.clockStrings.d+this.clockStrings.h+this.clockStrings.m+this.clockStrings.s).split(""),this.rotorLeafFront.forEach((function(t,s){t.textContent=e.prevClockValuesAsString[s]})),this.rotorBottom.forEach((function(t,s){t.textContent=e.prevClockValuesAsString[s]})),t?(s.call(this),a.call(this)):(setTimeout(s.bind(this),500),setTimeout(a.bind(this),500)),this.prevClockValuesAsString=this.clockValuesAsString}}]),e}();function o(e,t){return(e=e.toString()).length<t?o("0"+e,t):e}function l(e,t){t.forEach((function(t){e.appendChild(t)}))}var d=s(20);function h(e){var t=e.lastTimestamp,s=(e.lang,e.onEnd);return Object(a.useEffect)((function(){new n(t,{theme:"light"}).start().ifEnded((function(){s&&s()}))}),[t]),Object(d.jsxs)("div",{className:"count-down",children:[Object(d.jsx)("div",{className:"tip",children:"Time to Start"}),Object(d.jsx)("div",{id:"flipdown",class:"flipdown"})]})}},1347:function(e,t,s){},645:function(e,t,s){"use strict";s.d(t,"a",(function(){return l}));var a=s(0),r=s.n(a),i=s(1),c=s(11),n=s(8),o=s(20);function l(e){var t=e.btnText,s=e.className,a=e.disabled,l=e.click,d=e.afterClick,h=e.checkApprove,u=e.wallet,j=e.spec,b=e.lang,m=Object(n.useState)(a?"disabled":"enabled"),p=Object(c.a)(m,2),x=p[0],v=p[1],O=Object(n.useState)(!0),g=Object(c.a)(O,2),f=g[0],N=g[1],y=Object(n.useState)(!1),S=Object(c.a)(y,2),w=S[0],C=S[1],k=Object(n.useState)(t),E=Object(c.a)(k,2),B=E[0],Q=E[1],$=Object(n.useRef)(null),A=function(){var e=Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===x){e.next=2;break}return e.abrupt("return");case 2:return T(),e.next=5,l();case 5:e.sent&&d&&d(),_();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){v("disabled"),C(!0),$.current&&($.current.style.display="inline-block")},_=function(){$.current&&($.current.style.display="none"),v("enabled"),C(!1)},P=function(){var e=Object(i.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(h&&u&&u.detail.account)){e.next=5;break}return e.next=3,u.isApproved(j.pool,j.bTokenId);case 3:t=e.sent,N(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T(),e.next=3,u.approve(j.pool,j.bTokenId);case 3:e.sent.success?N(!0):(N(!1),alert(b["approve-failed"])),_();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){return P(),function(){}}),[u,j,h]),Object(n.useEffect)((function(){return t&&Q(t),function(){}}),[t]),Object(o.jsxs)("button",{className:s,onClick:function(){f?A():V()},children:[Object(o.jsx)("span",{className:"btn-loading-wrap",children:Object(o.jsx)("span",{ref:$,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),w?b.pending:f?B:b.approve]})}},647:function(e,t,s){"use strict";s.d(t,"a",(function(){return h}));var a=s(55),r=s(49),i=s(655),c=s(11),n=s(8),o=s(653),l=s(20),d=["allowZero"];function h(e){var t=Object(n.useState)(Object(l.jsx)("span",{className:"loading-line"})),s=Object(c.a)(t,2),h=s[0],u=s[1];return Object(n.useEffect)((function(){var t=e.allowZero,s=Object(i.a)(e,d);return("object"!==Object(r.a)(e.value)&&void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t)&&u(Object(l.jsx)(o.a,Object(a.a)(Object(a.a)({},s),{},{displayType:"text"}))),function(){}}),[e.value]),h}},658:function(e,t,s){"use strict";var a=s(8),r=s(20);t.a=function(e){var t=Object(a.useRef)(null);return Object(a.useEffect)((function(){var e=t.current;e&&e.querySelectorAll("[tip]").forEach((function(t){var s=null;t.addEventListener("mouseover",(function(e){var t=e.currentTarget.getAttribute("tip");if(t){var a="hover-box-".concat((new Date).getTime());s=document.body.querySelector("#".concat(a)),(s=document.createElement("div")).style.cssText="z-index : 9;min-width : 100px;max-width : ".concat(window.screen.width,"px ;font-size : 12px ;position : absolute;background-color: #2c2d31;border: 1px solid #AAAAAA;color: #AAAAAA;border-radius: 10px;padding: 4px;"),document.body.appendChild(s),s.innerText=t,s.id=a,s.style.display="block";var r=e.currentTarget.getBoundingClientRect();if(s.style.top="".concat(r.y+r.height+window.document.documentElement.scrollTop,"px"),s.offsetWidth+e.pageX>window.screen.width)if(e.pageX-s.offsetWidth>=0)s.style.left="".concat(e.pageX-s.offsetWidth,"px");else{var i=e.pageX-s.offsetWidth/2>0?e.pageX-s.offsetWidth/2:0;s.style.left="".concat(i,"px")}else s.style.left="".concat(e.pageX,"px")}})),e.addEventListener("mouseout",(function(e){s&&s.remove()}))}));return function(){t.current=null}}),[e.title]),e.block?Object(r.jsx)("div",{ref:t,children:e.children}):Object(r.jsx)("span",{ref:t,children:e.children})}}}]);
//# sourceMappingURL=11.10aaf83b.chunk.js.map