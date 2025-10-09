"use client";

import * as React from "react";
import { arrowLeftIcon, downloadIcon } from "@/assets";
import { Link } from "@/base-components";

type AboutTextContentT = {
    text: string;
};

const AboutTextContent: React.FC<AboutTextContentT> = ({ text }) => (
    <div className="relative max-w-[800px] rounded-xl bg-zinc-100 p-5 text-justify dark:bg-zinc-700 translate-x-0">
        <span className="absolute -left-5 top-20 scale-[2.5] text-zinc-100 md:hidden lg:hidden dark:text-zinc-700 transition-colors">
            {arrowLeftIcon}
        </span>
        <p className="text-lg font-light text-gray-700 first-letter:pl-3 lg:text-[16px] sm:text-[14px] dark:text-white transition-colors">
            {text}
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
