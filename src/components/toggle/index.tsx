"use client";
import React from "react";
import { reactLocalStorage } from "reactjs-localstorage";
import { sunIcon, moonIcon } from "@/assets";
import type { ToggleProps } from "@/types";

import ThemeIcon from "./themeIcon";

const Toggle: React.FC<ToggleProps> = ({ children }) => {
    const [darkTheme, setDarkTheme] = React.useState(false);

    const mainRef = React.useRef<HTMLDivElement>(null);

    const toggleDarkTheme = (value: boolean) => {
        if (value) {
            mainRef.current?.classList.add("dark");
        } else {
            mainRef.current?.classList.remove("dark");
        }
        setDarkTheme(value);
        reactLocalStorage.set("darkTheme", value);
    };

    React.useEffect(() => {
        const darkTheme = reactLocalStorage.get("darkTheme");
        const darkThemeParsed =
            darkTheme !== undefined && JSON.parse(String(darkTheme));
        const systemTheme =
            typeof window !== "undefined" &&
            window.matchMedia("(prefers-color-scheme: dark)").matches;

        const shouldUseDarkTheme =
            darkTheme === undefined ? systemTheme : darkThemeParsed;

        toggleDarkTheme(shouldUseDarkTheme);
    }, []);

    return (
        <main ref={mainRef}>
            <div className="bg-zinc-50 dark:bg-zinc-800">
                <div className="max-w-[1200px] xl:w-full mx-auto flex justify-center xl:px-[90px] sm:pl-[80px] sm:pr-5 overflow-hidden">
                    <button
                        onClick={() => toggleDarkTheme(!darkTheme)}
                        className="fixed right-14 sm:right-10 top-10 text-yellow-600 hover:text-yellow-500 z-40"
                    >
                        <ThemeIcon darkTheme={darkTheme} showWhenDark={false}>
                            {moonIcon}
                        </ThemeIcon>
                        <ThemeIcon darkTheme={darkTheme} showWhenDark={true}>
                            {sunIcon}
                        </ThemeIcon>
                    </button>
                    {children}
                </div>
            </div>
        </main>
    );
};
export default Toggle;
