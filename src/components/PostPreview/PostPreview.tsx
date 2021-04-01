import { Link } from "gatsby";
import React from "react";
import {
  SiteIndexQuery_allMdx_nodes,
  SiteIndexQuery_allMdx_nodes_frontmatter,
} from "../../pages/__generated__/SiteIndexQuery";
import { GatsbyImage } from "gatsby-plugin-image";
import { themedStyled } from "../../settings/theme";

export const PostWrapper = themedStyled("div", () => ({
  marginTop: "30px",
  marginBottom: "30px",
}));

export const StyledLink = themedStyled(Link, () => ({
  display: "flex",
  minHeight: "22vw",
  marginBottom: "32px",
  backgroundColor: "#e1e3d9",
  transition: "box-shadow 400ms ease",
  color: "#151515",
  textDecoration: "none",
}));

export interface PostPreviewProps {
  post: Pick<SiteIndexQuery_allMdx_nodes, "excerpt"> & {
    slug: string;
    frontmatter: SiteIndexQuery_allMdx_nodes_frontmatter;
  };
}

export const PostPreview = ({
  post: {
    excerpt,
    frontmatter: { cover, coverCredit, date, title },
    slug,
  },
}: PostPreviewProps) => {
  return (
    <PostWrapper role="listitem">
      <StyledLink to={slug}>
        {cover?.childImageSharp && (
          <figure>
            <GatsbyImage
              image={cover.childImageSharp.gatsbyImageData}
              alt="Alt"
            />

            {coverCredit && <figcaption>{coverCredit}</figcaption>}
          </figure>
        )}

        <h1>{title}</h1>
        {date && <p>{date}</p>}
        <p>{excerpt}</p>
      </StyledLink>
    </PostWrapper>
  );
};
