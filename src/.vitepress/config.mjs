import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "幻梦Bot",
  description: "QQ幻梦机器人的说明文档",
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/img/hm_icon.png' }]
  ],
  vite: {
    build: {
      // Preserve existing deployment files like .user.ini in the output directory.
      emptyOutDir: false
    }
  }
})
