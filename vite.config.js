import { defineConfig } from "vite";
import eslintPlugin from "vite-plugin-eslint";
import { resolve } from "path";
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [eslintPlugin(), dts()],
  build: {
    lib: {
      // eslint-disable-next-line no-undef
      entry: resolve(__dirname, "index.js"),
      name: "browser-event-hook",
      fileName: "index",
      formats: ["es", "umd", "cjs"],
    },
  },
});