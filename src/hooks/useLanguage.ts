import { useState, useEffect, useCallback } from "react";
import i18n from "@/lib/i18n/config";
import { detectBrowserLanguage } from "@/lib/i18n/helpers";

export const useLanguage = () => {
    const [currentLanguage, setCurrentLanguage] = useState<string>(() =>
        detectBrowserLanguage(),
    );
    const [isLoading, setIsLoading] = useState(false);

    const changeLanguage = useCallback(async (newLanguage: string) => {
        setIsLoading(true);

        try {
            await i18n.changeLanguage(newLanguage);
            setCurrentLanguage(newLanguage);

            if (document?.documentElement) {
                document.documentElement.lang = newLanguage;
            }
        } catch (error) {
            console.error("Error changing language:", error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        const browserLanguage = detectBrowserLanguage();
        setCurrentLanguage(browserLanguage);

        if (i18n.language !== browserLanguage) {
            void i18n.changeLanguage(browserLanguage);
        }
    }, []);

    return {
        currentLanguage,
        changeLanguage,
        isLoading,
        isFrench: currentLanguage === "fr",
        isEnglish: currentLanguage === "en",
    };
};
