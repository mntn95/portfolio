import * as React from "react";
import type { LinkProps } from "@/types";

const Link: React.FC<LinkProps> = ({
    href,
    className,
    children,
    isDownloadLink = false,
    onClick,
    target,
}) => (
    <a
        target={target}
        href={href}
        download={isDownloadLink}
        className={className}
        onClick={onClick}
    >
        {children}
    </a>
);

export { Link };
