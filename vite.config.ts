/*
 * @Author: croy 
 * @Date: 2023-03-22 16:39:06
 * @LastEditors: croy 
 * @LastEditTime: 2023-03-22 17:40:14
 * @FilePath: /xc-desgin-ui/vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),vueJsx(),], 
  build:{
     //输出文件名称
    outDir:'xcroy-ui',
    lib:{
      //指定组件编译入口文件
      entry: path.resolve(__dirname, "./src/xcDesginPackages/index.ts"), 
      name: "xcroyUi",
      fileName: 'xcroyUi',
      formats:['es','umd']
    },
    cssCodeSplit: true, 
    // 库编译模式配置
    rollupOptions:{
      external:['vue'],
      output:{
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
				globals: {
					vue: "Vue",
				},
      }
    }
  }
})