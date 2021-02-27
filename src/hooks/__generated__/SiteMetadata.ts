/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SiteMetadata
// ====================================================

export interface SiteMetadata_site_siteMetadata {
  title: string | null;
  description: string | null;
  image: string | null;
  siteUrl: string | null;
  siteLanguage: string | null;
  siteLocale: string | null;
  twitterUsername: string | null;
  authorName: string | null;
}

export interface SiteMetadata_site {
  siteMetadata: SiteMetadata_site_siteMetadata | null;
}

export interface SiteMetadata {
  site: SiteMetadata_site | null;
}
