import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vitepress-site/',

  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    lang: 'zh-Hans',

    lastUpdated: {
      text: '最后更新于',
      // formatOptions: {
      //   dateStyle: 'full',
      //   timeStyle: 'medium'
      // }
    },

    editLink: {
      text: '在 GitHub 上编辑此页',
      pattern: 'https://github.com/zgl96/vitepress-site/edit/master/docs/:path'
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '示例', link: '/示例/markdown-examples', activeMatch: '^/示例/' },
      { text: '测试', link: '/测试/测试-01', activeMatch: '^/测试/' },
      { text: '其他', link: '/其他/other-first', activeMatch: '^/其他/' },
    ],

    sidebar: {
      '/示例/': [
        {
          text: '示例',
          items: [
            { text: 'Markdown Examples', link: '/示例/markdown-examples' },
            { text: 'Runtime API Examples', link: '/示例/api-examples' }
          ]
        }
      ],
      '/测试/': [
        {
          text: '测试',
          items: [
            { text: '测试-01', link: '/测试/测试-01' },
            { text: '测试-02', link: '/测试/测试-02' },
          ]
        }
      ],
      '/其他/': [
        {
          text: '其他',
          items: [
            { text: '其他-01', link: '/其他/other-first' },
            { text: '其他-02', link: '/其他/other-second' },
          ]
        }
      ],
    },

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
