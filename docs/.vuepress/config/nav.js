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
          ]
  },

  { text: '数据库',link: '/DB/',
    items: [
      { text: 'MySQL', link: '/MySQL/'},
            ]
  },

  { text: '关于', link: '/about/' },
]
