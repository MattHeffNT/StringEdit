import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://mattheffnt.github.io/StringEdit',
  plugins: [react()],
})
