import { Link } from "gatsby";
import React from "react";
import { SiteIndexQuery_allMdx_nodes } from "../../pages/__generated__/SiteIndexQuery";
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
  post: SiteIndexQuery_allMdx_nodes;
}

export const PostPreview = ({
  post: { excerpt, frontmatter, fields },
}: PostPreviewProps) => {
  const fluid = frontmatter?.cover?.childImageSharp?.fluid;

  return (
    <PostWrapper role="listitem">
      <StyledLink to={fields?.slug || ""}>
        <figure>
          {fluid ? (
            <StyledImg
              sizes={{
                ...fluid,
                tracedSVG: fluid.tracedSVG ? fluid.tracedSVG : undefined,
              }}
            />
          ) : null}

          <figcaption>{frontmatter?.coverCredit}</figcaption>
        </figure>

        <h1>{frontmatter?.title}</h1>
        <p>{frontmatter?.date}</p>
        <p>{excerpt}</p>
      </StyledLink>
    </PostWrapper>
  );
};
