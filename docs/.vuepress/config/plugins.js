// set your global feed options - override in page frontmatter `feed`
const feed_options = {
  canonical_base: 'https://www.lihaonan.cn',
  count: 5000,
};

// 插件配置
module.exports = [

  // 鼠标点击后散开小星星
  'cursor-effects',

  [
    {
      name: 'custom-plugins',
        globalUIComponents: ["PageInfo","BlockToggle","GlobalTip"], // 2.x 版本 globalUIComponents 改名为 clientAppRootComponentFiles
    }
  ],

  // 动态标题，官网：https://moefyit.github.io/moefy-vuepress/packages/dynamic-title.html
  [
    "dynamic-title",
    {
      showIcon:
        "https://www.lihaonan.cn/img/favicon.ico",
      showText: "ヾ(≧▽≦*)o欢迎回来！",
      hideIcon:
        "https://www.lihaonan.cn/img/favicon.ico",
      hideText: "ಥ_ಥ不要走呀！",
      recoverTime: 2000, //  持续时间
    },
  ],

  // 代码块复制按钮
  [
    'one-click-copy',
    {
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功 🎉', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false, // whether to display on the mobile side, default: false.
    },
  ],

  // 放大图片
  [
    'vuepress-plugin-zooming',
    {
      selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
      options: {
        bgColor: 'rgba(0,0,0,0.6)',
      },
    },
  ],

  // "上次更新"时间格式
  [
    '@vuepress/last-updated',
    {
      transformer: (timestamp, lang) => {
        const dayjs = require('dayjs') // https://day.js.org/
        return dayjs(timestamp).format('YYYY/MM/DD HH:mm:ss')
      },
    },
  ],
]
