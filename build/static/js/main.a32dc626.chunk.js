(this["webpackJsonpWeb-API"]=this["webpackJsonpWeb-API"]||[]).push([[0],{162:function(e,t,n){e.exports=n(346)},346:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(46),c=n(133),u=(n(167),n(12)),o=function(){var e=Object(a.useState)(null),t=Object(c.a)(e,2),n=t[0],l=t[1];Object(a.useEffect)((function(){fetch("https://api.covid19api.com/summary").then((function(e){return e.json()})).then((function(e){l(e)}))}),[]);var o=function(){return r.a.createElement("div",{className:"title"},"\u5404\u56fd\u306e\u4eca\u307e\u3067\u306e\u30b3\u30ed\u30ca\u30a6\u30a4\u30eb\u30b9\u611f\u67d3\u8005\u306e\u5408\u8a08\u3068\u65b0\u898f\u611f\u67d3\u8005\u6570")},i=function(){var e=[];return null==n?console.log("loading..."):e=function(e){for(var t=[],n=!0,a=[],r=0;r<e.length-1;r++)e[r].Country[0]!==e[r+1].Country[0]&&(n=!1),n?t.push({name:e[r].Country,uv:e[r].NewConfirmed,pv:e[r].TotalConfirmed-e[r].NewConfirmed}):(t.push({name:e[r].Country,uv:e[r].NewConfirmed,pv:e[r].TotalConfirmed-e[r].NewConfirmed}),a.push(t),t=[],n=!0);return a.map((function(e){return console.log(e)})),a}(n.Countries),r.a.createElement("div",null,e.map((function(e){return r.a.createElement("div",{id:"link1"},r.a.createElement("div",{className:"title is-3"},e[0].name[0]),r.a.createElement(u.b,{width:1500,height:300,data:e,margin:{top:20,right:30,left:20,bottom:5}},r.a.createElement(u.c,{strokeDasharray:"3 3"}),r.a.createElement(u.f,{dataKey:"name"}),r.a.createElement(u.g,null),r.a.createElement(u.e,null),r.a.createElement(u.d,null),r.a.createElement(u.a,{dataKey:"pv",stackId:"a",fill:"#8884d8"}),r.a.createElement(u.a,{dataKey:"uv",stackId:"a",fill:"#82ca9d"})))})))};return r.a.createElement("div",null,r.a.createElement(o,null),r.a.createElement(i,null))};n(345);Object(l.render)(r.a.createElement(o,null),document.querySelector("#content"))}},[[162,1,2]]]);
//# sourceMappingURL=main.a32dc626.chunk.js.map