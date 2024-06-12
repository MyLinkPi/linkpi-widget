import { Command, Flags } from "@oclif/core";
import { build } from "vite";

import { createViteBuildConfig } from "../utils/vite.js";

export default class Build extends Command {
  static description = "Build your widget";

  static examples = [`$ widget-cli build`];

  static flags = {
    help: Flags.help({ char: "h" }),
    // 可以添加更多的flag，如指定输出目录等
  };

  async buildAndUpload() {
    try {
      // 使用Vite打包
      await build(createViteBuildConfig());

      this.log("Widget build successfully.");
    } catch (error) {
      this.error(`Error building widget: ${error}`);
    }
  }

  async run() {
    this.log("Building the widget...");
    await this.buildAndUpload();
  }
}
