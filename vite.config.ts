import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    cors: true, // 允许跨域
    // 设置代理，根据我们项目实际情况配置
    proxy: {
      '/api': { //apiTest是自行设置的请求前缀，按照这个来匹配请求，有这个字段的请求，就会进到代理来
        target: 'http://localhost:3000',
        changeOrigin: true, //是否跨域
        rewrite: (path) => path.replace('/api', '')
      }
    }
}
})
