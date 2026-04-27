import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: './', // THIS IS THE FIX
  plugins: [react()],
})