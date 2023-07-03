// nav
module.exports = [
  { text: '首页', link: '/' },
  { text: 'Python',link: '/Python/'},
  { text: 'Docker',link: '/Docker/'},

  { text: 'Linux',link: '/Linux/',
   items: [
      { text: '系统管理', link: '/System/'},
      { text: 'Openresty', link: '/Openresty/'},
      { text: 'PHP', link: '/PHP/'}, 
      { text: 'Shell脚本', link: '/Shell/'},
      { text: 'OpenVPN', link: '/OpenVPN/'},
          ]
  },

  { text: '数据库',link: '/DB/',
    items: [
        { text: 'MySQL', link: '/MySQL/'},
        { text: 'PostgreSQL', link: '/PostgreSQL/'},
            ]
  },
  { text: '碎片化文档',link: '/Unclassified/'},
  { text: 'VuePress',link: '/VuePress/'},
  { text: '关于', link: '/about/' },
]
