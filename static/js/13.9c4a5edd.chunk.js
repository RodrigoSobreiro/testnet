(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[13],{629:function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));i(2);var n=i(21),s=i(608),o=i.n(s),a=i(28),r=i(17);function c({lite:e=!1,lang:t}){const i=Object(n.useHistory)(),s=o()("check-lite-pro",{lite:e,pro:!e}),c=e=>{i.push(e)};return Object(r.jsxs)("div",{className:s,children:[a.a.isFuture&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"lite",onClick:()=>c("/futures/lite"),children:t.lite}),Object(r.jsxs)("div",{className:"pro",onClick:()=>c("/futures/pro"),children:[" ",t.pro]})]}),a.a.isOption&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"lite",onClick:()=>c("/options/lite"),children:t.lite}),Object(r.jsxs)("div",{className:"pro",onClick:()=>c("/options/pro"),children:[" ",t.pro]})]})]})}},630:function(e,t,i){},631:function(e,t,i){},706:function(e,t,i){},707:function(e,t,i){},708:function(e,t,i){},778:function(e,t,i){"use strict";i.r(t);var n=i(2),s=function(){return(s=Object.assign||function(e){for(var t,i=arguments,n=1,s=arguments.length;n<s;n++)for(var o in t=i[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function o(e,t){var i=s({},e);for(var n in t)"object"!=typeof e[n]||null===e[n]||Array.isArray(e[n])?void 0!==t[n]&&(i[n]=t[n]):i[n]=o(e[n],t[n]);return i}var a={mobile:{disabled_features:["left_toolbar","header_widget","timeframes_toolbar","edit_buttons_in_legend","context_menus","control_bar","border_around_the_chart"],enabled_features:[]}},r={width:800,height:500,interval:"1D",timezone:"Etc/UTC",container_id:"",library_path:"",locale:"en",widgetbar:{details:!1,watchlist:!1,watchlist_settings:{default_symbols:[]}},overrides:{"mainSeriesProperties.showCountdown":!1},studies_overrides:{},trading_customization:{position:{},order:{}},brokerConfig:{configFlags:{}},fullscreen:!1,autosize:!1,disabled_features:[],enabled_features:[],debug:!1,logo:{},time_frames:[{text:"5y",resolution:"1W"},{text:"1y",resolution:"1W"},{text:"6m",resolution:"120"},{text:"3m",resolution:"60"},{text:"1m",resolution:"30"},{text:"5d",resolution:"5"},{text:"1d",resolution:"1"}],client_id:"0",user_id:"0",charts_storage_api_version:"1.0",favorites:{intervals:[],chartTypes:[]}};var c=function(){function e(e){if(this._id="tradingview_"+(1048576*(1+Math.random())|0).toString(16).substring(1),this._ready=!1,this._readyHandlers=[],this._onWindowResize=this._autoResizeChart.bind(this),!e.datafeed)throw new Error("Datafeed is not defined");if(this._options=o(r,e),e.preset){var t=a[e.preset];t?(void 0!==this._options.disabled_features?this._options.disabled_features=this._options.disabled_features.concat(t.disabled_features):this._options.disabled_features=t.disabled_features,void 0!==this._options.enabled_features?this._options.enabled_features=this._options.enabled_features.concat(t.enabled_features):this._options.enabled_features=t.enabled_features):console.warn("Unknown preset: `"+e.preset+"`")}"Dark"===this._options.theme&&void 0===this._options.loading_screen&&(this._options.loading_screen={backgroundColor:"#131722"}),this._create()}return e.prototype.onChartReady=function(e){this._ready?e.call(this):this._readyHandlers.push(e)},e.prototype.headerReady=function(){var e=this;return this._innerWindowLoaded.then((function(){return e._innerWindow().headerReady()}))},e.prototype.onGrayedObjectClicked=function(e){this._innerAPI().onGrayedObjectClicked(e)},e.prototype.onShortcut=function(e,t){this._innerWindow().createShortcutAction(e,t)},e.prototype.subscribe=function(e,t){this._innerAPI().subscribe(e,t)},e.prototype.unsubscribe=function(e,t){this._innerAPI().unsubscribe(e,t)},e.prototype.chart=function(e){return this._innerAPI().chart(e)},e.prototype.getLanguage=function(){return this._options.locale},e.prototype.setSymbol=function(e,t,i){this._innerAPI().changeSymbol(e,t,i)},e.prototype.remove=function(){window.removeEventListener("resize",this._onWindowResize),this._readyHandlers.splice(0,this._readyHandlers.length),delete window[this._id],this._iFrame.parentNode&&this._iFrame.parentNode.removeChild(this._iFrame)},e.prototype.closePopupsAndDialogs=function(){this._innerAPI().closePopupsAndDialogs()},e.prototype.selectLineTool=function(e){this._innerAPI().selectLineTool(e)},e.prototype.selectedLineTool=function(){return this._innerAPI().selectedLineTool()},e.prototype.save=function(e){this._innerAPI().saveChart(e)},e.prototype.load=function(e,t){this._innerAPI().loadChart({json:e,extendedData:t})},e.prototype.getSavedCharts=function(e){this._innerAPI().getSavedCharts(e)},e.prototype.loadChartFromServer=function(e){this._innerAPI().loadChartFromServer(e)},e.prototype.saveChartToServer=function(e,t,i){this._innerAPI().saveChartToServer(e,t,i)},e.prototype.removeChartFromServer=function(e,t){this._innerAPI().removeChartFromServer(e,t)},e.prototype.onContextMenu=function(e){this._innerAPI().onContextMenu(e)},e.prototype.createButton=function(e){return this._innerWindow().createButton(e)},e.prototype.showNoticeDialog=function(e){this._innerAPI().showNoticeDialog(e)},e.prototype.showConfirmDialog=function(e){this._innerAPI().showConfirmDialog(e)},e.prototype.showLoadChartDialog=function(){this._innerAPI().showLoadChartDialog()},e.prototype.showSaveAsChartDialog=function(){this._innerAPI().showSaveAsChartDialog()},e.prototype.symbolInterval=function(){return this._innerAPI().getSymbolInterval()},e.prototype.mainSeriesPriceFormatter=function(){return this._innerAPI().mainSeriesPriceFormatter()},e.prototype.getIntervals=function(){return this._innerAPI().getIntervals()},e.prototype.getStudiesList=function(){return this._innerAPI().getStudiesList()},e.prototype.addCustomCSSFile=function(e){this._innerWindow().addCustomCSSFile(e)},e.prototype.applyOverrides=function(e){this._options=o(this._options,{overrides:e}),this._innerWindow().applyOverrides(e)},e.prototype.applyStudiesOverrides=function(e){this._innerWindow().applyStudiesOverrides(e)},e.prototype.watchList=function(){return this._innerAPI().watchlist()},e.prototype.activeChart=function(){return this._innerAPI().activeChart()},e.prototype.chartsCount=function(){return this._innerAPI().chartsCount()},e.prototype.layout=function(){return this._innerAPI().layout()},e.prototype.setLayout=function(e){this._innerAPI().setLayout(e)},e.prototype.layoutName=function(){return this._innerAPI().layoutName()},e.prototype.changeTheme=function(e,t){this._innerWindow().changeTheme(e,t)},e.prototype.getTheme=function(){return this._innerWindow().getTheme()},e.prototype.takeScreenshot=function(){this._innerAPI().takeScreenshot()},e.prototype.lockAllDrawingTools=function(){return this._innerAPI().lockAllDrawingTools()},e.prototype.hideAllDrawingTools=function(){return this._innerAPI().hideAllDrawingTools()},e.prototype.drawOnAllCharts=function(e){this._innerAPI().drawOnAllCharts(e)},e.prototype.magnetEnabled=function(){return this._innerAPI().magnetEnabled()},e.prototype.magnetMode=function(){return this._innerAPI().magnetMode()},e.prototype.undoRedoState=function(){return this._innerAPI().undoRedoState()},e.prototype.setIntervalLinkingEnabled=function(e){this._innerAPI().setIntervalLinkingEnabled(e)},e.prototype.setTimeFrame=function(e){this._innerAPI().setTimeFrame(e)},e.prototype.symbolSync=function(){return this._innerAPI().symbolSync()},e.prototype.intervalSync=function(){return this._innerAPI().intervalSync()},e.prototype.crosshairSync=function(){return this._innerAPI().crosshairSync()},e.prototype.timeSync=function(){return this._innerAPI().timeSync()},e.prototype.getAllFeatures=function(){return this._innerWindow().getAllFeatures()},e.prototype.clearUndoHistory=function(){return this._innerAPI().clearUndoHistory()},e.prototype.undo=function(){return this._innerAPI().undo()},e.prototype.redo=function(){return this._innerAPI().redo()},e.prototype.startFullscreen=function(){this._innerAPI().startFullscreen()},e.prototype.exitFullscreen=function(){this._innerAPI().exitFullscreen()},e.prototype.takeClientScreenshot=function(e){return this._innerAPI().takeClientScreenshot(e)},e.prototype._innerAPI=function(){return this._innerWindow().tradingViewApi},e.prototype._innerWindow=function(){return this._iFrame.contentWindow},e.prototype._autoResizeChart=function(){this._options.fullscreen&&(this._iFrame.style.height=window.innerHeight+"px")},e.prototype._create=function(){var e=this,t=this._render(),i=document.getElementById(this._options.container_id);if(null===i)throw new Error("There is no such element - #"+this._options.container_id);i.innerHTML=t,this._iFrame=i.querySelector("#"+this._id);var n=this._iFrame;(this._options.autosize||this._options.fullscreen)&&(n.style.width="100%",this._options.fullscreen||(n.style.height="100%")),window.addEventListener("resize",this._onWindowResize),this._onWindowResize(),this._innerWindowLoaded=new Promise((function(e){n.addEventListener("load",(function t(){n.removeEventListener("load",t,!1),e()}),!1)})),this._innerWindowLoaded.then((function(){e._innerWindow().widgetReady((function(){e._ready=!0;for(var t=0,i=e._readyHandlers;t<i.length;t++){var n=i[t];try{n.call(e)}catch(s){console.error(s)}}e._innerWindow().initializationFinished()}))}))},e.prototype._render=function(){var e=window;if(e[this._id]={datafeed:this._options.datafeed,customFormatters:this._options.custom_formatters||this._options.customFormatters,brokerFactory:this._options.broker_factory||this._options.brokerFactory,overrides:this._options.overrides,studiesOverrides:this._options.studies_overrides,tradingCustomization:this._options.trading_customization,disabledFeatures:this._options.disabled_features,enabledFeatures:this._options.enabled_features,brokerConfig:this._options.broker_config||this._options.brokerConfig,restConfig:this._options.restConfig,favorites:this._options.favorites,logo:this._options.logo,numeric_formatting:this._options.numeric_formatting,rss_news_feed:this._options.rss_news_feed,newsProvider:this._options.news_provider,loadLastChart:this._options.load_last_chart,saveLoadAdapter:this._options.save_load_adapter,loading_screen:this._options.loading_screen,settingsAdapter:this._options.settings_adapter,getCustomIndicators:this._options.custom_indicators_getter},this._options.saved_data)e[this._id].chartContent={json:this._options.saved_data},this._options.saved_data_meta_info&&(e[this._id].chartContentExtendedData=this._options.saved_data_meta_info);else if(!this._options.load_last_chart&&!this._options.symbol)throw new Error("Symbol is not defined: either 'symbol' or 'load_last_chart' option must be set");var t=(this._options.library_path||"")+(encodeURIComponent(this._options.locale)+"-tv-chart.b555c6a4.html#symbol=")+encodeURIComponent(this._options.symbol||"")+"&interval="+encodeURIComponent(this._options.interval)+(this._options.timeframe?"&timeframe="+encodeURIComponent(this._options.timeframe):"")+(this._options.toolbar_bg?"&toolbarbg="+encodeURIComponent(this._options.toolbar_bg.replace("#","")):"")+(this._options.studies_access?"&studiesAccess="+encodeURIComponent(JSON.stringify(this._options.studies_access)):"")+"&widgetbar="+encodeURIComponent(JSON.stringify(this._options.widgetbar))+(this._options.drawings_access?"&drawingsAccess="+encodeURIComponent(JSON.stringify(this._options.drawings_access)):"")+"&timeFrames="+encodeURIComponent(JSON.stringify(this._options.time_frames))+"&locale="+encodeURIComponent(this._options.locale)+"&uid="+encodeURIComponent(this._id)+"&clientId="+encodeURIComponent(String(this._options.client_id))+"&userId="+encodeURIComponent(String(this._options.user_id))+(this._options.charts_storage_url?"&chartsStorageUrl="+encodeURIComponent(this._options.charts_storage_url):"")+(this._options.charts_storage_api_version?"&chartsStorageVer="+encodeURIComponent(this._options.charts_storage_api_version):"")+(this._options.custom_css_url?"&customCSS="+encodeURIComponent(this._options.custom_css_url):"")+(this._options.auto_save_delay?"&autoSaveDelay="+encodeURIComponent(String(this._options.auto_save_delay)):"")+"&debug="+encodeURIComponent(String(this._options.debug))+(this._options.snapshot_url?"&snapshotUrl="+encodeURIComponent(this._options.snapshot_url):"")+(this._options.timezone?"&timezone="+encodeURIComponent(this._options.timezone):"")+(this._options.study_count_limit?"&studyCountLimit="+encodeURIComponent(String(this._options.study_count_limit)):"")+(this._options.symbol_search_request_delay?"&ssreqdelay="+encodeURIComponent(String(this._options.symbol_search_request_delay)):"")+(this._options.compare_symbols?"&compareSymbols="+encodeURIComponent(JSON.stringify(this._options.compare_symbols)):"")+(this._options.theme?"&theme="+encodeURIComponent(String(this._options.theme)):"");return'<iframe id="'+this._id+'" name="'+this._id+'"  src="'+t+'"'+(this._options.autosize||this._options.fullscreen?"":' width="'+this._options.width+'" height="'+this._options.height+'"')+' frameborder="0" allowTransparency="true" scrolling="no" allowfullscreen style="display:block;"></iframe>'},e}();window.TradingView=window.TradingView||{},window.TradingView.version=function(){return"CL v18.043 (internal id b555c6a4 @ 2021-02-18T09:41:15.150Z)"};var l=i(102),d=i(35);const h={};let p=null;const u=Object(l.io)("wss://oracle2.deri.finance",{transports:["websocket"],withCredentials:!0});var b,m,j=[],g=null;window.sub_index=0;function _(e){return Object(d.g)(e.name)}var v=function(e,t,i,n,s,o){let a,r=_(e);switch(r=r.toUpperCase(),b=s,n,m=o,!0){case"1"==t:a="min";break;case"5"==t:a="5min";break;case"15"==t:a="15min";break;case"30"==t:a="30min";break;case"60"==t:a="hour";break;case"1D"==t:a="day";break;case"1W"==t:a="week";break;default:a="min"}u.emit("un_get_kline",g),g={symbol:r,time_type:a,from:i,to:n},u.emit("get_kline",g)},f=function(e,t,i,n,s){let o,a=_(e);switch(!0){case"1"==t:o="min";break;case"5"==t:o="5min";break;case"15"==t:o="15min";break;case"30"==t:o="30min";break;case"60"==t:o="hour";break;case"1D"==t:o="day";break;case"1W"==t:o="week";break;default:o="min"}g={symbol:a,time_type:o,updated:!0},p=i},O=function(e){};u.on("connect",(e=>{g&&g.updated&&u.emit("get_kline_update",g),console.log("socket,connect")})),u.on("kline_update",(e=>{let t={},i=e.time;e.time_type===g.time_type&&e.symbol.toUpperCase()===g.symbol.toUpperCase()&&(t.time=i,t.low=Number(e.low),t.high=Number(e.high),t.open=Number(e.open),t.close=Number(e.close),t.volume=Number(e.volume),p&&p(t))})),u.on("kline_history",(e=>{let t=g.symbol;if(j=e.map((e=>(t=e.symbol,{time:e.time,low:Number(e.low),high:Number(e.high),open:Number(e.open),close:Number(e.close),volume:Number(e.volume)}))),b){var i=j[j.length-1];h[g.symbol]={lastBar:i}}j.length;if(g.symbol.toUpperCase()===t.toUpperCase()){const e={noData:!(j.length>0)};m(j,e)}}));var y={supported_resolutions:["1","5","15","30","60","240","1D","5D","1W","1M"]},x={onReady:function(e){setTimeout((function(){return e(y)}),0)},bars:{},searchSymbols:function(e,t,i,n){},resolveSymbol:function(e,t,i){var n={name:e,pricescale:100,ticker:e,description:"",minmov:1,type:"crypto",has_intraday:!0,intraday_multipliers:["1","2","5","15","30","60","240","1D","7D","1W","1M"],has_weekly_and_monthly:!0,data_status:"streaming",has_no_volume:!0,pro_name:e,has_daily:!0,timezone:"UTC",session:"24x7"};setTimeout((function(){t(n)}),0)},getBars:function(e,t,i,n,s,o,a){i>0&&n>0&&v(e,t,i,n,a,s,o)},subscribeBars:function(e,t,i,n,s){f(e,t,i,n,s)},unsubscribeBars:function(e){O(e)},calculateHistoryDepth:function(e,t,i){},getMarks:function(e,t,i,n,s){},getTimeScaleMarks:function(e,t,i,n,s){},getServerTime:function(e){}},N=i(608),w=i.n(N),I=i(45),A=i(28),S=(i(687),i(749)),C=i(688),k=i.n(C),M=i(17);var D=Object(I.b)("intl")(Object(I.c)((function({symbol:e="btcusd-20000-c_v2_bsc",interval:t="min",intl:i}){return Object(n.useEffect)((()=>((async()=>{const n=Object(S.a)(document.querySelector(".ligth-chart-container"),{localization:{locale:i.locale},width:1178,height:468});n.applyOptions({timeScale:{borderColor:"#fff",tickMarkFormatter:(e,t,i)=>{console.log(e,t,i);const n=new Date(e);return`${n.getHours()+1} :${n.getMinutes()}`}},priceScale:{borderColor:"#fff"},crosshair:{vertLine:{color:"#fff",width:.5,visible:!0,labelVisible:!0},horzLine:{color:"#fff",width:.5,visible:!0,labelVisible:!0},mode:1},grid:{vertLines:{visible:!1},horzLines:{visible:!1}},layout:{backgroundColor:"#212327",textColor:"#aaa",fontSize:12}});const s=n.addBarSeries(),o=(new Date).getTime(),a=60*Math.floor(o/60/1e3),r=`https://oracle2.deri.finance/get_kline?symbol=${e}&time_type=${t}&from=${a-68400}&to=${a}`,c=await k.a.get(r);if(c&&c.data){const{data:e}=c;s.setData(e.data)}})(),()=>{})),[e,t]),Object(M.jsx)("div",{className:"ligth-chart-container"})})));const R="tv_chart_container";var P=Object(I.b)("intl","trading")(Object(I.c)((function({symbol:e,lang:t,intl:i,version:s}){const[o,a]=Object(n.useState)(!0),[r,l]=Object(n.useState)("one"),[d,h]=Object(n.useState)(null),[p,u]=Object(n.useState)(""),[b,m]=Object(n.useState)("1"),j=w()("btn",r),g=w()("switcher",p),_=(e,t)=>{l(t),m(e),d.activeChart().setResolution(e,(()=>{d.chart().refreshMarks()}))},v=e=>{u(e)};return Object(n.useEffect)((()=>(e&&h((()=>{const t={symbol:e,datafeed:x,interval:b,container_id:R,library_path:"/charting_library/",custom_css_url:"/style/tradingview-overide.css",locale:i.locale,disabled_features:["header_widget","timeframes_toolbar","go_to_date"],enabled_features:["show_logo_on_all_charts"],charts_storage_url:"https://saveload.tradingview.com",charts_storage_api_version:"1.14",client_id:"tradingview.com",user_id:"public_user_id",fullscreen:!1,autosize:!0,overrides:{"paneProperties.background":"#212327","paneProperties.vertGridProperties.color":"#212327","paneProperties.horzGridProperties.color":"#212327","scalesProperties.textColor":"#aaa"},studies_overrides:{"compare.plot.color":"rgb(86, 155, 218)"},toolbar_bg:"#212327",timezone:"Asia/Shanghai",session:"24x7"},n=new c(t);return n.onChartReady((()=>{setTimeout((()=>a(!1)),500)})),n})()),A.a.isOption?u("mark-price"):u("index-price"),()=>{null!==d&&d.remove()})),[e,s.current]),Object(M.jsxs)("div",{id:"tradingview",children:[A.a.isOption&&Object(M.jsxs)("div",{className:g,children:[Object(M.jsx)("span",{className:"mark-price-c",onClick:()=>v("mark-price"),children:"Mark Price"}),Object(M.jsx)("span",{className:"index-price-c",onClick:()=>v("index-price"),children:"Index Price"})]}),Object(M.jsxs)("div",{className:j,children:[Object(M.jsxs)("span",{className:"tab-btn one",onClick:()=>_("1","one"),children:["1",t.min]}),Object(M.jsxs)("span",{className:"tab-btn five",onClick:()=>_("5","five"),children:["5",t.min]}),Object(M.jsxs)("span",{className:"tab-btn fifteen",onClick:()=>_("15","fifteen"),children:["15",t.min]}),Object(M.jsxs)("span",{className:"tab-btn thirty",onClick:()=>_("30","thirty"),children:["30",t.min]}),Object(M.jsxs)("span",{className:"tab-btn sixty",onClick:()=>_("60","sixty"),children:["1",t.hour]}),Object(M.jsxs)("span",{className:"tab-btn one-day",onClick:()=>_("1D","one-day"),children:["1",t.day]}),Object(M.jsxs)("span",{className:"tab-btn one-week",onClick:()=>_("1W","one-week"),children:["1",t.week]})]}),Object(M.jsx)("div",{className:"loading",style:{display:o?"block":"none"},children:Object(M.jsx)("div",{className:"spinner-border",role:"status",children:Object(M.jsx)("span",{className:"sr-only"})})}),Object(M.jsx)("div",{id:R,style:{display:"index-price"===p?"block":"none"}}),A.a.isOption&&Object(M.jsx)("div",{id:"lightweight-chart",style:{display:"mark-price"===p?"block":"none"},children:Object(M.jsx)(D,{})})]})}))),L=i(610),T=i(13);var U=Object(I.b)("trading","version","type")(Object(I.c)((function({version:e,trading:t,lang:i,type:s}){const[o,a]=Object(n.useState)("rise"),[r,c]=Object(n.useState)("rise"),[l,d]=Object(n.useState)(),h=Object(n.useRef)(),p=Object(n.useRef)();return Object(n.useEffect)((()=>(h.current&&(h.current>t.index?a("fall"):a("rise")),h.current=t.index,()=>{})),[t.index]),Object(n.useEffect)((()=>{if(s.isOption){let e=Object(T.s)(t.index,t.position.strikePrice,t.position.isCall).plus(t.position.timePrice).toString();p.current>e?c("fall trade-dashboard-value"):c("rise trade-dashboard-value"),p.current=e,d(e)}}),[t.index]),Object(M.jsxs)("div",{id:"trading-view",children:[Object(M.jsxs)("div",{className:"right-top",children:[Object(M.jsx)("div",{className:"symbol-basetoken-text",children:s.isOption?`${t.config?t.config.symbol:""}`:e.isV1||e.isV2Lite?`${t.config?t.config.symbol:"BTCUSD"} / ${t.config?t.config.bTokenSymbol:""}  (10X)`:`${t.config?t.config.symbol:"BTCUSD"} (10X)`}),s.isFuture&&Object(M.jsxs)(M.Fragment,{children:[Object(M.jsxs)("div",{className:"trade-dashboard-item latest-price",children:[Object(M.jsx)("div",{className:"trade-dashboard-title",children:i["index-price"]}),Object(M.jsx)("div",{className:o,children:Object(M.jsx)(L.a,{value:t.index,decimalScale:2})})]}),Object(M.jsxs)("div",{className:"trade-dashboard-item latest-price",children:[Object(M.jsxs)("div",{className:"trade-dashboard-title",children:[Object(M.jsx)("span",{children:i["funding-rate-annual"]}),"  "]}),Object(M.jsx)("div",{className:"trade-dashboard-value",children:Object(M.jsx)("span",{className:"funding-per",title:t.fundingRateTip,children:Object(M.jsx)(L.a,{value:t.fundingRate.fundingRate0,decimalScale:4,suffix:"%"})})})]}),Object(M.jsxs)("div",{className:"trade-dashboard-item latest-price",children:[Object(M.jsx)("div",{className:"trade-dashboard-title",children:i["total-net-position"]}),Object(M.jsx)("div",{className:"trade-dashboard-value",children:Object(M.jsx)(L.a,{value:t.fundingRate.tradersNetVolume})})]})]}),s.isOption&&Object(M.jsxs)(M.Fragment,{children:[Object(M.jsxs)("div",{className:"trade-dashboard-item latest-price  ",children:[Object(M.jsx)("div",{className:"trade-dashboard-title option-symbol",children:t.config&&s.isOption?t.config.symbol.split("-")[0]:""}),Object(M.jsxs)("div",{className:"trade-dashboard-value",children:[Object(M.jsxs)("span",{children:[" ",Object(M.jsx)(L.a,{value:t.index,decimalScale:2})," "]}),Object(M.jsx)("span",{className:"vol",children:" | "}),i.vol," : ",Object(M.jsx)(L.a,{value:t.position.volatility,decimalScale:2,suffix:"%"})]})]}),Object(M.jsxs)("div",{className:"trade-dashboard-item latest-price",children:[Object(M.jsx)("div",{className:"trade-dashboard-title",children:i["eo-mark-price"]}),Object(M.jsx)("div",{className:r,children:Object(M.jsx)(L.a,{value:l,decimalScale:2})})]}),Object(M.jsxs)("div",{className:"trade-dashboard-item latest-price",children:[Object(M.jsxs)("div",{className:"trade-dashboard-title",children:[Object(M.jsx)("span",{className:"funding-per",title:i["premium-tip"],children:i["funding-rate-premium"]}),"  "]}),Object(M.jsx)("div",{className:"trade-dashboard-value",children:Object(M.jsx)("span",{className:"funding-per",title:t.fundingRatePremiumTip,children:Object(M.jsx)(L.a,{value:t.fundingRate.premiumFunding0,decimalScale:4})})})]}),Object(M.jsxs)("div",{className:"trade-dashboard-item latest-price",children:[Object(M.jsxs)("div",{className:"trade-dashboard-title",children:[Object(M.jsx)("span",{className:"funding-per",title:i["delta-tip"],children:i["funding-rate-delta"]}),"  "]}),Object(M.jsx)("div",{className:"trade-dashboard-value",children:Object(M.jsx)("span",{className:"funding-per",title:t.fundingRateDeltaTip,children:Object(M.jsx)(L.a,{value:t.fundingRate.deltaFunding0,decimalScale:4})})})]}),Object(M.jsxs)("div",{className:"trade-dashboard-item latest-price",children:[Object(M.jsx)("div",{className:"trade-dashboard-title",children:i["total-net-position"]}),Object(M.jsx)("div",{className:"trade-dashboard-value",children:Object(M.jsx)(L.a,{value:t.contract?t.fundingRate.tradersNetVolume*t.contract.multiplier:"0"})})]})]}),Object(M.jsxs)("div",{className:"trade-dashboard-item latest-price",children:[Object(M.jsx)("div",{className:"trade-dashboard-title",children:i["pool-total-liquidity"]}),Object(M.jsxs)("div",{className:"trade-dashboard-value",children:[" ",Object(M.jsx)(L.a,{allowLeadingZeros:!0,value:t.fundingRate.liquidity,decimalScale:2})," ",t.config&&t.config.bTokenSymbol]})]})]}),Object(M.jsx)("div",{className:"tradingview",children:Object(M.jsx)(P,{symbol:t.config&&t.config.symbol,lang:i,version:e,containerId:"tv1"})})]})}))),F=i(149),z=i(620),Z=i(624),W=i(626),G=i(627),E=i(649),B=i(625),Y=i(650);const Q=Object(F.a)(z.a),H=Object(F.a)(Z.a),V=Object(F.a)(B.a);var J=Object(I.b)("wallet","trading","version","type")(Object(I.c)((function({wallet:e,trading:t,version:i,lang:s,type:o}){const[a,r]=Object(n.useState)("LONG"),[c,l]=Object(n.useState)(!1),[h,p]=Object(n.useState)(!1),[u,b]=Object(n.useState)(!1),[m,j]=Object(n.useState)(!1),[g,_]=Object(n.useState)(""),[v,f]=Object(n.useState)(""),[O,y]=Object(n.useState)(""),x=()=>{w()},N=x,w=()=>{I(),t.refresh()},I=async()=>{if(e.isConnected()&&t.config){const i=await Object(T.L)(e.detail.chainId,t.config.pool,e.detail.account,t.config.bTokenId).catch((e=>console.log(e)));i&&_(i)}};return Object(n.useEffect)((()=>{if(t.position){const{position:e}=t,i=+e.volume>0?"LONG":e.volume&&!Object(d.c)(e.volume,0)&&e.volume?"SHORT":"--";r(i),f(Object(T.e)(e.margin).plus(e.unrealizedPnl).toString()),y(Object(T.e)(e.margin).plus(e.unrealizedPnl).minus(e.marginHeld).toString())}return()=>{}}),[t.position.volume,t.position.margin,t.position.unrealizedPnl]),Object(n.useEffect)((()=>(I(),()=>{})),[e.detail.account,t.config,t.amount.dynBalance]),Object(M.jsxs)("div",{className:"position-box",children:[Object(M.jsxs)("div",{className:"p-box theader",children:[Object(M.jsx)("div",{className:"position",children:s.position}),Object(M.jsx)("div",{className:"ave-entry-price",children:s["average-entry-price"]}),Object(M.jsx)("div",{className:"direction",children:s.direction}),Object(M.jsx)("div",{className:"dyn-eff-bal",children:i.isV1||i.isV2Lite?Object(M.jsxs)(M.Fragment,{children:[s["balance-in-contract"]," ",Object(M.jsx)("br",{})," (",s["dynamic-balance"],")"]}):s["dynamic-effective-balance"]}),Object(M.jsx)("div",{className:"margin",children:s.margin}),Object(M.jsx)("div",{className:"unrealized-pnl",children:s["unrealized-pnl"]}),o.isFuture&&Object(M.jsx)(M.Fragment,{children:Object(M.jsx)("div",{children:Object(M.jsx)("span",{className:"funding-fee",title:s["funding-fee-tip"],children:s["funding-fee"]})})}),o.isOption&&Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)("div",{className:"funding-posi",children:Object(M.jsx)("span",{className:"funding-fee",title:s["funding-fee-tip"],children:s["funding-rate-p"]})}),Object(M.jsx)("div",{className:"funding-posi",children:Object(M.jsx)("span",{className:"funding-fee",title:s["funding-fee-tip"],children:s["funding-rate-d"]})})]}),Object(M.jsx)("div",{className:"liquidation-price",children:s["liquidation-price"]})]}),Object(M.jsxs)("div",{className:"p-box tbody",children:[Object(M.jsxs)("div",{className:"position",children:[o.isOption?Object(M.jsx)(L.a,{value:t.position.volume*t.contract.multiplier,allowZero:!0}):Object(M.jsx)(L.a,{value:t.position.volume,allowZero:!0}),Object(M.jsxs)("span",{className:"close-position",children:[!c&&Object(M.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF62lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMS0wNC0wMlQxNTozODoxMyswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjEtMDQtMDZUMjA6MDU6MTIrMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjEtMDQtMDZUMjA6MDU6MTIrMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDlkYTVmMGQtZjBkZC0xYTRiLTlhNWUtZTBlNDMwZTI5OGI3IiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6OGU2NWEzMTAtM2M4YS1jMDQ3LWIyMDAtZjZhYTZkMDlkNWRlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MDUwZmRhMGUtNTUyNC0wNjQxLTg1ZmYtYWUyNjAyODUxMzgzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowNTBmZGEwZS01NTI0LTA2NDEtODVmZi1hZTI2MDI4NTEzODMiIHN0RXZ0OndoZW49IjIwMjEtMDQtMDJUMTU6Mzg6MTMrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjQ5ZGE1ZjBkLWYwZGQtMWE0Yi05YTVlLWUwZTQzMGUyOThiNyIgc3RFdnQ6d2hlbj0iMjAyMS0wNC0wNlQyMDowNToxMiswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4SuXJrAAACqElEQVRYhb3XTWjTYBgH8P+bJq+0TrbatZui4EG3irCNQXVM0CqeBA+CwvAk6EVEQfy4eRFPfiGK4EUGeqgX8aSC4vAiBYnSdkNHFUFh6qGvbWFKmzSJF1Mzl3RvPpr/8X2ekB8P7wMJkWUZudx3cWpqnVJk9MZYv3IOIedTXXzb1PB129rWQQCIIJsVj2Y3qQZABmLaZJHRNYMx7XmYoM29rfFUVE/PMWk4FdMfEVmWDWuTbgAlRq+HMTETZD2bZdJ9ocSke1aVQICRhHK2UKHXwgYpOjEaeuSVMJJQj8+GDLMDNTRiFNmqY5lkY1oAgDBhziB6JJNsTAOAYBbCgHUC7Ug1H7bfa23oJowXtAzVLdjHuviGF2SLChpWron5Lb2tDC/IERUUrFwT80N9rQk3oI4oE1Zi9K4XmFfQiigAGE0oJ4qM3nYD8wPiQgHAWEI5zQvzC+JG8cKCAAEAkWWZtxcAUGD01mhCOUUsZ7oBLPyKfNvYo633CwJcTMqM08SCAnlCOcGCAnlGmbCFRfGHXe1zXXzmFeQLVa6J+Q09rUG72nBc3f+uQi+FirLbMmsiBBhNKBe9wlyjHNZe/1CVXlrvmB+YK5QTqFQRD22Nq/v+v/xeYdyoTqDtA+pjwH4rvcC4UDwgM0HAVkS5AQUF64jyAgoC5ogq16TXXkF+Ybao+ao0M9SnTvoBLYFVpJu6RbYSbBlqvirNpOPqniBAbVi/eqbE6FVe2BJUN0D/YMoFXlgb1U2QW5gQFsgNLLLr8MnQQGYGY9qLIqOrU1FtJ/n7CSsQIBXVdhcrFALI0gd+t7oLMmM3McMADBBNSPepe99XpSdtEJMOdBtkB1N1ggKj58eTzcvtH4e5n9KDRZXkJgaUp2GArClU6BVVF75kUo07APAH3WicsIPb8YcAAAAASUVORK5CYII=",onClick:async()=>{l(!0);const i=await Object(T.f)(e.detail.chainId,t.config.pool,e.detail.account,t.config.symbolId).finally((()=>l(!1)));i.success?w():"string"===typeof i.error?alert(i.error||s["close-position-failed"]):"object"===typeof i.error?alert(i.error.errorMessage||s["close-position-failed"]):alert(s["close-position-failed"])}}),Object(M.jsx)("span",{className:"spinner spinner-border spinner-border-sm",style:{display:c?"block":"none",marginLeft:"8px"}})]})]}),Object(M.jsx)("div",{className:"ave-entry-price",children:Object(M.jsx)(L.a,{value:t.position.averageEntryPrice,decimalScale:2})}),Object(M.jsx)("div",{className:a,children:s[a.toLowerCase()]||a}),Object(M.jsxs)("div",{className:"dyn-eff-bal",children:[Object(M.jsx)(L.a,{allowZero:!0,value:v,decimalScale:2}),i.isV1||i.isV2Lite||o.isOption?Object(M.jsxs)("span",{children:[Object(M.jsx)("span",{className:"open-add",id:"openAddMargin",onClick:()=>p(!0),children:Object(M.jsx)("img",{src:W.a,alt:"add margin"})}),Object(M.jsx)("span",{className:"open-remove",onClick:()=>b(!0),children:Object(M.jsx)("img",{src:G.a,alt:"add margin"})})]}):Object(M.jsxs)("span",{className:"balance-list-btn",onClick:()=>j(!0),children:[Object(M.jsx)("img",{src:E.a,alt:"Remove margin"})," ",s.detail]})]}),Object(M.jsx)("div",{className:"margin",children:Object(M.jsx)(L.a,{value:t.position.marginHeld,decimalScale:2})}),Object(M.jsx)("div",{className:"pnl",children:Object(M.jsxs)("span",{className:"pnl-list unrealized-pnl",children:[Object(M.jsx)(L.a,{value:t.position.unrealizedPnl,decimalScale:6}),(i.isV2||i.isV2Lite)&&t.position.unrealizedPnl&&Object(M.jsx)("img",{src:Y.a,alt:"unrealizePnl"}),(i.isV2||i.isV2Lite)&&Object(M.jsx)("div",{className:"pnl-box",children:t.position.unrealizedPnlList&&t.position.unrealizedPnlList.map(((e,t)=>Object(M.jsxs)("div",{className:"unrealizePnl-item",children:[Object(M.jsx)("span",{children:e[0]}),Object(M.jsx)("span",{children:Object(M.jsx)(L.a,{value:e[1],decimalScale:8})})]},t)))})]})}),o.isFuture&&Object(M.jsx)(M.Fragment,{children:Object(M.jsx)("div",{children:Object(M.jsx)(L.a,{value:-t.position.fundingFee,decimalScale:8})})}),o.isOption&&Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)("div",{className:"funding-posi",children:Object(M.jsx)(L.a,{value:-t.position.premiumFundingAccrued,decimalScale:8})}),Object(M.jsx)("div",{className:"funding-posi",children:Object(M.jsx)(L.a,{value:-t.position.deltaFundingAccrued,decimalScale:8})})]}),Object(M.jsx)("div",{className:"liquidation-price",children:Object(M.jsx)(L.a,{value:t.position.liquidationPrice,decimalScale:2})})]}),Object(M.jsx)("div",{className:"p-box tbody"}),Object(M.jsx)(Q,{wallet:e,modalIsOpen:h,onClose:()=>p(!1),spec:t.config,afterDeposit:N,balance:g,className:"trading-dialog",lang:s}),Object(M.jsx)(H,{wallet:e,modalIsOpen:u,onClose:()=>b(!1),spec:t.config,afterWithdraw:x,availableBalance:O,position:t.position,className:"trading-dialog",lang:s}),Object(M.jsx)(V,{wallet:e,modalIsOpen:m,onClose:()=>j(!1),spec:t.config,afterDepositAndWithdraw:()=>{w()},position:t.position,overlay:{background:"#1b1c22",top:80},className:"balance-list-dialog",lang:s})]})}))),X=i(614),q=i.n(X),K=(i(611),i(89)),$=i(621);const ee=K[T.a.get()].chainInfo;function te({wallet:e,his:t}){const[i,s]=Object(n.useState)(!1),o=()=>{s(!0)},a=()=>{s(!1)},r=w()("view",{hover:i});return Object(M.jsxs)("span",{className:r,onMouseOut:a,children:[Object(M.jsx)("span",{className:"view-space",onMouseOver:o,children:Object(M.jsxs)("a",{target:"_blank",rel:"noreferrer",href:`${ee[e.detail.chainId].viewUrl}tx/${t.transactionHash}`,children:["View at ",ee[e.detail.chainId].viewUrl]})}),Object(M.jsx)("span",{className:"right-arrow",onMouseOver:o,children:Object(M.jsx)("img",{alt:"",src:$.a})}),Object(M.jsx)("span",{className:"view-arrow",onMouseOver:o,onMouseOut:a,children:Object(M.jsx)("a",{target:"_blank",rel:"noreferrer",href:`${ee[e.detail.chainId].viewUrl}tx/${t.transactionHash}`,children:Object(M.jsx)("img",{rel:"noreferrer",alt:"",src:"data:image/svg+xml;base64,DQo8c3ZnIGZpbGw9Im5vbmUiIGhlaWdodD0iMTAiIHdpZHRoPSIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgICA8cGF0aCBkPSJNOC42NzYuNjQyYS42NS42NSAwIDAwLS4wNzIuMDA2SDQuNzkzYS42NS42NSAwIDAwLS41Ny45NzUuNjUuNjUgMCAwMC41Ny4zMjJINy4xMkwuNDM4IDguNjE0YS42NDcuNjQ3IDAgMDAuMjg2IDEuMDk2LjY1LjY1IDAgMDAuNjMyLS4xNzlMOC4wNCAyLjg2MXYyLjMyNGEuNjQ4LjY0OCAwIDAwLjk3Ny41Ny42NDguNjQ4IDAgMDAuMzIyLS41N1YxLjM4YS42NDcuNjQ3IDAgMDAtLjY2Mi0uNzM3eiIgZmlsbD0iI0FBQUFBQSIvPg0KPC9zdmc+DQoNCg=="})})})]})}var ie=Object(I.b)("wallet","trading","type")(Object(I.c)((function({wallet:e,trading:t,lang:i,type:s}){const[o,a]=Object(n.useState)([]);return Object(n.useEffect)((()=>(async function(){if(e.isConnected()&&t.config){const e=t.history.map((e=>(e.directionText=i["long-buy"],"SHORT"===e.direction?e.directionText=i["short-sell"]:"liquidation"===e.direction.toLowerCase()&&(e.directionText=i.liquidation),e)));a(e)}}(),()=>{})),[e.detail.account,t.config,t.history]),Object(M.jsxs)("div",{className:"history-box",children:[Object(M.jsxs)("div",{className:"p-box theader",children:[Object(M.jsx)("div",{className:"td",children:i.time}),Object(M.jsx)("div",{children:i.direction}),Object(M.jsx)("div",{children:i["base-token"]}),Object(M.jsx)("div",{children:i.price}),Object(M.jsxs)("div",{children:[i.volume,"  ",s.isOption?`( ${i.notional} )`:""," "]}),Object(M.jsx)("div",{children:s.isOption?i["contract-value"]:i.notional}),Object(M.jsx)("div",{children:i["transaction-fee"]})]}),o.map(((t,i)=>Object(M.jsxs)("div",{className:"p-box tbody",children:[Object(M.jsx)("div",{className:"td",children:q.a.asString("yyyy-MM-dd hh:mm:ss",new Date(parseInt(t.time)))}),Object(M.jsxs)("div",{className:t.direction,children:[t.directionText,Object(M.jsx)(te,{wallet:e,his:t})]}),Object(M.jsx)("div",{children:t.baseToken||"--"}),Object(M.jsx)("div",{children:Object(M.jsx)(L.a,{value:t.price,decimalScale:2})}),Object(M.jsx)("div",{children:t.volume}),Object(M.jsx)("div",{children:Object(M.jsx)(L.a,{value:t.notional,decimalScale:4})}),Object(M.jsx)("div",{children:Object(M.jsx)(L.a,{value:t.transactionFee,decimalScale:4})})]},i))),0==o.length?Object(M.jsx)("div",{className:"no-data",children:i["no-data"]}):""]})})));var ne=function({lang:e}){const[t,i]=Object(n.useState)("position"),s=e=>{i(e)},o=w()("position-info",t);return Object(M.jsxs)("div",{className:o,children:[Object(M.jsxs)("div",{className:"position-header",children:[Object(M.jsxs)("div",{className:"position-title",children:[Object(M.jsx)("span",{className:"position-info-title",children:e["position-info"]}),Object(M.jsx)("span",{className:"history-info-title",children:e["trade-history"]})]}),Object(M.jsxs)("div",{className:"check-position-history ",children:[Object(M.jsx)("div",{className:"btn-position",onClick:()=>s("position"),children:e["current-position"]}),Object(M.jsx)("div",{className:"btn-history",onClick:()=>s("history"),children:e["trade-history"]})]})]}),Object(M.jsxs)("div",{className:"pos-his-info ",children:[Object(M.jsx)(J,{lang:e}),Object(M.jsx)(ie,{lang:e})]})]})},se=i(638),oe=i(629),ae=(i(630),i(631),i(706),i(707),i(708),i(628));t.default=Object(I.b)("wallet")(Object(I.c)((function({wallet:e,lang:t}){return Object(n.useEffect)((()=>(document.querySelector(".desktop").style.minWidth="1903px",()=>{document.querySelector(".desktop").style.minWidth=""})),[e.detail.account]),Object(M.jsxs)("div",{className:"trade-container",children:[Object(M.jsx)(ae.a,{lang:t}),Object(M.jsxs)("div",{className:"trade-body",children:[Object(M.jsx)(oe.a,{lang:t}),Object(M.jsxs)("div",{className:"trade-pro",children:[Object(M.jsx)("div",{className:"left",children:Object(M.jsx)(se.a,{isPro:!0,lang:t})}),Object(M.jsxs)("div",{className:"right",children:[Object(M.jsx)(U,{wallet:e,lang:t}),Object(M.jsx)(ne,{lang:t})]})]})]})]})})))}}]);
//# sourceMappingURL=13.9c4a5edd.chunk.js.map