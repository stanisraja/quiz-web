(this["webpackJsonpquiz-web"]=this["webpackJsonpquiz-web"]||[]).push([[0],{17:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),r=c(5),i=c.n(r),o=c(8),l=c.n(o),a=(c(17),c(3));var j=()=>{const[e,t]=Object(s.useState)([]),[c,n]=Object(s.useState)(0),[r,i]=Object(s.useState)(!1),[o,j]=Object(s.useState)(0),[u,b]=Object(s.useState)(!1),h=Object(s.useRef)(null),d=Object(s.useRef)(null),O=Object(s.useRef)(null),x=Object(s.useRef)(null),f=[h,d,O,x];Object(s.useEffect)((()=>{(async()=>{try{const e=await l.a.get("http://localhost:5000/api/questions",{params:{limit:5}});t(e.data)}catch(e){console.error("Error fetching questions:",e)}})()}),[]);const g=e[c];if(console.log(g),!g)return Object(a.jsx)("div",{children:"No Questions available..."});const p=(e,t)=>{if(!r){const c="a"===g.currect_ans?1:"b"===g.currect_ans?2:"c"===g.currect_ans?3:4;c===t?(e.target.classList.add("correct"),i(!0),j((e=>e+1))):(e.target.classList.add("wrong"),i(!0),f[c-1].current.classList.add("correct"))}};return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h1",{style:{textAlign:"center"},children:"Quiz"}),Object(a.jsx)("hr",{}),u?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("h2",{children:["You Scored ",o," out of ",e.length]}),Object(a.jsx)("button",{onClick:()=>{(async()=>{try{const e=await l.a.get("http://localhost:5000/api/questions");t(e.data),n(0),j(0),i(!1),b(!1)}catch(e){console.error("Error fetching questions:",e)}})()},children:"Reset"})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("h2",{children:[c+1,". ",g.title]}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{ref:h,onClick:e=>p(e,1),children:g.option_1}),Object(a.jsx)("li",{ref:d,onClick:e=>p(e,2),children:g.option_2}),Object(a.jsx)("li",{ref:O,onClick:e=>p(e,3),children:g.option_3}),Object(a.jsx)("li",{ref:x,onClick:e=>p(e,4),children:g.option_4})]}),Object(a.jsx)("button",{onClick:()=>{if(r){if(c===e.length-1)return void b(!0);n((e=>e+1)),i(!1),f.forEach((e=>{e.current.classList.remove("wrong"),e.current.classList.remove("correct")}))}},children:"Next"}),Object(a.jsxs)("div",{className:"index",children:[c+1," of ",e.length," questions"]})]})]})},u=c(18),b=c(2);var h=function(){return Object(a.jsx)(u.a,{children:Object(a.jsx)(b.c,{children:Object(a.jsx)(b.a,{path:"/quiz",element:Object(a.jsx)(j,{})})})})};i.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(h,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.56959402.chunk.js.map