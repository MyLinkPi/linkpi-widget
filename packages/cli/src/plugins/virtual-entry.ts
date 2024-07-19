import path from "node:path";

import { PluginOption } from "vite";

// 插件来生成虚拟入口
export function virtualEntry(): PluginOption {
  return {
    config(config) {
      const alias = {
        // 虚拟入口点
        "/@/main.tsx": "virtual-entry.tsx",
      };

      if (!config.resolve) {
        config.resolve = {};
      }

      config.resolve.alias = {
        ...config.resolve.alias,
        ...alias,
      };

      return config;
    },
    load(id) {
      if (id === "virtual-entry.tsx") {
        const userComponentPath = path
          .resolve(process.cwd(), "src", "index.tsx")
          .replaceAll("\\", "/");

        if (!userComponentPath) {
          this.error("src/index.tsx 文件不存在！");
        }

        // 动态生成入口代码
        return `
          import { WidgetPreviewPanel } from '@mylinkpi/widget-react';
          import React, { createElement } from 'react';
          import ReactDOM from 'react-dom/client';

          import config from './src/index.tsx';

          import "antd/dist/antd.css";

          const root = ReactDOM.createRoot(document.getElementById('app'));

          root.render(
            <React.StrictMode>
              <WidgetPreviewPanel config={config} />
            </React.StrictMode>
          )
        `;
      }

      return null;
    },
    name: "virtual-entry",
    resolveId(id) {
      if (id === "virtual-entry") {
        return id;
      }

      return null;
    },
  };
}
