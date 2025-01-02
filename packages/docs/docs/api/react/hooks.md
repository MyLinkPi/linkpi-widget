# React Hooks

## 组件配置相关

### useWidgetSetting

获取和更新组件的配置信息。

```typescript
import { useWidgetSetting } from '@mylinkpi/widget-react'

function YourComponent() {
  const { setting, updateSetting } = useWidgetSetting<{
    title: string;
  }>()

  return (
    <div>
      <span>{setting.title}</span>
      <button onClick={() => updateSetting({
        title: '新标题',
      })}>
        更新配置
      </button>
    </div>
  )
}
```

### useWidgetSharedState

访问和管理组件间的共享状态。

```typescript
import { useWidgetSharedState } from '@mylinkpi/widget-react'

function YourComponent() {
  const { state, setState } = useWidgetSharedState<{
    selectedIds: string[];
  }>()

  return (
    <div>
      <span>已选择 {state.selectedIds.length} 项</span>
      <button onClick={() => setState({
        selectedIds: [],
      })}>
        重置
      </button>
    </div>
  )
}
```

## 全局状态和功能

### useCurrentUser

获取当前用户信息。

```typescript
import { useCurrentUser } from '@mylinkpi/widget-react'

function YourComponent() {
  const { user } = useCurrentUser()
  return <div>当前用户：{user.name}</div>
}
```

### useCurrentOrgId

获取当前组织 ID。

```typescript
import { useCurrentOrgId } from '@mylinkpi/widget-react'

function YourComponent() {
  const orgId = useCurrentOrgId()
  return <div>当前组织：{orgId}</div>
}
```

### usePiSDK

获取 Pi SDK 实例。

```typescript
import { usePiSDK } from '@mylinkpi/widget-react'

function YourComponent() {
  const sdk = usePiSDK()
  return <div>{/* 使用 SDK */}</div>
}
```

## 主题（Node）相关

### useCurrentNode

获取当前主题（Node）信息。

```typescript
import { useCurrentNode } from '@mylinkpi/widget-react'

function YourComponent() {
  const node = useCurrentNode()
  return (
    <div>
      <h3>{node.name}</h3>
      <p>模板：{node.templateId}</p>
      <p>创建时间：{node.createTime}</p>
    </div>
  )
}
```

### useNodeTreeData

获取主题树数据。

```typescript
import { useNodeTreeData } from '@mylinkpi/widget-react'

function YourComponent() {
  const treeData = useNodeTreeData()
  return (
    <Tree data={treeData}>
      {/* 渲染主题树 */}
    </Tree>
  )
}
```

### useJumpNode

用于主题间跳转。

```typescript
import { useJumpNode } from '@mylinkpi/widget-react'

function YourComponent() {
  const jumpTo = useJumpNode()

  const handleClick = (nodeId: string) => {
    jumpTo(nodeId)
  }

  return <button onClick={() => handleClick('target-node-id')}>
    跳转到目标主题
  </button>
}
```

## 主题类型（Template）相关

### useTemplateList

获取主题类型列表。

```typescript
import { useTemplateList } from '@mylinkpi/widget-react'

function YourComponent() {
  const { templates } = useTemplateList()
  return (
    <ul>
      {templates.map(template => (
        <li key={template.id}>
          <h4>{template.name}</h4>
          <p>{template.description}</p>
          <p>版本：{template.version}</p>
        </li>
      ))}
    </ul>
  )
}
```

### useTempateInfo

获取特定主题类型信息。

```typescript
import { useTempateInfo } from '@mylinkpi/widget-react'

function YourComponent() {
  const { template } = useTempateInfo('template-id')
  return (
    <div>
      <h3>{template.name}</h3>
      <p>{template.description}</p>
      <h4>系统属性：</h4>
      <ul>
        {template.systemProps.map(prop => (
          <li key={prop.id}>{prop.name}</li>
        ))}
      </ul>
      <h4>自定义属性：</h4>
      <ul>
        {template.customProps.map(prop => (
          <li key={prop.id}>
            {prop.name} - {prop.type}
          </li>
        ))}
      </ul>
    </div>
  )
}
```

## 全局条件

### useGlobalConditions

获取全局条件配置。

```typescript
import { useGlobalConditions } from '@mylinkpi/widget-react'

function YourComponent() {
  const conditions = useGlobalConditions('condition-id')
  return (
    <div>
      <h3>条件配置</h3>
      <ul>
        {Object.entries(conditions).map(([key, value]) => (
          <li key={key}>{key}: {value}</li>
        ))}
      </ul>
    </div>
  )
}
```

### useGlobalConditionFilterValue

获取特定全局条件的过滤值。

```typescript
import { useGlobalConditionFilterValue } from '@mylinkpi/widget-react'

function YourComponent() {
  const filterValue = useGlobalConditionFilterValue('date-range')
  return (
    <div>
      <p>当前日期范围：</p>
      <p>开始：{filterValue.start}</p>
      <p>结束：{filterValue.end}</p>
    </div>
  )
}
```

### useAllGlobalConditionFilterValue

获取所有全局条件的过滤值。

```typescript
import { useAllGlobalConditionFilterValue } from '@mylinkpi/widget-react'

function YourComponent() {
  const allFilters = useAllGlobalConditionFilterValue()
  return (
    <div>
      <h3>所有过滤条件</h3>
      {Object.entries(allFilters).map(([key, value]) => (
        <div key={key}>
          <h4>{key}</h4>
          <pre>{JSON.stringify(value, null, 2)}</pre>
        </div>
      ))}
    </div>
  )
}
```

## 认证相关

### useSSOToken

获取和管理 SSO 令牌。

```typescript
import { useSSOToken } from '@mylinkpi/widget-react'

function YourComponent() {
  const { token, loading, error } = useSSOToken()

  if (loading) return <div>加载中...</div>
  if (error) return <div>错误：{error.message}</div>

  return <div>Token: {token}</div>
}
```

## 其他工具

### useUrlQuerys

获取 URL 查询参数。

```typescript
import { useUrlQuerys } from '@mylinkpi/widget-react'

function YourComponent() {
  const query = useUrlQuerys()
  return (
    <div>
      <p>主题 ID：{query.nodeId}</p>
      <p>模板 ID：{query.templateId}</p>
    </div>
  )
}
```