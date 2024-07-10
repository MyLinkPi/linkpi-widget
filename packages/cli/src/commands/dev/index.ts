import { Command } from "@oclif/core";
import react from "@vitejs/plugin-react";
import { consola } from "consola";
import { createServer } from "vite";

import { serveIndexHtml } from "../../plugins/serve-index-html.js";
import { virtualEntry } from "../../plugins/virtual-entry.js";
import { getWidgetConfig } from "../../utils/index.js";

export default class Dev extends Command {
  static description =
    "Start the Vite development server using in-memory configuration";

  async run() {
    try {
      const widgetConfig = await getWidgetConfig();
      const server = await createServer({
        // 传递Vite配置
        configFile: false,
        plugins: [virtualEntry(), react(), serveIndexHtml()],
        root: process.cwd(),
        server: {
          port: 9000,
        },
        define: {
          __WIDGET_ID__: JSON.stringify(widgetConfig.id),
          __WIDGET_TITLE__: JSON.stringify(widgetConfig.name),
        },
      });

      await server.listen();
      consola.info("Vite development server is running...");
      server.printUrls();
    } catch (error: unknown) {
      consola.error("Failed to start the Vite server:", error as any);
    }
  }
}
