(this["webpackJsonpquiz-web"]=this["webpackJsonpquiz-web"]||[]).push([[0],{18:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),r=c(19),i=c.n(r),a=c(20),o=c(2),l=c(3);var j=function(){const[e,t]=Object(s.useState)([]);return Object(s.useEffect)((()=>{(async()=>{try{const e=await fetch("/api/topics"),c=await e.json();t(c)}catch(e){console.error("Error fetching topics:",e)}})()}),[]),Object(l.jsxs)("div",{className:"home-page",children:[Object(l.jsx)("h1",{children:"Home Page"}),Object(l.jsx)("div",{className:"topic-container",children:e.map(((e,t)=>Object(l.jsx)("div",{className:"topic ".concat(t%2===0?"flashing":""),children:e.name},t)))}),Object(l.jsx)("div",{children:Object(l.jsx)("a",{href:"https://quiz.yourdomain.com",className:"start-quiz-link",children:"Start Quiz"})})]})},u=c(7),b=c.n(u);c(18);var h=()=>{const[e,t]=Object(s.useState)([]),[c,n]=Object(s.useState)(0),[r,i]=Object(s.useState)(!1),[a,o]=Object(s.useState)(0),[j,u]=Object(s.useState)(!1),h=Object(s.useRef)(null),d=Object(s.useRef)(null),O=Object(s.useRef)(null),x=Object(s.useRef)(null),f=[h,d,O,x];Object(s.useEffect)((()=>{(async()=>{try{const e=await b.a.get("/api/questions",{params:{limit:5}});t(e.data)}catch(e){console.log("Error fetching questions:",e)}})()}),[]);const m=e[c];if(console.log(m),!m)return Object(l.jsx)("div",{children:"No Questions available..."});const p=(e,t)=>{if(!r){const c="a"===m.currect_ans?1:"b"===m.currect_ans?2:"c"===m.currect_ans?3:4;c===t?(e.target.classList.add("correct"),i(!0),o((e=>e+1))):(e.target.classList.add("wrong"),i(!0),f[c-1].current.classList.add("correct"))}};return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{style:{textAlign:"center"},children:"Quiz"}),Object(l.jsx)("hr",{}),j?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("h2",{children:["You Scored ",a," out of ",e.length]}),Object(l.jsx)("button",{onClick:()=>{(async()=>{try{const e=await b.a.get("/api/questions");t(e.data),n(0),o(0),i(!1),u(!1)}catch(e){console.error("Error fetching questions:",e)}})()},children:"Reset"})]}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("h2",{children:[c+1,". ",m.title]}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{ref:h,onClick:e=>p(e,1),children:m.option_1}),Object(l.jsx)("li",{ref:d,onClick:e=>p(e,2),children:m.option_2}),Object(l.jsx)("li",{ref:O,onClick:e=>p(e,3),children:m.option_3}),Object(l.jsx)("li",{ref:x,onClick:e=>p(e,4),children:m.option_4})]}),Object(l.jsx)("button",{onClick:()=>{if(r){if(c===e.length-1)return void u(!0);n((e=>e+1)),i(!1),f.forEach((e=>{e.current.classList.remove("wrong"),e.current.classList.remove("correct")}))}},children:"Next"}),Object(l.jsxs)("div",{className:"index",children:[c+1," of ",e.length," questions"]})]})]})};var d=()=>Object(l.jsx)(a.a,{children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:"/",element:Object(l.jsx)(j,{})}),Object(l.jsx)(o.a,{path:"/quiz",element:Object(l.jsx)(h,{})})]})});i.a.createRoot(document.getElementById("root")).render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(d,{})}))}},[[46,1,2]]]);
//# sourceMappingURL=main.e863b936.chunk.js.map