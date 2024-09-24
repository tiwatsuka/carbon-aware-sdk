"use strict";(self.webpackChunkcasdk_docs=self.webpackChunkcasdk_docs||[]).push([[1633],{7699:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=n(4848),r=n(8453);const i={},o="5. WebAPI to use IAsyncEnumerable to stream potentially large responses",a={id:"architecture/decisions/IAsyncEnumerable-HttpResponseExceptionFilter",title:"5. WebAPI to use IAsyncEnumerable to stream potentially large responses",description:"Status",source:"@site/docs/architecture/decisions/0005-IAsyncEnumerable-HttpResponseExceptionFilter.md",sourceDirName:"architecture/decisions",slug:"/architecture/decisions/IAsyncEnumerable-HttpResponseExceptionFilter",permalink:"/docs/architecture/decisions/IAsyncEnumerable-HttpResponseExceptionFilter",draft:!1,unlisted:!1,editUrl:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/docs/architecture/decisions/0005-IAsyncEnumerable-HttpResponseExceptionFilter.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"4. Documentation",permalink:"/docs/architecture/decisions/documentation"},next:{title:"6. Data Source Registration",permalink:"/docs/architecture/decisions/data-source-registration"}},c={},l=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Green Impact",id:"green-impact",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"5-webapi-to-use-iasyncenumerable-to-stream-potentially-large-responses",children:"5. WebAPI to use IAsyncEnumerable to stream potentially large responses"})}),"\n",(0,s.jsx)(t.h2,{id:"status",children:"Status"}),"\n",(0,s.jsx)(t.p,{children:"Rejected (by design when proposed)"}),"\n",(0,s.jsx)(t.h2,{id:"context",children:"Context"}),"\n",(0,s.jsxs)(t.p,{children:["There are currently two endpoints (",(0,s.jsx)(t.code,{children:"emissions/forecasts/batch"}),",\n",(0,s.jsx)(t.code,{children:"emissions/average-carbon-intensity/batch"}),") that require passing a payload as an\narray of items. This array can have as many items as the user wants, and it can\ntake some time to be processed which creates a delay to the client, which might\nfeel that the service is irresponsive. Also, since these requests return\nenumerable items, and those are buffered before the client gets it, it impacts\nthe overall memory footprint of the WebApp. Changing the signature of these\nendpoints to return an ",(0,s.jsx)(t.code,{children:"IAsyncEnumerable"})," collection streams the response and\nhelps to deal with these memory concerns."]}),"\n",(0,s.jsx)(t.h2,{id:"decision",children:"Decision"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Using IAsyncEnumerable return type for a controller helps to stream large\ncontent to a client when the request is large. Allowing the client to get a\nflow of continue content without the need to wait until the entire request is\nprocessed. (for instance forecast batch with 50 entries)"}),"\n",(0,s.jsxs)(t.li,{children:["Low memory overhead of the container: Processing large requests and not\nbuffering the response by the controller helps to manage this. Using\n",(0,s.jsx)(t.code,{children:"IActionResult"})," results in buffering the response, hence memory can grow\npretty large."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Given the fact that the expectation of using batch jobs - forecast and carbon\naware intensity - are not that large, using ",(0,s.jsx)(t.code,{children:"IActionResult"})," would be enough."]}),"\n",(0,s.jsx)(t.h2,{id:"consequences",children:"Consequences"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Dealing with partial failures leaves the client in the 'dark' given the fact\nthat the error is treated as a HTTP 500 error. It doesn't get propagated to\nthe client with a reason, making it hard to diagnose."}),"\n",(0,s.jsxs)(t.li,{children:["Writing a custom Middleware to handle partial failures, won't scale since it\nhas to buffer the response to avoid dotnet internal errors\n",(0,s.jsx)(t.code,{children:"(The response has already started, the error handler will not be executed.)"}),",\nremoving the whole goal of using ",(0,s.jsx)(t.code,{children:"IAsyncEnumerable"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"green-impact",children:"Green Impact"}),"\n",(0,s.jsx)(t.p,{children:"Neutral"})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var s=n(6540);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);