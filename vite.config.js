import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path:
// - Produzione one.com (better-bookings.com/manage/): '/manage/' (default)
// - Railway staging (bb-portal-production.up.railway.app): '/'
// - GitHub Pages (manage.better-bookings.com sotto subdomain): '/'
// Railway inietta RAILWAY_PUBLIC_DOMAIN, GitHub Actions setta GITHUB_ACTIONS=true.
const isExternalHosting = !!process.env.RAILWAY_PUBLIC_DOMAIN || process.env.GITHUB_ACTIONS === 'true'
const base = isExternalHosting ? '/' : '/manage/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
})