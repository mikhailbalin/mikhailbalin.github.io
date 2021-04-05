import { Link } from "gatsby";
import React from "react";
import {
  SiteIndexQuery_allMdx_nodes,
  SiteIndexQuery_allMdx_nodes_frontmatter,
} from "../../pages/__generated__/SiteIndexQuery";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { themedStyled, useThemedStyletron } from "../../settings/theme";

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
  const [css] = useThemedStyletron();
  const image = getImage(cover?.childImageSharp?.gatsbyImageData);

  return (
    <StyledLink to={slug} role="listitem">
      {image && (
        <figure
          className={css({ position: "relative", width: "calc(100% / 3)" })}
        >
          <GatsbyImage
            image={image}
            alt="Alt"
            className={css({
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            })}
          />

          {/* {coverCredit && <figcaption>{coverCredit}</figcaption>} */}
        </figure>
      )}

      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          margin: "32px 8%",
          justifyContent: "center",
          alignItems: "flex-start",
        })}
      >
        <h1>{title}</h1>
        <p>{excerpt}</p>
        {date && <p>{date}</p>}
      </div>
    </StyledLink>
  );
};
