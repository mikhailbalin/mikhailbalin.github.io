/* eslint-disable react/display-name */
import { Layout } from "../components/Layout";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
// import Dump from "components/Dump";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import React from "react";
import SEO from "react-seo-component";
import { styled } from "baseui";
import { FlexGrid, FlexGridItem, FlexGridItemProps } from "baseui/flex-grid";

const IndexWrapper = styled("main", ({ $theme }) => ({}));

const PostWrapper = styled("div", ({ $theme }) => ({}));

export const Image = styled(Img, ({ $theme }) => ({
  borderRadius: "5px",
}));

const itemProps: FlexGridItemProps = {
  backgroundColor: "mono300",
  height: "scale1000",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default ({ data }: any) => {
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

      <FlexGrid
        flexGridColumnCount={[1, 2, 4, 8]}
        flexGridColumnGap="scale800"
        flexGridRowGap="scale800"
      >
        <FlexGridItem {...itemProps}>1</FlexGridItem>
        <FlexGridItem {...itemProps}>2</FlexGridItem>
        <FlexGridItem {...itemProps}>3</FlexGridItem>
        <FlexGridItem {...itemProps}>4</FlexGridItem>
        <FlexGridItem {...itemProps}>5</FlexGridItem>
        <FlexGridItem {...itemProps}>6</FlexGridItem>
        <FlexGridItem {...itemProps}>7</FlexGridItem>
        <FlexGridItem {...itemProps}>8</FlexGridItem>
        <FlexGridItem {...itemProps}>9</FlexGridItem>
        <FlexGridItem {...itemProps}>10</FlexGridItem>
        <FlexGridItem {...itemProps}>11</FlexGridItem>
        <FlexGridItem {...itemProps}>12</FlexGridItem>
        <FlexGridItem {...itemProps}>13</FlexGridItem>
        <FlexGridItem {...itemProps}>14</FlexGridItem>
        <FlexGridItem {...itemProps}>15</FlexGridItem>
        <FlexGridItem {...itemProps}>16</FlexGridItem>
      </FlexGrid>

      <IndexWrapper>
        {/* <Dump data={data}></Dump> */}
        {data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => (
          <PostWrapper key={id}>
            <Link to={fields.slug}>
              <figure>
                {frontmatter.cover ? (
                  <Image sizes={frontmatter.cover.childImageSharp.sizes} />
                ) : null}
                <figcaption>{frontmatter.coverCredit}</figcaption>
              </figure>
              <h1>{frontmatter.title}</h1>
              <p>{frontmatter.date}</p>
              <p>{excerpt}</p>
            </Link>
          </PostWrapper>
        ))}
      </IndexWrapper>
    </Layout>
  );
};

export const query = graphql`
  query SITE_INDEX_QUERY {
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
              sizes(maxWidth: 2000, traceSVG: { color: "#639" }) {
                ...GatsbyImageSharpSizes_tracedSVG
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
