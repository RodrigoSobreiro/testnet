(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[23],{635:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0),a=n.n(r),c=n(3),s=n(22),i=n(7),u=n(62);function o(e){var t=e.btnText,n=e.className,r=e.disabled,o=e.click,l=e.afterClick,d=e.checkApprove,p=e.wallet,b=e.spec,j=e.lang,f=Object(i.useState)(r?"disabled":"enabled"),x=Object(s.a)(f,2),h=x[0],O=x[1],m=Object(i.useState)(!0),g=Object(s.a)(m,2),v=g[0],w=g[1],k=Object(i.useState)(!1),y=Object(s.a)(k,2),N=y[0],S=y[1],T=Object(i.useState)(t),M=Object(s.a)(T,2),I=M[0],A=M[1],E=Object(i.useRef)(null),_=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===h){e.next=2;break}return e.abrupt("return");case 2:return F(),e.next=5,o();case 5:e.sent&&l&&l(),R();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){O("disabled"),S(!0),E.current&&(E.current.style.display="inline-block")},R=function(){E.current&&(E.current.style.display="none"),O("enabled"),S(!1)},C=function(){var e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(d&&p&&p.detail.account)){e.next=5;break}return e.next=3,p.isApproved(b.pool,b.bTokenId);case 3:t=e.sent,w(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return F(),e.next=3,p.approve(b.pool,b.bTokenId);case 3:e.sent.success?w(!0):(w(!1),alert(j["approve-failed"])),R();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){return C(),function(){}}),[p,b,d]),Object(i.useEffect)((function(){return t&&A(t),function(){}}),[t]),Object(u.jsxs)("button",{className:n,onClick:function(){v?_():D()},children:[Object(u.jsx)("span",{className:"btn-loading-wrap",children:Object(u.jsx)("span",{ref:E,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),N?j.pending:v?I:j.approve]})}},639:function(e,t,n){"use strict";function r(e,t){for(var n=e.toString();n.length<t;)n="0"+n;return n}function a(e){return r(e,2)}function c(t,n){"string"!==typeof t&&(n=t,t=e.exports.ISO8601_FORMAT),n||(n=e.exports.now());var c=a(n.getDate()),s=a(n.getMonth()+1),i=a(n.getFullYear()),u=a(i.substring(2,4)),o=t.indexOf("yyyy")>-1?i:u,l=a(n.getHours()),d=a(n.getMinutes()),p=a(n.getSeconds()),b=r(n.getMilliseconds(),3),j=function(e){var t=Math.abs(e),n=String(Math.floor(t/60)),r=String(t%60);return 1===n.length&&(n="0"+n),1===r.length&&(r="0"+r),e<0?"+"+n+r:"-"+n+r}(n.getTimezoneOffset());return t.replace(/dd/g,c).replace(/MM/g,s).replace(/y{1,4}/g,o).replace(/hh/g,l).replace(/mm/g,d).replace(/ss/g,p).replace(/SSS/g,b).replace(/O/g,j)}function s(e,t,n,r){e["set"+(r?"":"UTC")+t](n)}e.exports=c,e.exports.asString=c,e.exports.parse=function(t,n,r){if(!t)throw new Error("pattern must be supplied");return function(t,n,r){var a=t.indexOf("O")<0,c=[{pattern:/y{1,4}/,regexp:"\\d{1,4}",fn:function(e,t){s(e,"FullYear",t,a)}},{pattern:/MM/,regexp:"\\d{1,2}",fn:function(e,t){s(e,"Month",t-1,a)}},{pattern:/dd/,regexp:"\\d{1,2}",fn:function(e,t){s(e,"Date",t,a)}},{pattern:/hh/,regexp:"\\d{1,2}",fn:function(e,t){s(e,"Hours",t,a)}},{pattern:/mm/,regexp:"\\d\\d",fn:function(e,t){s(e,"Minutes",t,a)}},{pattern:/ss/,regexp:"\\d\\d",fn:function(e,t){s(e,"Seconds",t,a)}},{pattern:/SSS/,regexp:"\\d\\d\\d",fn:function(e,t){s(e,"Milliseconds",t,a)}},{pattern:/O/,regexp:"[+-]\\d{3,4}|Z",fn:function(e,t){"Z"===t&&(t=0);var n=Math.abs(t),r=(t>0?-1:1)*(n%100+60*Math.floor(n/100));e.setUTCMinutes(e.getUTCMinutes()+r)}}],i=c.reduce((function(e,t){return t.pattern.test(e.regexp)?(t.index=e.regexp.match(t.pattern).index,e.regexp=e.regexp.replace(t.pattern,"("+t.regexp+")")):t.index=-1,e}),{regexp:t,index:[]}),u=c.filter((function(e){return e.index>-1}));u.sort((function(e,t){return e.index-t.index}));var o=new RegExp(i.regexp).exec(n);if(o){var l=r||e.exports.now();return u.forEach((function(e,t){e.fn(l,o[t+1])})),l}throw new Error("String '"+n+"' could not be parsed as '"+t+"'")}(t,n,r)},e.exports.now=function(){return new Date},e.exports.ISO8601_FORMAT="yyyy-MM-ddThh:mm:ss.SSS",e.exports.ISO8601_WITH_TZ_OFFSET_FORMAT="yyyy-MM-ddThh:mm:ss.SSSO",e.exports.DATETIME_FORMAT="dd MM yyyy hh:mm:ss.SSS",e.exports.ABSOLUTETIME_FORMAT="hh:mm:ss.SSS"},669:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(3),s=n(22),i=n(7),u=n(106),o=n(639),l=n.n(o),d=n.p+"static/media/success.d1b6419b.svg",p=n.p+"static/media/undone.a632686c.svg",b=n.p+"static/media/right.462ddd6f.svg",j=n(26),f=n(635),x=n(62);t.a=Object(u.b)("wallet")(Object(u.c)((function(e){var t,n=e.wallet,r=void 0===n?{}:n,u=e.lang,o="dev"!=j.DeriEnv.get()?{pool:"0x19c2655A0e1639B189FB0CF06e02DC0254419D92",bTokenId:"0"}:{pool:"0x54a71Cad29C314eA081b2B0b1Ac25a7cE3b7f7A5",bTokenId:"0"},h=Object(i.useState)(!0),O=Object(s.a)(h,2),m=O[0],g=O[1],v=Object(i.useState)(!1),w=Object(s.a)(v,2),k=w[0],y=w[1],N=Object(i.useState)(!1),S=Object(s.a)(N,2),T=S[0],M=S[1],I=Object(i.useState)(!1),A=Object(s.a)(I,2),E=A[0],_=A[1],F=Object(i.useState)(!1),R=Object(s.a)(F,2),C=R[0],D=R[1],B=Object(i.useState)(Object(x.jsx)(f.a,{className:"btn",btnText:u["connect-wallet"]})),H=Object(s.a)(B,2),U=H[0],P=H[1],Z=Object(i.useState)({one:!1,two:!1,three:!1}),J=Object(s.a)(Z,2),W=J[0],Y=J[1],z=Object(i.useState)({one:!1,two:!1,three:!1}),L=Object(s.a)(z,2),q=L[0],G=L[1],K=function(){return r&&r.detail&&r.detail.account},Q=function(){var e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!K()||!o){e.next=5;break}return e.next=3,r.isApproved(o.pool,o.bTokenId);case 3:t=e.sent,g(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){r.connect()},X=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.getAirdropPTokenWhitelistCount)(r.detail.chainId);case 2:+e.sent>=5e3&&y(!0);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=Object(c.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/ptoken_airdrop/".concat(r.detail.account,"/is_claimed"),e.next=3,Object(j.fetchRestApi)(t);case 3:n=e.sent,M(n.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ee=function(){var e=Object(c.a)(a.a.mark((function e(){var t,n,c,s,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/ptoken_airdrop/".concat(r.detail.account,"/signin_status"),e.next=3,Object(j.fetchRestApi)(t);case 3:n=e.sent,c=Date.parse(new Date),s=l.a.asString("yyyy-MM-dd",new Date(parseInt(c))),i=[],n.data.map((function(e){var t=!1;e.date==s&&D(e.signin),e.signin&&(t=e.signin,i.push(t))})),i.length&&Y({one:i[0],two:i[1],three:i[2]});case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),te=function(){var e=Object(c.a)(a.a.mark((function e(){var t,n,c,s,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.getTradeHistory)(r.detail.chainId,o.pool,r.detail.account,o.bTokenId);case 2:return t=e.sent,e.next=5,Object(j.getTradeHistory)(r.detail.chainId,o.pool,r.detail.account,"1");case 5:return n=e.sent,e.next=8,Object(j.getTradeHistory)(r.detail.chainId,o.pool,r.detail.account,"2");case 8:c=e.sent,s=t.concat(n,c),i={},W.three&&(1==s.length?i={one:!0,two:!1,three:!1}:2==s.length?i={one:!0,two:!0,three:!1}:s.length>=3&&(i={one:!0,two:!0,three:!0}),G(i));case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ne=function(){var e=Object(c.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(56==r.detail.chainId){e.next=3;break}return alert(u["please-switch-to-bsc"]),e.abrupt("return");case 3:if(!(+r.detail.formatBalance<=.2)){e.next=6;break}return alert(u["less-bnb"]),e.abrupt("return");case 6:if(!E){e.next=9;break}return alert(u["use-a-new-address"]),e.abrupt("return");case 9:if(!C){e.next=12;break}return alert(u["already-stamped-today"]),e.abrupt("return");case 12:return t="/ptoken_airdrop/".concat(r.detail.account,"/signin"),e.next=15,Object(j.fetchRestApi)(t,{method:"POST"});case 15:if((n=e.sent).success){e.next=21;break}if(0==n.error.indexOf("insufficent\xa0user\xa0balance")){e.next=20;break}return alert(u["less-bnb"]),e.abrupt("return");case 20:alert(u["sign-in-failed"]);case 21:return ee(),e.abrupt("return");case 23:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),re=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(56==r.detail.chainId){e.next=3;break}return alert(u["please-switch-to-bsc"]),e.abrupt("return");case 3:if(!E){e.next=6;break}return alert(u["use-a-new-address"]),e.abrupt("return");case 6:if(!(+r.detail.formatBalance<=.2)){e.next=9;break}return alert(u["less-bnb"]),e.abrupt("return");case 9:return e.next=11,Object(j.airdropPToken)(r.detail.chainId,r.detail.account);case 11:e.sent.success?(alert(["claim-success"]),M(!0)):alert["claim-failed"];case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ae=function(){var e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.isUserPTokenExist)(r.detail.chainId,o.pool,r.detail.account);case 2:t=e.sent,_(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ce=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(56==r.detail.chainId){e.next=3;break}return alert(u["please-switch-to-bsc"]),e.abrupt("return");case 3:return e.next=5,r.approve(o.pool,o.bTokenId);case 5:e.sent.success?(g(!0),Q()):(g(!1),alert(u["approve-failed"]));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){K()&&(Q(),ae())}),[r.detail,o,W]),Object(i.useEffect)((function(){K()&&(ee(),$(),X())}),[r.detail]),Object(i.useEffect)((function(){K()&&te()}),[r.detail,W]),Object(i.useEffect)((function(){t=K()?W.three?m?T||k?Object(x.jsx)("a",{className:"btn",target:"_blank",href:"https://app.deri.finance/#/lite",children:u.trade}):Object(x.jsx)(f.a,{className:"btn",btnText:u.claim,click:re,lang:u}):Object(x.jsx)(f.a,{className:"btn",btnText:u.approve,click:ce,lang:u}):Object(x.jsx)(f.a,{className:"btn btn-danger connect",click:ne,btnText:u["sign-in"],lang:u}):Object(x.jsx)(f.a,{className:"btn btn-danger connect",btnText:u["connect-wallet"],click:V,lang:u}),P(t)}),[r.detail,m,W,E,T,k]),Object(x.jsxs)("div",{className:"signin",children:[Object(x.jsxs)("div",{className:"title",children:[Object(x.jsx)("div",{children:u["title-three"]}),Object(x.jsx)("div",{className:"time",children:u["title-five"]})]}),Object(x.jsxs)("div",{className:"user-tasks",children:[Object(x.jsx)("div",{className:"header",children:u.header}),Object(x.jsxs)("div",{className:"content",children:[Object(x.jsxs)("div",{className:"content-text",children:[Object(x.jsxs)("div",{className:"left",children:[Object(x.jsx)("div",{className:"signin-title",children:u["sign-in"]}),Object(x.jsxs)("div",{className:"signined",children:[W.one?Object(x.jsx)("img",{src:d}):Object(x.jsx)("img",{src:p}),W.two?Object(x.jsx)("img",{src:d}):Object(x.jsx)("img",{src:p}),W.three?Object(x.jsx)("img",{src:d}):Object(x.jsx)("img",{src:p})]})]}),Object(x.jsxs)("div",{className:"center",children:[Object(x.jsx)("div",{className:"point"}),Object(x.jsx)("div",{className:"point"}),Object(x.jsx)("div",{className:"point"}),Object(x.jsx)("div",{className:"claim-ptoken-text",children:u["claim-ptoken"]}),Object(x.jsx)("div",{className:"point"}),Object(x.jsx)("div",{className:"point"}),Object(x.jsx)("div",{className:"right-arr",children:Object(x.jsx)("img",{src:b})})]}),Object(x.jsxs)("div",{className:"right",children:[Object(x.jsx)("div",{className:"signin-title",children:u.trade}),Object(x.jsxs)("div",{className:"signined",children:[q.one?Object(x.jsx)("img",{src:d}):Object(x.jsx)("img",{src:p}),q.two?Object(x.jsx)("img",{src:d}):Object(x.jsx)("img",{src:p}),q.three?Object(x.jsx)("img",{src:d}):Object(x.jsx)("img",{src:p})]})]})]}),Object(x.jsx)("div",{className:"button",children:U})]})]}),Object(x.jsxs)("div",{className:"h2",children:[u["title-one"],Object(x.jsx)("span",{className:"title-num",children:u["title-num"]}),Object(x.jsx)("span",{className:"in-deri",children:u["title-two"]}),Object(x.jsx)("div",{className:"text",children:u["title-frou"]})]}),Object(x.jsxs)("div",{className:"rules",children:[Object(x.jsx)("div",{className:"rules-title",children:u["who-are-eligibles"]}),Object(x.jsx)("div",{className:"text",children:u["rules-one"]}),Object(x.jsx)("div",{className:"text",children:u["rules-two"]}),Object(x.jsx)("div",{className:"text",children:u["rules-three"]}),Object(x.jsx)("div",{className:"rules-title",children:u["how-to-participate"]}),Object(x.jsx)("div",{className:"text",children:u["step-one"]}),Object(x.jsx)("div",{className:"text",children:u["step-two"]}),Object(x.jsx)("div",{className:"text",children:u["step-three"]}),Object(x.jsx)("div",{className:"text",children:u["step-four"]})]})]})})))},734:function(e,t,n){},766:function(e,t,n){"use strict";n.r(t);var r=n(669),a=(n(734),n(62));t.default=function(e){var t=e.lang;return Object(a.jsx)("div",{children:Object(a.jsx)(r.a,{lang:t})})}}}]);
//# sourceMappingURL=23.278cab0a.chunk.js.map