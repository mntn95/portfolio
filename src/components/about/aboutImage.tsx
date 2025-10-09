"use client";

import * as React from "react";
import { Image } from "@/base-components";

type AboutImageT = {
    src: string;
    alt: string;
    className?: string;
};

const AboutImage: React.FC<AboutImageT> = ({
    src,
    alt,
    className = "w-[300px] lg:w-[200px] md:hidden lg:hidden",
}) => <Image src={src} alt={alt} className={className} />;

export default AboutImage;
