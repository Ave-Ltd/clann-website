import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Only use /clann-website/ base in production (for GitHub Pages)
const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  base: isProd ? "/clann-website/" : "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
