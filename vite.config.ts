import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import terser from '@rollup/plugin-terser'
import mdx from '@mdx-js/rollup'
import remarkGfm from 'remark-gfm'
const isProduction = process.env.NODE_ENV === 'production';
const isGitHubPage = process.env.GITHUB_PAGES === 'true';
// https://vitejs.dev/config/
export default defineConfig({
  base: isGitHubPage ? '/museason/' : '.',
  plugins: [
    react(),
    tailwindcss(),
    mdx({
      // MDX 配置选项
      remarkPlugins: [remarkGfm], // 支持 GitHub Flavored Markdown (表格、删除线等)
      rehypePlugins: [],
      // 指定MDX组件映射
      providerImportSource: '@mdx-js/react',
      // 支持 TSX 文件
      include: ['**/*.{md,mdx,tsx}'],
    }),
    isProduction && terser() // 只在生产环境下使用 terser 压缩
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@dev": path.resolve(__dirname, "./src/dev"),
      "@comps": path.resolve(__dirname, "./src/dev/components"),
      "@apps": path.resolve(__dirname, "./src/dev/apps"),
      "@styles": path.resolve(__dirname, "./src/dev/styles"),
      "@assets": path.resolve(__dirname, "./src/dev/assets"),
      "@utils": path.resolve(__dirname, "./src/dev/utils"),
      "@api": path.resolve(__dirname, "./src/dev/api"),
      "@pubHTML": path.resolve(__dirname, "./src/dev/pubComponents/PureHTML"),
      "@pubSVG": path.resolve(__dirname, "./src/dev/pubComponents/SVG"),
      "@pubUtils": path.resolve(__dirname, "./src/dev/pubComponents/PubUtils"),
      "@svgDocument": path.resolve(__dirname, "./src/books/SvgDocument"),
      "@shadcn": path.resolve(__dirname, "./src/dev/shadcn"),
      "@books": path.resolve(__dirname, "./src/books"),
      "@music12doc": path.resolve(__dirname, "./src/books/Music12Document"),
      "@tonicml": path.resolve(__dirname, "./src/dev/tonicml"),
      "@mdx": path.resolve(__dirname, "./src/dev/components/mdx"),
      path: "path-browserify",
    },
    extensions: [".ts", ".tsx", ".js", ".jsx", ".mdx", ".md"]
  },


  build: {
    outDir: "docs",
    minify: isProduction,
    assetsInlineLimit: 4096, // 小于此阈值的导入或引用资源将内联为 base64 编码
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash][extname]',

        // 将第三方依赖库单独打包成一个文件
        manualChunks: {
          react: ['react', 'react-dom', 'react-use'],
          baseTool: ['lodash', 'ramda', 'ahooks'],
          dayjs: ['dayjs'],
          monaco: ['monaco-editor', '@monaco-editor/react']
        }
      }
    },
    commonjsOptions: {
      exclude: ['ckeditor/*'],
    },
  }
})
