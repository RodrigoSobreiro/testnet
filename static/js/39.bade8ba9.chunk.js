(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[39],{1337:function(e,t,s){},1378:function(e,t,s){"use strict";s.r(t);var a=s(898),n=(s(1337),s(13));t.default=function({lang:e}){return Object(n.jsx)("div",{children:Object(n.jsx)(a.a,{lang:e})})}},608:function(e,t,s){"use strict";s.d(t,"a",(function(){return c}));var a=s(2),n=s(13);function c({btnText:e,className:t,disabled:s,click:c,afterClick:i,checkApprove:r,wallet:l,spec:d,lang:o}){const[b,j]=Object(a.useState)(s?"disabled":"enabled"),[p,u]=Object(a.useState)(!0),[x,O]=Object(a.useState)(!1),[h,g]=Object(a.useState)(e),m=Object(a.useRef)(null),f=()=>{j("disabled"),O(!0),m.current&&(m.current.style.display="inline-block")},v=()=>{m.current&&(m.current.style.display="none"),j("enabled"),O(!1)};return Object(a.useEffect)((()=>((async()=>{if(r&&l&&l.detail.account){const e=await l.isApproved(d.pool,d.bTokenId);u(e)}})(),()=>{})),[l,d,r]),Object(a.useEffect)((()=>(e&&g(e),()=>{})),[e]),Object(n.jsxs)("button",{className:t,onClick:()=>{p?(async()=>{if("enabled"!==b)return;f(),await c()&&i&&i(),v()})():(async()=>{f(),(await l.approve(d.pool,d.bTokenId)).success?u(!0):(u(!1),alert(o["approve-failed"])),v()})()},children:[Object(n.jsx)("span",{className:"btn-loading-wrap",children:Object(n.jsx)("span",{ref:m,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),x?o.pending:p?h:o.approve]})}},637:function(e,t,s){"use strict";function a(e,t){for(var s=e.toString();s.length<t;)s="0"+s;return s}function n(e){return a(e,2)}function c(t,s){"string"!==typeof t&&(s=t,t=e.exports.ISO8601_FORMAT),s||(s=e.exports.now());var c=n(s.getDate()),i=n(s.getMonth()+1),r=n(s.getFullYear()),l=n(r.substring(2,4)),d=t.indexOf("yyyy")>-1?r:l,o=n(s.getHours()),b=n(s.getMinutes()),j=n(s.getSeconds()),p=a(s.getMilliseconds(),3),u=function(e){var t=Math.abs(e),s=String(Math.floor(t/60)),a=String(t%60);return 1===s.length&&(s="0"+s),1===a.length&&(a="0"+a),e<0?"+"+s+a:"-"+s+a}(s.getTimezoneOffset());return t.replace(/dd/g,c).replace(/MM/g,i).replace(/y{1,4}/g,d).replace(/hh/g,o).replace(/mm/g,b).replace(/ss/g,j).replace(/SSS/g,p).replace(/O/g,u)}function i(e,t,s,a){e["set"+(a?"":"UTC")+t](s)}e.exports=c,e.exports.asString=c,e.exports.parse=function(t,s,a){if(!t)throw new Error("pattern must be supplied");return function(t,s,a){var n=t.indexOf("O")<0,c=[{pattern:/y{1,4}/,regexp:"\\d{1,4}",fn:function(e,t){i(e,"FullYear",t,n)}},{pattern:/MM/,regexp:"\\d{1,2}",fn:function(e,t){i(e,"Month",t-1,n)}},{pattern:/dd/,regexp:"\\d{1,2}",fn:function(e,t){i(e,"Date",t,n)}},{pattern:/hh/,regexp:"\\d{1,2}",fn:function(e,t){i(e,"Hours",t,n)}},{pattern:/mm/,regexp:"\\d\\d",fn:function(e,t){i(e,"Minutes",t,n)}},{pattern:/ss/,regexp:"\\d\\d",fn:function(e,t){i(e,"Seconds",t,n)}},{pattern:/SSS/,regexp:"\\d\\d\\d",fn:function(e,t){i(e,"Milliseconds",t,n)}},{pattern:/O/,regexp:"[+-]\\d{3,4}|Z",fn:function(e,t){"Z"===t&&(t=0);var s=Math.abs(t),a=(t>0?-1:1)*(s%100+60*Math.floor(s/100));e.setUTCMinutes(e.getUTCMinutes()+a)}}],r=c.reduce((function(e,t){return t.pattern.test(e.regexp)?(t.index=e.regexp.match(t.pattern).index,e.regexp=e.regexp.replace(t.pattern,"("+t.regexp+")")):t.index=-1,e}),{regexp:t,index:[]}),l=c.filter((function(e){return e.index>-1}));l.sort((function(e,t){return e.index-t.index}));var d=new RegExp(r.regexp).exec(s);if(d){var o=a||e.exports.now();return l.forEach((function(e,t){e.fn(o,d[t+1])})),o}throw new Error("String '"+s+"' could not be parsed as '"+t+"'")}(t,s,a)},e.exports.now=function(){return new Date},e.exports.ISO8601_FORMAT="yyyy-MM-ddThh:mm:ss.SSS",e.exports.ISO8601_WITH_TZ_OFFSET_FORMAT="yyyy-MM-ddThh:mm:ss.SSSO",e.exports.DATETIME_FORMAT="dd MM yyyy hh:mm:ss.SSS",e.exports.ABSOLUTETIME_FORMAT="hh:mm:ss.SSS"},898:function(e,t,s){"use strict";var a=s(2),n=s(37),c=s(637),i=s.n(c),r=s.p+"static/media/success.d1b6419b.svg",l=s.p+"static/media/undone.a632686c.svg",d=s.p+"static/media/right.462ddd6f.svg",o=s(7),b=s(608),j=s(13);t.a=Object(n.b)("wallet")(Object(n.c)((function({wallet:e={},lang:t}){const s="dev"!=o.a.get()?{pool:"0x19c2655A0e1639B189FB0CF06e02DC0254419D92",bTokenId:"0"}:{pool:"0x54a71Cad29C314eA081b2B0b1Ac25a7cE3b7f7A5",bTokenId:"0"},[n,c]=Object(a.useState)(!0),[p,u]=Object(a.useState)(!1),[x,O]=Object(a.useState)(!1),[h,g]=Object(a.useState)(!1),[m,f]=Object(a.useState)(!1),[v,w]=Object(a.useState)(Object(j.jsx)(b.a,{className:"btn",btnText:t["connect-wallet"]})),[N,y]=Object(a.useState)({one:!1,two:!1,three:!1}),[S,T]=Object(a.useState)({one:!1,two:!1,three:!1}),M=()=>e&&e.detail&&e.detail.account,k=async()=>{if(M()&&s){const t=await e.isApproved(s.pool,s.bTokenId);c(t)}},I=()=>{e.connect()},E=async()=>{let t=`/ptoken_airdrop/${e.detail.account}/signin_status`,s=await Object(o.m)(t),a=Date.parse(new Date),n=i.a.asString("yyyy-MM-dd",new Date(parseInt(a))),c=[];s.data.map((e=>{let t=!1;e.date==n&&f(e.signin),e.signin&&(t=e.signin,c.push(t))})),c.length&&y({one:c[0],two:c[1],three:c[2]})},A=async()=>{if(56!=e.detail.chainId)return void alert(t["please-switch-to-bsc"]);if(+e.detail.formatBalance<=.2)return void alert(t["less-bnb"]);if(h)return void alert(t["use-a-new-address"]);if(m)return void alert(t["already-stamped-today"]);let s=`/ptoken_airdrop/${e.detail.account}/signin`,a=await Object(o.m)(s,{method:"POST"});if(!a.success){if(0!=a.error.indexOf("insufficent\xa0user\xa0balance"))return void alert(t["less-bnb"]);alert(t["sign-in-failed"])}E()},_=async()=>{if(56!=e.detail.chainId)return void alert(t["please-switch-to-bsc"]);if(h)return void alert(t["use-a-new-address"]);if(+e.detail.formatBalance<=.2)return void alert(t["less-bnb"]);(await Object(o.e)(e.detail.chainId,e.detail.account)).success?(alert(["claim-success"]),O(!0)):alert["claim-failed"]},F=async()=>{if(56!=e.detail.chainId)return void alert(t["please-switch-to-bsc"]);(await e.approve(s.pool,s.bTokenId)).success?(c(!0),k()):(c(!1),alert(t["approve-failed"]))};return Object(a.useEffect)((()=>{M()&&(k(),(async()=>{let t=await Object(o.hb)(e.detail.chainId,s.pool,e.detail.account);g(t)})())}),[e.detail,s,N]),Object(a.useEffect)((()=>{M()&&(E(),(async()=>{let t=`/ptoken_airdrop/${e.detail.account}/is_claimed`,s=await Object(o.m)(t);O(s.data)})(),(async()=>{+await Object(o.o)(e.detail.chainId)>=4999&&u(!0)})())}),[e.detail]),Object(a.useEffect)((()=>{M()&&(async()=>{let t=await Object(o.N)(e.detail.chainId,s.pool,e.detail.account,s.bTokenId),a=await Object(o.N)(e.detail.chainId,s.pool,e.detail.account,"1"),n=await Object(o.N)(e.detail.chainId,s.pool,e.detail.account,"2"),c=t.concat(a,n),i={};N.three&&(1==c.length?i={one:!0,two:!1,three:!1}:2==c.length?i={one:!0,two:!0,three:!1}:c.length>=3&&(i={one:!0,two:!0,three:!0}),T(i))})()}),[e.detail,N]),Object(a.useEffect)((()=>{let e;e=(new Date).getTime()<=16277256e5?M()?N.three?n?x||p?Object(j.jsx)("a",{className:"btn",target:"_blank",href:"https://app.deri.finance/#/lite",children:t.trade}):Object(j.jsx)(b.a,{className:"btn",btnText:t.claim,click:_,lang:t}):Object(j.jsx)(b.a,{className:"btn",btnText:t.approve,click:F,lang:t}):Object(j.jsx)(b.a,{className:"btn btn-danger connect",click:A,btnText:t["sign-in"],lang:t}):Object(j.jsx)(b.a,{className:"btn btn-danger connect",btnText:t["connect-wallet"],click:I,lang:t}):Object(j.jsxs)("button",{className:"btn btn-danger connect disbutton",disabled:!0,children:[t["activity-ends"]," "]}),w(e)}),[e.detail,n,N,h,x,p]),Object(j.jsxs)("div",{className:"signin",children:[Object(j.jsxs)("div",{className:"title",children:[Object(j.jsx)("div",{children:t["title-three"]}),Object(j.jsx)("div",{className:"time",children:t["title-five"]})]}),Object(j.jsxs)("div",{className:"user-tasks",children:[Object(j.jsx)("div",{className:"header",children:t.header}),Object(j.jsxs)("div",{className:"content",children:[Object(j.jsxs)("div",{className:"content-text",children:[Object(j.jsxs)("div",{className:"left",children:[Object(j.jsx)("div",{className:"signin-title",children:t["sign-in"]}),Object(j.jsxs)("div",{className:"signined",children:[N.one?Object(j.jsx)("img",{src:r}):Object(j.jsx)("img",{src:l}),N.two?Object(j.jsx)("img",{src:r}):Object(j.jsx)("img",{src:l}),N.three?Object(j.jsx)("img",{src:r}):Object(j.jsx)("img",{src:l})]})]}),Object(j.jsxs)("div",{className:"center",children:[Object(j.jsx)("div",{className:"point"}),Object(j.jsx)("div",{className:"point"}),Object(j.jsx)("div",{className:"point"}),Object(j.jsx)("div",{className:"claim-ptoken-text",children:t["claim-ptoken"]}),Object(j.jsx)("div",{className:"point"}),Object(j.jsx)("div",{className:"point"}),Object(j.jsx)("div",{className:"right-arr",children:Object(j.jsx)("img",{src:d})})]}),Object(j.jsxs)("div",{className:"right",children:[Object(j.jsx)("div",{className:"signin-title",children:t.trade}),Object(j.jsxs)("div",{className:"signined",children:[S.one?Object(j.jsx)("img",{src:r}):Object(j.jsx)("img",{src:l}),S.two?Object(j.jsx)("img",{src:r}):Object(j.jsx)("img",{src:l}),S.three?Object(j.jsx)("img",{src:r}):Object(j.jsx)("img",{src:l})]})]})]}),Object(j.jsx)("div",{className:"button",children:v}),p?Object(j.jsx)("div",{className:"exceed",children:t["exceed-participants"]}):""]})]}),Object(j.jsxs)("div",{className:"h2",children:[t["title-one"],Object(j.jsx)("span",{className:"title-num",children:t["title-num"]}),Object(j.jsx)("span",{className:"in-deri",children:t["title-two"]}),Object(j.jsx)("div",{className:"text",children:t["title-frou"]})]}),Object(j.jsxs)("div",{className:"rules",children:[Object(j.jsx)("div",{className:"rules-title",children:t["who-are-eligibles"]}),Object(j.jsx)("div",{className:"text",children:t["rules-one"]}),Object(j.jsx)("div",{className:"text",children:t["rules-two"]}),Object(j.jsx)("div",{className:"text",children:t["rules-three"]}),Object(j.jsx)("div",{className:"rules-title",children:t["how-to-participate"]}),Object(j.jsx)("div",{className:"text",children:t["step-one"]}),Object(j.jsx)("div",{className:"text",children:t["step-two"]}),Object(j.jsx)("div",{className:"text",children:t["step-three"]}),Object(j.jsx)("div",{className:"text",children:t["step-four"]})]})]})})))}}]);
//# sourceMappingURL=39.bade8ba9.chunk.js.map