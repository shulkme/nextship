import dayjs from 'dayjs';
import 'dayjs/locale/en';
import 'dayjs/locale/zh-cn';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(localizedFormat);

/**
 * Set dayjs locale based on app locale
 * @param locale - App locale (en, zh, etc.)
 */
export const setDayjsLocale = (locale: string) => {
  switch (locale) {
    case 'en':
      dayjs.locale('en');
      break;
    case 'zh':
      dayjs.locale('zh-cn');
      break;
    // Add more locales as needed
    // case 'tw':
    //   dayjs.locale('zh-tw');
    //   break;
  }
};

export { dayjs };
