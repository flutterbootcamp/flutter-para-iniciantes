// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Este livro é para você 😉',
  tagline: 'Que deseja escrever os seus primeiros aplicativos com Flutter',
  url: 'https://flutterparainiciantes.com.br',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'flutterbootcamp', // Usually your GitHub org/user name.
  projectName: 'flutter-para-iniciantes', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: '305999200',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Flutter para iniciantes',
        logo: {
          alt: 'Flutter para iniciantes Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Conteúdo',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/flutterbootcamp/flutter-para-iniciantes',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Conteúdo',
            items: [
              {
                label: 'Introdução',
                to: '/intro',
              },
              {
                label: 'O que é Flutter ?',
                to: '/o-que-e-flutter',
              },
              {
                label: 'Por que o Flutter ?',
                to: '/por-que-o-flutter',
              },
            ],
          },
         
          {
            title: 'Mais',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/flutterbootcamp/flutter-para-iniciantes',
              },
            ],
          },
          {
            title: 'Treinamento',
            items: [
              {
                label: 'Bootcamp',
                href: 'https://flutterbootcamp.com.br/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Flutter Bootcamp`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['dart'],
      },
    }),
};

module.exports = config;
