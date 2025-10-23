"use client";
import React from "react";
import { Link } from "@/base-components";
import { navbarData } from "@/assets";
import { useTranslation } from "@/hooks/useTranslation";
import type { NavBarNavigationProps } from "@/types";

const NavBarNavigation: React.FC<NavBarNavigationProps> = ({
    layout,
    showLabelsOnHover,
    onItemClick,
}) => {
    const { t, i18n } = useTranslation("navigation");
    const isRow = layout === "row";

    const containerClass = isRow
        ? "flex flex-row gap-x-10 md:gap-x-6 xxl:mr-28"
        : "flex flex-col gap-y-4";

    return (
        <div className={containerClass}>
            {navbarData.map((item, index) => {
                if (isRow) {
                    return (
                        <Link
                            key={index}
                            className="group w-[3.5rem] block text-link hover:text-warning"
                            href={`/#${item.id}`}
                        >
                            <span className="group text-2xl">{item.icon}</span>
                            <span
                                suppressHydrationWarning
                                className={`text-[10px] tracking-wide text-theme-text ${showLabelsOnHover ? "opacity-0 group-hover:opacity-100 transition-opacity duration-200" : "opacity-100"}`}
                            >
                                {i18n.isInitialized
                                    ? t(item.nameKey)
                                    : item.nameKey}
                            </span>
                        </Link>
                    );
                }

                return (
                    <Link
                        key={index}
                        className="group"
                        href={`/#${item.id}`}
                        onClick={(e) => {
                            if (onItemClick) {
                                e.preventDefault();
                                onItemClick(item.id);
                            }
                        }}
                    >
                        <div className="flex flex-row items-center gap-x-3 py-2">
                            <span className="text-2xl text-link">
                                {item.icon}
                            </span>
                            <span
                                suppressHydrationWarning
                                className="text-base md:text-lg tracking-wide text-theme-text"
                            >
                                {i18n.isInitialized
                                    ? t(item.nameKey)
                                    : item.nameKey}
                            </span>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default NavBarNavigation;
