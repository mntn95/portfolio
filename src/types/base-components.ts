import React from "react";

export interface HeadingProps {
    text: string;
}

export interface BaseImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
}

export interface LinkProps {
    href: string;
    className?: string;
    children: React.ReactNode;
    isDownloadLink?: boolean;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

export interface HeroIconProps {
    icon: React.ReactNode;
    href: string;
    index: number;
}

export interface NavBarProps {
    orientation?: "horizontal" | "vertical";
}

export interface NavBarNavigationProps {
    layout: "row" | "col";
    showLabelsOnHover: boolean;
    onItemClick?: (id: string) => void;
}

export interface NavBarItemData {
    id: string;
    name: string;
    icon: React.ReactNode;
}
