import { Link } from "gatsby";
import React from "react";
import {
  SiteIndexQuery_allMdx_nodes,
  SiteIndexQuery_allMdx_nodes_frontmatter,
} from "../../pages/__generated__/SiteIndexQuery";
import Img from "gatsby-image";
import { themedStyled } from "../../settings/theme";

export const StyledImg = themedStyled(Img, () => ({
  borderRadius: "5px",
}));

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
  post: { excerpt, frontmatter, slug },
}: PostPreviewProps) => {
  const { cover, coverCredit, date, title } = frontmatter;
  const fluid = cover?.childImageSharp?.fluid;

  return (
    <PostWrapper role="listitem">
      <StyledLink to={slug}>
        {fluid ? (
          <figure>
            <StyledImg
              sizes={{
                ...fluid,
                tracedSVG: fluid.tracedSVG ? fluid.tracedSVG : undefined,
              }}
            />

            {coverCredit && <figcaption>{coverCredit}</figcaption>}
          </figure>
        ) : null}

        <h1>{title}</h1>
        {date && <p>{date}</p>}
        <p>{excerpt}</p>
      </StyledLink>
    </PostWrapper>
  );
};
