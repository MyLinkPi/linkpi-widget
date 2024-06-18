// eslint-disable-next-line import/no-named-as-default
import externalGlobals from "rollup-plugin-external-globals";
import { InlineConfig } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import envCompatible from "vite-plugin-env-compatible";

import "./polyfill.js"

export const createViteBuildConfig = () => {
  const options: InlineConfig = {
    build: {
      emptyOutDir: true,
      lib: {
        entry: "src/index.tsx",
        fileName: "index",
        formats: ["es"],
      },
      rollupOptions: {
        plugins: [
          externalGlobals({
            echarts: "echarts",
            react: "React",
            "react-dom": "ReactDOM",
          }),
        ],
      },
    },
    define: {
      "process.env": process.env,
    },
    plugins: [envCompatible(), cssInjectedByJsPlugin()],
    root: process.cwd(),
  };

  return options;
};
