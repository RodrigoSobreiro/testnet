webpackJsonp([1],{UWAJ:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("d8Q8"),o=a("pLux"),n=a("zf2T");function i(t){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return 0==e?Object(n.a)(t):e>0?Object(n.a)(t).times(Object(n.a)("1"+"0".repeat(e))):Object(n.a)(t).div(Object(n.a)("1"+"0".repeat(-e)))}(t,-18)}var l={name:"pool",data:function(){return{isConnect:!1,noNetwork:!0,menuShow:!1,wallet:"0.0000",walletSymbol:"",networkText:"",address:"0xb1fb…df54",chainId:"",noNetworkText:"",checkIndex:"mining",listarr:[],load:!0,listPool:[],slp:{bToken:"0xA3DfbF2933FF3d96177bde4928D0F5840eE55600",pToken:"0x0000000000000000000000000000000000000000",lToken:"0x0000000000000000000000000000000000000000",pool:"0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",dToken:"0xA487bF43cF3b10dffc97A9A744cbB7036965d3b9",MiningVault:"0x7826Ef8Da65494EA21D64D8E6A76AB1BED042FD8",chanId:"1",bTokenSymbol:"DERI-USDT SLP"}}},components:{menut:s.a},watch:{listPool:{handler:function(t,e){var a=this;if(4==this.listPool.length){var s=o.a.get();"prod"==s&&Object(o.n)("1","0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",this.account).then(function(t){console.log(t);var e={};Object(o.o)("1","0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd").then(function(s){console.log(s),e.chainId=1,e.poolLiquidity=(+t.liquidity).toFixed(7),e.baseToken="DERI-USDT SLP";var o=.22008070161007/t.liquidity;o=(100*o).toFixed(2)+"%";var n=i(s.apy);n="0"==n?"--":(100*n).toFixed(2)+"%",e.apy=n+" + "+o,e.address="0xc2Eda...88Cd",e.network=a.getNetwork("1"),e.address_pool="0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",a.listPool.push(e),a.load=!1})}),"dev"==s&&(this.load=!1)}}}},mounted:function(){sessionStorage.getItem("chainId")&&this.connectWallet()},methods:{hide:function(t){this.menuShow=t},getWalletSymbol:function(t){switch(t){case"1":this.walletSymbol="ETH",this.networkText="ETHEREUM";break;case"56":this.walletSymbol="BNB",this.networkText="BSC";break;case"128":this.walletSymbol="HT",this.networkText="HECO";break;case"3":this.walletSymbol="ETH",this.networkText="ROPSTEN";break;case"42":this.walletSymbol="ETH",this.networkText="KOVAN";break;case"97":this.walletSymbol="BNB",this.networkText="BSC TESTNET";break;case"256":this.walletSymbol="HT",this.networkText="HECO TESTNET";break;default:this.walletSymbol=""}},getNetwork:function(t){var e=void 0;switch(t){case"1":e="ETHEREUM";break;case"56":e="BSC";break;case"128":e="HECO";break;case"3":e="ROPSTEN";break;case"42":e="KOVAN";break;case"97":e="BSC TESTNET";break;case"256":e="HECO TESTNET";break;default:e=""}return e},connectWallet:function(){var t=this;Object(o.d)().then(function(e){if(e.success){t.chainId=ethereum.networkVersion;var a=o.a.get(),s=Object(o.e)(a);t.account=e.account,t.address=e.account.slice(0,6)+"..."+e.account.slice(e.account.length-4,e.account.length),t.isConnect=!0,t.getUserWalletBalence(t.chainId,t.account),sessionStorage.setItem("chainId",t.chainId),s.map(function(a){var s={};Object(o.j)(a.chanId,a.bTokenSymbol,e.account).then(function(e){console.log(e),Object(o.l)(a.chanId,a.bTokenSymbol).then(function(o){console.log(o);var n=+e.poolLiquidity;s.poolLiquidity=n.toFixed(4),s.chainId=a.chanId;var l=i(o.apy);"0"==l?s.apys="--":s.apy=(100*l).toFixed(2)+"%",s.address_pool=a.pool,s.address=a.pool.slice(0,6)+"..."+a.pool.slice(a.pool.length-4,a.pool.length),s.network=t.getNetwork(a.chanId),s.baseToken=a.bTokenSymbol,t.listPool.push(s)})})})}})},getUserWalletBalence:function(t,e){var a=this;console.log(t),Object(o.s)(t,e).then(function(e){a.wallet=(+e).toFixed(4),a.getWalletSymbol(t)})}}},c={render:function(){var t=this,e=this,s=e.$createElement,o=e._self._c||s;return o("div",{attrs:{id:"premining"}},[o("div",{staticClass:"nav"},[o("img",{staticClass:"menu",attrs:{src:a("+HEJ"),alt:""},on:{click:function(){t.menuShow=!0}}}),e._v(" "),o("img",{staticClass:"logo",attrs:{src:a("WNDy"),alt:""}})]),e._v(" "),o("div",{staticClass:"min"},[o("div",{staticClass:"middle",class:e.menuShow?"blur":""},[e._l(e.listPool,function(t){return o("div",{key:t.length,staticClass:"car"},[o("div",{staticClass:"pool_header"},[o("div",{staticClass:"network"},[e._v("\n          "+e._s(t.network)+"\n        ")])]),e._v(" "),o("div",{staticClass:"pools_info"},[o("div",{staticClass:"info_center"},[o("div",{staticClass:"top_info"},[o("div",{staticClass:"logo",class:t.baseToken}),e._v(" "),o("div",{staticClass:"pool_info"},[o("div",{staticClass:"baseToken",class:"DERI-USDT SLP"==t.baseToken?"SLP":""},[e._v(e._s(t.baseToken))]),e._v(" "),o("div",{staticClass:"poolLiquidity"},[o("span",[e._v("Pool Liq")]),e._v("\n                "+e._s(t.poolLiquidity)+"\n              ")]),e._v(" "),o("div",{staticClass:"apy"},[o("span",[e._v("APY")]),e._v("\n                "+e._s(t.apy)+"\n              ")]),e._v(" "),o("div",{staticClass:"pool_address"},[o("span",[e._v("Address")]),e._v("\n                "+e._s(t.address)+"\n              ")])])]),e._v(" "),o("div",{staticClass:"bottom_btn"},[o("router-link",{attrs:{to:{name:"poolMining",params:{chainId:t.chainId,baseToken:t.baseToken,pooladdress:t.address_pool}}}},[o("button",[e._v("STAKING")])])],1)])])])}),e._v(" "),e.load?o("div",{staticClass:"car_load"},[o("span",{staticClass:"spinner spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}})]):e._e()],2)]),e._v(" "),o("div",{staticClass:"fixed",class:e.menuShow?"blur":""},[o("router-link",{attrs:{to:"/lite"}},[o("button",{staticClass:"connect"},[e._v("\n        TRADE\n      ")])])],1),e._v(" "),o("div",{staticClass:"menu_left",class:e.menuShow?"anmint":""},[o("menut",{attrs:{checkIndex:e.checkIndex},on:{hide:e.hide}})],1)])},staticRenderFns:[]};var d=a("C7Lr")(l,c,!1,function(t){a("t18c")},"data-v-6b711ed8",null);e.default=d.exports},t18c:function(t,e){}});