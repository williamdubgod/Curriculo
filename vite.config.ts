import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Curriculo/', // Adicione esta linha
  server: {
    open: true, // Abre o navegador automaticamente ao iniciar o servidor de desenvolvimento
  },
});