import UnoCSS from 'unocss/vite';
import { readFileSync } from 'fs';
import * as path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
const packageJson = JSON.parse(readFileSync('./package.json', { encoding: 'utf-8' }));

function resolve(str: string) {
  return path.resolve(__dirname, str);
}
export default defineConfig({
  plugins: [
    react(),
    UnoCSS(),
    viteStaticCopy({
      targets: [
        // Copy components/*/styles to dist
        { src: resolve('src/components/style'), dest: '' },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        charset: false,
        javascriptEnabled: true,
      },
    },
  },
  build: {
    // 输出文件夹
    outDir: 'dist',
    lib: {
      // 组件库源码的入口文件
      entry: resolve('src/index.ts'),
      // 组件库名称
      name: 'sofia-design',
      // 文件名称, 打包结果举例: sofia-design.cjs
      fileName: (format) => `sofia.${format}.js`,
      // 打包格式
      formats: ['es', 'cjs', 'umd'],
    },
    rollupOptions: {
      // output: {},
      //排除不相关的依赖
      external: ['react', 'react-dom'],

      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: 'React',
          'react-dom': 'react-dom',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
    },
  },
});
