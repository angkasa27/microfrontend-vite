import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "react",
      remotes: {
        // vueMFE: "http://localhost:5001/assets/remoteEntry.js", // Import Vue MFE
        reactRemote: "http://localhost:4000/assets/remoteEntry.js", // Import React MFE
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 3000,
    cors: true,
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    modulePreload: false,
  },
});
