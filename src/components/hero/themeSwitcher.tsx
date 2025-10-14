"use client";

import * as React from "react";
import { THEMES, type ThemeName } from "@/lib/theme/registry";
import { applyTheme, initThemeFromStorage } from "@/lib/theme/applyTheme";

const ThemeSwitcher: React.FC = () => {
    const [current, setCurrent] = React.useState<ThemeName>("oneDark");

    React.useEffect(() => {
        const init = initThemeFromStorage("oneDark");
        setCurrent(init);
    }, []);

    const onPick = (name: ThemeName) => {
        applyTheme(name);
        setCurrent(name);
    };

    return (
        <div className="w-full flex flex-wrap items-center justify-center gap-2 py-3 pointer-events-auto">
            {Object.keys(THEMES).map((key) => {
                const name = key as ThemeName;
                const isActive = current === name;
                return (
                    <button
                        key={name}
                        onClick={() => onPick(name)}
                        className={`px-2 py-1 text-xs rounded-md border transition-colors
                            ${isActive ? "bg-warning text-white border-border" : "bg-theme-light-surface dark:bg-theme-dark-surface text-theme-light-text dark:text-theme-dark-text border-border"}
                        `}
                        aria-pressed={isActive}
                        title={name}
                    >
                        {name}
                    </button>
                );
            })}
        </div>
    );
};

export default ThemeSwitcher;
