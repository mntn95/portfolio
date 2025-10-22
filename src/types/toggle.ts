import React from "react";

export interface LanguageIconProps {
    currentLanguage: string;
    showWhenLanguage: string;
    children: React.ReactNode;
}

export interface ToggleProps {
    children: React.ReactNode;
}
