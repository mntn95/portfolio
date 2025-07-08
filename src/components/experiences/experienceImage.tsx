"use client";

import * as React from "react";
import { Image } from "@/base-components";

type ExperienceImageT = {
    src: string;
    alt: string;
    className?: string;
};

const ExperienceImage: React.FC<ExperienceImageT> = ({
    src,
    alt,
    className = "absolute -top-4 right-96 opacity-70 lg:hidden",
}) => <Image className={className} src={src} alt={alt} />;

export default ExperienceImage;
