# API 参考

LinkPi Widget 是一个用于构建可视化数据分析界面的组件库系统。它提供了一套完整的 API 来处理主题（Node）、主题类型（Template）和可视化组件（Widget）。

## @mylinkpi/widget-react

React 组件库，提供了一系列用于构建和管理自定义组件的 React 组件和 Hooks。

- [组件](/api/react/components) - 包含 `WidgetPreview`、`WidgetRender`、`WidgetSetting` 等核心组件，用于组件的预览、配置和渲染
- [Hooks](/api/react/hooks) - 包含访问主题数据、主题类型、全局条件等功能的 Hooks

## @mylinkpi/widget-core

核心功能模块，提供了组件定义和配置的核心 API。

- [defineWidget](/api/core/#definewidget) - 定义自定义组件，包括预览、设置、渲染三个核心阶段
- [defineWidgetConfig](/api/core/#definewidgetconfig) - 定义组件的基本信息配置

## @mylinkpi/widget-cli

命令行工具，用于开发、构建和发布自定义组件。

主要命令：
- `widget-cli dev` - 启动本地开发模式，用于组件开发和调试
- `widget-cli build` - 打包组件，生成可发布的组件包
- `widget-cli publish` - 打包并上传组件到组件库
- `widget-cli info` - 打印已上传的组件信息

## 快速开始

### 安装依赖

```shell
pnpm i @mylinkpi/widget-react @mylinkpi/widget-cli @mylinkpi/widget-core
# 或
npm i @mylinkpi/widget-react @mylinkpi/widget-cli @mylinkpi/widget-core
# 或
yarn add @mylinkpi/widget-react @mylinkpi/widget-cli @mylinkpi/widget-core
```

### 基本概念

1. **Node（主题）**：系统中的一条具体数据记录，每个 Node 都有其对应的模板类型（Template）。

2. **Template（主题类型）**：定义了 Node 的结构和行为，包含系统属性和自定义属性。

3. **Widget（组件）**：用于展示和操作 Node 数据的可视化组件，包含预览、设置、渲染三个核心阶段。

4. **全局条件**：用于跨组件的数据过滤，可以影响多个组件的数据展示。

详细的使用方法和示例请参考[快速开始](/guide/getting-started)指南。