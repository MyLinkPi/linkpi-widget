# React 组件

`@mylinkpi/widget-react` 包提供了一系列组件，用于帮助开发者在开发自定义组件时更好地集成连接派平台的功能。

## DataSourceSettingWidgetSetting

数据源设置组件，用于在自定义组件中配置数据源。通过这个组件，你可以方便地接入连接派平台的数据服务。

该组件会自动在组件配置中存入以下参数：
- `conditions` - 数据源的筛选条件
- `type` - 数据源类型

### 参数
该组件不需要传入任何参数。

### 使用示例
```tsx
import { DataSourceSettingWidgetSetting } from '@mylinkpi/widget-react';

function YourComponent() {
  return (
    <div>
      <DataSourceSettingWidgetSetting />
    </div>
  );
}
```

## GlobalConditionFilterItemSelect

全局条件筛选项选择器组件，用于在自定义组件中集成连接派平台的全局筛选功能。

### 参数
- `value?: [string, string]` - 当前选中的值，格式为 [筛选组件ID, 筛选项ID]
- `onChange?: (value?: [string, string]) => void` - 选择变化时的回调函数

### 使用示例
```tsx
import { GlobalConditionFilterItemSelect } from '@mylinkpi/widget-react';

function YourComponent() {
  const handleChange = (value?: [string, string]) => {
    console.log('选中的值:', value);
    // value[0] 是筛选组件的ID
    // value[1] 是筛选项的ID
  };

  return (
    <GlobalConditionFilterItemSelect
      value={['filterComponentId', 'filterItemId']}
      onChange={handleChange}
    />
  );
}
```

## GlobalConditionFilterLink

> ⚠️ 注意：此组件已被标记为废弃（deprecated）

全局条件筛选链接组件。

### 参数
- `id: string` - 筛选器ID（必填）
- `onShowBtnClick?: () => void` - 显示按钮点击时的回调函数

### 使用示例
```tsx
import { GlobalConditionFilterLink } from '@mylinkpi/widget-react';

function YourComponent() {
  const handleClick = () => {
    console.log('按钮被点击');
  };

  return (
    <GlobalConditionFilterLink
      id="filter123"
      onShowBtnClick={handleClick}
    />
  );
}
```

## NodeViewComponent

节点视图组件，用于在自定义组件中展示和操作连接派平台的节点内容。

### 参数
- `nodeId: string` - 节点ID（必填）
- `viewId: string` - 视图ID（必填）

### 使用示例
```tsx
import { NodeViewComponent } from '@mylinkpi/widget-react';

function YourComponent() {
  return (
    <NodeViewComponent
      nodeId="node123"
      viewId="view456"
    />
  );
}
```

## TemplateSelect

模板选择器组件，用于在自定义组件中集成连接派平台的模板选择功能。

### 参数
- `value?: string` - 当前选中的模板ID
- `onChange?: (value?: string) => void` - 选择变化时的回调函数

### 使用示例
```tsx
import { TemplateSelect } from '@mylinkpi/widget-react';

function YourComponent() {
  const handleChange = (value?: string) => {
    console.log('选中的模板:', value);
  };

  return (
    <TemplateSelect
      value="template123"
      onChange={handleChange}
    />
  );
}
```

## ViewSelect

视图选择器组件，用于在自定义组件中集成连接派平台的视图选择功能。

### 参数
- `value: string` - 当前选中的视图ID（必填）
- `onChange?: (value?: string, option?: { value: string; label: string; nodeId: string }) => void` - 选择变化时的回调函数

### 使用示例
```tsx
import { ViewSelect } from '@mylinkpi/widget-react';

function YourComponent() {
  const handleChange = (value?: string, option?: { value: string; label: string; nodeId: string }) => {
    console.log('选中的视图:', value);
    console.log('视图详情:', option);
  };

  return (
    <ViewSelect
      value="view123"
      onChange={handleChange}
    />
  );
}
```

---

注意：这些组件都是为了帮助你的自定义组件更好地与连接派平台进行集成。它们都使用了 React Context 来获取平台提供的功能，因此确保在使用这些组件时，你的应用已经正确配置了必要的 Context Provider。如果你想了解如何定义一个完整的自定义组件，请参考 [核心 API 文档](../core/index.md)。