(self.webpackChunknatslabs=self.webpackChunknatslabs||[]).push([[637],{4129:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(7294),a=(r=o)&&"object"==typeof r&&"default"in r?r.default:r,u=function(){return u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},u.apply(this,arguments)},i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};function l(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function c(e,t){return e(t={exports:{}},t.exports),t.exports}var E=c((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.BLOCKS=void 0,function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block",e.TABLE="table",e.TABLE_ROW="table-row",e.TABLE_CELL="table-cell",e.TABLE_HEADER_CELL="table-header-cell"}(t.BLOCKS||(t.BLOCKS={}))}));l(E);E.BLOCKS;var s=c((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.INLINES=void 0,function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(t.INLINES||(t.INLINES={}))}));l(s);s.INLINES;var f=c((function(e,t){var n;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.BOLD="bold",e.ITALIC="italic",e.UNDERLINE="underline",e.CODE="code",e.SUPERSCRIPT="superscript",e.SUBSCRIPT="subscript"}(n||(n={})),t.default=n}));l(f);var L=c((function(e,t){var n,r=i&&i.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))},o=i&&i.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.V1_MARKS=t.V1_NODE_TYPES=t.TEXT_CONTAINERS=t.HEADINGS=t.CONTAINERS=t.VOID_BLOCKS=t.TABLE_BLOCKS=t.LIST_ITEM_BLOCKS=t.TOP_LEVEL_BLOCKS=void 0;var a=o(f);t.TOP_LEVEL_BLOCKS=[E.BLOCKS.PARAGRAPH,E.BLOCKS.HEADING_1,E.BLOCKS.HEADING_2,E.BLOCKS.HEADING_3,E.BLOCKS.HEADING_4,E.BLOCKS.HEADING_5,E.BLOCKS.HEADING_6,E.BLOCKS.OL_LIST,E.BLOCKS.UL_LIST,E.BLOCKS.HR,E.BLOCKS.QUOTE,E.BLOCKS.EMBEDDED_ENTRY,E.BLOCKS.EMBEDDED_ASSET,E.BLOCKS.TABLE],t.LIST_ITEM_BLOCKS=[E.BLOCKS.PARAGRAPH,E.BLOCKS.HEADING_1,E.BLOCKS.HEADING_2,E.BLOCKS.HEADING_3,E.BLOCKS.HEADING_4,E.BLOCKS.HEADING_5,E.BLOCKS.HEADING_6,E.BLOCKS.OL_LIST,E.BLOCKS.UL_LIST,E.BLOCKS.HR,E.BLOCKS.QUOTE,E.BLOCKS.EMBEDDED_ENTRY,E.BLOCKS.EMBEDDED_ASSET],t.TABLE_BLOCKS=[E.BLOCKS.TABLE,E.BLOCKS.TABLE_ROW,E.BLOCKS.TABLE_CELL,E.BLOCKS.TABLE_HEADER_CELL],t.VOID_BLOCKS=[E.BLOCKS.HR,E.BLOCKS.EMBEDDED_ENTRY,E.BLOCKS.EMBEDDED_ASSET],t.CONTAINERS=((n={})[E.BLOCKS.OL_LIST]=[E.BLOCKS.LIST_ITEM],n[E.BLOCKS.UL_LIST]=[E.BLOCKS.LIST_ITEM],n[E.BLOCKS.LIST_ITEM]=t.LIST_ITEM_BLOCKS,n[E.BLOCKS.QUOTE]=[E.BLOCKS.PARAGRAPH],n[E.BLOCKS.TABLE]=[E.BLOCKS.TABLE_ROW],n[E.BLOCKS.TABLE_ROW]=[E.BLOCKS.TABLE_CELL,E.BLOCKS.TABLE_HEADER_CELL],n[E.BLOCKS.TABLE_CELL]=[E.BLOCKS.PARAGRAPH],n[E.BLOCKS.TABLE_HEADER_CELL]=[E.BLOCKS.PARAGRAPH],n),t.HEADINGS=[E.BLOCKS.HEADING_1,E.BLOCKS.HEADING_2,E.BLOCKS.HEADING_3,E.BLOCKS.HEADING_4,E.BLOCKS.HEADING_5,E.BLOCKS.HEADING_6],t.TEXT_CONTAINERS=r([E.BLOCKS.PARAGRAPH],t.HEADINGS,!0),t.V1_NODE_TYPES=[E.BLOCKS.DOCUMENT,E.BLOCKS.PARAGRAPH,E.BLOCKS.HEADING_1,E.BLOCKS.HEADING_2,E.BLOCKS.HEADING_3,E.BLOCKS.HEADING_4,E.BLOCKS.HEADING_5,E.BLOCKS.HEADING_6,E.BLOCKS.OL_LIST,E.BLOCKS.UL_LIST,E.BLOCKS.LIST_ITEM,E.BLOCKS.HR,E.BLOCKS.QUOTE,E.BLOCKS.EMBEDDED_ENTRY,E.BLOCKS.EMBEDDED_ASSET,s.INLINES.HYPERLINK,s.INLINES.ENTRY_HYPERLINK,s.INLINES.ASSET_HYPERLINK,s.INLINES.EMBEDDED_ENTRY,"text"],t.V1_MARKS=[a.default.BOLD,a.default.CODE,a.default.ITALIC,a.default.UNDERLINE]}));l(L);L.V1_MARKS,L.V1_NODE_TYPES,L.TEXT_CONTAINERS,L.HEADINGS,L.CONTAINERS,L.VOID_BLOCKS,L.TABLE_BLOCKS,L.LIST_ITEM_BLOCKS,L.TOP_LEVEL_BLOCKS;var O=c((function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}));l(O);var S=c((function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}));l(S);var d=c((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n={nodeType:E.BLOCKS.DOCUMENT,data:{},content:[{nodeType:E.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};t.default=n}));l(d);var _=c((function(e,t){function n(e,t){for(var n=0,r=Object.keys(e);n<r.length;n++){if(t===e[r[n]])return!0}return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.isText=t.isBlock=t.isInline=void 0,t.isInline=function(e){return n(s.INLINES,e.nodeType)},t.isBlock=function(e){return n(E.BLOCKS,e.nodeType)},t.isText=function(e){return"text"===e.nodeType}}));l(_);_.isText,_.isBlock,_.isInline;var A=c((function(e,t){var n=i&&i.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),r=i&&i.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=i&&i.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)},a=i&&i.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)"default"!==o&&Object.prototype.hasOwnProperty.call(e,o)&&n(t,e,o);return r(t,e),t},u=i&&i.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.helpers=t.EMPTY_DOCUMENT=t.MARKS=t.INLINES=t.BLOCKS=void 0,Object.defineProperty(t,"BLOCKS",{enumerable:!0,get:function(){return E.BLOCKS}}),Object.defineProperty(t,"INLINES",{enumerable:!0,get:function(){return s.INLINES}}),Object.defineProperty(t,"MARKS",{enumerable:!0,get:function(){return u(f).default}}),o(L,t),o(O,t),o(S,t),Object.defineProperty(t,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return u(d).default}});var l=a(_);t.helpers=l}));l(A);var B,I,p=A.helpers,C=(A.EMPTY_DOCUMENT,A.MARKS),T=A.INLINES,N=A.BLOCKS;function y(e,t){return e.map((function(e,n){return r=K(e,t),a=n,o.isValidElement(r)&&null===r.key?o.cloneElement(r,{key:a}):r;var r,a}))}function K(e,t){var n=t.renderNode,r=t.renderMark,o=t.renderText;if(p.isText(e))return e.marks.reduce((function(e,t){return r[t.type]?r[t.type](e):e}),o?o(e.value):e.value);var u=y(e.content,t);return e.nodeType&&n[e.nodeType]?n[e.nodeType](e,u):a.createElement(a.Fragment,null,u)}var D=((B={})[N.DOCUMENT]=function(e,t){return t},B[N.PARAGRAPH]=function(e,t){return a.createElement("p",null,t)},B[N.HEADING_1]=function(e,t){return a.createElement("h1",null,t)},B[N.HEADING_2]=function(e,t){return a.createElement("h2",null,t)},B[N.HEADING_3]=function(e,t){return a.createElement("h3",null,t)},B[N.HEADING_4]=function(e,t){return a.createElement("h4",null,t)},B[N.HEADING_5]=function(e,t){return a.createElement("h5",null,t)},B[N.HEADING_6]=function(e,t){return a.createElement("h6",null,t)},B[N.EMBEDDED_ENTRY]=function(e,t){return a.createElement("div",null,t)},B[N.UL_LIST]=function(e,t){return a.createElement("ul",null,t)},B[N.OL_LIST]=function(e,t){return a.createElement("ol",null,t)},B[N.LIST_ITEM]=function(e,t){return a.createElement("li",null,t)},B[N.QUOTE]=function(e,t){return a.createElement("blockquote",null,t)},B[N.HR]=function(){return a.createElement("hr",null)},B[N.TABLE]=function(e,t){return a.createElement("table",null,a.createElement("tbody",null,t))},B[N.TABLE_ROW]=function(e,t){return a.createElement("tr",null,t)},B[N.TABLE_HEADER_CELL]=function(e,t){return a.createElement("th",null,t)},B[N.TABLE_CELL]=function(e,t){return a.createElement("td",null,t)},B[T.ASSET_HYPERLINK]=function(e){return b(T.ASSET_HYPERLINK,e)},B[T.ENTRY_HYPERLINK]=function(e){return b(T.ENTRY_HYPERLINK,e)},B[T.EMBEDDED_ENTRY]=function(e){return b(T.EMBEDDED_ENTRY,e)},B[T.HYPERLINK]=function(e,t){return a.createElement("a",{href:e.data.uri},t)},B),m=((I={})[C.BOLD]=function(e){return a.createElement("b",null,e)},I[C.ITALIC]=function(e){return a.createElement("i",null,e)},I[C.UNDERLINE]=function(e){return a.createElement("u",null,e)},I[C.CODE]=function(e){return a.createElement("code",null,e)},I[C.SUPERSCRIPT]=function(e){return a.createElement("sup",null,e)},I[C.SUBSCRIPT]=function(e){return a.createElement("sub",null,e)},I);function b(e,t){return a.createElement("span",{key:t.data.target.sys.id},"type: ",t.nodeType," id: ",t.data.target.sys.id)}t.documentToReactComponents=function(e,t){return void 0===t&&(t={}),e?K(e,{renderNode:u(u({},D),t.renderNode),renderMark:u(u({},m),t.renderMark),renderText:t.renderText}):null}},549:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BLOCKS=void 0,function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block",e.TABLE="table",e.TABLE_ROW="table-row",e.TABLE_CELL="table-cell",e.TABLE_HEADER_CELL="table-header-cell"}(t.BLOCKS||(t.BLOCKS={}))},1928:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(549),o={nodeType:r.BLOCKS.DOCUMENT,data:{},content:[{nodeType:r.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};t.default=o},6061:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isText=t.isBlock=t.isInline=void 0;var r=n(549),o=n(7845);function a(e,t){for(var n=0,r=Object.keys(e);n<r.length;n++){if(t===e[r[n]])return!0}return!1}t.isInline=function(e){return a(o.INLINES,e.nodeType)},t.isBlock=function(e){return a(r.BLOCKS,e.nodeType)},t.isText=function(e){return"text"===e.nodeType}},6437:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)},u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.helpers=t.EMPTY_DOCUMENT=t.MARKS=t.INLINES=t.BLOCKS=void 0;var l=n(549);Object.defineProperty(t,"BLOCKS",{enumerable:!0,get:function(){return l.BLOCKS}});var c=n(7845);Object.defineProperty(t,"INLINES",{enumerable:!0,get:function(){return c.INLINES}});var E=n(1376);Object.defineProperty(t,"MARKS",{enumerable:!0,get:function(){return i(E).default}}),a(n(7951),t),a(n(167),t),a(n(1911),t);var s=n(1928);Object.defineProperty(t,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return i(s).default}});var f=u(n(6061));t.helpers=f},7845:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.INLINES=void 0,function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(t.INLINES||(t.INLINES={}))},1376:function(e,t){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.BOLD="bold",e.ITALIC="italic",e.UNDERLINE="underline",e.CODE="code",e.SUPERSCRIPT="superscript",e.SUBSCRIPT="subscript"}(n||(n={})),t.default=n},1911:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},7951:function(e,t,n){"use strict";var r,o=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.V1_MARKS=t.V1_NODE_TYPES=t.TEXT_CONTAINERS=t.HEADINGS=t.CONTAINERS=t.VOID_BLOCKS=t.TABLE_BLOCKS=t.LIST_ITEM_BLOCKS=t.TOP_LEVEL_BLOCKS=void 0;var u=n(549),i=n(7845),l=a(n(1376));t.TOP_LEVEL_BLOCKS=[u.BLOCKS.PARAGRAPH,u.BLOCKS.HEADING_1,u.BLOCKS.HEADING_2,u.BLOCKS.HEADING_3,u.BLOCKS.HEADING_4,u.BLOCKS.HEADING_5,u.BLOCKS.HEADING_6,u.BLOCKS.OL_LIST,u.BLOCKS.UL_LIST,u.BLOCKS.HR,u.BLOCKS.QUOTE,u.BLOCKS.EMBEDDED_ENTRY,u.BLOCKS.EMBEDDED_ASSET,u.BLOCKS.TABLE],t.LIST_ITEM_BLOCKS=[u.BLOCKS.PARAGRAPH,u.BLOCKS.HEADING_1,u.BLOCKS.HEADING_2,u.BLOCKS.HEADING_3,u.BLOCKS.HEADING_4,u.BLOCKS.HEADING_5,u.BLOCKS.HEADING_6,u.BLOCKS.OL_LIST,u.BLOCKS.UL_LIST,u.BLOCKS.HR,u.BLOCKS.QUOTE,u.BLOCKS.EMBEDDED_ENTRY,u.BLOCKS.EMBEDDED_ASSET],t.TABLE_BLOCKS=[u.BLOCKS.TABLE,u.BLOCKS.TABLE_ROW,u.BLOCKS.TABLE_CELL,u.BLOCKS.TABLE_HEADER_CELL],t.VOID_BLOCKS=[u.BLOCKS.HR,u.BLOCKS.EMBEDDED_ENTRY,u.BLOCKS.EMBEDDED_ASSET],t.CONTAINERS=((r={})[u.BLOCKS.OL_LIST]=[u.BLOCKS.LIST_ITEM],r[u.BLOCKS.UL_LIST]=[u.BLOCKS.LIST_ITEM],r[u.BLOCKS.LIST_ITEM]=t.LIST_ITEM_BLOCKS,r[u.BLOCKS.QUOTE]=[u.BLOCKS.PARAGRAPH],r[u.BLOCKS.TABLE]=[u.BLOCKS.TABLE_ROW],r[u.BLOCKS.TABLE_ROW]=[u.BLOCKS.TABLE_CELL,u.BLOCKS.TABLE_HEADER_CELL],r[u.BLOCKS.TABLE_CELL]=[u.BLOCKS.PARAGRAPH],r[u.BLOCKS.TABLE_HEADER_CELL]=[u.BLOCKS.PARAGRAPH],r),t.HEADINGS=[u.BLOCKS.HEADING_1,u.BLOCKS.HEADING_2,u.BLOCKS.HEADING_3,u.BLOCKS.HEADING_4,u.BLOCKS.HEADING_5,u.BLOCKS.HEADING_6],t.TEXT_CONTAINERS=o([u.BLOCKS.PARAGRAPH],t.HEADINGS,!0),t.V1_NODE_TYPES=[u.BLOCKS.DOCUMENT,u.BLOCKS.PARAGRAPH,u.BLOCKS.HEADING_1,u.BLOCKS.HEADING_2,u.BLOCKS.HEADING_3,u.BLOCKS.HEADING_4,u.BLOCKS.HEADING_5,u.BLOCKS.HEADING_6,u.BLOCKS.OL_LIST,u.BLOCKS.UL_LIST,u.BLOCKS.LIST_ITEM,u.BLOCKS.HR,u.BLOCKS.QUOTE,u.BLOCKS.EMBEDDED_ENTRY,u.BLOCKS.EMBEDDED_ASSET,i.INLINES.HYPERLINK,i.INLINES.ENTRY_HYPERLINK,i.INLINES.ASSET_HYPERLINK,i.INLINES.EMBEDDED_ENTRY,"text"],t.V1_MARKS=[l.default.BOLD,l.default.CODE,l.default.ITALIC,l.default.UNDERLINE]},167:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},6831:function(e,t,n){"use strict";const r=n(3150),o=n(3535),a=n(3126),u=(e,t)=>{if("string"!=typeof e)throw new TypeError(`Expected a string, got \`${typeof e}\``);const n=(t={separator:"-",lowercase:!0,decamelize:!0,customReplacements:[],preserveLeadingUnderscore:!1,...t}).preserveLeadingUnderscore&&e.startsWith("_"),u=new Map([...a,...t.customReplacements]);e=o(e,{customReplacements:u}),t.decamelize&&(e=(e=>e.replace(/([A-Z]{2,})(\d+)/g,"$1 $2").replace(/([a-z\d]+)([A-Z]{2,})/g,"$1 $2").replace(/([a-z\d])([A-Z])/g,"$1 $2").replace(/([A-Z]+)([A-Z][a-z\d]+)/g,"$1 $2"))(e));let i=/[^a-zA-Z\d]+/g;return t.lowercase&&(e=e.toLowerCase(),i=/[^a-z\d]+/g),e=(e=e.replace(i,t.separator)).replace(/\\/g,""),t.separator&&(e=((e,t)=>{const n=r(t);return e.replace(new RegExp(`${n}{2,}`,"g"),t).replace(new RegExp(`^${n}|${n}$`,"g"),"")})(e,t.separator)),n&&(e=`_${e}`),e};e.exports=u,e.exports.counter=()=>{const e=new Map,t=(t,n)=>{if(!(t=u(t,n)))return"";const r=t.toLowerCase(),o=e.get(r.replace(/(?:-\d+?)+?$/,""))||0,a=e.get(r);e.set(r,"number"==typeof a?a+1:1);const i=e.get(r)||2;return(i>=2||o>2)&&(t=`${t}-${i}`),t};return t.reset=()=>{e.clear()},t}},3126:function(e){"use strict";e.exports=[["&"," and "],["🦄"," unicorn "],["♥"," love "]]},3535:function(e,t,n){"use strict";const r=n(6688),o=n(4826),a=n(6724);e.exports=(e,t)=>{if("string"!=typeof e)throw new TypeError(`Expected a string, got \`${typeof e}\``);t={customReplacements:[],...t};const n=new Map([...a,...t.customReplacements]);return e=((e,t)=>{for(const[n,r]of t)e=e.replace(new RegExp(o(n),"g"),r);return e})(e=e.normalize(),n),e=r(e)}},4826:function(e){"use strict";const t=/[|\\{}()[\]^$+*?.-]/g;e.exports=e=>{if("string"!=typeof e)throw new TypeError("Expected a string");return e.replace(t,"\\$&")}},6724:function(e){"use strict";e.exports=[["ß","ss"],["ä","ae"],["Ä","Ae"],["ö","oe"],["Ö","Oe"],["ü","ue"],["Ü","Ue"],["À","A"],["Á","A"],["Â","A"],["Ã","A"],["Ä","Ae"],["Å","A"],["Æ","AE"],["Ç","C"],["È","E"],["É","E"],["Ê","E"],["Ë","E"],["Ì","I"],["Í","I"],["Î","I"],["Ï","I"],["Ð","D"],["Ñ","N"],["Ò","O"],["Ó","O"],["Ô","O"],["Õ","O"],["Ö","Oe"],["Ő","O"],["Ø","O"],["Ù","U"],["Ú","U"],["Û","U"],["Ü","Ue"],["Ű","U"],["Ý","Y"],["Þ","TH"],["ß","ss"],["à","a"],["á","a"],["â","a"],["ã","a"],["ä","ae"],["å","a"],["æ","ae"],["ç","c"],["è","e"],["é","e"],["ê","e"],["ë","e"],["ì","i"],["í","i"],["î","i"],["ï","i"],["ð","d"],["ñ","n"],["ò","o"],["ó","o"],["ô","o"],["õ","o"],["ö","oe"],["ő","o"],["ø","o"],["ù","u"],["ú","u"],["û","u"],["ü","ue"],["ű","u"],["ý","y"],["þ","th"],["ÿ","y"],["ẞ","SS"],["à","a"],["À","A"],["á","a"],["Á","A"],["â","a"],["Â","A"],["ã","a"],["Ã","A"],["è","e"],["È","E"],["é","e"],["É","E"],["ê","e"],["Ê","E"],["ì","i"],["Ì","I"],["í","i"],["Í","I"],["ò","o"],["Ò","O"],["ó","o"],["Ó","O"],["ô","o"],["Ô","O"],["õ","o"],["Õ","O"],["ù","u"],["Ù","U"],["ú","u"],["Ú","U"],["ý","y"],["Ý","Y"],["ă","a"],["Ă","A"],["Đ","D"],["đ","d"],["ĩ","i"],["Ĩ","I"],["ũ","u"],["Ũ","U"],["ơ","o"],["Ơ","O"],["ư","u"],["Ư","U"],["ạ","a"],["Ạ","A"],["ả","a"],["Ả","A"],["ấ","a"],["Ấ","A"],["ầ","a"],["Ầ","A"],["ẩ","a"],["Ẩ","A"],["ẫ","a"],["Ẫ","A"],["ậ","a"],["Ậ","A"],["ắ","a"],["Ắ","A"],["ằ","a"],["Ằ","A"],["ẳ","a"],["Ẳ","A"],["ẵ","a"],["Ẵ","A"],["ặ","a"],["Ặ","A"],["ẹ","e"],["Ẹ","E"],["ẻ","e"],["Ẻ","E"],["ẽ","e"],["Ẽ","E"],["ế","e"],["Ế","E"],["ề","e"],["Ề","E"],["ể","e"],["Ể","E"],["ễ","e"],["Ễ","E"],["ệ","e"],["Ệ","E"],["ỉ","i"],["Ỉ","I"],["ị","i"],["Ị","I"],["ọ","o"],["Ọ","O"],["ỏ","o"],["Ỏ","O"],["ố","o"],["Ố","O"],["ồ","o"],["Ồ","O"],["ổ","o"],["Ổ","O"],["ỗ","o"],["Ỗ","O"],["ộ","o"],["Ộ","O"],["ớ","o"],["Ớ","O"],["ờ","o"],["Ờ","O"],["ở","o"],["Ở","O"],["ỡ","o"],["Ỡ","O"],["ợ","o"],["Ợ","O"],["ụ","u"],["Ụ","U"],["ủ","u"],["Ủ","U"],["ứ","u"],["Ứ","U"],["ừ","u"],["Ừ","U"],["ử","u"],["Ử","U"],["ữ","u"],["Ữ","U"],["ự","u"],["Ự","U"],["ỳ","y"],["Ỳ","Y"],["ỵ","y"],["Ỵ","Y"],["ỷ","y"],["Ỷ","Y"],["ỹ","y"],["Ỹ","Y"],["ء","e"],["آ","a"],["أ","a"],["ؤ","w"],["إ","i"],["ئ","y"],["ا","a"],["ب","b"],["ة","t"],["ت","t"],["ث","th"],["ج","j"],["ح","h"],["خ","kh"],["د","d"],["ذ","dh"],["ر","r"],["ز","z"],["س","s"],["ش","sh"],["ص","s"],["ض","d"],["ط","t"],["ظ","z"],["ع","e"],["غ","gh"],["ـ","_"],["ف","f"],["ق","q"],["ك","k"],["ل","l"],["م","m"],["ن","n"],["ه","h"],["و","w"],["ى","a"],["ي","y"],["َ‎","a"],["ُ","u"],["ِ‎","i"],["٠","0"],["١","1"],["٢","2"],["٣","3"],["٤","4"],["٥","5"],["٦","6"],["٧","7"],["٨","8"],["٩","9"],["چ","ch"],["ک","k"],["گ","g"],["پ","p"],["ژ","zh"],["ی","y"],["۰","0"],["۱","1"],["۲","2"],["۳","3"],["۴","4"],["۵","5"],["۶","6"],["۷","7"],["۸","8"],["۹","9"],["ټ","p"],["ځ","z"],["څ","c"],["ډ","d"],["ﺫ","d"],["ﺭ","r"],["ړ","r"],["ﺯ","z"],["ږ","g"],["ښ","x"],["ګ","g"],["ڼ","n"],["ۀ","e"],["ې","e"],["ۍ","ai"],["ٹ","t"],["ڈ","d"],["ڑ","r"],["ں","n"],["ہ","h"],["ھ","h"],["ے","e"],["А","A"],["а","a"],["Б","B"],["б","b"],["В","V"],["в","v"],["Г","G"],["г","g"],["Д","D"],["д","d"],["Е","E"],["е","e"],["Ж","Zh"],["ж","zh"],["З","Z"],["з","z"],["И","I"],["и","i"],["Й","J"],["й","j"],["К","K"],["к","k"],["Л","L"],["л","l"],["М","M"],["м","m"],["Н","N"],["н","n"],["О","O"],["о","o"],["П","P"],["п","p"],["Р","R"],["р","r"],["С","S"],["с","s"],["Т","T"],["т","t"],["У","U"],["у","u"],["Ф","F"],["ф","f"],["Х","H"],["х","h"],["Ц","Cz"],["ц","cz"],["Ч","Ch"],["ч","ch"],["Ш","Sh"],["ш","sh"],["Щ","Shh"],["щ","shh"],["Ъ",""],["ъ",""],["Ы","Y"],["ы","y"],["Ь",""],["ь",""],["Э","E"],["э","e"],["Ю","Yu"],["ю","yu"],["Я","Ya"],["я","ya"],["Ё","Yo"],["ё","yo"],["ă","a"],["Ă","A"],["ș","s"],["Ș","S"],["ț","t"],["Ț","T"],["ţ","t"],["Ţ","T"],["ş","s"],["Ş","S"],["ç","c"],["Ç","C"],["ğ","g"],["Ğ","G"],["ı","i"],["İ","I"],["ա","a"],["Ա","A"],["բ","b"],["Բ","B"],["գ","g"],["Գ","G"],["դ","d"],["Դ","D"],["ե","ye"],["Ե","Ye"],["զ","z"],["Զ","Z"],["է","e"],["Է","E"],["ը","y"],["Ը","Y"],["թ","t"],["Թ","T"],["ժ","zh"],["Ժ","Zh"],["ի","i"],["Ի","I"],["լ","l"],["Լ","L"],["խ","kh"],["Խ","Kh"],["ծ","ts"],["Ծ","Ts"],["կ","k"],["Կ","K"],["հ","h"],["Հ","H"],["ձ","dz"],["Ձ","Dz"],["ղ","gh"],["Ղ","Gh"],["ճ","tch"],["Ճ","Tch"],["մ","m"],["Մ","M"],["յ","y"],["Յ","Y"],["ն","n"],["Ն","N"],["շ","sh"],["Շ","Sh"],["ո","vo"],["Ո","Vo"],["չ","ch"],["Չ","Ch"],["պ","p"],["Պ","P"],["ջ","j"],["Ջ","J"],["ռ","r"],["Ռ","R"],["ս","s"],["Ս","S"],["վ","v"],["Վ","V"],["տ","t"],["Տ","T"],["ր","r"],["Ր","R"],["ց","c"],["Ց","C"],["ու","u"],["ՈՒ","U"],["Ու","U"],["փ","p"],["Փ","P"],["ք","q"],["Ք","Q"],["օ","o"],["Օ","O"],["ֆ","f"],["Ֆ","F"],["և","yev"],["ა","a"],["ბ","b"],["გ","g"],["დ","d"],["ე","e"],["ვ","v"],["ზ","z"],["თ","t"],["ი","i"],["კ","k"],["ლ","l"],["მ","m"],["ნ","n"],["ო","o"],["პ","p"],["ჟ","zh"],["რ","r"],["ს","s"],["ტ","t"],["უ","u"],["ფ","ph"],["ქ","q"],["ღ","gh"],["ყ","k"],["შ","sh"],["ჩ","ch"],["ც","ts"],["ძ","dz"],["წ","ts"],["ჭ","tch"],["ხ","kh"],["ჯ","j"],["ჰ","h"],["č","c"],["ď","d"],["ě","e"],["ň","n"],["ř","r"],["š","s"],["ť","t"],["ů","u"],["ž","z"],["Č","C"],["Ď","D"],["Ě","E"],["Ň","N"],["Ř","R"],["Š","S"],["Ť","T"],["Ů","U"],["Ž","Z"],["ހ","h"],["ށ","sh"],["ނ","n"],["ރ","r"],["ބ","b"],["ޅ","lh"],["ކ","k"],["އ","a"],["ވ","v"],["މ","m"],["ފ","f"],["ދ","dh"],["ތ","th"],["ލ","l"],["ގ","g"],["ޏ","gn"],["ސ","s"],["ޑ","d"],["ޒ","z"],["ޓ","t"],["ޔ","y"],["ޕ","p"],["ޖ","j"],["ޗ","ch"],["ޘ","tt"],["ޙ","hh"],["ޚ","kh"],["ޛ","th"],["ޜ","z"],["ޝ","sh"],["ޞ","s"],["ޟ","d"],["ޠ","t"],["ޡ","z"],["ޢ","a"],["ޣ","gh"],["ޤ","q"],["ޥ","w"],["ަ","a"],["ާ","aa"],["ި","i"],["ީ","ee"],["ު","u"],["ޫ","oo"],["ެ","e"],["ޭ","ey"],["ޮ","o"],["ޯ","oa"],["ް",""],["α","a"],["β","v"],["γ","g"],["δ","d"],["ε","e"],["ζ","z"],["η","i"],["θ","th"],["ι","i"],["κ","k"],["λ","l"],["μ","m"],["ν","n"],["ξ","ks"],["ο","o"],["π","p"],["ρ","r"],["σ","s"],["τ","t"],["υ","y"],["φ","f"],["χ","x"],["ψ","ps"],["ω","o"],["ά","a"],["έ","e"],["ί","i"],["ό","o"],["ύ","y"],["ή","i"],["ώ","o"],["ς","s"],["ϊ","i"],["ΰ","y"],["ϋ","y"],["ΐ","i"],["Α","A"],["Β","B"],["Γ","G"],["Δ","D"],["Ε","E"],["Ζ","Z"],["Η","I"],["Θ","TH"],["Ι","I"],["Κ","K"],["Λ","L"],["Μ","M"],["Ν","N"],["Ξ","KS"],["Ο","O"],["Π","P"],["Ρ","R"],["Σ","S"],["Τ","T"],["Υ","Y"],["Φ","F"],["Χ","X"],["Ψ","PS"],["Ω","O"],["Ά","A"],["Έ","E"],["Ί","I"],["Ό","O"],["Ύ","Y"],["Ή","I"],["Ώ","O"],["Ϊ","I"],["Ϋ","Y"],["ā","a"],["ē","e"],["ģ","g"],["ī","i"],["ķ","k"],["ļ","l"],["ņ","n"],["ū","u"],["Ā","A"],["Ē","E"],["Ģ","G"],["Ī","I"],["Ķ","K"],["Ļ","L"],["Ņ","N"],["Ū","U"],["č","c"],["š","s"],["ž","z"],["Č","C"],["Š","S"],["Ž","Z"],["ą","a"],["č","c"],["ę","e"],["ė","e"],["į","i"],["š","s"],["ų","u"],["ū","u"],["ž","z"],["Ą","A"],["Č","C"],["Ę","E"],["Ė","E"],["Į","I"],["Š","S"],["Ų","U"],["Ū","U"],["Ќ","Kj"],["ќ","kj"],["Љ","Lj"],["љ","lj"],["Њ","Nj"],["њ","nj"],["Тс","Ts"],["тс","ts"],["ą","a"],["ć","c"],["ę","e"],["ł","l"],["ń","n"],["ś","s"],["ź","z"],["ż","z"],["Ą","A"],["Ć","C"],["Ę","E"],["Ł","L"],["Ń","N"],["Ś","S"],["Ź","Z"],["Ż","Z"],["Є","Ye"],["І","I"],["Ї","Yi"],["Ґ","G"],["є","ye"],["і","i"],["ї","yi"],["ґ","g"]]},3903:function(e,t,n){"use strict";n.r(t);var r=n(3346),o=n.n(r),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function u(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var i={},l=function(e){return e&&e.sys&&"Link"===e.sys.type},c=function(e){return e.type+"!"+e.id},E=function e(t,n,r,o){if(n(t))return r(t);if(t&&"object"===(void 0===t?"undefined":a(t))){for(var u in t)t.hasOwnProperty(u)&&(t[u]=e(t[u],n,r,o));o&&(t=function(e){if(Array.isArray(e))return e.filter((function(e){return e!==i}));for(var t in e)e[t]===i&&delete e[t];return e}(t))}return t},s=function(e,t,n){var r=function(e,t){var n=t.sys,r=n.linkType,o=n.id,a=c({type:r,id:o});return e.get(a)||i}(e,t);return r===i?n?r:t:r};t.default=function(e,t){if(t=t||{},!e.items)return[];var n=o()(e),r=Object.keys(n.includes||{}).reduce((function(t,n){return[].concat(u(t),u(e.includes[n]))}),[]),a=[].concat(u(n.items),u(r)),i=new Map(a.map((function(e){return[c(e.sys),e]})));return a.forEach((function(e){var n=function(e,t){return Array.isArray(t)?Object.keys(e).filter((function(e){return-1!==t.indexOf(e)})).reduce((function(t,n){return t[n]=e[n],t}),{}):e}(e,t.itemEntryPoints);Object.assign(e,E(n,l,(function(e){return s(i,e,t.removeUnresolved)}),t.removeUnresolved))})),n.items}},3150:function(e){"use strict";e.exports=e=>{if("string"!=typeof e)throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}},3346:function(e,t,n){e.exports=function(){"use strict";var e=Function.prototype.toString,t=Object.create,r=Object.defineProperty,o=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,i=Object.getPrototypeOf,l=Object.prototype,c=l.hasOwnProperty,E=l.propertyIsEnumerable,s="function"==typeof u,f="function"==typeof WeakMap,L=function(){if(f)return function(){return new WeakMap};var e=function(){function e(){this._keys=[],this._values=[]}return e.prototype.has=function(e){return!!~this._keys.indexOf(e)},e.prototype.get=function(e){return this._values[this._keys.indexOf(e)]},e.prototype.set=function(e,t){this._keys.push(e),this._values.push(t)},e}();return function(){return new e}}(),O=function(n,r){var o=n.__proto__||i(n);if(!o)return t(null);var a=o.constructor;if(a===r.Object)return o===r.Object.prototype?{}:t(o);if(~e.call(a).indexOf("[native code]"))try{return new a}catch(l){}return t(o)},S=function(e,t,n,r){var o=O(e,t);for(var a in r.set(e,o),e)c.call(e,a)&&(o[a]=n(e[a],r));if(s)for(var i=u(e),l=0,f=i.length,L=void 0;l<f;++l)L=i[l],E.call(e,L)&&(o[L]=n(e[L],r));return o},d=function(e,t,n,i){var l=O(e,t);i.set(e,l);for(var c=s?a(e).concat(u(e)):a(e),E=0,f=c.length,L=void 0,S=void 0;E<f;++E)if("callee"!==(L=c[E])&&"caller"!==L)if(S=o(e,L)){S.get||S.set||(S.value=n(e[L],i));try{r(l,L,S)}catch(d){l[L]=S.value}}else l[L]=n(e[L],i);return l},_=function(e){var t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t},A=Array.isArray,B=Object.getPrototypeOf,I=function(){return"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==n.g?n.g:(console&&console.error&&console.error('Unable to locate global object, returning "this".'),this)}();function p(e,t){var n=!(!t||!t.isStrict),r=t&&t.realm||I,o=n?d:S,a=function(e,t){if(!e||"object"!=typeof e)return e;if(t.has(e))return t.get(e);var u,i=e.__proto__||B(e),l=i&&i.constructor;if(!l||l===r.Object)return o(e,r,a,t);if(A(e)){if(n)return d(e,r,a,t);u=new l,t.set(e,u);for(var c=0,E=e.length;c<E;++c)u[c]=a(e[c],t);return u}if(e instanceof r.Date)return new l(e.getTime());if(e instanceof r.RegExp)return(u=new l(e.source,e.flags||_(e))).lastIndex=e.lastIndex,u;if(r.Map&&e instanceof r.Map)return u=new l,t.set(e,u),e.forEach((function(e,n){u.set(n,a(e,t))})),u;if(r.Set&&e instanceof r.Set)return u=new l,t.set(e,u),e.forEach((function(e){u.add(a(e,t))})),u;if(r.Blob&&e instanceof r.Blob)return e.slice(0,e.size,e.type);if(r.Buffer&&r.Buffer.isBuffer(e))return u=r.Buffer.allocUnsafe?r.Buffer.allocUnsafe(e.length):new l(e.length),t.set(e,u),e.copy(u),u;if(r.ArrayBuffer){if(r.ArrayBuffer.isView(e))return u=new l(e.buffer.slice(0)),t.set(e,u),u;if(e instanceof r.ArrayBuffer)return u=e.slice(0),t.set(e,u),u}return"function"==typeof e.then||e instanceof Error||r.WeakMap&&e instanceof r.WeakMap||r.WeakSet&&e instanceof r.WeakSet?e:o(e,r,a,t)};return a(e,L())}return p.default=p,p.strict=function(e,t){return p(e,{isStrict:!0,realm:t?t.realm:void 0})},p}()},8872:function(e,t,n){"use strict";var r=n(4836);t.Z=function(e,t){let{raw:n,references:r}=e;void 0===t&&(t={});const u=JSON.parse(n);if(!r||!r.length)return(0,o.documentToReactComponents)(u,t);const i={items:[{sys:{type:"Entry"},richText:u}],includes:{Entry:r.filter((e=>{let{__typename:t}=e;return"ContentfulAsset"!==t})).map((e=>({...e,sys:{type:"Entry",id:e.contentful_id}}))),Asset:r.filter((e=>{let{__typename:t}=e;return"ContentfulAsset"===t})).map((e=>({...e,sys:{type:"Asset",id:e.contentful_id}})))}},l=(0,a.default)(i,{removeUnresolved:!0});return(0,o.documentToReactComponents)(l[0].richText,t)};var o=n(4129),a=r(n(3903))},8329:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return S}});var r=n(7294),o=n(1883),a=n(9754),u=n(6406),i=n(8872),l=n(6437),c=n(6831),E=n.n(c),s=n(3723);const f=e=>r.createElement("a",{href:"#"+E()(e[0]),className:" relative before:md:content-['#'] before:absolute  before:inset-x-hash  before:text-md  before:text-gray-300 hover:md:before:content-['#'] hover:before:text-brand-default"},e),L={renderMark:{[l.MARKS.BOLD]:e=>r.createElement("b",{className:"font-bold"},e),[l.MARKS.ITALIC]:e=>r.createElement("i",{className:"font-italic"},e),[l.MARKS.UNDERLINE]:e=>r.createElement("u",{className:"underline"},e),[l.MARKS.CODE]:e=>r.createElement("code",{className:"font-mono px-1 py-2 mx-1 bg-gray-100 rounded text-sm"},e)},renderNode:{[l.INLINES.HYPERLINK]:(e,t)=>r.createElement("a",{href:e.data.uri,target:"_blank",rel:"noreferrer",className:"text-brand-default underline"},t),[l.BLOCKS.HEADING_1]:(e,t)=>r.createElement("h2",{className:"text-3xl sm:text-4xl text-left font-black text-gray-700 leading-tight mb-2"},t),[l.BLOCKS.HEADING_2]:(e,t)=>r.createElement("h2",{className:"text-3xl sm:text-4xl text-left font-black text-gray-700 leading-tight mb-2"},f(t)),[l.BLOCKS.HEADING_3]:(e,t)=>r.createElement("h3",{className:"text-2xl sm:text-3xl text-left font-black text-gray-700 leading-tight mb-2"},f(t)),[l.BLOCKS.HEADING_4]:(e,t)=>r.createElement("h4",{className:"text-xl sm:text-2xl text-left font-black text-gray-700 leading-tight mb-2"},f(t)),[l.BLOCKS.HEADING_5]:(e,t)=>r.createElement("h5",{className:"text-lg sm:text-xl text-left font-black text-gray-700 leading-tight mb-2"},f(t)),[l.BLOCKS.HEADING_6]:(e,t)=>r.createElement("h6",{className:"text-md sm:text-lg text-left font-black text-gray-700 leading-tight mb-2"},f(t)),[l.BLOCKS.OL_LIST]:(e,t)=>r.createElement("ol",{className:"list-decimal pl-4"},t),[l.BLOCKS.UL_LIST]:(e,t)=>r.createElement("ul",{className:"list-disc pl-4"},t),[l.BLOCKS.LIST_ITEM]:(e,t)=>r.createElement("li",{className:"mb-1"},t),[l.BLOCKS.PARAGRAPH]:(e,t)=>""===e.content[0].value?r.createElement("br",null):r.createElement("p",{className:"leading-loose"},t),[l.BLOCKS.QUOTE]:e=>r.createElement("blockquote",{className:"border-l-4 border-brand-primary bg-gray-50 p-3 rounded font-bold my-6"},r.createElement(r.Fragment,null,'"',e.content[0].content[0].value,'"')),[l.BLOCKS.HR]:()=>r.createElement("hr",{className:"mb-6"}),[l.BLOCKS.EMBEDDED_ASSET]:e=>{const{gatsbyImageData:t,description:n}=e.data.target;return r.createElement(s.G,{image:(0,s.c)(t),alt:n,style:{display:"block",margin:"0 auto"}})}}};var O=e=>{let{richText:t}=e;return r.createElement("div",null,(0,i.Z)(t,L))};var S=e=>{let{data:t}=e;console.log("blogs:",t);const{content:n,title:i}=t.blog,{description:l}=t.contentfulBlogPostDescriptionTextNode;return r.createElement(a.Z,null,r.createElement(u.H,{title:i,description:l}),r.createElement("section",{className:"blog-template"},r.createElement("div",{className:"section-center"},r.createElement("article",{className:"blog-content"},r.createElement("h1",null,i),r.createElement(O,{richText:n})),r.createElement(o.Link,{to:"/blog",className:"btn center-btn"},"blog"))))}},6688:function(e,t,n){var r="[object Symbol]",o=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,a=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]","g"),u="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,i="object"==typeof self&&self&&self.Object===Object&&self,l=u||i||Function("return this")();var c,E=(c={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"ss"},function(e){return null==c?void 0:c[e]}),s=Object.prototype.toString,f=l.Symbol,L=f?f.prototype:void 0,O=L?L.toString:void 0;function S(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&s.call(e)==r}(e))return O?O.call(e):"";var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t}e.exports=function(e){var t;return(e=null==(t=e)?"":S(t))&&e.replace(o,E).replace(a,"")}}}]);
//# sourceMappingURL=component---src-templates-blog-template-js-d2cfc2ec857934772bfd.js.map