import { Command, Flags } from "@oclif/core";
import { readFileSync } from "node:fs";
import path from "node:path";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { build } from "vite";

import {
  addWidget,
  uploadScript,
} from "../services/index.js";

export default class Publish extends Command {
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
            fileName: () => "index.js",
            formats: ["es"],
          },
          rollupOptions: { plugins: [peerDepsExternal() as any] },
        },

        root: process.cwd(),
      });

      // 调用上传API
      // 示例使用axios上传（需先安装axios）
      const filePath = path.join(process.cwd(), "dist/index.js");
      const fileContent = readFileSync(filePath, "utf8");

      const res = await uploadScript(fileContent);
      const scriptId = res.data.id;

      console.log("scriptId", scriptId);

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
