import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "教程技巧",
    icon: "fluent:hat-graduation-24-filled",
    link: "/skill/README.md",
  },
  {
    text: "软件资源",
    icon: "mdi:microsoft-edge",
    link: "/soft/README.md",
  },
  {
    text: "系统相关",
    icon: "eos-icons:system-group",
    link: "/system/README.md",
  },
  {
    text: "旧版博客",
    icon: "fa6-solid:blog",
    link: "https://www.smianao.com/",
  },
]);
