// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Flutter para iniciantes",
  tagline:
    "Este livro é para você 😉! Que deseja escrever os seus primeiros aplicativos com Flutter",
  url: "https://flutterparainiciantes.com.br",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "flutterbootcamp",
  projectName: "flutter-para-iniciantes",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/flutterbootcamp/flutter-para-iniciantes/tree/master/",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/flutterbootcamp/flutter-para-iniciantes/tree/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        googleAnalytics: {
          trackingID: "UA-139865145-1",
          anonymizeIP: true,
        },
        gtag: {
          trackingID: "G-W6GR4Q1P3Z",
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // announcementBar: {
      //   id: 'lancamento',
      //   content:
      //     'Lançamento do Flutter Bootcamp! <a target="_blank" rel="noopener noreferrer" href="https://flutterbootcamp.com.br/">Saiba mais</a>',
      //   backgroundColor: '#ffcc3d',
      //   textColor: '#091E42',
      //   isCloseable: false,
      // },
      navbar: {
        title: "Flutter para iniciantes",
        logo: {
          alt: "Flutter para iniciantes Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Conteúdo",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/flutterbootcamp/flutter-para-iniciantes",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Conteúdo",
            items: [
              {
                label: "Introdução",
                to: "/intro",
              },
              {
                label: "Blog",
                to: "/blog",
              },
            ],
          },
          {
            title: "Mais",
            items: [
              {
                label: "Youtube",
                href: "https://www.youtube.com/playlist?list=PLS4cqF1_X2syzBpkoSwtmKoREgnp1MhTn",
              },
              {
                label: "Discord",
                href: "https://discord.gg/Drgwuv69",
              },
            ],
          },
          {
            title: "Treinamento",
            items: [
              {
                label: "Bootcamp",
                href: "https://flutterbootcamp.com.br/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Flutter Bootcamp`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["dart"],
      },
      algolia: {
        appId: "67GNKK2AYK",
        apiKey: "31c8c212d29be94487fe462af3bc2b01",
        indexName: "flutterparainiciantes",
      },
    }),
};

module.exports = config;
