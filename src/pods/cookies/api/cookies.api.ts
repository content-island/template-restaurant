import type { LanguageCode } from '@content-island/api-client';
import type { PageMeta } from '@common/models';
import client from '@lib/client.ts';
import type { PrivacyPolicy } from './cookies.api-model';

export const getCookies = async (lang: LanguageCode): Promise<PrivacyPolicy> =>
  await client.getContent<PrivacyPolicy>({
    contentType: 'Cookies',
    language: lang,
  });

export const getCookiesMeta = async (lang: LanguageCode): Promise<PageMeta> =>
  await client.getContent<PageMeta>({
    contentType: 'PageMeta',
    'fields.pageId': 'Cookies',
    language: lang,
  });
