# Core API

LinkPi Widget Core 是核心功能模块，提供了组件定义、配置和生命周期管理的核心 API。它是构建自定义组件的基础。

## defineWidget

用于定义一个自定义组件。这是创建 LinkPi Widget 组件的核心 API，它定义了组件的所有基本属性、行为和生命周期。组件可以访问当前 Node 的数据，并通过全局条件进行数据过滤。

### 功能特点

- 类型安全：通过泛型支持完整的 TypeScript 类型推导
- 生命周期管理：统一管理预览、设置、渲染三个阶段
- 数据访问：可以访问当前 Node 的属性数据和关联的其他 Node
- 全局条件：支持使用全局条件进行数据过滤
- 节点导航：支持在不同 Node 间进行跳转

### 基本用法

```typescript
import { defineWidget, WidgetPreivew, WidgetRender, WidgetSetting } from '@mylinkpi/widget-core'

// 组件的配置类型
type IWidgetProps = {
  // 标题配置
  title: string;
  description?: string;
}

// 预览阶段：用于组件选择
const Preview: WidgetPreivew<IWidgetProps> = () => {
  return <div>preview</div>
}

// 设置阶段：配置组件属性
const Setting: WidgetSetting<IWidgetProps> = () => {
  return <div>setting</div>
}

// 渲染阶段：展示实际内容
const Render: WidgetRender<IWidgetProps> = () => {
  return <div>render</div>
}

export default defineWidget<IWidgetProps>()({
  // 组件图标
  icon: () => <IconFont name="Example"/>,
  // 基础配置
  basic: {
    defaultHeight: 3,    // 默认高度（单位：网格）
    defaultWidth: 3,     // 默认宽度（单位：网格）
    minWidth: 3,         // 最小宽度（单位：网格）
    minHeight: 3,        // 最小高度（单位：网格）
    settingWidth: 540    // 设置面板宽度（单位：像素）
  },
  // 默认配置数据
  metadata: {
    title: '示例组件',
    description: '这是一个示例组件'
  },
  preview: Preview,  // 预览阶段组件
  setting: Setting,  // 设置阶段组件
  render: Render    // 渲染阶段组件
})
```

### 参数说明

- `icon`: 组件图标，用于在组件库中展示
- `basic`: 基础配置
  - `defaultHeight`: 默认高度，单位为网格
  - `defaultWidth`: 默认宽度，单位为网格
  - `minWidth`: 最小宽度限制，单位为网格
  - `minHeight`: 最小高度限制，单位为网格
  - `settingWidth`: 设置面板宽度，单位为像素
- `metadata`: 组件默认配置数据，会作为初始值传递给组件
- `preview`: 预览组件，用于组件选择和布局编辑时的展示
- `setting`: 设置组件，用于配置组件属性
- `render`: 渲染组件，用于最终页面中的展示

## defineWidgetConfig

用于定义组件的基本信息配置。这个配置文件通常位于组件根目录，用于声明组件的身份信息和基本配置。

### 功能特点

- 组件标识：提供唯一的组件标识符
- 组件信息：定义组件的基本信息
- 配置校验：自动进行配置有效性验证

### 基本用法

```typescript
import { defineWidgetConfig } from "@mylinkpi/widget-core";

export default defineWidgetConfig({
  // 组件唯一标识，建议使用有意义的英文标识
  id: "ExampleWidget",
  // 组件显示名称，用于在界面上展示
  name: "示例组件"
});
```

### 参数说明

- `id`: 组件的唯一标识符，在整个系统中必须唯一，建议使用有意义的英文标识
- `name`: 组件的显示名称，用于在组件库、设置面板等界面上展示

### 使用建议

1. 组件 ID 命名建议：
   - 使用有意义的英文名称
   - 采用驼峰命名法
   - 避免使用特殊字符
   - 建议加入业务相关的前缀

2. 组件名称建议：
   - 使用清晰、具有描述性的名称
   - 可以使用中文，使其更容易理解
   - 建议在名称中体现组件的主要功能