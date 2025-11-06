import { renderHook, act } from "@testing-library/react";
import { useIsMobile } from "../useIsMobile";

describe("useIsMobile", () => {
    beforeEach(() => {
        // Reset window innerWidth
        Object.defineProperty(window, "innerWidth", {
            writable: true,
            configurable: true,
            value: 1024,
        });
    });

    it("should return false when user is on desktop (viewport >= 768px)", () => {
        Object.defineProperty(window, "innerWidth", {
            value: 1024,
            writable: true,
        });

        const { result } = renderHook(() => useIsMobile());

        expect(result.current).toBe(false);
    });

    it("should return true when user is on mobile (viewport < 768px)", () => {
        Object.defineProperty(window, "innerWidth", {
            value: 375,
            writable: true,
        });

        const { result } = renderHook(() => useIsMobile());

        expect(result.current).toBe(true);
    });

    it("should update when user resizes window from desktop to mobile", () => {
        Object.defineProperty(window, "innerWidth", {
            value: 1024,
            writable: true,
        });

        const { result } = renderHook(() => useIsMobile());

        expect(result.current).toBe(false);

        // User resizes window to mobile size
        act(() => {
            Object.defineProperty(window, "innerWidth", {
                value: 375,
                writable: true,
            });
            window.dispatchEvent(new Event("resize"));
        });

        expect(result.current).toBe(true);
    });

    it("should update when user resizes window from mobile to desktop", () => {
        Object.defineProperty(window, "innerWidth", {
            value: 375,
            writable: true,
        });

        const { result } = renderHook(() => useIsMobile());

        expect(result.current).toBe(true);

        // User resizes window to desktop size
        act(() => {
            Object.defineProperty(window, "innerWidth", {
                value: 1024,
                writable: true,
            });
            window.dispatchEvent(new Event("resize"));
        });

        expect(result.current).toBe(false);
    });

    it("should handle user rotating device (landscape to portrait)", () => {
        // User starts in landscape (wider)
        Object.defineProperty(window, "innerWidth", {
            value: 1024,
            writable: true,
        });

        const { result } = renderHook(() => useIsMobile());

        expect(result.current).toBe(false);

        // User rotates to portrait (narrower)
        act(() => {
            Object.defineProperty(window, "innerWidth", {
                value: 667,
                writable: true,
            });
            window.dispatchEvent(new Event("resize"));
        });

        expect(result.current).toBe(true);
    });

    it("should clean up event listeners when component unmounts", () => {
        const removeEventListenerSpy = jest.spyOn(
            window,
            "removeEventListener",
        );

        const { unmount } = renderHook(() => useIsMobile());

        unmount();

        expect(removeEventListenerSpy).toHaveBeenCalledWith(
            "resize",
            expect.any(Function),
        );
    });
});
