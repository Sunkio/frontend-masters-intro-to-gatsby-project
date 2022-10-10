module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.example.com',
    title: 'Frontend Masters Intro to Gatsby',
    description: 'Frontend Masters Intro to Gatsby Course Projects',
    image:
      'https://res.cloudinary.com/jlengstorf/image/upload/v1628127675/frontend-masters/gatsby-intro/share-image.jpg'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    // This set of plugins is to enable creating MDX blog posts from the src/posts directory
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/posts/`,
      },
    },
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-plugin-layout',
        options: {
          component: require.resolve('./src/components/layout.js'),
        },
      },
    // end of MDX configuration
  ],
};
