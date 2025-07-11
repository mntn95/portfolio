import React from "react";

export interface ThemeIconProps {
    darkTheme: boolean;
    showWhenDark: boolean;
    children: React.ReactNode;
}

export interface ToggleProps {
    children: React.ReactNode;
}
