import { defineUserConfig } from "vuepress";
//引用搜索插件
import { meilisearchPlugin } from '@vuepress/plugin-meilisearch';

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "鼠标迁徙",
  description: "分享电脑技巧、软件教程，以及系统相关的文章！",
  theme,
  dest: "src/.vuepress/dist",

  //调用搜索插件 
  plugins: [
    meilisearchPlugin({
      host: 'https://meilisearch.smianao.com',
      apiKey: 'c9340e98359c29d0ea8d9a525081aa780a36c6fa226e648d0f50a5857d90e2fc',
      indexUid: 'blogsmianao'
    })
  ]
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
