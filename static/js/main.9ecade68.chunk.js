(this["webpackJsonpreact-d3js"]=this["webpackJsonpreact-d3js"]||[]).push([[0],{195:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/weather.2fe5c87c.csv"},196:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/finance-week.574c7f5c.csv"},197:function(t,e,n){"use strict";n.r(e);var r,c,a,o,i,s,l,b,u,j,d,f,O,h,p,m,g,x,v,k=n(0),w=n.n(k),y=n(25),R=n.n(y),z=n(4),C=n(5),P=n(16),E=n(7),S=n(216),N=n.p+"static/media/axis.49f53675.jpg",q=n.p+"static/media/bar-chart.cf18e6e8.jpg",A=n.p+"static/media/bar-chart-sort.fe5e97f3.jpg",D=n.p+"static/media/line-chart.bb605b5e.jpg",B=n.p+"static/media/csv-chart.8c6d0089.jpg",F=n.p+"static/media/pie-chart.2f66251a.jpg",L=n.p+"static/media/candlestick-chart.a69fe347.jpg",T=n(1),_=C.b.ul(r||(r=Object(z.a)(["\n  padding: 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-flow: row wrap;\n  max-width: 1400px;\n  margin: 0 auto;\n\n  li {\n    flex: 0 1 300px;\n    margin: 1.5rem 1rem;\n    border-radius: 4px;\n    border: 1px solid #e0e0e0;\n    padding: 1rem;\n  }\n\n  a {\n    width: 100%;\n    height: 100%;\n    display: inline-block;\n    font-size: 1.5rem;\n    font-weight: 700;\n    text-decoration: none;\n  }\n\n  img {\n    width: 100%;\n    height: 200px;\n    object-fit: contain;\n    margin-bottom: 1rem;\n  }\n\n  h3 {\n    text-align: center;\n    margin-bottom: 0.5rem;\n  }\n"]))),I=function(){return Object(T.jsx)("div",{children:Object(T.jsxs)(_,{children:[Object(T.jsx)("li",{children:Object(T.jsxs)(P.b,{to:"/axis",children:[Object(T.jsx)("img",{src:N,alt:"screenshot"}),Object(T.jsx)("h3",{children:"Axis"})]})}),Object(T.jsx)("li",{children:Object(T.jsxs)(P.b,{to:"/bar-chart",children:[Object(T.jsx)("img",{src:q,alt:"screenshot"}),Object(T.jsx)("h3",{children:"Bar Chart"})]})}),Object(T.jsx)("li",{children:Object(T.jsxs)(P.b,{to:"/bar-chart-sort",children:[Object(T.jsx)("img",{src:A,alt:"screenshot"}),Object(T.jsx)("h3",{children:"Bar Chart Sort"})]})}),Object(T.jsx)("li",{children:Object(T.jsxs)(P.b,{to:"/line-chart",children:[Object(T.jsx)("img",{src:D,alt:"screenshot"}),Object(T.jsx)("h3",{children:"Line Chart"})]})}),Object(T.jsx)("li",{children:Object(T.jsxs)(P.b,{to:"/csv-chart",children:[Object(T.jsx)("img",{src:B,alt:"screenshot"}),Object(T.jsx)("h3",{children:"CSV Chart"})]})}),Object(T.jsx)("li",{children:Object(T.jsxs)(P.b,{to:"/pie-chart",children:[Object(T.jsx)("img",{src:F,alt:"screenshot"}),Object(T.jsx)("h3",{children:"Pie Chart"})]})}),Object(T.jsx)("li",{children:Object(T.jsxs)(P.b,{to:"/candlestick-chart",children:[Object(T.jsx)("img",{src:L,alt:"screenshot"}),Object(T.jsx)("h3",{children:"Candlestick Chart"})]})})]})})},J=n(3),M=50,H=50,V=1e3-H-50,Y=800-M-50,G=[1,2,3,4,5,6],K=C.b.section(c||(c=Object(z.a)(["\n  padding: 2rem;\n"]))),Q=function(){var t=Object(k.useRef)(null),e=Object(k.useRef)(null);return Object(k.useEffect)((function(){var n=Object(J.m)().domain(Object(J.f)(G)).range([0,V]),r=Object(J.m)().domain(Object(J.f)(G)).range([Y,0]);if(t.current){var c=Object(J.n)(t.current),a=Object(J.b)(n).tickPadding(10);c.call(a)}if(e.current){var o=Object(J.n)(e.current),i=Object(J.c)(r).tickPadding(10);o.call(i)}}),[]),Object(T.jsx)(K,{children:Object(T.jsxs)("svg",{width:1e3,height:800,children:[Object(T.jsx)("g",{ref:t,transform:"translate(".concat(H,",").concat(M+Y,")")}),Object(T.jsx)("g",{ref:e,transform:"translate(".concat(H,",").concat(M,")")})]})})},U=n(28),W=50,X=50,Z=1e3-X-50,$=800-W-50,tt=Object(J.l)().domain(U.map((function(t){return t.product}))).range([0,Z]).paddingInner(.3).paddingOuter(.3),et=Object(J.m)().domain([0,Object(J.h)(U.map((function(t){return t.store})))]).range([$,0]),nt=C.b.section(a||(a=Object(z.a)(["\n  padding: 2rem;\n"]))),rt=C.b.g(o||(o=Object(z.a)(["\n  font-size: 1rem;\n"]))),ct=function(){var t=Object(k.useRef)(null),e=Object(k.useRef)(null),n=Object(k.useRef)(null);return Object(k.useEffect)((function(){if(t.current){var r=Object(J.n)(t.current),c=Object(J.b)(tt).tickPadding(10);r.call(c)}if(e.current){var a=Object(J.n)(e.current),o=Object(J.c)(et).tickPadding(10);a.call(o)}n.current&&Object(J.n)(n.current).selectAll("rect").data(U).enter().append("rect").attr("x",(function(t){return tt(t.product)})).attr("y",(function(t){return et(t.store)})).attr("rx",2).attr("width",tt.bandwidth).attr("height",(function(t){return $-et(t.store)})).attr("fill",(function(t){return"".concat(t.color,"55")})).attr("stroke",(function(t){return t.color})).attr("stroke-width",3)}),[]),Object(T.jsx)(nt,{children:Object(T.jsxs)("svg",{width:1e3,height:800,children:[Object(T.jsx)(rt,{ref:t,transform:"translate(".concat(X,",").concat(W+$,")")}),Object(T.jsx)(rt,{ref:e,transform:"translate(".concat(X,",").concat(W,")")}),Object(T.jsx)(rt,{ref:n,transform:"translate(".concat(X,",").concat(W,")")})]})})},at=n(38),ot=n(18),it=n(215),st=50,lt=50,bt=1e3-lt-50,ut=800-st-50,jt=C.b.section(i||(i=Object(z.a)(["\n  padding: 2rem;\n"]))),dt=C.b.div(s||(s=Object(z.a)(["\n  button {\n    margin: 0 1rem;\n    text-transform: capitalize;\n  }\n"]))),ft=C.b.g(l||(l=Object(z.a)(["\n  font-size: 1rem;\n"]))),Ot=function(){var t=Object(k.useRef)(null),e=Object(k.useRef)(null),n=Object(k.useRef)(null),r=Object(k.useState)(U),c=Object(ot.a)(r,2),a=c[0],o=c[1],i=Object(J.l)().domain(a.map((function(t){return t.product}))).range([0,bt]).paddingInner(.3).paddingOuter(.3),s=Object(J.m)().domain([0,Object(J.h)(a.map((function(t){return t.store})))]).range([ut,0]);Object(k.useEffect)((function(){if(t.current){var n=Object(J.n)(t.current),r=Object(J.b)(i).tickPadding(10);n.call(r)}if(e.current){var c=Object(J.n)(e.current),a=Object(J.c)(s).tickPadding(10);c.call(a)}}),[i,s]),Object(k.useEffect)((function(){if(n.current){var t=Object(J.n)(n.current).selectAll("rect").data(a,(function(t){return t.product}));t.enter().append("rect").attr("x",(function(t){return i(t.product)})).attr("y",ut).attr("rx",2).attr("width",i.bandwidth).attr("height",0).transition().duration(1e3).attr("height",(function(t){return ut-s(t.store)})).attr("y",(function(t){return s(t.store)})).attr("fill",(function(t){return"".concat(t.color,"55")})).attr("stroke",(function(t){return t.color})).attr("stroke-width",3),t.transition().duration(1e3).attr("x",(function(t){return i(t.product)})).attr("y",(function(t){return s(t.store)})).attr("height",(function(t){return ut-s(t.store)})),t.exit().remove()}}),[i,s,a]);return Object(T.jsxs)(jt,{children:[Object(T.jsxs)(dt,{children:[Object(T.jsx)(it.a,{variant:"contained",size:"large",color:"primary",onClick:function(){var t=a.sort((function(t,e){return e.store-t.store}));o(Object(at.a)(t))},children:"Descending Data"}),Object(T.jsx)(it.a,{variant:"contained",size:"large",color:"primary",onClick:function(){var t=a.sort((function(t,e){return t.store-e.store}));o(Object(at.a)(t))},children:"Ascending Data"}),Object(T.jsx)(it.a,{variant:"contained",size:"large",color:"primary",onClick:function(){var t=a.sort((function(){return Math.random()-.5}));o(Object(at.a)(t))},children:"Random Data"})]}),Object(T.jsxs)("svg",{width:1e3,height:800,children:[Object(T.jsx)(ft,{ref:t,transform:"translate(".concat(lt,",").concat(st+ut,")")}),Object(T.jsx)(ft,{ref:e,transform:"translate(".concat(lt,",").concat(st,")")}),Object(T.jsx)(ft,{ref:n,transform:"translate(".concat(lt,",").concat(st,")")})]})]})},ht=50,pt=50,mt=1e3-pt-50,gt=800-ht-50,xt=[0,1,2,3,4,5,6,7,8,9,10],vt=C.b.section(b||(b=Object(z.a)(["\n  padding: 2rem;\n"]))),kt=function(){var t=Object(k.useRef)(null),e=Object(k.useRef)(null),n=Object(k.useRef)(null);return Object(k.useEffect)((function(){var r=Object(J.m)().domain(Object(J.f)(xt)).range([0,mt]),c=Object(J.m)().domain(Object(J.f)(xt)).range([gt,0]);if(t.current){var a=Object(J.n)(t.current),o=Object(J.b)(r).tickPadding(10);a.call(o)}if(e.current){var i=Object(J.n)(e.current),s=Object(J.c)(c).tickPadding(10);i.call(s)}if(n.current){var l=Object(J.n)(n.current),b=Object(J.g)().x((function(t){return r(t)})).y((function(t){return c(t)}));l.select("path").empty()&&l.append("path").datum(xt).attr("d",b).attr("fill","none").attr("stroke","#ccc").attr("stroke-width",3)}}),[]),Object(T.jsx)(vt,{children:Object(T.jsxs)("svg",{width:1e3,height:800,children:[Object(T.jsx)("g",{ref:t,transform:"translate(".concat(pt,",").concat(ht+gt,")")}),Object(T.jsx)("g",{ref:e,transform:"translate(".concat(pt,",").concat(ht,")")}),Object(T.jsx)("g",{ref:n,transform:"translate(".concat(pt,",").concat(ht,")")})]})})},wt=n(15),yt=n.n(wt),Rt=n(37),zt=80,Ct=80,Pt=1100-Ct-80,Et=800-zt-80,St=C.b.section(u||(u=Object(z.a)(["\n  padding: 1rem;\n"]))),Nt=C.b.g(j||(j=Object(z.a)(["\n  font-size: 0.8rem;\n"]))),qt=C.b.g(d||(d=Object(z.a)(["\n  color: #ffa200;\n  font-size: 1rem;\n"]))),At=C.b.g(f||(f=Object(z.a)(["\n  color: #2196f3;\n  font-size: 1rem;\n"]))),Dt=function(){var t=Object(k.useState)([]),e=Object(ot.a)(t,2),r=e[0],c=e[1],a=Object(k.useRef)(null),o=Object(k.useRef)(null),i=Object(k.useRef)(null),s=Object(k.useRef)(null),l=Object(k.useRef)(null);return Object(k.useEffect)((function(){Object(Rt.a)(yt.a.mark((function t(){var e,r,a,o;return yt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(J.e)(n(195).default);case 2:for(e=t.sent,r=[],a=1;a<=12;a+=1)o={time:new Date(2020,Number(e[a]["\u89c0\u6e2c\u6642\u9593(month)"])-1),temperature:Number(e[a]["\u6c23\u6eab(\u2103)"]),rain:Number(e[a]["\u964d\u6c34\u91cf(mm)"])},r.push(o);c(r);case 6:case"end":return t.stop()}}),t)})))()}),[]),Object(k.useEffect)((function(){var t=Object(J.h)(r.map((function(t){return t.temperature}))),e=Object(J.h)(r.map((function(t){return t.rain})));if(void 0!==t&&void 0!==e){var n=Object(J.o)("%B"),c=Object(J.l)().domain(r.map((function(t){return n(t.time)}))).range([0,Pt]),b=Object(J.m)().domain([0,t]).range([Et,0]).nice(),u=Object(J.m)().domain([0,2*e]).range([Et,0]).nice();if(a.current){var j=Object(J.n)(a.current),d=Object(J.b)(c).tickPadding(10);j.call(d)}if(o.current){var f=Object(J.n)(o.current),O=Object(J.c)(b).tickPadding(10).tickFormat((function(t){return t===b.domain()[1]?"".concat(t,"\u2103"):t.toString()}));f.call(O)}if(i.current){var h=Object(J.n)(i.current),p=Object(J.d)(u).tickPadding(10).tickFormat((function(t){return t===u.domain()[1]?"".concat(t,"mm"):t.toString()}));h.call(p)}var m=Object(J.g)().x((function(t){return c(n(t.time))+c.bandwidth()/2})).y((function(t){return b(t.temperature)})),g=Object(J.n)(s.current);g.select("path").empty()&&g.append("path").datum(r).attr("d",m).attr("stroke-dasharray",(function(){return g.select("path").node().getTotalLength()})).attr("stroke-dashoffset",g.select("path").node().getTotalLength()).transition().duration(1e3).attr("fill","none").attr("stroke","#ffa200").attr("stroke-width",2).attr("stroke-dashoffset",0),Object(J.n)(l.current).selectAll("rect").data(r).enter().append("rect").attr("x",(function(t){return c(n(t.time))+c.bandwidth()/4})).attr("y",Et).attr("width",c.bandwidth()/2).attr("height",0).transition().duration(1e3).attr("height",(function(t){return Et-u(t.rain)})).attr("y",(function(t){return u(t.rain)})).attr("fill","#2196f3")}}),[r]),Object(T.jsx)(St,{children:Object(T.jsxs)("svg",{width:1100,height:800,children:[Object(T.jsx)(Nt,{ref:a,transform:"translate(".concat(Ct,",").concat(zt+Et,")")}),Object(T.jsx)(qt,{ref:o,transform:"translate(".concat(Ct,",").concat(zt,")")}),Object(T.jsx)(At,{ref:i,transform:"translate(".concat(Pt+Ct,",").concat(zt,")")}),Object(T.jsx)("g",{ref:s,transform:"translate(".concat(Ct,",").concat(zt,")")}),Object(T.jsx)("g",{ref:l,transform:"translate(".concat(Ct,",").concat(zt,")")})]})})},Bt=50,Ft=[{product:"apple",store:10,color:"#f44336"},{product:"orange",store:10,color:"#ff9800"},{product:"banana",store:10,color:"#fdd835"},{product:"lemon",store:10,color:"#4caf50"},{product:"blueberry",store:10,color:"#2196f3"},{product:"cherry",store:10,color:"#3f51b5"},{product:"grape",store:10,color:"#673ab7"}],Lt=C.b.section(O||(O=Object(z.a)(["\n  padding: 2rem;\n"]))),Tt=function(){var t=Object(k.useRef)(null);return Object(k.useEffect)((function(){var e=Object(J.a)().innerRadius(0).outerRadius(300-Bt),n=Object(J.j)().value((function(t){return t.store}));Object(J.n)(t.current).selectAll("path").data(n(Ft)).enter().append("path").attr("d",e).attr("fill",(function(t){return t.data.color}))}),[]),Object(T.jsx)(Lt,{children:Object(T.jsx)("svg",{width:600,height:600,children:Object(T.jsx)("g",{ref:t,transform:"translate(".concat(300,",").concat(300,")")})})})},_t=80,It=80,Jt=1500-It-80,Mt=800-_t-80,Ht=C.b.section(h||(h=Object(z.a)(["\n  padding: 2rem;\n"]))),Vt=C.b.svg(p||(p=Object(z.a)(["\n  g {\n    font-size: 1rem;\n  }\n"]))),Yt=Object(J.p)("%Y-%m-%d"),Gt=Object(J.o)("%m/%d"),Kt=function(){var t=Object(k.useRef)(null),e=Object(k.useRef)(null),r=Object(k.useRef)(null),c=Object(k.useRef)(null),a=Object(k.useRef)(null),o=Object(k.useRef)(null),i=Object(k.useRef)(null),s=Object(k.useState)([]),l=Object(ot.a)(s,2),b=l[0],u=l[1];return Object(k.useEffect)((function(){Object(Rt.a)(yt.a.mark((function t(){var e,r;return yt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(J.e)(n(196).default);case 2:e=t.sent,r=[],e.forEach((function(t){t.Open&&r.push({date:Yt(t.Date),open:Number(t.Open),close:Number(t.Close),high:Number(t.High),low:Number(t.Low)})})),u(r);case 6:case"end":return t.stop()}}),t)})))()}),[]),Object(k.useEffect)((function(){if(0!==b.length){var t=Object(J.h)(b.map((function(t){return t.high})))+5,n=Object(J.i)(b.map((function(t){return t.low})))-5,s=Object(J.l)().domain(b.map((function(t){return Gt(t.date)}))).range([0,Jt]),l=Object(J.m)().domain([n,t]).range([Mt,0]).nice();if(e.current){var u=Object(J.n)(e.current),j=Object(J.b)(s).tickPadding(10);u.call(j)}if(r.current){var d=Object(J.n)(r.current),f=Object(J.d)(l).tickPadding(10);d.call(f)}if(c.current)Object(J.n)(c.current).selectAll("line").data(b).enter().append("line").attr("x1",(function(t){return s(Gt(t.date))+s.bandwidth()/2})).attr("x2",(function(t){return s(Gt(t.date))+s.bandwidth()/2})).attr("y1",(function(t){return l(t.high)})).attr("y2",(function(t){return l(t.low)})).attr("stroke",(function(t){return t.open===t.close?"#666":t.open>t.close?"#198754":"#dc3545"})).attr("stroke-width",2);if(a.current)Object(J.n)(a.current).selectAll("line").data(b).enter().append("line").attr("x1",(function(t){return t.close===t.open?s(Gt(t.date))+s.bandwidth()/2-20:s(Gt(t.date))+s.bandwidth()/2})).attr("x2",(function(t){return t.close===t.open?s(Gt(t.date))+s.bandwidth()/2+20:s(Gt(t.date))+s.bandwidth()/2})).attr("y1",(function(t){return t.close===t.open?l(t.low)+(l(t.high)-l(t.low))/2:t.close>t.open?l(t.close):l(t.open)})).attr("y2",(function(t){return t.close===t.open?l(t.low)+(l(t.high)-l(t.low))/2:t.close>t.open?l(t.open):l(t.close)})).attr("stroke",(function(t){return t.open===t.close?"#666":t.open>t.close?"#198754":"#dc3545"})).attr("stroke-width",(function(t){return t.close===t.open?2:20}));if(o.current){var O=Object(J.n)(i.current),h=Object(J.n)(o.current);h.append("line").attr("id","verticle_line").attr("y1",0).attr("y2",Mt).attr("stroke","transparent").attr("stroke-width",2).attr("stroke-dasharray",10),h.append("line").attr("id","horizontal_line").attr("x1",0).attr("x2",Jt).attr("stroke","transparent").attr("stroke-width",2).attr("stroke-dasharray",10),h.append("text").attr("id","value").attr("fill","transparent");var p=Object(J.n)("#verticle_line"),m=Object(J.n)("#horizontal_line"),g=Object(J.n)("#value");O.on("mousemove touchmove",(function(t){p.attr("x1",Object(J.k)(t)[0]).attr("x2",Object(J.k)(t)[0]).attr("stroke","#aaa"),m.attr("y1",Object(J.k)(t)[1]).attr("y2",Object(J.k)(t)[1]).attr("stroke","#aaa"),g.attr("x",-55).attr("y",Object(J.k)(t)[1]+5).attr("fill","#333").text(l.invert(Object(J.k)(t)[1]).toFixed(2))})).on("mouseleave touchend",(function(){p.attr("stroke","transparent"),m.attr("stroke","transparent")}))}}}),[b]),Object(T.jsx)(Ht,{children:Object(T.jsxs)(Vt,{ref:t,width:1500,height:800,children:[Object(T.jsx)("g",{ref:e,transform:"translate(".concat(It,",").concat(_t+Mt,")")}),Object(T.jsx)("g",{ref:r,transform:"translate(".concat(It+Jt,",").concat(_t,")")}),Object(T.jsx)("g",{ref:c,transform:"translate(".concat(It,",").concat(_t,")")}),Object(T.jsx)("g",{ref:a,transform:"translate(".concat(It,",").concat(_t,")")}),Object(T.jsx)("g",{ref:o,transform:"translate(".concat(It,",").concat(_t,")")}),Object(T.jsx)("rect",{ref:i,transform:"translate(".concat(It,",").concat(_t,")"),width:Jt,height:Mt,fill:"transparent"})]})})},Qt=C.b.header(m||(m=Object(z.a)(["\n  height: 60px;\n  border-bottom: 1px solid #ccc;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),Ut=C.b.section(g||(g=Object(z.a)(["\n  min-height: calc(100vh - 60px);\n"]))),Wt=C.b.footer(x||(x=Object(z.a)(["\n  font-size: 0.8rem;\n  padding: 1rem;\n  text-align: center;\n\n  p {\n    margin-bottom: 0.5rem;\n  }\n"]))),Xt=function(){return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(Qt,{children:Object(T.jsx)(P.b,{to:"/",children:Object(T.jsx)(S.a,{fontSize:"large",color:"primary"})})}),Object(T.jsx)(Ut,{children:Object(T.jsxs)(E.c,{children:[Object(T.jsx)(E.a,{exact:!0,path:"/",component:I}),Object(T.jsx)(E.a,{path:"/axis",component:Q}),Object(T.jsx)(E.a,{path:"/bar-chart",component:ct}),Object(T.jsx)(E.a,{path:"/bar-chart-sort",component:Ot}),Object(T.jsx)(E.a,{path:"/line-chart",component:kt}),Object(T.jsx)(E.a,{path:"/csv-chart",component:Dt}),Object(T.jsx)(E.a,{path:"/pie-chart",component:Tt}),Object(T.jsx)(E.a,{path:"/candlestick-chart",component:Kt})]})}),Object(T.jsxs)(Wt,{children:[Object(T.jsx)("p",{children:"\u7a0b\u5f0f\u7df4\u7fd2\u6e2c\u8a66\u7528\uff0c\u4efb\u4f55\u8cc7\u6599\u7121\u4efb\u4f55\u5546\u696d\u884c\u70ba"}),Object(T.jsx)("p",{children:"only from programming test, no commercial use"})]})]})},Zt=Object(C.a)(v||(v=Object(z.a)(["\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n// =========================================\n\nhtml,\nbody {\n  color: #3f3f3f;\n  font-family: 'Noto Sans TC';\n}\n\n#app {\n  overflow: hidden;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbutton{\n  font-family:  'Noto Sans TC';\n}\n\n"])));R.a.render(Object(T.jsx)(w.a.StrictMode,{children:Object(T.jsxs)(P.a,{children:[Object(T.jsx)(Zt,{}),Object(T.jsx)(Xt,{})]})}),document.getElementById("root"))},28:function(t){t.exports=JSON.parse('[{"product":"apple","store":10,"color":"#f44336"},{"product":"orange","store":20,"color":"#ff9800"},{"product":"banana","store":30,"color":"#fdd835"},{"product":"lemon","store":40,"color":"#4caf50"},{"product":"blueberry","store":50,"color":"#2196f3"},{"product":"cherry","store":60,"color":"#3f51b5"},{"product":"grape","store":70,"color":"#673ab7"}]')}},[[197,1,2]]]);
//# sourceMappingURL=main.9ecade68.chunk.js.map