// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path' // 必須引入這個來處理路徑

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'decision-support': resolve(__dirname, 'project-decision-support.html'),
        'painting-app': resolve(__dirname, 'project-painting-app.html'),
        'privacy-gateway': resolve(__dirname, 'project-privacy-gateway.html'),
      },
    },
  },
})