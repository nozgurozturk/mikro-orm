(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[85434],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return o},kt:function(){return g}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function m(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?m(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},m=Object.keys(t);for(r=0;r<m.length;r++)a=m[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(t);for(r=0;r<m.length;r++)a=m[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var l=r.createContext({}),s=function(t){var e=r.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=s(t.components);return r.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,m=t.originalType,l=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),k=s(a),g=n,N=k["".concat(l,".").concat(g)]||k[g]||c[g]||m;return a?r.createElement(N,i(i({ref:e},o),{},{components:a})):r.createElement(N,i({ref:e},o))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var m=a.length,i=new Array(m);i[0]=k;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p.mdxType="string"==typeof t?t:n,i[1]=p;for(var s=2;s<m;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},7554:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l},default:function(){return o}});var r=a(74034),n=a(79973),m=(a(67294),a(3905)),i={id:"core.abstractnamingstrategy",title:"Class: AbstractNamingStrategy",sidebar_label:"AbstractNamingStrategy",custom_edit_url:null,hide_title:!0},p={unversionedId:"api/classes/core.abstractnamingstrategy",id:"version-4.5/api/classes/core.abstractnamingstrategy",isDocsHomePage:!1,title:"Class: AbstractNamingStrategy",description:"core.AbstractNamingStrategy",source:"@site/versioned_docs/version-4.5/api/classes/core.abstractnamingstrategy.md",sourceDirName:"api/classes",slug:"/api/classes/core.abstractnamingstrategy",permalink:"/docs/api/classes/core.abstractnamingstrategy",editUrl:null,version:"4.5",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1624553595,formattedLastUpdatedAt:"6/24/2021",sidebar_label:"AbstractNamingStrategy",frontMatter:{id:"core.abstractnamingstrategy",title:"Class: AbstractNamingStrategy",sidebar_label:"AbstractNamingStrategy",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"Class: CLIHelper",permalink:"/docs/api/classes/cli.clihelper"},next:{title:"Class: ArrayCollection<T, O\\>",permalink:"/docs/api/classes/core.arraycollection"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Implements",id:"implements",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"classToMigrationName",id:"classtomigrationname",children:[]},{value:"classToTableName",id:"classtotablename",children:[]},{value:"getClassName",id:"getclassname",children:[]},{value:"joinColumnName",id:"joincolumnname",children:[]},{value:"joinKeyColumnName",id:"joinkeycolumnname",children:[]},{value:"joinTableName",id:"jointablename",children:[]},{value:"propertyToColumnName",id:"propertytocolumnname",children:[]},{value:"referenceColumnName",id:"referencecolumnname",children:[]}]}],s={toc:l};function o(t){var e=t.components,a=(0,n.Z)(t,["components"]);return(0,m.kt)("wrapper",(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,m.kt)("p",null,(0,m.kt)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".AbstractNamingStrategy"),(0,m.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("p",{parentName:"li"},(0,m.kt)("strong",{parentName:"p"},"AbstractNamingStrategy")),(0,m.kt)("p",{parentName:"li"},"\u21b3 ",(0,m.kt)("a",{parentName:"p",href:"/docs/api/classes/core.mongonamingstrategy"},(0,m.kt)("em",{parentName:"a"},"MongoNamingStrategy"))),(0,m.kt)("p",{parentName:"li"},"\u21b3 ",(0,m.kt)("a",{parentName:"p",href:"/docs/api/classes/core.underscorenamingstrategy"},(0,m.kt)("em",{parentName:"a"},"UnderscoreNamingStrategy"))),(0,m.kt)("p",{parentName:"li"},"\u21b3 ",(0,m.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitycasenamingstrategy"},(0,m.kt)("em",{parentName:"a"},"EntityCaseNamingStrategy"))))),(0,m.kt)("h2",{id:"implements"},"Implements"),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("a",{parentName:"li",href:"/docs/api/interfaces/core.namingstrategy"},(0,m.kt)("em",{parentName:"a"},"NamingStrategy")))),(0,m.kt)("h2",{id:"constructors"},"Constructors"),(0,m.kt)("h3",{id:"constructor"},"constructor"),(0,m.kt)("p",null,"+"," ",(0,m.kt)("strong",{parentName:"p"},"new AbstractNamingStrategy"),"(): ",(0,m.kt)("a",{parentName:"p",href:"/docs/api/classes/core.abstractnamingstrategy"},(0,m.kt)("em",{parentName:"a"},"AbstractNamingStrategy"))),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Returns:")," ",(0,m.kt)("a",{parentName:"p",href:"/docs/api/classes/core.abstractnamingstrategy"},(0,m.kt)("em",{parentName:"a"},"AbstractNamingStrategy"))),(0,m.kt)("h2",{id:"methods"},"Methods"),(0,m.kt)("h3",{id:"classtomigrationname"},"classToMigrationName"),(0,m.kt)("p",null,"\u25b8 ",(0,m.kt)("strong",{parentName:"p"},"classToMigrationName"),"(",(0,m.kt)("inlineCode",{parentName:"p"},"timestamp"),": ",(0,m.kt)("em",{parentName:"p"},"string"),"): ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("p",null,"Return a migration name. This name should allow ordering."),(0,m.kt)("h4",{id:"parameters"},"Parameters:"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,m.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"timestamp")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"string"))))),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Returns:")," ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("p",null,"Implementation of: ",(0,m.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.namingstrategy"},"NamingStrategy")),(0,m.kt)("p",null,"Defined in: ",(0,m.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/naming-strategy/AbstractNamingStrategy.ts#L12"},"packages/core/src/naming-strategy/AbstractNamingStrategy.ts:12")),(0,m.kt)("hr",null),(0,m.kt)("h3",{id:"classtotablename"},"classToTableName"),(0,m.kt)("p",null,"\u25b8 ",(0,m.kt)("inlineCode",{parentName:"p"},"Abstract"),(0,m.kt)("strong",{parentName:"p"},"classToTableName"),"(",(0,m.kt)("inlineCode",{parentName:"p"},"entityName"),": ",(0,m.kt)("em",{parentName:"p"},"string"),"): ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("p",null,"Return a table name for an entity class"),(0,m.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,m.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"entityName")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"string"))))),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Returns:")," ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("p",null,"Implementation of: ",(0,m.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.namingstrategy"},"NamingStrategy")),(0,m.kt)("p",null,"Defined in: ",(0,m.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/naming-strategy/AbstractNamingStrategy.ts#L16"},"packages/core/src/naming-strategy/AbstractNamingStrategy.ts:16")),(0,m.kt)("hr",null),(0,m.kt)("h3",{id:"getclassname"},"getClassName"),(0,m.kt)("p",null,"\u25b8 ",(0,m.kt)("strong",{parentName:"p"},"getClassName"),"(",(0,m.kt)("inlineCode",{parentName:"p"},"file"),": ",(0,m.kt)("em",{parentName:"p"},"string"),", ",(0,m.kt)("inlineCode",{parentName:"p"},"separator?"),": ",(0,m.kt)("em",{parentName:"p"},"string"),"): ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("p",null,"Return a name of the class based on its file name"),(0,m.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,m.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,m.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"file")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"string")),(0,m.kt)("td",{parentName:"tr",align:"left"},"-")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"separator")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"string")),(0,m.kt)("td",{parentName:"tr",align:"left"},"'-'")))),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Returns:")," ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("p",null,"Implementation of: ",(0,m.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.namingstrategy"},"NamingStrategy")),(0,m.kt)("p",null,"Defined in: ",(0,m.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/naming-strategy/AbstractNamingStrategy.ts#L5"},"packages/core/src/naming-strategy/AbstractNamingStrategy.ts:5")),(0,m.kt)("hr",null),(0,m.kt)("h3",{id:"joincolumnname"},"joinColumnName"),(0,m.kt)("p",null,"\u25b8 ",(0,m.kt)("inlineCode",{parentName:"p"},"Abstract"),(0,m.kt)("strong",{parentName:"p"},"joinColumnName"),"(",(0,m.kt)("inlineCode",{parentName:"p"},"propertyName"),": ",(0,m.kt)("em",{parentName:"p"},"string"),"): ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("p",null,"Return a join column name for a property"),(0,m.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,m.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"propertyName")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"string"))))),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Returns:")," ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("p",null,"Implementation of: ",(0,m.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.namingstrategy"},"NamingStrategy")),(0,m.kt)("p",null,"Defined in: ",(0,m.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/naming-strategy/AbstractNamingStrategy.ts#L18"},"packages/core/src/naming-strategy/AbstractNamingStrategy.ts:18")),(0,m.kt)("hr",null),(0,m.kt)("h3",{id:"joinkeycolumnname"},"joinKeyColumnName"),(0,m.kt)("p",null,"\u25b8 ",(0,m.kt)("inlineCode",{parentName:"p"},"Abstract"),(0,m.kt)("strong",{parentName:"p"},"joinKeyColumnName"),"(",(0,m.kt)("inlineCode",{parentName:"p"},"entityName"),": ",(0,m.kt)("em",{parentName:"p"},"string"),", ",(0,m.kt)("inlineCode",{parentName:"p"},"referencedColumnName?"),": ",(0,m.kt)("em",{parentName:"p"},"string"),"): ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("p",null,"Return the foreign key column name for the given parameters"),(0,m.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,m.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"entityName")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"string"))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"referencedColumnName?")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"string"))))),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Returns:")," ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("p",null,"Implementation of: ",(0,m.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.namingstrategy"},"NamingStrategy")),(0,m.kt)("p",null,"Defined in: ",(0,m.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/naming-strategy/AbstractNamingStrategy.ts#L20"},"packages/core/src/naming-strategy/AbstractNamingStrategy.ts:20")),(0,m.kt)("hr",null),(0,m.kt)("h3",{id:"jointablename"},"joinTableName"),(0,m.kt)("p",null,"\u25b8 ",(0,m.kt)("inlineCode",{parentName:"p"},"Abstract"),(0,m.kt)("strong",{parentName:"p"},"joinTableName"),"(",(0,m.kt)("inlineCode",{parentName:"p"},"sourceEntity"),": ",(0,m.kt)("em",{parentName:"p"},"string"),", ",(0,m.kt)("inlineCode",{parentName:"p"},"targetEntity"),": ",(0,m.kt)("em",{parentName:"p"},"string"),", ",(0,m.kt)("inlineCode",{parentName:"p"},"propertyName?"),": ",(0,m.kt)("em",{parentName:"p"},"string"),"): ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("p",null,"Return a join table name"),(0,m.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,m.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"sourceEntity")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"string"))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"targetEntity")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"string"))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"propertyName?")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"string"))))),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Returns:")," ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("p",null,"Implementation of: ",(0,m.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.namingstrategy"},"NamingStrategy")),(0,m.kt)("p",null,"Defined in: ",(0,m.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/naming-strategy/AbstractNamingStrategy.ts#L22"},"packages/core/src/naming-strategy/AbstractNamingStrategy.ts:22")),(0,m.kt)("hr",null),(0,m.kt)("h3",{id:"propertytocolumnname"},"propertyToColumnName"),(0,m.kt)("p",null,"\u25b8 ",(0,m.kt)("inlineCode",{parentName:"p"},"Abstract"),(0,m.kt)("strong",{parentName:"p"},"propertyToColumnName"),"(",(0,m.kt)("inlineCode",{parentName:"p"},"propertyName"),": ",(0,m.kt)("em",{parentName:"p"},"string"),"): ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("p",null,"Return a column name for a property"),(0,m.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,m.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("inlineCode",{parentName:"td"},"propertyName")),(0,m.kt)("td",{parentName:"tr",align:"left"},(0,m.kt)("em",{parentName:"td"},"string"))))),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Returns:")," ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("p",null,"Implementation of: ",(0,m.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.namingstrategy"},"NamingStrategy")),(0,m.kt)("p",null,"Defined in: ",(0,m.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/naming-strategy/AbstractNamingStrategy.ts#L24"},"packages/core/src/naming-strategy/AbstractNamingStrategy.ts:24")),(0,m.kt)("hr",null),(0,m.kt)("h3",{id:"referencecolumnname"},"referenceColumnName"),(0,m.kt)("p",null,"\u25b8 ",(0,m.kt)("inlineCode",{parentName:"p"},"Abstract"),(0,m.kt)("strong",{parentName:"p"},"referenceColumnName"),"(): ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("p",null,"Return the default reference column name"),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Returns:")," ",(0,m.kt)("em",{parentName:"p"},"string")),(0,m.kt)("p",null,"Implementation of: ",(0,m.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.namingstrategy"},"NamingStrategy")),(0,m.kt)("p",null,"Defined in: ",(0,m.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/naming-strategy/AbstractNamingStrategy.ts#L26"},"packages/core/src/naming-strategy/AbstractNamingStrategy.ts:26")))}o.isMDXComponent=!0}}]);