(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[21],{678:function(e,t,i){},679:function(e,t,i){},680:function(e,t,i){},749:function(e,t,i){"use strict";i.r(t);var n=i(2),s=i(606),o=function(){return(o=Object.assign||function(e){for(var t,i=arguments,n=1,s=arguments.length;n<s;n++)for(var o in t=i[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function a(e,t){var i=o({},e);for(var n in t)"object"!=typeof e[n]||null===e[n]||Array.isArray(e[n])?void 0!==t[n]&&(i[n]=t[n]):i[n]=a(e[n],t[n]);return i}var r={mobile:{disabled_features:["left_toolbar","header_widget","timeframes_toolbar","edit_buttons_in_legend","context_menus","control_bar","border_around_the_chart"],enabled_features:[]}},c={width:800,height:500,interval:"1D",timezone:"Etc/UTC",container_id:"",library_path:"",locale:"en",widgetbar:{details:!1,watchlist:!1,watchlist_settings:{default_symbols:[]}},overrides:{"mainSeriesProperties.showCountdown":!1},studies_overrides:{},trading_customization:{position:{},order:{}},brokerConfig:{configFlags:{}},fullscreen:!1,autosize:!1,disabled_features:[],enabled_features:[],debug:!1,logo:{},time_frames:[{text:"5y",resolution:"1W"},{text:"1y",resolution:"1W"},{text:"6m",resolution:"120"},{text:"3m",resolution:"60"},{text:"1m",resolution:"30"},{text:"5d",resolution:"5"},{text:"1d",resolution:"1"}],client_id:"0",user_id:"0",charts_storage_api_version:"1.0",favorites:{intervals:[],chartTypes:[]}};var l=function(){function e(e){if(this._id="tradingview_"+(1048576*(1+Math.random())|0).toString(16).substring(1),this._ready=!1,this._readyHandlers=[],this._onWindowResize=this._autoResizeChart.bind(this),!e.datafeed)throw new Error("Datafeed is not defined");if(this._options=a(c,e),e.preset){var t=r[e.preset];t?(void 0!==this._options.disabled_features?this._options.disabled_features=this._options.disabled_features.concat(t.disabled_features):this._options.disabled_features=t.disabled_features,void 0!==this._options.enabled_features?this._options.enabled_features=this._options.enabled_features.concat(t.enabled_features):this._options.enabled_features=t.enabled_features):console.warn("Unknown preset: `"+e.preset+"`")}"Dark"===this._options.theme&&void 0===this._options.loading_screen&&(this._options.loading_screen={backgroundColor:"#131722"}),this._create()}return e.prototype.onChartReady=function(e){this._ready?e.call(this):this._readyHandlers.push(e)},e.prototype.headerReady=function(){var e=this;return this._innerWindowLoaded.then((function(){return e._innerWindow().headerReady()}))},e.prototype.onGrayedObjectClicked=function(e){this._innerAPI().onGrayedObjectClicked(e)},e.prototype.onShortcut=function(e,t){this._innerWindow().createShortcutAction(e,t)},e.prototype.subscribe=function(e,t){this._innerAPI().subscribe(e,t)},e.prototype.unsubscribe=function(e,t){this._innerAPI().unsubscribe(e,t)},e.prototype.chart=function(e){return this._innerAPI().chart(e)},e.prototype.getLanguage=function(){return this._options.locale},e.prototype.setSymbol=function(e,t,i){this._innerAPI().changeSymbol(e,t,i)},e.prototype.remove=function(){window.removeEventListener("resize",this._onWindowResize),this._readyHandlers.splice(0,this._readyHandlers.length),delete window[this._id],this._iFrame.parentNode&&this._iFrame.parentNode.removeChild(this._iFrame)},e.prototype.closePopupsAndDialogs=function(){this._innerAPI().closePopupsAndDialogs()},e.prototype.selectLineTool=function(e){this._innerAPI().selectLineTool(e)},e.prototype.selectedLineTool=function(){return this._innerAPI().selectedLineTool()},e.prototype.save=function(e){this._innerAPI().saveChart(e)},e.prototype.load=function(e,t){this._innerAPI().loadChart({json:e,extendedData:t})},e.prototype.getSavedCharts=function(e){this._innerAPI().getSavedCharts(e)},e.prototype.loadChartFromServer=function(e){this._innerAPI().loadChartFromServer(e)},e.prototype.saveChartToServer=function(e,t,i){this._innerAPI().saveChartToServer(e,t,i)},e.prototype.removeChartFromServer=function(e,t){this._innerAPI().removeChartFromServer(e,t)},e.prototype.onContextMenu=function(e){this._innerAPI().onContextMenu(e)},e.prototype.createButton=function(e){return this._innerWindow().createButton(e)},e.prototype.showNoticeDialog=function(e){this._innerAPI().showNoticeDialog(e)},e.prototype.showConfirmDialog=function(e){this._innerAPI().showConfirmDialog(e)},e.prototype.showLoadChartDialog=function(){this._innerAPI().showLoadChartDialog()},e.prototype.showSaveAsChartDialog=function(){this._innerAPI().showSaveAsChartDialog()},e.prototype.symbolInterval=function(){return this._innerAPI().getSymbolInterval()},e.prototype.mainSeriesPriceFormatter=function(){return this._innerAPI().mainSeriesPriceFormatter()},e.prototype.getIntervals=function(){return this._innerAPI().getIntervals()},e.prototype.getStudiesList=function(){return this._innerAPI().getStudiesList()},e.prototype.addCustomCSSFile=function(e){this._innerWindow().addCustomCSSFile(e)},e.prototype.applyOverrides=function(e){this._options=a(this._options,{overrides:e}),this._innerWindow().applyOverrides(e)},e.prototype.applyStudiesOverrides=function(e){this._innerWindow().applyStudiesOverrides(e)},e.prototype.watchList=function(){return this._innerAPI().watchlist()},e.prototype.activeChart=function(){return this._innerAPI().activeChart()},e.prototype.chartsCount=function(){return this._innerAPI().chartsCount()},e.prototype.layout=function(){return this._innerAPI().layout()},e.prototype.setLayout=function(e){this._innerAPI().setLayout(e)},e.prototype.layoutName=function(){return this._innerAPI().layoutName()},e.prototype.changeTheme=function(e,t){this._innerWindow().changeTheme(e,t)},e.prototype.getTheme=function(){return this._innerWindow().getTheme()},e.prototype.takeScreenshot=function(){this._innerAPI().takeScreenshot()},e.prototype.lockAllDrawingTools=function(){return this._innerAPI().lockAllDrawingTools()},e.prototype.hideAllDrawingTools=function(){return this._innerAPI().hideAllDrawingTools()},e.prototype.drawOnAllCharts=function(e){this._innerAPI().drawOnAllCharts(e)},e.prototype.magnetEnabled=function(){return this._innerAPI().magnetEnabled()},e.prototype.magnetMode=function(){return this._innerAPI().magnetMode()},e.prototype.undoRedoState=function(){return this._innerAPI().undoRedoState()},e.prototype.setIntervalLinkingEnabled=function(e){this._innerAPI().setIntervalLinkingEnabled(e)},e.prototype.setTimeFrame=function(e){this._innerAPI().setTimeFrame(e)},e.prototype.symbolSync=function(){return this._innerAPI().symbolSync()},e.prototype.intervalSync=function(){return this._innerAPI().intervalSync()},e.prototype.crosshairSync=function(){return this._innerAPI().crosshairSync()},e.prototype.timeSync=function(){return this._innerAPI().timeSync()},e.prototype.getAllFeatures=function(){return this._innerWindow().getAllFeatures()},e.prototype.clearUndoHistory=function(){return this._innerAPI().clearUndoHistory()},e.prototype.undo=function(){return this._innerAPI().undo()},e.prototype.redo=function(){return this._innerAPI().redo()},e.prototype.startFullscreen=function(){this._innerAPI().startFullscreen()},e.prototype.exitFullscreen=function(){this._innerAPI().exitFullscreen()},e.prototype.takeClientScreenshot=function(e){return this._innerAPI().takeClientScreenshot(e)},e.prototype._innerAPI=function(){return this._innerWindow().tradingViewApi},e.prototype._innerWindow=function(){return this._iFrame.contentWindow},e.prototype._autoResizeChart=function(){this._options.fullscreen&&(this._iFrame.style.height=window.innerHeight+"px")},e.prototype._create=function(){var e=this,t=this._render(),i=document.getElementById(this._options.container_id);if(null===i)throw new Error("There is no such element - #"+this._options.container_id);i.innerHTML=t,this._iFrame=i.querySelector("#"+this._id);var n=this._iFrame;(this._options.autosize||this._options.fullscreen)&&(n.style.width="100%",this._options.fullscreen||(n.style.height="100%")),window.addEventListener("resize",this._onWindowResize),this._onWindowResize(),this._innerWindowLoaded=new Promise((function(e){n.addEventListener("load",(function t(){n.removeEventListener("load",t,!1),e()}),!1)})),this._innerWindowLoaded.then((function(){e._innerWindow().widgetReady((function(){e._ready=!0;for(var t=0,i=e._readyHandlers;t<i.length;t++){var n=i[t];try{n.call(e)}catch(s){console.error(s)}}e._innerWindow().initializationFinished()}))}))},e.prototype._render=function(){var e=window;if(e[this._id]={datafeed:this._options.datafeed,customFormatters:this._options.custom_formatters||this._options.customFormatters,brokerFactory:this._options.broker_factory||this._options.brokerFactory,overrides:this._options.overrides,studiesOverrides:this._options.studies_overrides,tradingCustomization:this._options.trading_customization,disabledFeatures:this._options.disabled_features,enabledFeatures:this._options.enabled_features,brokerConfig:this._options.broker_config||this._options.brokerConfig,restConfig:this._options.restConfig,favorites:this._options.favorites,logo:this._options.logo,numeric_formatting:this._options.numeric_formatting,rss_news_feed:this._options.rss_news_feed,newsProvider:this._options.news_provider,loadLastChart:this._options.load_last_chart,saveLoadAdapter:this._options.save_load_adapter,loading_screen:this._options.loading_screen,settingsAdapter:this._options.settings_adapter,getCustomIndicators:this._options.custom_indicators_getter},this._options.saved_data)e[this._id].chartContent={json:this._options.saved_data},this._options.saved_data_meta_info&&(e[this._id].chartContentExtendedData=this._options.saved_data_meta_info);else if(!this._options.load_last_chart&&!this._options.symbol)throw new Error("Symbol is not defined: either 'symbol' or 'load_last_chart' option must be set");var t=(this._options.library_path||"")+(encodeURIComponent(this._options.locale)+"-tv-chart.b555c6a4.html#symbol=")+encodeURIComponent(this._options.symbol||"")+"&interval="+encodeURIComponent(this._options.interval)+(this._options.timeframe?"&timeframe="+encodeURIComponent(this._options.timeframe):"")+(this._options.toolbar_bg?"&toolbarbg="+encodeURIComponent(this._options.toolbar_bg.replace("#","")):"")+(this._options.studies_access?"&studiesAccess="+encodeURIComponent(JSON.stringify(this._options.studies_access)):"")+"&widgetbar="+encodeURIComponent(JSON.stringify(this._options.widgetbar))+(this._options.drawings_access?"&drawingsAccess="+encodeURIComponent(JSON.stringify(this._options.drawings_access)):"")+"&timeFrames="+encodeURIComponent(JSON.stringify(this._options.time_frames))+"&locale="+encodeURIComponent(this._options.locale)+"&uid="+encodeURIComponent(this._id)+"&clientId="+encodeURIComponent(String(this._options.client_id))+"&userId="+encodeURIComponent(String(this._options.user_id))+(this._options.charts_storage_url?"&chartsStorageUrl="+encodeURIComponent(this._options.charts_storage_url):"")+(this._options.charts_storage_api_version?"&chartsStorageVer="+encodeURIComponent(this._options.charts_storage_api_version):"")+(this._options.custom_css_url?"&customCSS="+encodeURIComponent(this._options.custom_css_url):"")+(this._options.auto_save_delay?"&autoSaveDelay="+encodeURIComponent(String(this._options.auto_save_delay)):"")+"&debug="+encodeURIComponent(String(this._options.debug))+(this._options.snapshot_url?"&snapshotUrl="+encodeURIComponent(this._options.snapshot_url):"")+(this._options.timezone?"&timezone="+encodeURIComponent(this._options.timezone):"")+(this._options.study_count_limit?"&studyCountLimit="+encodeURIComponent(String(this._options.study_count_limit)):"")+(this._options.symbol_search_request_delay?"&ssreqdelay="+encodeURIComponent(String(this._options.symbol_search_request_delay)):"")+(this._options.compare_symbols?"&compareSymbols="+encodeURIComponent(JSON.stringify(this._options.compare_symbols)):"")+(this._options.theme?"&theme="+encodeURIComponent(String(this._options.theme)):"");return'<iframe id="'+this._id+'" name="'+this._id+'"  src="'+t+'"'+(this._options.autosize||this._options.fullscreen?"":' width="'+this._options.width+'" height="'+this._options.height+'"')+' frameborder="0" allowTransparency="true" scrolling="no" allowfullscreen style="display:block;"></iframe>'},e}();window.TradingView=window.TradingView||{},window.TradingView.version=function(){return"CL v18.043 (internal id b555c6a4 @ 2021-02-18T09:41:15.150Z)"};var d=i(102),h=i(34);const u={};let p=null;const b=Object(d.io)("wss://oracle2.deri.finance",{transports:["websocket"],withCredentials:!0});var m,j,_=[],v=null;window.sub_index=0;function g(e){return Object(h.g)(e.name)}var f=function(e,t,i,n,s,o){let a,r=g(e);switch(r=r.toUpperCase(),m=s,n,j=o,!0){case"1"==t:a="min";break;case"5"==t:a="5min";break;case"15"==t:a="15min";break;case"30"==t:a="30min";break;case"60"==t:a="hour";break;case"1D"==t:a="day";break;case"1W"==t:a="week";break;default:a="min"}b.emit("un_get_kline",v),v={symbol:r,time_type:a,from:i,to:n},b.emit("get_kline",v)},y=function(e,t,i,n,s){let o,a=g(e);switch(!0){case"1"==t:o="min";break;case"5"==t:o="5min";break;case"15"==t:o="15min";break;case"30"==t:o="30min";break;case"60"==t:o="hour";break;case"1D"==t:o="day";break;case"1W"==t:o="week";break;default:o="min"}v={symbol:a,time_type:o,updated:!0},p=i},O=function(e){};b.on("connect",(e=>{v&&v.updated&&b.emit("get_kline_update",v),console.log("socket,connect")})),b.on("kline_update",(e=>{let t={},i=e.time;e.time_type===v.time_type&&e.symbol.toUpperCase()===v.symbol.toUpperCase()&&(t.time=i,t.low=Number(e.low),t.high=Number(e.high),t.open=Number(e.open),t.close=Number(e.close),t.volume=Number(e.volume),p&&p(t))})),b.on("kline_history",(e=>{let t=v.symbol;if(_=e.map((e=>(t=e.symbol,{time:e.time,low:Number(e.low),high:Number(e.high),open:Number(e.open),close:Number(e.close),volume:Number(e.volume)}))),m){var i=_[_.length-1];u[v.symbol]={lastBar:i}}_.length;if(v.symbol.toUpperCase()===t.toUpperCase()){const e={noData:!(_.length>0)};j(_,e)}}));var x={supported_resolutions:["1","5","15","30","60","240","1D","5D","1W","1M"]},w={onReady:function(e){setTimeout((function(){return e(x)}),0)},bars:{},searchSymbols:function(e,t,i,n){},resolveSymbol:function(e,t,i){var n={name:e,pricescale:100,ticker:e,description:"",minmov:1,type:"crypto",has_intraday:!0,intraday_multipliers:["1","2","5","15","30","60","240","1D","7D","1W","1M"],has_weekly_and_monthly:!0,data_status:"streaming",has_no_volume:!0,pro_name:e,has_daily:!0,timezone:"UTC",session:"24x7"};setTimeout((function(){t(n)}),0)},getBars:function(e,t,i,n,s,o,a){i>0&&n>0&&f(e,t,i,n,a,s,o)},subscribeBars:function(e,t,i,n,s){y(e,t,i,n,s)},unsubscribeBars:function(e){O(e)},calculateHistoryDepth:function(e,t,i){},getMarks:function(e,t,i,n,s){},getTimeScaleMarks:function(e,t,i,n,s){},getServerTime:function(e){}},N=i(608),A=i.n(N),I=i(45),S=i(17),C="tv_chart_container";var M=Object(I.b)("intl","trading")(Object(I.c)((function(e){var t=e.symbol,i=e.lang,o=e.intl,a=e.version,r=Object(n.useState)(!0),c=Object(s.a)(r,2),d=c[0],h=c[1],u=Object(n.useState)("one"),p=Object(s.a)(u,2),b=p[0],m=p[1],j=Object(n.useState)(null),_=Object(s.a)(j,2),v=_[0],g=_[1],f=Object(n.useState)("1"),y=Object(s.a)(f,2),O=y[0],x=y[1],N=A()("btn",b),I=function(e,t){m(t),x(e),v.activeChart().setResolution(e,(function(){v.chart().refreshMarks()}))};return Object(n.useEffect)((function(){return t&&g(function(){var e={symbol:t,datafeed:w,interval:O,container_id:C,library_path:"/charting_library/",custom_css_url:"/style/tradingview-overide.css",locale:o.locale,disabled_features:["header_widget","timeframes_toolbar","go_to_date"],enabled_features:["show_logo_on_all_charts"],charts_storage_url:"https://saveload.tradingview.com",charts_storage_api_version:"1.14",client_id:"tradingview.com",user_id:"public_user_id",fullscreen:!1,autosize:!0,overrides:{"paneProperties.background":"#212327","paneProperties.vertGridProperties.color":"#212327","paneProperties.horzGridProperties.color":"#212327","mainSeriesProperties.candleStyle.upColor":"#53B987","mainSeriesProperties.candleStyle.downColor":"#EB4D5C","symbolWatermarkProperties.transparency":90,"mainSeriesProperties.candleStyle.wickUpColor":"#53B987","mainSeriesProperties.candleStyle.wickDownColor":"#EB4D5C","mainSeriesProperties.candleStyle.drawBorder":!0,"mainSeriesProperties.candleStyle.borderUpColor":"#53B987","mainSeriesProperties.candleStyle.borderDownColor":"#EB4D5C","scalesProperties.textColor":"#AAA"},toolbar_bg:"#212327",timezone:"Asia/Shanghai",session:"24x7"},i=new l(e);return document.querySelector("#tv_chart_container iframe").addEventListener("load",(function(e){setTimeout((function(){return h(!1)}),500)})),i}()),function(){null!==v&&v.remove()}}),[t,a.current]),Object(S.jsxs)("div",{id:"tradingview",children:[Object(S.jsxs)("div",{className:N,children:[Object(S.jsxs)("span",{className:"tab-btn one",onClick:function(){return I("1","one")},children:["1",i.min]}),Object(S.jsxs)("span",{className:"tab-btn five",onClick:function(){return I("5","five")},children:["5",i.min]}),Object(S.jsxs)("span",{className:"tab-btn fifteen",onClick:function(){return I("15","fifteen")},children:["15",i.min]}),Object(S.jsxs)("span",{className:"tab-btn thirty",onClick:function(){return I("30","thirty")},children:["30",i.min]}),Object(S.jsxs)("span",{className:"tab-btn sixty",onClick:function(){return I("60","sixty")},children:["1",i.hour]}),Object(S.jsxs)("span",{className:"tab-btn one-day",onClick:function(){return I("1D","one-day")},children:["1",i.day]}),Object(S.jsxs)("span",{className:"tab-btn one-week",onClick:function(){return I("1W","one-week")},children:["1",i.week]})]}),Object(S.jsx)("div",{className:"loading",style:{display:d?"block":"none"},children:Object(S.jsx)("div",{className:"spinner-border",role:"status",children:Object(S.jsx)("span",{className:"sr-only"})})}),Object(S.jsx)("div",{id:C})]})}))),k=i(610),D=i(15);var P=Object(I.b)("trading","version","type")(Object(I.c)((function({version:e,trading:t,lang:i,type:s}){const[o,a]=Object(n.useState)("rise"),[r,c]=Object(n.useState)("rise"),[l,d]=Object(n.useState)(),h=Object(n.useRef)(),u=Object(n.useRef)();return Object(n.useEffect)((()=>(h.current&&(h.current>t.index?a("fall"):a("rise")),h.current=t.index,()=>{})),[t.index]),Object(n.useEffect)((()=>{if(s.isOption){let e=Object(D.s)(t.index,t.position.strikePrice,t.position.isCall).plus(t.position.timePrice).toString();u.current>e?c("fall trade-dashboard-value"):c("rise trade-dashboard-value"),u.current=e,d(e)}}),[t.index]),Object(S.jsxs)("div",{id:"trading-view",children:[Object(S.jsxs)("div",{className:"right-top",children:[Object(S.jsx)("div",{className:"symbol-basetoken-text",children:e.isV1||e.isV2Lite?`${t.config?t.config.symbol:"BTCUSD"} / ${t.config?t.config.bTokenSymbol:""}  (10X)`:`${t.config?t.config.symbol:"BTCUSD"} (10X)`}),s.isFuture&&Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)("div",{className:"trade-dashboard-item latest-price",children:[Object(S.jsx)("div",{className:"trade-dashboard-title",children:i["index-price"]}),Object(S.jsx)("div",{className:o,children:Object(S.jsx)(k.a,{value:t.index,decimalScale:2})})]}),Object(S.jsxs)("div",{className:"trade-dashboard-item latest-price",children:[Object(S.jsxs)("div",{className:"trade-dashboard-title",children:[Object(S.jsx)("span",{children:i["funding-rate-annual"]}),"  "]}),Object(S.jsx)("div",{className:"trade-dashboard-value",children:Object(S.jsx)("span",{className:"funding-per",title:t.fundingRateTip,children:Object(S.jsx)(k.a,{value:t.fundingRate.fundingRate0,decimalScale:4,suffix:"%"})})})]})]}),s.isOption&&Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)("div",{className:"trade-dashboard-item latest-price",children:[Object(S.jsx)("div",{className:"trade-dashboard-title",children:t.config&&s.isOption?t.config.symbol.split("-")[0]:""}),Object(S.jsxs)("div",{className:"trade-dashboard-value",children:[Object(S.jsxs)("span",{children:[" ",Object(S.jsx)(k.a,{value:t.index,decimalScale:2})," "]}),Object(S.jsx)("span",{className:"vol",children:" | "}),i.vol," : ",Object(S.jsx)(k.a,{value:t.position.volatility,decimalScale:2,suffix:"%"})]})]}),Object(S.jsxs)("div",{className:"trade-dashboard-item latest-price",children:[Object(S.jsx)("div",{className:"trade-dashboard-title",children:i["eo-mark-price"]}),Object(S.jsx)("div",{className:r,children:Object(S.jsx)(k.a,{value:l,decimalScale:2})})]}),Object(S.jsxs)("div",{className:"trade-dashboard-item latest-price",children:[Object(S.jsxs)("div",{className:"trade-dashboard-title",children:[Object(S.jsx)("span",{children:i["funding-rate-premium"]}),"  "]}),Object(S.jsx)("div",{className:"trade-dashboard-value",children:Object(S.jsx)("span",{className:"funding-per",title:t.fundingRatePremiumTip,children:Object(S.jsx)(k.a,{value:t.fundingRate.premiumFunding0,decimalScale:4})})})]}),Object(S.jsxs)("div",{className:"trade-dashboard-item latest-price",children:[Object(S.jsxs)("div",{className:"trade-dashboard-title",children:[Object(S.jsx)("span",{children:i["funding-rate-delta"]}),"  "]}),Object(S.jsx)("div",{className:"trade-dashboard-value",children:Object(S.jsx)("span",{className:"funding-per",title:t.fundingRateDeltaTip,children:Object(S.jsx)(k.a,{value:t.fundingRate.deltaFunding0,decimalScale:4})})})]})]}),Object(S.jsxs)("div",{className:"trade-dashboard-item latest-price",children:[Object(S.jsx)("div",{className:"trade-dashboard-title",children:i["total-net-position"]}),Object(S.jsx)("div",{className:"trade-dashboard-value",children:Object(S.jsx)(k.a,{value:t.fundingRate.tradersNetVolume})})]}),Object(S.jsxs)("div",{className:"trade-dashboard-item latest-price",children:[Object(S.jsx)("div",{className:"trade-dashboard-title",children:i["pool-total-liquidity"]}),Object(S.jsxs)("div",{className:"trade-dashboard-value",children:[" ",Object(S.jsx)(k.a,{allowLeadingZeros:!0,value:t.fundingRate.liquidity,decimalScale:2})," ",t.config&&t.config.bTokenSymbol]})]})]}),Object(S.jsx)("div",{className:"tradingview",children:Object(S.jsx)(M,{symbol:t.config&&t.config.symbol,lang:i,version:e})})]})}))),R=i(149),U=i(619),T=i(623),L=i(625),F=i(626),z=i(645),Z=i(624),W=i(646);const G=Object(R.a)(U.a),E=Object(R.a)(T.a),B=Object(R.a)(Z.a);var Y=Object(I.b)("wallet","trading","version","type")(Object(I.c)((function({wallet:e,trading:t,version:i,lang:s,type:o}){const[a,r]=Object(n.useState)("LONG"),[c,l]=Object(n.useState)(!1),[d,u]=Object(n.useState)(!1),[p,b]=Object(n.useState)(!1),[m,j]=Object(n.useState)(!1),[_,v]=Object(n.useState)(""),[g,f]=Object(n.useState)(""),[y,O]=Object(n.useState)(""),x=()=>{N()},w=x,N=()=>{A(),t.refresh()},A=async()=>{if(e.isConnected()&&t.config){const i=await Object(D.L)(e.detail.chainId,t.config.pool,e.detail.account,t.config.bTokenId).catch((e=>console.log(e)));i&&v(i)}};return Object(n.useEffect)((()=>{if(t.position){const{position:e}=t,i=+e.volume>0?"LONG":e.volume&&!Object(h.c)(e.volume,0)&&e.volume?"SHORT":"--";r(i),f(Object(D.e)(e.margin).plus(e.unrealizedPnl).toString()),O(Object(D.e)(e.margin).plus(e.unrealizedPnl).minus(e.marginHeld).toString())}return()=>{}}),[t.position.volume,t.position.margin,t.position.unrealizedPnl]),Object(n.useEffect)((()=>(A(),()=>{})),[e.detail.account,t.config,t.amount.dynBalance]),Object(S.jsxs)("div",{className:"position-box",children:[Object(S.jsxs)("div",{className:"p-box theader",children:[Object(S.jsx)("div",{className:"position",children:s.position}),Object(S.jsx)("div",{className:"ave-entry-price",children:s["average-entry-price"]}),Object(S.jsx)("div",{children:s.direction}),Object(S.jsx)("div",{className:"dyn-eff-bal",children:i.isV1||i.isV2Lite?Object(S.jsxs)(S.Fragment,{children:[s["balance-in-contract"]," ",Object(S.jsx)("br",{})," (",s["dynamic-balance"],")"]}):s["dynamic-effective-balance"]}),Object(S.jsx)("div",{className:"margin",children:s.margin}),Object(S.jsx)("div",{className:"unrealized-pnl",children:s["unrealized-pnl"]}),o.isFuture&&Object(S.jsx)(S.Fragment,{children:Object(S.jsx)("div",{children:Object(S.jsx)("span",{className:"funding-fee",title:s["funding-fee-tip"],children:s["funding-fee"]})})}),o.isOption&&Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("div",{children:Object(S.jsx)("span",{children:s["funding-rate-p"]})}),Object(S.jsx)("div",{children:Object(S.jsx)("span",{children:s["funding-rate-d"]})})]}),Object(S.jsx)("div",{children:s["liquidation-price"]})]}),Object(S.jsxs)("div",{className:"p-box tbody",children:[Object(S.jsxs)("div",{className:"position",children:[t.position.volume,Object(S.jsxs)("span",{className:"close-position",children:[!c&&Object(S.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF62lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMS0wNC0wMlQxNTozODoxMyswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjEtMDQtMDZUMjA6MDU6MTIrMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjEtMDQtMDZUMjA6MDU6MTIrMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDlkYTVmMGQtZjBkZC0xYTRiLTlhNWUtZTBlNDMwZTI5OGI3IiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6OGU2NWEzMTAtM2M4YS1jMDQ3LWIyMDAtZjZhYTZkMDlkNWRlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MDUwZmRhMGUtNTUyNC0wNjQxLTg1ZmYtYWUyNjAyODUxMzgzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowNTBmZGEwZS01NTI0LTA2NDEtODVmZi1hZTI2MDI4NTEzODMiIHN0RXZ0OndoZW49IjIwMjEtMDQtMDJUMTU6Mzg6MTMrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjQ5ZGE1ZjBkLWYwZGQtMWE0Yi05YTVlLWUwZTQzMGUyOThiNyIgc3RFdnQ6d2hlbj0iMjAyMS0wNC0wNlQyMDowNToxMiswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4SuXJrAAACqElEQVRYhb3XTWjTYBgH8P+bJq+0TrbatZui4EG3irCNQXVM0CqeBA+CwvAk6EVEQfy4eRFPfiGK4EUGeqgX8aSC4vAiBYnSdkNHFUFh6qGvbWFKmzSJF1Mzl3RvPpr/8X2ekB8P7wMJkWUZudx3cWpqnVJk9MZYv3IOIedTXXzb1PB129rWQQCIIJsVj2Y3qQZABmLaZJHRNYMx7XmYoM29rfFUVE/PMWk4FdMfEVmWDWuTbgAlRq+HMTETZD2bZdJ9ocSke1aVQICRhHK2UKHXwgYpOjEaeuSVMJJQj8+GDLMDNTRiFNmqY5lkY1oAgDBhziB6JJNsTAOAYBbCgHUC7Ug1H7bfa23oJowXtAzVLdjHuviGF2SLChpWron5Lb2tDC/IERUUrFwT80N9rQk3oI4oE1Zi9K4XmFfQiigAGE0oJ4qM3nYD8wPiQgHAWEI5zQvzC+JG8cKCAAEAkWWZtxcAUGD01mhCOUUsZ7oBLPyKfNvYo633CwJcTMqM08SCAnlCOcGCAnlGmbCFRfGHXe1zXXzmFeQLVa6J+Q09rUG72nBc3f+uQi+FirLbMmsiBBhNKBe9wlyjHNZe/1CVXlrvmB+YK5QTqFQRD22Nq/v+v/xeYdyoTqDtA+pjwH4rvcC4UDwgM0HAVkS5AQUF64jyAgoC5ogq16TXXkF+Ybao+ao0M9SnTvoBLYFVpJu6RbYSbBlqvirNpOPqniBAbVi/eqbE6FVe2BJUN0D/YMoFXlgb1U2QW5gQFsgNLLLr8MnQQGYGY9qLIqOrU1FtJ/n7CSsQIBXVdhcrFALI0gd+t7oLMmM3McMADBBNSPepe99XpSdtEJMOdBtkB1N1ggKj58eTzcvtH4e5n9KDRZXkJgaUp2GArClU6BVVF75kUo07APAH3WicsIPb8YcAAAAASUVORK5CYII=",onClick:async()=>{l(!0);const i=await Object(D.f)(e.detail.chainId,t.config.pool,e.detail.account,t.config.symbolId).finally((()=>l(!1)));i.success?N():"string"===typeof i.error?alert(i.error||s["close-position-failed"]):"object"===typeof i.error?alert(i.error.errorMessage||s["close-position-failed"]):alert(s["close-position-failed"])}}),Object(S.jsx)("span",{className:"spinner spinner-border spinner-border-sm",style:{display:c?"block":"none",marginLeft:"8px"}})]})]}),Object(S.jsx)("div",{className:"ave-entry-price",children:Object(S.jsx)(k.a,{value:t.position.averageEntryPrice,decimalScale:2})}),Object(S.jsx)("div",{className:a,children:s[a.toLowerCase()]||a}),Object(S.jsxs)("div",{className:"dyn-eff-bal",children:[Object(S.jsx)(k.a,{allowZero:!0,value:g,decimalScale:2}),i.isV1||i.isV2Lite||o.isOption?Object(S.jsxs)("span",{children:[Object(S.jsx)("span",{className:"open-add",id:"openAddMargin",onClick:()=>u(!0),children:Object(S.jsx)("img",{src:L.a,alt:"add margin"})}),Object(S.jsx)("span",{className:"open-remove",onClick:()=>b(!0),children:Object(S.jsx)("img",{src:F.a,alt:"add margin"})})]}):Object(S.jsxs)("span",{className:"balance-list-btn",onClick:()=>j(!0),children:[Object(S.jsx)("img",{src:z.a,alt:"Remove margin"})," ",s.detail]})]}),Object(S.jsx)("div",{className:"margin",children:Object(S.jsx)(k.a,{value:t.position.marginHeld,decimalScale:2})}),Object(S.jsx)("div",{children:Object(S.jsxs)("span",{className:"pnl-list unrealized-pnl",children:[Object(S.jsx)(k.a,{value:t.position.unrealizedPnl,decimalScale:6}),(i.isV2||i.isV2Lite)&&t.position.unrealizedPnl&&Object(S.jsx)("img",{src:W.a,alt:"unrealizePnl"}),(i.isV2||i.isV2Lite)&&Object(S.jsx)("div",{className:"pnl-box",children:t.position.unrealizedPnlList&&t.position.unrealizedPnlList.map(((e,t)=>Object(S.jsxs)("div",{className:"unrealizePnl-item",children:[Object(S.jsx)("span",{children:e[0]}),Object(S.jsx)("span",{children:Object(S.jsx)(k.a,{value:e[1],decimalScale:8})})]},t)))})]})}),o.isFuture&&Object(S.jsx)(S.Fragment,{children:Object(S.jsx)("div",{children:Object(S.jsx)(k.a,{value:-t.position.fundingFee,decimalScale:8})})}),o.isOption&&Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("div",{children:Object(S.jsx)(k.a,{value:-t.position.premiumFundingAccrued,decimalScale:8})}),Object(S.jsx)("div",{children:Object(S.jsx)(k.a,{value:-t.position.deltaFundingAccrued,decimalScale:8})})]}),Object(S.jsx)("div",{children:Object(S.jsx)(k.a,{value:t.position.liquidationPrice,decimalScale:2})})]}),Object(S.jsx)("div",{className:"p-box tbody"}),Object(S.jsx)(G,{wallet:e,modalIsOpen:d,onClose:()=>u(!1),spec:t.config,afterDeposit:w,balance:_,className:"trading-dialog",lang:s}),Object(S.jsx)(E,{wallet:e,modalIsOpen:p,onClose:()=>b(!1),spec:t.config,afterWithdraw:x,availableBalance:y,position:t.position,className:"trading-dialog",lang:s}),Object(S.jsx)(B,{wallet:e,modalIsOpen:m,onClose:()=>j(!1),spec:t.config,afterDepositAndWithdraw:()=>{N()},position:t.position,overlay:{background:"#1b1c22",top:80},className:"balance-list-dialog",lang:s})]})}))),Q=i(60),H=i.n(Q),J=i(607),V=i(613),X=i.n(V),q=(i(611),i(89)),K=i(620),$=q[D.a.get()].chainInfo;function ee(e){var t=e.wallet,i=e.his,o=Object(n.useState)(!1),a=Object(s.a)(o,2),r=a[0],c=a[1],l=function(){c(!0)},d=function(){c(!1)},h=A()("view",{hover:r});return Object(S.jsxs)("span",{className:h,onMouseOut:d,children:[Object(S.jsx)("span",{className:"view-space",onMouseOver:l,children:Object(S.jsxs)("a",{target:"_blank",rel:"noreferrer",href:"".concat($[t.detail.chainId].viewUrl,"tx/").concat(i.transactionHash),children:["View at ",$[t.detail.chainId].viewUrl]})}),Object(S.jsx)("span",{className:"right-arrow",onMouseOver:l,children:Object(S.jsx)("img",{alt:"",src:K.a})}),Object(S.jsx)("span",{className:"view-arrow",onMouseOver:l,onMouseOut:d,children:Object(S.jsx)("a",{target:"_blank",rel:"noreferrer",href:"".concat($[t.detail.chainId].viewUrl,"tx/").concat(i.transactionHash),children:Object(S.jsx)("img",{rel:"noreferrer",alt:"",src:"data:image/svg+xml;base64,DQo8c3ZnIGZpbGw9Im5vbmUiIGhlaWdodD0iMTAiIHdpZHRoPSIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgICA8cGF0aCBkPSJNOC42NzYuNjQyYS42NS42NSAwIDAwLS4wNzIuMDA2SDQuNzkzYS42NS42NSAwIDAwLS41Ny45NzUuNjUuNjUgMCAwMC41Ny4zMjJINy4xMkwuNDM4IDguNjE0YS42NDcuNjQ3IDAgMDAuMjg2IDEuMDk2LjY1LjY1IDAgMDAuNjMyLS4xNzlMOC4wNCAyLjg2MXYyLjMyNGEuNjQ4LjY0OCAwIDAwLjk3Ny41Ny42NDguNjQ4IDAgMDAuMzIyLS41N1YxLjM4YS42NDcuNjQ3IDAgMDAtLjY2Mi0uNzM3eiIgZmlsbD0iI0FBQUFBQSIvPg0KPC9zdmc+DQoNCg=="})})})]})}var te=Object(I.b)("wallet","trading")(Object(I.c)((function(e){var t=e.wallet,i=e.trading,o=e.lang,a=Object(n.useState)([]),r=Object(s.a)(a,2),c=r[0],l=r[1];function d(){return(d=Object(J.a)(H.a.mark((function e(){var n;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.isConnected()&&i.config&&(n=i.history.map((function(e){return e.directionText=o["long-buy"],"SHORT"===e.direction?e.directionText=o["short-sell"]:"liquidation"===e.direction.toLowerCase()&&(e.directionText=o.liquidation),e})),l(n));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){return function(){d.apply(this,arguments)}(),function(){}}),[t.detail.account,i.config,i.history]),Object(S.jsxs)("div",{className:"history-box",children:[Object(S.jsxs)("div",{className:"p-box theader",children:[Object(S.jsx)("div",{className:"td",children:o.time}),Object(S.jsx)("div",{children:o.direction}),Object(S.jsx)("div",{children:o["base-token"]}),Object(S.jsx)("div",{children:o.price}),Object(S.jsx)("div",{children:o.volume}),Object(S.jsx)("div",{children:o.notional}),Object(S.jsx)("div",{children:o["transaction-fee"]})]}),c.map((function(e,i){return Object(S.jsxs)("div",{className:"p-box tbody",children:[Object(S.jsx)("div",{className:"td",children:X.a.asString("yyyy-MM-dd hh:mm:ss",new Date(parseInt(e.time)))}),Object(S.jsxs)("div",{className:e.direction,children:[e.directionText,Object(S.jsx)(ee,{wallet:t,his:e})]}),Object(S.jsx)("div",{children:e.baseToken||"--"}),Object(S.jsx)("div",{children:Object(S.jsx)(k.a,{value:e.price,decimalScale:2})}),Object(S.jsx)("div",{children:e.volume}),Object(S.jsx)("div",{children:Object(S.jsx)(k.a,{value:e.notional,decimalScale:4})}),Object(S.jsx)("div",{children:Object(S.jsx)(k.a,{value:e.transactionFee,decimalScale:4})})]},i)})),0==c.length?Object(S.jsx)("div",{className:"no-data",children:o["no-data"]}):""]})})));var ie=function({lang:e}){const[t,i]=Object(n.useState)("position"),s=e=>{i(e)},o=A()("position-info",t);return Object(S.jsxs)("div",{className:o,children:[Object(S.jsxs)("div",{className:"position-header",children:[Object(S.jsxs)("div",{className:"position-title",children:[Object(S.jsx)("span",{className:"position-info-title",children:e["position-info"]}),Object(S.jsx)("span",{className:"history-info-title",children:e["trade-history"]})]}),Object(S.jsxs)("div",{className:"check-position-history ",children:[Object(S.jsx)("div",{className:"btn-position",onClick:()=>s("position"),children:e["current-position"]}),Object(S.jsx)("div",{className:"btn-history",onClick:()=>s("history"),children:e["trade-history"]})]})]}),Object(S.jsxs)("div",{className:"pos-his-info ",children:[Object(S.jsx)(Y,{lang:e}),Object(S.jsx)(te,{lang:e})]})]})},ne=i(634),se=i(647),oe=(i(648),i(649),i(678),i(679),i(680),i(627));t.default=Object(I.b)("wallet")(Object(I.c)((function({wallet:e,lang:t}){return Object(n.useEffect)((()=>(document.querySelector(".desktop").style.minWidth="1903px",()=>{document.querySelector(".desktop").style.minWidth=""})),[e.detail.account]),Object(S.jsxs)("div",{className:"trade-container",children:[Object(S.jsx)(oe.a,{lang:t}),Object(S.jsxs)("div",{className:"trade-body",children:[Object(S.jsx)(se.a,{lang:t}),Object(S.jsxs)("div",{className:"trade-pro",children:[Object(S.jsx)("div",{className:"left",children:Object(S.jsx)(ne.a,{isPro:!0,lang:t})}),Object(S.jsxs)("div",{className:"right",children:[Object(S.jsx)(P,{wallet:e,lang:t}),Object(S.jsx)(ie,{lang:t})]})]})]})]})})))}}]);
//# sourceMappingURL=21.6ab4c249.chunk.js.map