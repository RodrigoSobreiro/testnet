(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[45],{1226:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(93),o=n(117);var i=function(e){var t,n;function r(t){var n,r=(void 0===t?{}:t).supportedChainIds;return(n=e.call(this)||this).supportedChainIds=r,n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=r.prototype;return i.emitUpdate=function(e){console.log("Emitting '"+o.a.Update+"' with payload",e),this.emit(o.a.Update,e)},i.emitError=function(e){console.log("Emitting '"+o.a.Error+"' with payload",e),this.emit(o.a.Error,e)},i.emitDeactivate=function(){console.log("Emitting '"+o.a.Deactivate+"'"),this.emit(o.a.Deactivate)},r}(r.EventEmitter)},2390:function(e,t,n){"use strict";n.r(t),n.d(t,"WalletLinkConnector",(function(){return c}));var r=n(1226);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var c=function(e){var t,r;function c(t){var n,r=t.url,o=t.appName,i=t.appLogoUrl,c=t.darkMode,u=t.supportedChainIds;return(n=e.call(this,{supportedChainIds:u})||this).url=r,n.appName=o,n.appLogoUrl=i,n.darkMode=c||!1,n.handleChainChanged=n.handleChainChanged.bind(a(n)),n.handleAccountsChanged=n.handleAccountsChanged.bind(a(n)),n}r=e,(t=c).prototype=Object.create(r.prototype),t.prototype.constructor=t,i(t,r);var u=c.prototype;return u.activate=function(){try{var e=this,t=function(){return Promise.resolve(e.provider.request({method:"eth_requestAccounts"})).then((function(t){var n=t[0];return e.provider.on("chainChanged",e.handleChainChanged),e.provider.on("accountsChanged",e.handleAccountsChanged),{provider:e.provider,account:n}}))},r=function(){if(window.ethereum&&!0===window.ethereum.isCoinbaseWallet)e.provider=window.ethereum;else{var t=function(){if(!e.walletLink)return Promise.resolve(Promise.all([n.e(5),n.e(16),n.e(48)]).then(n.t.bind(null,2335,7)).then((function(e){var t;return null!=(t=null==e?void 0:e.default)?t:e}))).then((function(t){e.walletLink=new t(o({appName:e.appName,darkMode:e.darkMode},e.appLogoUrl?{appLogoUrl:e.appLogoUrl}:{})),e.provider=e.walletLink.makeWeb3Provider(e.url,1)}))}();if(t&&t.then)return t.then((function(){}))}}();return Promise.resolve(r&&r.then?r.then(t):t())}catch(i){return Promise.reject(i)}},u.getProvider=function(){try{return Promise.resolve(this.provider)}catch(e){return Promise.reject(e)}},u.getChainId=function(){try{return Promise.resolve(this.provider.chainId)}catch(e){return Promise.reject(e)}},u.getAccount=function(){try{return Promise.resolve(this.provider.request({method:"eth_requestAccounts"})).then((function(e){return e[0]}))}catch(e){return Promise.reject(e)}},u.deactivate=function(){this.provider.removeListener("chainChanged",this.handleChainChanged),this.provider.removeListener("accountsChanged",this.handleAccountsChanged)},u.close=function(){try{return this.provider.close(),this.emitDeactivate(),Promise.resolve()}catch(e){return Promise.reject(e)}},u.handleChainChanged=function(e){console.log("Handling 'chainChanged' event with payload",e),this.emitUpdate({chainId:e})},u.handleAccountsChanged=function(e){console.log("Handling 'accountsChanged' event with payload",e),this.emitUpdate({account:e[0]})},c}(r.a)}}]);
//# sourceMappingURL=45.f0f4d4aa.chunk.js.map