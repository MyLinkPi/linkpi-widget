import { Command, Flags } from "@oclif/core";
import { consola } from "consola";
import { build } from "vite";

import { createViteBuildConfig } from "../utils/vite.js";
import { getWidgetConfig } from "../utils/index.js";

export default class Build extends Command {
  static description = "Build your widget";

  static examples = [`$ widget-cli build`];

  static flags = {
    help: Flags.help({ char: "h" }),
    // 可以添加更多的flag，如指定输出目录等
  };

  async build() {
    try {
      consola.start("Building the widget...");
      const widgetConfig = await getWidgetConfig();
      // 使用Vite打包
      await build(
        createViteBuildConfig({
          widgetId: widgetConfig.id,
          widgetTitle: widgetConfig.name,
        }),
      );

      consola.success("Widget build successfully.");
    } catch (error) {
      consola.error(`Error building widget: ${error}`);
    }
  }

  async run() {
    await this.build();
  }
}
