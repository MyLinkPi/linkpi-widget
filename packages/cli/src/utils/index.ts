import { defineWidgetConfig } from "@mylinkpi/widget-core";
import { loadConfig } from "c12";
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

    const { config: widgetConfig } = await loadConfig<WidgetConfig>({
      name: "widget",
    });

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
