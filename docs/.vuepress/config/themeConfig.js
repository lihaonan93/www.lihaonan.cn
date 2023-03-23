const nav = require('./nav.js');
// const sidebar = require('./themeConfig/sidebar.js');

// 主题配置
module.exports = {
  nav, // 顶部导航栏
  sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
  logo: '/img/datou.jpeg', // 导航栏logo
  repo: 'lihaonan93/alex', // 导航栏右侧生成Github链接
  searchMaxSuggestions: 10, // 搜索结果显示最大数
  lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
  editLinks: false, // 关闭编辑按钮,此编辑无实际意义
  // category:false, // 是否打开分类功能

  contentBgStyle: 6, // 文章内容块的背景风格，默认无. 1 => 方格 | 2 => 横线 | 3 => 竖线 | 4 => 左斜线 | 5 => 右斜线 | 6 => 点状

  pageButton: false, // 是否显示快捷翻页按钮，默认true

  sidebar: 'structuring', // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页

  author: {
    // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, link: String}
    name: '久浩', // 必需
    link: 'https://github.com/lihaonan93', // 可选的
  },
  blogger: {
    // 博主信息，显示在首页侧边栏
    avatar: '/img/datou.jpeg',
    name: '久浩',
    slogan: '临渊羡鱼，不如退而结网。',
  },
  social: {
    // 社交图标，显示于博主信息栏和页脚栏
    // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
    icons: [
      {
        iconClass: 'icon-github',
        title: 'GitHub',
        link: 'https://github.com/lihaonan93',
      },
    ],
  },
  // 此处定义了访问地球功能,注释掉了,使用首页3D的展示方式

  footer: {
    // 页脚信息
    createYear: 2023, // 博客创建年份
    copyrightInfo:
      '<a rel="nofollow " target="_blank" href="https://beian.miit.gov.cn/">冀ICP备17024708号</a>', // 博客版权信息，支持a标签
  },
}