"use strict";(self.webpackChunk_linkpi_docs=self.webpackChunk_linkpi_docs||[]).push([["352"],{9625:function(e,i,n){n.r(i),n.d(i,{default:function(){return c}});var d=n(1549),s=n(6603);function r(e){let i=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",code:"code",pre:"pre",ol:"ol",strong:"strong"},(0,s.ah)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(i.h1,{id:"api-参考",children:["API 参考",(0,d.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#api-参考",children:"#"})]}),"\n",(0,d.jsx)(i.p,{children:"LinkPi Widget 是一个用于构建可视化数据分析界面的组件库系统。它提供了一套完整的 API 来处理主题（Node）、主题类型（Template）和可视化组件（Widget）。"}),"\n",(0,d.jsxs)(i.h2,{id:"mylinkpiwidget-react",children:["@mylinkpi/widget-react",(0,d.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#mylinkpiwidget-react",children:"#"})]}),"\n",(0,d.jsx)(i.p,{children:"React 组件库，提供了一系列组件和 Hooks，用于帮助开发者在开发自定义组件时更好地集成连接派平台的功能。"}),"\n",(0,d.jsxs)(i.h3,{id:"组件",children:["组件",(0,d.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#组件",children:"#"})]}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.a,{href:"/api/react/components",children:"组件"})," - 包含 ",(0,d.jsx)(i.code,{children:"DataSourceSettingWidgetSetting"}),"、",(0,d.jsx)(i.code,{children:"GlobalConditionFilterItemSelect"}),"、",(0,d.jsx)(i.code,{children:"NodeViewComponent"}),"、",(0,d.jsx)(i.code,{children:"TemplateSelect"}),"、",(0,d.jsx)(i.code,{children:"ViewSelect"})," 等组件，用于集成平台的数据源配置、全局筛选、节点视图等功能"]}),"\n"]}),"\n",(0,d.jsxs)(i.h3,{id:"hooks",children:["Hooks",(0,d.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#hooks",children:"#"})]}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.a,{href:"/api/react/hooks",children:"Hooks"})," - 提供了丰富的 Hooks API：","\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsxs)(i.li,{children:["组件配置相关：",(0,d.jsx)(i.code,{children:"useWidgetSetting"}),"、",(0,d.jsx)(i.code,{children:"useWidgetSharedState"})]}),"\n",(0,d.jsxs)(i.li,{children:["全局状态：",(0,d.jsx)(i.code,{children:"useCurrentUser"}),"、",(0,d.jsx)(i.code,{children:"useCurrentOrgId"}),"、",(0,d.jsx)(i.code,{children:"usePiSDK"})]}),"\n",(0,d.jsxs)(i.li,{children:["主题相关：",(0,d.jsx)(i.code,{children:"useCurrentNode"}),"、",(0,d.jsx)(i.code,{children:"useNodeTreeData"}),"、",(0,d.jsx)(i.code,{children:"useJumpNode"})]}),"\n",(0,d.jsxs)(i.li,{children:["主题类型相关：",(0,d.jsx)(i.code,{children:"useTemplateList"}),"、",(0,d.jsx)(i.code,{children:"useTempateInfo"})]}),"\n",(0,d.jsxs)(i.li,{children:["全局条件：",(0,d.jsx)(i.code,{children:"useGlobalConditions"}),"、",(0,d.jsx)(i.code,{children:"useGlobalConditionFilterValue"})]}),"\n",(0,d.jsxs)(i.li,{children:["其他工具：",(0,d.jsx)(i.code,{children:"useUrlQuerys"}),"、",(0,d.jsx)(i.code,{children:"useWidgetInstanceList"})," 等"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(i.p,{children:"所有组件和 Hooks 都使用了 React Context 来获取平台提供的功能，确保在使用时应用已正确配置必要的 Context Provider。"}),"\n",(0,d.jsxs)(i.h2,{id:"mylinkpiwidget-core",children:["@mylinkpi/widget-core",(0,d.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#mylinkpiwidget-core",children:"#"})]}),"\n",(0,d.jsx)(i.p,{children:"核心功能模块，提供了组件定义和配置的核心 API。"}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.a,{href:"/api/core/#definewidget",children:"defineWidget"})," - 定义自定义组件，包括预览、设置、渲染三个核心阶段"]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.a,{href:"/api/core/#definewidgetconfig",children:"defineWidgetConfig"})," - 定义组件的基本信息配置"]}),"\n"]}),"\n",(0,d.jsxs)(i.h2,{id:"mylinkpiwidget-cli",children:["@mylinkpi/widget-cli",(0,d.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#mylinkpiwidget-cli",children:"#"})]}),"\n",(0,d.jsx)(i.p,{children:"命令行工具，用于开发、构建和发布自定义组件。"}),"\n",(0,d.jsx)(i.p,{children:"主要命令："}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"widget-cli dev"})," - 启动本地开发模式，用于组件开发和调试"]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"widget-cli build"})," - 打包组件，生成可发布的组件包"]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"widget-cli publish"})," - 打包并上传组件到组件库"]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"widget-cli info"})," - 打印已上传的组件信息"]}),"\n"]}),"\n",(0,d.jsxs)(i.h2,{id:"快速开始",children:["快速开始",(0,d.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#快速开始",children:"#"})]}),"\n",(0,d.jsxs)(i.h3,{id:"安装依赖",children:["安装依赖",(0,d.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#安装依赖",children:"#"})]}),"\n",(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-shell",children:"pnpm i @mylinkpi/widget-react @mylinkpi/widget-cli @mylinkpi/widget-core\n# 或\nnpm i @mylinkpi/widget-react @mylinkpi/widget-cli @mylinkpi/widget-core\n# 或\nyarn add @mylinkpi/widget-react @mylinkpi/widget-cli @mylinkpi/widget-core\n"})}),"\n",(0,d.jsxs)(i.h3,{id:"基本概念",children:["基本概念",(0,d.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#基本概念",children:"#"})]}),"\n",(0,d.jsxs)(i.ol,{children:["\n",(0,d.jsxs)(i.li,{children:["\n",(0,d.jsxs)(i.p,{children:[(0,d.jsx)(i.strong,{children:"Node（主题）"}),"：系统中的一条具体数据记录，每个 Node 都有其对应的模板类型（Template）。"]}),"\n"]}),"\n",(0,d.jsxs)(i.li,{children:["\n",(0,d.jsxs)(i.p,{children:[(0,d.jsx)(i.strong,{children:"Template（主题类型）"}),"：定义了 Node 的结构和行为，包含系统属性和自定义属性。"]}),"\n"]}),"\n",(0,d.jsxs)(i.li,{children:["\n",(0,d.jsxs)(i.p,{children:[(0,d.jsx)(i.strong,{children:"Widget（组件）"}),"：用于展示和操作 Node 数据的可视化组件，包含预览、设置、渲染三个核心阶段。"]}),"\n"]}),"\n",(0,d.jsxs)(i.li,{children:["\n",(0,d.jsxs)(i.p,{children:[(0,d.jsx)(i.strong,{children:"全局条件"}),"：用于跨组件的数据过滤，可以影响多个组件的数据展示。"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(i.p,{children:["详细的使用方法和示例请参考",(0,d.jsx)(i.a,{href:"/guide/getting-started",children:"快速开始"}),"指南。"]})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:i}=Object.assign({},(0,s.ah)(),e.components);return i?(0,d.jsx)(i,{...e,children:(0,d.jsx)(r,{...e})}):r(e)}let c=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["api%2Findex.md"]={toc:[{text:"@mylinkpi/widget-react",id:"mylinkpiwidget-react",depth:2},{text:"组件",id:"组件",depth:3},{text:"Hooks",id:"hooks",depth:3},{text:"@mylinkpi/widget-core",id:"mylinkpiwidget-core",depth:2},{text:"@mylinkpi/widget-cli",id:"mylinkpiwidget-cli",depth:2},{text:"快速开始",id:"快速开始",depth:2},{text:"安装依赖",id:"安装依赖",depth:3},{text:"基本概念",id:"基本概念",depth:3}],title:"API 参考",headingTitle:"API 参考",frontmatter:{}}}}]);