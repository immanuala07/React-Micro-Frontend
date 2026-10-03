import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

export default defineConfig({
  plugins: [
    react(),

    federation({
      name: "host",

      remotes: {
        counterRemote: {
          type: "module",
          name: "counterRemote",
          entry: "http://localhost:5001/remoteEntry.js",
        },
      },

      shared: {
        react: {
          singleton: true,
        },
        "react-dom": {
          singleton: true,
        },
      },

      // Disable Module Federation TypeScript DTS handling
      dts: false,
    }),
  ],

  server: {
    port: 5000,
  },

  build: {
    target: "esnext",
  },
});
