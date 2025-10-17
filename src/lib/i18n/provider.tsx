"use client";

import { ReactNode, useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./config";

interface I18nProviderProps {
    children: ReactNode;
}

export const I18nProvider = ({ children }: I18nProviderProps) => {
    useEffect(() => {
        // Align client language with SSR html lang
        const htmlLang = document?.documentElement?.lang || "en";
        if (i18n.language !== htmlLang) {
            void i18n.changeLanguage(htmlLang);
        }
    }, []);

    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
