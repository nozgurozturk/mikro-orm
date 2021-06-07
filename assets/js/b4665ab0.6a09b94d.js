(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[54380],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7442:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p},default:function(){return l}});var r=n(74034),a=n(79973),o=(n(67294),n(3905)),i={title:"Usage with JavaScript",sidebar_label:"Usage with Vanilla JS"},s={unversionedId:"usage-with-js",id:"version-2.7/usage-with-js",isDocsHomePage:!1,title:"Usage with JavaScript",description:"To use mikro-orm with Vanilla JavaScript, define your entities like this:",source:"@site/versioned_docs/version-2.7/usage-with-js.md",sourceDirName:".",slug:"/usage-with-js",permalink:"/docs/2.7/usage-with-js",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-2.7/usage-with-js.md",version:"2.7",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1623027403,formattedLastUpdatedAt:"6/7/2021",sidebar_label:"Usage with Vanilla JS",frontMatter:{title:"Usage with JavaScript",sidebar_label:"Usage with Vanilla JS"},sidebar:"version-2.7/docs",previous:{title:"Using MikroORM with NestJS framework",permalink:"/docs/2.7/usage-with-nestjs"},next:{title:"Creating Custom Driver",permalink:"/docs/2.7/custom-driver"}},p=[],c={toc:p};function l(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To use ",(0,o.kt)("inlineCode",{parentName:"p"},"mikro-orm")," with Vanilla JavaScript, define your entities like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const { Collection } = require('mikro-orm');\nconst { Book } = require('./Book');\nconst { BaseEntity } = require('./BaseEntity');\n\n/**\n * @property {number} id\n * @property {Date} createdAt\n * @property {Date} updatedAt\n * @property {string} name\n * @property {string} email\n * @property {number} age\n * @property {boolean} termsAccepted\n * @property {string[]} identities\n * @property {Date} born\n * @property {Collection<Book>} books\n * @property {Book} favouriteBook\n * @property {number} version\n * @property {string} versionAsString\n */\nclass Author extends BaseEntity {\n\n  /**\n   * @param {string} name\n   * @param {string} email\n   */\n  constructor(name, email) {\n    super();\n    this.name = name;\n    this.email = email;\n    this.createdAt = new Date();\n    this.updatedAt = new Date();\n    this.termsAccepted = false;\n  }\n\n}\n\nconst schema = {\n  name: 'Author',\n  extends: 'BaseEntity',\n  properties: {\n    createdAt: 'Date',\n    updatedAt: {\n      type: 'Date',\n      onUpdate: () => new Date(),\n    },\n    name: 'string',\n    email: 'string',\n    age: 'number',\n    termsAccepted: 'boolean',\n    identities: 'string[]',\n    born: 'Date',\n    books: {\n      reference: '1:m',\n      mappedBy: 'author',\n      type: 'Book',\n    },\n    favouriteBook: {\n      reference: 'm:1',\n      type: 'Book',\n    },\n  },\n  path: __filename,\n};\n\nmodule.exports.Author = Author;\nmodule.exports.entity = Author;\nmodule.exports.schema = schema;\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Do not forget to provide ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"path")," schema parameters as well as ",(0,o.kt)("inlineCode",{parentName:"p"},"entity"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"schema")," exports.")),(0,o.kt)("p",null,"Reference parameter can be one of (where ",(0,o.kt)("inlineCode",{parentName:"p"},"SCALAR")," is the default one):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export enum ReferenceType {\n  SCALAR = 'scalar',\n  MANY_TO_ONE = 'm:1',\n  ONE_TO_MANY = '1:m',\n  MANY_TO_MANY = 'm:n',\n}\n")),(0,o.kt)("p",null,"When initializing ORM, provide ",(0,o.kt)("inlineCode",{parentName:"p"},"JavaScriptMetadataProvider")," as metadata provider:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const orm = await MikroORM.init({\n  entitiesDirs: ['entities'],\n  dbName: '...',\n  metadataProvider: JavaScriptMetadataProvider,\n});\n")),(0,o.kt)("p",null,"For more examples of plain JavaScript entity definitions take a look\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/master/tests/entities-js"},"at the tests")," or at\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm-examples/tree/master/express-js"},"Express JavaScript example"),". "),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/2.7/index#table-of-contents"},"\u2190"," Back to table of contents")))}l.isMDXComponent=!0}}]);