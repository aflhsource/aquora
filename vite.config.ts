import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";

export default defineConfig({
  css: {
    transformer: "lightningcss",
  },
  plugins: [
    tailwindcss(),
    tanstackStart({
      server: { entry: "server" },
    }),
    nitro({ preset: "node-server" }),
    viteReact(),
  ],
  resolve: {
    tsconfigPaths: true,
    alias: {
      "@": "/src",
    },
    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "@tanstack/react-router",
      "@tanstack/react-query",
    ],
  },
});
