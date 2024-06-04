# @mylinkpi/widget-core

提供自定义组件的基本方法

## 安装

```bash
npm i @mylinkpi/widget-core
```

## 使用

```typescript
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
  // 唯一 Id
  id: 'FooBar',
  // 标题
  title: 'FooBar组件',
  icon: () => <IconFont name="FooBar"/>,
  basic: {
    defaultHeight: 3,
    defaultWidth: 3,
    minWidth: 3,
    minHeight: 3,
    settingWidth: 540
  },
  // 配置数据
  metadata: {} as any,
  preview: Preview,
  setting: Setting,
  render: Render
})
```
