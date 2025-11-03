import { useState, useEffect } from "react";

export const useIsMobile = (): boolean => {
    const [mobile, setMobile] = useState<boolean>(() => {
        if (typeof window === "undefined") {
            return false;
        }
        return window.innerWidth < 768;
    });

    const handleResize = () => {
        setMobile(window.innerWidth < 768);
    };

    useEffect(() => {
        if (typeof window === "undefined") {
            return;
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return mobile;
};
