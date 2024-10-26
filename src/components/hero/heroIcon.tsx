import * as React from "react";

const HeroIcon = ({ icon }: { icon: React.ReactNode }): React.ReactNode => (
    <a
        href="#"
        className="rounded-lg hover:bg-red-400 hover:text-white transition-colors"
    >
        {icon}
    </a>
);

export default HeroIcon;
