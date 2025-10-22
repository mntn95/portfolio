"use client";

import * as React from "react";
import { downloadIcon } from "@/assets";
import { Link } from "@/base-components";
import { useTranslation } from "@/hooks/useTranslation";

const AboutTextContent: React.FC = () => {
    const { t } = useTranslation("about");
    const textArray = t("text", { returnObjects: true }) as string[];

    return (
        <div className="relative max-w-[800px] text-justify translate-x-0">
            <ul className="text-lg sm:text-sm font-light text-theme-text lg:text-[16px] sm:text-[14px] transition-colors">
                {Object.values(textArray).map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <Link
                className="w-max flex items-center gap-x-2 mt-6 rounded-full border border-white bg-warning px-3 py-2 font-light text-white hover:bg-warning transition-colors"
                href="/my-cv.pdf"
                isDownloadLink
            >
                <span>{t("button")}</span>
                <span className="text-xl">{downloadIcon}</span>
            </Link>
        </div>
    );
};

export default AboutTextContent;
