import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(() => ({
  plugins: [react()],
  base: process.env.VERCEL ? '/' : '/Industrial_LM_1/',
}))