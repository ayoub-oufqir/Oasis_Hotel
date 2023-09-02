/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

import replace from "@rollup/plugin-replace";
import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint(),
    replace({
      // Define the environment variables to replace
      "process.env.REACT_APP_SUPABASE_KEY": JSON.stringify(
        process.env.REACT_APP_SUPABASE_KEY
      ),
      "process.env.REACT_APP_SUPABASE_BASE_URL": JSON.stringify(
        process.env.REACT_APP_SUPABASE_BASE_URL
      ),
    }),
  ],
});
