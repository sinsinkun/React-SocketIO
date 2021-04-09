(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{135:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(9),s=n.n(i),a=n(39),j=n(11),o=(n(99),n(18)),u=n(29),l=n(88),d=n(166),b=n(4),O={winX:window.innerWidth,winY:window.innerHeight,user:"",theme:Object(l.a)({palette:{primary:{main:"#673ab7"},secondary:{main:"#2979ff"},tertiary:{main:"#1de9b6"}}})},h=function(e,t){switch(t.do){case"resize":return Object(u.a)(Object(u.a)({},e),{},{winX:window.innerWidth,winY:window.innerHeight});case"signin":return Object(u.a)(Object(u.a)({},e),{},{user:t.name});default:throw new Error("Invalid action type: ".concat(t.do))}},m=Object(c.createContext)(),f=function(e){var t=Object(c.useReducer)(h,O),n=Object(o.a)(t,2),r=n[0],i=n[1];return Object(c.useEffect)((function(){function e(){i({do:"resize"})}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}})),Object(b.jsx)(m.Provider,{value:[r,i],children:Object(b.jsx)(d.a,{theme:r.theme,children:e.children})})},x=function(){return Object(c.useContext)(m)},v=n(167),g=n(170),p=n(171),w=n(172),y=n(173);var E=function(){var e=Object(j.f)();return Object(b.jsx)(v.a,{position:"static",children:Object(b.jsxs)(g.a,{variant:"dense",children:[Object(b.jsx)(p.a,{variant:"h6",style:{flexGrow:1},children:"Socket IM"}),Object(b.jsx)(w.a,{edge:"end",color:"inherit",onClick:function(){e.push("/")},children:Object(b.jsx)(y.a,{})})]})})},C=n(174),S=n(91),k=n(180),N=n(176);var W=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1],i=x(),s=Object(o.a)(i,2)[1],a=Object(j.f)();function u(e){e.preventDefault(),s({do:"signin",name:n}),a.push("/chatroom")}return Object(b.jsx)(C.a,{maxWidth:"sm",style:{marginTop:"8rem"},children:Object(b.jsx)(S.a,{className:"main-card",elevation:3,children:Object(b.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){return u(e)},children:[Object(b.jsx)("div",{style:{margin:"0.5rem 2rem"},children:Object(b.jsx)(k.a,{fullWidth:!0,label:"Username",variant:"standard",value:n,onChange:function(e){return r(e.target.value)}})}),Object(b.jsx)(N.a,{variant:"contained",color:"primary",onClick:function(e){return u(e)},children:"Enter Chatroom"})]})})})},M=n(178),z=n(179),R=n(87),I=n.n(R),G=n(89),H=n(175),J=n(177);var L=function(e){var t=Object(c.useState)([]),n=Object(o.a)(t,2),r=n[0],i=n[1],s=Object(c.useState)(""),a=Object(o.a)(s,2),j=a[0],u=a[1],l=Object(c.useRef)();return Object(c.useEffect)((function(){var t=r;e.res&&t.push(e.res),t.length>20&&t.shift(),i(Object(G.a)(t)),u("")}),[e.res]),Object(c.useEffect)((function(){l.current.scrollIntoView()})),Object(b.jsxs)(C.a,{disableGutters:!0,className:"msg-col",children:[Object(b.jsx)("div",{className:"msg-list",children:Object(b.jsxs)(H.a,{children:[r.map((function(e){return Object(b.jsxs)(J.a,{children:[e.user,": ",e.msg]})})),Object(b.jsx)("end",{ref:l})]})}),Object(b.jsxs)(M.a,{container:!0,className:"msg-input-area",children:[Object(b.jsx)(M.a,{xs:!0,item:!0,children:Object(b.jsx)("div",{style:{marginRight:"0.5rem"},children:Object(b.jsx)(k.a,{fullWidth:!0,size:"small",label:"New Message",variant:"filled",className:"msg-input",color:"secondary",value:j,onChange:function(e){return u(e.target.value)},onKeyPress:function(t){"Enter"===t.key&&e.sendMsg(j)}})})}),Object(b.jsx)(M.a,{item:!0,children:Object(b.jsx)(N.a,{variant:"contained",onClick:function(){return e.sendMsg(j)},color:"secondary",style:{marginTop:"0.3rem"},children:"Send"})})]})]})};var P=function(){return Object(b.jsx)("div",{children:"Room list"})};var T=function(){return Object(b.jsx)("div",{children:"User list"})};var U=function(){var e=Object(j.f)(),t=Object(c.useRef)(null),n=Object(c.useState)(null),r=Object(o.a)(n,2),i=r[0],s=r[1],a=x(),l=Object(o.a)(a,1)[0];return Object(c.useEffect)((function(){return l.user||e.push("/"),t.current=I()(),t.current.on("msgex",(function(e){return s(Object(u.a)({},e))})),function(){return t.current.disconnect()}}),[]),l.user?Object(b.jsx)(C.a,{maxWidth:"xl",disableGutters:!0,children:Object(b.jsxs)(M.a,{container:!0,spacing:1,fullWidth:!0,children:[Object(b.jsx)(M.a,{item:!0,md:3,children:Object(b.jsx)(P,{})}),Object(b.jsx)(M.a,{item:!0,xs:!0,md:6,children:Object(b.jsx)(L,{res:i,sendMsg:function(e){""!==e&&t.current.emit("msg",{user:l.user,msg:e})}})}),Object(b.jsx)(M.a,{item:!0,sm:3,md:3,children:Object(b.jsx)(T,{})})]})}):Object(b.jsx)(z.a,{className:"chatroom-card",children:"..."})};var V=function(){return Object(b.jsx)(f,{children:Object(b.jsxs)(a.a,{children:[Object(b.jsx)(E,{}),Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{exact:!0,path:"/",children:Object(b.jsx)(W,{})}),Object(b.jsx)(j.a,{path:"/chatroom",children:Object(b.jsx)(U,{})})]})]})})};s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(V,{})}),document.getElementById("root"))},99:function(e,t,n){}},[[135,1,2]]]);
//# sourceMappingURL=main.8f44cab1.chunk.js.map