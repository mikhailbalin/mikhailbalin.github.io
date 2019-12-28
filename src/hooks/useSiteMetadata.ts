import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
            image
            siteUrl
            siteLanguage
            siteLocale
            twitterUsername
            authorName
          }
        }
      }
    `
  );
  return site.siteMetadata;
};
