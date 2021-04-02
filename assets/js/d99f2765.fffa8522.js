(window.webpackJsonp=window.webpackJsonp||[]).push([[869],{1110:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return O}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),p=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),d=p(t),u=r,O=d["".concat(l,".").concat(u)]||d[u]||s[u]||a;return t?i.a.createElement(O,o(o({ref:n},c),{},{components:t})):i.a.createElement(O,o({ref:n},c))}));function O(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=u;var o={};for(var b in n)hasOwnProperty.call(n,b)&&(o[b]=n[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<a;c++)l[c]=t[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},942:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return b})),t.d(n,"default",(function(){return p}));var r=t(3),i=t(8),a=(t(0),t(1110)),l={id:"knex.knex-1.mariasqlconnectionconfig",title:"Interface: MariaSqlConnectionConfig",sidebar_label:"MariaSqlConnectionConfig",custom_edit_url:null,hide_title:!0},o={unversionedId:"api/interfaces/knex.knex-1.mariasqlconnectionconfig",id:"version-4.5/api/interfaces/knex.knex-1.mariasqlconnectionconfig",isDocsHomePage:!1,title:"Interface: MariaSqlConnectionConfig",description:"Interface: MariaSqlConnectionConfig",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.knex-1.mariasqlconnectionconfig.md",slug:"/api/interfaces/knex.knex-1.mariasqlconnectionconfig",permalink:"/docs/api/interfaces/knex.knex-1.mariasqlconnectionconfig",editUrl:null,version:"4.5",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1617396786,formattedLastUpdatedAt:"4/2/2021",sidebar_label:"MariaSqlConnectionConfig",sidebar:"version-4.5/API",previous:{title:"Interface: Logger",permalink:"/docs/api/interfaces/knex.knex-1.logger"},next:{title:"Interface: MariaSslConfiguration",permalink:"/docs/api/interfaces/knex.knex-1.mariasslconfiguration"}},b=[{value:"Properties",id:"properties",children:[{value:"charset",id:"charset",children:[]},{value:"compress",id:"compress",children:[]},{value:"connTimeout",id:"conntimeout",children:[]},{value:"db",id:"db",children:[]},{value:"host",id:"host",children:[]},{value:"keepQueries",id:"keepqueries",children:[]},{value:"local_infile",id:"local_infile",children:[]},{value:"multiStatements",id:"multistatements",children:[]},{value:"password",id:"password",children:[]},{value:"pingInterval",id:"pinginterval",children:[]},{value:"port",id:"port",children:[]},{value:"protocol",id:"protocol",children:[]},{value:"read_default_file",id:"read_default_file",children:[]},{value:"read_default_group",id:"read_default_group",children:[]},{value:"secureAuth",id:"secureauth",children:[]},{value:"ssl",id:"ssl",children:[]},{value:"streamHWM",id:"streamhwm",children:[]},{value:"unixSocket",id:"unixsocket",children:[]},{value:"user",id:"user",children:[]}]},{value:"Methods",id:"methods",children:[{value:"expirationChecker",id:"expirationchecker",children:[]}]}],c={toc:b};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"interface-mariasqlconnectionconfig"},"Interface: MariaSqlConnectionConfig"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",Object(a.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".MariaSqlConnectionConfig"),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("h3",{id:"charset"},"charset"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"charset"),": ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1968"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"compress"},"compress"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"compress"),": ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1963"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"conntimeout"},"connTimeout"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"connTimeout"),": ",Object(a.b)("em",{parentName:"p"},"number")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1960"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"db"},"db"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"db"),": ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1957"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"host"},"host"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"host"),": ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1953"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"keepqueries"},"keepQueries"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"keepQueries"),": ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1958"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"local_infile"},"local","_","infile"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"local","_","infile"),": ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1965"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"multistatements"},"multiStatements"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"multiStatements"),": ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1959"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"password"},"password"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"password"),": ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1952"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"pinginterval"},"pingInterval"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"pingInterval"),": ",Object(a.b)("em",{parentName:"p"},"number")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1961"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"port"},"port"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"port"),": ",Object(a.b)("em",{parentName:"p"},"number")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1954"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"protocol"},"protocol"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"protocol"),": ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1956"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"read_default_file"},"read","_","default","_","file"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"read","_","default","_","file"),": ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1966"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"read_default_group"},"read","_","default","_","group"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"read","_","default","_","group"),": ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1967"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"secureauth"},"secureAuth"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"secureAuth"),": ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1962"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"ssl"},"ssl"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"ssl"),": ",Object(a.b)("em",{parentName:"p"},"boolean")," ","|"," ",Object(a.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.mariasslconfiguration"},Object(a.b)("em",{parentName:"a"},"MariaSslConfiguration"))),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1964"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"streamhwm"},"streamHWM"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"streamHWM"),": ",Object(a.b)("em",{parentName:"p"},"number")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1969"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"unixsocket"},"unixSocket"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"unixSocket"),": ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1955"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"user"},"user"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"user"),": ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1951"),Object(a.b)("h2",{id:"methods"},"Methods"),Object(a.b)("h3",{id:"expirationchecker"},"expirationChecker"),Object(a.b)("p",null,"\u25b8 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional"),Object(a.b)("strong",{parentName:"p"},"expirationChecker"),"(): ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Returns:")," ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1970"))}p.isMDXComponent=!0}}]);