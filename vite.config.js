import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/diamantesrealtygroup/',
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
})
