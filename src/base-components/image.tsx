import * as React from "react";
import Image from "next/image";
import type { BaseImageProps } from "@/types";

const BaseImage: React.FC<BaseImageProps> = ({
    src,
    alt,
    width = 400,
    height = 400,
    className,
    priority = false,
}) => (
    <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority={priority}
        loading="eager"
    />
);

export { BaseImage as Image };
