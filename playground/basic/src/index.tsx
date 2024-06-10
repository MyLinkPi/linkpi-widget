import { defineWidget } from "@mylinkpi/widget-core";
import React from "react";
import { AlertOutlined } from "@ant-design/icons";

const config = defineWidget()({
  id: "BasicExample",
  title: "基本示例",
  icon: () => {
    return <AlertOutlined />;
  },
  basic: { defaultHeight: 8, defaultWidth: 8, minHeight: 8, minWidth: 8 },
  metadata: {},
  render: () => {
    return "hello world";
  },
  setting: () => {
    return "setting";
  },
  preview: () => {
    return "preview";
  },
});

export default config;

// console.log("????");
// console.log(typeof Button, typeof Foo);

// function Bar() {
//   return <WidgetPreviewPanel config={config} />;
// }

// export default Bar;
