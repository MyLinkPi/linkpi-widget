import { defineConfig } from "rspress/config";

export default defineConfig({
  root: 'docs',
  title: 'LinkPi Widget',
  description: 'LinkPi Widget Documentation',
  lang: 'zh',
  base: '/linkpi-widget/',
  logo: 'https://test-inner-oss.linkerpi.com/storage/e94dedf4c1764fdeab2b35cd81db4117.png?OSSAccessKeyId=LTAI4GJJjJfFS4KtHxuFw5tZ&Expires=4954595693&Signature=YriZWy%2B4mNk8JqZ805iJi65keVk%3D',
  logoText: 'LinkPi Widget',
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/MyLinkPi/widget-cli' }
    ],
    nav: [
      {
        text: '指南',
        link: '/guide/',
      },
      {
        text: 'API',
        link: '/api/',
      },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '介绍',
          link: '/guide/',
        },
        {
          text: '快速开始',
          link: '/guide/getting-started',
        },
      ],
      '/api/': [
        {
          text: 'React',
          items: [
            {
              text: '组件',
              link: '/api/react/components',
            },
            {
              text: 'Hooks',
              link: '/api/react/hooks',
            },
          ],
        },
        {
          text: 'Core',
          link: '/api/core/',
        },
      ],
    },
  },
});
