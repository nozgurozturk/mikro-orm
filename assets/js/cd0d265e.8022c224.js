(window.webpackJsonp=window.webpackJsonp||[]).push([[822],{1110:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,b=p["".concat(a,".").concat(d)]||p[d]||g[d]||i;return n?o.a.createElement(b,c(c({ref:t},s),{},{components:n})):o.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},894:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(8),i=(n(0),n(1110)),a={title:"Logging"},c={unversionedId:"debugging",id:"version-4.4/debugging",isDocsHomePage:!1,title:"Logging",description:"For development purposes it might come handy to enable logging and debug mode:",source:"@site/versioned_docs/version-4.4/debugging.md",slug:"/debugging",permalink:"/docs/4.4/debugging",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/debugging.md",version:"4.4",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1617396786,formattedLastUpdatedAt:"4/2/2021",sidebar:"version-4.4/docs",previous:{title:"Result cache",permalink:"/docs/4.4/caching"},next:{title:"Smart Nested Populate",permalink:"/docs/4.4/nested-populate"}},l=[{value:"Custom Logger",id:"custom-logger",children:[]},{value:"Logger Namespaces",id:"logger-namespaces",children:[]},{value:"Highlighters",id:"highlighters",children:[]}],s={toc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"For development purposes it might come handy to enable logging and debug mode:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"return MikroORM.init({\n  debug: true,\n});\n")),Object(i.b)("p",null,"By doing this ",Object(i.b)("inlineCode",{parentName:"p"},"MikroORM")," will start using ",Object(i.b)("inlineCode",{parentName:"p"},"console.log()")," function to dump all queries:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"[query] select `e0`.* from `author` as `e0` where `e0`.`name` = ? limit ? [took 2 ms]\n[query] begin [took 1 ms]\n[query] insert into `author` (`name`, `email`, `created_at`, `updated_at`, `terms_accepted`) values (?, ?, ?, ?, ?) [took 2 ms]\n[query] commit [took 2 ms]\n")),Object(i.b)("p",null,"It is also useful for debugging problems with entity discovery, as you will see information\nabout every processed entity:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"[discovery] ORM entity discovery started\n[discovery] - processing entity Author\n[discovery] - using cached metadata for entity Author\n[discovery] - processing entity Book\n[discovery] - processing entity BookTag\n[discovery] - entity discovery finished after 13 ms\n")),Object(i.b)("h2",{id:"custom-logger"},"Custom Logger"),Object(i.b)("p",null,"You can also provide your own logger via ",Object(i.b)("inlineCode",{parentName:"p"},"logger")," option. "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"return MikroORM.init({\n  debug: true,\n  logger: msg => myCustomLogger.log(msg),\n});\n")),Object(i.b)("h2",{id:"logger-namespaces"},"Logger Namespaces"),Object(i.b)("p",null,"There are multiple Logger Namespaces that you can specifically request, while omitting the rest.\nJust specify array of them via the ",Object(i.b)("inlineCode",{parentName:"p"},"debug")," option:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"return MikroORM.init({\n  debug: ['query'], // now only queries will be logged\n});\n")),Object(i.b)("p",null,"Currently, there are 4 namespaces \u2013 ",Object(i.b)("inlineCode",{parentName:"p"},"query"),", ",Object(i.b)("inlineCode",{parentName:"p"},"query-params"),", ",Object(i.b)("inlineCode",{parentName:"p"},"discovery")," and ",Object(i.b)("inlineCode",{parentName:"p"},"info"),"."),Object(i.b)("p",null,"If you provide ",Object(i.b)("inlineCode",{parentName:"p"},"query-params")," then you must also provide ",Object(i.b)("inlineCode",{parentName:"p"},"query")," in order for it to take effect."),Object(i.b)("h2",{id:"highlighters"},"Highlighters"),Object(i.b)("p",null,"Previously Highlight.js was used to highlight various things in the CLI,\nlike SQL and mongo queries, or migrations or entities generated via CLI.\nWhile the library worked fine, it was causing performance issues mainly\nfor those bundling via webpack and using lambdas, as the library was huge."),Object(i.b)("p",null,"In v4 highlighting is disabled by default, and there are 2 highlighters\nyou can optionally use (you need to install them first)."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"import { SqlHighlighter } from '@mikro-orm/sql-highlighter';\n\nMikroORM.init({\n  highlighter: new SqlHighlighter(),\n  // ...\n});\n")),Object(i.b)("p",null,"For MongoDB you can use ",Object(i.b)("inlineCode",{parentName:"p"},"MongoHighlighter")," from ",Object(i.b)("inlineCode",{parentName:"p"},"@mikro-orm/mongo-highlighter"),"\npackage."))}u.isMDXComponent=!0}}]);