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
    className?: string;
    children: React.ReactNode;
    isDownloadLink?: boolean;
}

export interface HeroIconProps {
    icon: React.ReactNode;
}

export interface NavBarProps {
    id: string;
}

export interface NavBarNavigationProps {
    currentId: string;
}

export interface NavBarItemData {
    id: string;
    name: string;
    icon: React.ReactNode;
}
