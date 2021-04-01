/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SiteIndexQuery
// ====================================================

export interface SiteIndexQuery_allMdx_nodes_frontmatter_cover_childImageSharp {
  gatsbyImageData: any;
}

export interface SiteIndexQuery_allMdx_nodes_frontmatter_cover {
  /**
   * Returns the first child node of type ImageSharp or null if there are no children of given type on this node
   */
  childImageSharp: SiteIndexQuery_allMdx_nodes_frontmatter_cover_childImageSharp | null;
}

export interface SiteIndexQuery_allMdx_nodes_frontmatter {
  title: string;
  date: any | null;
  coverCredit: string | null;
  cover: SiteIndexQuery_allMdx_nodes_frontmatter_cover | null;
}

export interface SiteIndexQuery_allMdx_nodes_fields {
  slug: string | null;
}

export interface SiteIndexQuery_allMdx_nodes {
  id: string;
  excerpt: string;
  frontmatter: SiteIndexQuery_allMdx_nodes_frontmatter | null;
  fields: SiteIndexQuery_allMdx_nodes_fields | null;
}

export interface SiteIndexQuery_allMdx {
  nodes: SiteIndexQuery_allMdx_nodes[];
}

export interface SiteIndexQuery {
  allMdx: SiteIndexQuery_allMdx;
}
