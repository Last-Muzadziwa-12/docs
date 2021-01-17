(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{130:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),m=o,d=b["".concat(a,".").concat(m)]||b[m]||u[m]||i;return n?r.a.createElement(d,s(s({ref:t},l),{},{components:n})):r.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(7),i=(n(0),n(130)),a={title:"Kobo Toolbox"},s={unversionedId:"kobo-toolbox",id:"kobo-toolbox",isDocsHomePage:!1,title:"Kobo Toolbox",description:"Push submissions from Kobo to OpenFn",source:"@site/docs/kobo-toolbox.md",slug:"/kobo-toolbox",permalink:"/docs/kobo-toolbox",editUrl:"https://github.com/openfn/docs/edit/master/docs/kobo-toolbox.md",version:"current",sidebar:"docs",previous:{title:"DIY",permalink:"/docs/diy"},next:{title:"CommCare HQ",permalink:"/docs/commcare"}},c=[{value:"Push submissions from Kobo to OpenFn",id:"push-submissions-from-kobo-to-openfn",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"push-submissions-from-kobo-to-openfn"},"Push submissions from Kobo to OpenFn"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"To push data from Kobo, users must click the projects icon on their left-side\nnav bar. It's in the shape of a globe."),Object(i.b)("li",{parentName:"ol"},"Once selecting a project, the ",Object(i.b)("inlineCode",{parentName:"li"},"Project Settings")," link will appear at the top\nleft side of the screen. Click it to open the Project Settings page."),Object(i.b)("li",{parentName:"ol"},"In the bottom left pane of the project settings page, users must paste their\ninbox URL from OpenFn into the ",Object(i.b)("inlineCode",{parentName:"li"},"Rest Services")," ",Object(i.b)("inlineCode",{parentName:"li"},"Service URL")," input area and\nselect ",Object(i.b)("inlineCode",{parentName:"li"},"JSON Post")," as the ",Object(i.b)("inlineCode",{parentName:"li"},"Service Name"),"."),Object(i.b)("li",{parentName:"ol"},"It's helpful to add a wrapper to your form data if you will be publishing\nmultiple forms to OpenFn. You could use\n",Object(i.b)("inlineCode",{parentName:"li"},'{"form":"my_form", "body": %SUBMISSION%}'),"."),Object(i.b)("li",{parentName:"ol"},"Click ",Object(i.b)("inlineCode",{parentName:"li"},"Add Service")," to start forwarding new Kobo submissions to OpenFn.org.")),Object(i.b)("p",null,"To test to integration, add a submission manually using the\n",Object(i.b)("inlineCode",{parentName:"p"},"enter data in browser")," button. Head back to your history page at OpenFn to view\nthe newly submitted data and write a new ",Object(i.b)("inlineCode",{parentName:"p"},"filter")," and ",Object(i.b)("inlineCode",{parentName:"p"},"job")," to map your Kobo\ndata to any destination system on OpenFn."),Object(i.b)("p",null,"Here's a sample post from Kobo REST service. Note that questions inside groups\nare prefixed with ",Object(i.b)("inlineCode",{parentName:"p"},"groupname/")," rather than sitting inside a group object like\nODK:\n",Object(i.b)("inlineCode",{parentName:"p"},'json { "meta/instanceID": "uuid:19d72997-8316-4e02-8016-4a8ddf6a2aa4", "group1/name": "twenty", "group1/age": "19", "formhub/uuid": "6f5773a110b046cb97e3d71f6c04e7a6", "first_q": "hello", "final_q": "why not?", "_xform_id_string": "groups", "_uuid": "19d72997-8316-4e02-8016-4a8ddf6a2aa4", "_userform_id": "taylordowns2000_groups", "_tags": [], "_submitted_by": null, "_submission_time": "2016-04-22T06:38:20", "_status": "submitted_via_web", "_notes": [], "_id": 889409, "_geolocation": [ null, null ], "_bamboo_dataset_id": "", "_attachments": [] }')))}p.isMDXComponent=!0}}]);