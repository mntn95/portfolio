import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

// EN
import enAbout from "../../../public/locales/en/about.json";
import enFooter from "../../../public/locales/en/footer.json";
import enHero from "../../../public/locales/en/hero.json";
import enNavigation from "../../../public/locales/en/navigation.json";
import enProjects from "../../../public/locales/en/projects.json";
import enQuestions from "../../../public/locales/en/questions.json";
import enReviews from "../../../public/locales/en/reviews.json";
import enServices from "../../../public/locales/en/services.json";
import enSkills from "../../../public/locales/en/skills.json";

// FR
import frAbout from "../../../public/locales/fr/about.json";
import frFooter from "../../../public/locales/fr/footer.json";
import frHero from "../../../public/locales/fr/hero.json";
import frNavigation from "../../../public/locales/fr/navigation.json";
import frProjects from "../../../public/locales/fr/projects.json";
import frQuestions from "../../../public/locales/fr/questions.json";
import frReviews from "../../../public/locales/fr/reviews.json";
import frServices from "../../../public/locales/fr/services.json";
import frSkills from "../../../public/locales/fr/skills.json";

const resources = {
    en: {
        about: enAbout,
        footer: enFooter,
        hero: enHero,
        navigation: enNavigation,
        projects: enProjects,
        questions: enQuestions,
        reviews: enReviews,
        services: enServices,
        skills: enSkills,
    },
    fr: {
        about: frAbout,
        footer: frFooter,
        hero: frHero,
        navigation: frNavigation,
        projects: frProjects,
        questions: frQuestions,
        reviews: frReviews,
        services: frServices,
        skills: frSkills,
    },
} as const;

if (!i18n.isInitialized) {
    const instance = i18n.use(initReactI18next);

    if (typeof window !== "undefined") {
        instance.use(Backend);
    }

    void instance.init({
        resources,
        lng: "en",
        fallbackLng: "en",
        supportedLngs: ["en", "fr"],
        defaultNS: "hero",
        ns: [
            "hero",
            "about",
            "skills",
            "projects",
            "reviews",
            "services",
            "questions",
            "navigation",
            "footer",
        ],
        interpolation: { escapeValue: false },
        react: { useSuspense: false },
        returnNull: false,
        returnEmptyString: false,
        initImmediate: false, // sync on SSR
        backend: {
            loadPath: "/locales/{{lng}}/{{ns}}.json",
        },
    });
}

export default i18n;
