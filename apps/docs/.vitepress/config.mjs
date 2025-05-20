import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Uplus Mvno Handover",
  description: "A VitePress Site",
  head: [
    [
      'link',
      { rel: 'stylesheet', href: 'public/style.css' }
    ]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Alpah', link: 'https://www.uplusmvno.com/' }
    ],

    sidebar: [
      {
        text: 'Environment',
        items: [
          { text: 'Runtime API', link: '/api-examples' },
          { text: 'Environment', link: '/environment' }
        ],
        collapsed: true
      },
      {
        text: 'Page&Guide Example',
        items: [
          { text: 'Environment', link: '/page-examples' },
          { text: 'Guide', link: 'https://alpha-publish.vercel.app/guide/ListGuide' },
          { text: 'Link', link: 'https://alpha-publish.vercel.app/guide/ListCommon' },
        ],
        collapsed: true
      },
      {
        text: 'Contents Example',
        items: [
          { text: 'Contents Environment', link: '/contents-examples' },
          { text: 'Event', link: '/event-examples' },
          { text: 'Friend', link: '/friend-examples' },
          { text: 'Card', link: '/card-examples' },
          { text: 'Benefit', link: '/benefit-examples' }
        ],
        collapsed: true
      },
    ]
  }
})
