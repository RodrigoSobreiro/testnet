(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[22],{1181:function(e,t,n){"use strict";n.r(t);var a=n(4),s=n(48),i=n(689),c=n.n(i),r=n(616),o=n(15),l=(n(866),n(690)),d=n(691),u=n(20);function p({goToStep:e,lang:t,wallet:n,OnChange:s}){const[i,c]=Object(a.useState)(!1),[r,o]=Object(a.useState)(""),[p,j]=Object(a.useState)(10),[b,f]=Object(a.useState)(5),[h,m]=Object(a.useState)(100),[v,O]=Object(a.useState)(50),[x,g]=Object(a.useState)(1e3),[w,S]=Object(a.useState)(0),y=()=>{n.connect()},[N,k]=Object(a.useState)(Object(u.jsx)("button",{OnClick:y,children:t["connect-wallet"]})),C=()=>{42===r.length&&0===r.indexOf("0x")?""!==p&&""!==b&&""!==h&&""!==v&&""!==x&&""!==w?(s("baseTokenAddress",r),s("initialMargin",p),s("maintenanceMargin",b),s("poolMargin",h),s("cutRatio",v),s("maxReward",x),s("minReward",w),e(2)):alert(t["please-fill-in-the-data-completely"]):alert(t["please-enter-a-correct-address"])};return Object(a.useEffect)((()=>{let e;e=n&&n.detail&&n.detail.account?Object(u.jsx)("button",{onClick:C,children:t.next}):Object(u.jsx)("button",{onClick:y,children:t["connect-wallet"]}),k(e)}),[n,n.detail,n.detail.account,w,x,v,r,p,b,h]),Object(u.jsxs)("div",{className:"step1",children:[Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)("span",{children:t["add-pool"]}),Object(u.jsx)("span",{children:t.bsc})]}),Object(u.jsx)("div",{className:"context",children:Object(u.jsxs)("div",{className:"box",children:[Object(u.jsxs)("span",{className:"base-title",children:[" ",t["base-token-addresses"]]}),Object(u.jsx)("div",{children:Object(u.jsx)("input",{className:"base-token-address",value:r,onChange:e=>(e=>{let{value:t}=e.target;o(t)})(e)})}),Object(u.jsx)("div",{className:"advanced",children:Object(u.jsxs)("span",{className:"select-advanced",onClick:()=>c(!i),children:[t.advanced,i?Object(u.jsx)("img",{src:d.a}):Object(u.jsx)("img",{src:l.a})]})}),i&&Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"margin-rewards",children:[Object(u.jsxs)("div",{className:"margin-ratio-parameters",children:[Object(u.jsx)("div",{className:"title",children:t["margin-ratio-parameters"]}),Object(u.jsxs)("div",{className:"parameters",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"text",children:t["initial-margin"]}),Object(u.jsxs)("div",{className:"input-value",children:[Object(u.jsx)("input",{type:"number",value:p,onChange:e=>(e=>{let{value:t}=e.target;j(t)})(e)})," %"]})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"text",children:t["maintenance-margin"]}),Object(u.jsxs)("div",{className:"input-value",children:[Object(u.jsx)("input",{type:"number",value:b,onChange:e=>(e=>{let{value:t}=e.target;f(t)})(e)})," %"]})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"text",children:t["pool-margin"]}),Object(u.jsxs)("div",{className:"input-value",children:[Object(u.jsx)("input",{type:"number",value:h,onChange:e=>(e=>{let{value:t}=e.target;m(t)})(e)})," %"]})]})]})]}),Object(u.jsxs)("div",{className:"rewards-for-liquidates",children:[Object(u.jsx)("div",{className:"title",children:t["rewards-for-liquidates"]}),Object(u.jsxs)("div",{className:"parameters",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"text",children:t["cut-ratio"]}),Object(u.jsxs)("div",{className:"input-value",children:[Object(u.jsx)("input",{type:"number",value:v,onChange:e=>(e=>{let{value:t}=e.target;O(t)})(e)})," %"]})]}),Object(u.jsxs)("div",{className:"no-fix",children:[Object(u.jsx)("div",{className:"text",children:t["max-reward"]}),Object(u.jsx)("div",{className:"input-value",children:Object(u.jsx)("input",{type:"number",value:x,onChange:e=>(e=>{let{value:t}=e.target;g(t)})(e)})})]}),Object(u.jsxs)("div",{className:"no-fix",children:[Object(u.jsx)("div",{className:"text",children:t["min-reward"]}),Object(u.jsx)("div",{className:"input-value",children:Object(u.jsx)("input",{type:"number",value:w,onChange:e=>(e=>{let{value:t}=e.target;S(t)})(e)})})]})]})]}),Object(u.jsxs)("div",{className:"protocol-collect-ratio",children:[t["protocol-fee-collect-ratio"],"\xa0 \xa0  20%"]})]})}),Object(u.jsx)("div",{className:"next-button",children:N})]})})]})}function j({goToStep:e,lang:t,wallet:n,OnChange:s}){const[i,c]=Object(a.useState)("");return Object(u.jsxs)("div",{className:"step2",children:[Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)("span",{children:t["add-pool"]}),Object(u.jsx)("span",{children:t.bsc})]}),Object(u.jsx)("div",{className:"context",children:Object(u.jsxs)("div",{className:"box",children:[Object(u.jsx)("div",{children:t["the-protocol-requires"]}),Object(u.jsxs)("div",{children:[t["please-provide-the-address"],":"]}),Object(u.jsx)("div",{className:"address-input",children:Object(u.jsx)("input",{value:i,onChange:e=>(e=>{let{value:t}=e.target;c(t)})(e)})}),Object(u.jsx)("div",{children:t["for-example"]}),Object(u.jsxs)("div",{className:"next-button",children:[Object(u.jsx)("button",{onClick:()=>{e(1)},children:t.cancel}),Object(u.jsx)("button",{onClick:()=>{42===i.length&&0===i.indexOf("0x")?(s("baseTokenAddressOther",i),e(3)):alert(t["please-enter-a-correct-address"])},children:t.send})]})]})})]})}function b({goToStep:e,lang:t,wallet:n,params:s}){const[i,c]=Object(a.useState)([]),[l,d]=Object(a.useState)(""),[p,j]=Object(a.useState)("");Object(a.useEffect)((()=>{let[e,t,n,a,i,r,l,u]=[...s],p=[Object(o.f)(i).div(Object(o.f)(100)).toString(),Object(o.f)(e).div(Object(o.f)(100)).toString(),Object(o.f)(a).div(Object(o.f)(100)).toString(),u,l,Object(o.f)(r).div(Object(o.f)(100)).toString(),0];d(t),j(n),c(p)}),[s]);return Object(u.jsxs)("div",{className:"step3",children:[Object(u.jsx)("div",{className:"header",children:Object(u.jsx)("span",{children:t.confirm})}),Object(u.jsx)("div",{className:"context",children:Object(u.jsxs)("div",{className:"box",children:[Object(u.jsxs)("span",{className:"base-title",children:[" ",t["base-token-addresses"]]}),Object(u.jsx)("div",{className:"address-token",children:s[1]}),Object(u.jsxs)("div",{className:"margin-rewards",children:[Object(u.jsxs)("div",{className:"margin-ratio-parameters",children:[Object(u.jsx)("div",{className:"title",children:t["margin-ratio-parameters"]}),Object(u.jsxs)("div",{className:"parameters",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"text",children:t["initial-margin"]}),Object(u.jsxs)("div",{className:"input-value",children:[s[0]," %"]})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"text",children:t["maintenance-margin"]}),Object(u.jsxs)("div",{className:"input-value",children:[s[3]," %"]})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"text",children:t["pool-margin"]}),Object(u.jsxs)("div",{className:"input-value",children:[s[4]," %"]})]})]})]}),Object(u.jsxs)("div",{className:"rewards-for-liquidates",children:[Object(u.jsx)("div",{className:"title",children:t["rewards-for-liquidates"]}),Object(u.jsxs)("div",{className:"parameters",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"text",children:t["cut-ratio"]}),Object(u.jsxs)("div",{className:"input-value",children:[s[5]," %"]})]}),Object(u.jsxs)("div",{className:"no-fix",children:[Object(u.jsx)("div",{className:"text",children:t["max-reward"]}),Object(u.jsx)("div",{className:"input-value",children:s[6]})]}),Object(u.jsxs)("div",{className:"no-fix",children:[Object(u.jsx)("div",{className:"text",children:t["min-reward"]}),Object(u.jsx)("div",{className:"input-value",children:s[7]})]})]})]})]}),Object(u.jsx)("div",{className:"next-button",children:Object(u.jsxs)("div",{className:"next-button",children:[Object(u.jsx)("button",{onClick:()=>{e(1)},children:t.cancel}),Object(u.jsx)(r.a,{click:async()=>{let e=await Object(o.i)(n.detail.chainId,n.detail.account,i,l,p);console.log(e),e.success?alert(t.success):alert(t.fail)},btnText:t.ok,lang:t})]})})]})})]})}t.default=Object(s.b)("wallet","trading")(Object(s.c)((function({wallet:e={},lang:t}){const[n,s]=Object(a.useState)(""),[i,r]=Object(a.useState)(""),[o,l]=Object(a.useState)(10),[d,f]=Object(a.useState)(5),[h,m]=Object(a.useState)(100),[v,O]=Object(a.useState)(50),[x,g]=Object(a.useState)(1e3),[w,S]=Object(a.useState)(0),[y,N]=Object(a.useState)([]),k=(e,t)=>{"baseTokenAddress"===e&&s(t),"initialMargin"===e&&l(t),"baseTokenAddressOther"===e&&r(t),"maintenanceMargin"===e&&f(t),"poolMargin"===e&&m(t),"cutRatio"===e&&O(t),"maxReward"===e&&g(t),"minReward"===e&&S(t)};return Object(a.useEffect)((()=>{}),[e,e.detail]),Object(a.useEffect)((()=>{N([o,n,i,d,h,v,x,w])}),[o,n,i,d,h,v,x,w]),Object(u.jsx)("div",{className:"add-pool",children:Object(u.jsx)("div",{className:"Step-box",children:Object(u.jsxs)(c.a,{initialStep:1,children:[Object(u.jsx)(p,{lang:t,wallet:e,OnChange:k}),Object(u.jsx)(j,{lang:t,wallet:e,OnChange:k}),Object(u.jsx)(b,{lang:t,wallet:e,params:y})]})})})})))},616:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),s=n.n(a),i=n(1),c=n(13),r=n(4),o=n(20);function l(e){var t=e.btnText,n=e.className,a=e.disabled,l=e.click,d=e.afterClick,u=e.checkApprove,p=e.wallet,j=e.spec,b=e.lang,f=Object(r.useState)(a?"disabled":"enabled"),h=Object(c.a)(f,2),m=h[0],v=h[1],O=Object(r.useState)(!0),x=Object(c.a)(O,2),g=x[0],w=x[1],S=Object(r.useState)(!1),y=Object(c.a)(S,2),N=y[0],k=y[1],C=Object(r.useState)(t),_=Object(c.a)(C,2),R=_[0],E=_[1],T=Object(r.useRef)(null),A=function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===m){e.next=2;break}return e.abrupt("return");case 2:return M(),e.next=5,l();case 5:e.sent&&d&&d(),L();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){v("disabled"),k(!0),T.current&&(T.current.style.display="inline-block")},L=function(){T.current&&(T.current.style.display="none"),v("enabled"),k(!1)},H=function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(u&&p&&p.detail.account)){e.next=5;break}return e.next=3,p.isApproved(j.pool,j.bTokenId);case 3:t=e.sent,w(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M(),e.next=3,p.approve(j.pool,j.bTokenId);case 3:e.sent.success?w(!0):(w(!1),alert(b["approve-failed"])),L();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){return H(),function(){}}),[p,j,u]),Object(r.useEffect)((function(){return t&&E(t),function(){}}),[t]),Object(o.jsxs)("button",{className:n,onClick:function(){g?A():I()},children:[Object(o.jsx)("span",{className:"btn-loading-wrap",children:Object(o.jsx)("span",{ref:T,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),N?b.pending:g?R:b.approve]})}},689:function(e,t,n){!function(e,t){"use strict";var n="default"in t?t.default:t;function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var e,a=c(t);return e=n?(e=c(this).constructor,Reflect.construct(a,arguments,e)):a.apply(this,arguments),a=this,!(e=e)||"object"!=typeof e&&"function"!=typeof e?o(a):e}}function d(e,t){var n,a=(t=void 0===t?{}:t).insertAt;e&&"undefined"!=typeof document&&(n=document.head||document.getElementsByTagName("head")[0],(t=document.createElement("style")).type="text/css","top"===a&&n.firstChild?n.insertBefore(t,n.firstChild):n.appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)))}var u={animated:"rsw_1z",fadeInRight:"rsw_1M",fadeInLeft:"rsw_19",fadeOutRight:"rsw_3C",fadeOutLeft:"rsw_1u"};d("/**\n * Snippets from animate.css\n * Credit goes to https://github.com/daneden\n * github.com/daneden/animate.css\n*/\n.rsw_1z {\n  -webkit-animation-duration: .8192s;\n  animation-duration: .8192s;\n  -webkit-animation-fill-mode: backwards;\n  animation-fill-mode: backwards;\n}\n\n/** fadeInRight */\n@-webkit-keyframes rsw_1M {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes rsw_1M {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.rsw_1M {\n  -webkit-animation-name: rsw_1M;\n  animation-name: rsw_1M;\n}\n\n/** fadeInLeft */\n@-webkit-keyframes rsw_19 {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes rsw_19 {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.rsw_19 {\n  -webkit-animation-name: rsw_19;\n  animation-name: rsw_19;\n}\n\n/** fadeOutRight */\n@-webkit-keyframes rsw_3C {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n@keyframes rsw_3C {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n.rsw_3C {\n  -webkit-animation-name: rsw_3C;\n  animation-name: rsw_3C;\n}\n\n/** fadeOutLeft */\n@-webkit-keyframes rsw_1u {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n@keyframes rsw_1u {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n.rsw_1u {\n  -webkit-animation-name: rsw_1u;\n  animation-name: rsw_1u;\n}\n");var p="rsw_2Y",j="rsw_2f",b="rsw_3G";d("/** Step Wizard */\n.rsw_2Y {\n    position: relative;\n}\n\n.rsw_2f {\n    opacity: 0;\n    pointer-events: none;\n    position: absolute;\n    top: 0;\n    width: 100%;\n    z-index: 0;\n}\n\n.rsw_3G {\n    opacity: 1;\n    pointer-events: inherit;\n    position: relative;\n    z-index: 1;\n}\n");var f=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}(b,t.PureComponent);var e,c,d,j=l(b);function b(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,b),i(o(t=j.call(this,e)),"initialState",(function(){var e={activeStep:0,classes:{},hashKeys:{},namedSteps:{}},n="object"===("undefined"==typeof window?"undefined":a(window))?t.getHash():"",s=t.getSteps();s.forEach((function(t,n){e.hashKeys[n]=t.props&&t.props.hashKey||"step".concat(n+1),e.hashKeys[e.hashKeys[n]]=n,e.namedSteps[n]=t.props&&t.props.stepName||"step".concat(n+1),e.namedSteps[e.namedSteps[n]]=n}));var i=t.props.initialStep-1;return i&&s[i]&&(e.activeStep=i),t.props.isHashEnabled&&n&&void 0!==e.hashKeys[n]&&(e.activeStep=e.hashKeys[n]),t.props.transitions&&(e.classes[e.activeStep]=t.props.transitions.intro||""),e})),i(o(t),"getHash",(function(){return decodeURI(window.location.hash).replace(/^#/,"")})),i(o(t),"getTransitions",(function(){return t.props.transitions||{enterRight:"".concat(u.animated," ").concat(u.fadeInRight),enterLeft:"".concat(u.animated," ").concat(u.fadeInLeft),exitRight:"".concat(u.animated," ").concat(u.fadeOutRight),exitLeft:"".concat(u.animated," ").concat(u.fadeOutLeft)}})),i(o(t),"onHashChange",(function(){var e=t.state.hashKeys[t.getHash()];void 0!==e&&t.setActiveStep(e)})),i(o(t),"isInvalidStep",(function(e){return e<0||e>=t.totalSteps})),i(o(t),"setActiveStep",(function(e){var n,a,s=t.state.activeStep;s!==e&&(t.isInvalidStep(e)?console.error("".concat(e+1," is an invalid step")):(n=t.state.classes,a=t.getTransitions(),s<e?(n[s]=a.exitLeft,n[e]=a.enterRight):(n[s]=a.exitRight,n[e]=a.enterLeft),t.setState({activeStep:e,classes:n},(function(){t.onStepChange({previousStep:s+1,activeStep:e+1})}))))})),i(o(t),"onStepChange",(function(e){t.props.onStepChange(e),t.props.isHashEnabled&&t.updateHash(t.state.activeStep)})),i(o(t),"getSteps",(function(){return n.Children.toArray(t.props.children)})),i(o(t),"firstStep",(function(){return t.goToStep(1)})),i(o(t),"lastStep",(function(){return t.goToStep(t.totalSteps)})),i(o(t),"nextStep",(function(){return t.setActiveStep(t.state.activeStep+1)})),i(o(t),"previousStep",(function(){return t.setActiveStep(t.state.activeStep-1)})),i(o(t),"goToStep",(function(e){t.props.isHashEnabled&&"string"==typeof e&&void 0!==t.state.hashKeys[e]?t.setActiveStep(t.state.hashKeys[e]):t.setActiveStep(e-1)})),i(o(t),"goToNamedStep",(function(e){"string"==typeof e&&void 0!==t.state.namedSteps[e]?t.setActiveStep(t.state.namedSteps[e]):console.error('Cannot find step with name "'.concat(e,'"'))})),i(o(t),"updateHash",(function(e){window.location.hash=t.state.hashKeys[e]})),i(o(t),"isReactComponent",(function(e){return"function"==typeof(e=e.type)||"object"===a(e)})),t.state=t.initialState(),t}return e=b,(c=[{key:"componentDidMount",value:function(){this.props.isHashEnabled&&window.addEventListener("hashchange",this.onHashChange),this.props.instance(this)}},{key:"componentWillUnmount",value:function(){this.props.isHashEnabled&&window.removeEventListener("hashchange",this.onHashChange)}},{key:"currentStep",get:function(){return this.state.activeStep+1}},{key:"totalSteps",get:function(){return this.getSteps().length}},{key:"render",value:function(){var e=this,t={currentStep:this.currentStep,totalSteps:this.totalSteps,nextStep:this.nextStep,previousStep:this.previousStep,goToStep:this.goToStep,goToNamedStep:this.goToNamedStep,firstStep:this.firstStep,lastStep:this.lastStep},a=this.state.classes,s=n.Children.map(this.getSteps(),(function(s,i){return s?(t.isActive=i===e.state.activeStep,t.transitions=a[i],!e.props.isLazyMount||e.props.isLazyMount&&t.isActive?n.createElement(h,t,e.isReactComponent(s)?n.cloneElement(s,t):s):null):null}));return n.createElement("div",{className:this.props.className},this.props.nav&&n.cloneElement(this.props.nav,t),n.createElement("div",{className:p},s))}}])&&s(e.prototype,c),d&&s(e,d),b}();f.defaultProps={children:[],className:null,initialStep:1,instance:function(){},isHashEnabled:!1,isLazyMount:!1,nav:null,onStepChange:function(){},transitions:void 0};var h=function(e){var t=e.children,a=e.isActive;return e=e.transitions,n.createElement("div",{className:"".concat(j," ").concat(e," ").concat(a?b:"").trim()},t)};h.defaultProps={children:[],isActive:!1,transitions:""},e.Step=h,e.default=f,Object.defineProperty(e,"__esModule",{value:!0})}(t,n(4))},690:function(e,t,n){"use strict";t.a=n.p+"static/media/down.6c22eb0d.svg"},691:function(e,t,n){"use strict";t.a=n.p+"static/media/up.42389455.svg"},866:function(e,t,n){}}]);
//# sourceMappingURL=22.93fef810.chunk.js.map