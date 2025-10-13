"use client";

import * as React from "react";
import { downloadIcon } from "@/assets";
import { Link } from "@/base-components";

type AboutTextContentT = {
    text: string[];
};

const AboutTextContent: React.FC<AboutTextContentT> = ({ text }) => (
    <div className="relative max-w-[800px] text-justify translate-x-0">
        <ul className="text-lg sm:text-sm font-light text-theme-light-text lg:text-[16px] sm:text-[14px] dark:text-theme-dark-text transition-colors">
            {text.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
        <Link
            className="w-max flex items-center gap-x-2 mt-6 rounded-full border border-white bg-warning px-3 py-2 font-light text-white hover:bg-warning transition-colors"
            href="/my-cv.pdf"
            isDownloadLink
        >
            <span>Télécharger CV</span>
            <span className="text-xl">{downloadIcon}</span>
        </Link>
    </div>
);

export default AboutTextContent;
