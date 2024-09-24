"use strict";(self.webpackChunkcasdk_docs=self.webpackChunkcasdk_docs||[]).push([[8313],{6482:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var s=t(4848),i=t(8453);const o={},r="2. Dev Containers",c={id:"architecture/decisions/dev-containers",title:"2. Dev Containers",description:"Status",source:"@site/docs/architecture/decisions/0002-dev-containers.md",sourceDirName:"architecture/decisions",slug:"/architecture/decisions/dev-containers",permalink:"/docs/architecture/decisions/dev-containers",draft:!1,unlisted:!1,editUrl:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/docs/architecture/decisions/0002-dev-containers.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"1. Record Architecture Decisions",permalink:"/docs/architecture/decisions/record-architecture-decisions"},next:{title:"3. Move Command Line Parameters to Config File",permalink:"/docs/architecture/decisions/command-line-params-to-config"}},a={},d=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Green Impact",id:"green-impact",level:2}];function l(e){const n={h1:"h1",h2:"h2",header:"header",p:"p",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"2-dev-containers",children:"2. Dev Containers"})}),"\n",(0,s.jsx)(n.h2,{id:"status",children:"Status"}),"\n",(0,s.jsx)(n.p,{children:"Accepted"}),"\n",(0,s.jsx)(n.h2,{id:"context",children:"Context"}),"\n",(0,s.jsx)(n.p,{children:'Development activities require consistency for all developers to have the same\nlevel of access to create Greeen Software as much as possible. The barrier to\nentry should be as low as possible, the need to install the correct versions,\nand get started with a pre-configured developer environment is key to leveraging\nan ASK. The focus should be on "creating green software" as soon as possible, as\nopposed to "getting ready to install the environment to create green software".'}),"\n",(0,s.jsx)(n.p,{children:"In addition consistency between developer environments, the ability to resolve\nissues, debug fellow contributor issues should be as consistent as possible."}),"\n",(0,s.jsx)(n.h2,{id:"decision",children:"Decision"}),"\n",(0,s.jsx)(n.p,{children:"All developer experience and documentation should be focused on the dev\ncontainer experience. Any platform dependent documentation (for now) should be\nkept minimal."}),"\n",(0,s.jsx)(n.h2,{id:"consequences",children:"Consequences"}),"\n",(0,s.jsx)(n.p,{children:"All platforms will have consistency, allowing for faster development of the SDK,\nand more focus on features vs platform dependencies."}),"\n",(0,s.jsx)(n.p,{children:"Platform dependenct implementations and deployments will not have a focus as\nthey are abstracted."}),"\n",(0,s.jsx)(n.h2,{id:"green-impact",children:"Green Impact"}),"\n",(0,s.jsx)(n.p,{children:"Positive"}),"\n",(0,s.jsx)(n.p,{children:"By creating consistency in the developer environment we can ensure green\npractices can be considered across all developer environments. This consistency\nremoves the compute minutes/hours of setup and time lost debugging across\nenvironments, and testing time due to consistency across all environments."}),"\n",(0,s.jsx)(n.p,{children:"Operating a dev container requires similar CPU intensity with higher memory\nrequirements. Developers are highly likely to already meet these hardware\nrequirements and be using dev containers (no additional hardware required)."})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var s=t(6540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);