/*! For license information please see 3.c197bff5.chunk.js.LICENSE.txt */
(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[3],{570:function(e,t,c){var n;!function(){"use strict";var c={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var i=s.apply(null,n);i&&e.push(i)}}else if("object"===a)if(n.toString===Object.prototype.toString)for(var o in n)c.call(n,o)&&n[o]&&e.push(o);else e.push(n.toString())}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(n=function(){return s}.apply(t,[]))||(e.exports=n)}()},576:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));var n=c(76),s=c(11);function a(e,t="chainInfo"){return e?n[s.a.get()][t][e]||{}:n[s.a.get()][t]}},581:function(e,t,c){"use strict";t.a=c.p+"static/media/symbol-arrow.66dccd14.svg"},582:function(e,t,c){"use strict";c.d(t,"a",(function(){return s}));var n=c(92);function s(e,t){return e?n.isMobile?Object.assign(e[t],e[t].mobile):e[t]:{}}},584:function(e,t,c){"use strict";c.d(t,"a",(function(){return s}));var n=c(17);function s(){return new URLSearchParams(Object(n.useLocation)().search)}},606:function(e,t,c){"use strict";var n=c(2),s=c(37),a=c(24),i=c(17),o=c(29),r=(c(629),c(13));t.a=Object(s.b)("wallet","version")(Object(a.c)((function({wallet:e,version:t}){const c=Object(i.useRouteMatch)("/lite"),s=Object(i.useRouteMatch)("/pro"),[a,l]=Object(n.useState)(!1);return Object(n.useEffect)((()=>(e.supportAllVersion?Object(o.i)("version")?t.setCurrent(Object(o.h)("version")):t.setCurrent("v2"):e.supportV1&&!e.supportV2?t.setCurrent("v1"):e.supportV2&&!e.supportV1?t.setCurrent("v2"):t.setCurrent("v1"),()=>{})),[e.detail.chainId]),Object(n.useEffect)((()=>{let t=c||s;return e.detail&&(t=e.supportAllVersion&&t),l(t),()=>{}}),[window.location.href,e.detail.chainId]),a?Object(r.jsx)("div",{className:"version",children:Object(r.jsxs)("div",{onClick:()=>{t.switch()},className:`version-container ${t.current}`,children:[Object(r.jsx)("span",{className:"current-v1",children:"V1"}),Object(r.jsx)("span",{className:"current-v2",children:"V2"})]})}):null})))},607:function(e,t,c){"use strict";var n=c(2),s=c(29),a=(c(630),c(37)),i=c(17),o=c(581),r=c(576),l=c(13);t.a=Object(a.b)("wallet")(Object(a.c)((function({wallet:e,lang:t}){const[c,a]=Object(n.useState)(t["connect-wallet"]),[u,j]=Object(n.useState)([]),b=Object(i.useRouteMatch)("/index"),d=Object(i.useRouteMatch)({path:"/",exact:!0}),p=Object(i.useRouteMatch)({path:"/mining",exact:!0}),O=Object(i.useRouteMatch)("/team"),h=Object(i.useRouteMatch)("/retired"),f=Object(i.useRouteMatch)("/options/lite"),m=Object(i.useRouteMatch)("/options/pro"),v=Object(i.useRouteMatch)("/logo"),x=Object(r.a)(),g=f||m,w=b||p||O||d||h||v,N=c=>{e.isConnected()?e.isSupportChain(g)?a(Object(l.jsxs)("span",{children:[c.formatBalance," ",c.symbol," ",Object(l.jsx)("span",{className:"address",children:Object(s.d)(c.account)})]})):a(Object(l.jsxs)("span",{className:"no-supported",children:[t["unsupported-chain-id"],c.chainId,"!"]})):a(t["connect-wallet"])};return Object(n.useEffect)((()=>(w||(async()=>{const t=await e.connect();t&&N(t)})(),()=>{})),[window.location.href]),Object(n.useEffect)((()=>(N(e.detail),()=>{})),[e.detail.account,e.detail.formatBalance,t]),Object(n.useEffect)((()=>{if(x){const e=Object.keys(x).map((e=>Object.assign(x[e],{id:e})));j(e)}return()=>{}}),[x]),!w&&Object(l.jsxs)("div",{className:"connect",children:[Object(l.jsxs)("div",{className:"network-text-logo",children:[Object(l.jsx)("i",{className:e.detail.symbol}),Object(l.jsx)("span",{className:"logo-text",children:e.detail.name||t["select-network"]}),Object(l.jsx)("span",{className:"arrow",children:Object(l.jsx)("img",{src:o.a,alt:"selector"})}),Object(l.jsx)("div",{className:"network-list",children:u.map(((t,c)=>Object(l.jsxs)("div",{className:"network-item "+(t.code===e.detail.code?"selected":""),onClick:()=>e.switchNetwork(t),children:[Object(l.jsx)("span",{className:`logo ${t.symbol}`}),Object(l.jsx)("span",{children:t.name})]},c)))})]}),Object(l.jsx)("div",{className:"bg-btn",children:Object(l.jsx)("button",{className:"nav-btn connect-btn",onClick:e.connect,children:c})})]})})))},608:function(e,t,c){"use strict";var n=c(2),s=c.n(n),a=c(37),i=c(92),o=c(13);t.a=e=>{class t extends s.a.Component{componentDidUpdate(e){this.props.location!==e.location&&this.onRouteChanged(this.props.location)}onRouteChanged(e){}render(){const{intl:t,...c}=this.props,{dict:n}=t;if(i.isMobile)for(let e in n)n[e].mobile&&Object.assign(n[e],n[e].mobile);return Object(o.jsx)(e,{...c,dict:n})}}return Object(a.b)("intl")(Object(a.c)(t))}},609:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));var n=c(17),s=c(13);function a(){const e=window.location.href;return/^https?:\/\/(app|alphatest|testnet)/.test(e)?Object(s.jsx)(n.Redirect,{to:"/lite"}):/^https?:\/\/governance/.test(e)?Object(s.jsx)(n.Redirect,{to:"/governance"}):/^https?:\/\/bridge/.test(e)?Object(s.jsx)(n.Redirect,{to:"/bridge"}):Object(s.jsx)(n.Redirect,{to:"/index"})}},626:function(e,t,c){"use strict";var n=c(2),s=c(581),a=(c(631),c(37)),i=(c(584),c(75)),o=c(570),r=c.n(o),l=c(29),u=c(13);t.a=Object(a.b)("intl")(Object(a.c)((function({intl:e}){const[t,c]=Object(n.useState)(!1),a=(t,n)=>{e.setLocale(t),c(!1),n&&(window.location.href=Object(l.a)("locale",t))},o=r()("lang-box",{show:t});return Object(n.useEffect)((()=>(Object(l.i)("locale")&&a(Object(l.h)("locale")),()=>{})),[e]),Object(u.jsxs)("div",{className:"lang-picker",onMouseOver:()=>{c(!0)},onMouseOut:()=>{c(!1)},children:[Object(u.jsx)("span",{className:"locale",children:e.localeLabel}),Object(u.jsx)("img",{src:s.a,alt:"selector"}),Object(u.jsx)("div",{className:o,children:Object.keys(i).map(((t,c)=>Object(u.jsx)("div",{className:t===e.locale?"lang-item selected":"lang-item",onClick:e=>a(t,!0),children:i[t]},c)))})]})})))},629:function(e,t,c){},630:function(e,t,c){},631:function(e,t,c){}}]);
//# sourceMappingURL=3.c197bff5.chunk.js.map