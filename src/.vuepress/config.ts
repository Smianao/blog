import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "鼠标迁徙",
  description: "分享电脑技巧、软件教程，以及系统相关的文章！",
  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
