import React from "react";
import { SectionTitle } from "../../components/SectionTitle";
import { Section } from "../../components/styled";
import { SiteIndexQuery_allMdx_nodes } from "../../pages/__generated__/SiteIndexQuery";
import { PostPreview } from "../../components/PostPreview";
import { themedStyled } from "../../settings/theme";

export const PostsWrapper = themedStyled("div", () => ({
  marginTop: "30px",
  marginBottom: "30px",
}));

interface RecentPostsProps {
  posts: SiteIndexQuery_allMdx_nodes[];
}

export const RecentPosts = ({ posts }: RecentPostsProps) => {
  return (
    <Section>
      <SectionTitle title="Recent Posts" />

      <PostsWrapper role="list">
        {posts.map(({ id, frontmatter, fields, excerpt }) =>
          frontmatter ? (
            <PostPreview
              key={id}
              post={{
                excerpt,
                slug: fields?.slug || "",
                frontmatter: frontmatter,
              }}
            />
          ) : null
        )}
      </PostsWrapper>
    </Section>
  );
};
