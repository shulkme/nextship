export type Locale = (typeof locales)[number];

export const languages = [
  {
    label: 'English',
    value: 'en',
  },
  {
    label: '简体中文',
    value: 'zh',
  },
  // {
  //   label: '繁體中文',
  //   value: 'tw',
  // },
];

export const locales = languages.map((f) => f.value);
export const defaultLocale: Locale =
  (process.env.NEXT_PUBLIC_LOCALE_DEFAULT as Locale) || 'en';
