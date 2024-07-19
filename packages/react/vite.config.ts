import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import { defineConfig } from "vite";
import dtsBundleGenerator from "vite-plugin-dts-bundle-generator";
import tsconfigPaths from "vite-tsconfig-paths";

import { libInjectCss } from "vite-plugin-lib-inject-css";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    tsconfigPaths(),
    dtsBundleGenerator({
      fileName: "main.d.ts",
      libraries: { inlinedLibraries: ["@linkpi/core", "@linkpi/sdk"] },
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      fileName: "main",
      formats: ["es"],
    },
    target: "esnext",
    rollupOptions: {
      external: ["react", "react/jsx-runtime", "antd"],
    },
  },
});
