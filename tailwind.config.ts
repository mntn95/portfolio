import type { Config } from "tailwindcss";
import twColors from "tailwindcss/colors";
import {
    oneDark,
    dracula,
    nord,
    catppuccin,
    solarized,
    gruvbox,
    monokai,
    material,
    fluent,
    glassmorphism,
    tailwindUI,
    horizon,
    neumorphism,
    nightOwl,
    github,
    awwwards,
    dribbble,
    softPastelDark,
} from "./src/lib/theme_collection";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    plugins: [],
    theme: {
        extend: {
            colors: {
                ...monokai.colors,
            },
        },
        screens: {
            xl: { max: "1400px" },
            lg: { max: "1150px" },
            md: { max: "767px" },
            sm: { max: "639px" },
            xs: { max: "393px" },
        },
    },
};
export default config;
