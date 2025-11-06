import { render, screen } from "@testing-library/react";
import DropdownMenu from "../dropdownMenu";

// Mock framer-motion to avoid animation issues in tests
jest.mock("framer-motion", () => ({
    motion: {
        div: ({
            children,
            ...props
        }: React.HTMLAttributes<HTMLDivElement> & {
            children: React.ReactNode;
        }) => <div {...props}>{children}</div>,
    },
    AnimatePresence: ({ children }: { children: React.ReactNode }) => (
        <>{children}</>
    ),
}));

// Mock the assets
jest.mock("@/assets", () => ({
    englishFlagIcon: <span data-testid="english-flag">🇬🇧</span>,
    frenchFlagIcon: <span data-testid="french-flag">🇫🇷</span>,
}));

describe("DropdownMenu", () => {
    const mockOnLanguageSelect = jest.fn();
    const mockOnClose = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("renders when isOpen is true", () => {
        render(
            <DropdownMenu
                isOpen={true}
                currentLanguage="en"
                onLanguageSelect={mockOnLanguageSelect}
                onClose={mockOnClose}
            />,
        );

        expect(screen.getByRole("menu")).toBeInTheDocument();
        expect(screen.getByLabelText("Switch to English")).toBeInTheDocument();
        expect(screen.getByLabelText("Switch to French")).toBeInTheDocument();
    });

    it("does not render when isOpen is false", () => {
        render(
            <DropdownMenu
                isOpen={false}
                currentLanguage="en"
                onLanguageSelect={mockOnLanguageSelect}
                onClose={mockOnClose}
            />,
        );

        expect(screen.queryByRole("menu")).not.toBeInTheDocument();
    });

    it("calls onLanguageSelect and onClose when a language is selected", () => {
        render(
            <DropdownMenu
                isOpen={true}
                currentLanguage="en"
                onLanguageSelect={mockOnLanguageSelect}
                onClose={mockOnClose}
            />,
        );

        const frenchButton = screen.getByLabelText("Switch to French");
        frenchButton.click();

        expect(mockOnLanguageSelect).toHaveBeenCalledWith("fr");
        expect(mockOnClose).toHaveBeenCalled();
    });
});
