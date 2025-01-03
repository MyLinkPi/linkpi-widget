import { defineConfig } from "rspress/config";

export default defineConfig({
  root: "docs",
  title: "连接派 | LinkPi Widget",
  description: "连接派平台自定义组件文档",
  lang: "zh",
  base: "/",
  logo: "/logo_text.png",
  icon: "/favicon.ico",
  themeConfig: {
    socialLinks: [
      {
        icon: "github",
        mode: "link",
        content: "https://github.com/MyLinkPi/linkpi-widget",
      },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="16.000221252441406" viewBox="0 0 24 16.000221252441406"><g><path d="M0,8.00008C0,3.58177,3.58177,0,8.00008,0C9.40433,0,10.7839,0.36962,12,1.07172C13.2161,0.36962,14.5957,0,15.9999,0C20.4182,0,24,3.58177,24,8.00008C24,12.4185,20.4182,16.0002,15.9999,16.0002C14.5957,16.0002,13.2161,15.6306,12,14.9285C10.7839,15.6306,9.40433,16.0002,8.00008,16.0002C3.58177,16.0002,-9.32955e-7,12.4185,0,8.00008ZM22.7206,7.95074C22.7206,4.26879,19.7358,1.28398,16.0538,1.28398C14.6836,1.28398,13.4099,1.69736,12.3508,2.40605C14.5247,3.30768,16.0538,5.45064,16.0538,7.95074C16.0538,10.4508,14.5247,12.5938,12.3507,13.4953C13.4099,14.2041,14.6836,14.6175,16.0538,14.6175C19.7358,14.6175,22.7206,11.6327,22.7206,7.95074Z"/></g></svg>',
        },
        mode: "link",
        content: "https://www.mylinkpi.com/",
      },
    ],
    nav: [
      {
        text: "指南",
        link: "/guide/",
      },
      {
        text: "API",
        link: "/api/",
      },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "介绍",
          link: "/guide/",
        },
        {
          text: "快速开始",
          link: "/guide/getting-started",
        },
      ],
      "/api/": [
        {
          text: "React",
          items: [
            {
              text: "组件",
              link: "/api/react/components",
            },
            {
              text: "Hooks",
              link: "/api/react/hooks",
            },
          ],
        },
        {
          text: "Core",
          link: "/api/core/",
        },
      ],
    },
    footer: {
      message: "copyright © mylinkpi 2025",
    },
  },
});
