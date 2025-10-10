import { useState, useEffect } from "react";
import { reactLocalStorage } from "reactjs-localstorage";

export const useTheme = () => {
    const [darkTheme, setDarkTheme] = useState(false);

    useEffect(() => {
        const darkTheme = reactLocalStorage.get("darkTheme");
        const darkThemeParsed =
            darkTheme !== undefined && JSON.parse(String(darkTheme));
        const systemTheme =
            typeof window !== "undefined" &&
            window.matchMedia("(prefers-color-scheme: dark)").matches;

        const shouldUseDarkTheme =
            darkTheme === undefined ? systemTheme : darkThemeParsed;

        setDarkTheme(shouldUseDarkTheme);
    }, []);

    return { darkTheme, setDarkTheme };
};
