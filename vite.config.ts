import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/NeuroInsight-Frontend/' // 👈 this is CRUCIAL for GitHub Pages!
});
