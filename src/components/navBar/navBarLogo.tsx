import React from "react";
import { Link } from "@/base-components";

const NavBarLogo: React.FC = () => (
    <Link href="/#home">
        <span className="text-3xl font-semibold text-red-400">M</span>.
        <span className="block w-min rotate-90 origin-bottom text-[12px] font-semibold">
            Nguyen
        </span>
    </Link>
);

export default NavBarLogo;
