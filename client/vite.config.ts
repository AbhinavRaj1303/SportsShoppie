import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import fs from 'fs'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000, // Port for the frontend
    https: {
      key: fs.readFileSync(
        path.resolve(__dirname, '../src/main/resources/Certs/localhost.key')
      ),
      cert: fs.readFileSync(
        path.resolve(__dirname, '../src/main/resources/Certs/localhost.crt')
      ),
    },
  },
  plugins: [react()],
})
