module.exports = {
  siteMetadata: {
    title: 'WH Support Docs (transitional)',
    description: 'New support docs for the Social Programs portfolio',
    keywords: 'wh,docs',
  },
  pathPrefix: `/wh-support-docs`,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'WH Support Docs',
        icon: 'src/images/favicon.svg',
        short_name: 'WH Support Docs',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#161616',
        display: 'browser',
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
    },
  ],
};
