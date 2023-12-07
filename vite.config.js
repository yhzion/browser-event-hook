import { defineConfig } from "vite";
import eslintPlugin from "vite-plugin-eslint";
import { resolve } from "path";

export default defineConfig({
  plugins: [eslintPlugin()],
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
