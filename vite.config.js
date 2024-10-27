import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  return {
    build: {
      outDir: "build",
    },
    base: "/Task-Manager-React",
    plugins: [react()],
  };
});
