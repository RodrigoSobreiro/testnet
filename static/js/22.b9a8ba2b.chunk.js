(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[22],{1201:function(e,t,n){"use strict";var c,a,s=n(25),i=n(141),r=n(78),d=n(7),o=n(56),l=n(5),j=(n(60),n(1285)),u=n(50),b=n(29),m=n(16),h=n(6),g=Object(u.a)(j.a)(c||(c=Object(o.a)(["\n  width : ","px;\n"])),(function(e){return e.width})),O=u.a.div(a||(a=Object(o.a)(["\n  width : ",";\n  height : ",";\n"])),(function(e){return/px$/.test(e.width)?e.width:"".concat(e.width,"px")}),(function(e){return/px$/.test(e.height)?e.height:"".concat(e.height,"px")}));t.a=function(e){var t=Object(l.useState)(Object(h.jsx)("span",{className:"loading-line"})),n=Object(d.a)(t,2),c=n[0],a=n[1],o=Object(l.useState)(!0),j=Object(d.a)(o,2),u=j[0],x=j[1],f=function(){var t=e.allowZero;return"object"!==Object(r.a)(e.value)&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===Math.abs(e.value)&&!0===t};return Object(l.useEffect)((function(){var t=e.allowZero,n=(e.wallet,e.closeShowLoadingEffectAfterLoaded),c=e.defaultValue,r=void 0===c?"--":c,d=Object(i.a)(e,["allowZero","wallet","closeShowLoadingEffectAfterLoaded","defaultValue"]);if(f())!t&&d.value&&/\d+\.0*[1-9]+/.test(d.value)&&0===+Object(m.bg)(d.value).toFixed(+d.decimalScale||2)&&(d.decimalScale=Object(b.d)(Math.abs(d.value))+2),d.value=Object(b.J)(d.value),d.value&&/\d+.9{6}/.test(d.value)&&(d.value=(+d.value).toFixed(5)),a(Object(h.jsx)(g,Object(s.a)(Object(s.a)({},d),{},{displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0})));else if(u){var o=e.width,l=e.height;a(Object(h.jsx)(O,{className:"loading-line",width:o,height:l})),n&&x(!1)}var j=window.setTimeout((function(){f()||a(r)}),6e4);return function(){clearTimeout(j)}}),[e.value,e.decimalScale,e.suffix]),c}},1216:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var c,a=n(56),s=n(50),i=n(1375),r=n.n(i),d=n(142),o=n(29),l=n(1376),j=n(6),u=s.a.div(c||(c=Object(a.a)(["\n  display:",";\n  .text {\n    border-bottom : 1px dashed #93A1B8;\n    width : max-content;\n    cursor : pointer;\n    display:","\n  }\n  \n  .__react_component_tooltip.tooltip.show {\n    font-weight : "," \n  }\n"])),(function(e){return e.block}),(function(e){return e.block}),(function(e){return e.isWin?400:600}));function b(e){var t=e.text,n=e.id,c=void 0===n?String((new Date).getTime())+Math.random():n,a=e.tip,s=e.multiline,i=e.html,b=e.className,m=e.element,h=void 0===m?"":m,g=e.block,O=void 0===g?"block":g,x=e.width,f=void 0===x?"auto":x,v=e.children,p=e.tiggerEvent;return Object(j.jsxs)(u,{className:b,block:O,isWin:l.isWindows,children:[Object(j.jsx)("div",{className:"text","data-for":c,"data-tip":i?r.a.renderToString(h):a,"data-event":Object(o.y)()?"click":p,"data-html":i,children:t||v}),a&&Object(j.jsx)(d.a,{id:c,width:f,padding:"12",place:"bottom",overridePosition:function(e,t,n,c,a,s,i,r){var d=n.getBoundingClientRect(),o=c.getBoundingClientRect(),l=d.x,j=d.y,u=d.height,b=d.width;e.left,e.top;return l+o.width/2>document.documentElement.clientWidth?l-=Math.abs(b-o.width):l-(o.width-b)/2<0?l-=b:l-=(o.width-b)/2,j+u+o.height>=document.documentElement.clientHeight?j=j+u-o.height:j+=u,l<0&&(l=0),j<0&&(j=0),{top:j,left:l}},html:i,borderRadius:8,multiline:s})]})}},1346:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var c,a=n(25),s=n(56),i=n(5),r=n(50),d=n(16),o=n(1216),l=n(6),j=r.a.div(c||(c=Object(s.a)(["\ndisplay : flex;\nfont-size : 14px;\nalign-items : center;\nbackground: rgba(85, 119, 253, 0.1);\nborder-radius: 4px;\njustify-content: space-between;\ninput {\n  background: transparent;\n  border-radius: 4px;\n  // min-width: 240px;\n  border: 0;\n  width : ",";\n  height: 56px;\n  color : #E0ECFF;\n  font-size : 18px;\n  padding-left: 16px;\n}\ninput:focus {\n  outline: none;\n}\n.unit {\n  margin-right: ",";\n}\n"])),(function(e){return e.inputWidth}),(function(e){return e.unitPadding}));function u(e){var t=e.value,n=e.unit,c=e.unitTip,s=e.max,r=e.step,u=e.onChange,b=e.styles,m=void 0===b?{}:b,h=e.focus,g=e.placeholder,O=void 0===g?"":g,x=e.unitPadding,f=void 0===x?"24px":x,v=e.minTradeVolume,p=e.decimal,w=void 0===p?2:p,N=e.readOnly,k=e.inputWidth,I=void 0===k?"50%":k,_=e.className,C=e.disabled,S=void 0!==C&&C,y=e.onBlur,W=e.onFocus,T=Object(i.useRef)(null);return Object(i.useEffect)((function(){T.current.setCustomValidity(""),T.current&&h&&T.current.focus()}),[h]),Object(l.jsxs)(j,{unitPadding:f,inputWidth:I,className:_,style:Object(a.a)({},m),children:[Object(l.jsx)("input",{placeholder:O,type:"number",onBlur:y,onFocus:W,disabled:S,value:t,step:r,ref:T,onChange:function(e){var t="\\d+\\.\\d{0,".concat(w,"}$"),n=new RegExp(t),c=e.target.value;if(s&&Object(d.bg)(c).gt(s))u&&u(s);else if(c<0||isNaN(c))u&&u("");else if(c){if(v>=1)if(c/v>=1)u&&u(Object(d.bg)(c).div(v).integerValue()*v);else u&&u(c*v);else if(/\d+\./.test(c)&&!n.test(c)){var a=c.substring(0,c.indexOf(".")+1+w);u&&u(a)}else u&&u(c)}else u&&u(c)},readOnly:N}),Object(l.jsx)("div",{className:"unit",children:c?Object(l.jsx)(o.a,{tip:c,text:n}):n})]})}},2163:function(e,t,n){},2164:function(e,t,n){},2407:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(2),i=n(7),r=n(5),d=n(45),o=n(16),l=n(1346),j=n(51),u=n(168),b=n(19),m=n(473),h=n(169),g=(n(2163),n(6));function O(){return Object(g.jsx)("div",{class:"sleepContentView",children:Object(g.jsx)("div",{class:"circle"})})}var x=n(298),f=n(471),v=n(479),p=n.p+"static/media/stage-one.7a1f5b00.svg",w=n.p+"static/media/stage-two.768445a6.svg",N=n.p+"static/media/stage-three.ee3fc1c4.svg",k=n(37),I=n.p+"static/media/succeed.02ebda03.svg";n.p;function _(e){var t=e.lang,n=e.wallet,c=e.amount,d=e.balance,o=e.initialize,l=e.isClaim,x=e.setSending,f=e.sending,v=e.setAmount,_=e.setIsClaim,S=e.isWalletConnected,y=Object(m.a)(),W=Object(h.c)(),T=Object(j.g)(),F=Object(r.useState)(!1),E=Object(i.a)(F,2),R=E[0],D=E[1],q=Object(r.useState)(!1),z=Object(i.a)(q,2),J=z[0],B=z[1],L=Object(r.useState)({}),V=Object(i.a)(L,2),A=V[0],P=V[1],M=Object(r.useState)({}),U=Object(i.a)(M,2),Z=U[0],$=U[1],H=Object(r.useState)(!1),G=Object(i.a)(H,2),K=G[0],Q=G[1],X=Object(r.useState)(Object(g.jsx)(u.a,{type:b.i,className:"button-bridge",fontSize:"18",label:t.approve})),Y=Object(i.a)(X,2),ee=Y[0],te=Y[1],ne=function(){n.connect()},ce=function(){var e=Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.isConnected()){e.next=6;break}return e.next=3,k.a.request("getUserWormholeSignature",[n.detail.account]);case 3:(t=e.sent).valid&&(n.switchNetwork(y[t.toChainId]),_(!0)),B(t.valid);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ae=function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==c&&0!==c){e.next=3;break}return W.error(t["amount-must-be-greater-than-zero"]),e.abrupt("return");case 3:if(!(+c>d)){e.next=6;break}return W.error(t["there-is-not-enough-amount"]),e.abrupt("return");case 6:if(S.isFromConnected){e.next=9;break}return W.error("".concat(t["send-finished-one"]," ").concat(C(o.from_chainId,t).netWork," ").concat(t["send-finished-two"])),e.abrupt("return");case 9:return x(!0),P({stageOne:!1}),e.next=13,k.a.request("freeze",[n.detail.chainId,n.detail.account,o.to_chainId,c],{includeResponse:!0});case 13:e.sent.success?(te(Object(g.jsx)(u.a,{type:b.i,className:"button-bridge",label:t.processing})),P({stageOne:!0,stageTwo:!1}),window.setInterval((function(){ce()}),3e3)):x(!1);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),se=function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(S.isToConnected){e.next=3;break}return W.error("".concat(t["send-finished-one"]," ").concat(C(o.to_chainId,t).netWork," ").concat(t["send-finished-two"])),e.abrupt("return");case 3:return Q(!0),$({stageOne:!1}),e.next=7,k.a.request("mintDeri",[n.detail.chainId,n.detail.account],{includeResponse:!0});case 7:e.sent.success?($({stageOne:!0,stageTwo:!1}),te(Object(g.jsx)(u.a,{type:b.i,className:"button-bridge",label:t.processing})),window.setInterval((function(){ce()}),3e3)):W.error(t["claim-faild"]);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ie=function(){T.push("/bridge")},re=function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.request("unlockDeri",[n.detail.chainId,n.detail.account],{includeResponse:!0});case 2:e.sent.success?(D(!0),de()):(D(!1),W.error(t["approve-faild"]));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),de=function(){var e=Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.isConnected()){e.next=5;break}return e.next=3,k.a.request("isDeriUnlocked",[n.detail.chainId,n.detail.account]);case 3:t=e.sent,D(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){n.isConnected()&&(de(),ce())}),[n.detail,o]),Object(r.useEffect)((function(){J?P({stageOne:!0,stageTwo:!0,stageThree:!0}):K&&($({stageOne:!0,stageTwo:!0,stageThree:!0}),x(!1),v(""))}),[J,o]),Object(r.useEffect)((function(){var e;e=n.isConnected()?J?Object(g.jsx)(u.a,{type:b.i,className:"button-bridge",label:t.claim,onClick:se}):R?K?Object(g.jsxs)("button",{className:"complete",onClick:ie,children:[" ",Object(g.jsx)("img",{alt:"",src:I})," ",t.complete," "]}):Object(g.jsx)(u.a,{type:b.i,className:"button-bridge",label:t.send,onClick:ae}):Object(g.jsx)(u.a,{type:b.i,className:"button-bridge",label:t.approve,onClick:re}):Object(g.jsx)(u.a,{type:b.i,className:"button-bridge",label:t["connect-wallet"],onClick:ne}),te(e)}),[J,n.detail,R,c,o,S,K]),Object(g.jsxs)("div",{className:"operate",children:[Object(g.jsxs)("div",{className:"from-to-title",children:[t.bridge," ",c,"  DERI ",t.from.toLowerCase()," ",o.from_network," ",t.to.toLowerCase()," ",o.to_network]}),Object(g.jsx)("div",{className:"btn",children:ee}),Object(g.jsxs)("div",{className:"hint",children:[!l&&Object(g.jsxs)("div",{className:"sending",children:[Object(g.jsxs)("div",{className:"stage",children:[Object(g.jsxs)("div",{className:"stage-img-text",children:[Object(g.jsxs)("div",{className:"stage-img",children:[" ",Object(g.jsx)("img",{alt:"",src:p})]}),Object(g.jsxs)("div",{className:"stage-text",children:[t["sending-deri-to-wormhole"]," "]})]}),Object(g.jsxs)("div",{className:"ok-pending",children:[f&&Object(g.jsx)(g.Fragment,{children:A.stageOne?Object(g.jsx)("div",{className:"succeed",children:Object(g.jsx)("img",{alt:"",src:I})}):Object(g.jsx)("div",{className:"pending",children:Object(g.jsx)(O,{})})}),!f&&Object(g.jsx)("div",{className:"staic"})]})]}),Object(g.jsxs)("div",{className:"stage",children:[Object(g.jsxs)("div",{className:"stage-img-text",children:[Object(g.jsxs)("div",{className:"stage-img",children:[" ",Object(g.jsx)("img",{alt:"",src:w})]}),Object(g.jsx)("div",{className:"stage-text",children:t["waiting-for-bridge-to-sign"]})]}),Object(g.jsxs)("div",{className:"ok-pending",children:[f&&Object(g.jsx)(g.Fragment,{children:A.stageOne&&Object(g.jsx)(g.Fragment,{children:A.stageTwo?Object(g.jsx)("div",{className:"succeed",children:Object(g.jsx)("img",{alt:"",src:I})}):Object(g.jsx)("div",{className:"pending",children:Object(g.jsx)(O,{})})})}),(!f||!A.stageOne)&&Object(g.jsx)("div",{className:"staic"})]})]}),Object(g.jsxs)("div",{className:"stage",children:[Object(g.jsxs)("div",{className:"stage-img-text",children:[Object(g.jsxs)("div",{className:"stage-img",children:[" ",Object(g.jsx)("img",{alt:"",src:N})]}),Object(g.jsx)("div",{className:"stage-text",children:t["bridge-signed"]})]}),Object(g.jsxs)("div",{className:"ok-pending",children:[f&&Object(g.jsx)(g.Fragment,{children:A.stageOne&&A.stageTwo&&Object(g.jsx)(g.Fragment,{children:A.stageThree?Object(g.jsx)("div",{className:"succeed",children:Object(g.jsx)("img",{alt:"",src:I})}):Object(g.jsx)("div",{className:"pending",children:Object(g.jsx)(O,{})})})}),(!f||!A.stageTwo)&&Object(g.jsx)("div",{className:"staic"})]})]})]}),l&&Object(g.jsxs)("div",{className:"claiming",children:[Object(g.jsxs)("div",{className:"stage",children:[Object(g.jsxs)("div",{className:"stage-img-text",children:[Object(g.jsxs)("div",{className:"stage-img",children:[" ",Object(g.jsx)("img",{alt:"",src:p})]}),Object(g.jsx)("div",{className:"stage-text",children:t["claim-deri-ing"]})]}),Object(g.jsxs)("div",{className:"ok-pending",children:[K&&Object(g.jsx)(g.Fragment,{children:Z.stageOne?Object(g.jsx)("div",{className:"succeed",children:Object(g.jsx)("img",{alt:"",src:I})}):Object(g.jsx)("div",{className:"pending",children:Object(g.jsx)(O,{})})}),!K&&Object(g.jsx)("div",{className:"staic"})]})]}),Object(g.jsxs)("div",{className:"stage",children:[Object(g.jsxs)("div",{className:"stage-img-text",children:[Object(g.jsxs)("div",{className:"stage-img",children:[" ",Object(g.jsx)("img",{alt:"",src:w})]}),Object(g.jsxs)("div",{className:"stage-text",children:[t["waiting-for-bridge-to-sync"]," "]})]}),Object(g.jsxs)("div",{className:"ok-pending",children:[K&&Object(g.jsx)(g.Fragment,{children:Z.stageOne&&Object(g.jsx)(g.Fragment,{children:Z.stageTwo?Object(g.jsx)("div",{className:"succeed",children:Object(g.jsx)("img",{alt:"",src:I})}):Object(g.jsx)("div",{className:"pending",children:Object(g.jsx)(O,{})})})}),(!K||!Z.stageOne)&&Object(g.jsx)("div",{className:"staic"})]})]}),Object(g.jsxs)("div",{className:"stage",children:[Object(g.jsxs)("div",{className:"stage-img-text",children:[Object(g.jsxs)("div",{className:"stage-img",children:[" ",Object(g.jsx)("img",{alt:"",src:N})]}),Object(g.jsx)("div",{className:"stage-text",children:t.finished})]}),Object(g.jsxs)("div",{className:"ok-pending",children:[K&&Object(g.jsx)(g.Fragment,{children:Z.stageOne&&Z.stageTwo&&Object(g.jsx)(g.Fragment,{children:Z.stageThree?Object(g.jsx)("div",{className:"succeed",children:Object(g.jsx)("img",{alt:"",src:I})}):Object(g.jsx)("div",{className:"pending",children:Object(g.jsx)(O,{})})})}),(!K||!Z.stageTwo)&&Object(g.jsx)("div",{className:"staic"})]})]})]})]})]})}function C(e,t){var n={};switch(e=+e){case 1:n.netWork=t.ethereum,n.chainId=1,n.img=f.default;break;case 56:n.netWork=t.bsc,n.chainId=56,n.img=x.default;break;case 128:n.netWork=t.heco,n.chainId=128,n.img=v.default;break;case 97:n.netWork=t["bsc-testnet"],n.chainId=97,n.img=x.default;break;case 3:n.netWork=t.ropsten,n.chainId=3,n.img=f.default;break;case 256:n.netWork=t["heco-testnet"],n.chainId=256,n.img=v.default}return n}var S=n(1201),y=n.p+"static/media/arrow-left.3530813d.svg",W=n.p+"static/media/disabled-down.3f7df0de.svg",T=n(472),F=n(230),E=n(295),R=n(485),D=n(104),q=n.n(D);n(2164);function z(e,t){var n={};switch(e=+e){case 1:n.netWork=t.ethereum,n.chainId=1,n.img=f.default;break;case 56:n.netWork=t.bsc,n.chainId=56,n.img=T.default;break;case 128:n.netWork=t.heco,n.chainId=128,n.img=v.default;break;case 97:n.netWork=t["bsc-testnet"],n.chainId=97,n.img=T.default;break;case 3:n.netWork=t.ropsten,n.chainId=3,n.img=f.default;break;case 256:n.netWork=t["heco-testnet"],n.chainId=256,n.img=v.default}return n}t.default=Object(d.b)("wallet")(Object(d.c)((function(e){var t=e.wallet,n=e.lang,c=Object(r.useState)(""),d=Object(i.a)(c,2),j=d[0],u=d[1],b=Object(r.useState)(0),m=Object(i.a)(b,2),h=m[0],O=m[1],x="prod"!==o.DeriEnv.get(),p=x?[{text:n.ropsten,id:3,img:f.default},{text:n["bsc-testnet"],id:97,img:T.default},{text:n["heco-testnet"],id:256,img:v.default}]:[{text:n.ethereum,id:1,img:f.default},{text:n.bsc,id:56,img:T.default},{text:n.heco,id:128,img:v.default}],w=Object(r.useState)(p),N=Object(i.a)(w,2),I=N[0],C=N[1],D=Object(r.useState)(p),J=Object(i.a)(D,2),B=J[0],L=J[1],V=Object(r.useState)(!1),A=Object(i.a)(V,2),P=A[0],M=A[1],U=Object(r.useState)(x?{from_chainId:97,from_network:n["bsc-testnet"],to_chainId:3,to_network:n.ropsten}:{from_chainId:1,from_network:n.ethereum,to_chainId:56,to_network:n.bsc}),Z=Object(i.a)(U,2),$=Z[0],H=Z[1],G=Object(r.useState)(!1),K=Object(i.a)(G,2),Q=K[0],X=K[1],Y=Object(r.useState)(!1),ee=Object(i.a)(Y,2),te=ee[0],ne=ee[1],ce=Object(r.useState)(!1),ae=Object(i.a)(ce,2),se=ae[0],ie=ae[1],re=Object(r.useState)(z($.from_chainId,n).img),de=Object(i.a)(re,2),oe=de[0],le=de[1],je=Object(r.useState)(z($.to_chainId,n).img),ue=Object(i.a)(je,2),be=ue[0],me=ue[1],he=q()("from-network-list",{show:te}),ge=q()("to-network-list",{show:se}),Oe=Object(r.useState)({isFromConnected:!1,isToConnected:!1}),xe=Object(i.a)(Oe,2),fe=xe[0],ve=xe[1],pe=function(){var e=Object(s.a)(a.a.mark((function e(){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isConnected()){e.next=5;break}return e.next=3,k.a.request("getUserWormholeSignature",[t.detail.account]);case 3:(c=e.sent).valid&&(H({from_chainId:c.fromChainId,from_network:z(c.fromChainId,n).netWork,to_chainId:c.toChainId,to_network:z(c.toChainId,n).netWork}),le(z(c.fromChainId,n).img),me(z(c.toChainId,n).img),u(Object(o.bg)(c.amount,-18).toString()),M(c.valid));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),we=function(){var e=Object(s.a)(a.a.mark((function e(){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isConnected()){e.next=5;break}return e.next=3,k.a.request("getDeriBalance",[t.detail.chainId,t.detail.account]);case 3:n=e.sent,O(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){we()}),[t.detail,$]),Object(r.useEffect)((function(){pe()}),[t.detail]),Object(r.useEffect)((function(){var e,c=p.filter((function(e){return e.id===+$.from_chainId}))[0],a=p.filter((function(e){return e.id!==+$.from_chainId}))[0],s=p.filter((function(e){return e.id!==+$.from_chainId}))[1];e=[p.filter((function(e){return e.id===+$.to_chainId}))[0],p.filter((function(e){return e.id!==+$.to_chainId}))[0],p.filter((function(e){return e.id!==+$.to_chainId}))[1]],C([c,a,s]),L(e),le(z($.from_chainId,n).img),me(z($.to_chainId,n).img),function(){var e=!!t.isConnected()&&+t.detail.chainId===+$.from_chainId,n=!!t.isConnected()&&+t.detail.chainId===+$.to_chainId;ve({isFromConnected:e,isToConnected:n})}()}),[$,t.detail]),Object(g.jsx)("div",{className:"bridge-big-box",children:Object(g.jsxs)("div",{className:"bridge-box",children:[Object(g.jsxs)("div",{className:"bridge-title",children:[Object(g.jsx)("div",{className:"title",children:n.bridge}),Object(g.jsx)("div",{className:"birdge-des",children:n["bridge-des"]})]}),Object(g.jsxs)("div",{className:"bridge-info",children:[Object(g.jsxs)("div",{className:"select-network-box",children:[Object(g.jsx)("div",{className:"select-network-title",children:n["select-networks"]}),Object(g.jsxs)("div",{className:"select-network-from-to",children:[Object(g.jsxs)("div",{className:"from-network",children:[Object(g.jsx)("div",{className:"from-title",children:n.from}),Object(g.jsxs)("div",{className:"from-dropdown-list",children:[Object(g.jsxs)("div",{className:P?"drop drop-disabled":"drop",onClick:function(){P||ne(!te)},children:[Object(g.jsxs)("div",{className:"network-logo-connected",children:[Object(g.jsx)("img",{src:oe,alt:""}),Object(g.jsx)("span",{children:$.from_network}),Object(g.jsx)("div",{className:Q?"connected-hide":fe.isFromConnected?"connected":"is-connected",children:!Q&&fe.isFromConnected?n.connected:n.unconnected})]}),Object(g.jsx)("img",{className:"down-icon",src:P?W:te?R.default:E.default,alt:""})]}),Object(g.jsx)("ul",{className:he,children:I.map((function(e,t){return Object(g.jsx)(g.Fragment,{children:$.from_network!==e.text?Object(g.jsx)("li",{className:"wallet-li",onClick:function(){return function(e){var t=JSON.parse(JSON.stringify($));t.to_chainId===e.id?(t.from_chainId=$.to_chainId,t.from_network=$.to_network,t.to_chainId=$.from_chainId,t.to_network=$.from_network):(t.from_chainId=e.id,t.from_network=e.text),H(t),ne(!te)}(e)},children:Object(g.jsxs)("div",{className:"li-logo-network",children:[Object(g.jsx)("img",{alt:"",src:e.img})," ",Object(g.jsxs)("span",{children:[" ",e.text," "]})]})},t):""})}))})]})]}),Object(g.jsx)("div",{className:"arrow",children:Object(g.jsx)("img",{src:y,alt:""})}),Object(g.jsxs)("div",{className:"to-network",children:[Object(g.jsx)("div",{className:"to-title",children:n.to}),Object(g.jsxs)("div",{className:"to-dropdown-list",children:[Object(g.jsxs)("div",{className:P?"drop drop-disabled":"drop",onClick:function(){P||ie(!se)},children:[Object(g.jsxs)("div",{className:"network-logo-connected",children:[Object(g.jsx)("img",{src:be,alt:""}),Object(g.jsx)("span",{children:$.to_network}),Object(g.jsx)("div",{className:Q?fe.isToConnected?"connected":"is-connected":"connected-hide",children:Q&&fe.isToConnected?n.connected:n.unconnected})]}),Object(g.jsx)("img",{className:"down-icon",src:P?W:se?R.default:E.default,alt:""})]}),Object(g.jsx)("ul",{className:ge,children:B.map((function(e,t){return Object(g.jsx)(g.Fragment,{children:$.to_network!==e.text?Object(g.jsx)("li",{className:"wallet-li",onClick:function(){return function(e){var t=JSON.parse(JSON.stringify($));t.from_chainId===e.id?(t.from_chainId=$.to_chainId,t.from_network=$.to_network,t.to_chainId=$.from_chainId,t.to_network=$.from_network):(t.to_chainId=e.id,t.to_network=e.text),H(t),ie(!se)}(e)},children:Object(g.jsxs)("div",{className:"li-logo-network",children:[Object(g.jsx)("img",{alt:"",src:e.img})," ",Object(g.jsxs)("span",{children:[" ",e.text," "]})]})},t):""})}))})]})]})]})]}),Object(g.jsxs)("div",{className:"set-amount",children:[Object(g.jsx)("div",{className:"set-amount-title",children:n["set-amount"]}),Object(g.jsxs)("div",{className:"set-amount-box",children:[Object(g.jsxs)("div",{className:"input-deri",children:[Object(g.jsx)(l.a,{placeholder:"0",value:j,onChange:function(e){u(e)},disabled:P,className:"input-box"}),Object(g.jsxs)("span",{children:[Object(g.jsx)("img",{alt:"",src:F.default,className:"amount-img"})," DERI"]})]}),Object(g.jsxs)("div",{className:"total-deri",children:[n["total-amount"]," ",Object(g.jsx)(S.a,{value:h,decimalScale:4,thousandSeparator:!0})," DERI"]})]})]}),Object(g.jsx)("div",{className:"bridge-operate-hint",children:Object(g.jsx)(_,{lang:n,sending:P,wallet:t,balance:h,isWalletConnected:fe,amount:j,isClaim:Q,initialize:$,setIsClaim:X,setSending:M,setAmount:u})}),Object(g.jsx)("div",{className:"bridge-to-polygon",children:Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:"birdge-to-polygon-title",children:[n["bridge-to-polygon"]," ",Object(g.jsx)("span",{className:"polygon-title",children:Object(g.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://wallet.matic.network/bridge",children:"Polygon"})})]}),Object(g.jsx)("div",{className:"bridge-to-polygon-des",children:n["bridge-to-polygon-des"]})]})})]})]})})})))}}]);
//# sourceMappingURL=22.b9a8ba2b.chunk.js.map