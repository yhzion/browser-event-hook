import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import eslintPlugin from "vite-plugin-eslint";

export default defineConfig({
  plugins: [eslintPlugin(), dts()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    lib: {
      // eslint-disable-next-line no-undef
      entry: resolve(__dirname, "index.ts"),
      name: "browser-event-hook",
      fileName: "index",
      formats: ["es", "umd", "cjs"],
    },
  },
});
