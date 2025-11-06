"use client";

import React from "react";
import { copyRightIcon } from "@/constants";
import { useTranslation } from "@/hooks/useTranslation";

const Copyright: React.FC = () => {
    const { t } = useTranslation("footer");
    const currentYear = new Date().getFullYear();

    return (
        <div className="flex items-end justify-end sm:items-center sm:justify-center md:items-center md:justify-center lg:items-center lg:justify-center">
            <span className="text-theme-text flex items-center gap-2">
                {copyRightIcon} 2024 - {currentYear} Mathieu Nguyen.{" "}
                {t("copyright")}
            </span>
        </div>
    );
};

export default Copyright;
