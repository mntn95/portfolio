import * as React from "react";
import cn from "classnames";

type ButtonProps = {
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
    variant?: "default" | "filled";
};

const Button: React.FC<ButtonProps> = ({
    className,
    children,
    onClick,
    variant = "default",
}) => {
    const variants = {
        default:
            "w-max flex items-center gap-x-2 mt-6 rounded-full border border-link px-3 py-2 font-light text-link hover:bg-link hover:text-white",
        filled: "w-max flex items-center gap-x-2 mt-6 rounded-full border border-link px-3 py-2 font-light bg-link text-white hover:text-link hover:bg-transparent",
    };

    const classes = cn(variants[variant], className);

    return (
        <button type="button" className={classes} onClick={onClick}>
            {children}
        </button>
    );
};

export { Button };
