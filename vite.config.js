import { defineConfig } from "vite";
import eslintPlugin from "vite-plugin-eslint";
// import { resolve } from "path"; // If you make it a library

export default defineConfig({
  plugins: [eslintPlugin()],

  /**
   * If you make it a library, see the code below
   */
  /* 
  build: {
    lib: {
      // eslint-disable-next-line no-undef
      entry: resolve(__dirname, "index.js"),
      name: "simple-lazy-debounce",
      fileName: "index",
      formats: ["es", "umd", "cjs"],
    },
  }, 
  */
});
