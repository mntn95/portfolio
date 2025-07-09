"use client";
import React from "react";
import { sunIcon, moonIcon } from "@/assets";

const Toggle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [darkTheme, setDarkTheme] = React.useState(false);

    const mainRef = React.useRef<HTMLDivElement>(null);

    const addDarkTheme = () => {
        mainRef.current?.classList.add("dark");
        setDarkTheme(true);
    };

    const removeDarkTheme = () => {
        mainRef.current?.classList.remove("dark");
        setDarkTheme(false);
    };

    return (
        <main ref={mainRef}>
            <div className="bg-zinc-50 dark:bg-zinc-800">
                <div className="max-w-[1200px] xl:w-full mx-auto flex justify-center xl:px-[90px] sm:pl-[80px] sm:pr-5 overflow-hidden">
                    <button
                        onClick={() =>
                            darkTheme ? removeDarkTheme() : addDarkTheme()
                        }
                        className="fixed right-14 sm:right-10 top-10 text-yellow-600 hover:text-yellow-500"
                    >
                        <span className="absolute block rounded-full bg-zinc-50 p-1 text-4xl dark:bg-zinc-800">
                            {darkTheme ? sunIcon : moonIcon}
                        </span>
                    </button>
                    {children}
                </div>
            </div>
        </main>
    );
};
export default Toggle;
