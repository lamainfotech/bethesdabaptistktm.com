export type Lang = 'en' | 'ne';

export const ui = {
  en: {
    nav: {
      home: 'Home',
      aboutMenu: 'About',
      about: 'About Us',
      faith: 'Statement of Faith',
      covenant: 'Church Covenant',
      visit: 'Service Times & Location',
      sermons: 'Sermons',
      ministries: 'Ministries',
      contact: 'Contact',
      giving: 'Giving',
    },
    common: {
      readMore: 'Read more',
      comingSoon: 'Coming soon',
      address: 'Address',
      phone: 'Phone',
      email: 'Email',
      viewOnMap: 'View on map',
      translationNoticeTitle: 'Nepali translation in progress',
      translationNoticeBody:
        'This page is still being translated into Nepali. In the meantime, please see the English version.',
      viewInEnglish: 'View in English',
      footerTagline: 'An independent Baptist congregation in Kathmandu, Nepal.',
      exampleLabel: 'Example — to be confirmed',
      language: 'Language',
    },
  },
  ne: {
    nav: {
      home: 'गृहपृष्ठ',
      aboutMenu: 'हाम्रो बारे',
      about: 'हाम्रो चर्च',
      faith: 'विश्वासको वक्तव्य',
      covenant: 'चर्च करार',
      visit: 'आराधना समय र ठेगाना',
      sermons: 'प्रवचनहरू',
      ministries: 'सेवाहरू',
      contact: 'सम्पर्क',
      giving: 'दान',
    },
    common: {
      readMore: 'थप पढ्नुहोस्',
      comingSoon: 'चाँडै आउँदैछ',
      address: 'ठेगाना',
      phone: 'फोन',
      email: 'इमेल',
      viewOnMap: 'नक्सामा हेर्नुहोस्',
      translationNoticeTitle: 'नेपाली अनुवाद तयारी हुँदैछ',
      translationNoticeBody:
        'यो पृष्ठ हाल नेपालीमा अनुवाद हुँदैछ। यस बीचमा, कृपया अंग्रेजी संस्करण हेर्नुहोस्।',
      viewInEnglish: 'अंग्रेजीमा हेर्नुहोस्',
      footerTagline: 'काठमाडौंमा रहेको एक स्वतन्त्र ब्याप्टिष्ट मण्डली।',
      exampleLabel: 'उदाहरण — पुष्टि हुन बाँकी',
      language: 'भाषा',
    },
  },
} as const;

export function useTranslations(lang: Lang) {
  return ui[lang];
}
