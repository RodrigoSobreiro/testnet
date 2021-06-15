(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[7],{538:function(e,c,t){"use strict";var s=t(2),a=t(35),n=(t(539),t(138)),i=t(43);c.a=Object(n.b)("wallet")(Object(n.c)((function({wallet:e}){const[c,t]=Object(s.useState)("Connect Wallet"),n=c=>{e.isConnected()?c.supported?t(Object(i.jsxs)("span",{children:[c.formatBalance," ",c.symbol," ",Object(i.jsx)("span",{className:"address",children:Object(a.c)(c.account)})]})):t(Object(i.jsxs)("span",{className:"no-supported",children:["Unsupported Chain ID ",c.chainId,"!"]})):t("Connect Wallet")};return Object(s.useEffect)((()=>((async()=>{const c=await e.connect();c&&n(c)})(),()=>{})),[]),Object(s.useEffect)((()=>(n(e.detail),()=>{})),[e.detail.account,e.detail.formatBalance]),Object(i.jsxs)("div",{className:"connect",children:[Object(i.jsxs)("div",{className:"network-text-logo",children:[Object(i.jsx)("i",{className:e.detail.symbol}),Object(i.jsx)("span",{className:"logo-text",children:e.detail.text})]}),Object(i.jsx)("div",{className:"bg-btn",children:Object(i.jsx)("button",{className:"nav-btn connect-btn",onClick:e.connect,children:c})})]})})))},539:function(e,c,t){},552:function(e,c,t){"use strict";var s=t(2),a=t(138),n=t(28),i=t(43);c.a=Object(a.b)("wallet","version")(Object(n.c)((function({wallet:e,version:c}){const t=()=>{if(e.isConnected()&&!e.supportV2)return c.setCurrent("v1"),void alert("No V2 pool on this network yet");c.switch(),window.location.reload()};return Object(s.useEffect)((()=>(e.detail.chainId&&(e.supportV2?c.current||(e.supportV2?c.setCurrent("v2"):c.setCurrent("v1")):c.setCurrent("v1",!0)),()=>{})),[e.detail.chainId]),Object(i.jsx)("div",{className:"version",children:c.isV1?Object(i.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAXCAYAAACmnHcKAAAACXBIWXMAAAsSAAALEgHS3X78AAADv0lEQVRYhcVYT0gUURj/zbguWaiblkUq2qGyKNwItEOgzgpCe1CCLhFkdOzgdpMueepsRHXosuHJS2yH6ZIzrdAhIkKNUpDIDQNNhfVP+W/Xic++Z8/X7KyKub/L7Lz53sz7ve/3/XmrOY6DTDBC4XYAjQCCAGozGv5/JAAMAIgDiNqWmXT7oisZIxSOAOgCUJxDAl54QOtTSW0iY4TCAQAxAA2STT/vSDyHixfqaJXGyFtttmUOiIENMkwkLsmJSLTbljm21yvPBCMUrmbF3GCbWSIqCMlkBiQid2zL7M7RgskLIlareMG0yTHbMqNs00axw2FAHgqS5NbJGKEwsb2XSyKsjKgiJRWD7Ikkk37Nz5/ZltmuNRmX6SVjzLLftszGvSaCP2Ro9xuKAw6MltRk8EJ6oeAA0qlV+D8N6b5XL/MrfkxoUAjJTjiuUxBJWasrw7fKAbwH8EIZr+PxuxnmPebnRVmI0Hcbyo466OhcThgtqfGSQ06yoMCZLyxyZi5eSk9GOpfHzgbT4FAQyulmGRIiOmtznbFtmZky1ncAw0yqXBpv5us7xb6IidR5kZBApQDXb61MHC5zpt0MiNTVa6tfyHOUACgZcGqOskkjkanmm1iWD/YpBAj1AOakZwKPANTwJniCtV98omYNlVVrU1625K1TZ9Z+8W0bX4UDanXO3wTXqupCpp6vdewllQjYi7eZ6JZwrGJtxufDSjbbc8G0kFVAXbdPipdsZITUalhGp3lclRjh/lZJ7CZ0zg6Q5OaFPiZCUruSQWI7wsy0VppKwZ9t7vg3fR///GfzdU7LkOTmBeGFZg+JbQucdGZHR/IwM6WVeM2dm9XK3r7JO8i3IsZFAkvoUgC1cuHywjDLTWQpN4ntBN3LS0Bvj798fk4rdZu/uKgV9vbkl84m12tNv9RmtfM1rkupDSJFZsFzsVG7JTHbMqnODI6O6HjS7a/+/DGvkkgRgZ8LWiDxVT/y9KH/5NCHvP1cV9YzGR9Rqvg1MdHOUPHp4MHzcie6V1A7dqonRQEHy0sauPKD45ua3wG2F50L1cigICM/2NSJ5oAU7Xab0qP186FMNJpqh99EsSd3zUE2EIS6ctU5e4GLbEwqKTcFSfVwJhMCt9dEKJ4rT+HvOUYcDeSD4wYRuB2beWJUmbRdyJ2tiIWI2BAjFI5KB6ydIMGxs6mX9Kkv4pTXyO6M8I5s97+Aam43kjy/gXc1wuS2UtPcQF37xiFNhee/MwIsv2w1SMaYfNym+bJMd0AomVXmAH4DDmCLGoun3ZsAAAAASUVORK5CYII=",onClick:t,alt:"Switch V2"}):Object(i.jsx)("img",{onClick:t,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAXCAYAAACmnHcKAAAACXBIWXMAAAsSAAALEgHS3X78AAAD1ElEQVRYhc1YTUhUURT+3hu1DFKxsh8DJyIQirSIahFkM7VpFg5CmzbZpk0IQ6uoRbZrFUJU25E2tShy8drke+hWorQgDQkmSFArmelfbXxxhu/a7XXfjFk5ffB47965777znfOde88dy/d9mBCLJ+oAJHm1Aag1Dlw5DAK4L5fnOhnTV41kYvFEN4DUf0AgDL1in+c6Wf33n8gwGgMAWrQxfewbLqPxUaojqTk4J32e6yzatUgmFk9EabAa3Ef2xpCWA3S2KOaSiZBOZliLyGnPddLs76RHWgE0AXjFSKU91xkoE6k25k8tCUVFcgUyzBHFtkCEXpAXDheZV6LXGdTuSiAWT4hzn/BTvZ7rdFpHYsfF6AxZ9nmuk9Rzp2GTj2PH51/v3L3wraISc/NzqH7+zLYePqjcOj1pyUQjnuu0rjQZ/FioVBC22YGkSvHeI0R2teaROj+bOXgoP7W2xn9XXe1/qKn1p6V99tzsSyEq4zipCRcAPALQEfjtBvsbtb6jjLT0y9VVioznOt2UWcF2m6sE6OEMF4JTq1YDJ07OvxQSponq1/vZM12zEzJOc0IQQ2w3a/1CYD+AUQATWv8F3vcBuCY2GJxgQpp9bTaXPTA/wEihZW/+sxhcbJZ1G/yZHc15eaxlUgbRD+A9va5wgPf+wNgYgHY+jxqcEAa1CLXYWoIrwyVfsKM5P1NqlooKzDVs9F+zGZY3YnQNowGNWJCMDjVmosgYhUWH26bOvwwlNRWRZoPEdEiuKHkN/Y4pNmseaHIrkBofi9SXenlhAZHpKWsrm2EVgi61DkYpLCqneIF5MxoyLpSMioiSSSF3Xjy318y8teqKvfxmytowPhaRx1yJDXSIiV9MYvu1Fayf9ddSkOSYV7aW+O2yv7B86c1lLdy9Xbn500czoQ/vrXV3blU1zn4tNHtKfFTJxbSKKVzUxp5fIhFoZAYUGbVWq/1Cltrc08eRNdevVm0fH7PrhdSXL9ZaITH8KLLlZk9VdHyskHIjSyBzj1JDkag0as9qr7lSbFKWWk1spk3lzBGRDMuFtKrXZD9p2LSA6UkbjAaYb8kyljMD3PAHPddpU2TqmMBNwUqU7DsDNVofD0np8M/9UyJRKkoVxnvEXr1q1pkKLot8yuH1YojFE0kqRtm5WOEHD2dBQjm+KF4YLhcxVhetVIh+cDytq+OXYzMll9ZKi+VghFLNavN1a9JNa/vJcjDIg+NPe1tFcCJ6P8kopQJV9VIRZVmUZSHbzmNGiuSWc2QQlYhCQg+Fof/O6FiGARn9uC2O0b34p/MZAeA7lnaTTtpmho4AAAAASUVORK5CYII=",alt:"Switch V1"})})})))},562:function(e,c,t){},563:function(e,c,t){},564:function(e,c,t){},565:function(e,c,t){},600:function(e,c,t){"use strict";t.r(c),t.d(c,"default",(function(){return v}));var s=t(2),a=t.n(s),n=(t(562),t(139)),i=t.p+"static/media/logo.7232fabb.png",r=t(23),l=t(552),j=t(43);function d(){const e=!!Object(r.j)("/mining"),c=!!Object(r.j)("/lite"),t=!!Object(r.j)("/pro");return Object(j.jsxs)("div",{className:"nav-menu",children:[Object(j.jsx)("div",{className:"logo",children:Object(j.jsx)("a",{href:"http://deri.finance",rel:"noreferrer",target:"_blank",children:Object(j.jsx)("img",{src:i,alt:""})})}),Object(j.jsx)("div",{className:"mean",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(n.b,{to:"/mining",className:e?"selected":"",children:"Mining"})}),Object(j.jsx)("li",{children:Object(j.jsx)(n.b,{to:"/lite",className:c||t?"selected":"",children:"Trade"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://governance.deri.finance/",children:"Governance"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://bridge.deri.finance/",children:"Bridge"})}),Object(j.jsxs)("li",{className:"ref",children:[Object(j.jsx)("a",{href:"https://docs.deri.finance/",children:"Docs"}),Object(j.jsx)("i",{children:Object(j.jsx)("svg",{"data-v-16f7de50":"",fill:"currentColor",viewBox:"0 0 24 24",width:"24",height:"24",className:"Zi Zi--ArrowDown ContentItem-arrowIcon",children:Object(j.jsx)("path",{"data-v-16f7de50":"",d:"M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 0-1.052.757.757 0 0 0-1.063 0L12.002 13z"})})}),Object(j.jsxs)("ul",{className:"ref_box",children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://docs.deri.finance/whitepaper",children:"Whitepaper"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://docs.deri.finance/code-audits",children:"Code Audit"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"http://deri.finance/#/team",children:"Team"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://docs.deri.finance/faq",children:"FAQ"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://docs.deri.finance/",children:"Guide"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://github.com/deri-finance/",children:"Github"})})]})]})]})}),Object(j.jsx)(l.a,{})]})}var b=t(538);function o(){return Object(j.jsxs)("div",{className:"nav",children:[Object(j.jsx)(d,{}),Object(j.jsx)(b.a,{})]})}var h,O=t(101);t(563);const x=Object(O.a)((()=>Promise.all([t.e(0),t.e(1),t.e(3),t.e(2),t.e(14)]).then(t.bind(null,592)))),m=Object(O.a)((()=>Promise.all([t.e(0),t.e(1),t.e(3),t.e(2),t.e(13)]).then(t.bind(null,598)))),f=Object(O.a)((()=>Promise.all([t.e(0),t.e(11)]).then(t.bind(null,593)))),A=Object(O.a)((()=>Promise.all([t.e(0),t.e(1),t.e(9)]).then(t.bind(null,594))));var p=Object(r.k)(h=class extends a.a.Component{render(){return Object(j.jsx)("div",{className:"body",children:Object(j.jsxs)(r.d,{children:[Object(j.jsx)(r.b,{exact:!0,path:"/",children:Object(j.jsx)(r.a,{to:"/lite"})}),Object(j.jsx)(r.b,{exact:!0,path:"/mining",component:f}),Object(j.jsx)(r.b,{exact:!0,path:"/mining/:version/:chainId/:type/:symbol/:baseToken/:address",component:A}),Object(j.jsx)(r.b,{exact:!0,path:"/lite",component:x}),Object(j.jsx)(r.b,{exact:!0,path:"/pro",component:m}),Object(j.jsx)(r.b,{component:x})]})})}})||h;t(564);function u(){return Object(j.jsx)("div",{className:"footer",children:Object(j.jsxs)("div",{className:"footer_info",children:[Object(j.jsx)("div",{className:"hr"}),Object(j.jsxs)("div",{className:"footer_box",children:[Object(j.jsxs)("div",{className:"left",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{children:Object(j.jsx)("router-link",{to:"/lite",children:"App"})}),Object(j.jsx)("span",{className:"mt_27",children:Object(j.jsx)("a",{href:"https://docs.deri.finance/",children:"Docs"})}),Object(j.jsx)("span",{className:"mt_27",children:Object(j.jsx)("a",{href:"http://deri.finance/#/team",children:"Team"})}),Object(j.jsx)("span",{className:"mt_27",children:Object(j.jsx)("a",{href:"https://docs.deri.finance/faq",children:"FAQ"})})]}),Object(j.jsx)("div",{className:"mt_19",children:"\xa9 2021 Deri Protocol"})]}),Object(j.jsxs)("div",{className:"right",children:[Object(j.jsx)("span",{children:" Visit us on "}),Object(j.jsx)("a",{target:"_blank",rel:"noreferrer",className:"iocn_a",children:Object(j.jsxs)("div",{className:"circle",children:[Object(j.jsx)("div",{className:"wechat",children:Object(j.jsx)("div",{className:"down_box"})}),Object(j.jsx)("div",{className:"fa fa-wechat"})]})}),Object(j.jsx)("a",{target:"_blank",rel:"noreferrer",className:"iocn_a",href:"mailto: service@deri.finance",children:Object(j.jsx)("div",{className:"circle",children:Object(j.jsx)("div",{className:"fa fa-envelope"})})}),Object(j.jsx)("a",{target:"_blank",className:"iocn_a",href:"https://deri-protocol.medium.com",rel:"noreferrer",children:Object(j.jsx)("div",{className:"circle",children:Object(j.jsx)("div",{className:"fa fa-medium"})})}),Object(j.jsx)("a",{target:"_blank",className:"iocn_a",href:"https://twitter.com/DeriProtocol",rel:"noreferrer",children:Object(j.jsx)("div",{className:"circle",children:Object(j.jsx)("div",{className:"fa fa-twitter"})})}),Object(j.jsx)("a",{target:"_blank",className:"iocn_a",href:"https://github.com/deri-finance",rel:"noreferrer",children:Object(j.jsx)("div",{className:"circle",children:Object(j.jsx)("div",{className:"fa fa-github"})})}),Object(j.jsx)("a",{rel:"noreferrer",target:"_blank",className:"iocn_a",href:"https://t.me/DeriProtocol",children:Object(j.jsx)("div",{className:"circle",children:Object(j.jsx)("div",{className:"fa fa-paper-plane"})})})]})]})]})})}t(565);function v(){return console.log("welcome Deri desktop app"),Object(j.jsxs)("div",{className:"desktop",children:[Object(j.jsx)(o,{}),Object(j.jsx)(p,{}),Object(j.jsx)(u,{})]})}}}]);
//# sourceMappingURL=7.c675f8e0.chunk.js.map