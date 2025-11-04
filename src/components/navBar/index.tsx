import React from "react";
import type { NavBarProps } from "@/types";
import NavBarNavigation from "./navBarNavigation";
import MenuLineIcon from "remixicon-react/MenuLineIcon";
import { smoothScrollToId } from "@/lib/ui/navHelpers";

const NavBar: React.FC<NavBarProps> = () => {
    const [open, setOpen] = React.useState(false);
    const drawerRef = React.useRef<HTMLDivElement | null>(null);

    return (
        <nav className="w-full z-30 pointer-events-auto">
            {/* Mobile top bar: burger */}
            <div className="flex xxl:hidden absolute top-0 left-0 md:flex w-full items-center justify-between py-3 px-4 z-30">
                <button
                    type="button"
                    aria-label="Open menu"
                    aria-expanded={open}
                    onClick={() => setOpen(true)}
                    className="text-link"
                >
                    <MenuLineIcon />
                </button>
            </div>

            {/* Desktop top bar: horizontal nav */}
            <div className="absolute flex xl:hidden w-full items-center justify-end py-4 px-6 z-30">
                <NavBarNavigation layout="row" showLabelsOnHover={true} />
            </div>
            <div
                ref={drawerRef}
                role="dialog"
                aria-modal="true"
                className={`fixed inset-y-0 left-0 w-80 bg-theme-background border-r border-border overflow-y-auto transform transition-transform duration-200 ease-out z-50 block xxl:hidden ${open ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="flex items-center justify-between py-3 px-4">
                    <span className="text-sm text-theme-text">Menu</span>
                    <button
                        type="button"
                        aria-label="Close menu"
                        aria-expanded={open}
                        onClick={() => setOpen(false)}
                        className="text-link"
                    >
                        ✕
                    </button>
                </div>
                <div className="px-4 pb-6">
                    <NavBarNavigation
                        layout="col"
                        showLabelsOnHover={false}
                        onItemClick={(sectionId: string) => {
                            setOpen(false);
                            smoothScrollToId(sectionId);
                        }}
                    />
                </div>
            </div>
            {/* Overlay */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 block xxl:hidden"
                    onClick={() => setOpen(false)}
                />
            )}
        </nav>
    );
};

export default NavBar;
