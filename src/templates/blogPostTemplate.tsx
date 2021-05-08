import { Layout } from "../containers/Layout";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import React from "react";
import SEO from "react-seo-component";
import { PostBySlug } from "./__generated__/PostBySlug";

type Props = {
  data: PostBySlug;
  pageContext: any;
};

// eslint-disable-next-line react/display-name
export default ({ data, pageContext }: Props) => {
  const {
    image,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
    authorName,
  } = useSiteMetadata();

  if (!data.mdx) return null;

  const { frontmatter, body, fields, excerpt } = data.mdx;

  if (!frontmatter) return null;

  const { title, date, cover } = frontmatter;
  const { previous, next } = pageContext;

  return (
    <Layout>
      <SEO
        titleTemplate={title}
        title={title}
        description={excerpt}
        image={
          cover === null ? `${siteUrl}${image}` : `${siteUrl}${cover.publicURL}`
        }
        pathname={`${siteUrl}${fields?.slug}`}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
        author={authorName}
        article={true}
        datePublished={date}
        dateModified={new Date(Date.now()).toISOString()}
      />
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>

      <MDXRenderer>{body}</MDXRenderer>

      {previous === false ? null : (
        <>
          {previous && (
            <Link to={previous.fields.slug}>
              <p>{previous.frontmatter.title}</p>
            </Link>
          )}
        </>
      )}

      {next === false ? null : (
        <>
          {next && (
            <Link to={next.fields.slug}>
              <p>{next.frontmatter.title}</p>
            </Link>
          )}
        </>
      )}
    </Layout>
  );
};

export const query = graphql`
  query PostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
        cover {
          publicURL
        }
      }
      body
      excerpt
      fields {
        slug
      }
    }
  }
`;
