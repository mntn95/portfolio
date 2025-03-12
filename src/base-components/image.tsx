import * as React from "react";
import Image from "next/image";

const BaseImage = ({
    src,
    alt,
    width = 400,
    height = 400,
    className,
}: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className: string;
}): React.ReactNode => (
    <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
    />
);

export { BaseImage as Image };
