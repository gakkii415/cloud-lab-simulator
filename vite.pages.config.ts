import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

export default defineConfig({
  root: fileURLToPath(new URL("./pages", import.meta.url)),
  base: "/cloud-lab-simulator/",
  publicDir: fileURLToPath(new URL("./public", import.meta.url)),
  plugins: [react()],
  css: { postcss: fileURLToPath(new URL(".", import.meta.url)) },
  build: {
    outDir: fileURLToPath(new URL("./.pages-output", import.meta.url)),
    emptyOutDir: true,
  },
});
