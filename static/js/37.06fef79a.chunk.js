(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[37],{1370:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return n}));var c=s(703),a=(s(825),s(13));function n({lang:e}){return Object(a.jsx)("div",{className:"Diptwo",children:Object(a.jsx)(c.a,{lang:e})})}},608:function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));var c=s(2),a=s(13);function n({btnText:e,className:t,disabled:s,click:n,afterClick:l,checkApprove:i,wallet:r,spec:j,lang:b}){const[d,o]=Object(c.useState)(s?"disabled":"enabled"),[u,O]=Object(c.useState)(!0),[x,v]=Object(c.useState)(!1),[p,h]=Object(c.useState)(e),m=Object(c.useRef)(null),f=()=>{o("disabled"),v(!0),m.current&&(m.current.style.display="inline-block")},N=()=>{m.current&&(m.current.style.display="none"),o("enabled"),v(!1)};return Object(c.useEffect)((()=>((async()=>{if(i&&r&&r.detail.account){const e=await r.isApproved(j.pool,j.bTokenId);O(e)}})(),()=>{})),[r,j,i]),Object(c.useEffect)((()=>(e&&h(e),()=>{})),[e]),Object(a.jsxs)("button",{className:t,onClick:()=>{u?(async()=>{if("enabled"!==d)return;f(),await n()&&l&&l(),N()})():(async()=>{f(),(await r.approve(j.pool,j.bTokenId)).success?O(!0):(O(!1),alert(b["approve-failed"])),N()})()},children:[Object(a.jsx)("span",{className:"btn-loading-wrap",children:Object(a.jsx)("span",{ref:m,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),x?b.pending:u?p:b.approve]})}},610:function(e,t,s){"use strict";s.d(t,"a",(function(){return l}));var c=s(2),a=s(616),n=s(13);function l(e){const[t,s]=Object(c.useState)(Object(n.jsx)("span",{className:"loading-line"}));return Object(c.useEffect)((()=>{const{allowZero:t,...c}=e;return("object"!==typeof e.value&&void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t)&&s(Object(n.jsx)(a.a,{...c,displayType:"text"})),()=>{}}),[e.value]),t}},703:function(e,t,s){"use strict";var c=s(2),a=s(37),n=s(608),l=s(610),i=s(7),r=s(13);t.a=Object(a.b)("wallet","loading")(Object(a.c)((function({wallet:e={},lang:t,loading:s}){const[a,j]=Object(c.useState)(!1),[b,d]=Object(c.useState)(!1),[o,u]=Object(c.useState)(!1),[O,x]=Object(c.useState)(""),[v,p]=Object(c.useState)(""),[h,m]=Object(c.useState)(""),[f,N]=Object(c.useState)([]),[I,g]=Object(c.useState)(""),[w,y]=Object(c.useState)(""),S=()=>{e.connect()},[k,C]=Object(c.useState)(Object(r.jsx)(n.a,{click:S,lang:t,className:"vote",btnText:t["connet-wallet"]})),E=e=>{let{value:t}=e.target;x(t)},_=async()=>{if(!O)return void alert(t["please-choose-your-vote-first"]);await T()&&(D(),R(),B())},T=async()=>{if((await Object(i.zb)(e.detail.chainId,e.detail.account,O)).success){let t=!0;for(;t;){let s=await Object(i.V)(e.detail.account);t=s.timestamp?!(s.timestamp>w):!s.timestamp}return!0}},D=async()=>{let t=await Object(i.V)(e.detail.account);t&&("1"===t.option?(j(!0),p("I")):"2"===t.option?(d(!0),p("II")):"3"===t.option&&(u(!0),p("III")),y(t.timestamp))},R=async()=>{let t=await Object(i.U)(e.detail.account);t&&m(t)},B=async()=>{let e=await Object(i.Y)();if(s.loaded(),e){let t=+e[0]+ +e[1]+ +e[2];N(e),g(t)}else alert(e.error)};return Object(c.useEffect)((()=>{s.loading();let e=null;e=window.setInterval((()=>{B()}),1e3)}),[]),Object(c.useEffect)((()=>{document.getElementsByClassName("pre_eth")[0].style.width=+f[0]/I*100+"%",document.getElementsByClassName("pre_bsc")[0].style.width=+f[1]/I*100+"%",document.getElementsByClassName("pre_heco")[0].style.width=+f[2]/I*100+"%"}),[f,I]),Object(c.useEffect)((()=>{let t=null;e.isConnected()&&(t=window.setInterval((()=>{R(),D()}),1e3))}),[e,e.detail.account]),Object(c.useEffect)((()=>{let s;s=e.isConnected()?Object(r.jsx)(n.a,{className:"vote",lang:t,btnText:t.vote,click:_}):Object(r.jsx)(n.a,{click:S,className:"vote",lang:t,btnText:t["connet-wallet"]}),C(s)}),[e.detail.account,O]),Object(r.jsxs)("div",{className:"dip_two_box",children:[Object(r.jsx)("div",{className:"H2 DIP1",children:t["governance-title"]}),Object(r.jsxs)("div",{className:"title-describe",children:[Object(r.jsx)("div",{children:t["governance-describe"]}),Object(r.jsx)("div",{children:t["governance-describe-two"]}),Object(r.jsxs)("div",{children:[t["governance-describe-three"]," ",Object(r.jsx)("a",{className:"doc-a",rel:"noreferrer",target:"_blank",href:"https://docs.deri.finance/mining-faq#what-do-i-harvest-for-liquidity-mining",children:t["governance-describe-three-a"]}),"  ",t["governance-describe-three-one"]]}),Object(r.jsx)("br",{})]}),Object(r.jsxs)("div",{className:"flex",children:["I.",t["governance-options-one-describe"],Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),"II.",t["governance-options-two-describe"],Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),"III.",t["governance-options-three"],Object(r.jsx)("br",{})]}),Object(r.jsxs)("div",{className:"radio",children:[Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"fle",children:[Object(r.jsxs)("div",{className:"rad",children:[Object(r.jsx)("input",{type:"radio",name:"option",value:"1",id:"I",onChange:e=>E(e),defaultChecked:a})," ",Object(r.jsx)("label",{for:"I",children:"I"})]}),Object(r.jsxs)("div",{className:"prele_eth",children:[Object(r.jsx)("div",{className:"pre_eth"}),Object(r.jsxs)("span",{className:"num-deri",children:[" ",f[0]?Object(r.jsx)(l.a,{value:f[0],decimalScale:0,thousandSeparator:!0}):"0","   DERI"]})]})]}),Object(r.jsxs)("div",{className:"fle",children:[Object(r.jsxs)("div",{className:"rad",children:[Object(r.jsx)("input",{type:"radio",name:"option",value:"2",id:"II",onChange:e=>E(e),defaultChecked:b})," ",Object(r.jsx)("label",{for:"II",children:"II"})]}),Object(r.jsxs)("div",{className:"prele_bsc",children:[Object(r.jsx)("div",{className:"pre_bsc"}),Object(r.jsxs)("span",{className:"num-deri",children:[" ",f[1]?Object(r.jsx)(l.a,{value:f[1],decimalScale:0,thousandSeparator:!0}):"0","   DERI"]})]})]}),Object(r.jsxs)("div",{className:"fle",children:[Object(r.jsxs)("div",{className:"rad",children:[Object(r.jsx)("input",{type:"radio",name:"option",value:"3",id:"III",onChange:e=>E(e),defaultChecked:o})," ",Object(r.jsx)("label",{for:"III",children:"III"})]}),Object(r.jsxs)("div",{className:"prele_heco",children:[Object(r.jsx)("div",{className:"pre_heco"}),Object(r.jsxs)("span",{className:"num-deri",children:[" ",f[2]?Object(r.jsx)(l.a,{value:f[2],decimalScale:0,thousandSeparator:!0}):"0","   DERI"]})]})]})]}),Object(r.jsx)("div",{children:k}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{children:[t["your-vote"]," : ",v]}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{children:[t["your-voting-power"]," : ",h?Object(r.jsx)(l.a,{value:h,decimalScale:0,thousandSeparator:!0}):"0"]}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{class:"H2",children:"Voting rules:"}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),"1.",t["vote-rules-one"],Object(r.jsx)("br",{}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{className:"rules-describe",children:t["vote-rules-one-describe-one"]}),Object(r.jsx)("li",{className:"rules-describe",children:t["vote-rules-one-describe-two"]}),Object(r.jsx)("li",{className:"rules-describe",children:t["vote-rules-one-describe-three"]}),Object(r.jsx)("li",{className:"rules-describe",children:t["vote-rules-one-describe-four"]})]}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),"2. ",t["vote-rules-two"],Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),"3. ",t["vote-rules-three"],Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),"4. ",t["vote-rules-four"]]})]})]})})))},825:function(e,t,s){}}]);
//# sourceMappingURL=37.06fef79a.chunk.js.map