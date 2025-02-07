import { defineConfig } from "vite";

export default defineConfig({
  server: {
    open: false,
    hmr: false,  // Disable Hot Module Replacement
  },
});
