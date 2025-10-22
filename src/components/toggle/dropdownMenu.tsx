import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { englishFlagIcon, frenchFlagIcon } from "@/assets";

interface DropdownMenuProps {
    isOpen: boolean;
    currentLanguage: string;
    onLanguageSelect: (language: string) => void;
    onClose: () => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
    isOpen,
    currentLanguage,
    onLanguageSelect,
    onClose,
}) => {
    const handleLanguageSelect = (language: string) => {
        onLanguageSelect(language);
        onClose();
    };

    const handleKeyDown = (event: React.KeyboardEvent, language: string) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            handleLanguageSelect(language);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -10 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute right-0 top-full bg-theme-background border border-border rounded-lg shadow-lg z-40"
                    role="menu"
                    aria-label="Language selection menu"
                >
                    <div className="flex flex-col">
                        <button
                            onClick={() => handleLanguageSelect("en")}
                            onKeyDown={(e) => handleKeyDown(e, "en")}
                            className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                                currentLanguage === "en"
                                    ? "bg-theme-text/10 text-theme-text"
                                    : "hover:bg-theme-text/5 text-theme-text/80"
                            }`}
                            role="menuitem"
                            aria-label="Switch to English"
                            tabIndex={0}
                        >
                            {englishFlagIcon}
                        </button>
                        <button
                            onClick={() => handleLanguageSelect("fr")}
                            onKeyDown={(e) => handleKeyDown(e, "fr")}
                            className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                                currentLanguage === "fr"
                                    ? "bg-theme-text/10 text-theme-text"
                                    : "hover:bg-theme-text/5 text-theme-text/80"
                            }`}
                            role="menuitem"
                            aria-label="Switch to French"
                            tabIndex={0}
                        >
                            {frenchFlagIcon}
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default DropdownMenu;
