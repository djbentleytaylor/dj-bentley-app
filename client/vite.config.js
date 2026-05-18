import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
    publicDir: 'public',    // this is what was added

  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:9000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'static',
    assetsInclude: ["**/*.JPG"],
    sourcemap: false,
  },
  base: '/'
});
// adjust defineConfig for deployment on render
