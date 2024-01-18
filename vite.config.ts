import { defineConfig } from "vitest/config";
// import { resolve } from "node:path";
import { resolve } from "path";
import path from "path";

export default defineConfig({
  test: {
    setupFiles: ["test/msw.setup.ts"],
    alias: {
      "@/": new URL("./src/", import.meta.url).pathname,
    },
  },
});
