(this["webpackJsonpquiz-web"]=this["webpackJsonpquiz-web"]||[]).push([[0],{17:function(e,t,c){},40:function(e,t,c){},47:function(e,t,c){"use strict";c.r(t);var s=c(0),r=c.n(s),n=c(19),i=c(2),o=c(5),a=c.n(o),l=(c(40),c(3));var j=function(){const[e,t]=Object(s.useState)([]);Object(s.useEffect)((()=>{(async()=>{try{const e=await a.a.get("/api/topics",{params:{limit:5}});t(e.data)}catch(e){console.log("Error fetching topics:",e)}})()}),[]);const c=e[0];return console.log(c),Object(l.jsxs)("div",{className:"home-page",children:[Object(l.jsx)("h1",{children:"Home Page"}),Object(l.jsx)("div",{className:"topic-container",children:e.map(((e,t)=>Object(l.jsx)("div",{className:"topic ".concat(t%2===0?"flashing":""),children:c.NAME},t)))}),Object(l.jsx)("div",{children:Object(l.jsx)("a",{href:"https://quiz.1page.click",className:"start-quiz-link",children:"Start Quiz"})})]})};c(17);var h=()=>{const[e,t]=Object(s.useState)([]),[c,r]=Object(s.useState)(0),[n,i]=Object(s.useState)(!1),[o,j]=Object(s.useState)(0),[h,d]=Object(s.useState)(!1),u=Object(s.useRef)(null),b=Object(s.useRef)(null),O=Object(s.useRef)(null),x=Object(s.useRef)(null),g=[u,b,O,x];Object(s.useEffect)((()=>{(async()=>{try{const e=await a.a.get("/api/questions",{params:{limit:5}});t(e.data)}catch(e){console.log("Error fetching questions:",e)}})()}),[]);const p=e[c];if(console.log(p),!p)return Object(l.jsx)("div",{children:"No Questions available..."});const f=(e,t)=>{if(!n){const c="a"===p.currect_ans?1:"b"===p.currect_ans?2:"c"===p.currect_ans?3:4;c===t?(e.target.classList.add("correct"),i(!0),j((e=>e+1))):(e.target.classList.add("wrong"),i(!0),g[c-1].current.classList.add("correct"))}};return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{style:{textAlign:"center"},children:"Quiz"}),Object(l.jsx)("hr",{}),h?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("h2",{children:["You Scored ",o," out of ",e.length]}),Object(l.jsx)("button",{onClick:()=>{(async()=>{try{const e=await a.a.get("/api/questions");t(e.data),r(0),j(0),i(!1),d(!1)}catch(e){console.error("Error fetching questions:",e)}})()},children:"Reset"})]}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("h2",{children:[c+1,". ",p.title]}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{ref:u,onClick:e=>f(e,1),children:p.option_1}),Object(l.jsx)("li",{ref:b,onClick:e=>f(e,2),children:p.option_2}),Object(l.jsx)("li",{ref:O,onClick:e=>f(e,3),children:p.option_3}),Object(l.jsx)("li",{ref:x,onClick:e=>f(e,4),children:p.option_4})]}),Object(l.jsx)("button",{onClick:()=>{if(n){if(c===e.length-1)return void d(!0);r((e=>e+1)),i(!1),g.forEach((e=>{e.current.classList.remove("wrong"),e.current.classList.remove("correct")}))}},children:"Next"}),Object(l.jsxs)("div",{className:"index",children:[c+1," of ",e.length," questions"]})]})]})};var d=()=>Object(l.jsx)(n.a,{children:Object(l.jsxs)(i.c,{children:[Object(l.jsx)(i.a,{path:"/",element:Object(l.jsx)(j,{})}),Object(l.jsx)(i.a,{path:"/quiz",element:Object(l.jsx)(h,{})})]})}),u=c(20);class b extends r.a.Component{constructor(e){super(e),this.state={hasError:!1,errorMessage:null}}static getDerivedStateFromError(e){return{hasError:!0,errorMessage:e.toString()}}componentDidCatch(e,t){console.error("Error caught by ErrorBoundary:",e,t)}render(){return this.state.hasError?Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Something went wrong."}),Object(l.jsx)("p",{children:this.state.errorMessage})]}):this.props.children}}Object(u.createRoot)(document.getElementById("root")).render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(b,{children:Object(l.jsx)(d,{})})}))}},[[47,1,2]]]);
//# sourceMappingURL=main.4715be9d.chunk.js.map