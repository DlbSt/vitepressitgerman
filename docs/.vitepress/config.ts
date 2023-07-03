import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "IT German Vocabulary",
  description: "IT German Vocabulary",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    nav: [
      { text: 'Home', link: '/' },
      { text: 'English words', link: '/englishwords' },
      { text: 'German words', link: '/germanwords' },
      { text: 'German verbs', link: '/germanverbs' }
    ],

    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/DaliborStys' }, 
      { icon: 'github', link: 'https://github.com/DlbSt/vitepressitgerman' }
    ]
  }
})
