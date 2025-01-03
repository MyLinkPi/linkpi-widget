"use strict";(self.webpackChunk_linkpi_docs=self.webpackChunk_linkpi_docs||[]).push([["57"],{3321:function(e,n,i){i.r(n),i.d(n,{default:function(){return c}});var d=i(1549),r=i(6603);function s(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",pre:"pre",code:"code",ol:"ol"},(0,r.ah)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"core-api",children:["Core API",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#core-api",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"LinkPi Widget Core 是核心功能模块，提供了组件定义、配置和生命周期管理的核心 API。它是构建自定义组件的基础。"}),"\n",(0,d.jsxs)(n.h2,{id:"definewidget",children:["defineWidget",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#definewidget",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"用于定义一个自定义组件。这是创建 LinkPi Widget 组件的核心 API，它定义了组件的所有基本属性、行为和生命周期。组件可以访问当前 Node 的数据，并通过全局条件进行数据过滤。"}),"\n",(0,d.jsxs)(n.h3,{id:"功能特点",children:["功能特点",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#功能特点",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"类型安全：通过泛型支持完整的 TypeScript 类型推导"}),"\n",(0,d.jsx)(n.li,{children:"生命周期管理：统一管理预览、设置、渲染三个阶段"}),"\n",(0,d.jsx)(n.li,{children:"数据访问：可以访问当前 Node 的属性数据和关联的其他 Node"}),"\n",(0,d.jsx)(n.li,{children:"全局条件：支持使用全局条件进行数据过滤"}),"\n",(0,d.jsx)(n.li,{children:"节点导航：支持在不同 Node 间进行跳转"}),"\n"]}),"\n",(0,d.jsxs)(n.h3,{id:"基本用法",children:["基本用法",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#基本用法",children:"#"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-typescript",children:"import { defineWidget, WidgetPreivew, WidgetRender, WidgetSetting } from '@mylinkpi/widget-core'\n\n// 组件的配置类型\ntype IWidgetProps = {\n  // 标题配置\n  title: string;\n  description?: string;\n}\n\n// 预览阶段：用于组件选择\nconst Preview: WidgetPreivew<IWidgetProps> = () => {\n  return <div>preview</div>\n}\n\n// 设置阶段：配置组件属性\nconst Setting: WidgetSetting<IWidgetProps> = () => {\n  return <div>setting</div>\n}\n\n// 渲染阶段：展示实际内容\nconst Render: WidgetRender<IWidgetProps> = () => {\n  return <div>render</div>\n}\n\nexport default defineWidget<IWidgetProps>()({\n  // 组件图标\n  icon: () => <IconFont name=\"Example\"/>,\n  // 基础配置\n  basic: {\n    defaultHeight: 3,    // 默认高度（单位：网格）\n    defaultWidth: 3,     // 默认宽度（单位：网格）\n    minWidth: 3,         // 最小宽度（单位：网格）\n    minHeight: 3,        // 最小高度（单位：网格）\n    settingWidth: 540    // 设置面板宽度（单位：像素）\n  },\n  // 默认配置数据\n  metadata: {\n    title: '示例组件',\n    description: '这是一个示例组件'\n  },\n  preview: Preview,  // 预览阶段组件\n  setting: Setting,  // 设置阶段组件\n  render: Render    // 渲染阶段组件\n})\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"参数说明",children:["参数说明",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#参数说明",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"icon"}),": 组件图标，用于在组件库中展示"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"basic"}),": 基础配置","\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["尺寸相关配置：","\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"defaultHeight"}),": 默认高度，单位为网格（必填）。一个单位为 40px，必须为整数"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"defaultWidth"}),": 默认宽度，单位为网格（必填）。一个单位为容器宽度的 1/12，取值范围 1-12，必须为整数"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"minWidth"}),": 最小宽度限制，单位为网格。取值范围 1-12，必须为整数"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"minHeight"}),": 最小高度限制，单位为网格。一个单位为 40px，必须为整数"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"maxWidth"}),": 最大宽度限制，单位为网格。取值范围 1-12，必须为整数"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"maxHeight"}),": 最大高度限制，单位为网格。一个单位为 40px，必须为整数"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"settingWidth"}),": 设置面板宽度，单位为像素"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["行为相关配置：","\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"maxCount"}),": 最大实例数量限制"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"minCount"}),": 最小实例数量限制"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"deletable"}),": 是否可删除"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"movable"}),": 是否可移动"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"copyable"}),": 是否可复制"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"resizable"}),": 是否可调整大小"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"nested"}),": 是否可嵌套"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"dynamicHeight"}),": 是否可以放入动态高度版块"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"metadata"}),": 组件默认配置数据，会作为初始值传递给组件"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"preview"}),": 预览组件，用于组件选择和布局编辑时的展示"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"setting"}),": 设置组件，用于配置组件属性"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"render"}),": 渲染组件，用于最终页面中的展示"]}),"\n"]}),"\n",(0,d.jsxs)(n.h2,{id:"definewidgetconfig",children:["defineWidgetConfig",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#definewidgetconfig",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"用于定义组件的基本信息配置。这个配置文件通常位于组件根目录，用于声明组件的身份信息和基本配置。"}),"\n",(0,d.jsxs)(n.h3,{id:"功能特点-1",children:["功能特点",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#功能特点-1",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"组件标识：提供唯一的组件标识符"}),"\n",(0,d.jsx)(n.li,{children:"组件信息：定义组件的基本信息"}),"\n",(0,d.jsx)(n.li,{children:"配置校验：自动进行配置有效性验证"}),"\n"]}),"\n",(0,d.jsxs)(n.h3,{id:"基本用法-1",children:["基本用法",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#基本用法-1",children:"#"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-typescript",children:'import { defineWidgetConfig } from "@mylinkpi/widget-core";\n\nexport default defineWidgetConfig({\n  // 组件唯一标识，建议使用有意义的英文标识\n  id: "ExampleWidget",\n  // 组件显示名称，用于在界面上展示\n  name: "示例组件",\n  // 组件分组名称，用于在组件库中进行分类展示\n  comp_group: "基础组件"\n});\n'})}),"\n",(0,d.jsxs)(n.h3,{id:"参数说明-1",children:["参数说明",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#参数说明-1",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"id"}),": 组件的唯一标识符，在整个系统中必须唯一，建议使用有意义的英文标识"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"name"}),": 组件的显示名称，用于在组件库、设置面板等界面上展示"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"comp_group"}),": 组件分组名称，用于在组件库中对组件进行分类展示，可选参数"]}),"\n"]}),"\n",(0,d.jsxs)(n.h3,{id:"使用建议",children:["使用建议",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用建议",children:"#"})]}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"组件 ID 命名建议："}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"使用有意义的英文名称"}),"\n",(0,d.jsx)(n.li,{children:"采用驼峰命名法"}),"\n",(0,d.jsx)(n.li,{children:"避免使用特殊字符"}),"\n",(0,d.jsx)(n.li,{children:"建议加入业务相关的前缀"}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"组件名称建议："}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"使用清晰、具有描述性的名称"}),"\n",(0,d.jsx)(n.li,{children:"可以使用中文，使其更容易理解"}),"\n",(0,d.jsx)(n.li,{children:"建议在名称中体现组件的主要功能"}),"\n"]}),"\n"]}),"\n"]})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(s,{...e})}):s(e)}let c=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["api%2Fcore%2Findex.md"]={toc:[{text:"defineWidget",id:"definewidget",depth:2},{text:"功能特点",id:"功能特点",depth:3},{text:"基本用法",id:"基本用法",depth:3},{text:"参数说明",id:"参数说明",depth:3},{text:"defineWidgetConfig",id:"definewidgetconfig",depth:2},{text:"功能特点",id:"功能特点-1",depth:3},{text:"基本用法",id:"基本用法-1",depth:3},{text:"参数说明",id:"参数说明-1",depth:3},{text:"使用建议",id:"使用建议",depth:3}],title:"Core API",headingTitle:"Core API",frontmatter:{}}}}]);