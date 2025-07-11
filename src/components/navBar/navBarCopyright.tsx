import React from "react";
import { copyRightIcon } from "@/assets";

const NavBarCopyright: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <p className="flex items-center justify-center text-[13px]  xs:text-[11px] text-gray-500 mt-6">
            <span className="absolute left-1/2 w-max flex items-center -rotate-90 origin-bottom-left tracking-wider dark:text-gray-200 transition-colors">
                {copyRightIcon} 2019 - {currentYear}
            </span>
        </p>
    );
};

export default NavBarCopyright;
