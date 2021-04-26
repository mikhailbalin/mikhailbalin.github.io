import React from "react";
import {
  SiteIndexQuery_allMdx_nodes,
  SiteIndexQuery_allMdx_nodes_frontmatter,
} from "../../pages/__generated__/SiteIndexQuery";
import { getImage } from "gatsby-plugin-image";
import { MyHeadingLarge } from "../typography";
import {
  Content,
  Excerpt,
  Figure,
  StyledGatsbyImage,
  StyledLink,
  Date,
} from "./PostPreview.styles";

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
  const image = getImage(cover?.childImageSharp?.gatsbyImageData);

  return (
    <StyledLink to={slug} role="listitem">
      {image && (
        <Figure>
          <StyledGatsbyImage image={image} alt="Alt" />

          {/* {coverCredit && <figcaption>{coverCredit}</figcaption>} */}
        </Figure>
      )}

      <Content>
        <MyHeadingLarge>{title}</MyHeadingLarge>
        <Excerpt>{excerpt}</Excerpt>
        {date && <Date>{date}</Date>}
      </Content>
    </StyledLink>
  );
};
