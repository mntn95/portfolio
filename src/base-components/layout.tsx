"use client";

import * as React from "react";
import { Heading } from "@/base-components";
import ScrollArrow from "./scrollArrow";
import { navbarData } from "@/assets";

type LayoutProps = {
    id: string;
    title?: string;
    showHeading?: boolean;
    prevId?: string;
    nextId?: string;
    children: React.ReactNode;
};

const getPrevNext = (currentId: string): { prev?: string; next?: string } => {
    const ids = navbarData.map((i) => i.id);
    const idx = ids.indexOf(currentId);
    if (idx === -1) return {};
    const prev = idx > 0 ? ids[idx - 1] : undefined;
    const next = idx < ids.length - 1 ? ids[idx + 1] : undefined;
    return { prev, next };
};

const Layout: React.FC<LayoutProps> = ({
    id,
    title,
    showHeading = true,
    prevId,
    nextId,
    children,
}) => {
    const sectionRef = React.useRef<HTMLElement | null>(null);

    const { prev, next } = React.useMemo(() => {
        const computed = getPrevNext(id);
        return {
            prev: prevId ?? computed.prev,
            next: nextId ?? computed.next,
        };
    }, [id, prevId, nextId]);

    /*     React.useEffect(() => {
        // When arriving via scroll, focus h2 if present
        const timeout = setTimeout(() => {
            const h2 =
                sectionRef.current?.querySelector<HTMLHeadingElement>("h2");
            if (h2) {
                h2.tabIndex = -1;
                h2.focus();
            }
        }, 0);
        return () => clearTimeout(timeout);
    }, []);
 */
    return (
        <section
            id={id}
            ref={sectionRef}
            className="min-h-[100dvh] relative w-full overflow-hidden"
        >
            <div
                className={`h-full sm:w-[90%] md:w-[80%] lg:w-[80%] xl:w-[90%] xxl:w-[90%] mx-auto sm:m-3 md:m-3 flex flex-col justify-center ${id === "about" ? "items-start" : "items-center"}`}
            >
                {showHeading && title && <Heading text={title} />}
                {children}
            </div>
            {prev && <ScrollArrow direction="up" targetId={prev} />}
            {next && <ScrollArrow direction="down" targetId={next} />}
        </section>
    );
};

export default Layout;
