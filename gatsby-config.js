module.exports = {
  flags: { PRESERVE_WEBPACK_CACHE: true },
  siteMetadata: {
    title: "The Localhost Blog",
    description:
      "This is my coding blog where I write about my coding journey.",
    image: "/pawel-czerwinski-LEbkdsB8OMg-unsplash.jpg",
    siteUrl: "https://mishabalin.github.io",
    siteLanguage: "en-GB",
    siteLocale: "en_gb",
    twitterUsername: "@mischabalin",
    authorName: "Misha Balin",
    icon: `src/images/favicon.ico`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-styletron",
      options: {
        // Prefix all generated classNames:
        prefix: "mb_",
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 590,
            },
          },
        ],
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: { path: `${__dirname}/posts`, name: "posts" },
    },
    {
      resolve: "gatsby-plugin-codegen",
      options: {
        tsFileExtension: "ts",
        globalTypesFile: "./src/__generated__/globalTypes.ts",
        watch: process.env.NODE_ENV === "development" ? true : false,
        includes: ["./src/**/*.tsx", "./src/**/*.ts"],
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/pages`,
        ignore: ["__generated__/**"],
      },
    },
  ],
};
