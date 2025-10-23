"use client";

import { ReactNode, useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./config";
import { detectBrowserLanguage } from "./helpers";

interface I18nProviderProps {
    children: ReactNode;
}

export const I18nProvider = ({ children }: I18nProviderProps) => {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const browserLang = detectBrowserLanguage();

        if (document?.documentElement) {
            document.documentElement.lang = browserLang;
        }

        if (i18n.language !== browserLang) {
            void i18n.changeLanguage(browserLang).then(() => {
                setIsReady(true);
            });
        } else {
            setIsReady(true);
        }
    }, []);

    // Wait for language detection before showing content
    if (!isReady) {
        return null; // or a loader
    }

    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
