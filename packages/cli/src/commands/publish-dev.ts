import { Command, Flags } from "@oclif/core";
import { readFileSync } from "node:fs";
import path from "node:path";
import * as React from "react";
import { build } from "vite";

import {
  addWidget,
  getWidget,
  updateWidget,
  uploadScript,
} from "../services/index-dev.js";
import { createViteBuildConfig } from "../utils/vite.js";

export default class PublishDev extends Command {
  static description = "Build and publish-dev your widget";

  static examples = [`$ widget-cli publish-dev`];

  static flags = {
    help: Flags.help({ char: "h" }),
    // 可以添加更多的flag，如指定输出目录等
  };

  async buildAndUpload() {
    try {
      // 使用Vite打包
      await build(createViteBuildConfig());

      // 调用上传API
      // 示例使用axios上传（需先安装axios）
      const filePath = path.join(process.cwd(), "dist/index.js");
      const fileContent = readFileSync(filePath, "utf8");

      this.log("uploading script");
      const res = await uploadScript(fileContent);
      const scriptId = res.data.id;

      console.log("scriptId", scriptId);

      global.React = React;
      const modulePath =
        "file://" + path.resolve(process.cwd(), "dist", "index.js");
      const config: any = await import(modulePath);
      const widgetConfig = config.default;

      const info = await getWidget(widgetConfig.id);
      if (info) {
        this.log("updating widget");
        await updateWidget({
          name: widgetConfig.title,
          script_id: scriptId,
          widget_id: widgetConfig.id,
        });
      } else {
        this.log("adding widget");
        await addWidget({
          name: widgetConfig.title,
          script_id: scriptId,
          widget_id: widgetConfig.id,
        });
      }

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
