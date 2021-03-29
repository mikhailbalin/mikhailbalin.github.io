import { Link } from "gatsby";
import React from "react";
import { SiteIndexQuery_allMdx_nodes } from "../../pages/__generated__/SiteIndexQuery";
import Img from "gatsby-image";
import { themedStyled } from "../../settings/theme";

export const StyledImg = themedStyled(Img, () => ({
  borderRadius: "5px",
}));

export interface PostPreviewProps {
  post: SiteIndexQuery_allMdx_nodes;
}

export const PostPreview = ({
  post: { id, excerpt, frontmatter, fields },
}: PostPreviewProps) => {
  return (
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
  );
};
