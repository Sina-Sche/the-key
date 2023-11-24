import { defineConfig } from "cypress";

const config = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    specPattern: "**/*.spec.ts",
    setupNodeEvents(on, config) {},
  },
});

export default config;
