import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
// import { dts } from "rollup-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";
import dtsBundleGenerator from "vite-plugin-dts-bundle-generator";

import { libInjectCss } from "vite-plugin-lib-inject-css";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dtsBundleGenerator({
      fileName: "main.d.ts",
      libraries: { inlinedLibraries: ["@linkpi/core"] },
    }),
    // dts({
    //   rollupTypes: true,
    //   bundledPackages: ["@linkpi/*", "immer"],
    //   logLevel: "info",
    //   staticImport: true,
    //   root: process.cwd(),
    //   insertTypesEntry: true,
    //   beforeWriteFile: (filePath, content) => {
    //     console.log(filePath);
    //     return { filePath, content };
    //   },
    // }),
    tsconfigPaths(),
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
