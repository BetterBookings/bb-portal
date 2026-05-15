import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path:
// - Produzione (one.com sotto better-bookings.com/manage/): '/manage/'
// - Railway staging: '/' (servito a root del subdomain Railway)
// Railway inietta automaticamente RAILWAY_PUBLIC_DOMAIN in env durante il build.
const isRailway = !!process.env.RAILWAY_PUBLIC_DOMAIN
const base = isRailway ? '/' : '/manage/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
})