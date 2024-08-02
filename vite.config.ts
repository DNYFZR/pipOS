import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  base: "/pipOS/",
  build: {
    lib: {
      entry: 'src/main.tsx',
      name: 'main',
      fileName: 'main',
    },
  },
});