import { Layout } from "../containers/Layout";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import React from "react";
import SEO from "react-seo-component";
import { themedStyled } from "../settings/theme";
import {
  SiteIndexQuery,
  SiteIndexQuery_allMdx_nodes,
} from "./__generated__/SiteIndexQuery";

export const StyledImg = themedStyled(Img, () => ({
  borderRadius: "5px",
}));

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

      <div>
        {data.allMdx.nodes.map(
          ({
            id,
            excerpt,
            frontmatter,
            fields,
          }: SiteIndexQuery_allMdx_nodes) => (
            <div key={id} style={{ marginTop: "30px", marginBottom: "30px" }}>
              <Link to={fields?.slug || ""}>
                <figure>
                  {/* {frontmatter?.cover?.childImageSharp?.fluid?.sizes ? (
                    <StyledImg 
                      sizes={frontmatter.cover.childImageSharp.fluid.sizes!}
                    />
                  ) : null} */}

                  <figcaption>{frontmatter?.coverCredit}</figcaption>
                </figure>

                <h1>{frontmatter?.title}</h1>
                <p>{frontmatter?.date}</p>
                <p>{excerpt}</p>
              </Link>
            </div>
          )
        )}
      </div>
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
