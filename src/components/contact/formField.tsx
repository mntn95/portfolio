"use client";

import * as React from "react";

type FormFieldT = {
    type: "text" | "email" | "textarea" | "submit";
    placeholder?: string;
    value?: string;
    name?: string;
    required?: boolean;
    onChange?: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void;
};

const FormField: React.FC<FormFieldT> = ({
    type,
    placeholder,
    value,
    name,
    required = false,
    onChange,
    ...props
}) => {
    const baseClassName =
        "w-full border border-yellow-500 rounded-md px-4 py-2 text-sm tracking-wider outline-none";

    const getTypeSpecificClasses = () => {
        switch (type) {
            case "submit":
                return "bg-yellow-600 font-light text-white hover:bg-yellow-500 transition-colors cursor-pointer";
            case "textarea":
                return "bg-zinc-100 text-gray-500 max-h-[250px] min-h-[150px]";
            default:
                return "bg-zinc-100 text-gray-500";
        }
    };

    const finalClassName = `${baseClassName} ${getTypeSpecificClasses()}`;

    if (type === "textarea") {
        return (
            <textarea
                className={finalClassName}
                placeholder={placeholder}
                name={name}
                required={required}
                onChange={onChange}
                {...props}
            />
        );
    }

    return (
        <input
            type={type}
            className={finalClassName}
            placeholder={placeholder}
            value={value}
            name={name}
            required={required}
            onChange={onChange}
            {...props}
        />
    );
};

export default FormField;
