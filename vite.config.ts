import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
import uni from '@dcloudio/vite-plugin-uni'
// import Components from 'unplugin-vue-components/vite'
// import { VantResolver } from '@vant/auto-import-resolver'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // 开发阶段启用源码映射：https://uniapp.dcloud.net.cn/tutorial/migration-to-vue3.html#需主动开启-sourcemap
    sourcemap: process.env.NODE_ENV === 'development',
  },
  plugins: [
    uni(),
    // vue(),
    // Components({
    //   resolvers: [VantResolver()],
    // }),
  ],
})
