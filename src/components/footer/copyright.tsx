import React from "react";
import { copyRightIcon } from "@/assets";

const Copyright: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="flex items-end justify-end sm:items-center sm:justify-center md:items-center md:justify-center lg:items-center lg:justify-center">
            <span className="dark:text-theme-dark-text flex items-center gap-2 transition-colors">
                {copyRightIcon} 2024 - {currentYear} Mathieu Nguyen. Tous droits
                réservés.
            </span>
        </div>
    );
};

export default Copyright;
