(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[23],{1212:function(e,t,n){"use strict";n.r(t);var a=n(4),s=n(48),i=n(689),c=n.n(i),r=n(24),o=n(617),l=n.n(o),d=n(616),p=n(15),u=n(657),b=n(690),f=n(691),m=n.p+"static/media/warn.17746a6c.svg",h=n(656),j=(n(867),n(20));function v({goToStep:e,lang:t,wallet:n,props:s,OnChange:i}){const[c,r]=Object(a.useState)("1"),[o,d]=Object(a.useState)("0.000004"),[u,v]=Object(a.useState)("0.1"),[O,x]=Object(a.useState)(!0),[w,S]=Object(a.useState)(!1),[g,k]=Object(a.useState)([]),[N,C]=Object(a.useState)("dev"===p.a.get()?{symbol:"BTCUSD",symbolId:0,address:"0x78Db6d02EE87260a5D825B31616B5C29f927E430",chainId:"96"}:{symbol:"BTCUSD",symbolId:0,address:"0x5632A70669411D4de43d405E1880018ff85daaD3",chainId:"56"}),_=l()("dropdown-menu",{show:w}),E=()=>n&&n.detail&&n.detail.account,T=()=>{n.connect()},[I,R]=Object(a.useState)(Object(j.jsx)("button",{OnClick:T,children:t["connect-wallet"]})),A=()=>{i("multiplier",c),i("fundingRateCoefficient",o),i("transactionFeeRatio",u),i("oracleConfig",N),e(2)};return Object(a.useEffect)((()=>{E()&&(async()=>{let e=await Object(p.E)(n.detail.chainId);C(e[0]),k(e)})()}),[n.detail.chainId]),Object(a.useEffect)((()=>{let e;e=E()?Object(j.jsx)("button",{onClick:A,children:t.next}):Object(j.jsx)("button",{onClick:T,children:t["connect-wallet"]}),R(e)}),[n,n.detail,n.detail.account,N,c,o,u]),Object(j.jsxs)("div",{className:"step1",children:[Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)("span",{children:t["add-symbol"]}),Object(j.jsxs)("span",{children:[s.baseToken," @ ",t.bsc]})]}),Object(j.jsx)("div",{className:"context",children:Object(j.jsxs)("div",{className:"box",children:[Object(j.jsxs)("span",{className:"base-title",children:[" ",t.oracle]}),Object(j.jsxs)("div",{className:"select-oracle",children:[Object(j.jsx)("div",{className:"radio"}),Object(j.jsx)("span",{children:t["choose-from-exsting-ones"]})]}),Object(j.jsx)("div",{className:"select-symbol",children:Object(j.jsxs)("div",{className:"btn-group check-baseToken-btn",children:[Object(j.jsxs)("button",{type:"button",onClick:e=>{g.length>0&&(e.preventDefault(),S(!w))},className:"btn chec",children:[Object(j.jsx)(y,{spec:N}),Object(j.jsx)("span",{className:"check-base-down",children:Object(j.jsx)("img",{src:h.a,alt:""})})]}),Object(j.jsx)("div",{className:_,children:g.map(((e,t)=>Object(j.jsx)("div",{className:"dropdown-item",onClick:t=>(e=>{const t=g.find((t=>t.address===e.address&&e.chainId===t.chainId));t&&(C(t),S(!1))})(e),children:Object(j.jsx)(y,{spec:e})},t)))})]})}),Object(j.jsxs)("div",{className:"warn",children:[Object(j.jsx)("img",{src:m}),Object(j.jsx)("span",{children:t["please-contact-the-team"]})]}),Object(j.jsxs)("div",{className:"symbol-name",children:[Object(j.jsx)("div",{className:"symbol-title",children:t["symbol-name"]}),Object(j.jsx)("div",{className:"symbol-value",children:N?N.symbol:""})]}),Object(j.jsx)("div",{className:"advanced",children:Object(j.jsxs)("span",{className:"select-advanced",onClick:()=>x(!O),children:[t.advanced,O?Object(j.jsx)("img",{src:f.a}):Object(j.jsx)("img",{src:b.a})]})}),O&&Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"margin-rewards",children:Object(j.jsxs)("div",{className:"margin-ratio-parameters",children:[Object(j.jsx)("div",{className:"title",children:t.parameters}),Object(j.jsxs)("div",{className:"parameters",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"text",children:t.multiplier}),Object(j.jsx)("div",{className:"input-value",children:Object(j.jsx)("input",{type:"number",value:c,onChange:e=>(e=>{let{value:t}=e.target;r(t)})(e)})})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"text",children:t["funding-rate-coefficient"]}),Object(j.jsx)("div",{className:"input-value",children:Object(j.jsx)("input",{type:"number",value:o,onChange:e=>(e=>{let{value:t}=e.target;d(t)})(e)})})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"text",children:t["transaction-fee-ratio"]}),Object(j.jsxs)("div",{className:"input-value",children:[Object(j.jsx)("input",{type:"number",value:u,onChange:e=>(e=>{let{value:t}=e.target;v(t)})(e)}),"  %"]})]})]})]})})}),Object(j.jsx)("div",{className:"next-button",children:I})]})})]})}function O({goToStep:e,lang:t,wallet:n,props:a,parameters:s}){return Object(j.jsxs)("div",{className:"step2",children:[Object(j.jsx)("div",{className:"header",children:Object(j.jsx)("span",{children:t.confirm})}),Object(j.jsx)("div",{className:"context",children:Object(j.jsxs)("div",{className:"box",children:[Object(j.jsxs)("span",{className:"oracle-title",children:[" ",t.oracle]}),Object(j.jsx)("div",{className:"oracle-name",children:s[1]}),Object(j.jsxs)("span",{className:"symbol-title",children:[" ",t["symbol-name"]]}),Object(j.jsx)("div",{className:"symbol-name",children:s[1]}),Object(j.jsx)("div",{className:"margin-rewards",children:Object(j.jsxs)("div",{className:"margin-ratio-parameters",children:[Object(j.jsx)("div",{className:"title",children:t.parameters}),Object(j.jsxs)("div",{className:"parameters",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"text",children:t.multiplier}),Object(j.jsx)("div",{className:"input-value",children:s[3]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"text",children:t["funding-rate-coefficient"]}),Object(j.jsx)("div",{className:"input-value",children:s[4]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"text",children:t["transaction-fee-ratio"]}),Object(j.jsxs)("div",{className:"input-value",children:[100*s[5],"  %"]})]})]})]})}),Object(j.jsx)("div",{className:"next-button",children:Object(j.jsxs)("div",{className:"next-button",children:[Object(j.jsx)("button",{onClick:()=>{e(1)},children:t.cancel}),Object(j.jsx)(d.a,{click:async()=>{(await Object(p.d)(n.detail.chainId,a.address,n.detail.account,s)).success?alert(t.success):alert(t.fail)},btnText:t.ok,lang:t})]})})]})})]})}function y({spec:e}){return e?`${e.symbol}`:""}t.default=Object(s.b)("wallet")(Object(s.c)((function({wallet:e={},lang:t}){const[n,s]=Object(a.useState)("1"),[i,o]=Object(a.useState)("0.000004"),[l,d]=Object(a.useState)("0.1"),[b,f]=Object(a.useState)(0),[m,h]=Object(a.useState)("dev"===p.a.get()?{symbol:"BTCUSD",address:"0x78Db6d02EE87260a5D825B31616B5C29f927E430",chainId:"96"}:{symbol:"BTCUSD",address:"0x5632A70669411D4de43d405E1880018ff85daaD3",chainId:"56"}),[y,x]=Object(a.useState)([]),{version:w,chainId:S,symbol:g,baseToken:k,address:N,type:C}=Object(r.useParams)(),_=Object(u.a)(),E={version:w,chainId:S,symbol:g,baseToken:k,address:N,wallet:e,type:C,lang:t};return _.has("baseTokenId")&&(E.baseTokenId=_.get("baseTokenId")),_.has("symbolId")&&(E.symbolId=_.get("symbolId")),Object(a.useEffect)((()=>{e&&e.detail&&e.detail.account&&(async()=>{let t=(await Object(p.A)(e.detail.chainId,N)).length;f(t)})()}),[e,e.detail,N]),Object(a.useEffect)((()=>{let e=[b,m.symbol,m.address,n,i,Object(p.f)(l).div(Object(p.f)(100)).toString()];x(e)}),[n,i,l,m,b]),Object(a.useEffect)((()=>{}),[e,e.detail]),Object(j.jsx)("div",{className:"add-symbol",children:Object(j.jsx)("div",{className:"Step-box",children:Object(j.jsxs)(c.a,{initialStep:1,children:[Object(j.jsx)(v,{lang:t,wallet:e,props:E,OnChange:(e,t)=>{"multiplier"===e&&s(t),"fundingRateCoefficient"===e&&o(t),"transactionFeeRatio"===e&&d(t),"oracleConfig"===e&&h(t)}}),Object(j.jsx)(O,{lang:t,wallet:e,props:E,parameters:y})]})})})})))},616:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),s=n.n(a),i=n(1),c=n(13),r=n(4),o=n(20);function l(e){var t=e.btnText,n=e.className,a=e.disabled,l=e.click,d=e.afterClick,p=e.checkApprove,u=e.wallet,b=e.spec,f=e.lang,m=Object(r.useState)(a?"disabled":"enabled"),h=Object(c.a)(m,2),j=h[0],v=h[1],O=Object(r.useState)(!0),y=Object(c.a)(O,2),x=y[0],w=y[1],S=Object(r.useState)(!1),g=Object(c.a)(S,2),k=g[0],N=g[1],C=Object(r.useState)(t),_=Object(c.a)(C,2),E=_[0],T=_[1],I=Object(r.useRef)(null),R=function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===j){e.next=2;break}return e.abrupt("return");case 2:return A(),e.next=5,l();case 5:e.sent&&d&&d(),L();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){v("disabled"),N(!0),I.current&&(I.current.style.display="inline-block")},L=function(){I.current&&(I.current.style.display="none"),v("enabled"),N(!1)},D=function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(p&&u&&u.detail.account)){e.next=5;break}return e.next=3,u.isApproved(b.pool,b.bTokenId);case 3:t=e.sent,w(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A(),e.next=3,u.approve(b.pool,b.bTokenId);case 3:e.sent.success?w(!0):(w(!1),alert(f["approve-failed"])),L();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){return D(),function(){}}),[u,b,p]),Object(r.useEffect)((function(){return t&&T(t),function(){}}),[t]),Object(o.jsxs)("button",{className:n,onClick:function(){x?R():H()},children:[Object(o.jsx)("span",{className:"btn-loading-wrap",children:Object(o.jsx)("span",{ref:I,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),k?f.pending:x?E:f.approve]})}},689:function(e,t,n){!function(e,t){"use strict";var n="default"in t?t.default:t;function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var e,a=c(t);return e=n?(e=c(this).constructor,Reflect.construct(a,arguments,e)):a.apply(this,arguments),a=this,!(e=e)||"object"!=typeof e&&"function"!=typeof e?o(a):e}}function d(e,t){var n,a=(t=void 0===t?{}:t).insertAt;e&&"undefined"!=typeof document&&(n=document.head||document.getElementsByTagName("head")[0],(t=document.createElement("style")).type="text/css","top"===a&&n.firstChild?n.insertBefore(t,n.firstChild):n.appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)))}var p={animated:"rsw_1z",fadeInRight:"rsw_1M",fadeInLeft:"rsw_19",fadeOutRight:"rsw_3C",fadeOutLeft:"rsw_1u"};d("/**\n * Snippets from animate.css\n * Credit goes to https://github.com/daneden\n * github.com/daneden/animate.css\n*/\n.rsw_1z {\n  -webkit-animation-duration: .8192s;\n  animation-duration: .8192s;\n  -webkit-animation-fill-mode: backwards;\n  animation-fill-mode: backwards;\n}\n\n/** fadeInRight */\n@-webkit-keyframes rsw_1M {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes rsw_1M {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.rsw_1M {\n  -webkit-animation-name: rsw_1M;\n  animation-name: rsw_1M;\n}\n\n/** fadeInLeft */\n@-webkit-keyframes rsw_19 {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes rsw_19 {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.rsw_19 {\n  -webkit-animation-name: rsw_19;\n  animation-name: rsw_19;\n}\n\n/** fadeOutRight */\n@-webkit-keyframes rsw_3C {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n@keyframes rsw_3C {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n.rsw_3C {\n  -webkit-animation-name: rsw_3C;\n  animation-name: rsw_3C;\n}\n\n/** fadeOutLeft */\n@-webkit-keyframes rsw_1u {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n@keyframes rsw_1u {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n.rsw_1u {\n  -webkit-animation-name: rsw_1u;\n  animation-name: rsw_1u;\n}\n");var u="rsw_2Y",b="rsw_2f",f="rsw_3G";d("/** Step Wizard */\n.rsw_2Y {\n    position: relative;\n}\n\n.rsw_2f {\n    opacity: 0;\n    pointer-events: none;\n    position: absolute;\n    top: 0;\n    width: 100%;\n    z-index: 0;\n}\n\n.rsw_3G {\n    opacity: 1;\n    pointer-events: inherit;\n    position: relative;\n    z-index: 1;\n}\n");var m=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}(f,t.PureComponent);var e,c,d,b=l(f);function f(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),i(o(t=b.call(this,e)),"initialState",(function(){var e={activeStep:0,classes:{},hashKeys:{},namedSteps:{}},n="object"===("undefined"==typeof window?"undefined":a(window))?t.getHash():"",s=t.getSteps();s.forEach((function(t,n){e.hashKeys[n]=t.props&&t.props.hashKey||"step".concat(n+1),e.hashKeys[e.hashKeys[n]]=n,e.namedSteps[n]=t.props&&t.props.stepName||"step".concat(n+1),e.namedSteps[e.namedSteps[n]]=n}));var i=t.props.initialStep-1;return i&&s[i]&&(e.activeStep=i),t.props.isHashEnabled&&n&&void 0!==e.hashKeys[n]&&(e.activeStep=e.hashKeys[n]),t.props.transitions&&(e.classes[e.activeStep]=t.props.transitions.intro||""),e})),i(o(t),"getHash",(function(){return decodeURI(window.location.hash).replace(/^#/,"")})),i(o(t),"getTransitions",(function(){return t.props.transitions||{enterRight:"".concat(p.animated," ").concat(p.fadeInRight),enterLeft:"".concat(p.animated," ").concat(p.fadeInLeft),exitRight:"".concat(p.animated," ").concat(p.fadeOutRight),exitLeft:"".concat(p.animated," ").concat(p.fadeOutLeft)}})),i(o(t),"onHashChange",(function(){var e=t.state.hashKeys[t.getHash()];void 0!==e&&t.setActiveStep(e)})),i(o(t),"isInvalidStep",(function(e){return e<0||e>=t.totalSteps})),i(o(t),"setActiveStep",(function(e){var n,a,s=t.state.activeStep;s!==e&&(t.isInvalidStep(e)?console.error("".concat(e+1," is an invalid step")):(n=t.state.classes,a=t.getTransitions(),s<e?(n[s]=a.exitLeft,n[e]=a.enterRight):(n[s]=a.exitRight,n[e]=a.enterLeft),t.setState({activeStep:e,classes:n},(function(){t.onStepChange({previousStep:s+1,activeStep:e+1})}))))})),i(o(t),"onStepChange",(function(e){t.props.onStepChange(e),t.props.isHashEnabled&&t.updateHash(t.state.activeStep)})),i(o(t),"getSteps",(function(){return n.Children.toArray(t.props.children)})),i(o(t),"firstStep",(function(){return t.goToStep(1)})),i(o(t),"lastStep",(function(){return t.goToStep(t.totalSteps)})),i(o(t),"nextStep",(function(){return t.setActiveStep(t.state.activeStep+1)})),i(o(t),"previousStep",(function(){return t.setActiveStep(t.state.activeStep-1)})),i(o(t),"goToStep",(function(e){t.props.isHashEnabled&&"string"==typeof e&&void 0!==t.state.hashKeys[e]?t.setActiveStep(t.state.hashKeys[e]):t.setActiveStep(e-1)})),i(o(t),"goToNamedStep",(function(e){"string"==typeof e&&void 0!==t.state.namedSteps[e]?t.setActiveStep(t.state.namedSteps[e]):console.error('Cannot find step with name "'.concat(e,'"'))})),i(o(t),"updateHash",(function(e){window.location.hash=t.state.hashKeys[e]})),i(o(t),"isReactComponent",(function(e){return"function"==typeof(e=e.type)||"object"===a(e)})),t.state=t.initialState(),t}return e=f,(c=[{key:"componentDidMount",value:function(){this.props.isHashEnabled&&window.addEventListener("hashchange",this.onHashChange),this.props.instance(this)}},{key:"componentWillUnmount",value:function(){this.props.isHashEnabled&&window.removeEventListener("hashchange",this.onHashChange)}},{key:"currentStep",get:function(){return this.state.activeStep+1}},{key:"totalSteps",get:function(){return this.getSteps().length}},{key:"render",value:function(){var e=this,t={currentStep:this.currentStep,totalSteps:this.totalSteps,nextStep:this.nextStep,previousStep:this.previousStep,goToStep:this.goToStep,goToNamedStep:this.goToNamedStep,firstStep:this.firstStep,lastStep:this.lastStep},a=this.state.classes,s=n.Children.map(this.getSteps(),(function(s,i){return s?(t.isActive=i===e.state.activeStep,t.transitions=a[i],!e.props.isLazyMount||e.props.isLazyMount&&t.isActive?n.createElement(h,t,e.isReactComponent(s)?n.cloneElement(s,t):s):null):null}));return n.createElement("div",{className:this.props.className},this.props.nav&&n.cloneElement(this.props.nav,t),n.createElement("div",{className:u},s))}}])&&s(e.prototype,c),d&&s(e,d),f}();m.defaultProps={children:[],className:null,initialStep:1,instance:function(){},isHashEnabled:!1,isLazyMount:!1,nav:null,onStepChange:function(){},transitions:void 0};var h=function(e){var t=e.children,a=e.isActive;return e=e.transitions,n.createElement("div",{className:"".concat(b," ").concat(e," ").concat(a?f:"").trim()},t)};h.defaultProps={children:[],isActive:!1,transitions:""},e.Step=h,e.default=m,Object.defineProperty(e,"__esModule",{value:!0})}(t,n(4))},690:function(e,t,n){"use strict";t.a=n.p+"static/media/down.6c22eb0d.svg"},691:function(e,t,n){"use strict";t.a=n.p+"static/media/up.42389455.svg"},867:function(e,t,n){}}]);
//# sourceMappingURL=23.905e46b1.chunk.js.map