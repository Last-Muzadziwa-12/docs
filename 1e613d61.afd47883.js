(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{130:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,b=u["".concat(i,".").concat(f)]||u[f]||d[f]||r;return n?o.a.createElement(b,s(s({ref:t},p),{},{components:n})):o.a.createElement(b,s({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(3),o=n(7),r=(n(0),n(130)),i={},s={unversionedId:"for-devs",id:"for-devs",isDocsHomePage:!1,title:"for-devs",description:"For Application Developers",source:"@site/docs/for-devs.md",slug:"/for-devs",permalink:"/docs/for-devs",editUrl:"https://github.com/openfn/docs/edit/master/docs/for-devs.md",version:"current",sidebar:"docs",previous:{title:"Connecting Source Applications to OpenFn",permalink:"/docs/source-apps"},next:{title:"Job Execution",permalink:"/docs/core"}},c=[{value:"Sending data to OpenFn",id:"sending-data-to-openfn",children:[]},{value:"Receiving data from OpenFn",id:"receiving-data-from-openfn",children:[]}],p={toc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"for-application-developers"},"For Application Developers"),Object(r.b)("p",null,"This section is for you if you are hoping to build or extend an existing application that can connect to OpenFn. We follow modern web-standard JSON api guidelines."),Object(r.b)("p",null,'For your application to a be data provider (or "source") for OpenFn integrations, we highly recommend that you create a "notifications service" (sometimes called a "webhooks service" or "event-based push API"). This is preferrable to using a REST api for two reasons: (1) A notifications service will give your clients the ability to set up real-time integrations, and (2) a notifications service is more efficient for both your servers and OpenFn\u2014instead of having requests be made and handled every X seconds, your servers and OpenFn\'s servers will only work when new data is available.'),Object(r.b)("p",null,'For your appliation to be a consumer (or "destination") for OpenFn, you must either have a standard, JSON-based rest API or create a language-package that meets your API specifications.'),Object(r.b)("h2",{id:"sending-data-to-openfn"},"Sending data to OpenFn"),Object(r.b)("p",null,"To send data to OpenFn, your application must be able to make an HTTPS post to an external URL with a valid JSON object as the post body. See the following example using cURL:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'curl -X POST \\\n  -H "Content-Type: application/json" \\\n  -H "Cache-Control: no-cache" \\\n  -d \'{"foo":"bar", "baz":"qux"}\' \\\n  "https://staging.openfn.org/inbox/some-secret-api-key"\n')),Object(r.b)("p",null,"OpenFn will respond with a 200 and an empty JSON object in the event of a successful post. 400s mean that the user's external URL is wrong, and 500s means that there is an application error on OpenFn. While 500s are rare, they could be due to invalid JSON in your POST body."),Object(r.b)("p",null,"If you cannot notifiy an external URL when some event takes place, you can still integrate with OpenFn if you have a JSON-based REST API. OpenFn users can make HTTP GET requests to your application and perform additional actions based on your response. You should allow either basic or token authentication and responsd to a valid GET with JSON. There is no specific format for your response, as users can parse it any way they'd like, extracting relevant data and then performing other actions\u2014like loading it into a destination system\u2014with that data. See ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.github.com/openfn/language-http"}),"language-http")," for details on how users make these generic HTTP requests."),Object(r.b)("h2",{id:"receiving-data-from-openfn"},"Receiving data from OpenFn"),Object(r.b)("p",null,'To make it easy for users to connect to your application, it\'s highly recommended that you create a language-package with your required authentication and a set of simple, allowable actions nicely abstracted into "helper functions". See ',Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.github.com/openfn/language-dhis2"}),"language-dhis2")," for an example of a language-package which creates a simpler interface for a traditional JSON-based REST api. Language packages are written in Javascript and execute in Node. You can convert OpenFn's JSON into XML, or any other format before sending it to your application and you may make use of any node modules you'd like. See ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.github.com/openfn/language-postgresql"}),"language-postgresql"),' for an example of a language package that connects directly to PostgreSQL databases using a popular NPM module called "pg".'),Object(r.b)("p",null,"To receive data from OpenFn's generic language-http langauge package, your application must allow either basic, token, or digest authenticated POST, PUT, or GET requests. (Though it is not advisable to create an API that requires GET requests to create or update data.)"))}l.isMDXComponent=!0}}]);