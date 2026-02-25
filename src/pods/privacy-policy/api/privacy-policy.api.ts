import type { LanguageCode } from '@content-island/api-client';
import type { PageMeta } from '@common/models';
import client from '@lib/client.ts';
import type { PrivacyPolicy } from './privacy-policy.api-model';

export const getPrivacyPolicy = async (lang: LanguageCode): Promise<PrivacyPolicy> =>
  await client.getContent<PrivacyPolicy>({
    contentType: 'PrivacyPolicy',
    language: lang,
  });

export const getPrivacyPolicyMeta = async (lang: LanguageCode): Promise<PageMeta> =>
  await client.getContent<PageMeta>({
    'fields.pageId': 'PrivacyPolicy',
    language: lang,
  });
