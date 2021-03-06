import i18n, { ReadCallback } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { I18nLanguage } from "../enums/i18nLanguage";
import { I18nNamespace } from "../enums/i18nNamespace";

i18n
  .use({
    type: "backend",
    read: (language: string, namespace: string, callback: ReadCallback) => {
      import(
        /* webpackChunkName: `i18n-[request]-[index]` */ `../i18n/${language}/${namespace}`
      )
        .then(data => {
          callback(null, data.default);
        })
        .catch(error => {
          callback(error, {});
        });
    }
  })
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // debug: process.env.NODE_ENV === "development",
    whitelist: Object.values(I18nLanguage),
    fallbackLng: {
      [I18nLanguage.ZH_CN]: ["zh"],
      [I18nLanguage.EN_US]: ["en"],
      default: [I18nLanguage.ZH_CN]
    },
    ns: [I18nNamespace.Common],
    defaultNS: I18nNamespace.Common,
    detection: {
      lookupCookie: "lang"
    },
    react: {
      useSuspense: false
    }
  });

export { i18n };
