(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{DxCv:function(e,a,t){"use strict";t("91GP");var n=t("q1tI"),i=t.n(n),s=t("ap0H"),c=t("9eSz"),l=t.n(c),r=t("ma3e"),o=function(e){var a=e.description,t=e.title,n=e.github,s=e.stack,c=e.url,o=e.image,m=e.index;return i.a.createElement("article",{className:"project"},o&&i.a.createElement(l.a,{fluid:o.childImageSharp.fluid,className:"project-img"}),i.a.createElement("div",{className:"project-info"},i.a.createElement("span",{className:"project-number"},"0",m+1,"."),i.a.createElement("h3",null,t||"default-title"),i.a.createElement("p",{className:"project-desc"},a),i.a.createElement("div",{className:"project-stack"},s.map((function(e){return i.a.createElement("span",{key:e.id},e.title)}))),i.a.createElement("div",{className:"project-links"},i.a.createElement("a",{href:n,"aria-label":"Project Github"},i.a.createElement(r.e,{className:"project-icon"})),i.a.createElement("a",{href:c,"aria-label":"Project information"},i.a.createElement(r.j,{className:"project-icon"})))))},m=t("Wbzz");a.a=function(e){var a=e.projects,t=e.title,n=e.showLink;return i.a.createElement("section",{className:"section projects"},i.a.createElement(s.a,{title:t}),i.a.createElement("div",{className:"section-center projects-center"},a.map((function(e,a){return i.a.createElement(o,Object.assign({key:e.id,index:a},e))}))),n&&i.a.createElement(m.Link,{to:"/projects",className:"btn center-btn"},"projects"))}},GxRr:function(e){e.exports=JSON.parse('{"data":{"allStrapiJobs":{"nodes":[{"company":"LendInvest","date":"April 2019 - Present","position":"Web and Product Analyst","desc":[{"id":1,"name":"Process, audit, and analyse SEO impact leading to two-page redesigns based on SEO research and keyword recommendations. "},{"id":3,"name":" Inform dimension modelling for useful and relevant data warehousing of web sessions."},{"id":4,"name":"Create workshops with business leaders to identify strategic metrics to measure and deliver value specific to LI."},{"id":8,"name":"Enhanced reporting using Plotly and Flask deployed on Docker"}]},{"company":"Octopus Labs","date":"September 2018 - May 2019","position":"Web Analyst","desc":[{"id":6,"name":"Created and implemented custom tracking of 20 conversion events, five new custom dimensions including session id tracking and full website audit."},{"id":7,"name":"Created business-tailored and stakeholder-tailored reporting, implementing digital analytics framework "},{"id":9,"name":"Teaching Google Analytics  and Google Data Studio to multiple teams."},{"id":10,"name":"Implemented A/B testing at Octopus"}]},{"company":"Mail Online","date":"May 2017 - August 2019","position":"Web Analyst","desc":[{"id":11,"name":"Performed data mining of competitor videos and posts using Facebook graph API"},{"id":13,"name":"Automated reports using VBA saving approximately one hour per day"},{"id":12,"name":"Conducted deep dives and detailed traffic segmentation for marketing management"}]},{"company":"KCW Today","date":"July 2016 - February 2017","position":"Digital Content & Science Correspondent","desc":[{"id":14,"name":"Optimised and maintained kcwtoday.co.uk, monitoring audience and explaining traffic behaviour."},{"id":15,"name":"Validated testing for website growth, implementing DoubleClick for Publishers tags, site content"},{"id":16,"name":"Planned website upgrade (CMS, hosting, responsive), negotiating proposals within budget"}]},{"company":"CERN","date":"September 2014 - October 2015","position":"Technical Studentship","desc":[{"id":17,"name":"Managed deployment and data analysis of radiation sensors systems (RadMON) at CHARM"},{"id":18,"name":"Co-authored IEEE paper published August 2016, used in EuroMaster’s dissertation (70 %)"},{"id":19,"name":"Created effective lab manual and lab commissioning experiment guide"},{"id":20,"name":"Led measurement campaign involving careful time planning to maximise quality measurements while minimising radioactive damage on instruments as well as personnel for equipment change"}]}]}}}')},RXBc:function(e,a,t){"use strict";t.r(a),t.d(a,"query",(function(){return A}));var n=t("q1tI"),i=t.n(n),s=t("7oih"),c=t("aIyu"),l=t("9eSz"),r=t.n(l),o=t("Wbzz"),m=t("PNo/"),d=function(){var e=c.data.file.childImageSharp.fluid;return i.a.createElement("header",{className:"hero"},i.a.createElement("div",{className:"section-center hero-center"},i.a.createElement("article",{className:"hero-info"},i.a.createElement("div",null,i.a.createElement("div",{className:"underline"}),i.a.createElement("h1",null,"Hi, I'm Nat"),i.a.createElement("h4",null,"Web and Product Analyst"),i.a.createElement(o.Link,{to:"/contact",className:"btn"},"contact me"),i.a.createElement(m.a,null))),i.a.createElement(r.a,{fluid:e,className:"hero-img"})))},u=t("ap0H"),p=t("ma3e"),g=t("Tgqd"),f=[{id:1,icon:i.a.createElement(g.a,{className:"service-icon"}),title:"measurement",text:"My science training enables creating solid experiments and tracking that validate hard work done in Marketing, Front-end and Design"},{id:2,icon:i.a.createElement(p.c,{className:"service-icon"}),title:"analytics",text:"I frame fluid business needs as concrete objectives. Enabling great decisions needs tailored and timely analysis for both frontline colleagues and the C-suite."},{id:3,icon:i.a.createElement(p.d,{className:"service-icon"}),title:"championing",text:"I proactively implement new tools, advanced analysis techniques and enhance datasets. I help promote an analytics culture and train teams on using tools like Google Analytics."}],E=function(){return i.a.createElement("section",{className:"section bg-grey"},i.a.createElement(u.a,{title:"services"}),i.a.createElement("div",{className:"section-center services-center"},f.map((function(e){var a=e.id,t=e.icon,n=e.title,s=e.text;return i.a.createElement("article",{key:a,className:"service"},t,i.a.createElement("h4",null,n),i.a.createElement("div",{className:"underline"}),i.a.createElement("p",null,s))}))))},b=(t("f3/d"),t("GxRr")),h=function(){var e=b.data.allStrapiJobs.nodes,a=i.a.useState(0),t=a[0],n=a[1],s=e[t],c=s.company,l=s.position,r=s.date,m=s.desc;return console.log(c,l,r,m),i.a.createElement("section",{className:"section jobs"},i.a.createElement(u.a,{title:"experience"}),i.a.createElement("div",{className:"jobs-center"},i.a.createElement("div",{className:"btn-container "},e.map((function(e,a){return i.a.createElement("button",{key:e.strapiId,onClick:function(){return n(a)},className:"job-btn "+(a===t&&"active-btn")},e.company)}))),i.a.createElement("article",{className:"job-info"},i.a.createElement("h3",null,l),i.a.createElement("h4",null,c),i.a.createElement("p",{className:"job-date"},r),m.map((function(e){return i.a.createElement("div",{key:e.id,className:"job-desc"},i.a.createElement(p.b,{className:"job-icon"}),i.a.createElement("p",null,e.name))})))),i.a.createElement(o.Link,{to:"/about",className:"btn center-btn"},"more info"))},v=t("DxCv"),N=t("Rfp1"),y=t("EYWl"),A=(a.default=function(e){var a=e.data,t=a.allStrapiProjects.nodes,n=a.allStrapiBlogs.nodes;return i.a.createElement(s.a,null,i.a.createElement(y.a,{title:"Home",description:"homepage for natslabs.com"}),i.a.createElement(d,null),i.a.createElement(E,null),i.a.createElement(h,null),i.a.createElement(v.a,{projects:t,title:"featured projects",showLink:!0}),i.a.createElement(N.a,{blogs:n,title:"latest articles",showLink:!0}))},"3011849190")},Rfp1:function(e,a,t){"use strict";t("91GP");var n=t("q1tI"),i=t.n(n),s=t("ap0H"),c=t("9eSz"),l=t.n(c),r=t("Wbzz"),o=function(e){var a=e.id,t=e.title,n=e.image,s=e.date,c=e.category,o=e.slug,m=e.desc;return i.a.createElement(r.Link,{to:"/blogs/"+o,className:"blog",key:a,"aria-label":t},i.a.createElement("article",null,i.a.createElement(l.a,{fluid:n.childImageSharp.fluid,className:"blog-img"}),i.a.createElement("div",{className:"blog-card"},i.a.createElement("h4",null,t),i.a.createElement("p",null,m),i.a.createElement("div",{className:"blog-footer"},i.a.createElement("p",null,c),i.a.createElement("p",null,s)))))};a.a=function(e){var a=e.blogs,t=e.title,n=e.showLink;return i.a.createElement("section",{className:"section"},i.a.createElement(s.a,{title:t}),i.a.createElement("div",{className:"section-center blogs-center"},a.map((function(e){return i.a.createElement(o,Object.assign({key:e.id},e))}))),n&&i.a.createElement(r.Link,{to:"/blog",className:"btn center-btn"},"blog"))}},aIyu:function(e){e.exports=JSON.parse('{"data":{"file":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,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","aspectRatio":1,"src":"/static/09f3f9d1d0940060e949d89770353493/ee604/hero-img4.png","srcSet":"/static/09f3f9d1d0940060e949d89770353493/69585/hero-img4.png 200w,\\n/static/09f3f9d1d0940060e949d89770353493/497c6/hero-img4.png 400w,\\n/static/09f3f9d1d0940060e949d89770353493/ee604/hero-img4.png 800w,\\n/static/09f3f9d1d0940060e949d89770353493/88361/hero-img4.png 1111w","sizes":"(max-width: 800px) 100vw, 800px"}}}}}')}}]);
//# sourceMappingURL=component---src-pages-index-js-9afa650a5ae84cc61ecd.js.map