import { Command, Flags } from "@oclif/core";

import { getWidget } from "../services/index.js";
import { getWidget as getDevWidget } from "../services/index-dev.js";
import { getWidgetConfig } from "../utils/index.js";

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

    const widgetConfig = await getWidgetConfig();

    const request = dev ? getDevWidget : getWidget;
    const res = await request(widgetConfig.id);

    this.logJson(res);
  }
}
