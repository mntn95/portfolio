import * as React from "react";

const Link = ({
    href,
    className,
    children,
    isDownloadLink = false,
}: {
    href: string;
    className: string;
    children: React.ReactNode;
    isDownloadLink?: boolean;
}): React.ReactNode => (
    <a href={href} download={isDownloadLink} className={className}>
        {children}
    </a>
);

export { Link };
