// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MMTC',
  tagline: 'Multi-Mission Time Correlator: Accurate Time Alignment for Complex Missions',
  favicon: 'img/favicon.ico',

  url: 'https://yunks128.github.io',
  baseUrl: '/MMTC-site/',

  organizationName: 'yunks128', // GitHub org/user
  projectName: 'MMTC-site',          // GitHub repo

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Add markdown configuration for Mermaid
  markdown: {
    mermaid: true,
  },

  // Add Mermaid theme
  themes: ['@docusaurus/theme-mermaid'],
  
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: '/docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/NASA-AMMOS/MMTC/tree/main/',
          remarkPlugins: [require('mdx-mermaid')],
        },
        blog: {
          path: 'jnispice',
          routeBasePath: '/blog',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/NASA-AMMOS/MMTC/tree/main/',
          remarkPlugins: [require('mdx-mermaid')],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'MMTC',
        logo: {
          alt: 'MMTC Logo',
          src: 'img/logo.svg',
          href: '/',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'mmtcSidebar',
            position: 'left',
            label: 'Docs',
          },
          { to: '/blog', label: 'Developer Notes', position: 'left' },
          { to: '/about', label: 'About', position: 'left' },
          {
            href: 'https://github.com/NASA-AMMOS/MMTC',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
        style: 'dark',
        hideOnScroll: true,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              { label: 'User Guide', to: '/docs/user' },
              { label: 'Developer Notes', to: '/blog' },
            ],
          },
          {
            title: 'Legal',
            items: [
              { label: 'License', to: '/LICENSE' },
              { label: 'Copyright', to: '/COPYRIGHT' },
            ],
          },
          {
            title: 'Community',
            items: [
              { label: 'GitHub', href: 'https://github.com/NASA-AMMOS/MMTC' },
              { label: 'Slack', href: 'https://slack.yourdomain.com' },
              { label: 'Twitter', href: 'https://twitter.com/yourhandle' },
            ],
          },
        ],
        logo: {
          alt: 'Company Logo',
          src: 'img/logo.svg',
          href: '/',
        },
        //copyright:
        //  `Copyright © ${new Date().getFullYear()} California Institute of Technology.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

export default config;
