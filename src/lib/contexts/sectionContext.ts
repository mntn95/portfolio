import * as React from "react";

export type SectionContextValue = {
    id: string;
};

export const SectionContext = React.createContext<
    SectionContextValue | undefined
>(undefined);

export const useSection = (): SectionContextValue => {
    const ctx = React.useContext(SectionContext);
    if (ctx === undefined) {
        throw new Error(
            "useSection must be used within a SectionContext.Provider",
        );
    }
    return ctx;
};
