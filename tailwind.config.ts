import type { Config } from "tailwindcss";

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
                    background: "var(--color-theme-background)",
                    surface: "var(--color-theme-surface)",
                    text: "var(--color-theme-text)",
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
