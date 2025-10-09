import React from "react";
import type { NavBarProps } from "@/types";
import NavBarLogo from "./navBarLogo";
import NavBarNavigation from "./navBarNavigation";
import NavBarCopyright from "./navBarCopyright";

const NavBar: React.FC<NavBarProps> = ({ id }) => (
    <div className="dark:bg-zinc-800 bg-zinc-50 w-[70px] h-full fixed left-0 top-0 flex flex-col justify-between border-r border-gray-200 px-4 py-10 xl:py-6 z-10">
        <NavBarLogo />
        <NavBarNavigation currentId={id} />
        <NavBarCopyright />
    </div>
);

export default NavBar;
