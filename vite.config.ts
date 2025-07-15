import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/NeuroInsight-Frontend/',  // ✅ Base path for GitHub Pages
});
