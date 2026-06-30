import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import FR translations
import homePageFR from "./src/locales/fr/homePage.json";
import dashboardPageFR from "./src/locales/fr/dashboardPage.json";

const translations = {
	fr: {
		homePage: homePageFR,
		dashboardPage:dashboardPageFR
	},
};

const DEFAULT_LANGUAGE = "fr";

export const initializeI18n = () => {
	i18n.use(initReactI18next).init({
		resources: translations,
		fallbackLng: DEFAULT_LANGUAGE,
		lng: DEFAULT_LANGUAGE,
		interpolation: {
			escapeValue: false,
		},
		debug: false,
	});
};

export default i18n;
