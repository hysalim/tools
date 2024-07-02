import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    name: "Package @hysalim/shared",
    globals: true,
    environment: "node",
  },
});
