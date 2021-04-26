import React from "react";
import {
  SiteIndexQuery_allMdx_nodes,
  SiteIndexQuery_allMdx_nodes_frontmatter,
} from "../../pages/__generated__/SiteIndexQuery";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useThemedStyletron } from "../../settings/theme";
import { MyHeadingLarge } from "../typography";
import { Content, Excerpt, StyledLink } from "./PostPreview.styles";

export interface PostPreviewProps {
  post: Pick<SiteIndexQuery_allMdx_nodes, "excerpt"> & {
    slug: string;
    frontmatter: SiteIndexQuery_allMdx_nodes_frontmatter;
  };
}

export const PostPreview = ({
  post: {
    excerpt,
    frontmatter: {
      cover,
      // coverCredit,
      date,
      title,
    },
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

      <Content>
        <MyHeadingLarge>{title}</MyHeadingLarge>
        <Excerpt>{excerpt}</Excerpt>
        {date && <time>{date}</time>}
      </Content>
    </StyledLink>
  );
};
