import { Command, Flags } from "@oclif/core";
import { readFileSync } from "node:fs";
import path from "node:path";
import * as React from "react";
// eslint-disable-next-line import/no-named-as-default
import externalGlobals from "rollup-plugin-external-globals";
import { build } from "vite";
import envCompatible from "vite-plugin-env-compatible";

import { addWidget, uploadScript } from "../services/index-dev.js";

export default class PublishDev extends Command {
  static description = "Build and publish your widget";

  static examples = [`$ widget-cli publish`];

  static flags = {
    help: Flags.help({ char: "h" }),
    // 可以添加更多的flag，如指定输出目录等
  };

  async buildAndUpload() {
    try {
      // 使用Vite打包
      await build({
        build: {
          emptyOutDir: true,
          lib: {
            entry: "src/index.tsx",
            fileName: "index",
            formats: ["es"],
          },
          rollupOptions: {
            plugins: [
              externalGlobals({
                react: "React",
                "react-dom": "ReactDOM",
              }),
            ],
          },
        },
        define: {
          "process.env": process.env,
        },
        plugins: [envCompatible()],
        root: process.cwd(),
      });

      // 调用上传API
      // 示例使用axios上传（需先安装axios）
      const filePath = path.join(process.cwd(), "dist/index.js");
      const fileContent = readFileSync(filePath, "utf8");

      const res = await uploadScript(fileContent);
      const scriptId = res.data.id;

      console.log("scriptId", scriptId);

      global.React = React;
      const config: any = await import(process.cwd() + "/dist/index.js");
      const widgetConfig = config.default;

      await addWidget({
        name: widgetConfig.title,
        script_id: scriptId,
        widget_id: widgetConfig.id,
      });

      this.log("Widget published successfully.");
    } catch (error) {
      this.error(`Error publishing widget: ${error}`);
    }
  }

  async run() {
    this.log("Building and publishing the widget...");
    await this.buildAndUpload();
  }
}
