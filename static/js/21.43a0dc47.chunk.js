(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[21],{1213:function(e,t,n){"use strict";n.r(t);var a=n(4),s=n(49),i=n(690),c=n.n(i),r=n(27),o=n(618),l=n.n(o),d=n(617),u=n(13),p=n(658),f=n(691),b=n(692),m=n.p+"static/media/warn.17746a6c.svg",h=n(657),j=n(622),v=(n(868),n(20));function O({goToStep:e,lang:t,wallet:n,props:s,OnChange:i}){const[c,r]=Object(a.useState)("0.0001"),[o,d]=Object(a.useState)("0.000004"),[p,O]=Object(a.useState)("0.1"),[x,g]=Object(a.useState)(!0),[w,S]=Object(a.useState)(!1),[k,N]=Object(a.useState)([]),C={BTCUSD:"0.0001",ETHUSD:"0.001",BNBUSD:"0.01",AXSUSDT:"1",MBOXUSDT:"1",IBSCDEFI:"0.01",IGAME:"0.01",ALICEUSDT:"0.1",NULSUSDT:"1"},[E,T]=Object(a.useState)("dev"===u.a.get()?{symbol:"BTCUSD",symbolId:0,address:"0x78Db6d02EE87260a5D825B31616B5C29f927E430",chainId:"96"}:{symbol:"BTCUSD",symbolId:0,address:"0x5632A70669411D4de43d405E1880018ff85daaD3",chainId:"56"}),_=l()("dropdown-menu",{show:w}),A=()=>n&&n.detail&&n.detail.account,I=()=>{n.connect()},[R,D]=Object(a.useState)(Object(v.jsx)("button",{OnClick:I,children:t["connect-wallet"]})),L=()=>{i("multiplier",c),i("fundingRateCoefficient",o),i("transactionFeeRatio",p),i("oracleConfig",E),e(2)};return Object(a.useEffect)((()=>{A()&&(async()=>{let e=await Object(u.E)(n.detail.chainId);T(e[0]),N(e)})()}),[n.detail.chainId]),Object(a.useEffect)((()=>{let e;e=A()?Object(v.jsx)("button",{onClick:L,children:t.next}):Object(v.jsx)("button",{onClick:I,children:t["connect-wallet"]}),D(e)}),[n,n.detail,n.detail.account,E,c,o,p]),Object(v.jsxs)("div",{className:"step1",children:[Object(v.jsxs)("div",{className:"header",children:[Object(v.jsx)("span",{children:t["add-symbol"]}),Object(v.jsxs)("span",{children:[s.baseToken," @ ",t.bsc]})]}),Object(v.jsx)("div",{className:"context",children:Object(v.jsxs)("div",{className:"box",children:[Object(v.jsxs)("span",{className:"base-title",children:[" ",t.oracle]}),Object(v.jsxs)("div",{className:"select-oracle",children:[Object(v.jsx)("div",{className:"radio"}),Object(v.jsx)("span",{children:t["choose-from-exsting-ones"]})]}),Object(v.jsx)("div",{className:"select-symbol",children:Object(v.jsxs)("div",{className:"btn-group check-baseToken-btn",children:[Object(v.jsxs)("button",{type:"button",onClick:e=>{k.length>0&&(e.preventDefault(),S(!w))},className:"btn chec",children:[Object(v.jsx)(y,{spec:E}),Object(v.jsx)("span",{className:"check-base-down",children:Object(v.jsx)("img",{src:h.a,alt:""})})]}),Object(v.jsx)("div",{className:_,children:k.map(((e,t)=>Object(v.jsx)("div",{className:"dropdown-item",onClick:t=>(e=>{const t=k.find((t=>t.address===e.address&&e.chainId===t.chainId));t&&(r(C[t.symbol]),T(t),S(!1))})(e),children:Object(v.jsx)(y,{spec:e})},t)))})]})}),Object(v.jsxs)("div",{className:"warn",children:[Object(v.jsx)("img",{src:m}),Object(v.jsx)("span",{children:t["please-contact-the-team"]})]}),Object(v.jsxs)("div",{className:"symbol-name",children:[Object(v.jsx)("div",{className:"symbol-title",children:t["symbol-name"]}),Object(v.jsx)("div",{className:"symbol-value",children:E?E.symbol:""})]}),Object(v.jsxs)("div",{className:"advanced",onClick:()=>g(!x),children:[Object(v.jsx)("span",{className:"select-advanced",children:t.advanced}),x?Object(v.jsx)("img",{src:b.a}):Object(v.jsx)("img",{src:f.a})]}),!x&&Object(v.jsx)("div",{className:"advanced-border"}),x&&Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{className:"margin-rewards",children:Object(v.jsxs)("div",{className:"margin-ratio-parameters",children:[Object(v.jsx)("div",{className:"title",children:t.parameters}),Object(v.jsxs)("div",{className:"parameters",children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{className:"text",children:Object(v.jsx)(j.a,{block:!1,children:Object(v.jsx)("span",{className:"hover-title",title:t["multiplier-hover"],children:t.multiplier})})}),Object(v.jsx)("div",{className:"input-value",children:Object(v.jsx)("input",{type:"number",value:c,onChange:e=>(e=>{let{value:t}=e.target;r(t)})(e)})})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{className:"text",children:Object(v.jsx)(j.a,{block:!1,children:Object(v.jsx)("span",{className:"hover-title",title:t["funding-rate-coefficient-hover"],children:t["funding-rate-coefficient"]})})}),Object(v.jsx)("div",{className:"input-value",children:Object(v.jsx)("input",{type:"number",value:o,onChange:e=>(e=>{let{value:t}=e.target;d(t)})(e)})})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{className:"text",children:Object(v.jsx)(j.a,{block:!1,children:Object(v.jsx)("span",{className:"hover-title",title:t["transaction-fee-ratio-hover"],children:t["transaction-fee-ratio"]})})}),Object(v.jsxs)("div",{className:"input-value",children:[Object(v.jsx)("input",{type:"number",value:p,onChange:e=>(e=>{let{value:t}=e.target;O(t)})(e)}),"  %"]})]})]})]})})}),Object(v.jsx)("div",{className:"next-button",children:R})]})})]})}function x({goToStep:e,lang:t,wallet:n,props:a,parameters:s}){return Object(v.jsxs)("div",{className:"step2",children:[Object(v.jsx)("div",{className:"header",children:Object(v.jsx)("span",{children:t.confirm})}),Object(v.jsx)("div",{className:"context",children:Object(v.jsxs)("div",{className:"box",children:[Object(v.jsxs)("span",{className:"oracle-title",children:[" ",t.oracle]}),Object(v.jsx)("div",{className:"oracle-name",children:s[1]}),Object(v.jsxs)("span",{className:"symbol-title",children:[" ",t["symbol-name"]]}),Object(v.jsx)("div",{className:"symbol-name",children:s[1]}),Object(v.jsx)("div",{className:"margin-rewards",children:Object(v.jsxs)("div",{className:"margin-ratio-parameters",children:[Object(v.jsx)("div",{className:"title",children:t.parameters}),Object(v.jsxs)("div",{className:"parameters",children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{className:"text",children:t.multiplier}),Object(v.jsx)("div",{className:"input-value",children:s[3]})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{className:"text",children:t["funding-rate-coefficient"]}),Object(v.jsx)("div",{className:"input-value",children:s[5]})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{className:"text",children:t["transaction-fee-ratio"]}),Object(v.jsxs)("div",{className:"input-value",children:[Object(u.f)(s[4]).times(Object(u.f)(100)).toString(),"  %"]})]})]})]})}),Object(v.jsx)("div",{className:"next-button",children:Object(v.jsxs)("div",{className:"next-button",children:[Object(v.jsx)("button",{onClick:()=>{e(1)},children:t.cancel}),Object(v.jsx)(d.a,{click:async()=>{(await Object(u.d)(n.detail.chainId,a.address,n.detail.account,s)).success?alert(t.success):alert(t.fail)},btnText:t.ok,lang:t})]})})]})})]})}function y({spec:e}){return e?`${e.symbol}`:""}t.default=Object(s.b)("wallet")(Object(s.c)((function({wallet:e={},lang:t}){const[n,s]=Object(a.useState)("0.0001"),[i,o]=Object(a.useState)("0.000004"),[l,d]=Object(a.useState)("0.1"),[f,b]=Object(a.useState)(0),[m,h]=Object(a.useState)("dev"===u.a.get()?{symbol:"BTCUSD",address:"0x78Db6d02EE87260a5D825B31616B5C29f927E430",chainId:"96"}:{symbol:"BTCUSD",address:"0x5632A70669411D4de43d405E1880018ff85daaD3",chainId:"56"}),[j,y]=Object(a.useState)([]),{version:g,chainId:w,symbol:S,baseToken:k,address:N,type:C}=Object(r.useParams)(),E=Object(p.a)(),T={version:g,chainId:w,symbol:S,baseToken:k,address:N,wallet:e,type:C,lang:t};return E.has("baseTokenId")&&(T.baseTokenId=E.get("baseTokenId")),E.has("symbolId")&&(T.symbolId=E.get("symbolId")),Object(a.useEffect)((()=>{e&&e.detail&&e.detail.account&&(async()=>{let t=(await Object(u.A)(e.detail.chainId,N)).length;b(t)})()}),[e,e.detail,N]),Object(a.useEffect)((()=>{let e=[f,m.symbol,m.address,n,Object(u.f)(l).div(Object(u.f)(100)).toString(),i];y(e)}),[n,i,l,m,f]),Object(a.useEffect)((()=>{}),[e,e.detail]),Object(v.jsx)("div",{className:"add-symbol",children:Object(v.jsx)("div",{className:"Step-box",children:Object(v.jsxs)(c.a,{initialStep:1,children:[Object(v.jsx)(O,{lang:t,wallet:e,props:T,OnChange:(e,t)=>{"multiplier"===e&&s(t),"fundingRateCoefficient"===e&&o(t),"transactionFeeRatio"===e&&d(t),"oracleConfig"===e&&h(t)}}),Object(v.jsx)(x,{lang:t,wallet:e,props:T,parameters:j})]})})})})))},617:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),s=n.n(a),i=n(1),c=n(17),r=n(4),o=n(20);function l(e){var t=e.btnText,n=e.className,a=e.disabled,l=e.click,d=e.afterClick,u=e.checkApprove,p=e.wallet,f=e.spec,b=e.lang,m=Object(r.useState)(a?"disabled":"enabled"),h=Object(c.a)(m,2),j=h[0],v=h[1],O=Object(r.useState)(!0),x=Object(c.a)(O,2),y=x[0],g=x[1],w=Object(r.useState)(!1),S=Object(c.a)(w,2),k=S[0],N=S[1],C=Object(r.useState)(t),E=Object(c.a)(C,2),T=E[0],_=E[1],A=Object(r.useRef)(null),I=function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===j){e.next=2;break}return e.abrupt("return");case 2:return R(),e.next=5,l();case 5:e.sent&&d&&d(),D();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){v("disabled"),N(!0),A.current&&(A.current.style.display="inline-block")},D=function(){A.current&&(A.current.style.display="none"),v("enabled"),N(!1)},L=function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(u&&p&&p.detail.account)){e.next=5;break}return e.next=3,p.isApproved(f.pool,f.bTokenId);case 3:t=e.sent,g(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return R(),e.next=3,p.approve(f.pool,f.bTokenId);case 3:e.sent.success?g(!0):(g(!1),alert(b["approve-failed"])),D();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){return L(),function(){}}),[p,f,u]),Object(r.useEffect)((function(){return t&&_(t),function(){}}),[t]),Object(o.jsxs)("button",{className:n,onClick:function(){y?I():B()},children:[Object(o.jsx)("span",{className:"btn-loading-wrap",children:Object(o.jsx)("span",{ref:A,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),k?b.pending:y?T:b.approve]})}},622:function(e,t,n){"use strict";var a=n(4),s=n(20);t.a=function(e){var t=Object(a.useRef)(null);return Object(a.useEffect)((function(){var e=t.current;e&&e.querySelectorAll("[title]").forEach((function(t){var n=t.addEventListener("mouseover",(function(e){var t="hover-box-".concat((new Date).getTime());n=document.body.querySelector("#".concat(t)),(n=document.createElement("div")).style.cssText="z-index : 9;min-width : 100px;max-width : ".concat(window.screen.width,"px ;font-size : 12px ;position : absolute;background-color: #2c2d31;border: 1px solid #AAAAAA;color: #AAAAAA;border-radius: 10px;padding: 4px;"),document.body.appendChild(n);var a=e.currentTarget,s=a.getAttribute("title");n.innerText=s||a.getAttribute("origin-title"),s&&(a.setAttribute("origin-title",s),a.setAttribute("title","")),n.id=t,n.style.display="block";var i=e.currentTarget.getBoundingClientRect();if(n.style.top="".concat(i.y+i.height+window.document.documentElement.scrollTop,"px"),n.offsetWidth+e.pageX>window.screen.width)if(e.pageX-n.offsetWidth>=0)n.style.left="".concat(e.pageX-n.offsetWidth,"px");else{var c=e.pageX-n.offsetWidth/2>0?e.pageX-n.offsetWidth/2:0;n.style.left="".concat(c,"px")}else n.style.left="".concat(e.pageX,"px")}));e.addEventListener("mouseout",(function(e){n&&n.remove()}))}));return function(){t.current=null}}),[e.title]),e.block?Object(s.jsx)("div",{ref:t,children:e.children}):Object(s.jsx)("span",{ref:t,children:e.children})}},690:function(e,t,n){!function(e,t){"use strict";var n="default"in t?t.default:t;function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var e,a=c(t);return e=n?(e=c(this).constructor,Reflect.construct(a,arguments,e)):a.apply(this,arguments),a=this,!(e=e)||"object"!=typeof e&&"function"!=typeof e?o(a):e}}function d(e,t){var n,a=(t=void 0===t?{}:t).insertAt;e&&"undefined"!=typeof document&&(n=document.head||document.getElementsByTagName("head")[0],(t=document.createElement("style")).type="text/css","top"===a&&n.firstChild?n.insertBefore(t,n.firstChild):n.appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)))}var u={animated:"rsw_1z",fadeInRight:"rsw_1M",fadeInLeft:"rsw_19",fadeOutRight:"rsw_3C",fadeOutLeft:"rsw_1u"};d("/**\n * Snippets from animate.css\n * Credit goes to https://github.com/daneden\n * github.com/daneden/animate.css\n*/\n.rsw_1z {\n  -webkit-animation-duration: .8192s;\n  animation-duration: .8192s;\n  -webkit-animation-fill-mode: backwards;\n  animation-fill-mode: backwards;\n}\n\n/** fadeInRight */\n@-webkit-keyframes rsw_1M {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes rsw_1M {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.rsw_1M {\n  -webkit-animation-name: rsw_1M;\n  animation-name: rsw_1M;\n}\n\n/** fadeInLeft */\n@-webkit-keyframes rsw_19 {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes rsw_19 {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.rsw_19 {\n  -webkit-animation-name: rsw_19;\n  animation-name: rsw_19;\n}\n\n/** fadeOutRight */\n@-webkit-keyframes rsw_3C {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n@keyframes rsw_3C {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n.rsw_3C {\n  -webkit-animation-name: rsw_3C;\n  animation-name: rsw_3C;\n}\n\n/** fadeOutLeft */\n@-webkit-keyframes rsw_1u {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n@keyframes rsw_1u {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n.rsw_1u {\n  -webkit-animation-name: rsw_1u;\n  animation-name: rsw_1u;\n}\n");var p="rsw_2Y",f="rsw_2f",b="rsw_3G";d("/** Step Wizard */\n.rsw_2Y {\n    position: relative;\n}\n\n.rsw_2f {\n    opacity: 0;\n    pointer-events: none;\n    position: absolute;\n    top: 0;\n    width: 100%;\n    z-index: 0;\n}\n\n.rsw_3G {\n    opacity: 1;\n    pointer-events: inherit;\n    position: relative;\n    z-index: 1;\n}\n");var m=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}(b,t.PureComponent);var e,c,d,f=l(b);function b(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,b),i(o(t=f.call(this,e)),"initialState",(function(){var e={activeStep:0,classes:{},hashKeys:{},namedSteps:{}},n="object"===("undefined"==typeof window?"undefined":a(window))?t.getHash():"",s=t.getSteps();s.forEach((function(t,n){e.hashKeys[n]=t.props&&t.props.hashKey||"step".concat(n+1),e.hashKeys[e.hashKeys[n]]=n,e.namedSteps[n]=t.props&&t.props.stepName||"step".concat(n+1),e.namedSteps[e.namedSteps[n]]=n}));var i=t.props.initialStep-1;return i&&s[i]&&(e.activeStep=i),t.props.isHashEnabled&&n&&void 0!==e.hashKeys[n]&&(e.activeStep=e.hashKeys[n]),t.props.transitions&&(e.classes[e.activeStep]=t.props.transitions.intro||""),e})),i(o(t),"getHash",(function(){return decodeURI(window.location.hash).replace(/^#/,"")})),i(o(t),"getTransitions",(function(){return t.props.transitions||{enterRight:"".concat(u.animated," ").concat(u.fadeInRight),enterLeft:"".concat(u.animated," ").concat(u.fadeInLeft),exitRight:"".concat(u.animated," ").concat(u.fadeOutRight),exitLeft:"".concat(u.animated," ").concat(u.fadeOutLeft)}})),i(o(t),"onHashChange",(function(){var e=t.state.hashKeys[t.getHash()];void 0!==e&&t.setActiveStep(e)})),i(o(t),"isInvalidStep",(function(e){return e<0||e>=t.totalSteps})),i(o(t),"setActiveStep",(function(e){var n,a,s=t.state.activeStep;s!==e&&(t.isInvalidStep(e)?console.error("".concat(e+1," is an invalid step")):(n=t.state.classes,a=t.getTransitions(),s<e?(n[s]=a.exitLeft,n[e]=a.enterRight):(n[s]=a.exitRight,n[e]=a.enterLeft),t.setState({activeStep:e,classes:n},(function(){t.onStepChange({previousStep:s+1,activeStep:e+1})}))))})),i(o(t),"onStepChange",(function(e){t.props.onStepChange(e),t.props.isHashEnabled&&t.updateHash(t.state.activeStep)})),i(o(t),"getSteps",(function(){return n.Children.toArray(t.props.children)})),i(o(t),"firstStep",(function(){return t.goToStep(1)})),i(o(t),"lastStep",(function(){return t.goToStep(t.totalSteps)})),i(o(t),"nextStep",(function(){return t.setActiveStep(t.state.activeStep+1)})),i(o(t),"previousStep",(function(){return t.setActiveStep(t.state.activeStep-1)})),i(o(t),"goToStep",(function(e){t.props.isHashEnabled&&"string"==typeof e&&void 0!==t.state.hashKeys[e]?t.setActiveStep(t.state.hashKeys[e]):t.setActiveStep(e-1)})),i(o(t),"goToNamedStep",(function(e){"string"==typeof e&&void 0!==t.state.namedSteps[e]?t.setActiveStep(t.state.namedSteps[e]):console.error('Cannot find step with name "'.concat(e,'"'))})),i(o(t),"updateHash",(function(e){window.location.hash=t.state.hashKeys[e]})),i(o(t),"isReactComponent",(function(e){return"function"==typeof(e=e.type)||"object"===a(e)})),t.state=t.initialState(),t}return e=b,(c=[{key:"componentDidMount",value:function(){this.props.isHashEnabled&&window.addEventListener("hashchange",this.onHashChange),this.props.instance(this)}},{key:"componentWillUnmount",value:function(){this.props.isHashEnabled&&window.removeEventListener("hashchange",this.onHashChange)}},{key:"currentStep",get:function(){return this.state.activeStep+1}},{key:"totalSteps",get:function(){return this.getSteps().length}},{key:"render",value:function(){var e=this,t={currentStep:this.currentStep,totalSteps:this.totalSteps,nextStep:this.nextStep,previousStep:this.previousStep,goToStep:this.goToStep,goToNamedStep:this.goToNamedStep,firstStep:this.firstStep,lastStep:this.lastStep},a=this.state.classes,s=n.Children.map(this.getSteps(),(function(s,i){return s?(t.isActive=i===e.state.activeStep,t.transitions=a[i],!e.props.isLazyMount||e.props.isLazyMount&&t.isActive?n.createElement(h,t,e.isReactComponent(s)?n.cloneElement(s,t):s):null):null}));return n.createElement("div",{className:this.props.className},this.props.nav&&n.cloneElement(this.props.nav,t),n.createElement("div",{className:p},s))}}])&&s(e.prototype,c),d&&s(e,d),b}();m.defaultProps={children:[],className:null,initialStep:1,instance:function(){},isHashEnabled:!1,isLazyMount:!1,nav:null,onStepChange:function(){},transitions:void 0};var h=function(e){var t=e.children,a=e.isActive;return e=e.transitions,n.createElement("div",{className:"".concat(f," ").concat(e," ").concat(a?b:"").trim()},t)};h.defaultProps={children:[],isActive:!1,transitions:""},e.Step=h,e.default=m,Object.defineProperty(e,"__esModule",{value:!0})}(t,n(4))},691:function(e,t,n){"use strict";t.a=n.p+"static/media/down.6c22eb0d.svg"},692:function(e,t,n){"use strict";t.a=n.p+"static/media/up.42389455.svg"},868:function(e,t,n){}}]);
//# sourceMappingURL=21.43a0dc47.chunk.js.map