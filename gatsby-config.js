ALGOLIA_APP_ID = "O14HNP4P9H";
ALGOLIA_API_KEY = "3deaac354a24fa009214ac7fd9ea8f41";
ALGOLIA_INDEX_NAME = "new-index-1650382375";
// gatsby-config.js
const AlgoliaSearchQuery = `
{
  allProductsDataJson {
    nodes {
      id
      title
      price
      description
      image
      category
      rating {
        rate
      }
    }
  }
}
`;

const queries = [
  {
    query: AlgoliaSearchQuery,
    transformer: ({ data }) => data.allProductsDataJson.nodes, // optional
  },
];

module.exports = {
  siteMetadata: {
    title: `s-martRemastered`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-mdx",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-snipcartv3",
      options: {
        apiKey:
          "ZjQ4MmRmMzItNmIyNi00ZjM5LWEzODEtYWI1ZDdjNDg4NTk1NjM3ODU4ODU3NjU2OTE4ODIx",
      },
    },

    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/pages/`,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-theme-amplify-cognito`,
      options: {
        region: "eu-west",
        userPoolId: "eu-west-2_ZTj1iTbNE",
        userPoolWebClientId: "6e3irklsg1o9t4p4dpta9f2d05",
      },
    },
    {
      // This plugin must be placed last in your list of plugins to ensure that it can query all the GraphQL data
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: ALGOLIA_APP_ID,
        // Use Admin API key without GATSBY_ prefix, so that the key isn't exposed in the application
        // Tip: use Search API key with GATSBY_ prefix to access the service from within components
        apiKey: ALGOLIA_API_KEY,
        indexName: ALGOLIA_INDEX_NAME, // for all queries
        queries,
        chunkSize: 1000, // default: 1000
      },
    },
  ],
};
