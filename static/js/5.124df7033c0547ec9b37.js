webpackJsonp([5],{DlZp:function(t,i){},a3Yh:function(t,i,e){"use strict";i.__esModule=!0;var a,s=e("liLe"),n=(a=s)&&a.__esModule?a:{default:a};i.default=function(t,i,e){return i in t?(0,n.default)(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}},aA3l:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e("IHPB"),s=e.n(a),n=e("3cXf"),l=e.n(n),o=e("a3Yh"),r=e.n(o),c=e("mzkE"),d=e("SXXC"),v=e.n(d),u=e("pLux"),_=e("zf2T");function h(t){for(var i=[],e=0,a=(t=(t||0).toString().split("")).length-1;a>=0;a--)e++,i.unshift(t[a]),e%3||0==a||i.unshift(",");return i.join("")}function m(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return 0==i?Object(_.a)(t):i>0?Object(_.a)(t).times(Object(_.a)("1"+"0".repeat(i))):Object(_.a)(t).div(Object(_.a)("1"+"0".repeat(-i)))}function p(t){return m(t,-18)}var f=void 0,b={name:"pool",data:function(){var t;return t={isLp:!0,isApprove:!1,isEnterMargin:!1,isConnect:!1,noNetwork:!0,checkNetwork:"",isslp:!0,isWrong:!1,addLiquiditySub:"",removeLiquiditySub:"",modalSharesNum:"",wallet:"0.0000",mytradingvolumecurrent:"0",walletSymbol:"",networkText:"",address:"",noNetworkText:"",withdrawLiuqidity:"",depositLiquidity:"",minAddLiquidity:"",claimenetwork:"",money:"--",unclaimed:"--",mytradingpencentage:"--",settimeout:"-- h -- m -- s",my_liquidity:"--",liquidity_margin:"",liquidity_volume:"",total_liquidity:"--",PerLiquidityShare:"--",maxRemovableShares:"",PoolnetworkText:"",pencentage:"--",maxBalance:"",balance:"",shares:"",chainId:"",baseToken:"",account:""},r()(t,"address",""),r()(t,"agement",""),r()(t,"symbol",""),r()(t,"apy","--"),r()(t,"sushi_apy","--"),r()(t,"totaltradingvolumecurrent",""),r()(t,"claimed",""),r()(t,"unclaimed",""),r()(t,"poolName",""),r()(t,"myHarvestDeriLp",""),r()(t,"myHarvestDeriTrade",""),r()(t,"claimenetwork",""),r()(t,"address_pool",""),t},components:{footers:c.a},watch:{liquidity_margin:{handler:function(t,i){this.isEnterMargin=0!=t&&""!=t}},liquidity_volume:{handler:function(t,i){this.isEnterMargin=0!=t&&""!=t}}},mounted:function(){this.chainId=this.$route.params.chainId,this.baseToken=this.$route.params.baseToken,this.baseToken=this.baseToken,this.address_pool=this.$route.params.pooladdress;var t=sessionStorage.getItem("chainId"),i=this;setInterval(function(){i.current()},1e3),this.getPoolLiquidity(),this.getPoolNetWork(this.chainId),"0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd"==this.address_pool?(this.isslp=!1,this.getSlpPoolInfoApy(),t&&this.slpConnectWallet()):(this.getPoolInfoApy(this.chainId,this.address_pool),t&&this.connectWallet())},methods:{getPoolLiquidity:function(){var t=this;Object(u.p)(this.chainId,this.address_pool).then(function(i){t.total_liquidity=i.liquidity,t.symbol=i.symbol,"0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd"==t.address_pool?t.poolName=t.baseToken:t.poolName=i.symbol+"/"+t.baseToken})},removeMax:function(){this.liquidity_volume=this.maxRemovableShares},addMax:function(){this.liquidity_margin=this.maxBalance},reset:function(){this.getWalletBalance(this.agement),this.getSpecification(this.agement),this.getLiquidityInfo(this.agement),this.getUserInfoInPool(this.agement),this.getUserWalletBalence(this.chainId,this.account),this.getPoolInfoApy(this.chainId,this.pool),this.liquidity_margin="",this.liquidity_volume=""},slpreset:function(){this.getSlpPoolInfoApy(),this.getSlpLiquidityInfo(),this.getUserWalletBalence(this.chainId,this.account),this.liquidity_margin="",this.liquidity_volume=""},removeSlpLiquidity:function(){var t=this,i=v()("#removeslpbut"),e=this.liquidity_volume,a=this.maxRemovableShares,n=m(this.maxRemovableShares);if(m(e).gt(n))alert("Your current max removable shares are  "+a);else if(+e<=0||isNaN(e))alert("Invalid Liquidity!");else{var o=JSON.parse(l()(this.agement));o.push(e),this.disableButton(i),u.F.apply(void 0,s()(o)).then(function(e){console.log(e),e.success||alert("failure of transaction"),v()("#removeLiquidity").modal("hide"),t.enableButton(i),t.slpreset()})}},addSlpLiquidity:function(){var t=this,i=v()("#addslpbut"),e=this.liquidity_margin,a=m(e),n=m(this.maxBalance);if(a.gt(n))alert("not sufficient funds");else if(+e<=0||isNaN(e))alert("Please enter the correct format!");else{this.disableButton(i);var o=JSON.parse(l()(this.agement));o.push(e),u.d.apply(void 0,s()(o)).then(function(e){console.log(e),e.success||alert("failure of transaction"),v()("#addLiquidity").modal("hide"),t.enableButton(i),t.slpreset()})}},mintDToken:function(){var t=this,i=v()("#claimmyderi");0!=this.unclaimed?parseInt(Date.now()/1e3)%28800<1800?alert("Claiming DERI is disabled during first 30 minutes of each epoch"):(this.disableButton(i),console.log(this.agement),Object(u.C)(this.chainId,this.account).then(function(e){if(console.log(e),t.enableButton(i),e.success){t.unclaimed=0,clearInterval(f);var a=t;f=setInterval(function(){a.getUserInfoAll(a.account)},18e4)}else alert("Claim failed");t.reset()})):alert("Sorry,no DERI to claim yet")},tmintDToken:function(){var t=this,i=v()("#tradeclaimmyderi");0!=this.unclaimed?parseInt(Date.now()/1e3)%28800<1800?alert("Claiming DERI is disabled during first 30 minutes of each epoch"):(this.disableButton(i),Object(u.C)(this.chainId,this.account).then(function(e){if(t.enableButton(i),e.success){t.unclaimed=0,clearInterval(f);var a=t;f=setInterval(function(){a.getUserInfoAll(a.account)},18e4)}else alert("Claim failed");t.reset()})):alert("Sorry,no DERI to claim yet")},addLiquidity:function(){var t=this,i=v()("#addbut"),e=this.liquidity_margin,a=m(e),n=m(this.maxBalance);if(a.gt(n))alert("not sufficient funds");else if(+e<+this.minAddLiquidity)alert("The input liquidity shall not be less than "+this.minAddLiquidity);else if(+e<=0||isNaN(e))alert("Please enter the correct format!");else{this.disableButton(i);var o=JSON.parse(l()(this.agement));o.push(e),u.c.apply(void 0,s()(o)).then(function(e){console.log(e),e.success||alert("failure of transaction"),v()("#addLiquidity").modal("hide"),t.enableButton(i),t.reset()})}},removeLiquidity:function(){var t=this,i=v()("#removebut"),e=this.liquidity_volume,a=this.maxRemovableShares,n=a-e,o=m(this.maxRemovableShares),r=m(e);if(n<1&&0!=n)alert('Leaving staking balance of smaller than 1 is not allowed. Please click "MAX" to remove all if you are to withdraw all of your liquidity.');else if(r.gt(o))alert("Your current max removable shares are  "+a);else if(+e<=0||isNaN(e))alert("Invalid Liquidity!");else{var c=JSON.parse(l()(this.agement));c.push(e),this.disableButton(i),u.E.apply(void 0,s()(c)).then(function(e){console.log(e),e.success||alert("failure of transaction"),v()("#removeLiquidity").modal("hide"),t.enableButton(i),t.reset()})}},getWalletSymbol:function(t){switch(t=String(t)){case"1":this.walletSymbol="ETH",this.networkText="ETHEREUM";break;case"56":this.walletSymbol="BNB",this.networkText="BSC";break;case"128":this.walletSymbol="HT",this.networkText="HECO";break;case"3":this.walletSymbol="ETH",this.networkText="ROPSTEN";break;case"42":this.walletSymbol="ETH",this.networkText="KOVAN";break;case"97":this.walletSymbol="BNB",this.networkText="BSC TESTNET";break;case"256":this.walletSymbol="HT",this.networkText="HECO TESTNET";break;default:this.walletSymbol=""}},getPoolNetWork:function(t){switch(t=String(t)){case"1":this.PoolnetworkText="ETHEREUM";break;case"56":this.PoolnetworkText="BSC";break;case"128":this.PoolnetworkText="HECO";break;case"3":this.PoolnetworkText="ROPSTEN";break;case"42":this.PoolnetworkText="KOVAN";break;case"97":this.PoolnetworkText="BSC TESTNET";break;case"256":this.PoolnetworkText="HECO TESTNET";break;default:this.PoolnetworkText=""}},getChainId:function(t){var i=void 0;switch(t=String(t)){case"1":i="ETHEREUM";break;case"56":i="BSC";break;case"128":i="HECO";break;case"3":i="ROPSTEN";break;case"42":i="KOVAN";break;case"97":i="BSC TESTNET";break;case"256":i="HECO TESTNET";break;default:i=""}return i},current:function(){var t=parseInt(Date.now()/1e3),i=28800*parseInt(t/28800)+28800-t,e=parseInt(i/3600),a=parseInt(i%3600/60),s=parseInt(i%60);this.settimeout=e+" h "+a+" m "+s+" s"},connectWallet:function(){var t=this;Object(u.f)().then(function(i){if(i.success){var e=i.chainId,a=u.a.get();if(e!=t.chainId){var s=Object(u.h)(a);if(t.chainIdOfList=s.filter(function(t){return t.chainId==e}),!t.chainIdOfList.length)return t.noNetwork=!1,void(t.noNetworkText="Unsupported Chain ID "+e+"!");t.account=i.account,t.address=i.account.slice(0,6)+"..."+i.account.slice(i.account.length-4,i.account.length),t.isConnect=!0;t.getChainId(t.chainId);return sessionStorage.setItem("chainId",t.chainId),sessionStorage.setItem("pool",t.address_pool),t.isWrong=!0,t.getUserWalletBalence(e,t.account),void t.getPoolNetWork(t.chainId)}t.account=i.account,t.address=i.account.slice(0,6)+"..."+i.account.slice(i.account.length-4,i.account.length),t.isConnect=!0,t.agement=[t.chainId,t.address_pool,t.account],t.isUnlocked(t.agement),t.getWalletBalance(t.agement),t.getSpecification(t.agement),t.getLiquidityInfo(t.agement),t.getUserInfoInPool(t.agement),t.getUserWalletBalence(t.chainId,t.account),t.getPoolNetWork(t.chainId),t.getPoolInfoApy(t.chainId,t.address_pool),t.getUserInfoAll(t.account),sessionStorage.setItem("chainId",t.chainId),sessionStorage.setItem("pool",t.address_pool);var n=t;f=setInterval(function(){n.getUserInfoAll(n.account)},18e4)}})},slpConnectWallet:function(){var t=this;Object(u.f)().then(function(i){if(i.success){var e=i.chainId,a=u.a.get();if(e!=t.chainId){var s=Object(u.h)(a);return t.chainIdOfList=s.filter(function(i){return i.chainId==t.chainId}),t.chainIdOfList.length?(t.account=i.account,t.address=i.account.slice(0,6)+"..."+i.account.slice(i.account.length-4,i.account.length),t.isConnect=!0,sessionStorage.setItem("chainId",t.chainId),t.isWrong=!0,t.getUserWalletBalence(e,t.account),void t.getPoolNetWork(t.chainId)):(t.noNetwork=!1,void(t.noNetworkText="Unsupported Chain ID "+t.chainId+"!"))}console.log(u.a.get()),t.account=i.account,t.address=i.account.slice(0,6)+"..."+i.account.slice(i.account.length-4,i.account.length),t.isConnect=!0,t.agement=[t.chainId,t.address_pool,t.account];var n=t;t.isSlpUnlocked(t.agement),t.getSlpWalletBalance(t.agement),t.getSlpLiquidityInfo(t.agement),t.getUserWalletBalence(t.chainId,t.account),t.getPoolNetWork(t.chainId),t.getSlpPoolInfoApy(t.chainId,t.address_pool),t.getUserInfoAll(t.account),sessionStorage.setItem("chainId",t.chainId),f=setInterval(function(){n.getUserInfoAll(n.account)},18e4)}})},getSlpPoolInfoApy:function(){var t=this;Object(u.s)("1","0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd").then(function(i){var e=.22008070161007/t.total_liquidity;e=(100*e).toFixed(2)+"%";var a=p(i.apy);a="0"==a?"--":(100*a).toFixed(2)+"%",t.apy=a,t.sushi_apy=e})},getSlpLiquidityInfo:function(t){var i=this;u.r.apply(void 0,s()(t)).then(function(t){console.log(t),i.maxRemovableShares=t.shares;var e=+t.liquidity;i.stotal=e,i.my_liquidity=t.shares;var a=i.my_liquidity;a=a.substring(a.indexOf(".")+1,a.indexOf(".")+3),i.removeMarginSub=a,i.modalSharesNum=h(parseInt(t.shares)),i.total_liquidity=e,i.PerLiquidityShare=1,i.PerLiquidityShare=i.PerLiquidityShare.toFixed(6),i.money=t.shares*i.PerLiquidityShare,i.baseToken="DERI-USDT SLP",i.pencentage=t.shares/t.liquidity*100,isNaN(i.pencentage)?i.pencentage="0%":"0"==t.shares?i.pencentage="0%":i.pencentage=i.pencentage.toFixed(2)+"%"})},getSlpWalletBalance:function(t){var i=this;u.t.apply(void 0,s()(t)).then(function(t){i.maxBalance=t;var e=(+t).toFixed(6);e=e.substring(2,e.indexOf(".")+3),i.addLiquiditySub=e,i.balance=h(parseInt(t))})},getLiquidityInfo:function(t){var i=this;u.m.apply(void 0,s()(t)).then(function(t){console.log(t),i.maxRemovableShares=t.maxRemovableShares;var e=+t.poolLiquidity;i.stotal=e,i.my_liquidity=(+t.shares).toFixed(2);var a=(+t.shares).toFixed(2);if(a=a.substring(a.indexOf(".")+1,a.indexOf(".")+3),i.removeLiquiditySub=a,i.modalSharesNum=h(parseInt(t.shares)),i.total_liquidity=e,"NaN"==t.shareValue)i.PerLiquidityShare="--";else{var s=+t.shareValue;i.PerLiquidityShare=s.toFixed(6),i.money=(t.shares*i.PerLiquidityShare).toFixed(2)}i.pencentage=t.shares*t.shareValue/t.poolLiquidity*100,isNaN(i.pencentage)?i.pencentage="0%":"0"==t.shares?i.pencentage="0%":i.pencentage=i.pencentage.toFixed(2)+"%"})},getUserInfoInPool:function(t){var i=this;u.x.apply(void 0,s()(t)).then(function(t){console.log("mytradingvolumecurrent",t),i.mytradingvolumecurrent=p(t.volume1h)})},getWalletBalance:function(t){var i=this;u.z.apply(void 0,s()(t)).then(function(t){console.log("balance",t),i.maxBalance=t;var e=(+t).toFixed(2);e=e.substring(e.indexOf(".")+1,e.indexOf(".")+3),i.addLiquiditySub=e,i.balance=h(parseInt(t))})},getSpecification:function(t){var i=this;u.u.apply(void 0,s()(t)).then(function(t){console.log(t),i.minAddLiquidity=t.minAddLiquidity,i.baseToken=t.bSymbol})},getUserWalletBalence:function(t,i){var e=this;console.log(t),Object(u.y)(t,i).then(function(i){e.wallet=(+i).toFixed(4),e.getWalletSymbol(t)})},isUnlocked:function(t){var i=this;console.log("isUnlocked","start"),u.B.apply(void 0,s()(t)).then(function(t){console.log("isUnlocked",t),t?(v()("input").attr("disabled",!1),i.isApprove=!0):(v()("input").attr("disabled",!0),i.isApprove=!1)}).catch(function(t){console.lgo(t)})},unlockSlp:function(){var t=this,i=v()("#SlpUnlock");this.disableButton(i);var e=this.agement;u.I.apply(void 0,s()(e)).then(function(e){e.success?(v()("input").attr("disabled",!1),t.isApprove=!0):(v()("input").attr("disabled",!0),t.isApprove=!1),t.enableButton(i)})},unlock:function(){var t=this,i=v()("#Unlock");this.disableButton(i);var e=this.agement;u.H.apply(void 0,s()(e)).then(function(e){e.success?(v()("input").attr("disabled",!1),t.isApprove=!0):(v()("input").attr("disabled",!0),t.isApprove=!1),t.enableButton(i)})},isSlpUnlocked:function(t){var i=this;u.A.apply(void 0,s()(t)).then(function(t){t?(v()("input").attr("disabled",!1),i.isApprove=!0):(v()("input").attr("disabled",!0),i.isApprove=!1)})},getPoolInfoApy:function(t,i){var e=this;console.log(i),Object(u.o)(t,i).then(function(t){console.log("getPoolInfoApy",t);var i=p(t.apy);e.totaltradingvolumecurrent=p(t.volume1h),e.apy="0"==i?"--":(100*i).toFixed(2)+"%"})},getUserInfoAll:function(t){var i=this;Object(u.w)(t).then(function(t){i.claimed=p(t.total).toFixed(2),console.log(t),t.valid?i.unclaimed=(+t.amount).toFixed(2):i.unclaimed=0,console.log(p(m(t.trade)).toString()),i.myHarvestDeriLp=(+t.lp).toFixed(2),i.myHarvestDeriTrade=(+t.trade).toFixed(2),i.getClaimeNetwork(t.chainId)})},getClaimeNetwork:function(t){switch(t){case"1":this.claimenetwork="ETHEREUM";break;case"56":this.claimenetwork="BSC";break;case"128":this.claimenetwork="HECO";break;case"3":this.claimenetwork="ROPSTEN";break;case"42":this.claimenetwork="KOVAN";break;case"97":this.claimenetwork="BSC TESTNET";break;case"256":this.claimenetwork="HECO TESTNET";break;default:this.claimenetwork=""}},disableButton:function(t){t.find("span.spinner").show(),t.attr("disabled",!0)},enableButton:function(t){t.find("span.spinner").hide(),t.attr("disabled",!1)}}},g={render:function(){var t=this,i=this,e=i.$createElement,a=i._self._c||e;return a("div",{attrs:{id:"pool"}},[a("div",{staticClass:"modal fade",attrs:{id:"addLiquidity",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[i._m(0),i._v(" "),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"margin_box_info"},[a("div",[i._v("Wallet Balance")]),i._v(" "),a("div",{staticClass:"money"},[a("span",[a("span",{staticClass:"bt_balance"},[i._v("\n                  "+i._s(i.balance)+"."),a("span",{staticStyle:{"font-size":"12px"}},[i._v(i._s(i.addLiquiditySub))])]),i._v(" "),a("br"),i._v(" "),a("span",{staticStyle:{"font-size":"14px",position:"relative",top:"-7px"}},[i._v(i._s(i.baseToken))])]),i._v(" "),a("span",{staticClass:"add"})]),i._v(" "),a("div",{staticClass:"enter_margin"},[a("div",{staticClass:"input_margin"},[a("div",{staticClass:"box"},[a("div",{directives:[{name:"show",rawName:"v-show",value:i.isEnterMargin,expression:"isEnterMargin"}],staticClass:"amount"},[i._v("LIQUIDITY")]),i._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:i.liquidity_margin,expression:"liquidity_margin"}],staticClass:"margin_value",attrs:{type:"number",placeholder:"LIQUIDITY"},domProps:{value:i.liquidity_margin},on:{input:function(t){t.target.composing||(i.liquidity_margin=t.target.value)}}})])]),i._v(" "),a("div",[i._v(i._s(i.baseToken))])]),i._v(" "),a("div",{staticClass:"max"},[i._v("\n              MAX: "),a("span",{staticClass:"max_num"},[i._v(i._s(this.maxBalance))]),i._v(" "),a("span",{staticClass:"max_btn_left",on:{click:i.addMax}},[i._v("ADD ALL")])]),i._v(" "),a("div",{staticClass:"add_margin_btn"},[i.isslp?a("button",{staticClass:"margin_btn",attrs:{id:"addbut"},on:{click:i.addLiquidity}},[a("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),i._v("\n                ADD\n              ")]):a("button",{staticClass:"margin_btn",attrs:{id:"addslpbut"},on:{click:i.addSlpLiquidity}},[a("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),i._v("\n                ADD\n              ")])])])])])])]),i._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"removeLiquidity",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[i._m(1),i._v(" "),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"margin_box_info"},[a("div",[i._v("Shares Available")]),i._v(" "),a("div",{staticClass:"money"},[a("span",[a("span",{staticClass:"bt_balance"},[i._v("\n                "+i._s(i.modalSharesNum)+"."),a("span",{staticStyle:{"font-size":"12px"}},[i._v(i._s(i.removeLiquiditySub))])])]),i._v(" "),a("span",{staticClass:"remove"})]),i._v(" "),a("div",{staticClass:"enter_margin"},[a("div",{staticClass:"input_margin"},[a("div",{staticClass:"box"},[a("div",{directives:[{name:"show",rawName:"v-show",value:i.isEnterMargin,expression:"isEnterMargin"}],staticClass:"amount"},[i._v("LIQUIDITY SHARES")]),i._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:i.liquidity_volume,expression:"liquidity_volume"}],staticClass:"margin_value",attrs:{type:"number",placeholder:"LIQUIDITY SHARES"},domProps:{value:i.liquidity_volume},on:{input:function(t){t.target.composing||(i.liquidity_volume=t.target.value)}}})])]),i._v(" "),a("div",[i._v("Shares")])]),i._v(" "),a("div",{staticClass:"max"},[i._v("\n              MAX REMOVABLE: "),a("span",{staticClass:"max_num"},[i._v(i._s(this.maxRemovableShares))]),i._v(" "),a("span",{staticClass:"max_btn_left",on:{click:i.removeMax}},[i._v("REMOVE ALL")])]),i._v(" "),a("div",{staticClass:"add_margin_btn remv"},[i.isslp?a("button",{staticClass:"margin_btn",attrs:{id:"removebut"},on:{click:i.removeLiquidity}},[a("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),i._v("\n                REMOVE\n              ")]):a("button",{staticClass:"margin_btn",attrs:{id:"removeslpbut"},on:{click:i.removeSlpLiquidity}},[a("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),i._v("\n                REMOVE\n              ")])])])])])])]),i._v(" "),a("div",{staticClass:"nav"},[a("div",{staticClass:"nav_mean"},[i._m(2),i._v(" "),a("ul",{staticClass:"mean"},[a("li",{staticClass:"menu_li"},[a("router-link",{staticStyle:{color:"#FFFFFF"},attrs:{to:"/mining"}},[i._v("\n            Mining\n          ")])],1),i._v(" "),a("li",{staticClass:"menu_li"},[a("router-link",{attrs:{to:"/lite"}},[i._v("\n            Trade\n          ")])],1),i._v(" "),i._m(3),i._v(" "),i._m(4),i._v(" "),a("li",{staticClass:"menu_li ref"},[a("a",{attrs:{href:"https://docs.deri.finance/"}},[i._v("Docs")]),i._v(" "),a("svg",{staticClass:"Zi Zi--ArrowDown ContentItem-arrowIcon",attrs:{fill:"currentColor",viewBox:"0 0 24 24",width:"24",height:"24"}},[a("path",{attrs:{d:"M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 0-1.052.757.757 0 0 0-1.063 0L12.002 13z","fill-rule":"evenodd"}})]),i._v(" "),i._m(5)])]),i._v(" "),a("div",{staticClass:"connect"},[a("div",{staticClass:"network_text_logo"},[a("i",{class:i.walletSymbol})]),i._v(" "),a("span",{staticClass:"logo_text"},[i._v(i._s(i.networkText))]),i._v(" "),i.noNetwork?a("div",{staticClass:"bg_btn"},[i.isConnect?a("button",{staticClass:"nav_btn"},[i._v("\n            "+i._s(i.wallet)+" "+i._s(i.walletSymbol)+" "),a("span",{staticClass:"address"},[i._v(i._s(i.address))])]):a("button",{staticClass:"nav_btn connect_btn",on:{click:i.connectWallet}},[i._v("\n            Connect Wallet\n          ")])]):a("div",[a("button",{staticClass:"nav_btn noNetwork"},[i._v("\n            "+i._s(i.noNetworkText)+"\n          ")])])])])]),i._v(" "),a("div",{staticClass:"margin_top"}),i._v(" "),a("div",{staticClass:"middle"},[a("div",{staticClass:"mining_info"},[a("div",{staticClass:"pool_header"},[a("div",{staticClass:"pool_network"},[i._v("\n          "+i._s(i.poolName)+" @ "+i._s(i.PoolnetworkText)+"\n        ")]),i._v(" "),a("div",{staticClass:"check_trade_liquidity"},[a("div",{staticClass:"liquidity_mining",class:i.isLp?"action":"",on:{click:function(){t.isLp=!0}}},[i._v("\n            LIUQIDITY MINING\n          ")]),i._v(" "),a("div",{staticClass:"trade_mining",class:i.isLp?"":"action",on:{click:function(){t.isLp=!1}}},[i._v("\n            TRADING MINING\n          ")])])]),i._v(" "),a("div",{staticClass:"pool_info"},[a("div",{directives:[{name:"show",rawName:"v-show",value:i.isLp,expression:"isLp"}],staticClass:"liquidity_info"},[a("div",{staticClass:"claim_box"},[a("div",{staticClass:"odd title"},[i._v("My Liquidity-Providing Harvest in Current Epoch")]),i._v(" "),a("div",{staticClass:"odd text"},[a("div",{staticClass:"text_title"},[i._v("Current Epoch Remaining Time")]),i._v(" "),a("div",{staticClass:"text_num"},[i._v(i._s(i.settimeout))])]),i._v(" "),a("div",{staticClass:"odd text"},[a("div",{staticClass:"text_title"},[i._v("My Harvest in Current Epoch (estimated)")]),i._v(" "),a("div",{staticClass:"text_num"},[i._v(i._s(i.myHarvestDeriLp)+" DERI")])]),i._v(" "),a("div",{staticClass:"odd text"},[a("div",{staticClass:"text_title"},[i._v("Claimed DERI")]),i._v(" "),a("div",{staticClass:"text_num"},[i._v(i._s(i.claimed))])]),i._v(" "),i._m(6),i._v(" "),a("div",{staticClass:"odd text"},[a("div",{staticClass:"text_title"},[i._v("Unclaimed DERI")]),i._v(" "),a("div",{staticClass:"text_num"},[i._v(i._s(i.unclaimed))])]),i._v(" "),a("div",{staticClass:"odd claim_network"},[a("div",{staticClass:"text_title"},[i._v("Your DERI is on "+i._s(i.claimenetwork)+" . Connect to "+i._s(i.claimenetwork)+" to claim.\n              ")])]),i._v(" "),a("div",{staticClass:"claim_btn"},[i.isConnect?a("button",{staticClass:"claim",attrs:{id:"claimmyderi"},on:{click:i.mintDToken}},[a("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),i._v("\n                CLAIM\n              ")]):a("div",[a("button",{staticClass:"btn  claim",on:{click:i.connectWallet}},[i._v("\n                  Connect Wallet\n                ")])])])]),i._v(" "),a("div",{staticClass:"liquidity_box"},[a("div",{staticClass:"odd title"},[i._v("Provide "+i._s(i.baseToken)+" to Earn DERI")]),i._v(" "),a("div",{staticClass:"odd text"},[a("div",{staticClass:"text_title"},[i._v("Pool Total Liquidity")]),i._v(" "),a("div",{staticClass:"text_num"},[i._v(" "+i._s(i.total_liquidity)+" "+i._s(i.baseToken))])]),i._v(" "),a("div",{staticClass:"odd text"},[a("div",{staticClass:"text_title"},[i._v("APY")]),i._v(" "),a("div",{staticClass:"text_num"},[a("span",{class:"DERI-USDT SLP"==i.baseToken?"hSlp":"",attrs:{title:"DERI-USDT SLP"==i.baseToken?"DERI-APY":""}},[i._v(i._s(i.apy))]),i._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:!i.isslp,expression:"!isslp"}]},[i._v("+")]),i._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:!i.isslp,expression:"!isslp"}],class:"DERI-USDT SLP"==i.baseToken?"hSlp":"",attrs:{title:"DERI-USDT SLP"==i.baseToken?"SUSHI-APY":""}},[i._v(i._s(i.sushi_apy))])])]),i._v(" "),a("div",{staticClass:"odd text"},[a("div",{staticClass:"text_title"},[i._v("Liquidity Share Value")]),i._v(" "),a("div",{staticClass:"text_num"},[i._v(i._s(i.PerLiquidityShare)+" "+i._s(i.baseToken))])]),i._v(" "),a("div",{staticClass:"odd text"},[a("div",{staticClass:"text_title"},[i._v("My Liquidity Pencentage")]),i._v(" "),a("div",{staticClass:"text_num"},[i._v(i._s(i.pencentage))])]),i._v(" "),a("div",{staticClass:"odd text"},[a("div",{staticClass:"text_title"},[i._v("Staked Balance")]),i._v(" "),a("div",{staticClass:"text_num"},[i._v(i._s(i.my_liquidity)+" "),a("span",{staticStyle:{color:"#ffffff"}},[i._v("Shares")])])]),i._v(" "),a("div",{staticClass:"odd claim_network"},[a("div",{staticClass:"text_title money"},[i._v(i._s(i.money)+" "+i._s(i.baseToken))])]),i._v(" "),a("div",{staticClass:"liquidity_btn"},[i.isWrong?a("div",[a("button",{staticClass:"btn approve_btn",staticStyle:{color:"#e35061","font-family":"'Korolev'","font-weight":"400"},attrs:{disabled:""}},[i._v("\n                    Wrong Network\n                  ")])]):a("div",[i.isConnect?a("div",[i.isApprove?a("div",{staticClass:"add_remove_liquidity"},[a("button",{staticClass:"add_liquidity",attrs:{"data-toggle":"modal","data-target":"#addLiquidity"}},[i._v("\n                  ADD LIQUIDITY\n                ")]),i._v(" "),a("button",{staticClass:"remove_liquidity",attrs:{"data-toggle":"modal","data-target":"#removeLiquidity"}},[i._v("\n                  REMOVE LIQUIDITY\n                ")])]):a("div",{staticClass:"approve"},[i.isslp?a("button",{staticClass:"approve_btn",attrs:{id:"Unlock"},on:{click:i.unlock}},[a("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),i._v("\n                    APPROVE\n                  ")]):a("button",{staticClass:"approve_btn",attrs:{id:"SlpUnlock"},on:{click:i.unlockSlp}},[a("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),i._v("\n                    APPROVE\n                  ")])]),i._v(" "),a("div")]):a("div",[a("button",{staticClass:"btn approve_btn",on:{click:i.connectWallet}},[i._v("\n                    Connect Wallet\n                  ")])])])])])]),i._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!i.isLp,expression:"!isLp"}],staticClass:"trade_info"},[a("div",{staticClass:"claim_box"},[a("div",{staticClass:"odd title"},[i._v("My Trading Harvest in Current Epoch")]),i._v(" "),a("div",{staticClass:"odd text"},[a("div",{staticClass:"text_title"},[i._v("My Trading Harvest in Current Epoch (Est)")]),i._v(" "),a("div",{staticClass:"text_num"},[i._v(i._s(i.myHarvestDeriTrade)+" DERI")])]),i._v(" "),a("div",{staticClass:"odd text"},[a("div",{staticClass:"text_title"},[i._v("Claimed DERI")]),i._v(" "),a("div",{staticClass:"text_num"},[i._v(i._s(i.claimed))])]),i._v(" "),i._m(7),i._v(" "),i._m(8),i._v(" "),a("div",{staticClass:"odd text"},[a("div",{staticClass:"text_title"},[i._v("Unclaimed DERI")]),i._v(" "),a("div",{staticClass:"text_num"},[i._v(i._s(i.unclaimed))])]),i._v(" "),i._m(9),i._v(" "),a("div",{staticClass:"claim_btn"},[i.isConnect?a("button",{staticClass:"claim",attrs:{id:"tradeclaimmyderi"},on:{click:i.tmintDToken}},[a("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),i._v("\n                CLAIM\n              ")]):a("div",[a("button",{staticClass:"btn  claim",on:{click:i.connectWallet}},[i._v("\n                  Connect Wallet\n                ")])])])]),i._v(" "),a("div",{staticClass:"liquidity_box"},[a("div",{staticClass:"odd title"},[i._v("Trade to Earn DERI")]),i._v(" "),a("div",{staticClass:"odd text"},[a("div",{staticClass:"text_title"},[i._v("Total Trading Volume in Current Hour")]),i._v(" "),a("div",{staticClass:"text_num"},[i._v(i._s(i.totaltradingvolumecurrent))])]),i._v(" "),a("div",{staticClass:"odd text"},[a("div",{staticClass:"text_title"},[i._v("My Trading Volume in Current Hour")]),i._v(" "),a("div",{staticClass:"text_num"},[i._v(i._s(i.mytradingvolumecurrent))])]),i._v(" "),i._m(10),i._v(" "),i._m(11),i._v(" "),i._m(12),i._v(" "),a("div",{staticClass:"odd claim_network"}),i._v(" "),a("div",{staticClass:"claim_btn"},[a("router-link",{attrs:{to:"/lite"}},[a("button",{staticClass:"claim"},[i._v("\n                  TRADE\n                ")])])],1)])])])])]),i._v(" "),a("div",{staticClass:"margin_footer"}),i._v(" "),a("footers")],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"modal-header"},[i("div",{staticClass:"title"},[this._v("\n            ADD LIQUIDITY\n          ")]),this._v(" "),i("div",{staticClass:"close",attrs:{"data-dismiss":"modal"}},[i("span",[this._v("×")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"modal-header"},[i("div",{staticClass:"title"},[this._v("\n            REMOVE LIQUIDITY\n          ")]),this._v(" "),i("div",{staticClass:"close",attrs:{"data-dismiss":"modal"}},[i("span",[this._v("×")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"logo"},[i("a",{attrs:{href:"https://deri.finance",target:"_blank"}},[i("img",{attrs:{src:e("+v4m"),alt:""}})])])},function(){var t=this.$createElement,i=this._self._c||t;return i("li",{staticClass:"menu_li"},[i("a",{attrs:{target:"_blank",href:"https://governance.deri.finance/"}},[this._v("Governance")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("li",{staticClass:"menu_li"},[i("a",{attrs:{target:"_blank",href:"https://bridge.deri.finance/"}},[this._v("Bridge")])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"ref_box"},[e("ul",{attrs:{id:"docs_index"}},[e("li",{staticClass:"docs_li"},[e("a",{attrs:{href:"https://github.com/deri-finance/whitepaper/blob/master/deri_whitepaper.pdf"}},[t._v("Whitepaper")])]),t._v(" "),e("li",{staticClass:"docs_li"},[e("a",{attrs:{href:"https://github.com/peckshield/publications/blob/master/audit_reports/PeckShield-Audit-Report-Deri-v1.0.pdf"}},[t._v("Code Audit")])]),t._v(" "),e("li",{staticClass:"docs_li"},[e("a",{attrs:{href:"https://deri.finance/#/team"}},[t._v("Team")])]),t._v(" "),e("li",{staticClass:"docs_li"},[e("a",{attrs:{href:"https://docs.deri.finance/faq"}},[t._v("FAQ")])]),t._v(" "),e("li",{staticClass:"docs_li"},[e("a",{attrs:{href:"https://docs.deri.finance/"}},[t._v("Guide")])]),t._v(" "),e("li",{staticClass:"docs_li"},[e("a",{attrs:{href:"https://github.com/deri-finance/"}},[t._v("Github")])])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"odd text"},[i("div",{staticClass:"text_title"}),this._v(" "),i("div",{staticClass:"text_num"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"odd text"},[i("div",{staticClass:"text_title"}),this._v(" "),i("div",{staticClass:"text_num"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"odd text"},[i("div",{staticClass:"text_title"}),this._v(" "),i("div",{staticClass:"text_num"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"odd claim_network"},[i("div",{staticClass:"text_title"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"odd text"},[i("div",{staticClass:"text_title"}),this._v(" "),i("div",{staticClass:"text_num"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"odd text"},[i("div",{staticClass:"text_title"}),this._v(" "),i("div",{staticClass:"text_num"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"odd text"},[i("div",{staticClass:"text_title"}),this._v(" "),i("div",{staticClass:"text_num"})])}]};var C=e("C7Lr")(b,g,!1,function(t){e("DlZp")},"data-v-2d536cc0",null);i.default=C.exports}});