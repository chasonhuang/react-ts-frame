import Cookies from "js-cookie";
import React from "react";
import { useTranslation } from "react-i18next";
import { i18n } from "../../common/i18n";
import { I18nLanguage } from "../../enums/i18nLanguage";
import { I18nNamespace } from "../../enums/i18nNamespace";

const i18nDemo = I18nNamespace.I18nDemo;

const Page: React.FC = () => {
  const [t] = useTranslation([i18nDemo]);

  const changeLanguage = (lng: I18nLanguage) => {
    Cookies.set("lang", lng, {
      domain: "localhost"
    });
    i18n.changeLanguage(lng);
  };

  return (
    <div style={{ padding: "10px" }}>
      <div>i18n-demo</div>
      <br />
      <div>{t("title")}</div>
      <br />
      <div>{t(`${i18nDemo}:description`, { defaultValue: "123" })}</div>
      <br />
      <div>
        <button onClick={() => changeLanguage(I18nLanguage.EN_US)}>en</button>
        <span> / </span>
        <button onClick={() => changeLanguage(I18nLanguage.ZH_CN)}>
          zh-cn
        </button>
      </div>
    </div>
  );
};

export default Page;
