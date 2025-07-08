import * as React from "react";

import classNames from "classnames";

const Text = ({
    as,
    size,
}: {
    as: "span" | "p";
    size: "sm" | "md" | "lg" | "xl";
}) => {
    const textClass = classNames({
        "text-sm": size === "sm",
        "text-md": size === "md",
        "text-lg": size === "lg",
        "text-xl": size === "xl",
    });

    return as === "span" ? <span>Text</span> : <p>Text</p>;
};

export default Text;
