// types/blog.ts
export interface Blog {
  id: string;
  title: string;
  slug: string;
  shortDescerption: string; // keep typo if matches your DB, otherwise fix to shortDescription
  content: any;
  imageUrl?: string;
  category?: string;
  authorId?: string;
  createdAt: string;
  updatedAt: string;
  seo?: {
    id: string;
    metaTitle?: string;
    metaDescription?: string;
    canonicalUrl?: string;
    ogImageUrl?: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  author?: {
    id: string;
    name: string;
    email?: string;
  } | null;
}

export interface GetSingleBlogResponse {
  success: boolean;
  message: string;
  error?: string;
  data: Blog | null;
}


export interface GetAllBlogsResponse {
  success: boolean;
  message: string;
  error?: string;
  data: Blog[];
}
