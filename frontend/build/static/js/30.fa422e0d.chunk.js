(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[30],{253:function(t,e,r){"use strict";r.d(e,"a",(function(){return u})),r.d(e,"b",(function(){return b}));var a=r(79),n=r(128),o=r(55),c=r(277),s=r(135),i=r(0);function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t}).apply(this,arguments)}function m(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}var u=Object(a.a)((function(t,e){var r=t.area,a=t.templateAreas,o=t.gap,c=t.rowGap,s=t.columnGap,u=t.column,d=t.row,b=t.autoFlow,p=t.autoRows,f=t.templateRows,g=t.autoColumns,j=t.templateColumns,O=m(t,["area","templateAreas","gap","rowGap","columnGap","column","row","autoFlow","autoRows","templateRows","autoColumns","templateColumns"]),h={display:"grid",gridArea:r,gridTemplateAreas:a,gridGap:o,gridRowGap:c,gridColumnGap:s,gridAutoColumns:g,gridColumn:u,gridRow:d,gridAutoFlow:b,gridAutoRows:p,gridTemplateRows:f,gridTemplateColumns:j};return i.createElement(n.a.div,l({ref:e,__css:h},O))}));function d(t){return Object(c.a)(t,(function(t){return"auto"===t?"auto":"span "+t+"/span "+t}))}o.a&&(u.displayName="Grid");var b=Object(a.a)((function(t,e){var r=t.colSpan,a=t.colStart,o=t.colEnd,c=t.rowEnd,u=t.rowSpan,b=t.rowStart,p=m(t,["colSpan","colStart","colEnd","rowEnd","rowSpan","rowStart"]),f=Object(s.a)({gridColumn:d(r),gridRow:d(u),gridColumnStart:a,gridColumnEnd:o,gridRowStart:b,gridRowEnd:c});return i.createElement(n.a.div,l({ref:e,__css:f},p))}))},268:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var a=r(79),n=r(138),o=r(48),c=r(128),s=r(203),i=r(55),l=r(0);function m(){return(m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t}).apply(this,arguments)}var u=Object(a.a)((function(t,e){var r=Object(n.b)("Heading",t),a=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(Object(o.b)(t),["className"]);return l.createElement(c.a.h2,m({ref:e,className:Object(s.a)("chakra-heading",t.className)},a,{__css:r}))}));i.a&&(u.displayName="Heading")},277:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var a=r(55),n=r(135);r(11);Object.freeze(["base","sm","md","lg","xl"]);function o(t,e){return Object(a.b)(t)?t.map((function(t){return null===t?null:e(t)})):Object(a.f)(t)?Object(n.b)(t).reduce((function(r,a){return r[a]=e(t[a]),r}),{}):null!=t?e(t):null}},527:function(t,e,r){"use strict";r.r(e);var a=r(3),n=r(4),o=(r(0),r(12)),c=r(253),s=r(268),i=r(256),l=r.p+"static/media/home.92a17592.svg",m={minH:"calc(100vh - 6rem)",justifyItems:"center",templateRows:{md:"1.2fr 1fr",sm:".75fr 1fr"},templateColumns:"repeat(12, 1fr)",rowGap:{md:"3rem",sm:0},bgImage:"url(".concat(l,")"),bgRepeat:"no-repeat",bgSize:{base:"50rem auto",lg:"47rem auto",sm:"30rem auto"},bgPosition:{base:"right 10rem",lg:"right 14rem",md:"right bottom",sm:"right bottom"}},u={textAlign:{md:"left",sm:"center"},justifySelf:{md:"start",sm:"center"},alignSelf:{sm:"center",md:"end"},textTransform:"uppercase",rowStart:1,rowEnd:2,colStart:{md:2,sm:1},colEnd:{lg:7,md:-1,sm:-1},mb:5},d={as:"h1",mb:3,fontSize:{sm:"3rem",md:"4rem",xl:"6rem"},fontWeight:400},b={as:"h1",fontSize:{sm:"3rem",md:"5rem"},fontWeight:400,color:"primary.500"},p={alignSelf:{md:"start"},rowStart:2,rowEnd:-1,colStart:{lg:2,md:2,sm:1},colEnd:{lg:6,md:8,sm:-1},w:"100%"},f={w:{sm:"100%",lg:"100%"},templateColumns:"repeat(2, 1fr)",justifyItems:{sm:"center",md:"start"}},g={textTransform:"uppercase",w:{sm:"8rem"},size:"lg",variant:"outline",borderColor:"gray",borderWidth:"2px",colorScheme:"gray"},j={textTransform:"uppercase",size:"lg",w:{sm:"8rem"},colorScheme:"primary",variant:"solid"};e.default=function(){var t=Object(o.g)().push;return Object(a.jsxs)(c.a,Object(n.a)(Object(n.a)({},m),{},{children:[Object(a.jsxs)(c.b,Object(n.a)(Object(n.a)({},u),{},{children:[Object(a.jsx)(s.a,Object(n.a)(Object(n.a)({},d),{},{children:"Always Stay"})),Object(a.jsx)(s.a,Object(n.a)(Object(n.a)({},b),{},{children:"connected"}))]})),Object(a.jsx)(c.b,Object(n.a)(Object(n.a)({},p),{},{children:Object(a.jsxs)(c.a,Object(n.a)(Object(n.a)({},f),{},{children:[Object(a.jsx)(i.a,Object(n.a)(Object(n.a)({},g),{},{onClick:function(){return t({pathname:"/auth/login"})},children:"Login"})),Object(a.jsx)(i.a,Object(n.a)(Object(n.a)({},j),{},{onClick:function(){return t({pathname:"/auth/register"})},children:"Register"}))]}))}))]}))}}}]);
//# sourceMappingURL=30.fa422e0d.chunk.js.map