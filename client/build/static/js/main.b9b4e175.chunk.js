(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{103:function(e,t,n){},140:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(9),s=n.n(a),i=n(40),o=n(11),j=(n(103),n(16)),u=n(29),l=n(90),b=n(169),d=n(4),O={winX:window.innerWidth,winY:window.innerHeight,user:"",room:"",theme:Object(l.a)({palette:{primary:{main:"#673ab7"},secondary:{main:"#2979ff"},tertiary:{main:"#1de9b6"}}})},h=function(e,t){switch(t.do){case"resize":return Object(u.a)(Object(u.a)({},e),{},{winX:window.innerWidth,winY:window.innerHeight});case"signin":return Object(u.a)(Object(u.a)({},e),{},{user:t.name,room:"Lobby"});default:throw new Error("Invalid action type: ".concat(t.do))}},m=Object(c.createContext)(),f=function(e){var t=Object(c.useReducer)(h,O),n=Object(j.a)(t,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){function e(){a({do:"resize"})}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}})),Object(d.jsx)(m.Provider,{value:[r,a],children:Object(d.jsx)(b.a,{theme:r.theme,children:e.children})})},x=function(){return Object(c.useContext)(m)},v=n(170),g=n(173),p=n(174),w=n(175),y=n(176);var M=function(){var e=Object(o.f)();return Object(d.jsx)(v.a,{position:"static",children:Object(d.jsxs)(g.a,{variant:"dense",children:[Object(d.jsx)(p.a,{variant:"h6",style:{flexGrow:1},children:"Socket IM"}),Object(d.jsx)(w.a,{edge:"end",color:"inherit",onClick:function(){e.push("/")},children:Object(d.jsx)(y.a,{})})]})})},E=n(177),S=n(93),N=n(184),C=n(179);var k=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],r=t[1],a=x(),s=Object(j.a)(a,2)[1],i=Object(o.f)();function u(e){e.preventDefault(),s({do:"signin",name:n}),i.push("/chatroom")}return Object(d.jsx)(E.a,{maxWidth:"sm",style:{marginTop:"8rem"},children:Object(d.jsx)(S.a,{className:"main-card",elevation:3,children:Object(d.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){return u(e)},children:[Object(d.jsx)("div",{style:{margin:"0.5rem 2rem"},children:Object(d.jsx)(N.a,{fullWidth:!0,label:"Username",variant:"standard",value:n,onChange:function(e){return r(e.target.value)}})}),Object(d.jsx)(C.a,{variant:"contained",color:"primary",onClick:function(e){return u(e)},children:"Enter Chatroom"})]})})})},W=n(181),z=n(183),L=n(88),R=n.n(L),I=n(91),G=n(178),X=n(180);var Y=function(e){var t=Object(c.useState)([]),n=Object(j.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(""),i=Object(j.a)(s,2),o=i[0],u=i[1],l=Object(c.useRef)();function b(){e.sendMsg(o),u("")}return Object(c.useEffect)((function(){var t=r;e.rMsg&&t.push(e.rMsg),t.length>20&&t.shift(),a(Object(I.a)(t))}),[e.rMsg]),Object(c.useEffect)((function(){l.current.scrollIntoView()})),Object(d.jsxs)(E.a,{disableGutters:!0,className:"msg-col",children:[Object(d.jsx)("div",{className:"msg-list",children:Object(d.jsxs)(G.a,{children:[r.map((function(e){return Object(d.jsxs)(X.a,{children:[e.user,": ",e.msg]})})),Object(d.jsx)("end",{ref:l})]})}),Object(d.jsxs)(W.a,{container:!0,className:"msg-input-area",children:[Object(d.jsx)(W.a,{xs:!0,item:!0,children:Object(d.jsx)("div",{style:{marginRight:"0.5rem"},children:Object(d.jsx)(N.a,{fullWidth:!0,size:"small",label:"New Message",variant:"filled",className:"msg-input",color:"secondary",value:o,onChange:function(e){return u(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&b()}})})}),Object(d.jsx)(W.a,{item:!0,children:Object(d.jsx)(C.a,{variant:"contained",onClick:b,color:"secondary",style:{marginTop:"0.3rem"},children:"Send"})})]})]})},H=n(182);var J=function(){var e=x(),t=Object(j.a)(e,1)[0];return t.winX>960?Object(d.jsxs)(E.a,{className:"room-col",children:[Object(d.jsx)(p.a,{variant:"h6",children:"Room List"}),Object(d.jsxs)(G.a,{children:[Object(d.jsx)(X.a,{button:!0,children:t.room}),Object(d.jsx)(X.a,{button:!0,children:"Other"})]})]}):Object(d.jsx)(E.a,{className:"room-col",children:Object(d.jsx)(H.a,{})})},P=n(61),T=n.n(P),U=n(89);var V=function(e){var t=Object(c.useState)([]),n=Object(j.a)(t,2),r=n[0],a=n[1];function s(){return(s=Object(U.a)(T.a.mark((function t(){var n;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/api/users/".concat(e.room)).then((function(e){return e.json()}));case 2:n=t.sent,a(n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(c.useEffect)((function(){e.rMsg&&"SYS"===e.rMsg.user&&function(){s.apply(this,arguments)}()}),[e.rMsg]),Object(d.jsxs)(E.a,{className:"user-col",children:[Object(d.jsx)(p.a,{variant:"h6",children:"User List"}),Object(d.jsx)(G.a,{children:r.map((function(e){return Object(d.jsx)(X.a,{children:e.name})}))})]})};var B=function(){var e=Object(o.f)(),t=Object(c.useRef)(null),n=Object(c.useState)(null),r=Object(j.a)(n,2),a=r[0],s=r[1],i=x(),l=Object(j.a)(i,1)[0];return Object(c.useEffect)((function(){return l.user||e.push("/"),t.current=R()(),t.current.emit("connected",{user:l.user,room:l.room}),t.current.on("msg",(function(e){return s(Object(u.a)({},e))})),function(){return t.current.disconnect()}}),[]),l.user?Object(d.jsx)(E.a,{maxWidth:"xl",disableGutters:!0,children:Object(d.jsxs)(W.a,{container:!0,spacing:0,fullWidth:!0,children:[Object(d.jsx)(W.a,{item:!0,md:3,children:Object(d.jsx)(J,{})}),Object(d.jsx)(W.a,{item:!0,xs:!0,md:6,children:Object(d.jsx)(Y,{rMsg:a,sendMsg:function(e){""!==e&&t.current.emit("msg",{user:l.user,room:l.room,msg:e})}})}),Object(d.jsx)(W.a,{item:!0,sm:4,md:3,children:Object(d.jsx)(V,{room:l.room,rMsg:a})})]})}):Object(d.jsx)(z.a,{className:"chatroom-card",children:"..."})};var D=function(){return Object(d.jsx)(f,{children:Object(d.jsxs)(i.a,{children:[Object(d.jsx)(M,{}),Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{exact:!0,path:"/",children:Object(d.jsx)(k,{})}),Object(d.jsx)(o.a,{path:"/chatroom",children:Object(d.jsx)(B,{})})]})]})})};s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(D,{})}),document.getElementById("root"))}},[[140,1,2]]]);
//# sourceMappingURL=main.b9b4e175.chunk.js.map