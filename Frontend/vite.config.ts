import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsConfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsConfigPaths()],
  server: {
    allowedHosts: ['localhost', 'IP_ADDRESS', 'k4ubbvkq-6gqwmhk4-2nzaf6pafhd9.acb2-preview.marscode.dev'],
  }
})
