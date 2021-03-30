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

export const RecentPosts = ({
  posts,
}: {
  posts: SiteIndexQuery_allMdx_nodes[];
}) => {
  return (
    <Section>
      <SectionTitle title="Recent Posts" />

      <PostsWrapper role="list">
        {posts.map((post) => (
          <PostPreview key={post.id} post={post} />
        ))}
      </PostsWrapper>
    </Section>
  );
};
