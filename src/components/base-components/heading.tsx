import * as React from "react";

const Heading = ({ text }: { text: string }): React.ReactNode => {
    return (
        <h1 className="text-3xl sm:text-2xl font-bold text-gray-600 mb-14 self-start">
            {text}
        </h1>
    );
};

export default Heading;
