import path from "node:path";

import { defineWidgetConfig } from "@mylinkpi/widget-core";
import { consola } from "consola";
import { z, ZodError } from "zod";

type WidgetConfig = ReturnType<typeof defineWidgetConfig>;

const WidgetConfigSchema = z.object({
  id: z.string(),
  name: z.string(),
});
export const getWidgetConfig = async () => {
  try {
    consola.info("reading widget.config.js...");

    const configPath =
      "file://" + path.resolve(process.cwd(), "widget.config.js");
    const config: any = await import(configPath);
    const widgetConfig = config.default;

    WidgetConfigSchema.parse(widgetConfig);

    return widgetConfig as WidgetConfig;
  } catch (error) {
    if (error instanceof ZodError) {
      consola.error(error.message);
      throw new Error("invalid widget.config.js!");
    }

    throw new Error("missing widget.config.js!");
  }
};
