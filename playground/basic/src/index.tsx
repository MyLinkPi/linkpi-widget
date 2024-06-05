import { defineWidget } from "@mylinkpi/widget-core";

export default defineWidget()({
  id: "BasicExample",
  title: "基本示例",
  icon: () => {
    return "12";
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
