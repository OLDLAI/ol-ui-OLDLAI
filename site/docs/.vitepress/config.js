import { components } from '../metadata.json'
const guideSidebar = [
    {
      text: '基础',
      items: [
        { text: '快速开始', link: '/guide/' }
      ]
    },
    {
      text: '进阶',
      items: [
        { text: '国际化', link: '/guide/i18n' }
      ]
    }
  ]
let componentNav
const componentsSidebar = componentNav = components
export default {
    themeConfig: {
      siteTitle: "ol-ui",
      nav: [
        { text: "指南", link: "/guide/introduce.md" },
        { text: "组件", link: "/components/button/" },
      ],
      socialLinks: [
        { icon: "github", link: "https://github.com/OLDLAI/ol-ui-OLDLAI" },
      ],
      sidebar: {
        "/guild/": [
            {
                text: "基础",
                items: [
                    {
                        text: "安装",
                        link: "/guild/installation",
                    },
                    {
                        text: "快速开始",
                        link: "/guild/quickstart",
                    },
                ],
            },
            {
                text: "进阶",
                items: [
                    {
                        text: "xx",
                        link: "/xx",
                    },
                ],
            },
        ],
        "/components/": [
            {
                text: "基础组件",
                items: [
                    {
                        text: "Button 按钮",
                        link: "/components/button/index.md",
                    },
                    {
                        text: 'Input 输入框',
                        link: '/components/input/index.md',
                    },
                ],
            },
            {
              text: "优化组件",
                items: [
                  {
                    text: 'infinite-scrolling 无限滚动',
                    link: '/components/infinite-scrolling/index.md',
                  },
                  ],
            }
        ]
    },
    },
    
};