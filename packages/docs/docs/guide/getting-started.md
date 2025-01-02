# 快速开始

本指南将帮助你快速上手 LinkPi Widget，并创建你的第一个可嵌入组件。

## 安装

使用你喜欢的包管理器安装所需的依赖包：

```bash
# 使用 npm
npm install @mylinkpi/widget-react @mylinkpi/widget-cli @mylinkpi/widget-core

# 使用 yarn
yarn add @mylinkpi/widget-react @mylinkpi/widget-cli @mylinkpi/widget-core

# 使用 pnpm
pnpm add @mylinkpi/widget-react @mylinkpi/widget-cli @mylinkpi/widget-core
```

## 项目结构

创建一个基本的项目结构如下：

```
- src
  - index.ts(x)
- widget.config.js
```

### 配置文件

首先创建 `widget.config.js` 文件来定义组件的基本信息：

```javascript
import { defineWidgetConfig } from "@mylinkpi/widget-core";

export default defineWidgetConfig({
  id: "YourWidgetId",
  name: "你的组件名称"
});
```

### 组件开发

在 `src/index.tsx` 中创建你的组件：

```typescript jsx
import {
  defineWidget,
  WidgetPreivew,
  WidgetRender,
  WidgetSetting
} from '@mylinkpi/widget-core'

// 定义组件的配置类型
type IWidgetConfig = {
  // 你的组件配置类型
}

// 预览组件
const Preview: WidgetPreivew<IWidgetConfig> = () => {
  return <div>预览内容</div>
}

// 设置面板
const Setting: WidgetSetting<IWidgetConfig> = () => {
  return <div>设置面板</div>
}

// 渲染组件
const Render: WidgetRender<IWidgetConfig> = () => {
  return <div>渲染内容</div>
}

// 导出组件定义
export default defineWidget<IWidgetConfig>()({
  icon: () => <div>图标</div>,
  basic: {
    defaultHeight: 3,
    defaultWidth: 3,
    minWidth: 3,
    minHeight: 3,
    settingWidth: 540
  },
  metadata: {}, // 默认配置
  preview: Preview,
  setting: Setting,
  render: Render
})
```

## 开发命令

开发和部署你的组件：

```bash
# 启动本地开发服务
npx widget-cli dev

# 构建组件
npx widget-cli build

# 发布组件
npx widget-cli publish

# 查看组件信息
npx widget-cli info
```

## 下一步

- 查看 [API 文档](/api/) 了解更多功能
- 探索 [示例](/examples/) 获取灵感
- 加入我们的 [社区](https://github.com/linkpi-projects/linkpi-widget/discussions) 讨论