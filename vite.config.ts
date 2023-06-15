import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/

export default ({ mode }) => {
    const env = loadEnv(mode, process.cwd());
    return defineConfig({
        plugins: [
            vue(),
            AutoImport({
                resolvers: [ElementPlusResolver()],
                imports: ['vue', 'vue-router']
            }),
            Components({
                resolvers: [ElementPlusResolver()],
            })
        ],
        server: {
            // host: '0.0.0.0',
            // port: Number(env.VITE_APP_BASE_API),
            // open: true,
            // proxy: {
            //     [env.VITE_APP_BASE_API]: {
            //         target: 'http://vapi.youlai.tech',
            //         changeOrigin: true,
            //         rewrite: path =>
            //             path.replace(new RegExp('^'+env.VITE_APP_BASE_API),'')
            //     }
            // }
        }
    })
}
