import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

export default defineConfig({
  plugins: [
    react(),

    federation({
      name: "counterRemote",

      filename: "remoteEntry.js",

      exposes: {
        "./Counter": "./src/components/Counter.jsx",
      },

      shared: {
        react: {
          singleton: true,
        },
        "react-dom": {
          singleton: true,
        },
      },

      dts: false,
    }),
  ],

  server: {
    port: 5001,
  },

  build: {
    target: "esnext",
  },
});
