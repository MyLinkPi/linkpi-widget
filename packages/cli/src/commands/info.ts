import { IWidget } from "@mylinkpi/widget-core";
import { Command, Flags } from "@oclif/core";
import path from "node:path";
import * as React from "react";
import { build } from "vite";

import { getWidget } from "../services/index.js";
import { getWidget as getDevWidget } from "../services/index-dev.js";
import { createViteBuildConfig } from "../utils/vite.js";

export default class Info extends Command {
  static override description = "print the widget info";

  static override examples = ["<%= config.bin %> <%= command.id %>"];

  static override flags = {
    // dev with no value (-d, --dev)
    dev: Flags.boolean({ char: "d" }),
  };

  public async run(): Promise<void> {
    const { flags } = await this.parse(Info);
    const { dev } = flags;

    await build(createViteBuildConfig());

    global.React = React;
    const modulePath =
      "file://" + path.resolve(process.cwd(), "dist", "index.js");

    const config: any = await import(modulePath);

    const widgetConfig = config.default as IWidget<string, any>;
    const request = dev ? getDevWidget : getWidget;
    const res = await request(widgetConfig.id);

    this.logJson(res);
  }
}
