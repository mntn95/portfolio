import React from "react";

export interface HeadingProps {
    text: string;
}

export interface BaseImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className: string;
}

export interface LinkProps {
    href: string;
    className: string;
    children: React.ReactNode;
    isDownloadLink?: boolean;
}

export interface HeroIconProps {
    icon: React.ReactNode;
}
