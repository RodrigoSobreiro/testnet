(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[13],{545:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));i(2);var n=i(23),o=i(529),s=i.n(o),r=i(43);function a({lite:e}){const t=Object(n.g)(),i=s()("check-lite-pro",{lite:e,pro:!e}),o=e=>{t.push(e)};return Object(r.jsxs)("div",{className:i,children:[Object(r.jsx)("div",{className:"lite",onClick:()=>o("/lite"),children:"LITE"}),Object(r.jsx)("div",{className:"pro",onClick:()=>o("/pro"),children:" PRO"})]})}},546:function(e,t,i){},585:function(e,t,i){},598:function(e,t,i){"use strict";i.r(t);var n=i(2),o=function(){return(o=Object.assign||function(e){for(var t,i=arguments,n=1,o=arguments.length;n<o;n++)for(var s in t=i[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)};function s(e,t){var i=o({},e);for(var n in t)"object"!=typeof e[n]||null===e[n]||Array.isArray(e[n])?void 0!==t[n]&&(i[n]=t[n]):i[n]=s(e[n],t[n]);return i}var r={mobile:{disabled_features:["left_toolbar","header_widget","timeframes_toolbar","edit_buttons_in_legend","context_menus","control_bar","border_around_the_chart"],enabled_features:[]}},a={width:800,height:500,interval:"1D",timezone:"Etc/UTC",container_id:"",library_path:"",locale:"en",widgetbar:{details:!1,watchlist:!1,watchlist_settings:{default_symbols:[]}},overrides:{"mainSeriesProperties.showCountdown":!1},studies_overrides:{},trading_customization:{position:{},order:{}},brokerConfig:{configFlags:{}},fullscreen:!1,autosize:!1,disabled_features:[],enabled_features:[],debug:!1,logo:{},time_frames:[{text:"5y",resolution:"1W"},{text:"1y",resolution:"1W"},{text:"6m",resolution:"120"},{text:"3m",resolution:"60"},{text:"1m",resolution:"30"},{text:"5d",resolution:"5"},{text:"1d",resolution:"1"}],client_id:"0",user_id:"0",charts_storage_api_version:"1.0",favorites:{intervals:[],chartTypes:[]}};var c=function(){function e(e){if(this._id="tradingview_"+(1048576*(1+Math.random())|0).toString(16).substring(1),this._ready=!1,this._readyHandlers=[],this._onWindowResize=this._autoResizeChart.bind(this),!e.datafeed)throw new Error("Datafeed is not defined");if(this._options=s(a,e),e.preset){var t=r[e.preset];t?(void 0!==this._options.disabled_features?this._options.disabled_features=this._options.disabled_features.concat(t.disabled_features):this._options.disabled_features=t.disabled_features,void 0!==this._options.enabled_features?this._options.enabled_features=this._options.enabled_features.concat(t.enabled_features):this._options.enabled_features=t.enabled_features):console.warn("Unknown preset: `"+e.preset+"`")}"Dark"===this._options.theme&&void 0===this._options.loading_screen&&(this._options.loading_screen={backgroundColor:"#131722"}),this._create()}return e.prototype.onChartReady=function(e){this._ready?e.call(this):this._readyHandlers.push(e)},e.prototype.headerReady=function(){var e=this;return this._innerWindowLoaded.then((function(){return e._innerWindow().headerReady()}))},e.prototype.onGrayedObjectClicked=function(e){this._innerAPI().onGrayedObjectClicked(e)},e.prototype.onShortcut=function(e,t){this._innerWindow().createShortcutAction(e,t)},e.prototype.subscribe=function(e,t){this._innerAPI().subscribe(e,t)},e.prototype.unsubscribe=function(e,t){this._innerAPI().unsubscribe(e,t)},e.prototype.chart=function(e){return this._innerAPI().chart(e)},e.prototype.getLanguage=function(){return this._options.locale},e.prototype.setSymbol=function(e,t,i){this._innerAPI().changeSymbol(e,t,i)},e.prototype.remove=function(){window.removeEventListener("resize",this._onWindowResize),this._readyHandlers.splice(0,this._readyHandlers.length),delete window[this._id],this._iFrame.parentNode&&this._iFrame.parentNode.removeChild(this._iFrame)},e.prototype.closePopupsAndDialogs=function(){this._innerAPI().closePopupsAndDialogs()},e.prototype.selectLineTool=function(e){this._innerAPI().selectLineTool(e)},e.prototype.selectedLineTool=function(){return this._innerAPI().selectedLineTool()},e.prototype.save=function(e){this._innerAPI().saveChart(e)},e.prototype.load=function(e,t){this._innerAPI().loadChart({json:e,extendedData:t})},e.prototype.getSavedCharts=function(e){this._innerAPI().getSavedCharts(e)},e.prototype.loadChartFromServer=function(e){this._innerAPI().loadChartFromServer(e)},e.prototype.saveChartToServer=function(e,t,i){this._innerAPI().saveChartToServer(e,t,i)},e.prototype.removeChartFromServer=function(e,t){this._innerAPI().removeChartFromServer(e,t)},e.prototype.onContextMenu=function(e){this._innerAPI().onContextMenu(e)},e.prototype.createButton=function(e){return this._innerWindow().createButton(e)},e.prototype.showNoticeDialog=function(e){this._innerAPI().showNoticeDialog(e)},e.prototype.showConfirmDialog=function(e){this._innerAPI().showConfirmDialog(e)},e.prototype.showLoadChartDialog=function(){this._innerAPI().showLoadChartDialog()},e.prototype.showSaveAsChartDialog=function(){this._innerAPI().showSaveAsChartDialog()},e.prototype.symbolInterval=function(){return this._innerAPI().getSymbolInterval()},e.prototype.mainSeriesPriceFormatter=function(){return this._innerAPI().mainSeriesPriceFormatter()},e.prototype.getIntervals=function(){return this._innerAPI().getIntervals()},e.prototype.getStudiesList=function(){return this._innerAPI().getStudiesList()},e.prototype.addCustomCSSFile=function(e){this._innerWindow().addCustomCSSFile(e)},e.prototype.applyOverrides=function(e){this._options=s(this._options,{overrides:e}),this._innerWindow().applyOverrides(e)},e.prototype.applyStudiesOverrides=function(e){this._innerWindow().applyStudiesOverrides(e)},e.prototype.watchList=function(){return this._innerAPI().watchlist()},e.prototype.activeChart=function(){return this._innerAPI().activeChart()},e.prototype.chartsCount=function(){return this._innerAPI().chartsCount()},e.prototype.layout=function(){return this._innerAPI().layout()},e.prototype.setLayout=function(e){this._innerAPI().setLayout(e)},e.prototype.layoutName=function(){return this._innerAPI().layoutName()},e.prototype.changeTheme=function(e,t){this._innerWindow().changeTheme(e,t)},e.prototype.getTheme=function(){return this._innerWindow().getTheme()},e.prototype.takeScreenshot=function(){this._innerAPI().takeScreenshot()},e.prototype.lockAllDrawingTools=function(){return this._innerAPI().lockAllDrawingTools()},e.prototype.hideAllDrawingTools=function(){return this._innerAPI().hideAllDrawingTools()},e.prototype.drawOnAllCharts=function(e){this._innerAPI().drawOnAllCharts(e)},e.prototype.magnetEnabled=function(){return this._innerAPI().magnetEnabled()},e.prototype.magnetMode=function(){return this._innerAPI().magnetMode()},e.prototype.undoRedoState=function(){return this._innerAPI().undoRedoState()},e.prototype.setIntervalLinkingEnabled=function(e){this._innerAPI().setIntervalLinkingEnabled(e)},e.prototype.setTimeFrame=function(e){this._innerAPI().setTimeFrame(e)},e.prototype.symbolSync=function(){return this._innerAPI().symbolSync()},e.prototype.intervalSync=function(){return this._innerAPI().intervalSync()},e.prototype.crosshairSync=function(){return this._innerAPI().crosshairSync()},e.prototype.timeSync=function(){return this._innerAPI().timeSync()},e.prototype.getAllFeatures=function(){return this._innerWindow().getAllFeatures()},e.prototype.clearUndoHistory=function(){return this._innerAPI().clearUndoHistory()},e.prototype.undo=function(){return this._innerAPI().undo()},e.prototype.redo=function(){return this._innerAPI().redo()},e.prototype.startFullscreen=function(){this._innerAPI().startFullscreen()},e.prototype.exitFullscreen=function(){this._innerAPI().exitFullscreen()},e.prototype.takeClientScreenshot=function(e){return this._innerAPI().takeClientScreenshot(e)},e.prototype._innerAPI=function(){return this._innerWindow().tradingViewApi},e.prototype._innerWindow=function(){return this._iFrame.contentWindow},e.prototype._autoResizeChart=function(){this._options.fullscreen&&(this._iFrame.style.height=window.innerHeight+"px")},e.prototype._create=function(){var e=this,t=this._render(),i=document.getElementById(this._options.container_id);if(null===i)throw new Error("There is no such element - #"+this._options.container_id);i.innerHTML=t,this._iFrame=i.querySelector("#"+this._id);var n=this._iFrame;(this._options.autosize||this._options.fullscreen)&&(n.style.width="100%",this._options.fullscreen||(n.style.height="100%")),window.addEventListener("resize",this._onWindowResize),this._onWindowResize(),this._innerWindowLoaded=new Promise((function(e){var t=function(){n.removeEventListener("load",t,!1),e()};n.addEventListener("load",t,!1)})),this._innerWindowLoaded.then((function(){e._innerWindow().widgetReady((function(){e._ready=!0;for(var t=0,i=e._readyHandlers;t<i.length;t++){var n=i[t];try{n.call(e)}catch(o){console.error(o)}}e._innerWindow().initializationFinished()}))}))},e.prototype._render=function(){var e=window;if(e[this._id]={datafeed:this._options.datafeed,customFormatters:this._options.custom_formatters||this._options.customFormatters,brokerFactory:this._options.broker_factory||this._options.brokerFactory,overrides:this._options.overrides,studiesOverrides:this._options.studies_overrides,tradingCustomization:this._options.trading_customization,disabledFeatures:this._options.disabled_features,enabledFeatures:this._options.enabled_features,brokerConfig:this._options.broker_config||this._options.brokerConfig,restConfig:this._options.restConfig,favorites:this._options.favorites,logo:this._options.logo,numeric_formatting:this._options.numeric_formatting,rss_news_feed:this._options.rss_news_feed,newsProvider:this._options.news_provider,loadLastChart:this._options.load_last_chart,saveLoadAdapter:this._options.save_load_adapter,loading_screen:this._options.loading_screen,settingsAdapter:this._options.settings_adapter,getCustomIndicators:this._options.custom_indicators_getter},this._options.saved_data)e[this._id].chartContent={json:this._options.saved_data},this._options.saved_data_meta_info&&(e[this._id].chartContentExtendedData=this._options.saved_data_meta_info);else if(!this._options.load_last_chart&&!this._options.symbol)throw new Error("Symbol is not defined: either 'symbol' or 'load_last_chart' option must be set");var t=(this._options.library_path||"")+(encodeURIComponent(this._options.locale)+"-tv-chart.b555c6a4.html#symbol=")+encodeURIComponent(this._options.symbol||"")+"&interval="+encodeURIComponent(this._options.interval)+(this._options.timeframe?"&timeframe="+encodeURIComponent(this._options.timeframe):"")+(this._options.toolbar_bg?"&toolbarbg="+encodeURIComponent(this._options.toolbar_bg.replace("#","")):"")+(this._options.studies_access?"&studiesAccess="+encodeURIComponent(JSON.stringify(this._options.studies_access)):"")+"&widgetbar="+encodeURIComponent(JSON.stringify(this._options.widgetbar))+(this._options.drawings_access?"&drawingsAccess="+encodeURIComponent(JSON.stringify(this._options.drawings_access)):"")+"&timeFrames="+encodeURIComponent(JSON.stringify(this._options.time_frames))+"&locale="+encodeURIComponent(this._options.locale)+"&uid="+encodeURIComponent(this._id)+"&clientId="+encodeURIComponent(String(this._options.client_id))+"&userId="+encodeURIComponent(String(this._options.user_id))+(this._options.charts_storage_url?"&chartsStorageUrl="+encodeURIComponent(this._options.charts_storage_url):"")+(this._options.charts_storage_api_version?"&chartsStorageVer="+encodeURIComponent(this._options.charts_storage_api_version):"")+(this._options.custom_css_url?"&customCSS="+encodeURIComponent(this._options.custom_css_url):"")+(this._options.auto_save_delay?"&autoSaveDelay="+encodeURIComponent(String(this._options.auto_save_delay)):"")+"&debug="+encodeURIComponent(String(this._options.debug))+(this._options.snapshot_url?"&snapshotUrl="+encodeURIComponent(this._options.snapshot_url):"")+(this._options.timezone?"&timezone="+encodeURIComponent(this._options.timezone):"")+(this._options.study_count_limit?"&studyCountLimit="+encodeURIComponent(String(this._options.study_count_limit)):"")+(this._options.symbol_search_request_delay?"&ssreqdelay="+encodeURIComponent(String(this._options.symbol_search_request_delay)):"")+(this._options.compare_symbols?"&compareSymbols="+encodeURIComponent(JSON.stringify(this._options.compare_symbols)):"")+(this._options.theme?"&theme="+encodeURIComponent(String(this._options.theme)):"");return'<iframe id="'+this._id+'" name="'+this._id+'"  src="'+t+'"'+(this._options.autosize||this._options.fullscreen?"":' width="'+this._options.width+'" height="'+this._options.height+'"')+' frameborder="0" allowTransparency="true" scrolling="no" allowfullscreen style="display:block;"></iframe>'},e}();window.TradingView=window.TradingView||{},window.TradingView.version=function(){return"CL v18.043 (internal id b555c6a4 @ 2021-02-18T09:41:15.150Z)"};var l=i(99),d=i(35);const h={};let p=null;const u=Object(l.io)("wss://oracle4.deri.finance",{transports:["websocket"],withCredentials:!0});var b,m,j=[],_=null;window.sub_index=0;var v=function(e,t,i,n,o,s){let r,a="v2"===Object(d.i)()?`${e.name}_V2`:e.name;switch(b=o,n,m=s,!0){case"1"==t:r="min";break;case"5"==t:r="5min";break;case"15"==t:r="15min";break;case"30"==t:r="30min";break;case"60"==t:r="hour";break;case"1D"==t:r="day";break;case"1W"==t:r="week";break;default:r="min"}u.emit("un_get_kline",_),_={symbol:a,time_type:r,from:i,to:n},u.emit("get_kline",_)},g=function(e,t,i,n,o){let s,r=e.name;switch(!0){case"1"==t:s="min";break;case"5"==t:s="5min";break;case"15"==t:s="15min";break;case"30"==t:s="30min";break;case"60"==t:s="hour";break;case"1D"==t:s="day";break;case"1W"==t:s="week";break;default:s="min"}_={symbol:r,time_type:s,updated:!0},p=i},y=function(e){};u.on("connect",(e=>{_&&_.updated&&u.emit("get_kline_update",_),console.log("socket,connect")})),u.on("kline_update",(e=>{let t={},i=e.time;e.time_type===_.time_type&&e.symbol.toUpperCase()===_.symbol.toUpperCase()&&(t.time=i,t.low=Number(e.low),t.high=Number(e.high),t.open=Number(e.open),t.close=Number(e.close),t.volume=Number(e.volume),p&&p(t))})),u.on("kline_history",(e=>{let t=_.symbol;if(j=e.map((e=>(t=e.symbol,{time:e.time,low:Number(e.low),high:Number(e.high),open:Number(e.open),close:Number(e.close),volume:Number(e.volume)}))),b){var i=j[j.length-1];h[_.symbol]={lastBar:i}}j.length;if(_.symbol.toUpperCase()===t.toUpperCase()){const e={noData:!(j.length>0)};m(j,e)}}));const f={supported_resolutions:["1","5","15","30","60","240","1D","5D","1W","1M"]};var O={onReady:e=>{setTimeout((()=>e(f)),0)},bars:{},searchSymbols:(e,t,i,n)=>{},resolveSymbol:(e,t,i)=>{const n={name:e,pricescale:100,ticker:e,description:"",minmov:1,type:"crypto",has_intraday:!0,intraday_multipliers:["1","2","5","15","30","60","240","1D","7D","1W","1M"],has_weekly_and_monthly:!0,data_status:"streaming",has_no_volume:!0,pro_name:e,has_daily:!0,timezone:"UTC",session:"24x7"};setTimeout((function(){t(n)}),0)},getBars:function(e,t,i,n,o,s,r){if(i>0&&n>0){const a=localStorage.getItem("localResolutions")||t;v(e,a,i,n,r,o,s)}},subscribeBars:(e,t,i,n,o)=>{g(e,t,i,n,o)},unsubscribeBars:e=>{y(e)},calculateHistoryDepth:(e,t,i)=>{},getMarks:(e,t,i,n,o)=>{},getTimeScaleMarks:(e,t,i,n,o)=>{},getServerTime:e=>{}},w=i(529),I=i.n(w),A=i(138),N=i(43);const x="tv_chart_container";var S=Object(A.b)("trading")(Object(A.c)((function({symbol:e}){const[t,i]=Object(n.useState)(!0),[o,s]=Object(n.useState)("one"),[r,a]=Object(n.useState)(null),[l,d]=Object(n.useState)("1"),h=I()("btn",o),p=(e,t)=>{s(t),d(e),r.chart().refreshMarks(),r.activeChart().setResolution(e)};return Object(n.useEffect)((()=>(e&&a((()=>{const t=new c({symbol:e,datafeed:O,interval:l,container_id:x,library_path:"/charting_library/",custom_css_url:"/style/tradingview-overide.css",locale:"en",disabled_features:["header_widget","timeframes_toolbar","go_to_date"],enabled_features:["show_logo_on_all_charts"],charts_storage_url:"https://saveload.tradingview.com",charts_storage_api_version:"1.14",client_id:"tradingview.com",user_id:"public_user_id",fullscreen:!1,autosize:!0,overrides:{"paneProperties.background":"#212327","paneProperties.vertGridProperties.color":"#212327","paneProperties.horzGridProperties.color":"#212327","mainSeriesProperties.candleStyle.upColor":"#53B987","mainSeriesProperties.candleStyle.downColor":"#EB4D5C","symbolWatermarkProperties.transparency":90,"mainSeriesProperties.candleStyle.wickUpColor":"#53B987","mainSeriesProperties.candleStyle.wickDownColor":"#EB4D5C","mainSeriesProperties.candleStyle.drawBorder":!0,"mainSeriesProperties.candleStyle.borderUpColor":"#53B987","mainSeriesProperties.candleStyle.borderDownColor":"#EB4D5C","scalesProperties.textColor":"#AAA"},toolbar_bg:"#212327",timezone:"Asia/Shanghai",session:"24x7"});return document.querySelector("iframe").addEventListener("load",(function(e){setTimeout((()=>i(!1)),500)})),t})()),()=>{null!==r&&r.remove()})),[e]),Object(N.jsxs)("div",{id:"tradingview",children:[Object(N.jsxs)("div",{className:h,children:[Object(N.jsx)("span",{className:"tab-btn one",onClick:()=>p("1","one"),children:"1min"}),Object(N.jsx)("span",{className:"tab-btn five",onClick:()=>p("5","five"),children:"5min"}),Object(N.jsx)("span",{className:"tab-btn fifteen",onClick:()=>p("15","fifteen"),children:"15min"}),Object(N.jsx)("span",{className:"tab-btn thirty",onClick:()=>p("30","thirty"),children:"30min"}),Object(N.jsx)("span",{className:"tab-btn sixty",onClick:()=>p("60","sixty"),children:"1hour"}),Object(N.jsx)("span",{className:"tab-btn one-day",onClick:()=>p("1D","one-day"),children:"1day"}),Object(N.jsx)("span",{className:"tab-btn one-week",onClick:()=>p("1W","one-week"),children:"1week"})]}),Object(N.jsx)("div",{className:"loading",style:{display:t?"block":"none"},children:Object(N.jsx)("div",{className:"spinner-border",role:"status",children:Object(N.jsx)("span",{className:"sr-only"})})}),Object(N.jsx)("div",{id:x})]})}))),C=i(531);var D=Object(A.b)("trading","version")(Object(A.c)((function({version:e,trading:t}){const[i,o]=Object(n.useState)("rise"),s=Object(n.useRef)();return Object(n.useEffect)((()=>(s.current&&(s.current>t.index?o("fall"):o("rise")),s.current=t.index,()=>{})),[t.index]),Object(N.jsxs)("div",{id:"trading-view",children:[Object(N.jsxs)("div",{className:"right-top",children:[Object(N.jsx)("div",{className:"symbol-basetoken-text",children:e.isV1?`${t.config?t.config.symbol:"BTCUSD"} / ${t.config?t.config.bTokenSymbol:""}  (10X)`:`${t.config?t.config.symbol:"BTCUSD"} (10X)`}),Object(N.jsxs)("div",{className:"trade-dashboard-item latest-price",children:[Object(N.jsx)("div",{className:"trade-dashboard-title",children:"Index Price"}),Object(N.jsx)("div",{className:i,children:Object(N.jsx)(C.a,{value:t.index,decimalScale:2})})]}),Object(N.jsxs)("div",{className:"trade-dashboard-item latest-price",children:[Object(N.jsxs)("div",{className:"trade-dashboard-title",children:[Object(N.jsx)("span",{children:"Funding Rate Annual"}),"  "]}),Object(N.jsx)("div",{className:"trade-dashboard-value",children:Object(N.jsx)("span",{className:"funding-per",title:t.fundingRateTip,children:Object(N.jsx)(C.a,{value:t.fundingRate.fundingRate0,decimalScale:4,suffix:"%"})})})]}),Object(N.jsxs)("div",{className:"trade-dashboard-item latest-price",children:[Object(N.jsx)("div",{className:"trade-dashboard-title",children:"Total Net Position"}),Object(N.jsx)("div",{className:"trade-dashboard-value",children:Object(N.jsx)(C.a,{value:t.fundingRate.tradersNetVolume})})]}),Object(N.jsxs)("div",{className:"trade-dashboard-item latest-price",children:[Object(N.jsx)("div",{className:"trade-dashboard-title",children:"Pool Total liquidity"}),Object(N.jsxs)("div",{className:"trade-dashboard-value",children:[" ",Object(N.jsx)(C.a,{allowLeadingZeros:!0,value:t.fundingRate.liquidity,decimalScale:2})," ",t.config&&t.config.bTokenSymbol]})]})]}),Object(N.jsx)("div",{className:"tradingview",children:Object(N.jsx)(S,{symbol:t.config&&t.config.symbol})})]})}))),M=i(17),k=i(534),P=i(537),R=i(541),T=i(543),U=i(544),L=i(558),z=i(542),E=i(559);const G=Object(k.a)(P.a),W=Object(k.a)(R.a),Z=Object(k.a)(z.a);var B=Object(A.b)("wallet","trading","version")(Object(A.c)((function({wallet:e,trading:t,version:i}){const[o,s]=Object(n.useState)("LONG"),[r,a]=Object(n.useState)(!1),[c,l]=Object(n.useState)(!1),[h,p]=Object(n.useState)(!1),[u,b]=Object(n.useState)(!1),[m,j]=Object(n.useState)(""),[_,v]=Object(n.useState)(""),[g,y]=Object(n.useState)(""),f=()=>{w()},O=f,w=()=>{I(),t.refresh()},I=async()=>{if(e.isConnected()&&t.config){const i=await Object(M.getWalletBalance)(e.detail.chainId,t.config.pool,e.detail.account,t.config.bTokenId).catch((e=>console.log(e)));i&&j(i)}};return Object(n.useEffect)((()=>{if(t.position){const{position:e}=t,i=+e.volume>0?"LONG":Object(d.b)(e.volume,0)||!e.volume?"--":"SHORT";s(i),v(Object(M.bg)(e.margin).plus(e.unrealizedPnl).toString()),y(Object(M.bg)(e.margin).plus(e.unrealizedPnl).minus(e.marginHeld).toString())}return()=>{}}),[t.position.volume,t.position.margin,t.position.unrealizedPnl]),Object(n.useEffect)((()=>(I(),()=>{})),[e.detail.account,t.config,t.amount.dynBalance]),Object(n.useEffect)((()=>{if(t.position.volume&&t.position.margin&&t.position.unrealizedPnl){const e=+t.position.volume>0?"LONG":Object(d.b)(t.position.volume,0)?"--":"SHORT";s(e)}return()=>{}}),[t.position.volume,t.position.margin,t.position.unrealizedPnl]),Object(N.jsxs)("div",{className:"position-box",children:[Object(N.jsxs)("div",{className:"p-box theader",children:[Object(N.jsx)("div",{children:"Position"}),Object(N.jsx)("div",{children:"Average Entry Price"}),Object(N.jsx)("div",{children:"Direction"}),Object(N.jsx)("div",{children:i.isV1?Object(N.jsxs)(N.Fragment,{children:["Balance in Contract ",Object(N.jsx)("br",{})," (Dynamic Balance)"]}):"Dynamic Effective Bal "}),Object(N.jsx)("div",{children:"Margin"}),Object(N.jsx)("div",{children:"Unrealized PnL"}),Object(N.jsx)("div",{children:"Liquidation Price"})]}),Object(N.jsxs)("div",{className:"p-box tbody",children:[Object(N.jsxs)("div",{children:[t.position.volume,Object(N.jsxs)("span",{className:"close-position",children:[!r&&Object(N.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF62lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMS0wNC0wMlQxNTozODoxMyswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjEtMDQtMDZUMjA6MDU6MTIrMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjEtMDQtMDZUMjA6MDU6MTIrMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDlkYTVmMGQtZjBkZC0xYTRiLTlhNWUtZTBlNDMwZTI5OGI3IiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6OGU2NWEzMTAtM2M4YS1jMDQ3LWIyMDAtZjZhYTZkMDlkNWRlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MDUwZmRhMGUtNTUyNC0wNjQxLTg1ZmYtYWUyNjAyODUxMzgzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowNTBmZGEwZS01NTI0LTA2NDEtODVmZi1hZTI2MDI4NTEzODMiIHN0RXZ0OndoZW49IjIwMjEtMDQtMDJUMTU6Mzg6MTMrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjQ5ZGE1ZjBkLWYwZGQtMWE0Yi05YTVlLWUwZTQzMGUyOThiNyIgc3RFdnQ6d2hlbj0iMjAyMS0wNC0wNlQyMDowNToxMiswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4SuXJrAAACqElEQVRYhb3XTWjTYBgH8P+bJq+0TrbatZui4EG3irCNQXVM0CqeBA+CwvAk6EVEQfy4eRFPfiGK4EUGeqgX8aSC4vAiBYnSdkNHFUFh6qGvbWFKmzSJF1Mzl3RvPpr/8X2ekB8P7wMJkWUZudx3cWpqnVJk9MZYv3IOIedTXXzb1PB129rWQQCIIJsVj2Y3qQZABmLaZJHRNYMx7XmYoM29rfFUVE/PMWk4FdMfEVmWDWuTbgAlRq+HMTETZD2bZdJ9ocSke1aVQICRhHK2UKHXwgYpOjEaeuSVMJJQj8+GDLMDNTRiFNmqY5lkY1oAgDBhziB6JJNsTAOAYBbCgHUC7Ug1H7bfa23oJowXtAzVLdjHuviGF2SLChpWron5Lb2tDC/IERUUrFwT80N9rQk3oI4oE1Zi9K4XmFfQiigAGE0oJ4qM3nYD8wPiQgHAWEI5zQvzC+JG8cKCAAEAkWWZtxcAUGD01mhCOUUsZ7oBLPyKfNvYo633CwJcTMqM08SCAnlCOcGCAnlGmbCFRfGHXe1zXXzmFeQLVa6J+Q09rUG72nBc3f+uQi+FirLbMmsiBBhNKBe9wlyjHNZe/1CVXlrvmB+YK5QTqFQRD22Nq/v+v/xeYdyoTqDtA+pjwH4rvcC4UDwgM0HAVkS5AQUF64jyAgoC5ogq16TXXkF+Ybao+ao0M9SnTvoBLYFVpJu6RbYSbBlqvirNpOPqniBAbVi/eqbE6FVe2BJUN0D/YMoFXlgb1U2QW5gQFsgNLLLr8MnQQGYGY9qLIqOrU1FtJ/n7CSsQIBXVdhcrFALI0gd+t7oLMmM3McMADBBNSPepe99XpSdtEJMOdBtkB1N1ggKj58eTzcvtH4e5n9KDRZXkJgaUp2GArClU6BVVF75kUo07APAH3WicsIPb8YcAAAAASUVORK5CYII=",onClick:async()=>{a(!0);const i=await Object(M.closePosition)(e.detail.chainId,t.config.pool,e.detail.account,t.config.symbolId).finally((()=>a(!1)));i.success?w():"string"===typeof i.error?alert(i.error||"Liquidation failed"):"object"===typeof i.error?alert(i.error.errorMessage||"Liquidation failed"):alert("Close position failed")}}),Object(N.jsx)("span",{className:"spinner spinner-border spinner-border-sm",style:{display:r?"block":"none",marginLeft:"8px"}})]})]}),Object(N.jsx)("div",{children:Object(N.jsx)(C.a,{value:t.position.averageEntryPrice,decimalScale:2})}),Object(N.jsx)("div",{className:o,children:o}),Object(N.jsxs)("div",{children:[Object(N.jsx)(C.a,{allowZero:!0,value:_,decimalScale:2}),i.isV1?Object(N.jsxs)("span",{children:[Object(N.jsx)("span",{className:"open-add",id:"openAddMargin",onClick:()=>l(!0),children:Object(N.jsx)("img",{src:T.a,alt:"add margin"})}),Object(N.jsx)("span",{className:"open-remove",onClick:()=>p(!0),children:Object(N.jsx)("img",{src:U.a,alt:"add margin"})})]}):Object(N.jsxs)("span",{className:"balance-list-btn",onClick:()=>b(!0),children:[Object(N.jsx)("img",{src:L.a,alt:"Remove margin"})," Detail"]})]}),Object(N.jsx)("div",{children:Object(N.jsx)(C.a,{value:t.position.marginHeld,decimalScale:2})}),Object(N.jsx)("div",{children:Object(N.jsxs)("span",{className:"pnl-list",children:[Object(N.jsx)(C.a,{value:t.position.unrealizedPnl,decimalScale:8}),i.isV2&&t.position.unrealizedPnl&&Object(N.jsx)("img",{src:E.a,alt:"unrealizePnl"}),i.isV2&&Object(N.jsx)("div",{className:"pnl-box",children:t.position.unrealizedPnlList&&t.position.unrealizedPnlList.map(((e,t)=>Object(N.jsxs)("div",{className:"unrealizePnl-item",children:[Object(N.jsx)("span",{children:e[0]}),Object(N.jsx)("span",{children:e[1]})]},t)))})]})}),Object(N.jsx)("div",{children:Object(N.jsx)(C.a,{value:t.position.liquidationPrice,decimalScale:2})})]}),Object(N.jsx)("div",{className:"p-box tbody"}),Object(N.jsx)(G,{wallet:e,modalIsOpen:c,onClose:()=>l(!1),spec:t.config,afterDeposit:O,balance:m,className:"trading-dialog"}),Object(N.jsx)(W,{wallet:e,modalIsOpen:h,onClose:()=>p(!1),spec:t.config,afterWithdraw:f,availableBalance:g,position:t.position,className:"trading-dialog"}),Object(N.jsx)(Z,{wallet:e,modalIsOpen:u,onClose:()=>b(!1),spec:t.config,afterDepositAndWithdraw:()=>{w()},position:t.position,overlay:{background:"#1b1c22",top:80},className:"balance-list-dialog"})]})}))),F=i(560),Y=i.n(F),Q=(i(532),i(140)),H=i(561);const J=Q[M.DeriEnv.get()].chainInfo;function V({wallet:e,his:t}){const[i,o]=Object(n.useState)(!1),s=()=>{o(!0)},r=()=>{o(!1)},a=I()("view",{hover:i});return Object(N.jsxs)("span",{className:a,onMouseOut:r,children:[Object(N.jsx)("span",{className:"view-space",onMouseOver:s,children:Object(N.jsxs)("a",{target:"_blank",rel:"noreferrer",href:`${J[e.detail.chainId].viewUrl}tx/${t.transactionHash}`,children:["View at ",J[e.detail.chainId].viewUrl]})}),Object(N.jsx)("span",{className:"right-arrow",onMouseOver:s,children:Object(N.jsx)("img",{alt:"",src:H.a})}),Object(N.jsx)("span",{className:"view-arrow",onMouseOver:s,onMouseOut:r,children:Object(N.jsx)("a",{target:"_blank",rel:"noreferrer",href:`${J[e.detail.chainId].viewUrl}tx/${t.transactionHash}`,children:Object(N.jsx)("img",{rel:"noreferrer",alt:"",src:"data:image/svg+xml;base64,DQo8c3ZnIGZpbGw9Im5vbmUiIGhlaWdodD0iMTAiIHdpZHRoPSIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgICA8cGF0aCBkPSJNOC42NzYuNjQyYS42NS42NSAwIDAwLS4wNzIuMDA2SDQuNzkzYS42NS42NSAwIDAwLS41Ny45NzUuNjUuNjUgMCAwMC41Ny4zMjJINy4xMkwuNDM4IDguNjE0YS42NDcuNjQ3IDAgMDAuMjg2IDEuMDk2LjY1LjY1IDAgMDAuNjMyLS4xNzlMOC4wNCAyLjg2MXYyLjMyNGEuNjQ4LjY0OCAwIDAwLjk3Ny41Ny42NDguNjQ4IDAgMDAuMzIyLS41N1YxLjM4YS42NDcuNjQ3IDAgMDAtLjY2Mi0uNzM3eiIgZmlsbD0iI0FBQUFBQSIvPg0KPC9zdmc+DQoNCg=="})})})]})}var X=Object(A.b)("wallet","trading")(Object(A.c)((function({wallet:e,trading:t}){const[i,o]=Object(n.useState)([]);return Object(n.useEffect)((()=>(async function(){if(e.isConnected()&&t.config&&t.history.length>0){const e=t.history.map((e=>(e.directionText="LONG"===e.direction?"LONG / BUY":"SHORT / SELL",e.directionText="LONG / BUY","SHORT"===e.direction?e.directionText="SHORT / SELL":"Liquidation"===e.direction&&(e.directionText="LIQUIDATION"),e)));o(e)}}(),()=>{})),[e.detail.account,t.config,t.history]),Object(N.jsxs)("div",{className:"history-box",children:[Object(N.jsxs)("div",{className:"p-box theader",children:[Object(N.jsx)("div",{className:"td",children:"Time"}),Object(N.jsx)("div",{children:"Direction"}),Object(N.jsx)("div",{children:"Base Token"}),Object(N.jsx)("div",{children:"Price"}),Object(N.jsx)("div",{children:"Volume"}),Object(N.jsx)("div",{children:"Notional"}),Object(N.jsx)("div",{children:"Transaction Fee"})]}),i.map(((t,i)=>Object(N.jsxs)("div",{className:"p-box tbody",children:[Object(N.jsx)("div",{className:"td",children:Y.a.asString("yyyy-MM-dd hh:mm:ss",new Date(parseInt(t.time)))}),Object(N.jsxs)("div",{className:t.direction,children:[t.directionText,Object(N.jsx)(V,{wallet:e,his:t})]}),Object(N.jsx)("div",{children:t.baseToken||"--"}),Object(N.jsx)("div",{children:Object(N.jsx)(C.a,{value:t.price,decimalScale:2})}),Object(N.jsx)("div",{children:t.volume}),Object(N.jsx)("div",{children:Object(N.jsx)(C.a,{value:t.notional,decimalScale:4})}),Object(N.jsx)("div",{children:Object(N.jsx)(C.a,{value:t.transactionFee,decimalScale:4})})]},i)))]})})));var q=function({wallet:e,trading:t}){const[i,o]=Object(n.useState)("position"),s=e=>{o(e)},r=I()("position-info",i);return Object(N.jsxs)("div",{className:r,children:[Object(N.jsxs)("div",{className:"position-header",children:[Object(N.jsxs)("div",{className:"position-title",children:[Object(N.jsx)("span",{className:"position-info-title",children:"POSITION INFO"}),Object(N.jsx)("span",{className:"history-info-title",children:"TRADE HISTORY"})]}),Object(N.jsxs)("div",{className:"check-position-history ",children:[Object(N.jsx)("div",{className:"btn-position",onClick:()=>s("position"),children:"CURRENT POSITION"}),Object(N.jsx)("div",{className:"btn-history",onClick:()=>s("history"),children:"TRADE HISTORY"})]})]}),Object(N.jsxs)("div",{className:"pos-his-info ",children:[Object(N.jsx)(B,{}),Object(N.jsx)(X,{})]})]})},K=i(550),$=i(545);i(546),i(585);t.default=Object(A.b)("wallet")(Object(A.c)((function({wallet:e}){return Object(n.useEffect)((()=>(document.querySelector(".desktop").style.minWidth="1920px",()=>{document.querySelector(".desktop").style.minWidth=""})),[e.detail.account]),Object(N.jsxs)("div",{className:"trade-body",children:[Object(N.jsx)($.a,{}),Object(N.jsxs)("div",{className:"trade-pro",children:[Object(N.jsx)("div",{className:"left",children:Object(N.jsx)(K.a,{isPro:!0})}),Object(N.jsxs)("div",{className:"right",children:[Object(N.jsx)(D,{wallet:e}),Object(N.jsx)(q,{})]})]})]})})))}}]);
//# sourceMappingURL=13.a4fc51a7.chunk.js.map