import React from "react";
import { SectionTitle } from "../../components/SectionTitle";
import { Section } from "../../components/styled";
import { SiteIndexQuery_allMdx_nodes } from "../../pages/__generated__/SiteIndexQuery";
import { PostPreview } from "../../components/PostPreview";

export const RecentPosts = ({
  posts,
}: {
  posts: SiteIndexQuery_allMdx_nodes[];
}) => {
  return (
    <Section>
      <SectionTitle title="Recent Posts" />

      {posts.map((post) => (
        <PostPreview key={post.id} post={post} />
      ))}
    </Section>
  );
};
