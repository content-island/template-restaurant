import type { LanguageCode } from '@content-island/api-client';

// Re-export for convenience
export type { LanguageCode };

// ============================================
// Base Types for Content Island
// ============================================

export interface Media {
  url: string;
  alt?: string;
  width?: number;
  height?: number;
}

export interface NavigationItem {
  id: string;
  label: string;
  url: string;
  language: LanguageCode;
}

export interface SocialLink {
  id: string;
  title: string;
  image: Media;
  url: string;
  language: LanguageCode;
}

export interface Font {
  id: string;
  name: string;
  url: string;
  language: LanguageCode;
}

// ============================================
// Content Island Models
// ============================================

export interface General {
  id: string;
  language: LanguageCode;
  lastUpdate: string; // Stores the date in ISO 8601 format. For example: 2021-09-10T19:30:00.000Z
  favIcon: Media;
}

export interface Theme {
  id: string;
  name: string;
  colorPrimary: string;
  colorSecondary: string;
  fontTitle: Font;
  fontBody: Font;
  language: LanguageCode;
}

export interface PageMeta {
  id: string;
  title: string;
  pageId: string;
  description: string;
  language: LanguageCode;
}

export interface Header {
  id: string;
  restaurantName: NavigationItem;
  Menu: NavigationItem;
  Restaurant: NavigationItem;
  Contact: NavigationItem;
  Location: NavigationItem;
  language: LanguageCode;
}

export interface Hero {
  id: string;
  title: string;
  subtitle: string;
  cta: string;
  backgroundImage: Media;
  language: LanguageCode;
}

export interface MenuSection {
  id: string;
  title: string;
  description: string;
  menuFile: Media;
  buttonText: string;
  language: LanguageCode;
}

export interface RestaurantSection {
  id: string;
  title: string;
  description: string;
  images: Media[];
  language: LanguageCode;
}

export interface LocationSection {
  id: string;
  title: string;
  description: string;
  map_url: string;
  addressTitle: string;
  address: string;
  timeTablesTitle: string;
  timeTables: string;
  language: LanguageCode;
}

export interface ReservationsSection {
  id: string;
  title: string;
  description: string;
  phone: string;
  email?: string;
  additionalText?: string;
  language: LanguageCode;
}

export interface Footer {
  id: string;
  restaurantName: string;
  motto: string;
  contactInfo: string;
  addressLine: string;
  socialMediaTitle?: string;
  socialMediaCollection?: SocialLink[];
  copyRight: string;
  cookies: NavigationItem;
  privacyPolicy: NavigationItem;
  language: LanguageCode;
}

export interface PrivacyPolicy {
  id: string;
  text?: string;
  language: LanguageCode;
}

export interface CookieBanner {
  id: string;
  title: string;
  description: string;
  learnMore: string;
  acceptAll: string;
  onlyEssential: string;
}
