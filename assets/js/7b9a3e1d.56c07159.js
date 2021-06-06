(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[73398],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(y,i(i({ref:t},c),{},{components:n})):o.createElement(y,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},43988:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var o=n(74034),r=n(79973),a=(n(67294),n(3905)),i={title:"EntityHelper and Decorated Entities",sidebar_label:"Updating Entity Values"},p={unversionedId:"entity-helper",id:"entity-helper",isDocsHomePage:!1,title:"EntityHelper and Decorated Entities",description:"Updating Entity Values with entity.assign()",source:"@site/docs/entity-helper.md",sourceDirName:".",slug:"/entity-helper",permalink:"/docs/next/entity-helper",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/entity-helper.md",version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1622982357,formattedLastUpdatedAt:"6/6/2021",sidebar_label:"Updating Entity Values",frontMatter:{title:"EntityHelper and Decorated Entities",sidebar_label:"Updating Entity Values"},sidebar:"docs",previous:{title:"Serializing",permalink:"/docs/next/serializing"},next:{title:"Lifecycle Hooks and EventSubscriber",permalink:"/docs/next/lifecycle-hooks"}},s=[{value:"Updating Entity Values with <code>entity.assign()</code>",id:"updating-entity-values-with-entityassign",children:[]},{value:"<code>WrappedEntity</code> and <code>wrap()</code> helper",id:"wrappedentity-and-wrap-helper",children:[{value:"Accessing internal prefixed properties",id:"accessing-internal-prefixed-properties",children:[]}]}],l={toc:s};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"updating-entity-values-with-entityassign"},"Updating Entity Values with ",(0,a.kt)("inlineCode",{parentName:"h2"},"entity.assign()")),(0,a.kt)("p",null,"When you want to update entity based on user input, you will usually have just plain\nstring ids of entity relations as user input. Normally you would need to use\n",(0,a.kt)("inlineCode",{parentName:"p"},"em.getReference()")," to create references from each id first, and then\nuse those references to update entity relations:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const jon = new Author('Jon Snow', 'snow@wall.st');\nconst book = new Book('Book', jon);\nbook.author = orm.em.getReference<Author>(Author, '...id...');\n")),(0,a.kt)("p",null,"Same result can be easily achieved with ",(0,a.kt)("inlineCode",{parentName:"p"},"entity.assign()"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { wrap } from '@mikro-orm/core';\n\nwrap(book).assign({ \n  title: 'Better Book 1', \n  author: '...id...',\n});\nconsole.log(book.title); // 'Better Book 1'\nconsole.log(book.author); // instance of Author with id: '...id...'\nconsole.log(book.author.id); // '...id...'\n")),(0,a.kt)("p",null,"To use ",(0,a.kt)("inlineCode",{parentName:"p"},"entity.assign()")," on not managed entities, you need to provide ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityManager"),"\ninstance explicitly: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { wrap } from '@mikro-orm/core';\n\nconst book = new Book();\nwrap(book).assign({ \n  title: 'Better Book 1', \n  author: '...id...',\n}, { em: orm.em });\n")),(0,a.kt)("p",null,"By default, ",(0,a.kt)("inlineCode",{parentName:"p"},"entity.assign(data)")," behaves same way as ",(0,a.kt)("inlineCode",{parentName:"p"},"Object.assign(entity, data)"),",\ne.g. it does not merge things recursively. To enable deep merging of object properties (not referenced entities),\nuse second parameter to enable ",(0,a.kt)("inlineCode",{parentName:"p"},"mergeObjects")," flag:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { wrap } from '@mikro-orm/core';\n\nbook.meta = { foo: 1, bar: 2 };\n\nwrap(book).assign({ meta: { foo: 3 } }, { mergeObjects: true });\nconsole.log(book.meta); // { foo: 3, bar: 2 }\n\nwrap(book).assign({ meta: { foo: 4 } });\nconsole.log(book.meta); // { foo: 4 }\n")),(0,a.kt)("p",null,"To get the same behavior as ",(0,a.kt)("inlineCode",{parentName:"p"},"mergeObjects")," flag for m:1 and 1:1 references, enable the ",(0,a.kt)("inlineCode",{parentName:"p"},"updateNestedEntities")," flag."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { wrap } from '@mikro-orm/core';\n\nconst authorEntity = new Author('Jon2 Snow', 'snow3@wall.st');\nbook.author = authorEntity;\n\nwrap(book).assign({ author: { name: 'Jon Snow2' } }, { updateNestedEntities: true });\nconsole.log(book.author); // { ... name: 'Jon Snow2' ... }\nconsole.log(book.author === authorEntity) // true\n\n//this will have no influence as author is an entity\nwrap(book).assign({ author: { name: 'Jon Snow2' } }, { mergeObjects: true });\nconsole.log(book.author); // { ... name: 'Jon Snow2' ... }\nconsole.log(book.author === authorEntity) // false\n")),(0,a.kt)("h2",{id:"wrappedentity-and-wrap-helper"},(0,a.kt)("inlineCode",{parentName:"h2"},"WrappedEntity")," and ",(0,a.kt)("inlineCode",{parentName:"h2"},"wrap()")," helper"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"IWrappedEntity")," is an interface that defines public helper methods provided\nby the ORM:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface IWrappedEntity<T, PK extends keyof T> {\n  isInitialized(): boolean;\n  populated(populated?: boolean): void;\n  init(populated?: boolean, lockMode?: LockMode): Promise<T>;\n  toReference(): IdentifiedReference<T, PK>;\n  toObject(ignoreFields?: string[]): Dictionary;\n  toJSON(...args: any[]): Dictionary;\n  assign(data: any, options?: AssignOptions | boolean): T;\n}\n")),(0,a.kt)("p",null,"There are two ways to access those methods. You can either extend ",(0,a.kt)("inlineCode",{parentName:"p"},"BaseEntity"),"\n(exported from ",(0,a.kt)("inlineCode",{parentName:"p"},"@mikro-orm/core"),"), that defines those methods, or use the\n",(0,a.kt)("inlineCode",{parentName:"p"},"wrap()")," helper to access ",(0,a.kt)("inlineCode",{parentName:"p"},"WrappedEntity")," instance, where those methods\nexist."),(0,a.kt)("p",null,"Users can choose whether they are fine with polluting the entity interface with\nthose additional methods, or they want to keep the interface clean\nand use the ",(0,a.kt)("inlineCode",{parentName:"p"},"wrap(entity)")," helper method instead to access them. "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Since v4 ",(0,a.kt)("inlineCode",{parentName:"p"},"wrap(entity)")," no longer returns the entity, now the ",(0,a.kt)("inlineCode",{parentName:"p"},"WrappedEntity")," instance is\nbeing returned. It contains only public methods (",(0,a.kt)("inlineCode",{parentName:"p"},"init"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"assign"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"isInitialized"),", ...),\nif you want to access internal properties like ",(0,a.kt)("inlineCode",{parentName:"p"},"__meta")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"__em"),", you need to explicitly\nask for the helper via ",(0,a.kt)("inlineCode",{parentName:"p"},"wrap(entity, true)"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { BaseEntity } from '@mikro-orm/core';\n\n@Entity()\nexport class Book extends BaseEntity<Book, 'id'> { ... }\n")),(0,a.kt)("p",null,"Then you can work with those methods directly:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"book.meta = { foo: 1, bar: 2 };\nbook.assign({ meta: { foo: 3 } }, { mergeObjects: true });\nconsole.log(book.meta); // { foo: 3, bar: 2 }\n")),(0,a.kt)("h3",{id:"accessing-internal-prefixed-properties"},"Accessing internal prefixed properties"),(0,a.kt)("p",null,"Previously it was possible to access internal properties like ",(0,a.kt)("inlineCode",{parentName:"p"},"__meta")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"__em"),"\nfrom the ",(0,a.kt)("inlineCode",{parentName:"p"},"wrap()")," helper. Now to access them, you need to use second parameter of\nwrap:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class Author { ... }\n\nconsole.log(wrap(author, true).__meta);\n")))}c.isMDXComponent=!0}}]);