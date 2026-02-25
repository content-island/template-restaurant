import type { LanguageCode } from '@content-island/api-client';

interface LanguageContent {
  language: LanguageCode;
  slug: string;
}

/**
 * Generates an object with the routes for each language from an array of multilingual content
 * @param contents - Array of objects with language and slug
 * @returns Record with language as key and the full path as value
 * @example
 * const paths = generateLanguagePaths([
 *   { language: 'en', slug: 'privacy-policy' },
 *   { language: 'es', slug: 'politica-privacidad' }
 * ]);
 * // { en: '/en/privacy-policy', es: '/es/politica-privacidad' }
 */
export const generateLanguagePaths = (contents: LanguageContent[]): Partial<Record<LanguageCode, string>> =>
  Object.fromEntries(contents.map(({ language, slug }) => [language, `/${language}/${slug}`]));
