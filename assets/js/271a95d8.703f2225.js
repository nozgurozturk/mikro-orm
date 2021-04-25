(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{1026:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=n.a.createContext({}),p=function(e){var t=n.a.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return n.a.createElement(m.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},g=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,b=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),s=p(a),g=r,O=s["".concat(b,".").concat(g)]||s[g]||l[g]||i;return a?n.a.createElement(O,o(o({ref:t},m),{},{components:a})):n.a.createElement(O,o({ref:t},m))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,b=new Array(i);b[0]=g;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,b[1]=o;for(var m=2;m<i;m++)b[m]=a[m];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}g.displayName="MDXCreateElement"},209:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(8),i=(a(0),a(1026)),b={id:"migrations.migrator",title:"Class: Migrator",sidebar_label:"Migrator",custom_edit_url:null,hide_title:!0},o={unversionedId:"api/classes/migrations.migrator",id:"api/classes/migrations.migrator",isDocsHomePage:!1,title:"Class: Migrator",description:"Class: Migrator",source:"@site/docs/api/classes/migrations.migrator.md",slug:"/api/classes/migrations.migrator",permalink:"/docs/next/api/classes/migrations.migrator",editUrl:null,version:"current",sidebar_label:"Migrator",sidebar:"API",previous:{title:"Class: MigrationStorage",permalink:"/docs/next/api/classes/migrations.migrationstorage"},next:{title:"Class: TsMorphMetadataProvider",permalink:"/docs/next/api/classes/reflection.tsmorphmetadataprovider"}},c=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"createInitialMigration",id:"createinitialmigration",children:[]},{value:"createMigration",id:"createmigration",children:[]},{value:"down",id:"down",children:[]},{value:"getExecutedMigrations",id:"getexecutedmigrations",children:[]},{value:"getPendingMigrations",id:"getpendingmigrations",children:[]},{value:"getStorage",id:"getstorage",children:[]},{value:"up",id:"up",children:[]}]}],m={toc:c};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"class-migrator"},"Class: Migrator"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/docs/next/api/modules/migrations"},"migrations"),".Migrator"),Object(i.b)("h2",{id:"constructors"},"Constructors"),Object(i.b)("h3",{id:"constructor"},"constructor"),Object(i.b)("p",null,"+"," ",Object(i.b)("strong",{parentName:"p"},"new Migrator"),"(",Object(i.b)("inlineCode",{parentName:"p"},"em"),": ",Object(i.b)("a",{parentName:"p",href:"/docs/next/api/classes/knex.entitymanager"},Object(i.b)("em",{parentName:"a"},"EntityManager")),"<",Object(i.b)("a",{parentName:"p",href:"/docs/next/api/classes/knex.abstractsqldriver"},Object(i.b)("em",{parentName:"a"},"AbstractSqlDriver")),"<",Object(i.b)("a",{parentName:"p",href:"/docs/next/api/classes/knex.abstractsqlconnection"},Object(i.b)("em",{parentName:"a"},"AbstractSqlConnection")),">",">","): ",Object(i.b)("a",{parentName:"p",href:"/docs/next/api/classes/migrations.migrator"},Object(i.b)("em",{parentName:"a"},"Migrator"))),Object(i.b)("h4",{id:"parameters"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"em")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/docs/next/api/classes/knex.entitymanager"},Object(i.b)("em",{parentName:"a"},"EntityManager")),"<",Object(i.b)("a",{parentName:"td",href:"/docs/next/api/classes/knex.abstractsqldriver"},Object(i.b)("em",{parentName:"a"},"AbstractSqlDriver")),"<",Object(i.b)("a",{parentName:"td",href:"/docs/next/api/classes/knex.abstractsqlconnection"},Object(i.b)("em",{parentName:"a"},"AbstractSqlConnection")),">",">")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("a",{parentName:"p",href:"/docs/next/api/classes/migrations.migrator"},Object(i.b)("em",{parentName:"a"},"Migrator"))),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/2fe9f2b/packages/migrations/src/Migrator.ts#L20"},"packages/migrations/src/Migrator.ts:20")),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"createinitialmigration"},"createInitialMigration"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"createInitialMigration"),"(",Object(i.b)("inlineCode",{parentName:"p"},"path?"),": ",Object(i.b)("em",{parentName:"p"},"string"),"): ",Object(i.b)("em",{parentName:"p"},"Promise"),"<",Object(i.b)("a",{parentName:"p",href:"/docs/next/api/modules/migrations#migrationresult"},Object(i.b)("em",{parentName:"a"},"MigrationResult")),">"),Object(i.b)("h4",{id:"parameters-1"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"path?")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("em",{parentName:"td"},"string"))))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"Promise"),"<",Object(i.b)("a",{parentName:"p",href:"/docs/next/api/modules/migrations#migrationresult"},Object(i.b)("em",{parentName:"a"},"MigrationResult")),">"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/2fe9f2b/packages/migrations/src/Migrator.ts#L62"},"packages/migrations/src/Migrator.ts:62")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"createmigration"},"createMigration"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"createMigration"),"(",Object(i.b)("inlineCode",{parentName:"p"},"path?"),": ",Object(i.b)("em",{parentName:"p"},"string"),", ",Object(i.b)("inlineCode",{parentName:"p"},"blank?"),": ",Object(i.b)("em",{parentName:"p"},"boolean"),", ",Object(i.b)("inlineCode",{parentName:"p"},"initial?"),": ",Object(i.b)("em",{parentName:"p"},"boolean"),"): ",Object(i.b)("em",{parentName:"p"},"Promise"),"<",Object(i.b)("a",{parentName:"p",href:"/docs/next/api/modules/migrations#migrationresult"},Object(i.b)("em",{parentName:"a"},"MigrationResult")),">"),Object(i.b)("h4",{id:"parameters-2"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"),Object(i.b)("th",{parentName:"tr",align:"left"},"Default value"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"path?")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("em",{parentName:"td"},"string")),Object(i.b)("td",{parentName:"tr",align:"left"},"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"blank")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("em",{parentName:"td"},"boolean")),Object(i.b)("td",{parentName:"tr",align:"left"},"false")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"initial")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("em",{parentName:"td"},"boolean")),Object(i.b)("td",{parentName:"tr",align:"left"},"false")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"Promise"),"<",Object(i.b)("a",{parentName:"p",href:"/docs/next/api/modules/migrations#migrationresult"},Object(i.b)("em",{parentName:"a"},"MigrationResult")),">"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/2fe9f2b/packages/migrations/src/Migrator.ts#L41"},"packages/migrations/src/Migrator.ts:41")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"down"},"down"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"down"),"(",Object(i.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(i.b)("em",{parentName:"p"},"string")," ","|"," ",Object(i.b)("em",{parentName:"p"},"string"),"[] ","|"," ",Object(i.b)("a",{parentName:"p",href:"/docs/next/api/modules/migrations#migrateoptions"},Object(i.b)("em",{parentName:"a"},"MigrateOptions")),"): ",Object(i.b)("em",{parentName:"p"},"Promise"),"<",Object(i.b)("a",{parentName:"p",href:"/docs/next/api/modules/migrations#umzugmigration"},Object(i.b)("em",{parentName:"a"},"UmzugMigration")),"[]",">"),Object(i.b)("h4",{id:"parameters-3"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"options?")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("em",{parentName:"td"},"string")," ","|"," ",Object(i.b)("em",{parentName:"td"},"string"),"[] ","|"," ",Object(i.b)("a",{parentName:"td",href:"/docs/next/api/modules/migrations#migrateoptions"},Object(i.b)("em",{parentName:"a"},"MigrateOptions")))))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"Promise"),"<",Object(i.b)("a",{parentName:"p",href:"/docs/next/api/modules/migrations#umzugmigration"},Object(i.b)("em",{parentName:"a"},"UmzugMigration")),"[]",">"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/2fe9f2b/packages/migrations/src/Migrator.ts#L139"},"packages/migrations/src/Migrator.ts:139")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"getexecutedmigrations"},"getExecutedMigrations"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"getExecutedMigrations"),"(): ",Object(i.b)("em",{parentName:"p"},"Promise"),"<",Object(i.b)("a",{parentName:"p",href:"/docs/next/api/modules/migrations#migrationrow"},Object(i.b)("em",{parentName:"a"},"MigrationRow")),"[]",">"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"Promise"),"<",Object(i.b)("a",{parentName:"p",href:"/docs/next/api/modules/migrations#migrationrow"},Object(i.b)("em",{parentName:"a"},"MigrationRow")),"[]",">"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/2fe9f2b/packages/migrations/src/Migrator.ts#L123"},"packages/migrations/src/Migrator.ts:123")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"getpendingmigrations"},"getPendingMigrations"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"getPendingMigrations"),"(): ",Object(i.b)("em",{parentName:"p"},"Promise"),"<",Object(i.b)("a",{parentName:"p",href:"/docs/next/api/modules/migrations#umzugmigration"},Object(i.b)("em",{parentName:"a"},"UmzugMigration")),"[]",">"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"Promise"),"<",Object(i.b)("a",{parentName:"p",href:"/docs/next/api/modules/migrations#umzugmigration"},Object(i.b)("em",{parentName:"a"},"UmzugMigration")),"[]",">"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/2fe9f2b/packages/migrations/src/Migrator.ts#L129"},"packages/migrations/src/Migrator.ts:129")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"getstorage"},"getStorage"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"getStorage"),"(): ",Object(i.b)("a",{parentName:"p",href:"/docs/next/api/classes/migrations.migrationstorage"},Object(i.b)("em",{parentName:"a"},"MigrationStorage"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("a",{parentName:"p",href:"/docs/next/api/classes/migrations.migrationstorage"},Object(i.b)("em",{parentName:"a"},"MigrationStorage"))),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/2fe9f2b/packages/migrations/src/Migrator.ts#L143"},"packages/migrations/src/Migrator.ts:143")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"up"},"up"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"up"),"(",Object(i.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(i.b)("em",{parentName:"p"},"string")," ","|"," ",Object(i.b)("em",{parentName:"p"},"string"),"[] ","|"," ",Object(i.b)("a",{parentName:"p",href:"/docs/next/api/modules/migrations#migrateoptions"},Object(i.b)("em",{parentName:"a"},"MigrateOptions")),"): ",Object(i.b)("em",{parentName:"p"},"Promise"),"<",Object(i.b)("a",{parentName:"p",href:"/docs/next/api/modules/migrations#umzugmigration"},Object(i.b)("em",{parentName:"a"},"UmzugMigration")),"[]",">"),Object(i.b)("h4",{id:"parameters-4"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"options?")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("em",{parentName:"td"},"string")," ","|"," ",Object(i.b)("em",{parentName:"td"},"string"),"[] ","|"," ",Object(i.b)("a",{parentName:"td",href:"/docs/next/api/modules/migrations#migrateoptions"},Object(i.b)("em",{parentName:"a"},"MigrateOptions")))))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"Promise"),"<",Object(i.b)("a",{parentName:"p",href:"/docs/next/api/modules/migrations#umzugmigration"},Object(i.b)("em",{parentName:"a"},"UmzugMigration")),"[]",">"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/2fe9f2b/packages/migrations/src/Migrator.ts#L135"},"packages/migrations/src/Migrator.ts:135")))}p.isMDXComponent=!0}}]);