import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Challenge_03_bill_calculator/",
  plugins: [react()],
})
