(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[32],{319:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r(0);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createElement("path",{d:"M18 6v7c0 1.1-0.9 2-2 2h-4v3l-4-3h-4c-1.101 0-2-0.9-2-2v-7c0-1.1 0.899-2 2-2h12c1.1 0 2 0.9 2 2z"});function i(e,t){var r=e.title,i=e.titleId,l=c(e,["title","titleId"]);return n.createElement("svg",a({fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",width:20,height:20,viewBox:"0 0 20 20",ref:t,"aria-labelledby":i},l),void 0===r?n.createElement("title",{id:i},"message"):r?n.createElement("title",{id:i},r):null,s)}var l=n.forwardRef(i);r.p},320:function(e,t,r){"use strict";var n=r(4),a=r(3),c=r(231),s=r(532),i=r(513),l=r(355),o=r(514),u=(r(0),r(12));t.a=function(e){var t=e.searchText,r=e.handleSearchTextChange,b=Object(c.a)(e,["searchText","handleSearchTextChange"]),j=Object(u.h)();return Object(a.jsxs)(s.a,Object(n.a)(Object(n.a)({},b),{},{children:[Object(a.jsx)(i.a,{pointerEvents:"none",children:Object(a.jsx)(o.a,{color:"gray.300"})}),Object(a.jsx)(l.a,{value:t,onChange:function(e){return r(e.target.value,j.pathname.includes("find-groups")?"getGroups":"getPeople")},type:"text",placeholder:"Search...."})]}))}},528:function(e,t,r){"use strict";r.r(t);var n=r(3),a=r(200),c=r(268),s=r(0),i=r(91),l=r(4),o=r(13),u=r.n(o),b=r(23),j=r(5),d=r(245),f=r(218),h=r(258),p=r(519),O=r(357),x=r(205),g=r(319),m=r(25),v=r.n(m),y=r(40),w={container:{bg:"primary.600",py:5,mb:5,px:16,mx:"auto",w:{lg:"80%",md:"90%",sm:"100%"},borderRadius:10,alignItems:"center",justifyContent:"space-between"},userContainer:{direction:"column",textAlign:"left"},userContainerHeading:{mb:1,color:"#fff",textTransform:"capitalize",size:"md"},btnTooltip:{hasArrow:!0,textTransform:"capitalize",fontSize:"sm"},btn:{bg:"primary.200",_hover:{bg:"primary.400"}}},C=function(e){var t=e.user,r=Object(s.useState)(!1),i=Object(j.a)(r,2),o=i[0],m=i[1],C=Object(s.useContext)(y.a),T=C.updateUserRequestsSent,S=C.user,q=function(){var e=Object(b.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.prev=1,e.next=4,v()({method:"PATCH",url:"/api/v1/users/sendFriendRequest",data:{friend:t._id}});case 4:T(t._id),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(1);case 9:m(!1);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)(d.a,Object(l.a)(Object(l.a)({},w.container),{},{children:[Object(n.jsxs)(d.a,Object(l.a)(Object(l.a)({},w.userContainer),{},{children:[Object(n.jsx)(c.a,Object(l.a)(Object(l.a)({},w.userContainerHeading),{},{children:t.fullName})),Object(n.jsxs)(f.a,{color:"#fff",children:[Object(n.jsx)(a.a,{as:"span",children:t&&t.friends&&t.friends.length}),Object(n.jsx)(a.a,{ml:2,as:"span",children:"friends"})]})]})),Object(n.jsx)(h.a,{spacing:8,children:S.requestsSent&&!S.requestsSent.includes(t._id)?Object(n.jsx)(p.a,Object(l.a)(Object(l.a)({placement:"left-start",label:"send friend request"},w.btnTooltip),{},{children:o?Object(n.jsx)(O.a,{color:"#fff",bg:"primary.200",_hover:{bg:"primary.400"},active:{bg:"primary.400"},"aria-label":"accept friend request loading",icon:Object(n.jsx)(x.a,{size:"md"})}):Object(n.jsx)(O.a,Object(l.a)(Object(l.a)({onClick:q,"aria-label":"send friend request"},w.btn),{},{icon:Object(n.jsx)(g.a,{fill:"#fff"})}))})):Object(n.jsx)(a.a,{as:"p",color:"yellow.300",children:"Request sent"})})]}))},T=r(320);t.default=function(){var e=Object(s.useContext)(i.a).searchPeople,t=Object(s.useContext)(i.a),r=t.handleSearchTextChange,l=t.searchText;return Object(n.jsxs)(a.a,{textAlign:"center",p:10,children:[Object(n.jsx)(c.a,{mb:9,children:"Find Friends"}),Object(n.jsx)(T.a,{mb:6,searchText:l,handleSearchTextChange:r}),e.map((function(e){return Object(n.jsx)(C,{user:e},e._id)}))]})}}}]);
//# sourceMappingURL=32.2fc20a33.chunk.js.map