(self.webpackChunknatslabs=self.webpackChunknatslabs||[]).push([[883],{8030:function(){},9754:function(e,t,a){"use strict";a.d(t,{Z:function(){return E}});var n=a(7294),r=a(8030),l=a(9583),c=a(1883);const i=[{id:1,text:"home",url:"/"},{id:2,text:"blog",url:"/blog/"},{id:3,text:"about",url:"/about/"},{id:4,text:"contact",url:"/contact/"}].map((e=>n.createElement("li",{key:e.id},n.createElement(c.Link,{to:e.url},e.text))));var s=e=>{let{styleClass:t}=e;return n.createElement("ul",{className:"page-links "+(t||"")},i)};var o=e=>{let{toggleSidebar:t}=e;return n.createElement("nav",{className:"navbar"},n.createElement("div",{className:"nav-center"},n.createElement("div",{className:"nav-header"},n.createElement("button",{type:"button",className:"toggle-btn","aria-label":"Open sidebar",onClick:t},n.createElement(l.lPs,null))),n.createElement(s,{styleClass:"nav-links"})))},m=a(7212);var u=e=>{let{isOpen:t,toggleSidebar:a}=e;return n.createElement("aside",{className:"sidebar "+(t?"show-sidebar":"")},n.createElement("button",{className:"close-btn","aria-label":"Close sidebar",onClick:a},n.createElement(l.aHS,null)),n.createElement("div",{className:"side-container"},n.createElement(s,{styleClass:t?"sidebar-links":""}),n.createElement(m.Z,{styleClass:t?"sidebar-icons":""})))};var d=()=>n.createElement("footer",{className:"footer"},n.createElement("div",null,n.createElement(m.Z,{styleClass:"footer-links"})));var E=e=>{let{children:t}=e;const[a,l]=n.useState(!1),c=()=>{l(!a)};return n.createElement(n.Fragment,null,n.createElement(r.Helmet,null,n.createElement("script",null,"\n        \x3c!-- Matomo Tag Manager --\x3e\n        <script>\n        var _mtm = window._mtm = window._mtm || [];\n        _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});\n        var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];\n        g.async=true; g.src='https://analytics.natslabs.com/js/container_cvOkZoVz.js'; s.parentNode.insertBefore(g,s);\n        <\/script>\n        \x3c!-- End Matomo Tag Manager --\x3e\n        ")),n.createElement(o,{toggleSidebar:c}),n.createElement(u,{isOpen:a,toggleSidebar:c}),t,n.createElement(d,null))}},6406:function(e,t,a){"use strict";a.d(t,{H:function(){return l}});var n=a(7294),r=a(1883);const l=e=>{let{title:t,description:a,pathname:l,children:c}=e;const{title:i,description:s,image:o,siteUrl:m,twitterUsername:u}=(0,r.useStaticQuery)("3303551625").site.siteMetadata,d={title:t||i,description:a||s,image:""+m+o,url:""+m+(l||""),twitterUsername:u};return n.createElement(n.Fragment,null,n.createElement("title",null,d.title),n.createElement("meta",{name:"description",content:d.description}),n.createElement("meta",{name:"image",content:d.image}),n.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),n.createElement("meta",{name:"twitter:title",content:d.title}),n.createElement("meta",{name:"twitter:url",content:d.url}),n.createElement("meta",{name:"twitter:description",content:d.description}),n.createElement("meta",{name:"twitter:image",content:d.image}),n.createElement("meta",{name:"twitter:creator",content:d.twitterUsername}),n.createElement("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"}),c)}},7212:function(e,t,a){"use strict";var n=a(7294),r=a(9583),l=a(3750);const c=[{id:1,icon:n.createElement(r.ltd,{className:"social-icon","aria-label":"LinkedIn"}),url:"https://www.linkedin.com/in/natanael-mota-b15b653a/"},{id:2,icon:n.createElement(r.w5k,{className:"social-icon","aria-label":"Slack"}),url:"https://mindtheproduct.slack.com/team/U04Q9HBB65C"},{id:3,icon:n.createElement(l.xZR,{className:"social-icon","aria-label":"CV"}),url:"https://github.com/NatMota/natmota.github.io/blob/master/Natanael%20Mota%20-%20CV.pdf"}].map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:e.url,className:"social-link"},e.icon))));t.Z=e=>{let{styleClass:t}=e;return n.createElement("ul",{className:"social-links "+(t||"")},c)}},429:function(e,t,a){"use strict";a.r(t);var n=a(7294),r=a(9754),l=a(1883),c=a(6406);t.default=()=>n.createElement(r.Z,null,n.createElement(c.H,{title:"Page not found"}),n.createElement("main",{className:"error-page"},n.createElement("div",{className:"error-container"},n.createElement("h2",null,"oops it's a dead end"),n.createElement(l.Link,{to:"/",className:"btn"},"back home"))))},4405:function(e,t,a){"use strict";a.d(t,{w_:function(){return o}});var n=a(7294),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=n.createContext&&n.createContext(r),c=function(){return c=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},c.apply(this,arguments)},i=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};function s(e){return e&&e.map((function(e,t){return n.createElement(e.tag,c({key:t},e.attr),s(e.child))}))}function o(e){return function(t){return n.createElement(m,c({attr:c({},e.attr)},t),s(e.child))}}function m(e){var t=function(t){var a,r=e.attr,l=e.size,s=e.title,o=i(e,["attr","size","title"]),m=l||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),n.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,o,{className:a,style:c(c({color:e.color||t.color},t.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==l?n.createElement(l.Consumer,null,(function(e){return t(e)})):t(r)}}}]);
//# sourceMappingURL=component---src-pages-404-js-ad9d01e949fea37621b6.js.map