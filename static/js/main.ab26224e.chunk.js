(this["webpackJsonpWeb-API"]=this["webpackJsonpWeb-API"]||[]).push([[0],{163:function(e,t,n){e.exports=n(346)},346:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(46),c=n(134),i=n(125),o=n.n(i),m=n(12),s=function(){var e=Object(a.useState)(null),t=Object(c.a)(e,2),n=t[0],l=t[1];Object(a.useEffect)((function(){fetch("https://api.covid19api.com/summary").then((function(e){return e.json()})).then((function(e){l(e)}))}),[]);var i=function(){return r.a.createElement("div",null,r.a.createElement("section",{class:"hero is-dark"},r.a.createElement("div",{class:"hero-body"},r.a.createElement("div",{class:"container"},r.a.createElement("h1",{class:"title"},"\u5404\u56fd\u306e\u4eca\u307e\u3067\u306e\u30b3\u30ed\u30ca\u30a6\u30a4\u30eb\u30b9\u611f\u67d3\u8005\u306e\u5408\u8a08\u3068\u65b0\u898f\u611f\u67d3\u8005\u6570")))))},s=function(){var e=[];null==n?console.log("loading..."):e=function(e){for(var t=[],n=!0,a=[],r=0;r<e.length-1;r++)e[r].Country[0]!==e[r+1].Country[0]&&(n=!1),n?t.push({name:e[r].Country,NewConfirmed:e[r].NewConfirmed,Confirmed_by_Yesterday:e[r].TotalConfirmed-e[r].NewConfirmed}):(t.push({name:e[r].Country,NewConfirmed:e[r].NewConfirmed,Confirmed_by_Yesterday:e[r].TotalConfirmed-e[r].NewConfirmed}),a.push(t),t=[],n=!0);return a.map((function(e){return console.log(e)})),a}(n.Countries);var t={display:"inline-block",_display:"inline"},a={float:"right"},l=new Date;return r.a.createElement("div",null,r.a.createElement("p",{style:a},"\u3053\u306e\u30c7\u30fc\u30bf\u306f",r.a.createElement("a",{href:"https://covid19api.com/"},"\u3053\u3061\u3089"),"\u3088\u308a"),r.a.createElement("p",{className:"title is-4"},"\u5404\u56fd\u306e\u30a2\u30eb\u30d5\u30a1\u30d9\u30c3\u30c8\u306e\u5148\u982d\u306e\u6587\u5b57"),e.map((function(e){return r.a.createElement("div",{style:t,className:"is-size-5"},r.a.createElement(o.a,{href:"#link"+e[0].name[0],offset:"50"},e[0].name[0]),"/")})),r.a.createElement("p",{style:a},l.getMonth()+1,"\u6708",l.getDate(),"\u65e5\u73fe\u5728"),e.map((function(e){return r.a.createElement("div",{id:"link"+e[0].name[0]},r.a.createElement("div",{className:"title is-3"},e[0].name[0]),r.a.createElement(m.b,{width:1500,height:300,data:e,margin:{top:20,right:30,left:20,bottom:5}},r.a.createElement(m.c,{strokeDasharray:"3 3"}),r.a.createElement(m.f,{dataKey:"name"}),r.a.createElement(m.g,null),r.a.createElement(m.e,null),r.a.createElement(m.d,null),r.a.createElement(m.a,{dataKey:"Confirmed_by_Yesterday",fill:"#8884d8"}),r.a.createElement(m.a,{dataKey:"NewConfirmed",fill:"#82ca9d"})))})))};return r.a.createElement("div",null,r.a.createElement(i,null),r.a.createElement(s,null))};n(345);Object(l.render)(r.a.createElement(s,null),document.querySelector("#content"))}},[[163,1,2]]]);
//# sourceMappingURL=main.ab26224e.chunk.js.map