"use client";

import * as React from "react";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

const BackToTopButton: React.FC = () => {
    const [showButton, setShowButton] = React.useState(false);

    React.useEffect(() => {
        const checkScrollHeight = () => {
            if (!showButton && window.pageYOffset > 400) {
                setShowButton(true);
            } else if (showButton && window.pageYOffset <= 400) {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", checkScrollHeight);
        return () => {
            window.removeEventListener("scroll", checkScrollHeight);
        };
    }, [showButton]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const visibility = showButton
        ? "opacity-100 pointer-events-auto"
        : "opacity-0 pointer-events-none";

    return (
        <button
            type="button"
            aria-label="Back to top"
            onClick={scrollToTop}
            className={`text-[#abb2bf] fixed z-50 right-8 bottom-8 transition-opacity duration-400 ${visibility}`}
        >
            <KeyboardDoubleArrowUpIcon sx={{ fontSize: 40 }} />
        </button>
    );
};

export default BackToTopButton;
