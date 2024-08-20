import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJSON from "./en.json";
import trJSON from "./tr.json";
i18n.use(initReactI18next).init({
  resources: {
    en: { ...enJSON },
    tr: { ...trJSON },
  },
  lng: "en", // Set the initial language of the App
});
