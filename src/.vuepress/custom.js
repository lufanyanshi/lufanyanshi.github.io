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
    main: "未完待续...",
    sub: ""
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
      },
      {
        name: "CV",
        link: "/"
      }
    ],
    headTitle: ["暮春早夏的月亮", "原是情人的月亮，不比秋冬是诗人的月亮"],
    friendLinks: [
      {
        name: "watercow",
        link: "https://github.com/watercow/watercow.github.io/issues"
      },
      {
        name: "ycjgg",
        link: "https://ycjgg.github.io"
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
        href: "https://avatars2.githubusercontent.com/u/16968934?s=460&v=4"
      }
    ]
  ]
}

module.exports = mainConfig
