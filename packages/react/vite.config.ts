import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import dts from "vite-plugin-dts";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), libInjectCss(), dts({ include: ["lib"] })],
  build: {
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      fileName: "main",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime", "antd"],
    },
  },
});
