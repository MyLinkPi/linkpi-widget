import { Command } from "@oclif/core";
import react from "@vitejs/plugin-react";
import { createServer } from "vite";

import { serveIndexHtml } from "../../plugins/serve-index-html.js";
import { virtualEntry } from "../../plugins/virtual-entry.js";

export default class Dev extends Command {
  static description =
    "Start the Vite development server using in-memory configuration";

  async run() {
    try {
      const server = await createServer({
        // 传递Vite配置
        configFile: false,
        plugins: [virtualEntry(), react(), serveIndexHtml()],
        root: process.cwd(),
        server: {
          port: 9000,
        },
      });

      await server.listen();
      this.log("Vite development server is running...");
      server.printUrls();
    } catch (error: unknown) {
      console.log(error);
      this.error("Failed to start the Vite server:", error as any);
    }
  }
}
