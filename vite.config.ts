import { defineConfig } from 'vite'
import { reactRouter } from "@react-router/dev/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    reactRouter()
  ],
  resolve: {
    alias: {
      src: "/src",
      fonts: "/src/assets/fonts",
      images: "/src/assets/images",
      components: "/src/components", 
      contexts: "/src/contexts", 
      hooks: "/src/hooks",
      pages: "/src/pages",
      utils: "/src/utils",
    }
  },
})
