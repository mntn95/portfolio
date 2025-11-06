"use client";
import * as React from "react";

import { Button, Link } from "@/base-components";
import { aboutLinks } from "@/constants";
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
            <div className="sm:block flex gap-x-4">
                {aboutLinks.map(
                    ({ href, icon, label, isDownloadLink }, index) => (
                        <Link
                            href={href}
                            isDownloadLink={isDownloadLink}
                            target="_blank"
                            key={index}
                        >
                            <Button
                                variant={index === 0 ? "default" : "filled"}
                            >
                                <span className="text-xl">{icon}</span>
                                <span>{t(label)}</span>
                            </Button>
                        </Link>
                    ),
                )}
            </div>
        </div>
    );
};

export default AboutTextContent;
