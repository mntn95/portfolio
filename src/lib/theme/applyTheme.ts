import { THEMES, type ThemeName } from "@/lib/theme/registry";

type ThemeObject = (typeof THEMES)[ThemeName];

const setVar = (name: string, value: string) =>
    document.documentElement.style.setProperty(name, value);

export const getCssVarsFromTheme = (t: ThemeObject) => {
    const { colors } = t;
    return {
        "--color-border": colors.border,
        "--color-warning": colors.warning,
        "--color-link": colors.link,

        "--color-theme-light-background": colors.theme.light.background,
        "--color-theme-light-surface": colors.theme.light.surface,
        "--color-theme-light-text": colors.theme.light.text,

        "--color-theme-dark-background": colors.theme.dark.background,
        "--color-theme-dark-surface": colors.theme.dark.surface,
        "--color-theme-dark-text": colors.theme.dark.text,
    } as Record<string, string>;
};

export const applyTheme = (name: ThemeName) => {
    const theme = THEMES[name];
    const vars = getCssVarsFromTheme(theme);
    Object.entries(vars).forEach(([k, v]) => setVar(k, v));
    localStorage.setItem("themeName", name);
};

export const initThemeFromStorage = (fallback: ThemeName = "oneDark") => {
    const saved = (localStorage.getItem("themeName") || fallback) as ThemeName;
    const valid = saved in THEMES ? saved : fallback;
    applyTheme(valid);
    return valid;
};
