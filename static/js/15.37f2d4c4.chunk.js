(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[15],{1199:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var c=a(1223),i=a(1221),s=a.n(i),l=a(1222),n=(a(1092),a(35)),d=(a(1200),a(9));function o({page:e,count:t,onPage:a,pageSize:i,onShowSizeChange:o}){return Object(d.jsx)("div",{className:"pagination",children:Object(d.jsx)(c.a,{selectComponentClass:l.a,onChange:a,current:e,total:t,pageSize:i,prevIcon:()=>Object(d.jsx)(n.a,{token:"arrow-left"}),nextIcon:()=>Object(d.jsx)(n.a,{token:"arrow-right"}),showSizeChanger:!0,onShowSizeChange:o,locale:s.a,pageSizeOptions:["10","20","30","50"]})})}},1200:function(e,t,a){},1393:function(e,t,a){},1412:function(e,t,a){"use strict";a.r(t);var c=a(10),i=a(46),s=a(32),l=a(976),n=a(997),d=a(30),o=(a(1220),a(1092),a.p+"static/media/logo-deri.d4c8b6a2.svg"),r=a(1199),j=(a(1393),a(9));t.default=Object(i.b)("wallet")(Object(i.c)((function({lang:e,wallet:t}){const[a,i]=Object(c.useState)(),[u,h]=Object(c.useState)(1),[b,p]=Object(c.useState)([]),[x,O]=Object(c.useState)([]);return Object(c.useEffect)((()=>{let e;e=1===u?b.slice(0,10*u):b.slice(10*(u-1),10*u),O(e)}),[b,u]),Object(c.useEffect)((()=>{t.isConnected()&&(async()=>{let e=await s.a.request("getUserEarnInfo",[t.detail.account,1]);if(e){let t=0===+e.pnl?0:100*(e.pnl-1);i(t)}})(),(async()=>{let e=await s.a.request("getEarnTop50Users",[1]);if(e){let t=e.map((e=>(e.pnl=0===+e.pnl?0:100*(e.pnl-1),e.account=Object(d.i)(e.account),e)));p(t)}})()}),[t.detail,t]),Object(j.jsxs)("div",{className:"testnet-practice",children:[Object(j.jsxs)("div",{className:"practice-info",children:[Object(j.jsx)("div",{className:"practice-title",children:e["practice-to-earn"]}),Object(j.jsx)("div",{className:"practice-time",children:e.time}),Object(j.jsxs)("div",{className:"practice-info-box",children:[Object(j.jsxs)("div",{className:"practice-info-left",children:[Object(j.jsx)("div",{className:"total-rewards-pool",children:Object(j.jsxs)("div",{className:"total-rewards-box",children:[Object(j.jsx)("div",{className:"deri-logo",children:Object(j.jsx)("img",{src:o,alt:"deri"})}),Object(j.jsxs)("div",{className:"total-rewards-num",children:[Object(j.jsx)("div",{className:"total-rewards-pool-title",children:e["total-rewards-pool"]}),Object(j.jsxs)("div",{className:"toatl-rewards-deri",children:[Object(j.jsx)("span",{children:"50,000"}),Object(j.jsx)("span",{className:"deri-text",children:"DERI"})]})]})]})}),Object(j.jsxs)("div",{className:"your-pnl",children:[Object(j.jsx)("span",{children:Object(j.jsx)(n.a,{text:e["your-pnl"],tip:e["your-pnl-tip"],multiline:!0})}),Object(j.jsx)("span",{className:"your-pnl-pen",children:Object(j.jsx)(l.a,{value:a,suffix:"%",decimalScale:2})})]})]}),Object(j.jsxs)("div",{className:"practice-info-right",children:[Object(j.jsxs)("div",{className:"top-pnl-list-box",children:[Object(j.jsx)("div",{className:"top-pnl-list-box-title",children:e["top-pnl"]}),Object(j.jsxs)("div",{className:"top-pnl-list",children:[Object(j.jsxs)("div",{className:"top-pnl-list-title",children:[Object(j.jsx)("span",{children:e.no}),Object(j.jsx)("span",{children:e["user-addr"]}),Object(j.jsx)("span",{children:e.pnl})]}),Object(j.jsx)("div",{className:"top-pnl-list-info",children:x.map(((e,t)=>Object(j.jsxs)("div",{className:"top-pnl-list-info-box",children:[Object(j.jsx)("div",{className:"no",children:e.index}),Object(j.jsx)("div",{className:"address",children:e.account}),Object(j.jsx)("div",{className:"pnl",children:Object(j.jsx)(l.a,{value:e.pnl,suffix:"%",decimalScale:2})})]},t)))})]})]}),Object(j.jsxs)("div",{className:"page-box",children:[Object(j.jsx)(r.a,{page:u,onPage:e=>{h(e)},count:b.length,pageSize:10}),Object(j.jsxs)("div",{className:"remind",children:["* ",e["update-every-hour"]]})]})]})]})]}),Object(j.jsx)("div",{className:"detailed-rules",children:Object(j.jsx)("a",{target:"_blank",href:"https://deri-protocol.medium.com/practice-to-earn-4c58c36bd754",rel:"noreferrer",children:e["detailed-rules"]})})]})})))},976:function(e,t,a){"use strict";var c,i,s=a(22),l=a(133),n=a(54),d=a(5),o=a(51),r=a(10),j=(a(91),a(1036)),u=a(50),h=a(30),b=a(15),p=a(9),x=Object(u.a)(j.a)(c||(c=Object(o.a)(["\n  width : ","px;\n"])),(function(e){return e.width})),O=u.a.div(i||(i=Object(o.a)(["\n  width : ",";\n  height : ",";\n"])),(function(e){return/px$/.test(e.width)?e.width:"".concat(e.width,"px")}),(function(e){return/px$/.test(e.height)?e.height:"".concat(e.height,"px")}));t.a=function(e){var t=Object(r.useState)(Object(p.jsx)("span",{className:"loading-line"})),a=Object(d.a)(t,2),c=a[0],i=a[1],o=Object(r.useState)(!0),j=Object(d.a)(o,2),u=j[0],m=j[1],v=function(){var t=e.allowZero;return"object"!==Object(n.a)(e.value)&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===Math.abs(e.value)&&!0===t};return Object(r.useEffect)((function(){var t=e.allowZero,a=(e.wallet,e.closeShowLoadingEffectAfterLoaded),c=e.defaultValue,n=void 0===c?"--":c,d=Object(l.a)(e,["allowZero","wallet","closeShowLoadingEffectAfterLoaded","defaultValue"]);if(v())!t&&d.value&&/\d+\.0*[1-9]+/.test(d.value)&&0===+Object(b.bg)(d.value).toFixed(+d.decimalScale||2)&&(d.decimalScale=Object(h.d)(Math.abs(d.value))+2),d.value=Object(h.F)(d.value),d.value&&/\d+.9{6}/.test(d.value)&&(d.value=(+d.value).toFixed(5)),i(Object(p.jsx)(x,Object(s.a)(Object(s.a)({},d),{},{displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0})));else if(u){var o=e.width,r=e.height;i(Object(p.jsx)(O,{className:"loading-line",width:o,height:r})),a&&m(!1)}var j=window.setTimeout((function(){v()||i(n)}),6e4);return function(){clearTimeout(j)}}),[e.value,e.decimalScale,e.suffix]),c}},997:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var c=a(50),i=a(1101),s=a.n(i),l=a(134),n=a(30),d=a(269),o=a(9);const r=c.a.div`
  display:${e=>e.block};
  .text {
    border-bottom : 1px dashed #93A1B8;
    width : max-content;
    cursor : pointer;
    display:${e=>e.block}
  }
  
  .__react_component_tooltip.tooltip.show {
    font-weight : ${e=>e.isWin?400:600} 
  }
`;function j({text:e,id:t=Object(n.a)(e),tip:a,multiline:c,html:i,className:j,element:u="",block:h="block",width:b="auto",children:p,tiggerEvent:x}){return Object(o.jsxs)(r,{className:j,block:h,isWin:d.isWindows,children:[Object(o.jsx)("div",{className:"text","data-for":t,"data-tip":i?s.a.renderToString(u):a,"data-event":Object(n.u)()?"click":x,"data-html":i,children:e||p}),a&&Object(o.jsx)(l.a,{id:t,width:b,padding:"12",place:"bottom",overridePosition:(e,t,a,c,i,s,l,n)=>{const d=a.getBoundingClientRect(),o=c.getBoundingClientRect();let{x:r,y:j,height:u,width:h}=d;const{left:b,top:p}=e;return r+o.width/2>document.documentElement.clientWidth?r-=Math.abs(h-o.width):r-(o.width-h)/2<0?r-=h:r-=(o.width-h)/2,j+u+o.height>=document.documentElement.clientHeight?j=j+u-o.height:j+=u,r<0&&(r=0),j<0&&(j=0),{top:j,left:r}},html:i,borderRadius:8,multiline:c})]})}}}]);
//# sourceMappingURL=15.37f2d4c4.chunk.js.map