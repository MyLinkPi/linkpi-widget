# @mylinkpi/widget-cli

上传并管理自定义组件

## setup

### 安装依赖

```shell
pnpm i @mylinkpi/widget-react @mylinkpi/widget-cli @mylinkpi/widget-core

npm i @mylinkpi/widget-react @mylinkpi/widget-cli @mylinkpi/widget-core

yarn add @mylinkpi/widget-react @mylinkpi/widget-cli @mylinkpi/widget-core
```

### 基本文件

在基本的 broswer 项目中，符合如下目录结构

```
- src
  - index.ts(x)
- widget.config.js
```

`widget.config.js` 文件定义组件基本信息，内容如下：

```javascript
import { defineWidgetConfig } from "@mylinkpi/widget-core";

export default defineWidgetConfig({
  id: "Basic",
  name: "例子"
});
```

`index.ts` 文件定义组件逻辑代码，内容如下：

```typescript jsx
import {
  defineWidget,
  WidgetPreivew,
  WidgetRender,
  WidgetSetting
} from '@mylinkpi/widget-core'

type IFooBarWidget = {
  type: 'foo' | 'bar'
}

const Preview: WidgetPreivew<IFooBarWidget> = () => {
  return <div>preview</view>
}

const Setting: WidgetSetting<IFooBarWidget> = () => {
  return <div>setting</view>
}

const Render: WidgetRender<IFooBarWidget> = () => {
  return <div>render</view>
}

export default defineWidget<IFooBarWidget>()({
  icon: () => <IconFont name="FooBar"/>,
  basic: {
    defaultHeight: 3,
    defaultWidth: 3,
    minWidth: 3,
    minHeight: 3,
    settingWidth: 540
  },
  // 配置数据
  metadata: { type: 'foo' },
  preview: Preview,
  setting: Setting,
  render: Render
})
```

## 使用方法

- `npx widget-cli dev` 启动本地开发模式
- `npx widget-cli build` 打包组件
- `npx widget-cli publish` 打包并上传组件
- `npx widget-cli info` 打印已经上传的组件信息

## TODO

- [x] 访问组件共享 state hook
- [x] 访问主题类型配置列表 hook
- [x] 访问 SDK 实例 hook
- [x] 访问 当前节点 hook
- [x] 鉴权
- [x] 路由跳转
- [ ] 开发视图组件