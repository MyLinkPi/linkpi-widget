import { Command } from "@oclif/core";
import react from "@vitejs/plugin-react";
import { createServer } from "vite";

export const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vite App</title>
</head>
<body>
  <div id="app">fuckoff</div>
  <script type="module" src="/src/index.tsx"></script>
</body>
</html>
`;

export default class Dev extends Command {
  static description =
    "Start the Vite development server using in-memory configuration";

  async run() {
    try {
      const server = await createServer({
        // 传递Vite配置
        configFile: false,
        plugins: [
          react(),
          {
            configureServer(server) {
              server.middlewares.use((req, res, next) => {
                if (req.url === "/") {
                  res.end(htmlContent);
                } else {
                  next();
                }
              });
            },
            name: "serve-index-html",
          },
        ],
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
