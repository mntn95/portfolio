"use client";
import React from "react";
import { reactLocalStorage } from "reactjs-localstorage";
import { sunIcon, moonIcon } from "@/assets";
import type { ToggleProps } from "@/types";
import { useTheme } from "@/hooks/useTheme";

import ThemeIcon from "./themeIcon";

const Toggle: React.FC<ToggleProps> = ({ children }) => {
    const { darkTheme, setDarkTheme } = useTheme();

    const mainRef = React.useRef<HTMLDivElement>(null);

    const toggleDarkTheme = React.useCallback(
        (value: boolean) => {
            if (value) {
                mainRef.current?.classList.add("dark");
            } else {
                mainRef.current?.classList.remove("dark");
            }
            setDarkTheme(value);
            reactLocalStorage.set("darkTheme", value);
        },
        [setDarkTheme],
    );

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
    }, [toggleDarkTheme]);

    return (
        <main ref={mainRef}>
            <div className="bg-theme-light-background dark:bg-theme-dark-background">
                <div className="w-full mx-auto flex flex-col justify-start px-5 md:px-10 xl:px-[90px] overflow-hidden">
                    <button
                        onClick={() => toggleDarkTheme(!darkTheme)}
                        className="fixed right-14 sm:right-10 top-10 text-link z-30"
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
