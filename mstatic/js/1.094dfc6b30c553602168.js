webpackJsonp([1],{UWAJ:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("SXXC");var n=a("d8Q8"),s=a("pLux"),i=a("zf2T");function o(t){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return 0==e?Object(i.a)(t):e>0?Object(i.a)(t).times(Object(i.a)("1"+"0".repeat(e))):Object(i.a)(t).div(Object(i.a)("1"+"0".repeat(-e)))}(t,-18)}var c={name:"pool",data:function(){return{isConnect:!1,noNetwork:!0,menuShow:!1,wallet:"0.0000",walletSymbol:"",networkText:"",address:"0xb1fb…df54",chainId:"",noNetworkText:"",checkIndex:"mining",listarr:[],load:!0,listPool:[],slp:{bToken:"0xA3DfbF2933FF3d96177bde4928D0F5840eE55600",pToken:"0x0000000000000000000000000000000000000000",lToken:"0x0000000000000000000000000000000000000000",pool:"0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",dToken:"0xA487bF43cF3b10dffc97A9A744cbB7036965d3b9",MiningVault:"0x7826Ef8Da65494EA21D64D8E6A76AB1BED042FD8",chanId:"1",bTokenSymbol:"DERI-USDT SLP"}}},components:{menut:n.a},watch:{listPool:{handler:function(t,e){var a=this;if(3==this.listPool.length){var n=s.a.get();"prod"==n&&Object(s.p)("1","0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",this.account).then(function(t){console.log(t);var e={};Object(s.s)("1","0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd").then(function(n){console.log(n),e.chainId=1,e.poolLiquidity=(+t.liquidity).toFixed(7),e.baseToken="DERI-USDT SLP";var s=.22008070161007/t.liquidity;s=(100*s).toFixed(2)+"%";var i=o(n.apy);i="0"==i?"--":(100*i).toFixed(2)+"%",e.apy=i+" + "+s,e.address="0xc2Ed...88Cd",e.network=a.getNetwork("1"),e.address_pool="0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd",a.listPool.push(e),a.load=!1})}),"dev"==n&&(this.load=!1)}}}},mounted:function(){var t=sessionStorage.getItem("chainId");this.getPoolLiquidity(),t&&this.connectWallet()},methods:{hide:function(t){this.menuShow=t},getWalletSymbol:function(t){switch(t=String(t)){case"1":this.walletSymbol="ETH",this.networkText="ETHEREUM";break;case"56":this.walletSymbol="BNB",this.networkText="BSC";break;case"128":this.walletSymbol="HT",this.networkText="HECO";break;case"3":this.walletSymbol="ETH",this.networkText="ROPSTEN";break;case"42":this.walletSymbol="ETH",this.networkText="KOVAN";break;case"97":this.walletSymbol="BNB",this.networkText="BSC TESTNET";break;case"256":this.walletSymbol="HT",this.networkText="HECO TESTNET";break;default:this.walletSymbol=""}},getNetwork:function(t){var e=void 0;switch(t=String(t)){case"1":e="ETHEREUM";break;case"56":e="BSC";break;case"128":e="HECO";break;case"3":e="ROPSTEN";break;case"42":e="KOVAN";break;case"97":e="BSC TESTNET";break;case"256":e="HECO TESTNET";break;default:e=""}return e},getPoolLiquidity:function(){var t=this,e=s.a.get();Object(s.h)(e).map(function(e){var a={};Object(s.p)(e.chainId,e.pool).then(function(n){console.log(n),Object(s.o)(e.chainId,e.bTokenSymbol).then(function(s){console.log(s);var i=+n.liquidity;a.poolLiquidity=i.toFixed(4),a.chainId=e.chainId;var c=o(s.apy);"0"==c?a.apys="--":a.apy=(100*c).toFixed(2)+"%",a.address_pool=e.pool,a.address=e.pool.slice(0,6)+"..."+e.pool.slice(e.pool.length-4,e.pool.length),a.network=t.getNetwork(e.chainId),a.baseToken=e.bTokenSymbol,t.listPool.push(a)})})})},connectWallet:function(){var t=this;Object(s.f)().then(function(e){if(e.success){t.chainId=e.chainId;var a=s.a.get(),n=Object(s.h)(a);if(t.chainIdOfList=n.filter(function(e){return e.chainId==t.chainId}),!t.chainIdOfList.length)return t.noNetwork=!1,void(t.noNetworkText="Unsupported Chain ID "+t.chainId+"!");t.account=e.account,t.address=e.account.slice(0,6)+"..."+e.account.slice(e.account.length-4,e.account.length),t.isConnect=!0,t.getUserWalletBalence(t.chainId,t.account),sessionStorage.setItem("chainId",t.chainId)}})},getUserWalletBalence:function(t,e){var a=this;console.log(t),Object(s.y)(t,e).then(function(e){a.wallet=(+e).toFixed(4),a.getWalletSymbol(t)})}}},l={render:function(){var t=this,e=this,n=e.$createElement,s=e._self._c||n;return s("div",{attrs:{id:"premining"}},[s("div",{staticClass:"nav"},[s("img",{staticClass:"menu",attrs:{src:a("+HEJ"),alt:""},on:{click:function(){t.menuShow=!0}}}),e._v(" "),e._m(0)]),e._v(" "),s("div",{staticClass:"min"},[s("div",{staticClass:"middle",class:e.menuShow?"blur":""},[e._l(e.listPool,function(t){return s("div",{key:t.length,staticClass:"car"},[s("div",{staticClass:"pool_header"},[s("div",{staticClass:"network"},[e._v("\n          "+e._s(t.network)+"\n        ")])]),e._v(" "),s("div",{staticClass:"pools_info"},[s("div",{staticClass:"info_center"},[s("div",{staticClass:"top_info"},[s("div",{staticClass:"logo",class:t.baseToken}),e._v(" "),s("div",{staticClass:"pool_info"},[s("div",{staticClass:"baseToken",class:"DERI-USDT SLP"==t.baseToken?"SLP":""},[e._v(e._s(t.baseToken))]),e._v(" "),s("div",{staticClass:"poolLiquidity"},[s("span",[e._v("Pool Liq")]),e._v("\n                "+e._s(t.poolLiquidity)+"\n              ")]),e._v(" "),s("div",{staticClass:"apy"},[s("span",[e._v("APY")]),e._v("\n                "+e._s(t.apy)+"\n              ")]),e._v(" "),s("div",{staticClass:"pool_address"},[s("span",[e._v("Address")]),e._v("\n                "+e._s(t.address)+"\n              ")])])]),e._v(" "),s("div",{staticClass:"bottom_btn"},[s("router-link",{attrs:{to:{name:"poolMining",params:{chainId:t.chainId,baseToken:t.baseToken,pooladdress:t.address_pool}}}},[s("button",[e._v("STAKING")])])],1)])])])}),e._v(" "),e.load?s("div",{staticClass:"car_load"},[s("span",{staticClass:"spinner spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}})]):e._e()],2)]),e._v(" "),s("div",{staticClass:"fixed",class:e.menuShow?"blur":""},[s("a",{staticClass:"premining",attrs:{href:"https://premining.deri.finance/#/"}},[e._v("PREMINING")])]),e._v(" "),s("div",{staticClass:"menu_left",class:e.menuShow?"anmint":""},[s("menut",{attrs:{checkIndex:e.checkIndex},on:{hide:e.hide}})],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"logo",attrs:{href:"https://deri.finance/"}},[e("img",{attrs:{src:a("+v4m"),alt:""}})])}]};var r=a("C7Lr")(c,l,!1,function(t){a("jkb8"),a("j9om"),a("n9Nz")},"data-v-5b69efa3",null);e.default=r.exports},j9om:function(t,e){},jkb8:function(t,e){},n9Nz:function(t,e){}});