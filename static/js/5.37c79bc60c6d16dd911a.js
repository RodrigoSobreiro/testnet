webpackJsonp([5],{Lqyc:function(t,i){},a3Yh:function(t,i,e){"use strict";i.__esModule=!0;var a,s=e("liLe"),n=(a=s)&&a.__esModule?a:{default:a};i.default=function(t,i,e){return i in t?(0,n.default)(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}},aA3l:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e("IHPB"),s=e.n(a),n=e("3cXf"),l=e.n(n),o=e("a3Yh"),r=e.n(o),d=e("mzkE"),c=e("SXXC"),v=e.n(c),u=e("pLux"),_=e("zf2T");function m(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return 0==i?Object(_.a)(t):i>0?Object(_.a)(t).times(Object(_.a)("1"+"0".repeat(i))):Object(_.a)(t).div(Object(_.a)("1"+"0".repeat(-i)))}function h(t){return m(t,-18)}var p=void 0,f={name:"pool",data:function(){var t;return t={isLp:!0,isApprove:!0,isEnterMargin:!1,isConnect:!1,noNetwork:!0,isslp:!0,wallet:"0.0000",mytradingvolumecurrent:"--",walletSymbol:"",networkText:"",address:"",noNetworkText:"",withdrawLiuqidity:"",depositLiquidity:"",minAddLiquidity:"",claimenetwork:"",money:"",unclaimed:"--",mytradingpencentage:"--",settimeout:"-- h -- m -- s",my_liquidity:"--",liquidity_margin:"",liquidity_volume:"",total_liquidity:"--",PerLiquidityShare:"--",maxRemovableShares:"",pencentage:"--",maxBalance:"",balance:"",baseToken:"",shares:"",chainId:""},r()(t,"baseToken",""),r()(t,"account",""),r()(t,"address",""),r()(t,"agement",""),r()(t,"symbol",""),r()(t,"apy","--"),r()(t,"totaltradingvolumecurrent",""),r()(t,"claimed",""),r()(t,"unclaimed",""),r()(t,"myHarvestDeriLp",""),r()(t,"myHarvestDeriTrade",""),r()(t,"claimenetwork",""),r()(t,"address_pool",""),t},components:{footers:d.a},watch:{liquidity_margin:{handler:function(t,i){this.isEnterMargin=0!=t&&""!=t}},liquidity_volume:{handler:function(t,i){this.isEnterMargin=0!=t&&""!=t}}},mounted:function(){this.chainId=this.$route.params.chainId,this.baseToken=this.$route.params.baseToken,this.address_pool=this.$route.params.pooladdress,console.log(this.address_pool),"0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd"==this.address_pool?(this.slpConnectWallet(),this.isslp=!1):this.connectWallet()},methods:{reset:function(){this.getWalletBalance(this.agement),this.getSpecification(this.agement),this.getLiquidityInfo(this.agement),this.getUserWalletBalence(this.chainId,this.account),this.getPoolInfoApy(this.chainId,this.baseToken),this.liquidity_margin="",this.liquidity_volume=""},removeSlpLiquidity:function(){var t=this,i=v()("#removeslpbut"),e=this.liquidity_volume,a=+this.maxRemovableShares;this.address;if(e>a)alert("The input liquidity cannot exceed  "+a);else if(+e<=0||isNaN(e))alert("Invalid Liquidity!");else{var n=JSON.parse(l()(this.agement));n.push(e),this.disableButton(i),u.A.apply(void 0,s()(n)).then(function(e){e.success||alert("failure of transaction"),v()("#removeLiquidity").modal("hide"),t.enableButton(i),t.reset()})}},addSlpLiquidity:function(){var t=this,i=v()("#addslpbut"),e=this.liquidity_margin;if(console.log(this.maxBalance),+e>this.maxBalance)alert("not sufficient funds");else if(+e<=0||isNaN(e))alert("Please enter the correct format!");else{this.disableButton(i);var a=JSON.parse(l()(this.agement));a.push(e),u.c.apply(void 0,s()(a)).then(function(e){console.log(e),e.success||alert("failure of transaction"),v()("#addLiquidity").modal("hide"),t.enableButton(i),t.reset()})}},mintDToken:function(){var t=this,i=v()("#claimmyderi");0!=this.unclaimed?parseInt(Date.now()/1e3)%28800<1800?alert("Claiming DERI is disabled during first 30 minutes of each epoch"):(this.disableButton(i),console.log(),u.x.apply(void 0,s()(this.agement)).then(function(e){if(console.log(e),t.enableButton(i),e.success){t.unclaimed=0,clearInterval(p);var a=t;p=setInterval(function(){a.getUserInfoAll(a.account)},18e4)}else alert("Claim failed");t.reset()})):alert("Sorry,no DERI to claim yet")},tmintDToken:function(){var t=this,i=v()("#tradeclaimmyderi");0!=this.unclaimed?parseInt(Date.now()/1e3)%28800<1800?alert("Claiming DERI is disabled during first 30 minutes of each epoch"):(this.disableButton(i),u.x.apply(void 0,s()(this.agement)).then(function(e){if(t.enableButton(i),e.success){t.unclaimed=0,clearInterval(p);var a=t;p=setInterval(function(){a.getUserInfoAll(a.account)},18e4)}else alert("Claim failed");t.reset()})):alert("Sorry,no DERI to claim yet")},addLiquidity:function(){var t=this,i=v()("#addbut"),e=this.liquidity_margin;if(console.log(this.maxBalance),+e>this.maxBalance)alert("not sufficient funds");else if(+e<+this.minAddLiquidity)alert("The input liquidity shall not be less than "+this.minAddLiquidity);else if(+e<=0||isNaN(e))alert("Please enter the correct format!");else{this.disableButton(i);var a=JSON.parse(l()(this.agement));a.push(e),u.c.apply(void 0,s()(a)).then(function(e){console.log(e),e.success||alert("failure of transaction"),v()("#addLiquidity").modal("hide"),t.enableButton(i),t.reset()})}},removeLiquidity:function(){var t=this,i=v()("#removebut"),e=this.liquidity_volume,a=+this.maxRemovableShares,n=(this.address,a-e);if(n<1&&0!=n)alert('Leaving staking balance of smaller than 1 is not allowed. Please click "MAX" to remove all if you are to withdraw all of your liquidity.');else if(e>a)alert("The input liquidity cannot exceed  "+a);else if(+e<=0||isNaN(e))alert("Invalid Liquidity!");else{var o=JSON.parse(l()(this.agement));o.push(e),this.disableButton(i),u.z.apply(void 0,s()(o)).then(function(e){e.success||alert("failure of transaction"),v()("#removeLiquidity").modal("hide"),t.enableButton(i),t.reset()})}},getWalletSymbol:function(t){switch(t){case"1":this.walletSymbol="ETH",this.networkText="ETHEREUM";break;case"56":this.walletSymbol="BNB",this.networkText="BSC";break;case"128":this.walletSymbol="HT",this.networkText="HECO";break;case"3":this.walletSymbol="ETH",this.networkText="ROPSTEN";break;case"42":this.walletSymbol="ETH",this.networkText="KOVAN";break;case"97":this.walletSymbol="BNB",this.networkText="BSC TESTNET";break;case"256":this.walletSymbol="HT",this.networkText="HECO TESTNET";break;default:this.walletSymbol=""}},current:function(){var t=parseInt(Date.now()/1e3),i=28800*parseInt(t/28800)+28800-t,e=parseInt(i/3600),a=parseInt(i%3600/60),s=parseInt(i%60);this.settimeout=e+" h "+a+" m "+s+" s"},connectWallet:function(){var t=this;Object(u.e)().then(function(i){if(i.success){var e=ethereum.networkVersion;if(e!=t.chainId)return t.noNetwork=!1,void(t.noNetworkText="Unsupported Chain ID "+e+"!");t.account=i.account,t.address=i.account.slice(0,6)+"..."+i.account.slice(i.account.length-4,i.account.length),t.isConnect=!0,t.agement=[t.chainId,t.baseToken,t.account];var a=t;setInterval(function(){a.current()},1e3),t.isUnlocked(t.agement),t.getWalletBalance(t.agement),t.getSpecification(t.agement),t.getLiquidityInfo(t.agement),t.getUserWalletBalence(t.chainId,t.account),t.getPoolInfoApy(t.chainId,t.baseToken),t.getUserInfoAll(t.account),sessionStorage.setItem("chainId",t.chainId),sessionStorage.setItem("baseToken",t.baseToken),p=setInterval(function(){a.getUserInfoAll(a.account)},18e4)}})},slpConnectWallet:function(){var t=this;Object(u.e)().then(function(i){if(i.success){var e=ethereum.networkVersion;if(e!=t.chainId)return t.noNetwork=!1,void(t.noNetworkText="Unsupported Chain ID "+e+"!");t.account=i.account,t.address=i.account.slice(0,6)+"..."+i.account.slice(i.account.length-4,i.account.length),t.isConnect=!0,t.agement=[t.chainId,t.address_pool,t.account];var a=t;setInterval(function(){a.current()},1e3),t.getSlpLiquidityInfo(t.agement),t.getUserWalletBalence(t.chainId,t.account),t.getSlpPoolInfoApy(t.chainId,t.address_pool),t.getUserInfoAll(t.account),sessionStorage.setItem("chainId",t.chainId),p=setInterval(function(){a.getUserInfoAll(a.account)},18e4)}})},getSlpPoolInfoApy:function(){var t=this;Object(u.q)("1","0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd").then(function(i){var e=.22008070161007/t.total_liquidity;e=(100*e).toFixed(2)+"%";var a=h(i.apy);a="0"==a?"--":(100*a).toFixed(2)+"%",t.apy=a+" + "+e})},getSlpLiquidityInfo:function(t){var i=this;u.p.apply(void 0,s()(t)).then(function(t){console.log(t),i.maxRemovableShares=t.shares;var e=+t.liquidity;i.stotal=e,i.my_liquidity=t.shares,i.total_liquidity=e,i.PerLiquidityShare=1,i.PerLiquidityShare=i.PerLiquidityShare.toFixed(6),i.money=t.shares*i.PerLiquidityShare,i.symbol="DERI-USDT SLP",i.pencentage=t.shares/t.liquidity*100,isNaN(i.pencentage)?i.pencentage="0%":"0"==t.shares?i.pencentage="0%":i.pencentage=i.pencentage.toFixed(2)+"%"})},getLiquidityInfo:function(t){var i=this;u.l.apply(void 0,s()(t)).then(function(t){console.log(t),i.maxRemovableShares=t.shares;var e=+t.poolLiquidity;if(i.stotal=e,i.my_liquidity=t.shares,i.total_liquidity=e,"NaN"==t.shareValue)i.PerLiquidityShare="--";else{var a=+t.shareValue;i.PerLiquidityShare=a.toFixed(6),i.money=t.shares*i.PerLiquidityShare}i.pencentage=t.shares*t.shareValue/t.poolLiquidity*100,isNaN(i.pencentage)?i.pencentage="0%":"0"==t.shares?i.pencentage="0%":i.pencentage=i.pencentage.toFixed(2)+"%"})},getUserInfoInPool:function(t){var i=this;u.t.apply(void 0,s()(t)).then(function(t){i.mytradingvolumecurrent=h(t.volume1h)})},getWalletBalance:function(t){var i=this;u.v.apply(void 0,s()(t)).then(function(t){console.log("balance",t),i.maxBalance=t,i.balance=(+t).toFixed(2)})},getSpecification:function(t){var i=this;u.r.apply(void 0,s()(t)).then(function(t){console.log(t),i.minAddLiquidity=t.minAddLiquidity,i.symbol=t.bSymbol})},getUserWalletBalence:function(t,i){var e=this;console.log(t),Object(u.u)(t,i).then(function(i){e.wallet=(+i).toFixed(4),e.getWalletSymbol(t)})},isUnlocked:function(t){var i=this;u.w.apply(void 0,s()(t)).then(function(t){t?(v()("input").attr("disabled",!1),i.isApprove=!0):(v()("input").attr("disabled",!0),i.isApprove=!1)})},unlock:function(){var t=this,i=v()("#Unlock");this.disableButton(i);var e=this.agement;u.C.apply(void 0,s()(e)).then(function(a){t.enableButton(i),t.isUnlocked.apply(t,s()(e))})},getPoolInfoApy:function(t,i){var e=this;Object(u.n)(t,i).then(function(t){var i=h(t.apy);e.totaltradingvolumecurrent=h(t.volume1h),e.apy="0"==i?"--":(100*i).toFixed(2)+"%"})},getUserInfoAll:function(t){var i=this;Object(u.s)(t).then(function(t){i.claimed=h(t.total).toFixed(2),console.log(t),t.valid?i.unclaimed=(+t.amount).toFixed(2):i.unclaimed=0,console.log(h(m(t.trade)).toString()),i.myHarvestDeriLp=(+h(m(t.lp))).toFixed(2),i.myHarvestDeriTrade=(+h(t.trade)).toFixed(2),i.getClaimeNetwork(t.chainId)})},getClaimeNetwork:function(t){switch(t){case"1":this.claimenetwork="ETHEREUM";break;case"56":this.claimenetwork="BSC";break;case"128":this.claimenetwork="HECO";break;case"3":this.claimenetwork="ROPSTEN";break;case"42":this.claimenetwork="KOVAN";break;case"97":this.claimenetwork="BSC TESTNET";break;case"256":this.claimenetwork="HECO TESTNET";break;default:this.claimenetwork=""}},disableButton:function(t){t.find("span.spinner").show(),t.attr("disabled",!0)},enableButton:function(t){t.find("span.spinner").hide(),t.attr("disabled",!1)}}},y={render:function(){var t=this,i=this,e=i.$createElement,a=i._self._c||e;return a("div",{attrs:{id:"pool"}},[a("div",{staticClass:"modal fade",attrs:{id:"addLiquidity",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[i._m(0),i._v(" "),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"margin_box_info"},[a("div",[i._v("Wallet Balance")]),i._v(" "),a("div",{staticClass:"money"},[a("span",[a("span",{staticClass:"bt_balance"},[i._v(i._s(i.balance))]),i._v(" "),a("br"),i._v(i._s(i.baseToken))]),i._v(" "),a("span",{staticClass:"add"})]),i._v(" "),a("div",{staticClass:"enter_margin"},[a("div",{staticClass:"input_margin"},[a("div",{staticClass:"box"},[a("div",{directives:[{name:"show",rawName:"v-show",value:i.isEnterMargin,expression:"isEnterMargin"}],staticClass:"amount"},[i._v("LIQUIDITY VOLUME")]),i._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:i.liquidity_margin,expression:"liquidity_margin"}],staticClass:"margin_value",attrs:{type:"number",placeholder:"LIQUIDITY VOLUME"},domProps:{value:i.liquidity_margin},on:{input:function(t){t.target.composing||(i.liquidity_margin=t.target.value)}}})])]),i._v(" "),a("div",[i._v(i._s(i.baseToken))])]),i._v(" "),a("div",{staticClass:"add_margin_btn"},[i.isslp?a("button",{staticClass:"margin_btn",attrs:{id:"addbut"},on:{click:i.addLiquidity}},[a("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),i._v("\n              DEPOSIT\n            ")]):a("button",{staticClass:"margin_btn",attrs:{id:"addslpbut"},on:{click:i.addSlpLiquidity}},[a("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),i._v("\n              DEPOSIT\n            ")])])])])])])]),i._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"removeLiquidity",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[i._m(1),i._v(" "),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"margin_box_info"},[a("div",[i._v("Shares Available")]),i._v(" "),a("div",{staticClass:"money"},[a("span",[a("span",{staticClass:"bt_balance"},[i._v(i._s(i.my_liquidity))])]),i._v(" "),a("span",{staticClass:"remove"})]),i._v(" "),a("div",{staticClass:"enter_margin"},[a("div",{staticClass:"input_margin"},[a("div",{staticClass:"box"},[a("div",{directives:[{name:"show",rawName:"v-show",value:i.isEnterMargin,expression:"isEnterMargin"}],staticClass:"amount"},[i._v("LIQUIDITY VOLUME")]),i._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:i.liquidity_volume,expression:"liquidity_volume"}],staticClass:"margin_value",attrs:{type:"number",placeholder:"LIQUIDITY VOLUME"},domProps:{value:i.liquidity_volume},on:{input:function(t){t.target.composing||(i.liquidity_volume=t.target.value)}}})])]),i._v(" "),a("div",[i._v(i._s(i.baseToken))])]),i._v(" "),a("div",{staticClass:"add_margin_btn"},[i.isslp?a("button",{staticClass:"margin_btn",attrs:{id:"removebut"},on:{click:i.removeLiquidity}},[a("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),i._v("\n              WITHDRAW\n            ")]):a("button",{staticClass:"margin_btn",attrs:{id:"removeslpbut"},on:{click:i.removeSlpLiquidity}},[a("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),i._v("\n              WITHDRAW\n            ")])])])])])])]),i._v(" "),a("div",{staticClass:"nav"},[a("div",{staticClass:"nav_mean"},[i._m(2),i._v(" "),a("div",{staticClass:"mean"},[a("ul",[i._m(3),i._v(" "),a("li",[a("router-link",{attrs:{to:"/mining"}},[i._v("Mining")])],1),i._v(" "),a("li",[a("router-link",{attrs:{to:"/lite"}},[i._v("\n                Trade\n              ")])],1),i._v(" "),i._m(4),i._v(" "),i._m(5),i._v(" "),i._m(6)])])]),i._v(" "),a("div",{staticClass:"connect"},[a("div",{staticClass:"network_text_logo"},[a("i",{class:i.walletSymbol}),i._v(" "),a("span",{staticClass:"logo_text"},[i._v(i._s(i.networkText))])]),i._v(" "),i.noNetwork?a("div",[i.isConnect?a("button",{staticClass:"nav_btn"},[i._v("\n            "+i._s(i.wallet)+" "+i._s(i.walletSymbol)+" "),a("span",{staticClass:"address"},[i._v(i._s(i.address))]),i._v(" "),a("i",{class:i.walletSymbol})]):a("button",{staticClass:"nav_btn connect_btn"},[i._v("\n            Connect to wallet\n          ")])]):a("div",[a("button",{staticClass:"nav_btn noNetwork"},[i._v("\n            "+i._s(i.noNetworkText)+"\n          ")])])])]),i._v(" "),a("div",{staticClass:"middle"},[a("div",{staticClass:"mining_info"},[a("div",{staticClass:"pool_header"},[a("div",{staticClass:"pool_network"},[i._v("\n              POOL @ "+i._s(i.networkText)+"\n          ")]),i._v(" "),a("div",{staticClass:"check_trade_liquidity"},[a("div",{staticClass:"liquidity_mining",class:i.isLp?"action":"",on:{click:function(){t.isLp=!0}}},[i._v("\n                  LIUQIDITY MINING\n              ")]),i._v(" "),a("div",{staticClass:"trade_mining",class:i.isLp?"":"action",on:{click:function(){t.isLp=!1}}},[i._v("\n                  TRADING MINING\n              ")])])]),i._v(" "),a("div",{staticClass:"pool_info"},[a("div",{directives:[{name:"show",rawName:"v-show",value:i.isLp,expression:"isLp"}],staticClass:"liquidity_info"},[a("div",{staticClass:"claim_box"},[a("div",{staticClass:"odd title"},[i._v("My Liquidity-Providing Harvest in Current Epoch")]),i._v(" "),a("div",{staticClass:"odd text"},[a("div",{staticClass:"text_title"},[i._v("Current Epoch Remaining Time")]),i._v(" "),a("div",{staticClass:"text_num"},[i._v(i._s(i.settimeout))])]),i._v(" "),a("div",{staticClass:"odd text"},[a("div",{staticClass:"text_title"},[i._v("My Harvest in Current Epoch (estimated)")]),i._v(" "),a("div",{staticClass:"text_num"},[i._v(i._s(i.myHarvestDeriLp)+" DERI")])]),i._v(" "),a("div",{staticClass:"odd text"},[a("div",{staticClass:"text_title"},[i._v("Claimed DERI")]),i._v(" "),a("div",{staticClass:"text_num"},[i._v(i._s(i.claimed))])]),i._v(" "),i._m(7),i._v(" "),a("div",{staticClass:"odd text"},[a("div",{staticClass:"text_title"},[i._v("Unclaimed DERI")]),i._v(" "),a("div",{staticClass:"text_num"},[i._v(i._s(i.unclaimed))])]),i._v(" "),a("div",{staticClass:"odd claim_network"},[a("div",{staticClass:"text_title"},[i._v("Your DERI is on "+i._s(i.claimenetwork)+" . Connect to "+i._s(i.claimenetwork)+" to claim.")])]),i._v(" "),a("div",{staticClass:"claim_btn"},[a("button",{staticClass:"claim",attrs:{id:"claimmyderi"},on:{click:i.mintDToken}},[a("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),i._v("\n                          CLAIM\n                      ")])])]),i._v(" "),a("div",{staticClass:"liquidity_box"},[a("div",{staticClass:"odd title"},[i._v("Provide "+i._s(i.symbol)+" Earn DERI")]),i._v(" "),a("div",{staticClass:"odd text"},[a("div",{staticClass:"text_title"},[i._v("Pool Total Liquidity")]),i._v(" "),a("div",{staticClass:"text_num"},[i._v(" "+i._s(i.total_liquidity)+" "+i._s(i.symbol))])]),i._v(" "),a("div",{staticClass:"odd text"},[a("div",{staticClass:"text_title"},[i._v("APY")]),i._v(" "),a("div",{staticClass:"text_num"},[i._v(i._s(i.apy))])]),i._v(" "),a("div",{staticClass:"odd text"},[a("div",{staticClass:"text_title"},[i._v("Liquidity Share Value")]),i._v(" "),a("div",{staticClass:"text_num"},[i._v(i._s(i.PerLiquidityShare)+" "+i._s(i.symbol))])]),i._v(" "),a("div",{staticClass:"odd text"},[a("div",{staticClass:"text_title"},[i._v("My Liquidity Pencentage")]),i._v(" "),a("div",{staticClass:"text_num"},[i._v(i._s(i.pencentage))])]),i._v(" "),a("div",{staticClass:"odd text"},[a("div",{staticClass:"text_title"},[i._v("Staked Balance(Shares)")]),i._v(" "),a("div",{staticClass:"text_num"},[i._v(i._s(i.my_liquidity))])]),i._v(" "),a("div",{staticClass:"odd claim_network"},[a("div",{staticClass:"text_title money"},[i._v(i._s(i.money)+" "+i._s(i.symbol))])]),i._v(" "),a("div",{staticClass:"liquidity_btn"},[i.isApprove?a("div",{staticClass:"add_remove_liquidity"},[a("button",{staticClass:"add_liquidity",attrs:{"data-toggle":"modal","data-target":"#addLiquidity"}},[i._v("\n                              ADD LIQUIDITY\n                          ")]),i._v(" "),a("button",{staticClass:"remove_liquidity",attrs:{"data-toggle":"modal","data-target":"#removeLiquidity"}},[i._v("\n                              REMOVE LIQUIDITY\n                          ")])]):a("div",{staticClass:"approve"},[a("button",{staticClass:"approve_btn",attrs:{id:"Unlock"},on:{click:i.unlock}},[a("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),i._v("\n                              APPROVE\n                          ")])])])])]),i._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!i.isLp,expression:"!isLp"}],staticClass:"trade_info"},[a("div",{staticClass:"claim_box"},[a("div",{staticClass:"odd title"},[i._v("My Trading Harvest in Current Epoch")]),i._v(" "),a("div",{staticClass:"odd text"},[a("div",{staticClass:"text_title"},[i._v("My Trading Harvest in Current Epoch (Est)")]),i._v(" "),a("div",{staticClass:"text_num"},[i._v(i._s(i.myHarvestDeriTrade)+" DERI")])]),i._v(" "),a("div",{staticClass:"odd text"},[a("div",{staticClass:"text_title"},[i._v("Claimed DERI")]),i._v(" "),a("div",{staticClass:"text_num"},[i._v(i._s(i.claimed))])]),i._v(" "),i._m(8),i._v(" "),i._m(9),i._v(" "),a("div",{staticClass:"odd text"},[a("div",{staticClass:"text_title"},[i._v("Unclaimed DERI")]),i._v(" "),a("div",{staticClass:"text_num"},[i._v(i._s(i.unclaimed))])]),i._v(" "),i._m(10),i._v(" "),a("div",{staticClass:"claim_btn"},[a("button",{staticClass:"claim",attrs:{id:"tradeclaimmyderi"},on:{click:i.tmintDToken}},[a("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),i._v("\n                          CLAIM\n                      ")])])]),i._v(" "),a("div",{staticClass:"liquidity_box"},[a("div",{staticClass:"odd title"},[i._v("Trade to Earn DERI")]),i._v(" "),a("div",{staticClass:"odd text"},[a("div",{staticClass:"text_title"},[i._v("Total Trading Volume in Current Hour")]),i._v(" "),a("div",{staticClass:"text_num"},[i._v(i._s(i.totaltradingvolumecurrent))])]),i._v(" "),a("div",{staticClass:"odd text"},[a("div",{staticClass:"text_title"},[i._v("My Trading Volume in Current Hour")]),i._v(" "),a("div",{staticClass:"text_num"},[i._v(i._s(i.mytradingvolumecurrent))])]),i._v(" "),i._m(11),i._v(" "),i._m(12),i._v(" "),i._m(13),i._v(" "),i._m(14)])])])])]),i._v(" "),a("div",{staticClass:"footer"},[a("footers")],1)])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"modal-header"},[i("div",{staticClass:"title"},[this._v("\n          DEPOSIT LIQUIDITY\n        ")]),this._v(" "),i("div",{staticClass:"close",attrs:{"data-dismiss":"modal"}},[i("span",[this._v("×")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"modal-header"},[i("div",{staticClass:"title"},[this._v("\n          WITHDRAW LIQUIDITY\n        ")]),this._v(" "),i("div",{staticClass:"close",attrs:{"data-dismiss":"modal"}},[i("span",[this._v("×")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"logo"},[i("img",{attrs:{src:e("AqYs"),alt:""}}),this._v(" "),i("img",{staticStyle:{width:"85px"},attrs:{src:e("7dpQ"),alt:""}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("li",[i("a",{attrs:{href:"http://deri.finance",target:"_blank"}},[this._v("Home")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("li",[i("a",{attrs:{target:"_blank",href:"https://governance.deri.finance/"}},[this._v("Governance")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("li",[i("a",{attrs:{target:"_blank",href:"https://bridge.deri.finance/"}},[this._v("Bridge")])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("li",{staticClass:"ref"},[e("a",{attrs:{href:"https://docs.deri.finance/"}},[t._v("Docs")]),t._v(" "),e("ul",{staticClass:"ref_box"},[e("li",[e("a",{attrs:{href:"https://github.com/deri-finance/whitepaper/blob/master/deri_whitepaper.pdf"}},[t._v("Whitepaper")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/peckshield/publications/blob/master/audit_reports/PeckShield-Audit-Report-Deri-v1.0.pdf"}},[t._v("Code Audit")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://docs.deri.finance/faq"}},[t._v("FAQ")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://docs.deri.finance/"}},[t._v("Guide")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/deri-finance/"}},[t._v("Github")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://deri.finance/setallowance.html"}},[t._v("Tools")])])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"odd text"},[i("div",{staticClass:"text_title"}),this._v(" "),i("div",{staticClass:"text_num"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"odd text"},[i("div",{staticClass:"text_title"}),this._v(" "),i("div",{staticClass:"text_num"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"odd text"},[i("div",{staticClass:"text_title"}),this._v(" "),i("div",{staticClass:"text_num"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"odd claim_network"},[i("div",{staticClass:"text_title"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"odd text"},[i("div",{staticClass:"text_title"}),this._v(" "),i("div",{staticClass:"text_num"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"odd text"},[i("div",{staticClass:"text_title"}),this._v(" "),i("div",{staticClass:"text_num"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"odd text"},[i("div",{staticClass:"text_title"}),this._v(" "),i("div",{staticClass:"text_num"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"odd claim_network"},[i("div",{staticClass:"text_title "})])}]};var C=e("C7Lr")(f,y,!1,function(t){e("Lqyc")},"data-v-440f4340",null);i.default=C.exports}});