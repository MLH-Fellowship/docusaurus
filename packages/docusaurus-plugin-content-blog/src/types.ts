/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {ValidationError} from 'yup';

export interface BlogContent {
  blogPosts: BlogPost[];
  blogListPaginated: BlogPaginated[];
  blogTags: BlogTags;
  blogTagsListPath: string | null;
}

export interface DateLink {
  date: Date;
  link: string;
}

export type FeedType = 'rss' | 'atom' | 'all';

export interface PluginOptions {
  path: string;
  routeBasePath: string;
  include: string[];
  postsPerPage: number;
  blogListComponent: string;
  blogPostComponent: string;
  blogTagsListComponent: string;
  blogTagsPostsComponent: string;
  remarkPlugins: ([Function, object] | Function)[];
  rehypePlugins: string[];
  truncateMarker: RegExp;
  showReadingTime: boolean;
  feedOptions?: {
    type: FeedType;
    title?: string;
    description?: string;
    copyright: string;
    language?: string;
  };
  editUrl?: string;
  admonitions: any;
}

export interface ValidationResult {
  options?: any;
  errors?: ValidationError;
}

export interface BlogTags {
  [key: string]: BlogTag;
}

export interface BlogTag {
  name: string;
  items: string[];
  permalink: string;
}

export interface BlogPost {
  id: string;
  metadata: MetaData;
}

export interface BlogPaginatedMetadata {
  permalink: string;
  page: number;
  postsPerPage: number;
  totalPages: number;
  totalCount: number;
  previousPage: string | null;
  nextPage: string | null;
}

export interface BlogPaginated {
  metadata: BlogPaginatedMetadata;
  items: string[];
}

export interface MetaData {
  permalink: string;
  source: string;
  description: string;
  date: Date;
  tags: (Tag | string)[];
  title: string;
  readingTime?: number;
  prevItem?: Paginator;
  nextItem?: Paginator;
  truncated: boolean;
  editUrl?: string;
}

export interface Paginator {
  title: string;
  permalink: string;
}

export interface Tag {
  label: string;
  permalink: string;
}

export interface BlogItemsToMetadata {
  [key: string]: MetaData;
}

export interface TagsModule {
  [key: string]: TagModule;
}

export interface TagModule {
  allTagsPath: string;
  slug: string;
  name: string;
  count: number;
  permalink: string;
}
