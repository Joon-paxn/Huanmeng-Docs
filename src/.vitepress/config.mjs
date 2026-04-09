import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "幻梦Bot",
  description: "QQ幻梦机器人的说明文档",
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/img/hm_icon.png' }]
  ],
  markdown: {
    // 需要注册 vitepress-plugin-tabs 的 markdown-it 插件，以支持 ::: tabs 语法
    config(md) {
      md.use(tabsMarkdownPlugin)
    },
    container: {
      tipLabel: '提示',
      warningLabel: '注意',
      dangerLabel: '注意',
      infoLabel: '信息'
    }
  },
  vite: {
    build: {
      // Preserve existing deployment files like .user.ini in the output directory.
      emptyOutDir: false
    }
  }
})
