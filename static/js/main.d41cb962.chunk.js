(this["webpackJsonpreact-d3js"]=this["webpackJsonpreact-d3js"]||[]).push([[0],{191:function(t,n,e){"use strict";e.r(n),n.default=e.p+"static/media/weather.2fe5c87c.csv"},192:function(t,n,e){"use strict";e.r(n);var r,c,a,o,i,s,l,b,u,j,d,f,O,h,m,p,g,x=e(0),v=e.n(x),k=e(25),y=e.n(k),w=e(4),R=e(5),z=e(16),P=e(7),C=e(211),S=e(1),q=R.b.ul(r||(r=Object(w.a)(["\n  padding: 2rem;\n\n  li {\n    margin-bottom: 2rem;\n\n    a {\n      font-size: 1.5rem;\n      font-weight: 700;\n    }\n  }\n"]))),E=function(){return Object(S.jsx)("div",{children:Object(S.jsxs)(q,{children:[Object(S.jsx)("li",{children:Object(S.jsx)(z.b,{to:"/axis",children:"Axis"})}),Object(S.jsx)("li",{children:Object(S.jsx)(z.b,{to:"/bar-chart",children:"Bar Chart"})}),Object(S.jsx)("li",{children:Object(S.jsx)(z.b,{to:"/bar-chart-sort",children:"Bar Chart Sort"})}),Object(S.jsx)("li",{children:Object(S.jsx)(z.b,{to:"/line-chart",children:"Link Chart"})}),Object(S.jsx)("li",{children:Object(S.jsx)(z.b,{to:"/csv-chart",children:"CSV Chart"})}),Object(S.jsx)("li",{children:Object(S.jsx)(z.b,{to:"/pie-chart",children:"Pie Chart"})})]})})},A=e(3),N=50,D=50,B=1e3-D-50,T=800-N-50,F=[1,2,3,4,5,6],I=R.b.section(c||(c=Object(w.a)(["\n  padding: 2rem;\n"]))),J=function(){var t=Object(x.useRef)(null),n=Object(x.useRef)(null);return Object(x.useEffect)((function(){var e=Object(A.k)().domain(Object(A.f)(F)).range([0,B]),r=Object(A.k)().domain(Object(A.f)(F)).range([T,0]);if(t.current){var c=Object(A.l)(t.current),a=Object(A.b)(e).tickPadding(10);c.call(a)}if(n.current){var o=Object(A.l)(n.current),i=Object(A.c)(r).tickPadding(10);o.call(i)}}),[]),Object(S.jsx)(I,{children:Object(S.jsxs)("svg",{width:1e3,height:800,children:[Object(S.jsx)("g",{ref:t,transform:"translate(".concat(D,",").concat(N+T,")")}),Object(S.jsx)("g",{ref:n,transform:"translate(".concat(D,",").concat(N,")")})]})})},L=e(28),M=50,V=50,G=1e3-V-50,H=800-M-50,K=Object(A.j)().domain(L.map((function(t){return t.product}))).range([0,G]).paddingInner(.3).paddingOuter(.3),Q=Object(A.k)().domain([0,Object(A.h)(L.map((function(t){return t.store})))]).range([H,0]),U=R.b.section(a||(a=Object(w.a)(["\n  padding: 2rem;\n"]))),W=R.b.g(o||(o=Object(w.a)(["\n  font-size: 1rem;\n"]))),X=function(){var t=Object(x.useRef)(null),n=Object(x.useRef)(null),e=Object(x.useRef)(null);return Object(x.useEffect)((function(){if(t.current){var r=Object(A.l)(t.current),c=Object(A.b)(K).tickPadding(10);r.call(c)}if(n.current){var a=Object(A.l)(n.current),o=Object(A.c)(Q).tickPadding(10);a.call(o)}e.current&&Object(A.l)(e.current).selectAll("rect").data(L).enter().append("rect").attr("x",(function(t){return K(t.product)})).attr("y",(function(t){return Q(t.store)})).attr("rx",2).attr("width",K.bandwidth).attr("height",(function(t){return H-Q(t.store)})).attr("fill",(function(t){return"".concat(t.color,"55")})).attr("stroke",(function(t){return t.color})).attr("stroke-width",3)}),[]),Object(S.jsx)(U,{children:Object(S.jsxs)("svg",{width:1e3,height:800,children:[Object(S.jsx)(W,{ref:t,transform:"translate(".concat(V,",").concat(M+H,")")}),Object(S.jsx)(W,{ref:n,transform:"translate(".concat(V,",").concat(M,")")}),Object(S.jsx)(W,{ref:e,transform:"translate(".concat(V,",").concat(M,")")})]})})},Y=e(37),Z=e(18),$=e(210),_=50,tt=50,nt=1e3-tt-50,et=800-_-50,rt=R.b.section(i||(i=Object(w.a)(["\n  padding: 2rem;\n"]))),ct=R.b.div(s||(s=Object(w.a)(["\n  button {\n    margin: 0 1rem;\n    text-transform: capitalize;\n  }\n"]))),at=R.b.g(l||(l=Object(w.a)(["\n  font-size: 1rem;\n"]))),ot=function(){var t=Object(x.useRef)(null),n=Object(x.useRef)(null),e=Object(x.useRef)(null),r=Object(x.useState)(L),c=Object(Z.a)(r,2),a=c[0],o=c[1],i=Object(A.j)().domain(a.map((function(t){return t.product}))).range([0,nt]).paddingInner(.3).paddingOuter(.3),s=Object(A.k)().domain([0,Object(A.h)(a.map((function(t){return t.store})))]).range([et,0]);Object(x.useEffect)((function(){if(t.current){var e=Object(A.l)(t.current),r=Object(A.b)(i).tickPadding(10);e.call(r)}if(n.current){var c=Object(A.l)(n.current),a=Object(A.c)(s).tickPadding(10);c.call(a)}}),[i,s]),Object(x.useEffect)((function(){if(e.current){var t=Object(A.l)(e.current).selectAll("rect").data(a,(function(t){return t.product}));t.enter().append("rect").attr("x",(function(t){return i(t.product)})).attr("y",et).attr("rx",2).attr("width",i.bandwidth).attr("height",0).transition().duration(1e3).attr("height",(function(t){return et-s(t.store)})).attr("y",(function(t){return s(t.store)})).attr("fill",(function(t){return"".concat(t.color,"55")})).attr("stroke",(function(t){return t.color})).attr("stroke-width",3),t.transition().duration(1e3).attr("x",(function(t){return i(t.product)})).attr("y",(function(t){return s(t.store)})).attr("height",(function(t){return et-s(t.store)})),t.exit().remove()}}),[i,s,a]);return Object(S.jsxs)(rt,{children:[Object(S.jsxs)(ct,{children:[Object(S.jsx)($.a,{variant:"contained",size:"large",color:"primary",onClick:function(){var t=a.sort((function(t,n){return n.store-t.store}));o(Object(Y.a)(t))},children:"Descending Data"}),Object(S.jsx)($.a,{variant:"contained",size:"large",color:"primary",onClick:function(){var t=a.sort((function(t,n){return t.store-n.store}));o(Object(Y.a)(t))},children:"Ascending Data"}),Object(S.jsx)($.a,{variant:"contained",size:"large",color:"primary",onClick:function(){var t=a.sort((function(){return Math.random()-.5}));o(Object(Y.a)(t))},children:"Random Data"})]}),Object(S.jsxs)("svg",{width:1e3,height:800,children:[Object(S.jsx)(at,{ref:t,transform:"translate(".concat(tt,",").concat(_+et,")")}),Object(S.jsx)(at,{ref:n,transform:"translate(".concat(tt,",").concat(_,")")}),Object(S.jsx)(at,{ref:e,transform:"translate(".concat(tt,",").concat(_,")")})]})]})},it=50,st=50,lt=1e3-st-50,bt=800-it-50,ut=[0,1,2,3,4,5,6,7,8,9,10],jt=R.b.section(b||(b=Object(w.a)(["\n  padding: 2rem;\n"]))),dt=function(){var t=Object(x.useRef)(null),n=Object(x.useRef)(null),e=Object(x.useRef)(null);return Object(x.useEffect)((function(){var r=Object(A.k)().domain(Object(A.f)(ut)).range([0,lt]),c=Object(A.k)().domain(Object(A.f)(ut)).range([bt,0]);if(t.current){var a=Object(A.l)(t.current),o=Object(A.b)(r).tickPadding(10);a.call(o)}if(n.current){var i=Object(A.l)(n.current),s=Object(A.c)(c).tickPadding(10);i.call(s)}if(e.current){var l=Object(A.l)(e.current),b=Object(A.g)().x((function(t){return r(t)})).y((function(t){return c(t)}));l.select("path").empty()&&l.append("path").datum(ut).attr("d",b).attr("fill","none").attr("stroke","#ccc").attr("stroke-width",3)}}),[]),Object(S.jsx)(jt,{children:Object(S.jsxs)("svg",{width:1e3,height:800,children:[Object(S.jsx)("g",{ref:t,transform:"translate(".concat(st,",").concat(it+bt,")")}),Object(S.jsx)("g",{ref:n,transform:"translate(".concat(st,",").concat(it,")")}),Object(S.jsx)("g",{ref:e,transform:"translate(".concat(st,",").concat(it,")")})]})})},ft=e(19),Ot=e.n(ft),ht=e(70),mt=80,pt=80,gt=1100-pt-80,xt=800-mt-80,vt=R.b.section(u||(u=Object(w.a)(["\n  padding: 1rem;\n"]))),kt=R.b.g(j||(j=Object(w.a)(["\n  font-size: 0.8rem;\n"]))),yt=R.b.g(d||(d=Object(w.a)(["\n  color: #ffa200;\n  font-size: 1rem;\n"]))),wt=R.b.g(f||(f=Object(w.a)(["\n  color: #2196f3;\n  font-size: 1rem;\n"]))),Rt=function(){var t=Object(x.useState)([]),n=Object(Z.a)(t,2),r=n[0],c=n[1],a=Object(x.useRef)(null),o=Object(x.useRef)(null),i=Object(x.useRef)(null),s=Object(x.useRef)(null),l=Object(x.useRef)(null);return Object(x.useEffect)((function(){Object(ht.a)(Ot.a.mark((function t(){var n,r,a,o;return Ot.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(A.e)(e(191).default);case 2:for(n=t.sent,r=[],a=1;a<=12;a+=1)o={time:new Date(2020,Number(n[a]["\u89c0\u6e2c\u6642\u9593(month)"])-1),temperature:Number(n[a]["\u6c23\u6eab(\u2103)"]),rain:Number(n[a]["\u964d\u6c34\u91cf(mm)"])},r.push(o);c(r);case 6:case"end":return t.stop()}}),t)})))()}),[]),Object(x.useEffect)((function(){var t=Object(A.h)(r.map((function(t){return t.temperature}))),n=Object(A.h)(r.map((function(t){return t.rain})));if(void 0!==t&&void 0!==n){var e=Object(A.m)("%B"),c=Object(A.j)().domain(r.map((function(t){return e(t.time)}))).range([0,gt]),b=Object(A.k)().domain([0,t]).range([xt,0]).nice(),u=Object(A.k)().domain([0,2*n]).range([xt,0]).nice();if(a.current){var j=Object(A.l)(a.current),d=Object(A.b)(c).tickPadding(10);j.call(d)}if(o.current){var f=Object(A.l)(o.current),O=Object(A.c)(b).tickPadding(10).tickFormat((function(t){return t===b.domain()[1]?"".concat(t,"\u2103"):t.toString()}));f.call(O)}if(i.current){var h=Object(A.l)(i.current),m=Object(A.d)(u).tickPadding(10).tickFormat((function(t){return t===u.domain()[1]?"".concat(t,"mm"):t.toString()}));h.call(m)}var p=Object(A.g)().x((function(t){return c(e(t.time))+c.bandwidth()/2})).y((function(t){return b(t.temperature)})),g=Object(A.l)(s.current);g.select("path").empty()&&g.append("path").datum(r).attr("d",p).attr("stroke-dasharray",(function(){return g.select("path").node().getTotalLength()})).attr("stroke-dashoffset",g.select("path").node().getTotalLength()).transition().duration(1e3).attr("fill","none").attr("stroke","#ffa200").attr("stroke-width",2).attr("stroke-dashoffset",0),Object(A.l)(l.current).selectAll("rect").data(r).enter().append("rect").attr("x",(function(t){return c(e(t.time))+c.bandwidth()/4})).attr("y",xt).attr("width",c.bandwidth()/2).attr("height",0).transition().duration(1e3).attr("height",(function(t){return xt-u(t.rain)})).attr("y",(function(t){return u(t.rain)})).attr("fill","#2196f3")}}),[r]),Object(S.jsx)(vt,{children:Object(S.jsxs)("svg",{width:1100,height:800,children:[Object(S.jsx)(kt,{ref:a,transform:"translate(".concat(pt,",").concat(mt+xt,")")}),Object(S.jsx)(yt,{ref:o,transform:"translate(".concat(pt,",").concat(mt,")")}),Object(S.jsx)(wt,{ref:i,transform:"translate(".concat(gt+pt,",").concat(mt,")")}),Object(S.jsx)("g",{ref:s,transform:"translate(".concat(pt,",").concat(mt,")")}),Object(S.jsx)("g",{ref:l,transform:"translate(".concat(pt,",").concat(mt,")")})]})})},zt=50,Pt=[{product:"apple",store:10,color:"#f44336"},{product:"orange",store:10,color:"#ff9800"},{product:"banana",store:10,color:"#fdd835"},{product:"lemon",store:10,color:"#4caf50"},{product:"blueberry",store:10,color:"#2196f3"},{product:"cherry",store:10,color:"#3f51b5"},{product:"grape",store:10,color:"#673ab7"}],Ct=R.b.section(O||(O=Object(w.a)(["\n  padding: 2rem;\n"]))),St=function(){var t=Object(x.useRef)(null);return Object(x.useEffect)((function(){var n=Object(A.a)().innerRadius(0).outerRadius(300-zt),e=Object(A.i)().value((function(t){return t.store}));Object(A.l)(t.current).selectAll("path").data(e(Pt)).enter().append("path").attr("d",n).attr("fill",(function(t){return t.data.color}))}),[]),Object(S.jsx)(Ct,{children:Object(S.jsx)("svg",{width:600,height:600,children:Object(S.jsx)("g",{ref:t,transform:"translate(".concat(300,",").concat(300,")")})})})},qt=R.b.header(h||(h=Object(w.a)(["\n  height: 60px;\n  border-bottom: 1px solid #ccc;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),Et=R.b.section(m||(m=Object(w.a)(["\n  min-height: calc(100vh - 60px);\n"]))),At=R.b.footer(p||(p=Object(w.a)(["\n  font-size: 0.8rem;\n  padding: 1rem;\n  text-align: center;\n\n  p {\n    margin-bottom: 0.5rem;\n  }\n"]))),Nt=function(){return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(qt,{children:Object(S.jsx)(z.b,{to:"/",children:Object(S.jsx)(C.a,{fontSize:"large",color:"primary"})})}),Object(S.jsx)(Et,{children:Object(S.jsxs)(P.c,{children:[Object(S.jsx)(P.a,{exact:!0,path:"/",component:E}),Object(S.jsx)(P.a,{path:"/axis",component:J}),Object(S.jsx)(P.a,{path:"/bar-chart",component:X}),Object(S.jsx)(P.a,{path:"/bar-chart-sort",component:ot}),Object(S.jsx)(P.a,{path:"/line-chart",component:dt}),Object(S.jsx)(P.a,{path:"/csv-chart",component:Rt}),Object(S.jsx)(P.a,{path:"/pie-chart",component:St})]})}),Object(S.jsxs)(At,{children:[Object(S.jsx)("p",{children:"\u7a0b\u5f0f\u7df4\u7fd2\u6e2c\u8a66\u7528\uff0c\u4efb\u4f55\u8cc7\u6599\u7121\u4efb\u4f55\u5546\u696d\u884c\u70ba"}),Object(S.jsx)("p",{children:"only from programming test, no commercial use"})]})]})},Dt=Object(R.a)(g||(g=Object(w.a)(["\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n// =========================================\n\nhtml,\nbody {\n  color: #3f3f3f;\n  font-family: 'Noto Sans TC';\n}\n\n#app {\n  overflow: hidden;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbutton{\n  font-family:  'Noto Sans TC';\n}\n\n"])));y.a.render(Object(S.jsx)(v.a.StrictMode,{children:Object(S.jsxs)(z.a,{children:[Object(S.jsx)(Dt,{}),Object(S.jsx)(Nt,{})]})}),document.getElementById("root"))},28:function(t){t.exports=JSON.parse('[{"product":"apple","store":10,"color":"#f44336"},{"product":"orange","store":20,"color":"#ff9800"},{"product":"banana","store":30,"color":"#fdd835"},{"product":"lemon","store":40,"color":"#4caf50"},{"product":"blueberry","store":50,"color":"#2196f3"},{"product":"cherry","store":60,"color":"#3f51b5"},{"product":"grape","store":70,"color":"#673ab7"}]')}},[[192,1,2]]]);
//# sourceMappingURL=main.d41cb962.chunk.js.map