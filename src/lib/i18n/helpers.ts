export const detectBrowserLanguage = (): string => {
    if (typeof window === "undefined") {
        return "en"; // Default for SSR
    }

    const browserLang = navigator.language.split("-")[0];
    const supportedLanguages = ["en", "fr"];

    return supportedLanguages.includes(browserLang) ? browserLang : "en";
};
