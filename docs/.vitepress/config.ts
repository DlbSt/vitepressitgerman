import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "IT German Vocabulary",
  description: "IT German Vocabulary",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/DaliborStys' }, 
      { icon: 'github', link: 'https://github.com/DlbSt/vitepressitgerman' }
    ]
  }
})
