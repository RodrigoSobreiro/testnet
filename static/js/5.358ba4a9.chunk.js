(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[5],{608:function(e,A,t){"use strict";t.d(A,"a",(function(){return d}));var a=t(10),s=t.n(a),r=t(24),c=t(148),n=t(1),i=t(17);function d(e){var A=e.btnText,t=e.className,a=e.disabled,d=e.click,l=e.afterClick,g=e.checkApprove,o=e.wallet,j=e.spec,w=e.lang,u=Object(n.useState)(a?"disabled":"enabled"),b=Object(c.a)(u,2),O=b[0],x=b[1],p=Object(n.useState)(!0),D=Object(c.a)(p,2),m=D[0],B=D[1],f=Object(n.useState)(!1),I=Object(c.a)(f,2),h=I[0],C=I[1],Q=Object(n.useState)(A),v=Object(c.a)(Q,2),M=v[0],k=v[1],y=Object(n.useRef)(null),E=function(){var e=Object(r.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===O){e.next=2;break}return e.abrupt("return");case 2:return N(),e.next=5,d();case 5:e.sent&&l&&l(),S();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){x("disabled"),C(!0),y.current&&(y.current.style.display="inline-block")},S=function(){y.current&&(y.current.style.display="none"),x("enabled"),C(!1)},J=function(){var e=Object(r.a)(s.a.mark((function e(){var A;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(g&&o&&o.detail.account)){e.next=5;break}return e.next=3,o.isApproved(j.pool,j.bTokenId);case 3:A=e.sent,B(A);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=Object(r.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(),e.next=3,o.approve(j.pool,j.bTokenId);case 3:e.sent.success?B(!0):(B(!1),alert(w["approve-failed"])),S();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){return J(),function(){}}),[o,j,g]),Object(n.useEffect)((function(){return A&&k(A),function(){}}),[A]),Object(i.jsxs)("button",{className:t,onClick:function(){m?E():Y()},children:[Object(i.jsx)("span",{className:"btn-loading-wrap",children:Object(i.jsx)("span",{ref:y,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),h?w.pending:m?M:w.approve]})}},610:function(e,A,t){"use strict";t.d(A,"a",(function(){return d}));var a=t(52),s=t(612),r=t(148),c=t(1),n=t(611),i=t(17);function d(e){var A=Object(c.useState)("--"),t=Object(r.a)(A,2),d=t[0],l=t[1];return Object(c.useEffect)((function(){var A=e.allowZero,t=Object(s.a)(e,["allowZero"]);return(void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===A)&&l(Object(i.jsx)(n.a,Object(a.a)(Object(a.a)({},t),{},{displayType:"text"}))),function(){}}),[e.value]),d}},613:function(e,A,t){"use strict";function a(e,A){for(var t=e.toString();t.length<A;)t="0"+t;return t}function s(e){return a(e,2)}function r(A,t){"string"!==typeof A&&(t=A,A=e.exports.ISO8601_FORMAT),t||(t=e.exports.now());var r=s(t.getDate()),c=s(t.getMonth()+1),n=s(t.getFullYear()),i=s(n.substring(2,4)),d=A.indexOf("yyyy")>-1?n:i,l=s(t.getHours()),g=s(t.getMinutes()),o=s(t.getSeconds()),j=a(t.getMilliseconds(),3),w=function(e){var A=Math.abs(e),t=String(Math.floor(A/60)),a=String(A%60);return 1===t.length&&(t="0"+t),1===a.length&&(a="0"+a),e<0?"+"+t+a:"-"+t+a}(t.getTimezoneOffset());return A.replace(/dd/g,r).replace(/MM/g,c).replace(/y{1,4}/g,d).replace(/hh/g,l).replace(/mm/g,g).replace(/ss/g,o).replace(/SSS/g,j).replace(/O/g,w)}function c(e,A,t,a){e["set"+(a?"":"UTC")+A](t)}e.exports=r,e.exports.asString=r,e.exports.parse=function(A,t,a){if(!A)throw new Error("pattern must be supplied");return function(A,t,a){var s=A.indexOf("O")<0,r=[{pattern:/y{1,4}/,regexp:"\\d{1,4}",fn:function(e,A){c(e,"FullYear",A,s)}},{pattern:/MM/,regexp:"\\d{1,2}",fn:function(e,A){c(e,"Month",A-1,s)}},{pattern:/dd/,regexp:"\\d{1,2}",fn:function(e,A){c(e,"Date",A,s)}},{pattern:/hh/,regexp:"\\d{1,2}",fn:function(e,A){c(e,"Hours",A,s)}},{pattern:/mm/,regexp:"\\d\\d",fn:function(e,A){c(e,"Minutes",A,s)}},{pattern:/ss/,regexp:"\\d\\d",fn:function(e,A){c(e,"Seconds",A,s)}},{pattern:/SSS/,regexp:"\\d\\d\\d",fn:function(e,A){c(e,"Milliseconds",A,s)}},{pattern:/O/,regexp:"[+-]\\d{3,4}|Z",fn:function(e,A){"Z"===A&&(A=0);var t=Math.abs(A),a=(A>0?-1:1)*(t%100+60*Math.floor(t/100));e.setUTCMinutes(e.getUTCMinutes()+a)}}],n=r.reduce((function(e,A){return A.pattern.test(e.regexp)?(A.index=e.regexp.match(A.pattern).index,e.regexp=e.regexp.replace(A.pattern,"("+A.regexp+")")):A.index=-1,e}),{regexp:A,index:[]}),i=r.filter((function(e){return e.index>-1}));i.sort((function(e,A){return e.index-A.index}));var d=new RegExp(n.regexp).exec(t);if(d){var l=a||e.exports.now();return i.forEach((function(e,A){e.fn(l,d[A+1])})),l}throw new Error("String '"+t+"' could not be parsed as '"+A+"'")}(A,t,a)},e.exports.now=function(){return new Date},e.exports.ISO8601_FORMAT="yyyy-MM-ddThh:mm:ss.SSS",e.exports.ISO8601_WITH_TZ_OFFSET_FORMAT="yyyy-MM-ddThh:mm:ss.SSSO",e.exports.DATETIME_FORMAT="dd MM yyyy hh:mm:ss.SSS",e.exports.ABSOLUTETIME_FORMAT="hh:mm:ss.SSS"},620:function(e,A,t){"use strict";A.a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAABBdSURBVHic7d0tj2xZFcfhBeFFkAwCLA6HJEGgwYHEkyBwgwJHwGEQjOILoPgKIAmCQDAEEiZoSHAkCEAMom/PdPet6qrzuvda63mS9mfudFf/797nNxMxn+9ExI8j4tODnwMAONG7EfFBRLwfEd8a/CwAwEkeB8Dj168i4ktDnwgAivn46Ae4w9ci4o8R8V5EvDP4WQCAg7w8AXj69c+I+F7kGC4AwAKvDYDHr99HxFdHPSAAZJf1b9JfjojfRMQvI+ILg58FANLJOgAiIj4WD5XAX0I2CADp3XMFcOlLNggAd8p8AvDSF+PhSkA2CAA3VBoAj2SDAJDQ2isA2SAAJLbnAJANAsAFXf5mLBsEgCe6DIAI2SAATO2IKwDZIAA80ekE4CXZIABtdR4Aj2SDALRjADz4ZDxcPfwtZIMANOAX3XOfj4ifRcTvQjYIQGEGwGWyQQBKMwCukw0CUJYBcNtnIuJHEfGnkA0CUIQBcD/ZIABlGADLyQYBSM8AWEc2CEBqfnFtIxsEICUDYB+yQQBSMQD2IxsEIA0DYH+yQQCmZwAcRzYIwLQMgOM9zQY/O/hZACAiDICzyAYBmIpfROf6XMgGAZiAATCGbBCAoQyAcWSDAAxjAIwnGwTgdAbAPGSDAJzGAJiPbBCAwxkAc5INAnAov1jmJhsE4BAGQA6yQQB2ZQDkIRsEYDcGQD6yQQA2MwDykg0CsJoBkJ9sEIDFDIAaZIMALOIXRS2yQQDuYgDUJBsE4FUGQF2yQQCuMgDqkw0C8BYDoA/ZIAAfMgD6kQ0CYAA0JRsEaM4Hf2+yQYCmDAAiZIMA7RgAPJINAjRiAPCSbBCgAQOAa2SDAIUZANwiGwQoyADgHrJBgGJ8kLOEbBCgCAOANWSDAMkZAKwlGwRIzABgK9kgQEIGAHuRDQIkYgCwN9kgQAIGAEeQDQJMzgczR5INAkzKAOAMskGAyRgAnEU2CDARA4CzyQYBJmAAMIpsEGAgA4DRZIMAAxgAzEA2CHAyH7TMRDYIcBIDgBnJBgEOZgAwK9kgwIEMAGYnGwQ4gAFAFrJBgB0ZAGQjGwTYgQFARrJBgI18cJKZbBBgJQOACmSDAAsZAFQhGwRYwACgGtkgwB0MAKqSDQK8wgCgOtkgwAUGAB3IBgFe8EFIJ7JBgDcMADqSDQLtGQB0JRsEWjMA6E42CLRkAMAD2SDQigEAz8kGgRYMAHibbBAozwcbXCcbBMoyAOA22SBQjgEA95ENAqUYALCMbBAowQCAdWSDQGoGAGwjGwRSMgBgO9kgkI4PKtiPbBBIwwCA/ckGgekZAHAM2SAwNQMAjiUbBKZkAMA5ZIPAVAwAOJdsEJiCAQDnkw0Cw/nggXFkg8AwBgCMJxsETmcAwBxkg8CpDACYi2wQOIUBAHOSDQKHMgBgbrJB4BAGAMxPNgjszgcJ5CEbBHZjAEA+skFgMwMAcpINApsYAJCbbBBYxQCAGmSDwCIGANQiGwTuYgBAPbJB4CYfDFCXbBC4ygCA+mSDwFsMAOhBNgg8YwBAL7JBICIMAOhKNgjNGQDQm2wQmjIAANkgNOQHHXgkG4RGDADgJdkgNGAAAJfIBqE4AwB4jWwQijIAgHvIBqEYAwBYQjYIRRgAwFKyQSjADy6wlmwQEjMAgK1kg5CQAQDsQTYIyRgAwJ5kg5CEAQAcQTYIkzMAgCPJBmFSBgBwNNkgTMgPInAW2SBMxAAAziYbhAkYAMAIskEYzAAARpINwiAGADAD2SCczAAAZiIbhJMYAMBsZINwAj9YwKxkg3AgAwCYnWwQDmAAABnIBmFnBgCQiWwQdmIAABnJBmEjAwDITDYIKxkAQHayQVjBDwpQhWwQFjAAgGpkg3AHAwCoSDYINxgAQGWyQbjCAAA6kA3CCwYA0IlsEN4wAIBuZIMQvvGBvmSDtGYAAN3JBmnJAACQDdKQAQDwEdkgbRgAAG+TDVKeAQBwnWyQsgwAgNfJBinJNzLAfWSDlGIAACwjG6QEAwBgOdkg6RkAAOvJBknLAADYTjZIOgYAwH5kg6RhAADsSzZICr4xAY4hG2RqBgDAsWSDTMkAADiebJDpGAAA55ENMg0DAOB8skGGMwAAxpENMowBADCWbJAhfKMBzEE2yKkMAIC5yAY5hQEAMB/ZIIczAADmJRvkMAYAwPxkg+zOAADIQzbIbgwAgFxkg+zCNw5ATrJBNjEAAHKTDbKKAQCQn2yQxQwAgDpkg9zNAACoRzbITQYAQF2yQa4yAABqkw1ykW8EgB5kgzxjAAD0IhskIgwAgI5kgxgAAI3JBhszAACQDTZkAADwSDbYiAEAwFOywSb8iwXgEtlgcQYAAK+RDRZlAABwi2ywIAMAgHvJBgsxAABYSjZYgAEAwFqywcQMAAC2kA0m5V8UAHuQDSZjAACwJ9lgEgYAAHuTDSZgAABwFNngxAwAAI4mG5yQAQDAWWSDEzEAADiTbHAS/uABGEE2OJgBAMBIssFBDAAARpMNDmAAADAL2eCJDAAAZiMbPIEBAMCsZIMHMgAAmJls8CD+IAHIQDa4MwMAgExkgzsxAADIRja4AwMAgKxkgxsYAABkJxtcwQAAoArZ4AIGAACVyAbv5A8GgIpkgzcYAABUJhu8wgAAoDrZ4AUGAABdyAafMAAA6EY2GAYAAH21zgYNAAA6a5sNtvkHBYBXtMsGDQAA+EibbNAAAIDnWmSDBgAAXFY6GzQAAOB1JbNBAwAA7lMqGzQAAOB+ZbLBtA8OAAOlzwYNAABYL202aAAAwDYps0EDAAD2kSobNAAAYF8pskEDAACOMXU2aAAAwPE+GP0AL31i9AMAQFG/jof/VsCfRz/IJU4AAGBf70fENyPi6zHpL/8IJwAAsJd/R8RPI+InEfGfwc9ykwEAANt8EBG/iIgfRMQ/Bj/L3QwAAFjvD/Hw/wb47egHWco7AACw3D8i4rsR8ZVI+Ms/wgkAACzxv4j4eUT8MCL+NfhZNjEAAOA+U2d9S7kCAIDXpcj6lnICAACXpcr6ljIAAOC5lFnfUgYAAHwkbda3lHcAAKBA1reUEwAAOiuT9S1lAADQVamsbylXAAB0UzLrW8oJAABdlM76ljIAAKiuRda3lAEAQGVtsr6lvAMAQEXtsr6lnAAAUEnbrG8pAwCAKlpnfUu5AgAgO1nfCk4AAMhK1reBAQBANrK+HRgAAGQi69uJdwAAyEDWtzMnAADMTNZ3EAMAgFnJ+g7kCgCA2cj6TuAEAIBZyPpOZAAAMJqsbwADAICRZH2DeAcAgBFkfYM5AQDgTLK+SRgAAJxF1jcRVwAAHE3WNyEnAAAcRdY3MQMAgL3J+hIwAADYk6wvCe8AALAHWV8yTgAA2ELWl5QBAMBasr7EXAEAsJSsrwAnAADcS9ZXiAEAwC2yvoIMAABeI+sryjsAAFwi6yvOCQAAT8n6mjAAAHgk62vEFQAAsr6GnAAA9CXra8wAAOhH1ocBANCMrI+I8A4AQBeyPp5xAgBQm6yPiwwAgLpkfVzlCgCgHlkfNzkBAKhD1sfdDACA/GR9LGYAAOQm62MV7wAA5CTrYxMnAAC5yPrYhQEAkIesj924AgCYn6yP3TkBAJiXrI/DGAAA85H1cTgDAGAusj5O4R0AgDnI+jiVEwCAsWR9DGEAAIwj62MYVwAA55P1MZwTAIDzyPqYhgEAcDxZH9MxAACOJetjSt4BADiGrI+pOQEA2JesjxQMAID9yPpIwxUAwHayPtJxAgCwnqyPtAwAgOVkfaRnAAAsI+ujBO8AANxH1kcpTgAAXifroyQDAOA6WR9luQIAeJusj/KcAAB8RNZHGwYAgKyPhgwAoDtZHy15BwDoStZHa04AgG5kfRAGANCLrA/ecAUAdCDrgxecAACVyfrgCgMAqEjWBzcYAEA1sj64g3cAgCpkfbCAEwAgO1kfrGAAAJnJ+mAlVwBARrI+2MgJAJCJrA92YgAAGcj6YGcGADA7WR8cwDsAwKxkfXAgJwDAbGR9cAIDAJiJrA9O4goAmIGsD07mBAAYSdYHgxgAwAiyPhjMAADOJuuDCXgHADiLrA8m4gQAOJqsDyZkAABHkvXBpFwBAEeQ9cHknAAAe5L1QRIGALAHWR8kYwAAW8n6ICHvAABryfogMScAwFKyPijAAACWkPVBEa4AgHvI+qAYJwDAa2R9UJQBAFwi64PiDADgJVkfNOAdAOCRrA8acQIAyPqgIQMAepP1QVOuAKAnWR805wQAepH1ARFhAEAXsj7gGQMA6pP1AW/xDgDUJesDrnICAPXI+oCbDACoRdYH3MUVANQg6wMWcQIAucn6gFUMAMhJ1gdsYgBAPrI+YDPvAEAesj5gN04AYH6yPmB3BgDMTdYHHMIVAMxJ1gccygkAzEXWB5zCAIA5yPqAUxkAMJ6sDziddwBgHFkfMIwTADifrA8YzgCAc8n6gCm4AoBzyPqAqTgBgGPJ+oApGQBwDFkfMDUDAPYn6wOm5x0A2I+sD0jDCQBsJ+sD0jEAYBtZH5CSKwBYR9YHpOYEAJaR9QElGABwH1kfUIoBALfJ+oByvAMA18n6gLKcAMDbZH1AeQYAPCfrA1pwBQAPZH1AK04A6E7WB7RkANCVrA9ozQCgI1kf0J53AOhE1gfwhhMAOpD1AbxgAFCdrA/gAlcAVCXrA3iFEwCqkfUB3MEAoApZH8ACBgAVyPoAFvIOAJnJ+gBWcgJARrI+gI0MALKR9QHswBUAWcj6AHbkBIDZyfoADmAAMCtZH8CBDABmJOsDOJh3AJiJrA/gJE4AmIGsD+BkBgCjyfoABnAFwCiyPoCBnABwNlkfwAQMAM4i6wOYiAHAGWR9AJPxDgBHkvUBTMoJAEeQ9QFMzgBgb7I+gARcAbAXWR9AIk4A2ErWB5CQAcBasj6AxAwA1pD1ASTnHQCWkPUBFOEEgHvI+gCKMQC4RdYHUJArAK6R9QEU5gSAl2R9AA0YADyS9QE0YgAQIesDaMc7AL3J+gCacgLQk6wPoDkDoB9ZHwCuABqR9QHwIScA9cn6AHiLAVCXrA+AqwyAmmR9ALzKOwC1yPoAuIsTgBpkfQAsYgDkJ+sDYDFXAHnJ+gBYzQlAPrI+ADYzAPKQ9QGwGwMgB1kfALvyDsDcZH0AHMIJwJxkfQAcygCYj6wPgMO5ApiHrA+A0zgBGE/WB8DpDIBxZH0ADGMAjCHrA2Ao7wCcS9YHwBScAJxD1gfAVAyA48n6AJiOK4DjyPoAmJYTgP3J+gCYngGwH1kfAGkYAPuQ9QGQincAtvl7yPoASMgJwDqyPgBSMwCWk/UBkJ4rgPvJ+gAowwnAbbI+AMoxAK6T9QFQlgFwmawPgNK8A/CcrA+AFpwAPJD1AdCKASDrA6ChzlcAsj4A2up4AiDrA6C9TgNA1gcAb3QZALI+AHii+jsAsj4AuKDqCYCsDwBeUXEAyPoA4IZKVwCyPgC4U4UTAFkfACyUeQDI+gBgpawDQNYHABtkewdA1gcARb0bD8f7T7/+GxHvRcQ7A58LAMrIcAUg6wOABh5PAP4aEd8Y/CwAwEm+HRHfj4hPDX4OACjr/+F/mKZgNNwOAAAAAElFTkSuQmCC"},629:function(e,A,t){"use strict";t.d(A,"a",(function(){return d}));var a=t(10),s=t.n(a),r=t(24),c=t(148),n=t(1),i=t(15);function d(e){var A=Object(n.useState)({}),t=Object(c.a)(A,2),a=t[0],d=t[1],l=null,g=function(){var A=Object(r.a)(s.a.mark((function A(){var t,a,r,c,n,l;return s.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:if(!e.isConnected()){A.next=10;break}return A.next=3,Object(i.E)(e.detail.account);case 3:t=A.sent,a=(+t.total).toFixed(2),r=t.valid?(+t.amount).toFixed(2):0,c=(+t.lp).toFixed(2),n=(+t.trade).toFixed(2),l=t.chainId,d({claimed:a,unclaimed:r,harvestDeriLp:c,harvestDeriTrade:n,chainId:l});case 10:case"end":return A.stop()}}),A)})));return function(){return A.apply(this,arguments)}}();return Object(n.useEffect)((function(){return l=window.setInterval(g,18e4),g(),function(){return clearInterval(l)}}),[e.detail.account]),[a,l]}},651:function(e,A,t){"use strict";var a=t(1),s=t(46),r=(t(620),t(613)),c=t.n(r),n=t(104),i=t(15),d=(t(609),t(629)),l=t(610),g=t(608),o=t(35),j=t(615),w=t(17);n[i.a.get()].chainInfo;A.a=Object(s.b)("wallet","loading")(Object(s.c)((function({wallet:e={},lang:A,loading:t}){const[s,r]=Object(d.a)(e),n=Object(j.a)(s.chainId),[u,b]=Object(a.useState)("--"),[O,x]=Object(a.useState)("--"),[p,D]=Object(a.useState)("--"),[m,B]=Object(a.useState)("--"),[f,I]=Object(a.useState)("--"),[h,C]=Object(a.useState)(1),[Q,v]=Object(a.useState)(1),[M,k]=Object(a.useState)([]),[y,E]=Object(a.useState)(!1),[N,S]=Object(a.useState)([]),[J,Y]=Object(a.useState)(""),[G,H]=Object(a.useState)(!1);return Object(a.useEffect)((()=>{t.loading(),"--"!=u&&"--"!=O&&"--"!=p&&"--"!=m&&"--"!=f&&N.length>0&&s.claimed&&t.loaded()}),[u,O,p,m,f,N,s]),Object(a.useEffect)((()=>{if(M.length){let e=M.length/10;e=Math.ceil(e);let A=M.slice(10*(Q-1),10*Q);C(e),S(A)}}),[e.detail,M,Q]),Object(a.useEffect)((()=>{e&&e.detail&&e.detail.account&&((async()=>{let A=`/broker/${e.detail.account}/reward_list`,t=await Object(i.i)(A);if(t.data){let e=t.data.map((e=>{let A={};return A.address=e.trader_address,A.trader_volume=e.trader_volume,A.deri_reward=e.deri_reward,A.trader_invite_timestamp=1e3*e.trader_invite_timestamp,A.trader_address=e.trader_address.slice(0,6)+"..."+e.trader_address.slice(e.trader_address.length-4,e.trader_address.length),A}));k(e)}})(),(async()=>{let e=await Object(i.i)("/broker/top3_reward_list");e.data&&(e.data.length?e.data.map((e=>{1===e.rank?b(e.deri_reward):2===e.rank?x(e.deri_reward):3===e.rank&&D(e.deri_reward)})):(b(0),x(0),D(0)))})(),(async()=>{let A=`/broker/${e.detail.account}/total_reward`,t=await Object(i.i)(A);t.data&&(t.data.hasOwnProperty("deri_reward")?I(t.data.rank):I(">999"))})())}),[e.detail]),Object(a.useEffect)((()=>{let A=null;return A=window.setInterval((async()=>{let A=`/broker/${e.detail.account}/get_harvest_deri`,t=await Object(i.i)(A);t.data&&B(t.data.deri_reward)})(),18e4),()=>{A&&clearInterval(A)}}),[e.detail.account]),Object(a.useEffect)((()=>{let e=null;return e=window.setInterval((()=>{let e=28800,t=parseInt(Date.now()/1e3),a=parseInt(t/e)*e+e-t,s=parseInt(a/3600),r=parseInt(a%3600/60),c=parseInt(a%60);Y(`${s} ${A.h} ${r} ${A.m} ${c} ${A.s}`)}),1e3),()=>{e&&clearInterval(e)}}),[e.detail.account]),Object(w.jsxs)("div",{className:"broker",children:[Object(w.jsxs)("div",{className:"title",children:[A["title-one"],Object(w.jsx)("br",{}),A["title-two"]]}),Object(w.jsxs)("div",{className:"rewards",children:[Object(w.jsxs)("div",{className:"reward-box",children:[Object(w.jsxs)("div",{className:"rewards-left",children:[Object(w.jsxs)("div",{className:"rewards-one",children:[Object(w.jsxs)("div",{className:"num",children:[Object(w.jsx)("span",{children:Object(w.jsx)(l.a,{value:u,displayType:"text",thousandSeparator:!0,decimalScale:"2"})})," DERI"]}),Object(w.jsxs)("div",{className:"one",children:["# 1 ",A.rewards]})]}),Object(w.jsxs)("div",{className:"rewards-three",children:[Object(w.jsxs)("div",{className:"num",children:[Object(w.jsx)("span",{children:Object(w.jsx)(l.a,{value:p,displayType:"text",thousandSeparator:!0,decimalScale:"2"})}),"  DERI"]}),Object(w.jsxs)("div",{className:"one",children:["# 3 ",A.rewards]})]})]}),Object(w.jsxs)("div",{className:"rewards-right",children:[Object(w.jsxs)("div",{className:"rewards-two",children:[Object(w.jsxs)("div",{className:"num",children:[Object(w.jsx)("span",{children:Object(w.jsx)(l.a,{value:O,displayType:"text",thousandSeparator:!0,decimalScale:"2"})})," DERI"]}),Object(w.jsxs)("div",{className:"one",children:["# 2 ",A.rewards]})]}),Object(w.jsxs)("div",{className:"rewards-frou",children:[Object(w.jsx)("div",{className:"num",children:Object(w.jsx)("span",{children:f})}),Object(w.jsx)("div",{className:"one",children:A["your-rewards"]})]})]})]}),Object(w.jsx)("div",{className:"bg-box"})]}),Object(w.jsxs)("div",{className:"process",children:[Object(w.jsx)("div",{className:"invite",children:A["invute-friends"]}),Object(w.jsx)("div",{className:"proce"}),Object(w.jsx)("div",{className:"bind",children:A["bind-address"]}),Object(w.jsx)("div",{className:"proce"}),Object(w.jsx)("div",{className:"earn",children:A["earn-deri"]})]}),Object(w.jsxs)("div",{className:"rules",children:[Object(w.jsx)("div",{}),Object(w.jsx)("div",{children:Object(w.jsxs)("a",{target:"_blank",href:"https://docs.deri.finance/guides/mining#mining-by-brokerage-mining-0-01deri-per-contract-or-distributed-per-volume-weight-if-breaching-the-hourly-upper-limit",children:[A["detailed-rules"]," >>"]})})]}),Object(w.jsxs)("div",{className:"my-harvest",children:[Object(w.jsx)("div",{className:"header",children:A["my-harvest"]}),Object(w.jsxs)("div",{className:"list",children:[Object(w.jsxs)("div",{className:"my-deri",children:[Object(w.jsx)("div",{className:"claim-deri",children:Object(w.jsxs)("div",{className:"claimed-deri",children:[Object(w.jsxs)("div",{className:"unclaimed-title",children:[Object(w.jsx)("span",{title:A["your-total-unclaimed-deri-title"],children:A["current-epoch-remaining-time"]}),Object(w.jsx)("span",{className:"deri-text",children:J})]}),Object(w.jsxs)("div",{className:"unclaimed-title",children:[Object(w.jsx)("span",{title:A["your-total-unclaimed-deri-title"],children:A["my-trading-volume-in-current-hour"]}),Object(w.jsxs)("span",{className:"deri-text",children:[Object(w.jsx)(l.a,{value:(+m).toFixed(2),displayType:"text",thousandSeparator:!0,decimalScale:"2"}),"  DERI"]})]}),Object(w.jsxs)("div",{className:"claimed-title",children:[Object(w.jsx)("span",{className:"hover-title",title:A["your-total-claimed-deri-title"],children:A["claimed-deri"]}),Object(w.jsx)("span",{className:"deri-text",children:y?(+s.claimed+ +s.unclaimed).toFixed(2):s.claimed})]}),Object(w.jsxs)("div",{className:"unclaimed-title",children:[Object(w.jsx)("span",{className:"hover-title",title:A["your-total-unclaimed-deri-title"],children:A["unclaimed-deri"]}),Object(w.jsx)("span",{className:"deri-text",children:y?0:(+s.unclaimed).toFixed(2)})]})]})}),Object(w.jsx)("div",{className:"button",children:Object(w.jsx)(g.a,{className:"btn",btnText:A.claim,lang:A,click:async()=>{if(e.isConnected()){await(async()=>0===+s.unclaimed?void alert(A["no-deri-to-claim"]):Object(o.c)(e.detail.chainId,s.chainId)?parseInt(Date.now()/1e3)%28800<1800?void alert(A["claiming-DERI-is-disabled-during-first-30-minutes-of-each-epoch"]):(await Object(i.P)(e.detail.chainId,e.detail.account)).success?(clearInterval(r),!0):(alert(A["claim-failed"]),!1):void alert(`${A["your-deri-is-on"]} ${n.text}  ${A["connect-to"]} ${n.text} ${A["to-claim"]}.`))()&&E(!0)}}})})]}),Object(w.jsxs)("div",{className:"address-list",children:[Object(w.jsxs)("div",{className:"list-title",children:[Object(w.jsx)("div",{className:"time-invited",children:A["time-invited"]}),Object(w.jsx)("div",{className:"friends-add",children:A["friends-add"]}),Object(w.jsx)("div",{className:"contract-vol",children:A["contract-vol"]}),Object(w.jsx)("div",{className:"deri-minted",children:A["deri-minted"]})]}),N.map(((e,A)=>Object(w.jsxs)("div",{className:"list-box",children:[Object(w.jsx)("div",{className:"time",children:c.a.asString("yyyy-MM-dd hh:mm",new Date(parseInt(e.trader_invite_timestamp)))}),Object(w.jsx)("div",{className:"address",children:e.trader_address}),Object(w.jsx)("div",{className:"volume",children:e.trader_volume}),Object(w.jsx)("div",{className:"deri",children:Object(w.jsx)(l.a,{value:e.deri_reward,displayType:"text",thousandSeparator:!0,decimalScale:"2"})})]},A)))]}),Object(w.jsxs)("div",{className:"page-of",children:[Object(w.jsx)("div",{onClick:()=>{let e=Q;1!=e&&(e-=1),v(e)},children:Object(w.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"9.6",height:"8",viewBox:"0 0 9.6 8",children:Object(w.jsx)("path",{id:"\u8def\u5f84_3","data-name":"\u8def\u5f84 3",d:"M3186.224,481.353a.4.4,0,1,1,.552.58l-3.069,2.91h7.993a.4.4,0,1,1,0,.8h-7.98l3.056,2.91a.4.4,0,0,1-.552.58l-3.49-3.324a.8.8,0,0,1,.007-1.138Z",transform:"translate(-3182.5 -481.243)",fill:"#aaa"})})}),Object(w.jsxs)("div",{className:"page",children:[A.page," ",Q," ",A.of," ",h]}),Object(w.jsx)("div",{onClick:()=>{let e=Q;e<h&&(e+=1),v(e)},children:Object(w.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"9.6",height:"8",viewBox:"0 0 9.6 8",children:Object(w.jsx)("path",{id:"\u8def\u5f84_4","data-name":"\u8def\u5f84 4",d:"M3268.376,481.353a.4.4,0,0,0-.552.58l3.069,2.91H3262.9a.4.4,0,0,0,0,.8h7.98l-3.056,2.91a.4.4,0,0,0,.552.58l3.49-3.324a.8.8,0,0,0-.007-1.138Z",transform:"translate(-3262.5 -481.243)",fill:"#aaa"})})})]})]})]})]})})))}}]);
//# sourceMappingURL=5.358ba4a9.chunk.js.map