(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"/e88":function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"7oih":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("mxmt"),c=a.n(l),o=a("ma3e"),s=a("Wbzz"),i=[{id:1,text:"home",url:"/"},{id:2,text:"about",url:"/about/"},{id:3,text:"projects",url:"/projects/"},{id:4,text:"blog",url:"/blog/"},{id:5,text:"contact",url:"/contact/"}].map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(s.a,{to:e.url},e.text))})),m=function(e){var t=e.styleClass;return r.a.createElement("ul",{className:"page-links "+(t||"")},i)},u=function(e){var t=e.toggleSidebar;return r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"nav-center"},r.a.createElement("div",{className:"nav-header"},r.a.createElement("img",{src:c.a,alt:"logo",className:"hidden"}),r.a.createElement("button",{type:"button",className:"toggle-btn",onClick:t},r.a.createElement(o.a,null))),r.a.createElement(m,{styleClass:"nav-links"})))},f=a("PNo/"),p=function(e){var t=e.isOpen,a=e.toggleSidebar;return r.a.createElement("aside",{className:"sidebar "+(t?"show-sidebar":"")},r.a.createElement("button",{className:"close-btn",onClick:a},r.a.createElement(o.j,null)),r.a.createElement("div",{className:"side-container"},r.a.createElement(m,{styleClass:t?"sidebar-links":""}),r.a.createElement(f.a,{styleClass:t?"sidebar-icons":""})))},d=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",null,r.a.createElement(f.a,{styleClass:"footer-links"}),r.a.createElement("p",{className:"white-small"},"Template by ",r.a.createElement("a",{className:"white-small",href:"https://github.com/john-smilga/starter-project-gatsby-strapi-portfolio-2020"},"John Smilga "))))};t.a=function(e){var t=e.children,a=r.a.useState(!1),n=a[0],l=a[1],c=function(){l(!n)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(u,{toggleSidebar:c}),r.a.createElement(p,{isOpen:n,toggleSidebar:c}),t,r.a.createElement(d,null))}},"Cuy+":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("7oih");t.default=function(){return r.a.createElement(l.a,null,r.a.createElement("section",{className:"contact-page"},r.a.createElement("article",{className:"contact-form"},r.a.createElement("h3",null,"get in touch"),r.a.createElement("form",{action:"https://formspree.io/mvowrbdd",method:"POST"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"name",placeholder:"name",className:"form-control"}),r.a.createElement("input",{type:"email",name:"email",placeholder:"email",className:"form-control"}),r.a.createElement("textarea",{name:"message",placeholder:"message",rows:"5",className:"form-control"}),r.a.createElement("input",{type:"text",name:"_gotcha",className:"hidden"})),r.a.createElement("button",{type:"submit",className:"submit-btn btn"},"submit here")))))}},Lnxd:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));a("bWfx"),a("ioFf"),a("V+eJ"),a("91GP");var n=a("q1tI"),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=n.createContext&&n.createContext(r),c=function(){return(c=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},o=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&(a[n[r]]=e[n[r]])}return a};function s(e){return function(t){return n.createElement(i,c({attr:c({},e.attr)},t),function e(t){return t&&t.map((function(t,a){return n.createElement(t.tag,c({key:a},t.attr),e(t.child))}))}(e.child))}}function i(e){var t=function(t){var a,r=e.size||t.size||"1em";t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className);var l=e.attr,s=e.title,i=o(e,["attr","title"]);return n.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,l,i,{className:a,style:c({color:e.color||t.color},t.style,e.style),height:r,width:r,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==l?n.createElement(l.Consumer,null,(function(e){return t(e)})):t(r)}},"PNo/":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("ma3e"),c=a("X13+"),o=[{id:1,icon:r.a.createElement(l.f,{className:"social-icon"}),url:"https://www.linkedin.com/in/natanael-mota-b15b653a/"},{id:2,icon:r.a.createElement(l.g,{className:"social-icon"}),url:"https://medium.com/@nat.c.mota"},{id:3,icon:r.a.createElement(c.a,{className:"social-icon"}),url:"https://github.com/NatMota/natmota.github.io/blob/master/Natanael%20-%20CV.docx.pdf"},{id:4,icon:r.a.createElement(l.k,{className:"social-icon"}),url:"https://wa.me/00447946849227"},{id:5,icon:r.a.createElement(l.h,{className:"social-icon"}),url:"https://www.meetup.com/members/243265736/"}].map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:e.url,className:"social-link"},e.icon))}));t.a=function(e){var t=e.styleClass;return r.a.createElement("ul",{className:"social-links "+(t||"")},o)}},Wbzz:function(e,t,a){"use strict";a("xfY5");var n=a("q1tI"),r=a.n(n),l=a("+ZDr"),c=a.n(l);a.d(t,"a",(function(){return c.a}));a("lw3w"),a("emEt").default.enqueue,r.a.createContext({})},lw3w:function(e,t,a){var n;e.exports=(n=a("rzlk"))&&n.default||n},mxmt:function(e,t){e.exports="data:image/svg+xml;base64,"},qncB:function(e,t,a){var n=a("XKFU"),r=a("vhPU"),l=a("eeVq"),c=a("/e88"),o="["+c+"]",s=RegExp("^"+o+o+"*"),i=RegExp(o+o+"*$"),m=function(e,t,a){var r={},o=l((function(){return!!c[e]()||"​"!="​"[e]()})),s=r[e]=o?t(u):c[e];a&&(r[a]=s),n(n.P+n.F*o,"String",r)},u=m.trim=function(e,t){return e=String(r(e)),1&t&&(e=e.replace(s,"")),2&t&&(e=e.replace(i,"")),e};e.exports=m},rzlk:function(e,t,a){"use strict";a.r(t);a("91GP");var n=a("q1tI"),r=a.n(n),l=a("IOVJ");t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null}},xfY5:function(e,t,a){"use strict";var n=a("dyZX"),r=a("aagx"),l=a("LZWt"),c=a("Xbzi"),o=a("apmT"),s=a("eeVq"),i=a("kJMx").f,m=a("EemH").f,u=a("hswa").f,f=a("qncB").trim,p=n.Number,d=p,E=p.prototype,h="Number"==l(a("Kuth")(E)),g="trim"in String.prototype,N=function(e){var t=o(e,!1);if("string"==typeof t&&t.length>2){var a,n,r,l=(t=g?t.trim():f(t,3)).charCodeAt(0);if(43===l||45===l){if(88===(a=t.charCodeAt(2))||120===a)return NaN}else if(48===l){switch(t.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+t}for(var c,s=t.slice(2),i=0,m=s.length;i<m;i++)if((c=s.charCodeAt(i))<48||c>r)return NaN;return parseInt(s,n)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof p&&(h?s((function(){E.valueOf.call(a)})):"Number"!=l(a))?c(new d(N(t)),a,p):N(t)};for(var b,v=a("nh4g")?i(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;v.length>y;y++)r(d,b=v[y])&&!r(p,b)&&u(p,b,m(d,b));p.prototype=E,E.constructor=p,a("KroJ")(n,"Number",p)}}}]);
//# sourceMappingURL=component---src-pages-contact-js-e6d6ff3ff44510f3db88.js.map