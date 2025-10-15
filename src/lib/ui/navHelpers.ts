export const smoothScrollToId = (id: string): void => {
    if (typeof document === "undefined") return;
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: "smooth" });
    }
};

export const lockBodyScroll = (): void => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    root.classList.add("overflow-hidden");
};

export const unlockBodyScroll = (): void => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    root.classList.remove("overflow-hidden");
};

export const trapFocus = (container: HTMLElement): (() => void) => {
    const focusableSelectors = [
        "a[href]",
        "button:not([disabled])",
        "textarea:not([disabled])",
        'input[type="text"]:not([disabled])',
        'input[type="radio"]:not([disabled])',
        'input[type="checkbox"]:not([disabled])',
        "select:not([disabled])",
        '[tabindex]:not([tabindex="-1"])',
    ].join(",");

    const keydownHandler = (e: KeyboardEvent) => {
        if (e.key !== "Tab") return;
        const focusable = Array.from(
            container.querySelectorAll<HTMLElement>(focusableSelectors),
        ).filter(
            (el) =>
                !el.hasAttribute("disabled") && !el.getAttribute("aria-hidden"),
        );

        if (focusable.length === 0) return;

        const firstEl = focusable[0];
        const lastEl = focusable[focusable.length - 1];
        const active = document.activeElement as HTMLElement | null;
        const isShift = (e as KeyboardEvent).shiftKey;

        if (!active) {
            firstEl.focus();
            e.preventDefault();
            return;
        }

        if (!container.contains(active)) {
            firstEl.focus();
            e.preventDefault();
            return;
        }

        if (!isShift && active === lastEl) {
            firstEl.focus();
            e.preventDefault();
        } else if (isShift && active === firstEl) {
            lastEl.focus();
            e.preventDefault();
        }
    };

    document.addEventListener("keydown", keydownHandler);

    return () => {
        document.removeEventListener("keydown", keydownHandler);
    };
};
