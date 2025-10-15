import type { Config } from "tailwindcss";
import twColors from "tailwindcss/colors";

const config: Config = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    darkMode: "class",
    plugins: [],
    theme: {
        extend: {
            colors: {
                border: "var(--color-border)",
                warning: "var(--color-warning)",
                link: "var(--color-link)",
                theme: {
                    light: {
                        background: "var(--color-theme-light-background)",
                        surface: "var(--color-theme-light-surface)",
                        text: "var(--color-theme-light-text)",
                    },
                    dark: {
                        background: "var(--color-theme-dark-background)",
                        surface: "var(--color-theme-dark-surface)",
                        text: "var(--color-theme-dark-text)",
                    },
                },
            },
        },
        screens: {
            xxl: { min: "1401px" },
            xl: { max: "1400px" },
            lg: { max: "1150px" },
            md: { max: "767px" },
            sm: { max: "639px" },
            xs: { max: "393px" },
        },
    },
};
export default config;
