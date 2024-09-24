"use strict";(self.webpackChunkcasdk_docs=self.webpackChunkcasdk_docs||[]).push([[6203],{1444:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var i=t(4848),o=t(8453);const r={slug:"dotnet-8-upgrade",title:"Carbon Aware SDK 1.4, behind the scenes",tags:["dotnet8","post"]},a="Why .NET 8 ?",s={permalink:"/blog/dotnet-8-upgrade",editUrl:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/blog/2024-05-16-dotnet8/index.md",source:"@site/blog/2024-05-16-dotnet8/index.md",title:"Carbon Aware SDK 1.4, behind the scenes",description:"As most software nowadays, the Carbon Aware SDK relies on a stack of utilities, and while adding a new feature is usually the most appealing for a project, it\u2019s also critical to maintain the stack, especially in a community effort.",date:"2024-05-16T00:00:00.000Z",tags:[{inline:!0,label:"dotnet8",permalink:"/blog/tags/dotnet-8"},{inline:!0,label:"post",permalink:"/blog/tags/post"}],readingTime:8.045,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"dotnet-8-upgrade",title:"Carbon Aware SDK 1.4, behind the scenes",tags:["dotnet8","post"]},unlisted:!1,prevItem:{title:"Release v1.4",permalink:"/blog/release-v1.4"},nextItem:{title:"Release v1.3",permalink:"/blog/release-v1.3"}},c={authorsImageUrls:[]},d=[{value:"Ripple effect on sample code",id:"ripple-effect-on-sample-code",level:2},{value:"Port Number Breaking change",id:"port-number-breaking-change",level:2},{value:"Broken build pipeline on GitHub Actions",id:"broken-build-pipeline-on-github-actions",level:2},{value:"Carbon Intensity map",id:"carbon-intensity-map",level:2},{value:"Green Dashboard for Kubernetes",id:"green-dashboard-for-kubernetes",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"As most software nowadays, the Carbon Aware SDK relies on a stack of utilities, and while adding a new feature is usually the most appealing for a project, it\u2019s also critical to maintain the stack, especially in a community effort."}),"\n",(0,i.jsx)(n.p,{children:"Containerization has helped shift the upgrading work to a more convenient time for the development team, but there are still various motivations for keeping a stack up to date with current versions: security, bug fixes, performance, support\u2026 but the best is to couple with new feature development: such was the case for the .NET framework."}),"\n",(0,i.jsx)(n.p,{children:"However, those updates often have ripple effects, as their dependencies are not always foreseeable, making the software upgrade workload hard to predict."}),"\n",(0,i.jsx)(n.p,{children:"As NTT and NTT DATA were key participants in this contribution, this is a good occasion to cast a light on the behind the scenes, and the way this new Carbon Aware SDK is being used internally."}),"\n",(0,i.jsx)(n.p,{children:"Carbon Aware SDK v1.4.0 was released in May 2024. Its core evolution was the upgrade to .NET 8. Until v1.3.x, the Carbon Aware SDK relied on the LTS (Long Term Support) version .NET 6. With an EOL (End of Life) set for November 2024, an upgrade was unavoidable."}),"\n",(0,i.jsxs)(n.p,{children:["Microsoft released .NET 8 in November 2023, the latest LTS version of .NET, which ",(0,i.jsx)(n.a,{href:"https://dotnet.microsoft.com/en-us/platform/support/policy/dotnet-core",children:"will be supported until November 2026"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Wanting to display the Software Carbon Intensity (",(0,i.jsx)(n.a,{href:"https://sci.greensoftware.foundation/",children:"SCI - Software Carbon Intensity"})," as adopted in ",(0,i.jsx)(n.a,{href:"https://www.iso.org/standard/86612.html",children:"ISO/IEC 21031:2024"}),") metrics from the Carbon Aware SDK WebAPI made .NET 8 a requirement, as .NET 8 introduced ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/core/whats-new/dotnet-8/runtime#extensions-metrics",children:"enhanced support for implementing metrics features"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Indeed, the newly introduced ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.metrics.imeterfactory?view=net-8.0",children:"IMeterFactory"})," interface enabled us to create a ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.metrics.meter?view=net-8.0",children:"Meter"})," instance while maintaining modularity by using dependency injection (i.e. use the .NET 8 implementation of the feature, instead of recreating it\u2026 another software development sustainable pattern)."]}),"\n",(0,i.jsx)(n.p,{children:"In summary, Carbon Intensity metrics handling was combined with the necessary support extension that the .NET 8 upgrade provides."}),"\n",(0,i.jsx)(n.h1,{id:"in-practice",children:"In practice"}),"\n",(0,i.jsxs)(n.p,{children:["The initial work for upgrading to .NET 8 was done in ",(0,i.jsx)(n.a,{href:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/404",children:"Pull Request #404"})," (aka PR, a code change proposal, which once approved will be merged in the main code)."]}),"\n",(0,i.jsx)(n.p,{children:"Without being a C# expert, it\u2019s still interesting to look at the PR and see that: it involves several individuals working together as a community, many files were impacted, and highlights the importance of tests and samples, which required further work due to some ripple effects."}),"\n",(0,i.jsx)(n.p,{children:"For the nitty gritty (else jump to the next paragraph): the core work is \u201csimply\u201d updating the target framework version."}),"\n",(0,i.jsx)(n.p,{children:"It can be done in the property window of each of the C# projects, for example, in the Japanese version of Visual Studio (Fig.1)."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"fig1",src:t(3307).A+"",width:"1118",height:"430"})}),"\n",(0,i.jsx)(n.p,{children:"Fig.1 Property window of C# project in Carbon Aware SDK on Visual Studio Community Edition"}),"\n",(0,i.jsxs)(n.p,{children:["Carbon Aware SDK includes 30 C# projects (in v1.3.0 at least), so automation is welcomed. The target framework version is described in ",(0,i.jsx)(n.code,{children:"/Project/PropertyGroup/TargetFramework"})," in the ",(0,i.jsx)(n.code,{children:".csproj"})," file. For example, running the command on WSL:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"find . -name \"*.csproj\" -exec sed -i 's|^\\(\\s\\+\\)<TargetFramework>net6.0</TargetFramework>$|\\1<TargetFramework>net8.0</TargetFramework>|g' {} \\;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The .NET version is specified in many other places, which need to be updated as well (",(0,i.jsx)(n.code,{children:"grep"})," will list them all)."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Base image in Docker file","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Use tag ",(0,i.jsx)(n.code,{children:"8.0"})," instead of ",(0,i.jsx)(n.code,{children:"6.0"})," for ",(0,i.jsx)(n.code,{children:"mcr.microsoft.com/dotnet/sdk"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Tool configurations","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"global.json"}),"\n",(0,i.jsx)(n.li,{children:"dotnet-tools.json"}),"\n",(0,i.jsx)(n.li,{children:"launch.json for VSCode"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Target framework version for OpenAPI generator for .NET"}),"\n",(0,i.jsxs)(n.li,{children:[".NET version for ",(0,i.jsx)(n.a,{href:"https://github.com/actions/setup-dotnet",children:"actions/setup-dotnet"})," in GitHub Actions Workflow"]}),"\n",(0,i.jsx)(n.li,{children:"Comments in source files"}),"\n",(0,i.jsx)(n.li,{children:"Documents"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"While the updating part is done, the work does not end there\u2026"}),"\n",(0,i.jsx)(n.h1,{id:"unexpected-work-items",children:"Unexpected work items"}),"\n",(0,i.jsx)(n.p,{children:"While the .NET 8 upgrade was done, some unexpected issues surfaced."}),"\n",(0,i.jsx)(n.h2,{id:"ripple-effect-on-sample-code",children:"Ripple effect on sample code"}),"\n",(0,i.jsx)(n.p,{children:"To help onboard newcomers to the Carbon Aware SDK, a sample running on Azure Functions is provided."}),"\n",(0,i.jsxs)(n.p,{children:["Azure Functions for .NET is transitioning one of its execution modes (the In-process model) to the Isolated worker model (",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/azure-functions/dotnet-isolated-in-process-differences",children:"more details here"}),"). Moreover, .NET 8 did not yet provide an option to use the former model in its initial release (cf. ",(0,i.jsx)(n.a,{href:"https://techcommunity.microsoft.com/t5/apps-on-azure-blog/net-on-azure-functions-august-2023-roadmap-update/ba-p/3910098",children:"roadmap of Azure Functions"}),")."]}),"\n",(0,i.jsx)(n.p,{children:"As our sample was still implementing the in-process model (to be deprecated and not available in .NET 8 at this time), it made sense to migrate to the isolated worker model."}),"\n",(0,i.jsxs)(n.p,{children:["For the code lover, there is a helpful ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/azure-functions/migrate-dotnet-to-isolated-model?tabs=net8",children:"guide"})," for the migration. This led to:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Change the version of container images to build and test"}),"\n",(0,i.jsxs)(n.li,{children:["Update the ",(0,i.jsx)(n.code,{children:".csproj"})," file"]}),"\n",(0,i.jsxs)(n.li,{children:["Replace ",(0,i.jsx)(n.code,{children:"Startup.cs"})," with ",(0,i.jsx)(n.code,{children:"Program.cs"})]}),"\n",(0,i.jsxs)(n.li,{children:["Replace ",(0,i.jsx)(n.code,{children:"FunctionName"})," attribute with ",(0,i.jsx)(n.code,{children:"Function"})]}),"\n",(0,i.jsx)(n.li,{children:"Change loggers to be obtained from the DI container"}),"\n",(0,i.jsx)(n.li,{children:"Update the document"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For more details browse: ",(0,i.jsx)(n.a,{href:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/420",children:"Pull Request #420"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"port-number-breaking-change",children:"Port Number Breaking change"}),"\n",(0,i.jsxs)(n.p,{children:["As the Carbon Aware SDK WebAPI uses ASP.NET Core technology, another collateral change was required since .NET 8 changed its default port number from 80 to 8080 ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/core/compatibility/containers/8.0/aspnet-port",children:"Microsoft Learn document"}),")."]}),"\n",(0,i.jsx)(n.p,{children:"Changing the port number from WebAPI container affects the containerPort in the Helm chart and some GitHub Workflows that uses WebAPI."}),"\n",(0,i.jsx)(n.h2,{id:"broken-build-pipeline-on-github-actions",children:"Broken build pipeline on GitHub Actions"}),"\n",(0,i.jsx)(n.p,{children:"Thanks to GitHub, a lot of automation is available to publish code, allowing contributors to focus more on coding. In particular, the Carbon Aware SDK repository is configured to publish the WebAPI container image (like a snapshot build) when a commit occurs on the dev branch."}),"\n",(0,i.jsx)(n.p,{children:"However, it suddenly stopped working after the .NET 8 upgrade."}),"\n",(0,i.jsxs)(n.p,{children:["The team investigated the logs (Fig. 2), as a container image for both AMD64 and Arm64 Linux in GitHub Actions with ",(0,i.jsx)(n.a,{href:"https://github.com/docker/build-push-action",children:"docker/build-push-action"}),": a mysterious segmentation fault (SEGV) was occurring after the upgrade\u2026 the code was not changed,  ",(0,i.jsx)(n.code,{children:"dotnet publish"})," was outside the scope."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:" > [linux/arm64 build-env 4/6] RUN dotnet publish CarbonAware.WebApi/src/CarbonAware.WebApi.csproj -c Release -o publish:\n7.209 MSBuild version 17.9.6+a4ecab324 for .NET\n24.69   Determining projects to restore...\n41.42 Segmentation fault (core dumped)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Fig.2 Logs in ",(0,i.jsx)(n.code,{children:"dotnet publish"})," on GitHub Actions"]}),"\n",(0,i.jsxs)(n.p,{children:["Further investigation was done, and thanks to a ",(0,i.jsx)(n.a,{href:"https://devblogs.microsoft.com/dotnet/improving-multiplatform-container-support/",children:".NET blog"})," about multi-platform container support, we identified that an unsupported approach was used for the build, and needed to be amended. More precisely, since .NET 6, QEMU static binaries were used to build container images for multi-platform."]}),"\n",(0,i.jsxs)(n.p,{children:["Fortunately, the .NET blog guides how to build multi-platform container images, and the workflow was fixed accordingly in ",(0,i.jsx)(n.a,{href:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/498",children:"Pull Request #498"}),". So the WebAPI container image with .NET 8 can be pulled from ",(0,i.jsx)(n.a,{href:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/pkgs/container/carbon-aware-sdk",children:"GitHub Packages"})," now!"]}),"\n",(0,i.jsx)(n.h1,{id:"use-case-in-ntt--ntt-data",children:"Use case in NTT / NTT DATA"}),"\n",(0,i.jsxs)(n.p,{children:["While NTT & NTT DATA have been contributing to the Carbon Aware SDK for a long time, we had not previously publicly referenced our ",(0,i.jsx)(n.a,{href:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/blob/dev/casdk-docs/docs/overview/adopters.md",children:"adoption of the tool"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The Carbon Aware SDK v1.4.0 carbon metrics exporter (dependent on .NET8 upgrade) has increased the usefulness of the SDK due to increased visualization capabilities now available."}),"\n",(0,i.jsx)(n.h2,{id:"carbon-intensity-map",children:"Carbon Intensity map"}),"\n",(0,i.jsxs)(n.p,{children:["This feature facilitates integration with monitoring solutions like ",(0,i.jsx)(n.a,{href:"https://prometheus.io/",children:"Prometheus"})," and furthermore with a visualization solution like ",(0,i.jsx)(n.a,{href:"https://grafana.com/docs/grafana/latest/panels-visualizations/visualizations/",children:"Grafana"}),": unlocking geomap style visualization (showing metrics at specified locations on a map). By enabling the exporter and making some settings on Grafana, carbon intensities can be exported from Carbon Aware SDK to a geomap, this is part of a dashboard to monitor carbon emissions for software systems."]}),"\n",(0,i.jsx)(n.p,{children:"The Carbon Intensity can be intuitively visualized with size and colors on a geomap. Beyond raising awareness, this can guide decisions on location or time shift."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"fig3",src:t(3097).A+"",width:"2860",height:"1434"})}),"\n",(0,i.jsx)(n.h2,{id:"green-dashboard-for-kubernetes",children:"Green Dashboard for Kubernetes"}),"\n",(0,i.jsx)(n.p,{children:"Carbon Aware SDK helps increase awareness around Carbon emission, and it is now possible to monitor carbon emission per application within Kubernetes."}),"\n",(0,i.jsxs)(n.p,{children:["In practice, each container's energy consumption is evaluated through ",(0,i.jsx)(n.a,{href:"https://www.cncf.io/projects/kepler/",children:"Kepler"})," (sandbox project in Cloud Native Cloud Foundation, ",(0,i.jsx)(n.a,{href:"https://www.cncf.io/",children:"CNCF"}),"), and thanks to the Carbon Aware SDK, the carbon emission can be evaluated."]}),"\n",(0,i.jsx)(n.p,{children:"All those emission data from power grid can be accessed through the Prometheus exporter with the Carbon Aware SDK (starting v1.4.0), and visualized with the Grafana dashboard."}),"\n",(0,i.jsx)(n.p,{children:"The power consumption, energy consumption, carbon emission, and SCI can be seen at a glance!"}),"\n",(0,i.jsx)(n.p,{children:"One of the upsides of micro-services architecture, as Kubernetes facilitates it, is to be able to work on different pieces of an application in a relatively independent fashion (maintaining, scaling, optimizing\u2026)."}),"\n",(0,i.jsx)(n.p,{children:"The Green Dashboard allows a team to check an application's global energy consumption and carbon emission (dashboard left side), while drilling down into sustainability-related metrics for each micro-service (dashboard right side)."}),"\n",(0,i.jsxs)(n.p,{children:["It shows the SCI, allowing to get a sense of the rate of Carbon Emission down to a particular piece of an architecture (R being the ",(0,i.jsx)(n.a,{href:"https://learn.greensoftware.foundation/measurement/#software-carbon-intensity-specification",children:"functional unit"})," for that service - for example, an API call, the data is being shown per R unit or over an hour)."]}),"\n",(0,i.jsx)(n.p,{children:"While in monolithic application optimization needs customized instrumentation, and often have rippled effects, this green dashboard helps identify which micro-service refactoring would have the maximum impact on the application's carbon footprint, leveraging the team effort more efficiently."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"fig4",src:t(3014).A+"",width:"1901",height:"925"})}),"\n",(0,i.jsx)(n.h1,{id:"moving-forward",children:"Moving Forward"}),"\n",(0,i.jsx)(n.p,{children:"With the Cloud Computing expansion, and Kubernetes flexibility, more and more choices exist for running a workload. While business and economic constraints often lead those decisions, the carbon footprint is becoming an increasingly critical consideration."}),"\n",(0,i.jsx)(n.p,{children:"This is a difficult endeavor, and the first step is to know where one stands, measure but also later evaluate and confirm what action would lead to improvement. That was one of the intentions behind the Green Dashboard for Kubernetes, and the Carbon Aware SDK 1.4 is a key element in this approach."}),"\n",(0,i.jsx)(n.p,{children:"By providing a standard interface to the carbon emissions of the energy, the Carbon Aware SDK is a key element for IT sustainability: from evaluating current carbon footprint up to taking into account carbon intensity for geo or time shifting\u2026"}),"\n",(0,i.jsxs)(n.p,{children:["Thanks to the community effort the first step is a click away with the ",(0,i.jsx)(n.a,{href:"https://carbon-aware-sdk.greensoftware.foundation/docs/quickstart",children:"quickstarting guide"}),", available for everyone."]}),"\n",(0,i.jsx)(n.p,{children:"No excuse!"})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},3307:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/fig1-798bfd7a1f30b0b88d900e60fbc48bd3.png"},3097:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/fig3-49e2337ba84c6840781d36bde8e958f0.png"},3014:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/fig4-fc3b6185d725da8a78be25d93439263e.png"},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var i=t(6540);const o={},r=i.createContext(o);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);