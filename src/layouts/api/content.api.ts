import type { LanguageCode } from '@content-island/api-client';
import client from '@lib/client';
import type {
  Theme,
  PageMeta,
  Header,
  Hero,
  MenuSection,
  RestaurantSection,
  LocationSection,
  ReservationsSection,
  Footer,
} from '@models/index';

/**
 * Get theme configuration (singleton)
 */
export const getTheme = async (lang: LanguageCode): Promise<Theme> =>
  await client.getContent<Theme>({
    id: '6974c19022a84329b8c56dcd',
    contentType: 'Theme',
    language: lang,
    includeRelatedContent: true,
  });

/**
 * Get page meta (singleton)
 */
export const getPageMeta = async (lang: LanguageCode): Promise<PageMeta> =>
  await client.getContent<PageMeta>({
    'fields.pageId': 'Home',
    language: lang,
  });

/**
 * Get header/navigation content (singleton)
 */
export const getHeader = async (lang: LanguageCode): Promise<Header> =>
  await client.getContent<Header>({
    contentType: 'Header',
    language: lang,
    includeRelatedContent: true,
  });

/**
 * Get hero section content (singleton)
 */
export const getHero = async (lang: LanguageCode): Promise<Hero> =>
  await client.getContent<Hero>({
    contentType: 'Hero',
    language: lang,
  });

/**
 * Get menu section content (singleton)
 */
export const getMenuSection = async (lang: LanguageCode): Promise<MenuSection> =>
  await client.getContent<MenuSection>({
    contentType: 'MenuSection',
    language: lang,
  });

/**
 * Get restaurant section content (singleton)
 */
export const getRestaurantSection = async (lang: LanguageCode): Promise<RestaurantSection> =>
  await client.getContent<RestaurantSection>({
    contentType: 'RestaurantSection',
    language: lang,
  });

/**
 * Get location section content (singleton)
 */
export const getLocationSection = async (lang: LanguageCode): Promise<LocationSection> =>
  await client.getContent<LocationSection>({
    contentType: 'LocationSection',
    language: lang,
  });

/**
 * Get reservations/contact section content (singleton)
 */
export const getReservationsSection = async (lang: LanguageCode): Promise<ReservationsSection> =>
  await client.getContent<ReservationsSection>({
    contentType: 'ReservationsSection',
    language: lang,
  });

/**
 * Get footer content (singleton)
 */
export const getFooter = async (lang: LanguageCode): Promise<Footer> =>
  await client.getContent<Footer>({
    contentType: 'Footer',
    language: lang,
    includeRelatedContent: true,
  });

/**
 * Get Meta Data for the page (singleton)
 */
export const getHomeMetaData = async (lang: LanguageCode): Promise<PageMeta> =>
  await client.getContent<PageMeta>({
    contentType: 'PageMeta',
    language: lang,
  });
