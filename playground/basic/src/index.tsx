import { defineWidget } from "@mylinkpi/widget-core";
import React from "react";
import { createRoot } from "react-dom/client";

import { Foo } from "./Foo";

console.log("????");
const root = createRoot(document.getElementById("app"));
root.render(
  <div>
    <h1>Hello, world</h1>
    <Foo />
  </div>,
);

// export default defineWidget()({
//   id: "BasicExample",
//   title: "基本示例",
//   icon: () => {
//     return "12";
//   },
//   basic: { defaultHeight: 8, defaultWidth: 8, minHeight: 8, minWidth: 8 },
//   metadata: {},
//   render: () => {
//     return "hello world";
//   },
//   setting: () => {
//     return "setting";
//   },
//   preview: () => {
//     return "preview";
//   },
// });
