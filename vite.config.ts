import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Relative URLs so the build works on GitHub Pages, jsDelivr, and raw.githack.
  base: "./",
  plugins: [react()],
  server: { port: 5173, strictPort: true, host: "127.0.0.1" },
});
