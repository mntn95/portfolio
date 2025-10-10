"use client";

import * as React from "react";
import { downloadIcon } from "@/assets";
import { Link } from "@/base-components";

type AboutTextContentT = {
    text: string[];
};

const AboutTextContent: React.FC<AboutTextContentT> = ({ text }) => (
    <div className="relative max-w-[800px] text-justify translate-x-0">
        <p className="text-lg font-light text-gray-700 lg:text-[16px] sm:text-[14px] dark:text-white/70 transition-colors">
            {text.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </p>
        <Link
            className="w-max flex items-center gap-x-2 mt-6 rounded-full border border-gray-300 bg-red-400 px-3 py-2 font-light text-white hover:bg-red-500 transition-colors"
            href="/my-cv.pdf"
            isDownloadLink
        >
            <span>Download CV</span>
            <span className="text-xl">{downloadIcon}</span>
        </Link>
    </div>
);

export default AboutTextContent;
