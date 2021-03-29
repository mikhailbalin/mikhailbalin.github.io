import { Layout } from "../containers/Layout";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import React from "react";
import SEO from "react-seo-component";
import { Main } from "../containers/Main";
import { graphql } from "gatsby";
import { RecentPosts } from "../containers/RecentPosts";
import { SiteIndexQuery } from "./__generated__/SiteIndexQuery";

// eslint-disable-next-line react/display-name
export default ({ data }: { data: SiteIndexQuery }) => {
  const {
    description,
    title,
    image,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
  } = useSiteMetadata();

  return (
    <Layout>
      <SEO
        titleTemplate={title}
        title={title}
        description={description}
        image={`${siteUrl}${image}`}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
      />

      <Main />
      <RecentPosts posts={data.allMdx.nodes} />
    </Layout>
  );
};

export const query = graphql`
  query SiteIndexQuery {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date(formatString: "YYYY MMMM Do")
          cover {
            publicURL
            childImageSharp {
              fluid(maxWidth: 2000, traceSVG: { color: "#639" }) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          coverCredit
        }
        fields {
          slug
        }
      }
    }
  }
`;
