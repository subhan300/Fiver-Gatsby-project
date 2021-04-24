/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [`gatsby-plugin-material-ui`,
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `96xyt4ohi1q4`,
  
      accessToken:`8TF8SvKsTk1hjBrGpklrHZGoi0sYdJY31_TL-a9Ijuo` ,
    },
  },

         ]  ,
  
}
