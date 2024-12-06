import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import UnoCSS from 'unocss/vite'

import path from 'path';
const pathSrc = path.resolve(__dirname, 'src');

export default defineConfig({
    base: './',
    publicDir: 'public',
    plugins: [
      vue(),
      VueSetupExtend(),
      UnoCSS(),
      AutoImport({
        imports: ['vue', 'vue-router'],
        dts: 'src/types/auto-imports.d.ts',
      }),
      Components({
          extensions: ['vue', 'md'],
          include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
          dts: 'src/types/components.d.ts',
          resolvers: [ AntDesignVueResolver({
              importStyle: false, // css in js
          }),],
      })
  ],
    resolve: {
        alias: {
            '@': pathSrc,
        },
    },
})

