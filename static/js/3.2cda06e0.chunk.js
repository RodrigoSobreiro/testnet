/*! For license information please see 3.2cda06e0.chunk.js.LICENSE.txt */
(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[3],{606:function(t,e,n){"use strict";function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,c=new Array(e);n<e;n++)c[n]=t[n];return c}function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],c=!0,r=!1,a=void 0;try{for(var o,i=t[Symbol.iterator]();!(c=(o=i.next()).done)&&(n.push(o.value),!e||n.length!==e);c=!0);}catch(s){r=!0,a=s}finally{try{c||null==i.return||i.return()}finally{if(r)throw a}}return n}}(t,e)||function(t,e){if(t){if("string"===typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(e,"a",(function(){return r}))},608:function(t,e,n){var c;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var t=[],e=0;e<arguments.length;e++){var c=arguments[e];if(c){var a=typeof c;if("string"===a||"number"===a)t.push(c);else if(Array.isArray(c)){if(c.length){var o=r.apply(null,c);o&&t.push(o)}}else if("object"===a)if(c.toString===Object.prototype.toString)for(var i in c)n.call(c,i)&&c[i]&&t.push(i);else t.push(c.toString())}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):void 0===(c=function(){return r}.apply(e,[]))||(t.exports=c)}()},612:function(t,e,n){"use strict";function c(t,e){if(null==t)return{};var n,c,r=function(t,e){if(null==t)return{};var n,c,r={},a=Object.keys(t);for(c=0;c<a.length;c++)n=a[c],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(c=0;c<a.length;c++)n=a[c],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}n.d(e,"a",(function(){return c}))},615:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var c=n(89),r=n(13);function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"chainInfo";return t?c[r.a.get()][e][t]||{}:c[r.a.get()][e]}},617:function(t,e,n){"use strict";e.a=n.p+"static/media/symbol-arrow.66dccd14.svg"},618:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var c=n(107);function r(t,e){return t?c.isMobile?Object.assign(t[e],t[e].mobile):t[e]:{}}},621:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var c=n(21);function r(){return new URLSearchParams(Object(c.useLocation)().search)}},640:function(t,e,n){"use strict";var c=n(606),r=n(2),a=n(45),o=n(29),i=n(21),s=n(35),u=(n(659),n(17));e.a=Object(a.b)("wallet","version")(Object(o.c)((function(t){var e=t.wallet,n=t.version,a=Object(i.useRouteMatch)("/lite"),o=Object(i.useRouteMatch)("/pro"),l=Object(r.useState)(!1),b=Object(c.a)(l,2),j=b[0],f=b[1];return Object(r.useEffect)((function(){return e.supportAllVersion?Object(s.i)("version")?n.setCurrent(Object(s.h)("version")):n.setCurrent("v2"):e.supportV1&&!e.supportV2?n.setCurrent("v1"):e.supportV2&&!e.supportV1?n.setCurrent("v2"):n.setCurrent("v1"),function(){}}),[e.detail.chainId]),Object(r.useEffect)((function(){var t=a||o;return e.detail&&(t=e.supportAllVersion&&t),f(t),function(){}}),[window.location.href,e.detail.chainId]),j?Object(u.jsx)("div",{className:"version",children:Object(u.jsxs)("div",{onClick:function(){n.switch()},className:"version-container ".concat(n.current),children:[Object(u.jsx)("span",{className:"current-v1",children:"V1"}),Object(u.jsx)("span",{className:"current-v2",children:"V2"})]})}):null})))},641:function(t,e,n){"use strict";var c=n(2),r=n(35),a=(n(660),n(45)),o=n(21),i=n(617),s=n(615),u=n(17);e.a=Object(a.b)("wallet")(Object(a.c)((function({wallet:t,lang:e}){const[n,a]=Object(c.useState)(e["connect-wallet"]),[l,b]=Object(c.useState)([]),j=Object(o.useRouteMatch)("/index"),f=Object(o.useRouteMatch)({path:"/",exact:!0}),d=Object(o.useRouteMatch)({path:"/mining",exact:!0}),p=Object(o.useRouteMatch)("/team"),O=Object(o.useRouteMatch)("/retired"),h=Object(o.useRouteMatch)("/options/lite"),v=Object(o.useRouteMatch)("/options/pro"),m=Object(o.useRouteMatch)("/logo"),y=Object(s.a)(),g=h||v,x=j||d||p||f||O||m,w=n=>{t.isConnected()?t.isSupportChain(g)?a(Object(u.jsxs)("span",{children:[n.formatBalance," ",n.symbol," ",Object(u.jsx)("span",{className:"address",children:Object(r.d)(n.account)})]})):a(Object(u.jsxs)("span",{className:"no-supported",children:[e["unsupported-chain-id"],n.chainId,"!"]})):a(e["connect-wallet"])};return Object(c.useEffect)((()=>(x||(async()=>{const e=await t.connect();e&&w(e)})(),()=>{})),[window.location.href]),Object(c.useEffect)((()=>(w(t.detail),()=>{})),[t.detail.account,t.detail.formatBalance,e]),Object(c.useEffect)((()=>{if(y){const t=Object.keys(y).map((t=>Object.assign(y[t],{id:t})));b(t)}return()=>{}}),[y]),!x&&Object(u.jsxs)("div",{className:"connect",children:[Object(u.jsxs)("div",{className:"network-text-logo",children:[Object(u.jsx)("i",{className:t.detail.symbol}),Object(u.jsx)("span",{className:"logo-text",children:t.detail.name||e["select-network"]}),Object(u.jsx)("span",{className:"arrow",children:Object(u.jsx)("img",{src:i.a,alt:"selector"})}),Object(u.jsx)("div",{className:"network-list",children:l.map(((e,n)=>Object(u.jsxs)("div",{className:"network-item "+(e.code===t.detail.code?"selected":""),onClick:()=>t.switchNetwork(e),children:[Object(u.jsx)("span",{className:`logo ${e.symbol}`}),Object(u.jsx)("span",{children:e.name})]},n)))})]}),Object(u.jsx)("div",{className:"bg-btn",children:Object(u.jsx)("button",{className:"nav-btn connect-btn",onClick:t.connect,children:n})})]})})))},642:function(t,e,n){"use strict";var c=n(88),r=n(612),a=n(5),o=n(7),i=n(15),s=n(14),u=n(2),l=n.n(u),b=n(45),j=n(107),f=n(17);e.a=function(t){var e=function(e){Object(i.a)(u,e);var n=Object(s.a)(u);function u(){return Object(a.a)(this,u),n.apply(this,arguments)}return Object(o.a)(u,[{key:"componentDidUpdate",value:function(t){this.props.location!==t.location&&this.onRouteChanged(this.props.location)}},{key:"onRouteChanged",value:function(t){}},{key:"render",value:function(){var e=this.props,n=e.intl,a=Object(r.a)(e,["intl"]),o=n.dict;if(j.isMobile)for(var i in o)o[i].mobile&&Object.assign(o[i],o[i].mobile);return Object(f.jsx)(t,Object(c.a)(Object(c.a)({},a),{},{dict:o}))}}]),u}(l.a.Component);return Object(b.b)("intl")(Object(b.c)(e))}},643:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var c=n(21),r=n(17);function a(){var t=window.location.href;return/^https?:\/\/(app|alphatest|testnet)/.test(t)?Object(r.jsx)(c.Redirect,{to:"/lite"}):/^https?:\/\/governance/.test(t)?Object(r.jsx)(c.Redirect,{to:"/governance"}):/^https?:\/\/bridge/.test(t)?Object(r.jsx)(c.Redirect,{to:"/bridge"}):Object(r.jsx)(c.Redirect,{to:"/index"})}},656:function(t,e,n){"use strict";var c=n(606),r=n(2),a=n(617),o=(n(661),n(45)),i=(n(621),n(103)),s=n(608),u=n.n(s),l=n(35),b=n(17);e.a=Object(o.b)("intl")(Object(o.c)((function(t){var e=t.intl,n=Object(r.useState)(!1),o=Object(c.a)(n,2),s=o[0],j=o[1],f=function(t,n){e.setLocale(t),j(!1),n&&(window.location.href=Object(l.a)("locale",t))},d=u()("lang-box",{show:s});return Object(r.useEffect)((function(){return Object(l.i)("locale")&&f(Object(l.h)("locale")),function(){}}),[e]),Object(b.jsxs)("div",{className:"lang-picker",onMouseOver:function(){j(!0)},onMouseOut:function(){j(!1)},children:[Object(b.jsx)("span",{className:"locale",children:e.localeLabel}),Object(b.jsx)("img",{src:a.a,alt:"selector"}),Object(b.jsx)("div",{className:d,children:Object.keys(i).map((function(t,n){return Object(b.jsx)("div",{className:t===e.locale?"lang-item selected":"lang-item",onClick:function(e){return f(t,!0)},children:i[t]},n)}))})]})})))},659:function(t,e,n){},660:function(t,e,n){},661:function(t,e,n){}}]);
//# sourceMappingURL=3.2cda06e0.chunk.js.map