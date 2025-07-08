import * as React from "react";
import type { LinkProps } from "@/types";

const Link: React.FC<LinkProps> = ({
    href,
    className,
    children,
    isDownloadLink = false,
}) => (
    <a href={href} download={isDownloadLink} className={className}>
        {children}
    </a>
);

export { Link };
