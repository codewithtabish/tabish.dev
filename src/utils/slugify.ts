// utils/slug.ts

/**
 * Convert a string into a URL-friendly slug.
 * @param title The input string (e.g., blog title)
 * @returns Slug string (e.g., "my-blog-title")
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase() // lowercase
    .trim() // remove whitespace at start/end
    .replace(/[\s]+/g, "-") // replace spaces with dashes
    .replace(/[^\w-]+/g, "") // remove all non-word chars except dash
    .replace(/--+/g, "-") // replace multiple dashes with single dash
    .replace(/^-+|-+$/g, ""); // remove leading/trailing dashes
}
