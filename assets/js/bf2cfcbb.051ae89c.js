(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[98695],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return o},kt:function(){return g}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},m=Object.keys(e);for(r=0;r<m.length;r++)a=m[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(r=0;r<m.length;r++)a=m[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),l=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,m=e.originalType,s=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),k=l(a),g=n,d=k["".concat(s,".").concat(g)]||k[g]||c[g]||m;return a?r.createElement(d,i(i({ref:t},o),{},{components:a})):r.createElement(d,i({ref:t},o))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var m=a.length,i=new Array(m);i[0]=k;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var l=2;l<m;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},34333:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s},default:function(){return o}});var r=a(74034),n=a(79973),m=(a(67294),a(3905)),i={id:"core.underscorenamingstrategy",title:"Class: UnderscoreNamingStrategy",sidebar_label:"UnderscoreNamingStrategy",custom_edit_url:null,hide_title:!0},p={unversionedId:"api/classes/core.underscorenamingstrategy",id:"version-4.5/api/classes/core.underscorenamingstrategy",isDocsHomePage:!1,title:"Class: UnderscoreNamingStrategy",description:"core.UnderscoreNamingStrategy",source:"@site/versioned_docs/version-4.5/api/classes/core.underscorenamingstrategy.md",sourceDirName:"api/classes",slug:"/api/classes/core.underscorenamingstrategy",permalink:"/docs/api/classes/core.underscorenamingstrategy",editUrl:null,version:"4.5",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1623027403,formattedLastUpdatedAt:"6/7/2021",sidebar_label:"UnderscoreNamingStrategy",frontMatter:{id:"core.underscorenamingstrategy",title:"Class: UnderscoreNamingStrategy",sidebar_label:"UnderscoreNamingStrategy",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"Class: Type<JSType, DBType\\>",permalink:"/docs/api/classes/core.type"},next:{title:"Class: UniqueConstraintViolationException",permalink:"/docs/api/classes/core.uniqueconstraintviolationexception"}},s=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"classToMigrationName",id:"classtomigrationname",children:[]},{value:"classToTableName",id:"classtotablename",children:[]},{value:"getClassName",id:"getclassname",children:[]},{value:"joinColumnName",id:"joincolumnname",children:[]},{value:"joinKeyColumnName",id:"joinkeycolumnname",children:[]},{value:"joinTableName",id:"jointablename",children:[]},{value:"propertyToColumnName",id:"propertytocolumnname",children:[]},{value:"referenceColumnName",id:"referencecolumnname",children:[]},{value:"underscore",id:"underscore",children:[]}]}],l={toc:s};function o(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,m.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,m.kt)("p",null,(0,m.kt)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".UnderscoreNamingStrategy"),(0,m.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("p",{parentName:"li"},(0,m.kt)("a",{parentName:"p",href:"/docs/api/classes/core.abstractnamingstrategy"},(0,m.kt)("em",{parentName:"a"},"AbstractNamingStrategy"))),(0,m.kt)("p",{parentName:"li"},"\u21b3 ",(0,m.kt)("strong",{parentName:"p"},"UnderscoreNamingStrategy")))),(0,m.kt)("h2",{id:"constructors"},"Constructors"),(0,m.kt)("h3",{id:"constructor"},"constructor"),(0,m.kt)("p",null,"+"," ",(0,m.kt)("strong",{parentName:"p"},"new UnderscoreNamingStrategy"),"(): ",(0,m.kt)("a",{parentName:"p",href:"/docs/api/classes/core.underscorenamingstrategy"},(0,m.kt)("em",{parentName:"a"},"UnderscoreNamingStrategy"))),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Returns:")," ",(0,m.kt)("a",{parentName:"p",href:"/docs/api/classes/core.underscorenamingstrategy"},(0,m.kt)("em",{parentName:"a"},"UnderscoreNamingStrategy"))),(0,m.kt)("p",null,"Inherited from: ",(0,m.kt)("a",{parentName:"p",href:"/docs/api/classes/core.abstractnamingstrategy"},"AbstractNamingStrategy")),(0,m.kt)("h2",{id:"methods"},"Methods"),(0,m.kt)("h3",{id:"classtomigrationname"},"classToMigrationName"),(0,m.kt)("p",null,"\u25b8 ",(0,m.kt)("strong",{parentName:"p"},"classToMigrationName"),"(",(0,m.kt)("inlineCode",{parentName:"p"},"timestamp"),": ",(0,m.kt)("em",{parentName:"p"},"string"),"): ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("h4",{id:"parameters"},"Parameters:"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,m.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"timestamp")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"string"))))),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Returns:")," ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("p",null,"Inherited from: ",(0,m.kt)("a",{parentName:"p",href:"/docs/api/classes/core.abstractnamingstrategy"},"AbstractNamingStrategy")),(0,m.kt)("p",null,"Defined in: ",(0,m.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/naming-strategy/AbstractNamingStrategy.ts#L12"},"packages/core/src/naming-strategy/AbstractNamingStrategy.ts:12")),(0,m.kt)("hr",null),(0,m.kt)("h3",{id:"classtotablename"},"classToTableName"),(0,m.kt)("p",null,"\u25b8 ",(0,m.kt)("strong",{parentName:"p"},"classToTableName"),"(",(0,m.kt)("inlineCode",{parentName:"p"},"entityName"),": ",(0,m.kt)("em",{parentName:"p"},"string"),"): ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,m.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"entityName")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"string"))))),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Returns:")," ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("p",null,"Overrides: ",(0,m.kt)("a",{parentName:"p",href:"/docs/api/classes/core.abstractnamingstrategy"},"AbstractNamingStrategy")),(0,m.kt)("p",null,"Defined in: ",(0,m.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/naming-strategy/UnderscoreNamingStrategy.ts#L5"},"packages/core/src/naming-strategy/UnderscoreNamingStrategy.ts:5")),(0,m.kt)("hr",null),(0,m.kt)("h3",{id:"getclassname"},"getClassName"),(0,m.kt)("p",null,"\u25b8 ",(0,m.kt)("strong",{parentName:"p"},"getClassName"),"(",(0,m.kt)("inlineCode",{parentName:"p"},"file"),": ",(0,m.kt)("em",{parentName:"p"},"string"),", ",(0,m.kt)("inlineCode",{parentName:"p"},"separator?"),": ",(0,m.kt)("em",{parentName:"p"},"string"),"): ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,m.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,m.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"file")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"string")),(0,m.kt)("td",{parentName:"tr",align:"left"},"-")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"separator")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"string")),(0,m.kt)("td",{parentName:"tr",align:"left"},"'-'")))),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Returns:")," ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("p",null,"Inherited from: ",(0,m.kt)("a",{parentName:"p",href:"/docs/api/classes/core.abstractnamingstrategy"},"AbstractNamingStrategy")),(0,m.kt)("p",null,"Defined in: ",(0,m.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/naming-strategy/AbstractNamingStrategy.ts#L5"},"packages/core/src/naming-strategy/AbstractNamingStrategy.ts:5")),(0,m.kt)("hr",null),(0,m.kt)("h3",{id:"joincolumnname"},"joinColumnName"),(0,m.kt)("p",null,"\u25b8 ",(0,m.kt)("strong",{parentName:"p"},"joinColumnName"),"(",(0,m.kt)("inlineCode",{parentName:"p"},"propertyName"),": ",(0,m.kt)("em",{parentName:"p"},"string"),"): ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,m.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"propertyName")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"string"))))),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Returns:")," ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("p",null,"Overrides: ",(0,m.kt)("a",{parentName:"p",href:"/docs/api/classes/core.abstractnamingstrategy"},"AbstractNamingStrategy")),(0,m.kt)("p",null,"Defined in: ",(0,m.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/naming-strategy/UnderscoreNamingStrategy.ts#L9"},"packages/core/src/naming-strategy/UnderscoreNamingStrategy.ts:9")),(0,m.kt)("hr",null),(0,m.kt)("h3",{id:"joinkeycolumnname"},"joinKeyColumnName"),(0,m.kt)("p",null,"\u25b8 ",(0,m.kt)("strong",{parentName:"p"},"joinKeyColumnName"),"(",(0,m.kt)("inlineCode",{parentName:"p"},"entityName"),": ",(0,m.kt)("em",{parentName:"p"},"string"),", ",(0,m.kt)("inlineCode",{parentName:"p"},"referencedColumnName?"),": ",(0,m.kt)("em",{parentName:"p"},"string"),"): ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,m.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"entityName")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"string"))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"referencedColumnName?")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"string"))))),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Returns:")," ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("p",null,"Overrides: ",(0,m.kt)("a",{parentName:"p",href:"/docs/api/classes/core.abstractnamingstrategy"},"AbstractNamingStrategy")),(0,m.kt)("p",null,"Defined in: ",(0,m.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/naming-strategy/UnderscoreNamingStrategy.ts#L13"},"packages/core/src/naming-strategy/UnderscoreNamingStrategy.ts:13")),(0,m.kt)("hr",null),(0,m.kt)("h3",{id:"jointablename"},"joinTableName"),(0,m.kt)("p",null,"\u25b8 ",(0,m.kt)("strong",{parentName:"p"},"joinTableName"),"(",(0,m.kt)("inlineCode",{parentName:"p"},"sourceEntity"),": ",(0,m.kt)("em",{parentName:"p"},"string"),", ",(0,m.kt)("inlineCode",{parentName:"p"},"targetEntity"),": ",(0,m.kt)("em",{parentName:"p"},"string"),", ",(0,m.kt)("inlineCode",{parentName:"p"},"propertyName"),": ",(0,m.kt)("em",{parentName:"p"},"string"),"): ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,m.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"sourceEntity")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"string"))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"targetEntity")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"string"))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"propertyName")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"string"))))),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Returns:")," ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("p",null,"Overrides: ",(0,m.kt)("a",{parentName:"p",href:"/docs/api/classes/core.abstractnamingstrategy"},"AbstractNamingStrategy")),(0,m.kt)("p",null,"Defined in: ",(0,m.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/naming-strategy/UnderscoreNamingStrategy.ts#L17"},"packages/core/src/naming-strategy/UnderscoreNamingStrategy.ts:17")),(0,m.kt)("hr",null),(0,m.kt)("h3",{id:"propertytocolumnname"},"propertyToColumnName"),(0,m.kt)("p",null,"\u25b8 ",(0,m.kt)("strong",{parentName:"p"},"propertyToColumnName"),"(",(0,m.kt)("inlineCode",{parentName:"p"},"propertyName"),": ",(0,m.kt)("em",{parentName:"p"},"string"),"): ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,m.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"propertyName")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"string"))))),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Returns:")," ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("p",null,"Overrides: ",(0,m.kt)("a",{parentName:"p",href:"/docs/api/classes/core.abstractnamingstrategy"},"AbstractNamingStrategy")),(0,m.kt)("p",null,"Defined in: ",(0,m.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/naming-strategy/UnderscoreNamingStrategy.ts#L21"},"packages/core/src/naming-strategy/UnderscoreNamingStrategy.ts:21")),(0,m.kt)("hr",null),(0,m.kt)("h3",{id:"referencecolumnname"},"referenceColumnName"),(0,m.kt)("p",null,"\u25b8 ",(0,m.kt)("strong",{parentName:"p"},"referenceColumnName"),"(): ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Returns:")," ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("p",null,"Overrides: ",(0,m.kt)("a",{parentName:"p",href:"/docs/api/classes/core.abstractnamingstrategy"},"AbstractNamingStrategy")),(0,m.kt)("p",null,"Defined in: ",(0,m.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/naming-strategy/UnderscoreNamingStrategy.ts#L25"},"packages/core/src/naming-strategy/UnderscoreNamingStrategy.ts:25")),(0,m.kt)("hr",null),(0,m.kt)("h3",{id:"underscore"},"underscore"),(0,m.kt)("p",null,"\u25b8 ",(0,m.kt)("inlineCode",{parentName:"p"},"Private"),(0,m.kt)("strong",{parentName:"p"},"underscore"),"(",(0,m.kt)("inlineCode",{parentName:"p"},"name"),": ",(0,m.kt)("em",{parentName:"p"},"string"),"): ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("h4",{id:"parameters-7"},"Parameters:"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,m.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"name")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"string"))))),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Returns:")," ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("p",null,"Defined in: ",(0,m.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/naming-strategy/UnderscoreNamingStrategy.ts#L29"},"packages/core/src/naming-strategy/UnderscoreNamingStrategy.ts:29")))}o.isMDXComponent=!0}}]);