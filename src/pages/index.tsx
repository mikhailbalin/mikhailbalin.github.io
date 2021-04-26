import { Layout } from "../containers/Layout";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import React from "react";
import SEO from "react-seo-component";
import { Main } from "../containers/Main";
import { graphql, PageProps } from "gatsby";
import { RecentPosts } from "../containers/RecentPosts";
import { SiteIndexQuery } from "./__generated__/SiteIndexQuery";
import { AboutMe } from "../containers/AboutMe";
import { Instagram } from "../containers/Instagram";

// eslint-disable-next-line react/display-name
export default ({ data }: PageProps<SiteIndexQuery>) => {
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
      <AboutMe />
      <RecentPosts posts={data.allMdx.nodes} />
      <Instagram />
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
          coverCredit
          cover {
            childImageSharp {
              gatsbyImageData(
                tracedSVGOptions: { color: "#639" }
                placeholder: TRACED_SVG
              )
            }
          }
        }
        fields {
          slug
        }
      }
    }
  }
`;
