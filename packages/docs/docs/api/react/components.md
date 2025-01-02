# React 组件

## WidgetPreview

用于预览组件的展示效果。

```typescript
import { WidgetPreview } from '@mylinkpi/widget-react'

type Props = {
  // 组件的配置类型
}

const Preview: WidgetPreview<Props> = () => {
  return (
    <div>
      预览内容
    </div>
  )
}
```

## WidgetRender

用于渲染组件的实际内容。

```typescript
import { WidgetRender } from '@mylinkpi/widget-react'

type Props = {
  // 组件的配置类型
}

const Render: WidgetRender<Props> = () => {
  return (
    <div>
      渲染内容
    </div>
  )
}
```

## WidgetSetting

用于配置组件的设置面板。

```typescript
import { WidgetSetting } from '@mylinkpi/widget-react'

type Props = {
  // 组件的配置类型
}

const Setting: WidgetSetting<Props> = () => {
  return (
    <div>
      设置面板内容
    </div>
  )
}
```

## 组件生命周期

每个组件都有三个主要的展示阶段：

1. **预览阶段**（WidgetPreview）：在组件选择或布局编辑时展示
2. **设置阶段**（WidgetSetting）：在配置组件属性时展示
3. **渲染阶段**（WidgetRender）：在最终页面中展示

每个阶段的组件都可以访问当前的配置数据和上下文，并通过相应的 Hooks 获取更多功能。