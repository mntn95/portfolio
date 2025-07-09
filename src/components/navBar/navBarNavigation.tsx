import React from "react";
import { isPair, Link } from "@/base-components";
import { navbarData } from "@/assets";
import type { NavBarNavigationProps } from "@/types";

const NavBarNavigation: React.FC<NavBarNavigationProps> = ({ currentId }) => (
    <div className="flex flex-col gap-y-3 sm:gap-y-2">
        {navbarData.map((item, index) => (
            <Link
                key={index}
                className="group flex flex-col items-center gap-y-2"
                href={`/#${item.id}`}
            >
                <span
                    className={`text-2xl group-hover:scale-125 transition-all ${item.id === currentId ? "text-red-500 scale-110" : "text-yellow-600 scale-100"}`}
                >
                    {item.icon}
                </span>
                <span
                    className={`text-[10px] tracking-wide opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-center ${isPair(index) ? "translate-x-2" : "-translate-x-2"} ${item.id === currentId && "translate-x-0 opacity-100"}`}
                >
                    {item.name}
                </span>
            </Link>
        ))}
    </div>
);

export default NavBarNavigation;
