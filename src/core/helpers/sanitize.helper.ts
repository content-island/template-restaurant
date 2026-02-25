import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';

/**
 * Sanitizes HTML content for safe display in blog posts
 * Uses relaxed defaults with some additional safety measures
 * @param html - The HTML content to sanitize
 * @param options - Optional custom sanitization options
 * @returns Sanitized HTML string
 */
export const sanitizeHtmlContent = (html: string, options?: Partial<sanitizeHtml.IOptions>): string => {
  const defaultOptions: sanitizeHtml.IOptions = {
    // Use built-in defaults but add some common elements for blogs
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      img: ['src', 'alt', 'width', 'height', 'title'],
      '*': ['class', 'id'],
    },
    allowedSchemes: ['http', 'https', 'mailto'],
    allowedSchemesByTag: {
      img: ['http', 'https', 'data'],
    },
  };

  const mergedOptions = { ...defaultOptions, ...options };
  return sanitizeHtml(html, mergedOptions);
};

export const sanitizeHTMLWithMarked = async (html: string): Promise<string> => sanitizeHtmlContent(await marked(html));
