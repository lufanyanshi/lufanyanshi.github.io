/**
 * @file: custom config
 */

let mainConfig = {
  vssueConfig: {
    owner: "lufanyanshi",
    repo: "lufanyanshi.github.io",
    clientId: "3d2003987ee4f61081e5",
    clientSecret: "d1baf2dd2a85b949847900ee401a892ff8bca492"
  },

  repoConfig: {
    owner: "lufanyanshi",
    repo: "lufanyanshi.github.io",
    pushBranch: "master",
    email: "zplu14@gmail.com",
    filterUsers: ['lufanyanshi','jasonfan1997']
  },

  title: "Fan & Lu's Blog",
  description: "Fan和Lu的小站",
  customDomain: "",
  base: "/",


  slogan: {
    main: "有你我方找到生存來源",
    sub: "多麼感激竟然有一雙我倆"
  },

  themeConfig: {
    nav: [
      {
        name: "首页",
        link: "/"
      },
      {
        name: "Github",
        link: "https://github.com/lufanyanshi"
      }
    ],
    headTitle: ["Fan & Lu 的小站"],
    friendLinks: [
      {
        name: "lufanyanshi",
        link: "https://github.com/lufanyanshi"
      }
    ],
    extraFooters: [
      {
        title: "",
        text: ""
      }
    ],
    pageCount: true
  },

  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        href: "https://raw.githubusercontent.com/lufanyanshi/lufanyanshi.github.io/master/favicon/icon.png"
      }
    ]
  ]
}

module.exports = mainConfig
