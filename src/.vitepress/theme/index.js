// https://vitepress.dev/guide/custom-theme
import '../../bootstrap-4.6.2/css/bootstrap.min.css'
import Layout from './Layout.vue'
import './style.css'

/** @type {import('vitepress').Theme} */
export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}

