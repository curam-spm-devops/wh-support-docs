module.exports = {
  siteMetadata: {
    title: 'Merative Support Docs (transitional)',
    description: 'New support docs for the Social Programs portfolio',
    keywords: 'wh,docs',
  },
  pathPrefix: `/wh-support-docs`,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Merative Support Docs',
        icon: 'src/images/curam-icon-512.png',
        short_name: 'Merative Support Docs',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#161616',
        display: 'browser',
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        iconPath: "./src/images/curam-icon-512.png",
        repository: {
          baseUrl: "https://github.com/WH-GovSPM-Doc/SPM-Customers",
          branch: "master",
        },
      },
    },
  ],
};
