import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { peerDependencies } from "./package.json";
import tailwindcss from "@tailwindcss/vite";

import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    dts({
      insertTypesEntry: true,
      exclude: ["**/*.stories.tsx", "**/*.test.tsx"],
    }),
  ],
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "lumen-ui",
      fileName: (format) => `lumen-ui.${format}.js`,
      formats: ["es", "cjs", "umd"],
    },
    rollupOptions: {
      external: Object.keys(peerDependencies),
      output: { globals: { react: "React", "react-dom": "ReactDOM" } },
    },
  },
});
