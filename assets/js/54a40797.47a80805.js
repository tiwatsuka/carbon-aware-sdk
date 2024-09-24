"use strict";(self.webpackChunkcasdk_docs=self.webpackChunkcasdk_docs||[]).push([[4480],{4598:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=t(4848),a=t(8453);const i={},s="0013. Remove Aggregator layer from the Carbon Aware Architechture",c={id:"architecture/decisions/remove-aggregator-layer",title:"0013. Remove Aggregator layer from the Carbon Aware Architechture",description:"Status",source:"@site/docs/architecture/decisions/0013-remove-aggregator-layer.md",sourceDirName:"architecture/decisions",slug:"/architecture/decisions/remove-aggregator-layer",permalink:"/docs/architecture/decisions/remove-aggregator-layer",draft:!1,unlisted:!1,editUrl:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/docs/architecture/decisions/0013-remove-aggregator-layer.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"0012. Treat Electricity Maps and Electricity Maps Free as different, unrelated data sources",permalink:"/docs/architecture/decisions/electricity-maps-free"},next:{title:"0014. Dynamic Data Source Registration",permalink:"/docs/architecture/decisions/dynamic-datasource-registration"}},o={},l=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Sequence diagram",id:"sequence-diagram",level:2},{value:"Benefits",id:"benefits",level:2},{value:"Green Impact",id:"green-impact",level:2}];function d(e){const r={h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"0013-remove-aggregator-layer-from-the-carbon-aware-architechture",children:"0013. Remove Aggregator layer from the Carbon Aware Architechture"})}),"\n",(0,n.jsx)(r.h2,{id:"status",children:"Status"}),"\n",(0,n.jsx)(r.p,{children:"Approved"}),"\n",(0,n.jsx)(r.h2,{id:"context",children:"Context"}),"\n",(0,n.jsx)(r.p,{children:"The Carbon Aware SDK provides a public library to retrieve carbon emissions data. The library consists of public handler interfaces and data models that can be consumed by any consumer layer like WebAPI, CLI, Azure Functions etc.\nWith the inclusion of these handlers, the Aggregator layer has now become obsolete. It is has been replaced by the handlers, which are more aligned with the carbon intensity feature.\nThe current workflow in the repo looks like this- Consumer==>CA Library==>Aggregator==>Datasource."}),"\n",(0,n.jsx)(r.h2,{id:"decision",children:"Decision"}),"\n",(0,n.jsx)(r.p,{children:"The proposal is to remove the Aggregator layer from the architechture, and make the Handlers act as the business layer between the consumer and the data source.\nGSF Library handlers will be responsible for taking in consumer requests, calling the specified data source, and performing any necessary logic before returning the result to the consumer.\nThe Consumer layer will call the public interfaces in the library, thereby defining clear access boundaries between the different layers. This will eliminate any references to the Aggregator layer and we can safely remove it from the SDK without changing the existing functionality."}),"\n",(0,n.jsx)(r.h2,{id:"sequence-diagram",children:"Sequence diagram"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{alt:"WebApi Screenshot",src:t(2238).A+"",width:"1300",height:"752"})}),"\n",(0,n.jsx)(r.h2,{id:"benefits",children:"Benefits"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Clear access boundaries defined"}),"\n",(0,n.jsx)(r.li,{children:"Less code to maintain"}),"\n",(0,n.jsx)(r.li,{children:"Smaller size of packaged binary"}),"\n",(0,n.jsx)(r.li,{children:"Clear separation of concerns between different layers"}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"green-impact",children:"Green Impact"}),"\n",(0,n.jsx)(r.p,{children:"Neutral"})]})}function h(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},2238:(e,r,t)=>{t.d(r,{A:()=>n});const n=t.p+"assets/images/revised-end-end-tiers-d5e71ce73649f4c5632cd6b210a9bbbd.png"},8453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>c});var n=t(6540);const a={},i=n.createContext(a);function s(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);