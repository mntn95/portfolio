"use client";

import * as React from "react";
import { downloadIcon } from "@/assets";
import { Button, Link } from "@/base-components";
import { useTranslation } from "@/hooks/useTranslation";

const AboutTextContent: React.FC = () => {
    const { t } = useTranslation("about");
    const textArray = t("text", { returnObjects: true }) as string[];

    return (
        <div className="relative max-w-[800px] text-justify translate-x-0">
            <ul className="text-lg sm:text-sm font-light text-theme-text lg:text-[16px] sm:text-[14px]">
                {Object.values(textArray).map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <Link href="/my-cv.pdf" isDownloadLink>
                <Button>
                    <span>{t("button")}</span>
                    <span className="text-xl">{downloadIcon}</span>
                </Button>
            </Link>
        </div>
    );
};

export default AboutTextContent;
