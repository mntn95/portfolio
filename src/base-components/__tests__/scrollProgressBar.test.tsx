import { render, screen, waitFor } from "@testing-library/react";
import { act } from "@testing-library/react";
import ScrollProgressBar from "../scrollProgressBar";
import { useScrollProgress } from "@/hooks/useScrollProgress";

// Mock the hook
jest.mock("@/hooks/useScrollProgress");

const mockUseScrollProgress = useScrollProgress as jest.MockedFunction<
    typeof useScrollProgress
>;

describe("ScrollProgressBar", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should render progress bar with 0% when user is at top", () => {
        mockUseScrollProgress.mockReturnValue(0);

        render(<ScrollProgressBar />);

        const progressBar = screen.getByRole("progressbar");
        expect(progressBar).toBeInTheDocument();
        expect(progressBar).toHaveAttribute("aria-valuenow", "0");
        expect(progressBar).toHaveStyle({ width: "0%" });
    });

    it("should update progress bar when user scrolls to 50%", async () => {
        mockUseScrollProgress.mockReturnValue(0);

        const { rerender } = render(<ScrollProgressBar />);

        const progressBar = screen.getByRole("progressbar");
        expect(progressBar).toHaveStyle({ width: "0%" });

        // User scrolls to middle
        mockUseScrollProgress.mockReturnValue(50);

        act(() => {
            rerender(<ScrollProgressBar />);
        });

        await waitFor(() => {
            expect(progressBar).toHaveStyle({ width: "50%" });
            expect(progressBar).toHaveAttribute("aria-valuenow", "50");
        });
    });

    it("should show 100% progress when user reaches bottom", () => {
        mockUseScrollProgress.mockReturnValue(100);

        render(<ScrollProgressBar />);

        const progressBar = screen.getByRole("progressbar");
        expect(progressBar).toHaveStyle({ width: "100%" });
        expect(progressBar).toHaveAttribute("aria-valuenow", "100");
    });

    it("should have proper accessibility attributes", () => {
        mockUseScrollProgress.mockReturnValue(75);

        render(<ScrollProgressBar />);

        const progressBar = screen.getByRole("progressbar");
        expect(progressBar).toHaveAttribute("aria-label", "Scroll progress");
        expect(progressBar).toHaveAttribute("aria-valuemin", "0");
        expect(progressBar).toHaveAttribute("aria-valuemax", "100");
        expect(progressBar).toHaveAttribute("aria-valuenow", "75");
    });

    it("should update progress bar as user scrolls progressively", async () => {
        mockUseScrollProgress.mockReturnValue(0);

        const { rerender } = render(<ScrollProgressBar />);

        const progressBar = screen.getByRole("progressbar");

        // User scrolls to 25%
        mockUseScrollProgress.mockReturnValue(25);
        act(() => {
            rerender(<ScrollProgressBar />);
        });
        await waitFor(() => {
            expect(progressBar).toHaveStyle({ width: "25%" });
        });

        // User scrolls to 75%
        mockUseScrollProgress.mockReturnValue(75);
        act(() => {
            rerender(<ScrollProgressBar />);
        });
        await waitFor(() => {
            expect(progressBar).toHaveStyle({ width: "75%" });
        });
    });
});
