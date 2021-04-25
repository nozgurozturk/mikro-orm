(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1026:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return O}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var b=i.a.createContext({}),s=function(e){var n=i.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=s(e.components);return i.a.createElement(b.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),l=s(t),u=r,O=l["".concat(p,".").concat(u)]||l[u]||m[u]||a;return t?i.a.createElement(O,o(o({ref:n},b),{},{components:t})):i.a.createElement(O,o({ref:n},b))}));function O(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,p=new Array(a);p[0]=u;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var b=2;b<a;b++)p[b]=t[b];return i.a.createElement.apply(null,p)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},75:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(3),i=t(8),a=(t(0),t(1026)),p={id:"knex.joinoptions",title:"Interface: JoinOptions",sidebar_label:"JoinOptions",custom_edit_url:null,hide_title:!0},o={unversionedId:"api/interfaces/knex.joinoptions",id:"api/interfaces/knex.joinoptions",isDocsHomePage:!1,title:"Interface: JoinOptions",description:"Interface: JoinOptions",source:"@site/docs/api/interfaces/knex.joinoptions.md",slug:"/api/interfaces/knex.joinoptions",permalink:"/docs/next/api/interfaces/knex.joinoptions",editUrl:null,version:"current",sidebar_label:"JoinOptions",sidebar:"API",previous:{title:"Interface: Index",permalink:"/docs/next/api/interfaces/knex.index"},next:{title:"Interface: SchemaDifference",permalink:"/docs/next/api/interfaces/knex.schemadifference"}},c=[{value:"Properties",id:"properties",children:[{value:"alias",id:"alias",children:[]},{value:"cond",id:"cond",children:[]},{value:"inverseAlias",id:"inversealias",children:[]},{value:"inverseJoinColumns",id:"inversejoincolumns",children:[]},{value:"joinColumns",id:"joincolumns",children:[]},{value:"ownerAlias",id:"owneralias",children:[]},{value:"path",id:"path",children:[]},{value:"primaryKeys",id:"primarykeys",children:[]},{value:"prop",id:"prop",children:[]},{value:"table",id:"table",children:[]},{value:"type",id:"type",children:[]}]}],b={toc:c};function s(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"interface-joinoptions"},"Interface: JoinOptions"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/docs/next/api/modules/knex"},"knex"),".JoinOptions"),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("h3",{id:"alias"},"alias"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"alias"),": ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/2fe9f2b/packages/knex/src/typings.ts#L21"},"packages/knex/src/typings.ts:21")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"cond"},"cond"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"cond"),": ",Object(a.b)("a",{parentName:"p",href:"/docs/next/api/modules/core#dictionary"},Object(a.b)("em",{parentName:"a"},"Dictionary")),"<any",">"),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/2fe9f2b/packages/knex/src/typings.ts#L29"},"packages/knex/src/typings.ts:29")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"inversealias"},"inverseAlias"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"inverseAlias"),": ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/2fe9f2b/packages/knex/src/typings.ts#L23"},"packages/knex/src/typings.ts:23")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"inversejoincolumns"},"inverseJoinColumns"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"inverseJoinColumns"),": ",Object(a.b)("em",{parentName:"p"},"string"),"[]"),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/2fe9f2b/packages/knex/src/typings.ts#L25"},"packages/knex/src/typings.ts:25")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"joincolumns"},"joinColumns"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"joinColumns"),": ",Object(a.b)("em",{parentName:"p"},"string"),"[]"),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/2fe9f2b/packages/knex/src/typings.ts#L24"},"packages/knex/src/typings.ts:24")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"owneralias"},"ownerAlias"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"ownerAlias"),": ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/2fe9f2b/packages/knex/src/typings.ts#L22"},"packages/knex/src/typings.ts:22")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"path"},"path"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"path"),": ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/2fe9f2b/packages/knex/src/typings.ts#L27"},"packages/knex/src/typings.ts:27")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"primarykeys"},"primaryKeys"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"primaryKeys"),": ",Object(a.b)("em",{parentName:"p"},"string"),"[]"),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/2fe9f2b/packages/knex/src/typings.ts#L26"},"packages/knex/src/typings.ts:26")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"prop"},"prop"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"prop"),": ",Object(a.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.entityproperty"},Object(a.b)("em",{parentName:"a"},"EntityProperty")),"<any",">"),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/2fe9f2b/packages/knex/src/typings.ts#L28"},"packages/knex/src/typings.ts:28")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"table"},"table"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"table"),": ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/2fe9f2b/packages/knex/src/typings.ts#L19"},"packages/knex/src/typings.ts:19")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"type"},"type"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"type"),": ",Object(a.b)("inlineCode",{parentName:"p"},'"leftJoin"')," ","|"," ",Object(a.b)("inlineCode",{parentName:"p"},'"innerJoin"')," ","|"," ",Object(a.b)("inlineCode",{parentName:"p"},'"pivotJoin"')),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/2fe9f2b/packages/knex/src/typings.ts#L20"},"packages/knex/src/typings.ts:20")))}s.isMDXComponent=!0}}]);