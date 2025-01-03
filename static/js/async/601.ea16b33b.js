"use strict";(self.webpackChunk_linkpi_docs=self.webpackChunk_linkpi_docs||[]).push([["601"],{4216:function(e,n,t){t.r(n),t.d(n,{default:function(){return a}});var i=t(1549),s=t(6603);function r(e){let n=Object.assign({h1:"h1",a:"a",h2:"h2",h3:"h3",p:"p",pre:"pre",code:"code"},(0,s.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"react-hooks",children:["React Hooks",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#react-hooks",children:"#"})]}),"\n",(0,i.jsxs)(n.h2,{id:"组件配置相关",children:["组件配置相关",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#组件配置相关",children:"#"})]}),"\n",(0,i.jsxs)(n.h3,{id:"usewidgetsetting",children:["useWidgetSetting",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usewidgetsetting",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"获取和更新组件的配置信息。"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { useWidgetSetting } from '@mylinkpi/widget-react'\n\nfunction YourComponent() {\n  const { setting, updateSetting } = useWidgetSetting<{\n    title: string;\n  }>()\n\n  return (\n    <div>\n      <span>{setting.title}</span>\n      <button onClick={() => updateSetting({\n        title: '新标题',\n      })}>\n        更新配置\n      </button>\n    </div>\n  )\n}\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"usewidgetsharedstate",children:["useWidgetSharedState",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usewidgetsharedstate",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"访问和管理组件间的共享状态。"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { useWidgetSharedState } from '@mylinkpi/widget-react'\n\nfunction YourComponent() {\n  const { state, setState } = useWidgetSharedState<{\n    selectedIds: string[];\n  }>()\n\n  return (\n    <div>\n      <span>已选择 {state.selectedIds.length} 项</span>\n      <button onClick={() => setState({\n        selectedIds: [],\n      })}>\n        重置\n      </button>\n    </div>\n  )\n}\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"全局状态和功能",children:["全局状态和功能",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#全局状态和功能",children:"#"})]}),"\n",(0,i.jsxs)(n.h3,{id:"usecurrentuser",children:["useCurrentUser",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usecurrentuser",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"获取当前用户信息。"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { useCurrentUser } from '@mylinkpi/widget-react'\n\nfunction YourComponent() {\n  const { user } = useCurrentUser()\n  return <div>当前用户：{user.name}</div>\n}\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"usecurrentorgid",children:["useCurrentOrgId",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usecurrentorgid",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"获取当前空间 ID。"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { useCurrentOrgId } from '@mylinkpi/widget-react'\n\nfunction YourComponent() {\n  const orgId = useCurrentOrgId()\n  return <div>当前空间：{orgId}</div>\n}\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"usepisdk",children:["usePiSDK",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usepisdk",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["获取 Pi SDK 实例。详细的 SDK API 文档请参考 ",(0,i.jsx)(n.a,{href:"/api/sdk/pi-sdk",children:"PiSDK API 文档"}),"。"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { usePiSDK } from '@mylinkpi/widget-react'\n\nfunction YourComponent() {\n  const sdk = usePiSDK()\n  return <div>{/* 使用 SDK */}</div>\n}\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"主题node相关",children:["主题（Node）相关",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#主题node相关",children:"#"})]}),"\n",(0,i.jsxs)(n.h3,{id:"usecurrentnode",children:["useCurrentNode",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usecurrentnode",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"获取当前主题（Node）信息。"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { useCurrentNode } from '@mylinkpi/widget-react'\n\nfunction YourComponent() {\n  const node = useCurrentNode()\n  return (\n    <div>\n      <h3>{node.name}</h3>\n      <p>模板：{node.templateId}</p>\n      <p>创建时间：{node.createTime}</p>\n    </div>\n  )\n}\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"usenodetreedata",children:["useNodeTreeData",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usenodetreedata",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"获取主题树数据。"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { useNodeTreeData } from '@mylinkpi/widget-react'\n\nfunction YourComponent() {\n  const treeData = useNodeTreeData()\n  return (\n    <Tree data={treeData}>\n      {/* 渲染主题树 */}\n    </Tree>\n  )\n}\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"usejumpnode",children:["useJumpNode",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usejumpnode",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"用于主题间跳转。"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { useJumpNode } from '@mylinkpi/widget-react'\n\nfunction YourComponent() {\n  const jumpTo = useJumpNode()\n\n  const handleClick = (nodeId: string) => {\n    jumpTo(nodeId)\n  }\n\n  return <button onClick={() => handleClick('target-node-id')}>\n    跳转到目标主题\n  </button>\n}\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"主题类型template相关",children:["主题类型（Template）相关",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#主题类型template相关",children:"#"})]}),"\n",(0,i.jsxs)(n.h3,{id:"usetemplatelist",children:["useTemplateList",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usetemplatelist",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"获取主题类型列表。"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { useTemplateList } from '@mylinkpi/widget-react'\n\nfunction YourComponent() {\n  const { templates } = useTemplateList()\n  return (\n    <ul>\n      {templates.map(template => (\n        <li key={template.id}>\n          <h4>{template.name}</h4>\n          <p>{template.description}</p>\n          <p>版本：{template.version}</p>\n        </li>\n      ))}\n    </ul>\n  )\n}\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"usetempateinfo",children:["useTempateInfo",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usetempateinfo",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"获取特定主题类型信息。"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { useTempateInfo } from '@mylinkpi/widget-react'\n\nfunction YourComponent() {\n  const { template } = useTempateInfo('template-id')\n  return (\n    <div>\n      <h3>{template.name}</h3>\n      <p>{template.description}</p>\n      <h4>系统属性：</h4>\n      <ul>\n        {template.systemProps.map(prop => (\n          <li key={prop.id}>{prop.name}</li>\n        ))}\n      </ul>\n      <h4>自定义属性：</h4>\n      <ul>\n        {template.customProps.map(prop => (\n          <li key={prop.id}>\n            {prop.name} - {prop.type}\n          </li>\n        ))}\n      </ul>\n    </div>\n  )\n}\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"全局条件",children:["全局条件",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#全局条件",children:"#"})]}),"\n",(0,i.jsxs)(n.h3,{id:"useglobalconditions",children:["useGlobalConditions",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#useglobalconditions",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"获取全局条件配置。"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { useGlobalConditions } from '@mylinkpi/widget-react'\n\nfunction YourComponent() {\n  const conditions = useGlobalConditions('condition-id')\n  return (\n    <div>\n      <h3>条件配置</h3>\n      <ul>\n        {Object.entries(conditions).map(([key, value]) => (\n          <li key={key}>{key}: {value}</li>\n        ))}\n      </ul>\n    </div>\n  )\n}\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"useglobalconditionfiltervalue",children:["useGlobalConditionFilterValue",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#useglobalconditionfiltervalue",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"获取特定全局条件的过滤值。"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { useGlobalConditionFilterValue } from '@mylinkpi/widget-react'\n\nfunction YourComponent() {\n  const filterValue = useGlobalConditionFilterValue('date-range')\n  return (\n    <div>\n      <p>当前日期范围：</p>\n      <p>开始：{filterValue.start}</p>\n      <p>结束：{filterValue.end}</p>\n    </div>\n  )\n}\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"useallglobalconditionfiltervalue",children:["useAllGlobalConditionFilterValue",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#useallglobalconditionfiltervalue",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"获取所有全局条件的过滤值。"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { useAllGlobalConditionFilterValue } from '@mylinkpi/widget-react'\n\nfunction YourComponent() {\n  const allFilters = useAllGlobalConditionFilterValue()\n  return (\n    <div>\n      <h3>所有过滤条件</h3>\n      {Object.entries(allFilters).map(([key, value]) => (\n        <div key={key}>\n          <h4>{key}</h4>\n          <pre>{JSON.stringify(value, null, 2)}</pre>\n        </div>\n      ))}\n    </div>\n  )\n}\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"认证相关",children:["认证相关",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#认证相关",children:"#"})]}),"\n",(0,i.jsxs)(n.h3,{id:"usessotoken",children:["useSSOToken",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usessotoken",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"获取和管理 SSO 令牌。"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { useSSOToken } from '@mylinkpi/widget-react'\n\nfunction YourComponent() {\n  const { token, loading, error } = useSSOToken()\n\n  if (loading) return <div>加载中...</div>\n  if (error) return <div>错误：{error.message}</div>\n\n  return <div>Token: {token}</div>\n}\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"其他工具",children:["其他工具",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#其他工具",children:"#"})]}),"\n",(0,i.jsxs)(n.h3,{id:"useurlquerys",children:["useUrlQuerys",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#useurlquerys",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"获取 URL 查询参数。"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { useUrlQuerys } from '@mylinkpi/widget-react'\n\nfunction YourComponent() {\n  const query = useUrlQuerys()\n  return (\n    <div>\n      <p>主题 ID：{query.nodeId}</p>\n      <p>模板 ID：{query.templateId}</p>\n    </div>\n  )\n}\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"usenodecontentmodalclose",children:["useNodeContentModalClose",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usenodecontentmodalclose",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"获取关闭节点内容弹窗的方法。"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { useNodeContentModalClose } from '@mylinkpi/widget-react'\n\nfunction YourComponent() {\n  const { close } = useNodeContentModalClose()\n\n  return (\n    <button onClick={close}>\n      关闭弹窗\n    </button>\n  )\n}\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"usewidgetinstancelist",children:["useWidgetInstanceList",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usewidgetinstancelist",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"获取所有组件实例列表。"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { useWidgetInstanceList } from '@mylinkpi/widget-react'\n\nfunction YourComponent() {\n  const instances = useWidgetInstanceList()\n\n  return (\n    <div>\n      <h3>组件实例列表</h3>\n      <ul>\n        {instances.map(instance => (\n          <li key={instance.id}>\n            {instance.name}\n          </li>\n        ))}\n      </ul>\n    </div>\n  )\n}\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"usewidgetinstancesbywidgetid",children:["useWidgetInstancesByWidgetId",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usewidgetinstancesbywidgetid",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"根据组件类型 ID 获取对应的组件实例列表。"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { useWidgetInstancesByWidgetId } from '@mylinkpi/widget-react'\n\nfunction YourComponent() {\n  const instances = useWidgetInstancesByWidgetId('your-widget-id')\n\n  return (\n    <div>\n      <h3>特定类型的组件实例</h3>\n      <ul>\n        {instances.map(instance => (\n          <li key={instance.id}>\n            {instance.name}\n          </li>\n        ))}\n      </ul>\n    </div>\n  )\n}\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"usesetextraglobalconditions",children:["useSetExtraGlobalConditions",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usesetextraglobalconditions",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"设置组件的额外全局筛选条件。"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { useSetExtraGlobalConditions } from '@mylinkpi/widget-react'\n\nfunction YourComponent() {\n  const setExtraConditions = useSetExtraGlobalConditions()\n\n  const handleSetConditions = () => {\n    setExtraConditions('target-id', [{\n      key: 'sysCreateTime',\n      op: 'timeAfter'\n      input: [1735315199999],\n    }])\n  }\n\n  return (\n    <button onClick={handleSetConditions}>\n      设置额外筛选条件\n    </button>\n  )\n}\n"})})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}let a=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["api%2Freact%2Fhooks.md"]={toc:[{text:"组件配置相关",id:"组件配置相关",depth:2},{text:"useWidgetSetting",id:"usewidgetsetting",depth:3},{text:"useWidgetSharedState",id:"usewidgetsharedstate",depth:3},{text:"全局状态和功能",id:"全局状态和功能",depth:2},{text:"useCurrentUser",id:"usecurrentuser",depth:3},{text:"useCurrentOrgId",id:"usecurrentorgid",depth:3},{text:"usePiSDK",id:"usepisdk",depth:3},{text:"主题（Node）相关",id:"主题node相关",depth:2},{text:"useCurrentNode",id:"usecurrentnode",depth:3},{text:"useNodeTreeData",id:"usenodetreedata",depth:3},{text:"useJumpNode",id:"usejumpnode",depth:3},{text:"主题类型（Template）相关",id:"主题类型template相关",depth:2},{text:"useTemplateList",id:"usetemplatelist",depth:3},{text:"useTempateInfo",id:"usetempateinfo",depth:3},{text:"全局条件",id:"全局条件",depth:2},{text:"useGlobalConditions",id:"useglobalconditions",depth:3},{text:"useGlobalConditionFilterValue",id:"useglobalconditionfiltervalue",depth:3},{text:"useAllGlobalConditionFilterValue",id:"useallglobalconditionfiltervalue",depth:3},{text:"认证相关",id:"认证相关",depth:2},{text:"useSSOToken",id:"usessotoken",depth:3},{text:"其他工具",id:"其他工具",depth:2},{text:"useUrlQuerys",id:"useurlquerys",depth:3},{text:"useNodeContentModalClose",id:"usenodecontentmodalclose",depth:3},{text:"useWidgetInstanceList",id:"usewidgetinstancelist",depth:3},{text:"useWidgetInstancesByWidgetId",id:"usewidgetinstancesbywidgetid",depth:3},{text:"useSetExtraGlobalConditions",id:"usesetextraglobalconditions",depth:3}],title:"React Hooks",headingTitle:"React Hooks",frontmatter:{}}}}]);