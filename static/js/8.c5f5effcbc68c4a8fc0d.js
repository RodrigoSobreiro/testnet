webpackJsonp([8],{gdx1:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("Xgv0"),a=n("zH3I"),r=n.n(a),s=n("rVsN"),o=n.n(s),c=n("KH7x"),l=n.n(c),u=n("IHPB"),h=n.n(u),d=n("lC5x"),p=n.n(d),v=n("J0Oq"),m=n.n(v),f=n("AA3o"),_=n.n(f),b=n("xSur"),g=n.n(b),k=n("72mw"),w=n.n(k),y=n("zf2T");function x(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return 0==e?Object(y.a)(t):e>0?Object(y.a)(t).times(Object(y.a)("1"+"0".repeat(e))):Object(y.a)(t).div(Object(y.a)("1"+"0".repeat(-e)))}function R(t){return x(t,-18)}y.a.config({DECIMAL_PLACES:18,ROUNDING_MODE:y.a.ROUND_DOWN,EXPONENTIAL_AT:256});var C=function(){function t(){_()(this,t),this.web3=null,this.addresses=null,this.abifiles=null,this.methods=null,this.providerUrl=null,this.pool=null,this.bToken=null,this.symbol=null,this.bSymbol=null,this.multiplier=null,this.feeRatio=null,this.minInitialMarginRatio=null,this.balance={},this.position={volume:x(0),cost:x(0),lastCumuFundingRate:x(0),margin:x(0),lastUpdateTimestamp:x(0)}}return g()(t,[{key:"initialize",value:function(){var t=m()(p.a.mark(function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments[1];return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this._initializeContracts(e,n);case 2:return t.next=4,this._initializeParameters();case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"tradeEvent",value:function(){var t=m()(p.a.mark(function t(e){var n,i,a,r,s,o,c,l,u,h,d;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),n={owner:e},t.next=4,this._getPastEvents(this.pool,"Trade",n);case 4:i=t.sent,a=[],r=0;case 7:if(!(r<i.length)){t.next=21;break}return s=i[r],o=s.returnValues,t.next=12,this._getTimeStamp(s.blockNumber);case 12:c=t.sent,l=R(x(o.tradeVolume)),u=R(x(o.price)),h=l.abs().times(u).times(this.multiplier).times(this.minInitialMarginRatio),d=l.gt(0)?"LONG":"SHORT",a.push({direction:d,baseToken:this.bSymbol,price:R(o.price).toString(),volume:R(o.tradeVolume).toString(),notional:h.toString(),transactionFee:this._calculateFee(l,u),time:+c.timestamp+"000"});case 18:r++,t.next=7;break;case 21:return console.log(a),t.abrupt("return",a);case 23:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"_calculateFee",value:function(t,e){return x(t).abs().times(e).times(this.multiplier).times(this.feeRatio).toString()}},{key:"_getPastEvents",value:function(){var t=m()(p.a.mark(function t(e,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getPastEvents(n,{filter:i,fromBlock:0,toBlock:"latest"},function(t,e){return e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()},{key:"_getTimeStamp",value:function(){var t=m()(p.a.mark(function t(e){return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.web3.eth.getBlock(e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"_call",value:function(){var t=m()(p.a.mark(function t(e,n){var i,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(i=e.methods)[this.methods[n]].apply(i,h()(a)).call();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()},{key:"_readjson",value:function(){var t=m()(p.a.mark(function t(e){var n;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("static/config/"+e);case 2:return n=t.sent,t.next=5,n.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"_initializeContracts",value:function(){var t=m()(p.a.mark(function t(e,n){var i,a,r,s,c,u,h;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this._readjson("config.json");case 3:return i=t.sent,0==n?this.providerUrl=i.bscProviderUrl:1==n?this.providerUrl=i.ropstenProviderUrl:2==n&&(this.providerUrl=i.hecoProviderUrl),this.addresses=i.addresses[n][e],this.abifiles=i.abifiles,this.methods=i.methods,t.next=10,o.a.all([this._readjson(this.abifiles.pool),this._readjson(this.abifiles.bToken),this._readjson(this.abifiles.pToken),this._readjson(this.abifiles.lToken)]);case 10:a=t.sent,r=l()(a,4),s=r[0],c=r[1],u=r[2],h=r[3],this.web3=new w.a(new w.a.providers.HttpProvider(this.providerUrl)),this.pool=new this.web3.eth.Contract(s,this.addresses.pool),this.bToken=new this.web3.eth.Contract(c,this.addresses.bToken),this.pToken=new this.web3.eth.Contract(u,this.addresses.pToken),this.lToken=new this.web3.eth.Contract(h,this.addresses.lToken),t.next=26;break;case 23:t.prev=23,t.t0=t.catch(0),console.log("Chain: _initializeContracts() error: "+t.t0);case 26:case"end":return t.stop()}},t,this,[[0,23]])}));return function(e,n){return t.apply(this,arguments)}}()},{key:"_initializeParameters",value:function(){var t=m()(p.a.mark(function t(){var e;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this._call(this.pool,"symbol");case 3:return this.symbol=t.sent,t.next=6,this._call(this.bToken,"symbol");case 6:return this.bSymbol=t.sent,t.next=9,this._call(this.bToken,"decimals");case 9:return this.bDecimals=t.sent,t.next=12,this._call(this.pool,"getParameters");case 12:e=t.sent,this.multiplier=R(e.multiplier),this.feeRatio=R(e.feeRatio),this.minPoolMarginRatio=R(e.minPoolMarginRatio),this.minInitialMarginRatio=R(e.minInitialMarginRatio),this.minMaintenanceMarginRatio=R(e.minMaintenanceMarginRatio),this.minAddLiquidity=R(e.minAddLiquidity),this.redemptionFeeRatio=R(e.redemptionFeeRatio),this.fundingRateCoefficient=R(e.fundingRateCoefficient),this.minLiquidationReward=R(e.minLiquidationReward),this.maxLiquidationReward=R(e.maxLiquidationReward),this.liquidationCutRatio=R(e.liquidationCutRatio),this.priceDelayAllowance=x(e.priceDelayAllowance),t.next=30;break;case 27:t.prev=27,t.t0=t.catch(0),console.log("Chain: _initializeParameters() error: "+t.t0);case 30:case"end":return t.stop()}},t,this,[[0,27]])}));return function(){return t.apply(this,arguments)}}()}]),t}(),T=new i.a,P=new C,S={name:"pools",data:function(){return{data:[],account:"",id:0,chanId:""}},methods:{connectwallet:function(){var t=this;T.connectWallet().then(function(e){console.log(e),e.success&&(t.account=e.account,P.initialize(t.id,t.chanId).then(function(e){P.tradeEvent(t.account).then(function(e){console.log(e),t.data=e.reverse(),t.data.map(function(t){t.volume=Math.abs(t.volume),t.time=r()(+t.time).format("YYYY-MM-DD HH:mm:ss")}),console.log(t.data)})}))})}},mounted:function(){this.id=this.$route.params.id,this.chanId=this.$route.params.network,this.connectwallet()}},M={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{color:"#fff"},attrs:{id:"history"}},[n("div",{staticClass:"container-fluid ml-0"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12 ml-0 mt-5",staticStyle:{"overflow-y":"hidden"}},[n("div",{staticClass:"banner"},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row mt-2"},[n("table",{staticClass:"table table-hover table-dark table-border sidebar-bg"},[t._m(0),t._v(" "),n("tbody",t._l(t.data,function(e){return n("tr",{key:e.index,staticStyle:{height:"4.4rem"}},[n("td",{},[t._v(t._s(e.time))]),t._v(" "),n("td",{},[t._v(t._s(e.direction))]),t._v(" "),n("td",{},[t._v(t._s(e.baseToken))]),t._v(" "),n("td",{},[t._v(t._s(e.price))]),t._v(" "),n("td",{},[t._v(t._s(e.volume))]),t._v(" "),n("td",{},[t._v(t._s(e.notional))]),t._v(" "),n("td",{},[t._v(t._s(e.transactionFee))])])}),0)])])])])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",{staticStyle:{"background-color":"#141924"}},[n("tr",{staticStyle:{height:"3.8rem","background-color":"#141924"}},[n("th",{staticClass:"text-left",attrs:{scope:"col"}},[t._v("Time")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("Direction")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("Base Token")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("Price")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("Volume")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("Notional")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("Transaction Fee")])])])}]};var j=n("C7Lr")(S,M,!1,function(t){n("pt1U")},"data-v-3789d2e4",null);e.default=j.exports},pt1U:function(t,e){}});