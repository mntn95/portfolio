"use client";
import React from "react";
import { earthIcon } from "@/assets";
import type { ToggleProps } from "@/types";
import { useLanguage } from "@/hooks/useLanguage";

import DropdownMenu from "./dropdownMenu";

const Toggle: React.FC<ToggleProps> = ({ children }) => {
    const { currentLanguage, toggleLanguage, isLoading } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const buttonRef = React.useRef<HTMLButtonElement>(null);
    const menuRef = React.useRef<HTMLDivElement>(null);

    const toggleMenu = React.useCallback(() => {
        setIsMenuOpen((prev) => !prev);
    }, []);

    const closeMenu = React.useCallback(() => {
        setIsMenuOpen(false);
    }, []);

    const handleLanguageSelect = React.useCallback(
        (language: string) => {
            if (language !== currentLanguage) {
                toggleLanguage();
            }
        },
        [currentLanguage, toggleLanguage],
    );

    const handleKeyDown = React.useCallback(
        (event: KeyboardEvent) => {
            if (event.ctrlKey && event.key === "l") {
                event.preventDefault();
                toggleMenu();
            }
            if (event.key === "Escape" && isMenuOpen) {
                event.preventDefault();
                closeMenu();
            }
        },
        [toggleMenu, closeMenu, isMenuOpen],
    );

    // Click outside to close menu
    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                isMenuOpen &&
                buttonRef.current &&
                menuRef.current &&
                !buttonRef.current.contains(event.target as Node) &&
                !menuRef.current.contains(event.target as Node)
            ) {
                closeMenu();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen, closeMenu]);

    React.useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [handleKeyDown]);

    return (
        <main>
            <div className="bg-theme-background">
                <div className="w-full mx-auto flex flex-col justify-start px-5 md:px-10 xl:px-[90px] overflow-hidden">
                    <div className="absolute right-14 sm:right-10 top-4 z-40">
                        <button
                            ref={buttonRef}
                            onClick={toggleMenu}
                            disabled={isLoading}
                            className="text-link disabled:opacity-50 relative hover:text-warning"
                            aria-label="Open language selection menu"
                            aria-expanded={isMenuOpen}
                            aria-haspopup="menu"
                            title="Language selection (Ctrl+L)"
                        >
                            {earthIcon}
                            {isLoading && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current"></div>
                                </div>
                            )}
                        </button>
                        <div ref={menuRef}>
                            <DropdownMenu
                                isOpen={isMenuOpen}
                                currentLanguage={currentLanguage}
                                onLanguageSelect={handleLanguageSelect}
                                onClose={closeMenu}
                            />
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </main>
    );
};

export default Toggle;
