import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Default is 'dist', but ensure it matches the Netlify publish directory
    sourcemap: true, // Optional: Useful for debugging in production
  },
});
