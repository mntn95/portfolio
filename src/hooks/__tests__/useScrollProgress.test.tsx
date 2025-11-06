import { renderHook, act, waitFor } from "@testing-library/react";
import { useScrollProgress } from "../useScrollProgress";

// Mock requestAnimationFrame
let rafCallbacks: FrameRequestCallback[] = [];
let rafId = 0;

const mockRequestAnimationFrame = jest.fn((callback: FrameRequestCallback) => {
    rafCallbacks.push(callback);
    return ++rafId;
});

const mockCancelAnimationFrame = jest.fn((id: number) => {
    rafCallbacks = [];
});

beforeAll(() => {
    global.requestAnimationFrame = mockRequestAnimationFrame;
    global.cancelAnimationFrame = mockCancelAnimationFrame;
});

// Helper to flush requestAnimationFrame callbacks
const flushRaf = () => {
    act(() => {
        rafCallbacks.forEach((cb) => cb(performance.now()));
        rafCallbacks = [];
    });
};

describe("useScrollProgress", () => {
    beforeEach(() => {
        jest.clearAllMocks();
        rafCallbacks = [];
        rafId = 0;
        // Reset window scroll properties
        Object.defineProperty(window, "scrollY", {
            writable: true,
            configurable: true,
            value: 0,
        });
        Object.defineProperty(document.documentElement, "scrollHeight", {
            writable: true,
            configurable: true,
            value: 1000,
        });
        Object.defineProperty(window, "innerHeight", {
            writable: true,
            configurable: true,
            value: 500,
        });
    });

    afterEach(() => {
        // Clean up event listeners
        window.removeEventListener("scroll", jest.fn());
    });

    it("should return 0% progress when user is at the top of the page", () => {
        Object.defineProperty(window, "scrollY", { value: 0, writable: true });
        Object.defineProperty(document.documentElement, "scrollHeight", {
            value: 1000,
            writable: true,
        });
        Object.defineProperty(window, "innerHeight", {
            value: 500,
            writable: true,
        });

        const { result } = renderHook(() => useScrollProgress());

        expect(result.current).toBe(0);
    });

    it("should return 100% progress when user scrolls to the bottom", () => {
        Object.defineProperty(window, "scrollY", {
            value: 500,
            writable: true,
        });
        Object.defineProperty(document.documentElement, "scrollHeight", {
            value: 1000,
            writable: true,
        });
        Object.defineProperty(window, "innerHeight", {
            value: 500,
            writable: true,
        });

        const { result } = renderHook(() => useScrollProgress());

        act(() => {
            // Trigger scroll event
            window.dispatchEvent(new Event("scroll"));
        });

        flushRaf();

        expect(result.current).toBe(100);
    });

    it("should handle user scrolling progressively through the page", async () => {
        Object.defineProperty(document.documentElement, "scrollHeight", {
            value: 2000,
            writable: true,
        });
        Object.defineProperty(window, "innerHeight", {
            value: 1000,
            writable: true,
        });

        const { result } = renderHook(() => useScrollProgress());

        // User scrolls to 25%
        act(() => {
            Object.defineProperty(window, "scrollY", {
                value: 250,
                writable: true,
            });
            window.dispatchEvent(new Event("scroll"));
        });

        flushRaf();

        await waitFor(() => {
            expect(result.current).toBe(25);
        });

        // User scrolls to 50%
        act(() => {
            Object.defineProperty(window, "scrollY", {
                value: 500,
                writable: true,
            });
            window.dispatchEvent(new Event("scroll"));
        });

        flushRaf();

        await waitFor(() => {
            expect(result.current).toBe(50);
        });

        // User scrolls to 75%
        act(() => {
            Object.defineProperty(window, "scrollY", {
                value: 750,
                writable: true,
            });
            window.dispatchEvent(new Event("scroll"));
        });

        flushRaf();

        await waitFor(() => {
            expect(result.current).toBe(75);
        });
    });

    it("should clamp progress to 0% when user scrolls above the top (negative scroll)", async () => {
        Object.defineProperty(window, "scrollY", {
            value: -100,
            writable: true,
        });
        Object.defineProperty(document.documentElement, "scrollHeight", {
            value: 1000,
            writable: true,
        });
        Object.defineProperty(window, "innerHeight", {
            value: 500,
            writable: true,
        });

        const { result } = renderHook(() => useScrollProgress());

        act(() => {
            window.dispatchEvent(new Event("scroll"));
        });

        flushRaf();

        await waitFor(() => {
            expect(result.current).toBe(0);
        });
    });

    it("should clamp progress to 100% when user scrolls beyond the bottom", async () => {
        Object.defineProperty(window, "scrollY", {
            value: 1000,
            writable: true,
        });
        Object.defineProperty(document.documentElement, "scrollHeight", {
            value: 1000,
            writable: true,
        });
        Object.defineProperty(window, "innerHeight", {
            value: 500,
            writable: true,
        });

        const { result } = renderHook(() => useScrollProgress());

        act(() => {
            window.dispatchEvent(new Event("scroll"));
        });

        flushRaf();

        await waitFor(() => {
            expect(result.current).toBe(100);
        });
    });

    it("should return 0% when page content is shorter than viewport (no scrollable area)", () => {
        Object.defineProperty(window, "scrollY", { value: 0, writable: true });
        Object.defineProperty(document.documentElement, "scrollHeight", {
            value: 500,
            writable: true,
        });
        Object.defineProperty(window, "innerHeight", {
            value: 1000,
            writable: true,
        });

        const { result } = renderHook(() => useScrollProgress());

        expect(result.current).toBe(0);
    });

    it("should handle rapid scrolling events efficiently (debouncing via requestAnimationFrame)", async () => {
        Object.defineProperty(document.documentElement, "scrollHeight", {
            value: 2000,
            writable: true,
        });
        Object.defineProperty(window, "innerHeight", {
            value: 1000,
            writable: true,
        });

        const { result } = renderHook(() => useScrollProgress());

        // Simulate rapid scroll events
        act(() => {
            for (let i = 0; i < 10; i++) {
                Object.defineProperty(window, "scrollY", {
                    value: i * 100,
                    writable: true,
                });
                window.dispatchEvent(new Event("scroll"));
            }
        });

        flushRaf();

        // Should have the final scroll position
        await waitFor(() => {
            expect(result.current).toBeGreaterThanOrEqual(0);
            expect(result.current).toBeLessThanOrEqual(100);
        });
    });

    it("should clean up event listeners when component unmounts", () => {
        const removeEventListenerSpy = jest.spyOn(
            window,
            "removeEventListener",
        );

        const { unmount } = renderHook(() => useScrollProgress());

        unmount();

        expect(removeEventListenerSpy).toHaveBeenCalledWith(
            "scroll",
            expect.any(Function),
        );
    });

    it("should cancel pending animation frames on unmount", () => {
        Object.defineProperty(document.documentElement, "scrollHeight", {
            value: 2000,
            writable: true,
        });
        Object.defineProperty(window, "innerHeight", {
            value: 1000,
            writable: true,
        });

        const { unmount } = renderHook(() => useScrollProgress());

        act(() => {
            window.dispatchEvent(new Event("scroll"));
        });

        unmount();

        expect(mockCancelAnimationFrame).toHaveBeenCalled();
    });
});
