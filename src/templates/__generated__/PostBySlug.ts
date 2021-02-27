/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PostBySlug
// ====================================================

export interface PostBySlug_mdx_frontmatter_cover {
  /**
   * Copy file to static directory and return public url to it
   */
  publicURL: string | null;
}

export interface PostBySlug_mdx_frontmatter {
  title: string;
  date: any | null;
  cover: PostBySlug_mdx_frontmatter_cover | null;
}

export interface PostBySlug_mdx_fields {
  slug: string | null;
}

export interface PostBySlug_mdx {
  frontmatter: PostBySlug_mdx_frontmatter | null;
  body: string;
  excerpt: string;
  fields: PostBySlug_mdx_fields | null;
}

export interface PostBySlug {
  mdx: PostBySlug_mdx | null;
}

export interface PostBySlugVariables {
  slug: string;
}
