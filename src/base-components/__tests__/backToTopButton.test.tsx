import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "@testing-library/react";
import BackToTopButton from "../backToTopButton";

// Mock scrollTo
const mockScrollTo = jest.fn();
Object.defineProperty(window, "scrollTo", {
    writable: true,
    value: mockScrollTo,
});

describe("BackToTopButton", () => {
    beforeEach(() => {
        jest.clearAllMocks();
        Object.defineProperty(window, "pageYOffset", {
            writable: true,
            configurable: true,
            value: 0,
        });
    });

    it("should not show button when user is at top of page", () => {
        Object.defineProperty(window, "pageYOffset", {
            value: 0,
            writable: true,
        });

        render(<BackToTopButton />);

        const button = screen.getByRole("button", { name: /back to top/i });
        expect(button).toHaveClass("opacity-0", "pointer-events-none");
    });

    it("should show button when user scrolls down more than 400px", async () => {
        Object.defineProperty(window, "pageYOffset", {
            value: 0,
            writable: true,
            configurable: true,
        });

        render(<BackToTopButton />);

        const button = screen.getByRole("button", { name: /back to top/i });
        expect(button).toHaveClass("opacity-0");

        // User scrolls down - need to update scroll position and trigger event
        act(() => {
            Object.defineProperty(window, "pageYOffset", {
                value: 500,
                writable: true,
                configurable: true,
            });
        });

        // Trigger scroll event after state update
        act(() => {
            window.dispatchEvent(new Event("scroll"));
        });

        // Wait for useEffect to process the scroll event
        await waitFor(
            () => {
                expect(button).toHaveClass("opacity-100");
            },
            { timeout: 2000 },
        );
    });

    it("should hide button when user scrolls back to top", async () => {
        // Start with scroll position > 400
        Object.defineProperty(window, "pageYOffset", {
            value: 500,
            writable: true,
            configurable: true,
        });

        render(<BackToTopButton />);

        const button = screen.getByRole("button", { name: /back to top/i });

        // Trigger initial scroll event to show button
        act(() => {
            window.dispatchEvent(new Event("scroll"));
        });

        // Wait for button to show
        await waitFor(
            () => {
                expect(button).toHaveClass("opacity-100");
            },
            { timeout: 2000 },
        );

        // User scrolls back to top
        act(() => {
            Object.defineProperty(window, "pageYOffset", {
                value: 0,
                writable: true,
                configurable: true,
            });
            window.dispatchEvent(new Event("scroll"));
        });

        await waitFor(
            () => {
                expect(button).toHaveClass("opacity-0");
            },
            { timeout: 2000 },
        );
    });

    it("should scroll to top when user clicks the button", async () => {
        const user = userEvent.setup();
        Object.defineProperty(window, "pageYOffset", {
            value: 500,
            writable: true,
            configurable: true,
        });

        render(<BackToTopButton />);

        const button = screen.getByRole("button", { name: /back to top/i });

        // Trigger scroll event to show button
        act(() => {
            window.dispatchEvent(new Event("scroll"));
        });

        await waitFor(
            () => {
                expect(button).toHaveClass("opacity-100");
            },
            { timeout: 2000 },
        );

        await user.click(button);

        expect(mockScrollTo).toHaveBeenCalledWith({
            top: 0,
            behavior: "smooth",
        });
    });

    it("should have proper accessibility label", () => {
        render(<BackToTopButton />);

        const button = screen.getByRole("button", { name: /back to top/i });
        expect(button).toHaveAttribute("aria-label", "Back to top");
    });
});
