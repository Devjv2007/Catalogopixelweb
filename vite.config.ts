import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,      // expõe na rede
    port: 5173,      // opcional (padrão)
    strictPort: true // evita trocar porta
  }
})
