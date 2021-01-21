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
    main: "有逻辑的灵魂，",
    sub: "造就有温度的编码。"
  },

  themeConfig: {
    nav: [
      {
        name: "首页",
        link: "/Issue-Blog-With-Github-Action"
      },
      {
        name: "Github",
        link: "https://github.com/Yidadaa"
      },
      {
        name: "CV",
        link: "/Issue-Blog-With-Github-Action/cv.html"
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
        title: "@ 蜀 ICP 备 19000509 号 - 1",
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
