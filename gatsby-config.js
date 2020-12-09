module.exports = {
  siteMetadata: {
    title: 'Anneli Valpola'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#006f87',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png' // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['material icons', 'roboto:300,400,500,700']
      }
    }
    // 'gatsby-plugin-offline',
  ]
};
