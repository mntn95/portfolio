import React from "react";
import { Link } from "@/base-components";
import { navbarData } from "@/assets";
import type { NavBarNavigationProps } from "@/types";

const NavBarNavigation: React.FC<NavBarNavigationProps> = ({
    layout,
    showLabelsOnHover,
    onItemClick,
}) => {
    const isRow = layout === "row";

    const containerClass = isRow
        ? "flex flex-row gap-x-10 md:gap-x-6 xxl:mr-28"
        : "flex flex-col gap-y-4";

    return (
        <div className={containerClass}>
            {navbarData.map((item, index) => {
                if (isRow) {
                    // Desktop: items as vertical mini-stacks, labels on hover only
                    return (
                        <Link
                            key={index}
                            className="group flex flex-col items-center gap-y-1 text-link hover:text-warning"
                            href={`/#${item.id}`}
                        >
                            <span className="text-2xl transition-colors">
                                {item.icon}
                            </span>
                            <span
                                className={`text-[10px] tracking-wide text-theme-light-text dark:text-theme-dark-text ${showLabelsOnHover ? "opacity-0 group-hover:opacity-100 transition-opacity duration-200" : "opacity-100"}`}
                            >
                                {item.name}
                            </span>
                        </Link>
                    );
                }

                // Mobile drawer: items stacked; inside each item arrange icon + label right
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
                            <span className="text-2xl transition-colors text-link">
                                {item.icon}
                            </span>
                            <span className="text-base md:text-lg tracking-wide text-theme-light-text dark:text-theme-dark-text">
                                {item.name}
                            </span>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default NavBarNavigation;
