import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "vueMFE", // Unique name for your microfrontend
      filename: "remoteEntry.js", // This must match what React is expecting
      exposes: {
        "./Button": "./src/components/HelloWorld.vue", // Exposing the Button component
      },
      shared: ["vue"], // Sharing Vue dependency
    }),
  ],
  server: {
    port: 5001, // Ensure this matches the port in React host's vite.config.js
    cors: true,
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    modulePreload: false,
    rollupOptions: {
      output: {
        format: "esm",
        publicPath: "auto",
      },
    },
  },
});
