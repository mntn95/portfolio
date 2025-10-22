import { useState, useEffect, useCallback } from "react";
import { reactLocalStorage } from "reactjs-localstorage";
import i18n from "@/lib/i18n/config";

export const useLanguage = () => {
    const [currentLanguage, setCurrentLanguage] = useState<string>("en");
    const [isLoading, setIsLoading] = useState(false);

    const toggleLanguage = useCallback(async () => {
        setIsLoading(true);
        const newLanguage = currentLanguage === "en" ? "fr" : "en";

        try {
            await i18n.changeLanguage(newLanguage);
            setCurrentLanguage(newLanguage);
            reactLocalStorage.set("language", newLanguage);
        } catch (error) {
            console.error("Error changing language:", error);
        } finally {
            setIsLoading(false);
        }
    }, [currentLanguage]);

    useEffect(() => {
        const savedLanguage = reactLocalStorage.get("language");
        const browserLanguage =
            typeof window !== "undefined"
                ? navigator.language.split("-")[0]
                : "en";

        const detectedLanguage =
            (savedLanguage as string) ||
            (browserLanguage === "fr" ? "fr" : "en");

        setCurrentLanguage(detectedLanguage);

        if (i18n.language !== detectedLanguage) {
            i18n.changeLanguage(detectedLanguage);
        }
    }, []);

    return {
        currentLanguage,
        setCurrentLanguage,
        toggleLanguage,
        isLoading,
        isFrench: currentLanguage === "fr",
        isEnglish: currentLanguage === "en",
    };
};
